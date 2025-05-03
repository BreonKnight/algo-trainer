import { AlgorithmPattern, PatternKey } from "../types/pattern-types.ts";

// Import all pattern categories
import { arrayPatterns } from "./array/index.ts";
import { backtrackingPatterns } from "./backtracking/index.ts";
import { dataStructurePatterns } from "./data-structures/index.ts";
import { divideAndConquerPatterns } from "./divide-and-conquer/index.ts";
import { dynamicProgrammingPatterns } from "./dynamic-programming/index.ts";
import { graphPatterns } from "./graph/index.ts";
import { greedyPatterns } from "./greedy/index.ts";
import { matrixPatterns } from "./matrix/index.ts";
import { numberTheoryPatterns } from "./number-theory/index.ts";
import { otherPatterns } from "./other/index.ts";
import { recursionPatterns } from "./recursion/index.ts";
import { searchingPatterns } from "./searching/index.ts";
import { sortingPatterns } from "./sorting/index.ts";
import { stringPatterns } from "./string/index.ts";
import { treePatterns } from "./tree/index.ts";

// Combine all patterns
export const algorithmPatterns: Record<string, AlgorithmPattern> = {
  ...arrayPatterns,
  ...backtrackingPatterns,
  ...dataStructurePatterns,
  ...divideAndConquerPatterns,
  ...dynamicProgrammingPatterns,
  ...graphPatterns,
  ...greedyPatterns,
  ...matrixPatterns,
  ...Object.fromEntries(
    numberTheoryPatterns.map((pattern) => [pattern.title, pattern])
  ),
  ...otherPatterns,
  ...recursionPatterns,
  ...searchingPatterns,
  ...sortingPatterns,
  ...stringPatterns,
  ...treePatterns,
};

export * from "./data-structures/union-find.ts";

// DEBUG: List patterns missing Monster Hunter guides
import { monsterHunterExplanations } from "../monsterHunterExplanations.ts";

export function logPatternsMissingMonsterHunterGuides() {
  const allPatternKeys = Object.keys(algorithmPatterns);
  const missingPatterns = allPatternKeys.filter(
    (key) => !monsterHunterExplanations[key as PatternKey]
  );
  console.log("Patterns missing Monster Hunter guides:", missingPatterns);
  return missingPatterns;
}
