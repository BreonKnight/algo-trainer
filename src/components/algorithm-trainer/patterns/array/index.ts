import { AlgorithmPattern } from "../../types";
import { matrixSpiralRecursivePattern } from "./matrix-spiral-recursive";
import { matrixSpiralTraversalPattern } from "./matrix-spiral-traversal";
import { matrixTraversalRecursivePattern } from "./matrix-traversal-recursive";
import { matrixTraversalPattern } from "./matrix-traversal";
import { kadanesAlgorithmPattern } from "./kadanes-algorithm";
import { prefixSumPattern } from "./prefix-sum";
import { twoPointersPattern } from "./two-pointers";
import { bitManipulationPattern } from "./bit-manipulation";
import { slidingWindowPattern } from "./sliding-window";
import { twoSumTwoPointersPattern } from "./two-sum-two-pointers";
import { twoSumPattern } from "./two-sum";
import { twoSumDictPattern } from "./two-sum-dict";
import { rotateMatrixPattern } from "./rotate-matrix";
import { prefixSumsPattern } from "./prefix-sums";
type ArrayPatternKey =
  | "Matrix Spiral Recursive"
  | "Matrix Spiral Traversal"
  | "Matrix Traversal Recursive"
  | "Matrix Traversal"
  | "Kadane's Algorithm"
  | "Prefix Sum"
  | "Two Pointers"
  | "Bit Manipulation"
  | "Sliding Window"
  | "Two Sum Two Pointers"
  | "Two Sum Dict"
  | "Rotate Matrix"
  | "Two Sum"
  | "Prefix Sums";

export const arrayPatterns: Partial<Record<ArrayPatternKey, AlgorithmPattern>> =
  {
    "Matrix Spiral Recursive": matrixSpiralRecursivePattern,
    "Matrix Spiral Traversal": matrixSpiralTraversalPattern,
    "Matrix Traversal Recursive": matrixTraversalRecursivePattern,
    "Matrix Traversal": matrixTraversalPattern,
    "Kadane's Algorithm": kadanesAlgorithmPattern,
    "Prefix Sum": prefixSumPattern,
    "Two Pointers": twoPointersPattern,
    "Bit Manipulation": bitManipulationPattern,
    "Sliding Window": slidingWindowPattern,
    "Two Sum Two Pointers": twoSumTwoPointersPattern,
    "Two Sum Dict": twoSumDictPattern,
    "Rotate Matrix": rotateMatrixPattern,
    "Two Sum": twoSumPattern,
    "Prefix Sums": prefixSumsPattern,
  };
