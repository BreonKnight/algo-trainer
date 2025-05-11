import fs from "fs";
import path from "path";
import { PATTERN_KEYS } from "../lib/patterns/types";

// Read patterns.json
const patternsPath = path.join(process.cwd(), "src/lib/pseudocode/patterns.json");
const patterns = JSON.parse(fs.readFileSync(patternsPath, "utf-8"));

// Get all pattern names from patterns.json
const patternNames = Object.keys(patterns).map((key: string) => patterns[key].name);

// Get all keys from PATTERN_KEYS
const patternKeys = PATTERN_KEYS;

// Find patterns in PATTERN_KEYS but not in patterns.json
const missingInJson = patternKeys.filter((key: string) => !patternNames.includes(key));

// Find patterns in patterns.json but not in PATTERN_KEYS
const extraInJson = patternNames.filter((name: string) => !patternKeys.includes(name));

console.log("Patterns in PATTERN_KEYS but missing from patterns.json:");
console.log(missingInJson);
console.log("\nPatterns in patterns.json but not in PATTERN_KEYS:");
console.log(extraInJson);

// Check for case mismatches
const caseMismatches = patternKeys.filter((key: string) => {
  const normalizedKey = key.toLowerCase();
  return patternNames.some((name: string) => name.toLowerCase() === normalizedKey && name !== key);
});

if (caseMismatches.length > 0) {
  console.log("\nCase mismatches found:");
  caseMismatches.forEach((key: string) => {
    const matchingName = patternNames.find(
      (name: string) => name.toLowerCase() === key.toLowerCase()
    );
    console.log(`PATTERN_KEYS: "${key}" vs patterns.json: "${matchingName}"`);
  });
}

// Check for patterns with different names but same type
const patternsByType = new Map<string, string[]>();
patternNames.forEach((name: string) => {
  const pattern =
    patterns[Object.keys(patterns).find((key: string) => patterns[key].name === name)!];
  if (!patternsByType.has(pattern.type)) {
    patternsByType.set(pattern.type, []);
  }
  patternsByType.get(pattern.type)!.push(name);
});

console.log("\nPatterns grouped by type:");
patternsByType.forEach((names, type) => {
  console.log(`\n${type}:`);
  names.forEach((name: string) => console.log(`  - ${name}`));
});
