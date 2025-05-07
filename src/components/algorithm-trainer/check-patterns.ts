import { monsterHunterPatterns } from "@/src/components/algorithm-trainer/monsterHunterPatterns";
import { monsterHunterPatternsExtended } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended";
import { monsterHunterPatternsExtended2 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended2";
import { monsterHunterPatternsExtended3 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended3";
import { monsterHunterPatternsExtended4 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended4";
import { monsterHunterPatternsExtended5 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended5";
import { monsterHunterPatternsExtended6 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended6";
import { monsterHunterPatternsExtended7 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended7";
import { monsterHunterPatternsExtended8 } from "@/src/components/algorithm-trainer/monsterHunterPatternsExtended8";

// Function to get all pattern keys from a Map
function getPatternKeys(map: Map<string, string>): string[] {
  return Array.from(map.keys());
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
const extendedKeys = getPatternKeys(monsterHunterPatternsExtended);
const extended2Keys = getPatternKeys(monsterHunterPatternsExtended2);
const extended3Keys = getPatternKeys(monsterHunterPatternsExtended3);
const extended4Keys = getPatternKeys(monsterHunterPatternsExtended4);
const extended5Keys = getPatternKeys(monsterHunterPatternsExtended5);
const extended6Keys = getPatternKeys(monsterHunterPatternsExtended6);
const extended7Keys = getPatternKeys(monsterHunterPatternsExtended7);
const extended8Keys = getPatternKeys(monsterHunterPatternsExtended8);
const mainKeys = getPatternKeys(monsterHunterPatterns);

// Combine all keys
const allKeys = [
  ...extendedKeys,
  ...extended2Keys,
  ...extended3Keys,
  ...extended4Keys,
  ...extended5Keys,
  ...extended6Keys,
  ...extended7Keys,
  ...extended8Keys,
  ...mainKeys,
];

// Check for duplicates
const duplicates = findDuplicateKeys(allKeys);

// Check for missing keys in main monsterHunterPatterns
const missingInMain = findMissingKeys(allKeys, mainKeys);

// Print results
console.log("Pattern Key Analysis:");
console.log("--------------------");
console.log(`Total unique patterns: ${new Set(allKeys).size}`);
console.log(`Total patterns (including duplicates): ${allKeys.length}`);
console.log("\nDuplicate patterns found:");
console.log(duplicates.length > 0 ? duplicates : "None");
console.log("\nPatterns missing in main monsterHunterPatterns:");
console.log(missingInMain.length > 0 ? missingInMain : "None");

// Export results for use in other files
export const patternAnalysis = {
  totalUniquePatterns: new Set(allKeys).size,
  totalPatterns: allKeys.length,
  duplicates,
  missingInMain,
};
