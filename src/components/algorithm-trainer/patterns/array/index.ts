import { AlgorithmPattern } from "../../types.ts";
import { matrixSpiralRecursivePattern } from "../matrix/matrix-spiral-recursive.ts";
import { matrixSpiralTraversalPattern } from "../matrix/matrix-spiral-traversal.ts";
import { matrixTraversalRecursivePattern } from "../matrix/matrix-traversal-recursive.ts";
import { matrixTraversalPattern } from "../matrix/matrix-traversal.ts";
import { kadanesAlgorithmPattern } from "./kadanes-algorithm.ts";
import { prefixSumsPattern } from "./prefix-sums.ts";
import { twoPointersPattern } from "./two-pointers.ts";
import { bitManipulationPattern } from "./bit-manipulation.ts";
import { slidingWindowPattern } from "./sliding-window.ts";
import { twoSumTwoPointersPattern } from "./two-sum-two-pointers.ts";
import { twoSumPattern } from "./two-sum.ts";
import { twoSumDictPattern } from "./two-sum-dict.ts";
import { rotateMatrixPattern } from "../matrix/rotate-matrix.ts";

type ArrayPatternKey =
  | "Matrix Spiral Recursive"
  | "Matrix Spiral Traversal"
  | "Matrix Traversal Recursive"
  | "Matrix Traversal"
  | "Kadane's Algorithm"
  | "Prefix Sums"
  | "Two Pointers"
  | "Bit Manipulation"
  | "Sliding Window"
  | "Two Sum Two Pointers"
  | "Two Sum Dict"
  | "Rotate Matrix"
  | "Two Sum";

export const arrayPatterns: Partial<Record<ArrayPatternKey, AlgorithmPattern>> =
  {
    "Matrix Spiral Recursive": matrixSpiralRecursivePattern,
    "Matrix Spiral Traversal": matrixSpiralTraversalPattern,
    "Matrix Traversal Recursive": matrixTraversalRecursivePattern,
    "Matrix Traversal": matrixTraversalPattern,
    "Kadane's Algorithm": kadanesAlgorithmPattern,
    "Prefix Sums": prefixSumsPattern,
    "Two Pointers": twoPointersPattern,
    "Bit Manipulation": bitManipulationPattern,
    "Sliding Window": slidingWindowPattern,
    "Two Sum Two Pointers": twoSumTwoPointersPattern,
    "Two Sum Dict": twoSumDictPattern,
    "Rotate Matrix": rotateMatrixPattern,
    "Two Sum": twoSumPattern,
  };
