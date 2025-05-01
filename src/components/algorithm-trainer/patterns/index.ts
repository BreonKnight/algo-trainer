import { AlgorithmPattern } from "../types";

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
