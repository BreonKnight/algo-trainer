import { AlgorithmPattern } from "../../types";
import { digitDPPattern } from "./digit-dp";
import { dynamicProgrammingCoinChangePattern } from "./dynamic-programming-coin-change";
import { dynamicProgrammingFibonacciPattern } from "./dynamic-programming-fibonacci";
import { dynamicProgrammingIterativePattern } from "./dynamic-programming-iterative";
import { dynamicProgrammingPattern } from "./dynamic-programming-pattern";
import { dynamicProgrammingPattern as dpPattern } from "./dynamic-programming";
import { fibonacciDpPattern } from "./fibonacci";
import { probabilityDPPattern } from "./probability-dp";
import { stateCompressionDPPattern } from "./state-compression-dp";
import { treeDPPattern } from "./tree-dp";
import { memoizationPattern } from "./memoization";
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
  Fibonacci: fibonacciDpPattern,
  "Probability DP": probabilityDPPattern,
  "State Compression DP": stateCompressionDPPattern,
  "Tree DP": treeDPPattern,
  Memoization: memoizationPattern,
};
