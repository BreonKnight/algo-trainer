import { bitManipulationPattern } from "@/components/features/algorithm-trainer/patterns/array/bit-manipulation";
import { kadanesAlgorithmPattern } from "@/components/features/algorithm-trainer/patterns/array/kadanes-algorithm";
import { prefixSumsPattern } from "@/components/features/algorithm-trainer/patterns/array/prefix-sums";
import { slidingWindowPattern } from "@/components/features/algorithm-trainer/patterns/array/sliding-window";
import { twoPointersPattern } from "@/components/features/algorithm-trainer/patterns/array/two-pointers";
import { twoSumPattern } from "@/components/features/algorithm-trainer/patterns/array/two-sum";
import { twoSumDictPattern } from "@/components/features/algorithm-trainer/patterns/array/two-sum-dict";
import { twoSumTwoPointersPattern } from "@/components/features/algorithm-trainer/patterns/array/two-sum-two-pointers";
import { gridTraversalPattern } from "@/components/features/algorithm-trainer/patterns/matrix/grid-traversal";
import { matrixExponentiationPattern } from "@/components/features/algorithm-trainer/patterns/matrix/matrix-exponentiation";
import { matrixOperationsPattern } from "@/components/features/algorithm-trainer/patterns/matrix/matrix-operations";
import { matrixSpiralRecursivePattern } from "@/components/features/algorithm-trainer/patterns/matrix/matrix-spiral-recursive";
import { matrixSpiralTraversalPattern } from "@/components/features/algorithm-trainer/patterns/matrix/matrix-spiral-traversal";
import { matrixTraversalPattern } from "@/components/features/algorithm-trainer/patterns/matrix/matrix-traversal";
import { matrixTraversalRecursivePattern } from "@/components/features/algorithm-trainer/patterns/matrix/matrix-traversal-recursive";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

export const arrayPatterns: Partial<Record<PatternKey, BasePattern>> = {
  "Matrix Spiral Recursive": {
    ...matrixSpiralRecursivePattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Matrix Spiral Traversal": {
    ...matrixSpiralTraversalPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Matrix Traversal Recursive": {
    ...matrixTraversalRecursivePattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Matrix Traversal": {
    ...matrixTraversalPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Kadane's Algorithm": {
    ...kadanesAlgorithmPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Prefix Sums": {
    ...prefixSumsPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Two Pointers": {
    ...twoPointersPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Bit Manipulation": {
    ...bitManipulationPattern,
    category: "Array" as PatternCategory,
    difficulty: "Hard",
  },
  "Sliding Window": {
    ...slidingWindowPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Two Sum Two Pointers": {
    ...twoSumTwoPointersPattern,
    category: "Array" as PatternCategory,
    difficulty: "Easy",
  },
  "Two Sum Dictionary": {
    ...twoSumDictPattern,
    category: "Array" as PatternCategory,
    difficulty: "Easy",
  },
  "Matrix Operations": {
    ...matrixOperationsPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
  "Two Sum": { ...twoSumPattern, category: "Array" as PatternCategory, difficulty: "Easy" },
  "Matrix Exponentiation": {
    ...matrixExponentiationPattern,
    category: "Array" as PatternCategory,
    difficulty: "Hard",
  },
  "Grid Traversal": {
    ...gridTraversalPattern,
    category: "Array" as PatternCategory,
    difficulty: "Medium",
  },
};
