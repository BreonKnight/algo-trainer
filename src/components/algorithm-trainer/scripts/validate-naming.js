import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PATTERN_KEYS } from "../types.ts";

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

function collectPatternKeys(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const patternKeys = [];

  // Match pattern keys in Map declarations
  const mapMatches = content.match(
    /new Map<PatternKey, string>\(\[([\s\S]*?)\]\)/g
  );
  if (mapMatches) {
    mapMatches.forEach((mapContent) => {
      const keyMatches = mapContent.match(/"([^"]+)" as PatternKey/g);
      if (keyMatches) {
        keyMatches.forEach((match) => {
          const key = match.replace(/" as PatternKey/g, "").replace(/"/g, "");
          patternKeys.push(key);
        });
      }
    });
  }

  return patternKeys;
}

function validatePatternMappingAndPseudocode() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const patternMappingPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "lib",
    "pseudocode",
    "utils",
    "pattern-mapping.ts"
  );
  const pseudocodePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "lib",
    "pseudocode",
    "index.tsx"
  );

  console.log(
    "\n🔍 Validating pattern-mapping.ts and index.tsx consistency...\n"
  );
  console.log("=".repeat(80));

  // Read pattern-mapping.ts
  const patternMappingContent = fs.readFileSync(patternMappingPath, "utf-8");
  const patternMappingMatches =
    patternMappingContent.match(/"([^"]+)": "([^"]+)"/g);
  const patternMappingKeys = new Set();
  const patternMappingValues = new Set();

  if (patternMappingMatches) {
    patternMappingMatches.forEach((match) => {
      const [_, key, value] = match.match(/"([^"]+)": "([^"]+)"/);
      patternMappingKeys.add(key);
      patternMappingValues.add(value);
    });
  }

  // Read index.tsx
  const pseudocodeContent = fs.readFileSync(pseudocodePath, "utf-8");
  const pseudocodeMatches = pseudocodeContent.match(/"([^"]+)": \w+Pattern/g);
  const pseudocodeKeys = new Set();

  if (pseudocodeMatches) {
    pseudocodeMatches.forEach((match) => {
      const [_, key] = match.match(/"([^"]+)":/);
      pseudocodeKeys.add(key);
    });
  }

  // Find patterns in pattern-mapping.ts that don't have implementations in index.tsx
  const missingImplementations = [...patternMappingValues].filter(
    (value) => !pseudocodeKeys.has(value)
  );

  // Find patterns in index.tsx that don't have mappings in pattern-mapping.ts
  const missingMappings = [...pseudocodeKeys].filter(
    (key) => !patternMappingValues.has(key)
  );

  // Find patterns in pattern-mapping.ts that are not in PATTERN_KEYS
  const invalidPatternKeys = [...patternMappingKeys].filter(
    (key) => !PATTERN_KEYS.includes(key)
  );

  // Check for similar names in missing implementations
  if (missingImplementations.length > 0) {
    console.log("\n❌ Missing Implementations:");
    console.log("-".repeat(40));
    missingImplementations.forEach((pattern) => {
      const similar = findSimilarStrings(pattern, [...pseudocodeKeys]);
      console.log(`  🔴 ${pattern}`);
      if (similar.length > 0) {
        console.log(`    🔍 Similar patterns found:`);
        similar.forEach(({ candidate, similarity }) => {
          console.log(
            `      ⚡ ${candidate} (${(similarity * 100).toFixed(1)}% similar)`
          );
        });
      }
    });
  }

  // Check for similar names in missing mappings
  if (missingMappings.length > 0) {
    console.log("\n❌ Missing Mappings:");
    console.log("-".repeat(40));
    missingMappings.forEach((pattern) => {
      const similar = findSimilarStrings(pattern, [...patternMappingValues]);
      console.log(`  🔴 ${pattern}`);
      if (similar.length > 0) {
        console.log(`    🔍 Similar patterns found:`);
        similar.forEach(({ candidate, similarity }) => {
          console.log(
            `      ⚡ ${candidate} (${(similarity * 100).toFixed(1)}% similar)`
          );
        });
      }
    });
  }

  // Check for similar names in invalid pattern keys
  if (invalidPatternKeys.length > 0) {
    console.log("\n❌ Invalid Pattern Keys:");
    console.log("-".repeat(40));
    invalidPatternKeys.forEach((key) => {
      const similar = findSimilarStrings(key, PATTERN_KEYS);
      console.log(`  🔴 ${key}`);
      if (similar.length > 0) {
        console.log(`    🔍 Similar patterns found:`);
        similar.forEach(({ candidate, similarity }) => {
          console.log(
            `      ⚡ ${candidate} (${(similarity * 100).toFixed(1)}% similar)`
          );
        });
      }
    });
  }

  if (
    missingImplementations.length === 0 &&
    missingMappings.length === 0 &&
    invalidPatternKeys.length === 0
  ) {
    console.log("\n✨ All patterns are properly mapped and implemented ✨");
    console.log("=".repeat(80));
  }
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
  ];

  console.log("\n🔍 Validating pattern keys...\n");
  console.log("=".repeat(80));

  const allPatternKeys = new Set();
  const invalidPatternKeys = new Set();

  for (const file of patternFiles) {
    const filePath = path.join(__dirname, "..", file);
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filePath}`);
      continue;
    }

    const patternKeys = collectPatternKeys(filePath);
    console.log(`\n📁 Pattern keys found in ${file}:`);
    console.log("-".repeat(40));
    patternKeys.forEach((key) => {
      const isValid = PATTERN_KEYS.includes(key);
      console.log(`  ${isValid ? "✅" : "❌"} ${key}`);
      allPatternKeys.add(key);
      if (!isValid) {
        invalidPatternKeys.add(key);
      }
    });
  }

  if (invalidPatternKeys.size > 0) {
    console.log("\n❌ Invalid Pattern Keys Summary:");
    console.log("-".repeat(40));
    console.log(`  🔴 Total invalid keys: ${invalidPatternKeys.size}`);
    console.log("\n🔍 Invalid keys found (not in types.ts):");
    console.log("-".repeat(40));
    invalidPatternKeys.forEach((key) => {
      const similar = findSimilarStrings(key, PATTERN_KEYS);
      console.log(`  🔴 ${key}`);
      if (similar.length > 0) {
        console.log(`    🔍 Similar patterns found:`);
        similar.forEach(({ candidate, similarity }) => {
          console.log(
            `      ⚡ ${candidate} (${(similarity * 100).toFixed(1)}% similar)`
          );
        });
      }
    });
  } else {
    console.log("\n✨ All pattern keys are valid (exist in types.ts) ✨");
    console.log("=".repeat(80));
  }
}

function validateMonsterHunterExplanations() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const explanationsPath = path.join(
    __dirname,
    "..",
    "monsterHunterExplanations.ts"
  );

  console.log("\n🔍 Validating monsterHunterExplanations.ts...\n");
  console.log("=".repeat(80));

  const content = fs.readFileSync(explanationsPath, "utf-8");
  const patternKeys = [];

  // Match pattern keys in the object literal, handling both quoted and unquoted keys
  const matches = content.match(/(?:"([^"]+)"|(\w+)):\s*{\s*title:/g);
  if (matches) {
    matches.forEach((match) => {
      // Extract the key, handling both quoted and unquoted cases
      const key = match.replace(/:.*/, "").trim().replace(/"/g, "");
      patternKeys.push(key);
    });
  }

  const invalidKeys = patternKeys.filter((key) => !PATTERN_KEYS.includes(key));

  if (invalidKeys.length > 0) {
    console.log("\n❌ Invalid Pattern Keys in Explanations:");
    console.log("-".repeat(40));
    console.log(`  🔴 Total invalid keys: ${invalidKeys.length}`);
    console.log("\n🔍 Invalid keys found:");
    console.log("-".repeat(40));
    invalidKeys.forEach((key) => {
      const similar = findSimilarStrings(key, PATTERN_KEYS);
      console.log(`  🔴 ${key}`);
      if (similar.length > 0) {
        console.log(`    🔍 Similar patterns found:`);
        similar.forEach(({ candidate, similarity }) => {
          console.log(
            `      ⚡ ${candidate} (${(similarity * 100).toFixed(1)}% similar)`
          );
        });
      }
    });
  } else {
    console.log(
      "\n✨ All pattern keys in monsterHunterExplanations.ts are valid ✨"
    );
    console.log("=".repeat(80));
  }
}

// Run all validations
console.log("\n🚀 Starting Pattern Validation Suite 🚀");
console.log("=".repeat(80));

validatePatternKeys();
validatePatternMappingAndPseudocode();
validateMonsterHunterExplanations();

console.log("\n🏁 Validation Complete 🏁");
console.log("=".repeat(80));
