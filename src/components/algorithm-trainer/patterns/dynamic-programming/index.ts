import { AlgorithmPattern, PatternKey } from "../../types/pattern-types.ts";
import { digitDPPattern } from "./digit-dp.ts";
import { dynamicProgrammingCoinChangePattern } from "./dynamic-programming-coin-change.ts";
import { dynamicProgrammingFibonacciPattern } from "./dynamic-programming-fibonacci.ts";
import { dynamicProgrammingIterativePattern } from "./dynamic-programming-iterative.ts";
import { dynamicProgrammingPattern } from "./dynamic-programming.ts";
import { dynamicProgrammingPattern as dpPattern } from "./dynamic-programming.ts";
import { probabilityDPPattern } from "./probability-dp.ts";
import { stateCompressionDPPattern } from "./state-compression-dp.ts";
import { treeDPPattern } from "./tree-dp.ts";
import { memoizationPattern } from "./memoization.ts";
type DynamicProgrammingPatternKey =
  | "Digit DP"
  | "Dynamic Programming Coin Change"
  | "Dynamic Programming Fibonacci"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Pattern"
  | "Dynamic Programming"
  | "Fibonacci"
  | "Probability DP"
  | "State Compression DP"
  | "Tree DP"
  | "Memoization";

export const dynamicProgrammingPatterns: Partial<
  Record<DynamicProgrammingPatternKey, AlgorithmPattern>
> = {
  "Digit DP": digitDPPattern,
  "Dynamic Programming Coin Change": dynamicProgrammingCoinChangePattern,
  "Dynamic Programming Fibonacci": dynamicProgrammingFibonacciPattern,
  "Dynamic Programming Iterative": dynamicProgrammingIterativePattern,
  "Dynamic Programming Pattern": dynamicProgrammingPattern,
  "Dynamic Programming": dpPattern,
  "Probability DP": probabilityDPPattern,
  "State Compression DP": stateCompressionDPPattern,
  "Tree DP": treeDPPattern,
  Memoization: memoizationPattern,
};
