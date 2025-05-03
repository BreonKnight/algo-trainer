import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PATTERN_KEYS } from "../types.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper function to normalize strings for comparison
function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "") // Remove all non-alphanumeric characters
    .replace(/\s+/g, ""); // Remove all whitespace
}

// Helper function to find similar strings
function findSimilarStrings(target, candidates, threshold = 0.7) {
  const normalizedTarget = normalizeString(target);
  const similar = [];

  for (const candidate of candidates) {
    const normalizedCandidate = normalizeString(candidate);
    if (normalizedTarget === normalizedCandidate) continue;

    // Calculate Levenshtein distance
    const distance = levenshteinDistance(normalizedTarget, normalizedCandidate);
    const similarity =
      1 -
      distance / Math.max(normalizedTarget.length, normalizedCandidate.length);

    if (similarity >= threshold) {
      similar.push({ candidate, similarity });
    }
  }

  return similar.sort((a, b) => b.similarity - a.similarity);
}

// Levenshtein distance implementation
function levenshteinDistance(a, b) {
  const matrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + substitutionCost
      );
    }
  }

  return matrix[b.length][a.length];
}

// Validate pattern content structure
function validatePatternContent(content) {
  const requiredSections = ["Monster Hunter Context", "Example:"];

  // Check for all formats of time complexity
  const hasTimeComplexity =
    content.includes("Time Complexity:") ||
    content.includes("Operations:") ||
    content.includes("Time complexity:") ||
    content.includes("Time:") ||
    content.includes("Time complexity");

  // Check for all formats of space complexity
  const hasSpaceComplexity =
    content.includes("Space Complexity:") ||
    content.includes("Space:") ||
    content.includes("Space complexity:") ||
    content.includes("Space:") ||
    content.includes("Space complexity");

  const missingSections = requiredSections.filter(
    (section) => !content.includes(section)
  );

  if (!hasTimeComplexity) {
    missingSections.push("Time Complexity");
  }
  if (!hasSpaceComplexity) {
    missingSections.push("Space Complexity");
  }

  return missingSections;
}

// Check for duplicate patterns
function findDuplicatePatterns(patternFiles) {
  const patternContents = new Map();
  const duplicates = [];

  for (const file of patternFiles) {
    const filePath = path.join(__dirname, "..", file);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf-8");
    const patternMatches = content.match(
      /new Map<PatternKey, string>\(\[([\s\S]*?)\]\)/g
    );

    if (patternMatches) {
      patternMatches.forEach((match) => {
        const keyMatch = match.match(/"([^"]+)" as PatternKey/);
        if (keyMatch) {
          const key = keyMatch[1];
          const patternContent = match;

          if (patternContents.has(key)) {
            duplicates.push({
              key,
              files: [patternContents.get(key), file],
            });
          } else {
            patternContents.set(key, file);
          }
        }
      });
    }
  }

  return duplicates;
}

function collectPatternKeys(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const patternKeys = [];
  const patternContents = [];

  // Match pattern keys in Map declarations
  const mapMatches = content.match(
    /new Map<PatternKey, string>\(\[([\s\S]*?)\]\)/g
  );
  if (mapMatches) {
    mapMatches.forEach((mapContent) => {
      const keyMatches = mapContent.match(/"([^"]+)" as PatternKey,?/g);
      if (keyMatches) {
        keyMatches.forEach((match) => {
          const key = match.replace(/" as PatternKey,?/g, "").replace(/"/g, "");
          patternKeys.push(key);
          patternContents.push(mapContent);
        });
      }
    });
  }

  // Match pattern keys in Record declarations
  const recordMatches = content.match(
    /Record<string, AlgorithmPattern> = {([\s\S]*?)}/g
  );
  if (recordMatches) {
    recordMatches.forEach((recordContent) => {
      const keyMatches = recordContent.match(/"([^"]+)":/g);
      if (keyMatches) {
        keyMatches.forEach((match) => {
          const key = match.replace(/":/g, "").replace(/"/g, "");
          patternKeys.push(key);
          patternContents.push(recordContent);
        });
      }
    });
  }

  return { patternKeys, patternContents };
}

function checkKeyExistence(key) {
  const patternFiles = [
    "monsterHunterPatterns.ts",
    "monsterHunterPatternsExtended.ts",
    "monsterHunterPatternsExtended2.ts",
    "monsterHunterPatternsExtended3.ts",
    "monsterHunterPatternsExtended4.ts",
    "monsterHunterPatternsExtended5.ts",
    "monsterHunterPatternsExtended6.ts",
    "monsterHunterPatternsExtended7.ts",
    "monsterHunterPatternsExtended8.ts",
    "monsterHunterTestData.ts",
    "patterns/greedy/index.ts",
    "patterns/divide-and-conquer/index.ts",
    "patterns/dynamic-programming/index.ts",
    "patterns/greedy/fractional-knapsack.ts",
    "patterns/greedy/greedy-huffman-coding.ts",
    "patterns/greedy/greedy-job-scheduling.ts",
    "patterns/greedy/greedy-activity-selection.ts",
  ];

  for (const file of patternFiles) {
    const filePath = path.join(__dirname, "..", file);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf-8");
    // Check for both exact matches and potential variations
    if (
      content.includes(`"${key}" as PatternKey`) ||
      content.includes(`"${key}" as PatternKey,`) ||
      content.includes(`"${key}":`) ||
      content.includes(key.replace(/\s+/g, "")) ||
      content.includes(key.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
}

function validatePatternKeys() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const patternFiles = [
    "monsterHunterPatterns.ts",
    "monsterHunterPatternsExtended.ts",
    "monsterHunterPatternsExtended2.ts",
    "monsterHunterPatternsExtended3.ts",
    "monsterHunterPatternsExtended4.ts",
    "monsterHunterPatternsExtended5.ts",
    "monsterHunterPatternsExtended6.ts",
    "monsterHunterPatternsExtended7.ts",
    "monsterHunterPatternsExtended8.ts",
    "monsterHunterTestData.ts",
    "patterns/greedy/index.ts",
    "patterns/divide-and-conquer/index.ts",
    "patterns/dynamic-programming/index.ts",
    "patterns/greedy/fractional-knapsack.ts",
    "patterns/greedy/greedy-huffman-coding.ts",
    "patterns/greedy/greedy-job-scheduling.ts",
    "patterns/greedy/greedy-activity-selection.ts",
  ];

  const testDataFile = "monsterHunterTestData.ts";
  const mainPatternFiles = patternFiles.filter((file) => file !== testDataFile);
  const declaredPatternKeys = new Set();
  const testDataKeys = new Set();

  console.log("\n🔍 Validating pattern keys and content...\n");
  console.log("=".repeat(80));

  const allPatternKeys = new Set();
  const invalidPatternKeys = new Set();
  const contentIssues = [];
  const similarPatterns = new Map();

  // Check for duplicates first
  const duplicates = findDuplicatePatterns(patternFiles);
  if (duplicates.length > 0) {
    console.log("\n❌ Found duplicate patterns:");
    console.log("-".repeat(40));
    duplicates.forEach(({ key, files }) => {
      console.log(`  🔄 ${key} appears in: ${files.join(", ")}`);
    });
  }

  for (const file of patternFiles) {
    const filePath = path.join(__dirname, "..", file);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    // Handle test data file separately
    if (file === testDataFile) {
      const { patternKeys } = collectPatternKeys(filePath);
      console.log(`\n📁 Validating ${file}:`);
      console.log("-".repeat(40));
      patternKeys.forEach((key) => {
        testDataKeys.add(key);
        console.log(`  ✅ ${key}`);
      });
      continue;
    }

    const { patternKeys, patternContents } = collectPatternKeys(filePath);
    console.log(`\n📁 Validating ${file}:`);
    console.log("-".repeat(40));

    patternKeys.forEach((key, index) => {
      declaredPatternKeys.add(key);

      const isValid = PATTERN_KEYS.includes(key);
      console.log(`  ${isValid ? "✅" : "❌"} ${key}`);
      allPatternKeys.add(key);

      if (!isValid) invalidPatternKeys.add(key);

      // Skip content validation for test data files
      if (!file.includes("TestData")) {
        const missingSections = validatePatternContent(patternContents[index]);
        if (missingSections.length > 0) {
          contentIssues.push({
            key,
            file,
            missingSections,
          });
        }
      }

      const similar = findSimilarStrings(key, Array.from(allPatternKeys));
      if (similar.length > 0) {
        similarPatterns.set(key, similar);
      }
    });
  }

  // Report invalid keys
  if (invalidPatternKeys.size > 0) {
    console.log(`\n❌ Found ${invalidPatternKeys.size} invalid pattern keys`);
    console.log("Invalid keys:", Array.from(invalidPatternKeys).join(", "));
  } else {
    console.log("\n✨ All pattern keys are valid (exist in types.ts) ✨");
  }

  // Report content issues
  if (contentIssues.length > 0) {
    console.log("\n⚠️ Pattern content issues:");
    console.log("-".repeat(40));
    contentIssues.forEach(({ key, file, missingSections }) => {
      console.log(
        `  ❌ ${key} in ${file} is missing sections: ${missingSections.join(
          ", "
        )}`
      );
    });
    console.log("\nNote: Each pattern should include:");
    console.log("  - Time Complexity (or Time: or Operations:)");
    console.log("  - Space Complexity (or Space:)");
    console.log("  - Monster Hunter Context");
    console.log("  - Example with visual representation");
  }

  // Report similar patterns
  if (similarPatterns.size > 0) {
    console.log("\n🔍 Similar pattern names found:");
    console.log("-".repeat(40));
    similarPatterns.forEach((similar, key) => {
      console.log(`  🔎 ${key} is similar to:`);
      similar.forEach(({ candidate, similarity }) => {
        console.log(
          `    - ${candidate} (${(similarity * 100).toFixed(1)}% similar)`
        );
      });
    });
  }

  const missingPatterns = Array.from(declaredPatternKeys).filter(
    (key) => !testDataKeys.has(key)
  );
  if (missingPatterns.length > 0) {
    console.log("\n❌ Missing test data for these patterns:");
    console.log("-".repeat(40));
    missingPatterns.forEach((key) => {
      console.log(`  ❌ ${key}`);
    });
  } else {
    console.log("\n✨ All patterns have test data ✨");
  }

  console.log("=".repeat(80));
}

// Run the validation
validatePatternKeys();
