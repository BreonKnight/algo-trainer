const fs = require("fs");
const path = require("path");

// Read patterns.json
const patternsPath = path.join(process.cwd(), "src/lib/pseudocode/patterns.json");
const patterns = JSON.parse(fs.readFileSync(patternsPath, "utf-8"));

// Read types.ts
const typesPath = path.join(process.cwd(), "src/lib/patterns/types.ts");
const typesContent = fs.readFileSync(typesPath, "utf-8");

// Extract PATTERN_KEYS from types.ts
const patternKeysMatch = typesContent.match(/PATTERN_KEYS\s*=\s*\[([\s\S]*?)\]/);
if (!patternKeysMatch) {
  console.error("Could not find PATTERN_KEYS in types.ts");
  process.exit(1);
}

const patternKeys = patternKeysMatch[1]
  .split(",")
  .map((key) => key.trim().replace(/['"]/g, ""))
  .filter((key) => key);

// Get all pattern names from patterns.json
const patternNames = Object.keys(patterns).map((key) => patterns[key].name);

// Find patterns in PATTERN_KEYS but not in patterns.json
const missingInJson = patternKeys.filter((key) => !patternNames.includes(key));

// Find patterns in patterns.json but not in PATTERN_KEYS
const extraInJson = patternNames.filter((name) => !patternKeys.includes(name));

console.log("Patterns in PATTERN_KEYS but missing from patterns.json:");
console.log(missingInJson);
console.log("\nPatterns in patterns.json but not in PATTERN_KEYS:");
console.log(extraInJson);

// Check for case mismatches
const caseMismatches = patternKeys.filter((key) => {
  const normalizedKey = key.toLowerCase();
  return patternNames.some((name) => name.toLowerCase() === normalizedKey && name !== key);
});

if (caseMismatches.length > 0) {
  console.log("\nCase mismatches found:");
  caseMismatches.forEach((key) => {
    const matchingName = patternNames.find((name) => name.toLowerCase() === key.toLowerCase());
    console.log(`PATTERN_KEYS: "${key}" vs patterns.json: "${matchingName}"`);
  });
}

// Check for patterns with different names but same type
const patternsByType = new Map();
patternNames.forEach((name) => {
  const pattern = patterns[Object.keys(patterns).find((key) => patterns[key].name === name)];
  if (!patternsByType.has(pattern.type)) {
    patternsByType.set(pattern.type, []);
  }
  patternsByType.get(pattern.type).push(name);
});

console.log("\nPatterns grouped by type:");
patternsByType.forEach((names, type) => {
  console.log(`\n${type}:`);
  names.forEach((name) => console.log(`  - ${name}`));
});
