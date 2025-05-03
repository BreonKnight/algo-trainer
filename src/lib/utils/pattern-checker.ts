import { PatternKey } from "../../components/algorithm-trainer/types";

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
      { monsterHunterTestData },
      { monsterHunterExplanations },
      { monsterHunterPatterns },
      { PATTERN_KEYS },
      { patternMapping },
    ] = await Promise.all([
      import("../../components/algorithm-trainer/monsterHunterTestData"),
      import("../../components/algorithm-trainer/monsterHunterExplanations"),
      import("../../components/algorithm-trainer/monsterHunterPatterns"),
      import("../../components/algorithm-trainer/types"),
      import("../pseudocode/utils/pattern-mapping"),
    ]);

    // Get all pattern keys
    const allPatternKeys = PATTERN_KEYS as PatternKey[];

    // Check each pattern exists in all required files
    allPatternKeys.forEach((patternKey) => {
      if (!monsterHunterTestData.has(patternKey)) {
        result.missingPatterns.monsterHunterTestData.push(patternKey);
      }
      if (
        !monsterHunterExplanations[
          patternKey as keyof typeof monsterHunterExplanations
        ]
      ) {
        result.missingPatterns.monsterHunterExplanations.push(patternKey);
      }
      if (!monsterHunterPatterns.has(patternKey)) {
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
