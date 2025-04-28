import { AlgorithmPattern } from "../types";

// Import all pattern categories
import { sortingPatterns } from "./sorting";
import { searchingPatterns } from "./searching";
import { arrayPatterns } from "./array";
import { dynamic_programmingPatterns } from "./dynamic-programming";
import { greedyPatterns } from "./greedy";
import { backtrackingPatterns } from "./backtracking";
import { graphPatterns } from "./graph";
import { treePatterns } from "./tree";
import { data_structuresPatterns } from "./data-structures";
import { stringPatterns } from "./string";
import { otherPatterns } from "./other";

// Combine all patterns
export const algorithmPatterns: Record<string, AlgorithmPattern> = {
  ...Object.entries({
    ...sortingPatterns,
    ...searchingPatterns,
    ...arrayPatterns,
    ...dynamic_programmingPatterns,
    ...greedyPatterns,
    ...backtrackingPatterns,
    ...graphPatterns,
    ...treePatterns,
    ...data_structuresPatterns,
    ...stringPatterns,
    ...otherPatterns
  }).reduce((acc, [_, patterns]) => ({ ...acc, ...patterns }), {})
};
