import { bitwiseDPPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/bitwise-dp";
import { digitDPPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/digit-dp";
import { dynamicProgrammingPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/dynamic-programming";
import { dynamicProgrammingPattern as dpPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/dynamic-programming";
import { dynamicProgrammingCoinChangePattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/dynamic-programming-coin-change";
import { dynamicProgrammingIterativePattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/dynamic-programming-iterative";
import { editDistancePattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/edit-distance";
import { fibonacciDpPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/fibonacci";
import { memoizationPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/memoization";
import { palindromePartitioningPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/palindrome-partitioning";
import { probabilityDPPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/probability-dp";
import { stateCompressionDPPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/state-compression-dp";
import { treeDPPattern } from "@/components/features/algorithm-trainer/patterns/dynamic-programming/tree-dp";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

export const dynamicProgrammingPatterns: Partial<Record<PatternKey, BasePattern>> = {
  "Digit DP": {
    ...digitDPPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Hard",
  },
  "Coin Change": {
    ...dynamicProgrammingCoinChangePattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  "Dynamic Programming Iterative": {
    ...dynamicProgrammingIterativePattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  "Dynamic Programming Pattern": {
    ...dynamicProgrammingPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  "Dynamic Programming": {
    ...dpPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  "Edit Distance": {
    ...editDistancePattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  Fibonacci: {
    ...fibonacciDpPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Easy",
  },
  "Probability DP": {
    ...probabilityDPPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Hard",
  },
  "Palindrome Partitioning": {
    ...palindromePartitioningPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  "State Compression DP": {
    ...stateCompressionDPPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Hard",
  },
  "Tree (Dynamic Programming)": {
    ...treeDPPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Hard",
  },
  Memoization: {
    ...memoizationPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Medium",
  },
  "Bitwise DP": {
    ...bitwiseDPPattern,
    category: "Dynamic Programming" as PatternCategory,
    difficulty: "Hard",
  },
};
