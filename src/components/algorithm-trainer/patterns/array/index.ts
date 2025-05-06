import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { matrixSpiralRecursivePattern } from "../matrix/matrix-spiral-recursive";
import { matrixSpiralTraversalPattern } from "../matrix/matrix-spiral-traversal";
import { matrixTraversalRecursivePattern } from "../matrix/matrix-traversal-recursive";
import { matrixTraversalPattern } from "../matrix/matrix-traversal";
import { kadanesAlgorithmPattern } from "./kadanes-algorithm";
import { prefixSumsPattern } from "./prefix-sums";
import { twoPointersPattern } from "./two-pointers";
import { bitManipulationPattern } from "./bit-manipulation";
import { slidingWindowPattern } from "./sliding-window";
import { twoSumTwoPointersPattern } from "./two-sum-two-pointers";
import { twoSumPattern } from "./two-sum";
import { twoSumDictPattern } from "./two-sum-dict";
import { matrixOperationsPattern } from "../matrix/matrix-operations";
import { matrixExponentiationPattern } from "../matrix/matrix-exponentiation";
import { gridTraversalPattern } from "../matrix/grid-traversal";

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
  | "Matrix Operations"
  | "Two Sum"
  | "Matrix Exponentiation"
  | "Grid Traversal";

export const arrayPatterns: Partial<Record<ArrayPatternKey, AlgorithmPattern>> = {
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
  "Matrix Operations": matrixOperationsPattern,
  "Two Sum": twoSumPattern,
  "Matrix Exponentiation": matrixExponentiationPattern,
  "Grid Traversal": gridTraversalPattern,
};
