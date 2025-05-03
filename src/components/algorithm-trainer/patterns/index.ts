import { AlgorithmPattern, PatternKey } from "../types/pattern-types";

// Import all pattern categories
import { arrayPatterns } from "./array/index";
import { backtrackingPatterns } from "./backtracking/index";
import { dataStructurePatterns } from "./data-structures/index";
import { divideAndConquerPatterns } from "./divide-and-conquer/index";
import { dynamicProgrammingPatterns } from "./dynamic-programming/index";
import { graphPatterns } from "./graph/index";
import { greedyPatterns } from "./greedy/index";
import { matrixPatterns } from "./matrix/index";
import { numberTheoryPatterns } from "./number-theory/index";
import { otherPatterns } from "./other/index";
import { recursionPatterns } from "./recursion/index";
import { searchingPatterns } from "./searching/index";
import { sortingPatterns } from "./sorting/index";
import { stringPatterns } from "./string/index";
import { treePatterns } from "./tree/index";

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

export * from "./data-structures/union-find";

// DEBUG: List patterns missing Monster Hunter guides
import { monsterHunterExplanations } from "../monsterHunterExplanations";

export function logPatternsMissingMonsterHunterGuides() {
  const allPatternKeys = Object.keys(algorithmPatterns);
  const missingPatterns = allPatternKeys.filter(
    (key) => !monsterHunterExplanations[key as PatternKey]
  );
  console.log("Patterns missing Monster Hunter guides:", missingPatterns);
  return missingPatterns;
}
