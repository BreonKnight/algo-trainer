import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const memoizationPattern: AlgorithmPattern = {
  title: "Memoization",
  description:
    "A top-down dynamic programming technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Create a memoization table/cache
2. Before computing a result:
   a. Check if result exists in cache
   b. If yes, return cached result
3. Compute result and store in cache
4. Return the result`,
  example: `Fibonacci with memoization:
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
fib(3) = fib(2) + fib(1)
fib(2) = fib(1) + fib(0)
fib(1) = 1
fib(0) = 0`,
  implementation: `def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]`,
  category: "Dynamic Programming",
  keySteps: [
    "Identify the recursive problem that has overlapping subproblems",
    "Create a memoization table/cache to store results",
    "Add cache check before computing results",
    "Store computed results in cache",
    "Return cached results when available",
  ],
};
