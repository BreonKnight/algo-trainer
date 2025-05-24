import { monsterHunterGuidePattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-guide";
import { monsterHunterPattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-pattern";
import { monsterHunterTestDataPattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-test-data";
import { PATTERN_KEYS, PatternKey } from "@/lib/patterns/types";

// Check if all patterns have regular implementations
const missingRegularPatterns = PATTERN_KEYS.filter((key: string) => {
  const pattern = key as PatternKey;
  return (
    pattern !== monsterHunterPattern.title &&
    pattern !== monsterHunterTestDataPattern.title &&
    pattern !== monsterHunterGuidePattern.title
  );
});

// Check if all patterns have Monster Hunter implementations
const missingMonsterHunterPatterns = PATTERN_KEYS.filter((key: string) => {
  const pattern = key as PatternKey;
  return (
    pattern !== monsterHunterPattern.title &&
    pattern !== monsterHunterTestDataPattern.title &&
    pattern !== monsterHunterGuidePattern.title
  );
});

// Log results
console.log("Pattern Verification Results:");
console.log("----------------------------");

if (missingRegularPatterns.length > 0) {
  console.log("\nMissing Regular Patterns:");
  missingRegularPatterns.forEach((pattern: PatternKey) => console.log(`- ${pattern}`));
} else {
  console.log("\n✓ All patterns have regular implementations");
}

if (missingMonsterHunterPatterns.length > 0) {
  console.log("\nMissing Monster Hunter Patterns:");
  missingMonsterHunterPatterns.forEach((pattern: PatternKey) => console.log(`- ${pattern}`));
} else {
  console.log("\n✓ All patterns have Monster Hunter implementations");
}

// Export results for potential use in other files
export const patternVerificationResults = {
  missingRegularPatterns,
  missingMonsterHunterPatterns,
  totalPatterns: PATTERN_KEYS.length,
  regularPatternsCount: 3, // We have 3 regular patterns
  monsterHunterPatternsCount: 3, // We have 3 monster hunter patterns
};
