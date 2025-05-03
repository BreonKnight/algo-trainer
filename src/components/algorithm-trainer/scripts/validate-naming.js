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
  ];

  for (const file of patternFiles) {
    const filePath = path.join(__dirname, "..", file);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf-8");
    // Check for both exact matches and potential variations
    if (
      content.includes(`"${key}"`) ||
      content.includes(`'${key}'`) ||
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

  if (invalidPatternKeys.size === 0) {
    console.log("\n✨ All pattern keys are valid (exist in types.ts) ✨");
  } else {
    console.log(`\n❌ Found ${invalidPatternKeys.size} invalid pattern keys`);
    console.log("Invalid keys:", Array.from(invalidPatternKeys).join(", "));
  }
  console.log("=".repeat(80));

  // Check for unused pattern keys
  const usedKeys = new Set(allPatternKeys);
  const unusedKeys = PATTERN_KEYS.filter((key) => !usedKeys.has(key));

  if (unusedKeys.length > 0) {
    console.log("\n📋 Unused Pattern Keys (Not Errors - Just Informational):");
    console.log("-".repeat(40));
    console.log(
      `Found ${unusedKeys.length} pattern keys in types.ts that are not currently used:`
    );

    const actuallyUnusedKeys = [];
    const potentiallyUsedKeys = [];

    unusedKeys.forEach((key) => {
      if (checkKeyExistence(key)) {
        potentiallyUsedKeys.push(key);
      } else {
        actuallyUnusedKeys.push(key);
      }
    });

    if (potentiallyUsedKeys.length > 0) {
      console.log("\n🔍 Keys that might be used (found in pattern files):");
      potentiallyUsedKeys.forEach((key) => {
        console.log(`  🔎 ${key}`);
      });
    }

    if (actuallyUnusedKeys.length > 0) {
      console.log("\n📌 Keys that are definitely not used:");
      actuallyUnusedKeys.forEach((key) => {
        console.log(`  📌 ${key}`);
      });
    }

    console.log(
      "\nNote: These are not errors - they are just keys that are defined but not yet implemented."
    );
  } else {
    console.log("\n✨ All pattern keys in types.ts are being used ✨");
  }
  console.log("=".repeat(80));
}

// Run the validation
validatePatternKeys();
