import { AlgorithmPattern } from "../../types";
import { matrix_spiral_recursivePattern } from "./matrix-spiral-recursive";

import { matrix_spiral_traversalPattern } from "./matrix-spiral-traversal";

import { matrix_traversal_recursivePattern } from "./matrix-traversal-recursive";

import { matrix_traversalPattern } from "./matrix-traversal";

import { kadanes_algorithmPattern } from "./kadanes-algorithm";

import { prefix_sumPattern } from "./prefix-sum";

import { two_pointersPattern } from "./two-pointers";

import { bit_manipulationPattern } from "./bit-manipulation";

import { sliding_windowPattern } from "./sliding-window";

import { two_sum_two_pointersPattern } from "./two-sum-two-pointers";

import { two_sumPattern } from "./two-sum";


export const arrayPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Matrix Spiral Recursive": matrix_spiral_recursivePattern,

  "Matrix Spiral Traversal": matrix_spiral_traversalPattern,

  "Matrix Traversal Recursive": matrix_traversal_recursivePattern,

  "Matrix Traversal": matrix_traversalPattern,

  "Kadane's Algorithm": kadanes_algorithmPattern,

  "Prefix Sum": prefix_sumPattern,

  "Two Pointers": two_pointersPattern,

  "Bit Manipulation": bit_manipulationPattern,

  "Sliding Window": sliding_windowPattern,

  "Two Sum Two Pointers": two_sum_two_pointersPattern,

  "Two Sum": two_sumPattern,

  // array patterns will be added here
};
