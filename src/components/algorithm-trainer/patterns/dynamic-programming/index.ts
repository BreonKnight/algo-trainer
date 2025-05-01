import { AlgorithmPattern } from "../../types";
import { dynamicProgrammingPattern } from "./dynamic-programming";
import { dynamicProgrammingFibonacciPattern } from "./dynamic-programming-fibonacci";
import { dynamicProgrammingIterativePattern } from "./dynamic-programming-iterative";
import { stateCompressionDPPattern } from "./state-compression-dp";
import { digitDPPattern } from "./digit-dp";
import { treeDPPattern } from "./tree-dp";
import { probabilityDPPattern } from "./probability-dp";
import { dynamicProgrammingCoinChangePattern } from "./dynamic-programming-coin-change";

type DynamicProgrammingPatternKey =
  | "Dynamic Programming"
  | "Dynamic Programming Fibonacci"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Coin Change"
  | "State Compression DP"
  | "Digit DP"
  | "Tree DP"
  | "Probability DP";

export const dynamicProgrammingPatterns: Partial<
  Record<DynamicProgrammingPatternKey, AlgorithmPattern>
> = {
  "Dynamic Programming Fibonacci": dynamicProgrammingFibonacciPattern,
  "Dynamic Programming Iterative": dynamicProgrammingIterativePattern,
  "Dynamic Programming Coin Change": dynamicProgrammingCoinChangePattern,
  "Dynamic Programming": dynamicProgrammingPattern,
  "State Compression DP": stateCompressionDPPattern,
  "Digit DP": digitDPPattern,
  "Tree DP": treeDPPattern,
  "Probability DP": probabilityDPPattern,
  // Add other dynamic programming patterns here
};
