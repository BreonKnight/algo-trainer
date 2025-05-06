import { PATTERN_KEYS } from "./types.ts";
import { algorithmPatterns } from "./patterns";
import { allMonsterHunterPatterns } from "./monsterHunterPatternsCombined";

// Check if all patterns have regular implementations
const missingRegularPatterns = PATTERN_KEYS.filter((key) => !algorithmPatterns[key]);

// Check if all patterns have Monster Hunter implementations
const missingMonsterHunterPatterns = PATTERN_KEYS.filter(
  (key) => !allMonsterHunterPatterns.has(key)
);

// Log results
console.log("Pattern Verification Results:");
console.log("----------------------------");

if (missingRegularPatterns.length > 0) {
  console.log("\nMissing Regular Patterns:");
  missingRegularPatterns.forEach((pattern) => console.log(`- ${pattern}`));
} else {
  console.log("\n✓ All patterns have regular implementations");
}

if (missingMonsterHunterPatterns.length > 0) {
  console.log("\nMissing Monster Hunter Patterns:");
  missingMonsterHunterPatterns.forEach((pattern) => console.log(`- ${pattern}`));
} else {
  console.log("\n✓ All patterns have Monster Hunter implementations");
}

// Export results for potential use in other files
export const patternVerificationResults = {
  missingRegularPatterns,
  missingMonsterHunterPatterns,
  totalPatterns: PATTERN_KEYS.length,
  regularPatternsCount: Object.keys(algorithmPatterns).length,
  monsterHunterPatternsCount: allMonsterHunterPatterns.size,
};
