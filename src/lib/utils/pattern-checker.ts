import { PatternKey } from "@/lib/patterns/types";

export interface PatternCheckResult {
  missingPatterns: {
    monsterHunterTestData: string[];
    monsterHunterExplanations: string[];
    monsterHunterPatterns: string[];
    patterns: string[];
    patternMapping: string[];
  };
}

export async function checkPatternFiles(): Promise<PatternCheckResult> {
  const result: PatternCheckResult = {
    missingPatterns: {
      monsterHunterTestData: [],
      monsterHunterExplanations: [],
      monsterHunterPatterns: [],
      patterns: [],
      patternMapping: [],
    },
  };

  try {
    // Import and check patterns using dynamic imports
    const [
      { monsterHunterTestDataPattern },
      { monsterHunterGuidePattern },
      { monsterHunterPattern },
      { PATTERN_KEYS },
      { patternMapping },
    ] = await Promise.all([
      import(
        "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-test-data"
      ),
      import(
        "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-guide"
      ),
      import(
        "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-pattern"
      ),
      import("@/lib/patterns/types"),
      import("@/lib/pseudocode/utils/pattern-mapping"),
    ]);

    // Get all pattern keys
    const allPatternKeys = [...PATTERN_KEYS] as PatternKey[];

    // Check each pattern exists in all required files
    allPatternKeys.forEach((patternKey) => {
      if (!monsterHunterTestDataPattern?.title) {
        result.missingPatterns.monsterHunterTestData.push(patternKey);
      }
      if (!monsterHunterGuidePattern?.title) {
        result.missingPatterns.monsterHunterExplanations.push(patternKey);
      }
      if (!monsterHunterPattern?.title) {
        result.missingPatterns.monsterHunterPatterns.push(patternKey);
      }
      if (!PATTERN_KEYS.includes(patternKey)) {
        result.missingPatterns.patterns.push(patternKey);
      }
      if (!patternMapping[patternKey as keyof typeof patternMapping]) {
        result.missingPatterns.patternMapping.push(patternKey);
      }
    });
  } catch (error) {
    console.error("Error checking patterns:", error);
  }

  return result;
}

export function logPatternCheckResults(results: PatternCheckResult): void {
  Object.entries(results.missingPatterns).forEach(([category, patterns]) => {
    if (patterns.length > 0) {
      console.warn(`Missing patterns in ${category}:`, patterns);
    }
  });
}
