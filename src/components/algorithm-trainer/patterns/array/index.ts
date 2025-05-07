import { bitManipulationPattern } from "@/components/algorithm-trainer/patterns/array/bit-manipulation";
import { kadanesAlgorithmPattern } from "@/components/algorithm-trainer/patterns/array/kadanes-algorithm";
import { prefixSumsPattern } from "@/components/algorithm-trainer/patterns/array/prefix-sums";
import { slidingWindowPattern } from "@/components/algorithm-trainer/patterns/array/sliding-window";
import { twoPointersPattern } from "@/components/algorithm-trainer/patterns/array/two-pointers";
import { twoSumPattern } from "@/components/algorithm-trainer/patterns/array/two-sum";
import { twoSumDictPattern } from "@/components/algorithm-trainer/patterns/array/two-sum-dict";
import { twoSumTwoPointersPattern } from "@/components/algorithm-trainer/patterns/array/two-sum-two-pointers";
import { gridTraversalPattern } from "@/components/algorithm-trainer/patterns/matrix/grid-traversal";
import { matrixExponentiationPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-exponentiation";
import { matrixOperationsPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-operations";
import { matrixSpiralRecursivePattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-spiral-recursive";
import { matrixSpiralTraversalPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-spiral-traversal";
import { matrixTraversalPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-traversal";
import { matrixTraversalRecursivePattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-traversal-recursive";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

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
