import { AlgorithmPattern } from "../../types";
import { dynamic_programming_coin_changePattern } from "./dynamic-programming-coin-change";

import { dynamic_programming_iterativePattern } from "./dynamic-programming-iterative";

import { dynamic_programming_fibonacciPattern } from "./dynamic-programming-fibonacci";

import { fibonacciDpPattern } from "./fibonacci";

type DynamicProgrammingPatternKey =
  | "Dynamic Programming"
  | "Dynamic Programming Fibonacci"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Coin Change";

export const dynamicProgrammingPatterns: Partial<
  Record<DynamicProgrammingPatternKey, AlgorithmPattern>
> = {
  "Dynamic Programming Fibonacci": fibonacciDpPattern,
  // Add other dynamic programming patterns here
};
