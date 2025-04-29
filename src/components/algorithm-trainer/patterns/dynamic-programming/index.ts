import { AlgorithmPattern } from "../../types";
import { dynamicProgrammingPattern } from "./dynamic-programming";
import { dynamicProgrammingCoinChangePattern } from "./dynamic-programming-coin-change";
import { dynamicProgrammingFibonacciPattern } from "./dynamic-programming-fibonacci";
import { dynamicProgrammingIterativePattern } from "./dynamic-programming-iterative";

type DynamicProgrammingPatternKey =
  | "Dynamic Programming"
  | "Dynamic Programming Fibonacci"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Coin Change";

export const dynamicProgrammingPatterns: Partial<
  Record<DynamicProgrammingPatternKey, AlgorithmPattern>
> = {
  "Dynamic Programming Fibonacci": dynamicProgrammingFibonacciPattern,
  "Dynamic Programming Iterative": dynamicProgrammingIterativePattern,
  "Dynamic Programming Coin Change": dynamicProgrammingCoinChangePattern,
  "Dynamic Programming": dynamicProgrammingPattern,
  // Add other dynamic programming patterns here
};
