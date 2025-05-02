import { AlgorithmPattern, PatternKey } from "../types";

// Import all pattern categories
import { sortingPatterns } from "./sorting";
import { searchingPatterns } from "./searching";
import { arrayPatterns } from "./array";
import { dynamicProgrammingPatterns } from "./dynamic-programming";
import { greedyPatterns } from "./greedy";
import { backtrackingPatterns } from "./backtracking";
import { graphPatterns } from "./graph";
import { treePatterns } from "./tree";
import { dataStructurePatterns } from "./data-structures";
import { stringPatterns } from "./string";
import { otherPatterns } from "./other";
import { recursionPatterns } from "./recursion";
import { divideAndConquerPatterns } from "./divide-and-conquer";
import { matrixPatterns } from "./matrix";
import { numberTheoryPatterns } from "./number-theory";

// Combine all patterns
export const algorithmPatterns: Record<string, AlgorithmPattern> = {
  ...sortingPatterns,
  ...searchingPatterns,
  ...arrayPatterns,
  ...dynamicProgrammingPatterns,
  ...greedyPatterns,
  ...backtrackingPatterns,
  ...graphPatterns,
  ...treePatterns,
  ...dataStructurePatterns,
  ...stringPatterns,
  ...otherPatterns,
  ...recursionPatterns,
  ...divideAndConquerPatterns,
  ...matrixPatterns,
  ...Object.fromEntries(
    numberTheoryPatterns.map((pattern) => [pattern.title, pattern])
  ),
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
