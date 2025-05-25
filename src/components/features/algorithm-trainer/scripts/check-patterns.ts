import { monsterHunterGuidePattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-guide";
import { monsterHunterPattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-pattern";
import { monsterHunterTestDataPattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-test-data";
import { patternMapping } from '@algo-trainer/shared/utils/pattern-mapping';

// Function to get all pattern keys from a pattern object
function getPatternKeys(pattern: { title: string }): string[] {
  return [pattern.title];
}

// Function to check for duplicate keys
function findDuplicateKeys(keys: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const key of keys) {
    if (seen.has(key)) {
      duplicates.add(key);
    }
    seen.add(key);
  }

  return Array.from(duplicates);
}

// Function to check for missing keys
function findMissingKeys(allKeys: string[], mapKeys: string[]): string[] {
  const mapKeySet = new Set(mapKeys);
  return allKeys.filter((key) => !mapKeySet.has(key));
}

// Get all pattern keys from each file
const patternKeys = [
  ...getPatternKeys(monsterHunterPattern),
  ...getPatternKeys(monsterHunterGuidePattern),
  ...getPatternKeys(monsterHunterTestDataPattern),
];

// Check for duplicates
const duplicates = findDuplicateKeys(patternKeys);

// Check for missing keys in pattern mapping
const missingInMapping = findMissingKeys(patternKeys, Object.keys(patternMapping));

// Print results
console.log("Pattern Key Analysis:");
console.log("--------------------");
console.log(`Total unique patterns: ${new Set(patternKeys).size}`);
console.log(`Total patterns: ${patternKeys.length}`);
console.log("\nDuplicate patterns found:");
console.log(duplicates.length > 0 ? duplicates : "None");
console.log("\nPatterns missing in pattern mapping:");
console.log(missingInMapping.length > 0 ? missingInMapping : "None");

// Export results for use in other files
export const patternAnalysis = {
  totalUniquePatterns: new Set(patternKeys).size,
  totalPatterns: patternKeys.length,
  duplicates,
  missingInMapping,
};
