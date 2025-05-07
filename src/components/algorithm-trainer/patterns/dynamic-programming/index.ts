import { bitwiseDPPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/bitwise-dp";
import { digitDPPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/digit-dp";
import { dynamicProgrammingPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/dynamic-programming";
import { dynamicProgrammingPattern as dpPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/dynamic-programming";
import { dynamicProgrammingCoinChangePattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/dynamic-programming-coin-change";
import { dynamicProgrammingIterativePattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/dynamic-programming-iterative";
import { memoizationPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/memoization";
import { probabilityDPPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/probability-dp";
import { stateCompressionDPPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/state-compression-dp";
import { treeDPPattern } from "@/components/algorithm-trainer/patterns/dynamic-programming/tree-dp";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

type DynamicProgrammingPatternKey =
  | "Digit DP"
  | "Dynamic Programming Coin Change"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Pattern"
  | "Dynamic Programming"
  | "Fibonacci"
  | "Probability DP"
  | "State Compression DP"
  | "Tree DP"
  | "Memoization"
  | "Bitwise DP";

export const dynamicProgrammingPatterns: Partial<
  Record<DynamicProgrammingPatternKey, AlgorithmPattern>
> = {
  "Digit DP": digitDPPattern,
  "Dynamic Programming Coin Change": dynamicProgrammingCoinChangePattern,
  "Dynamic Programming Iterative": dynamicProgrammingIterativePattern,
  "Dynamic Programming Pattern": dynamicProgrammingPattern,
  "Dynamic Programming": dpPattern,
  "Probability DP": probabilityDPPattern,
  "State Compression DP": stateCompressionDPPattern,
  "Tree DP": treeDPPattern,
  Memoization: memoizationPattern,
  "Bitwise DP": bitwiseDPPattern,
};
