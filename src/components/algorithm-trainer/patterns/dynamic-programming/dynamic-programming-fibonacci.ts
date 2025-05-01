import { AlgorithmPattern } from "../../types";

export const dynamicProgrammingFibonacciPattern: AlgorithmPattern = {
  title: "Dynamic Programming Fibonacci",
  description:
    "A classic example of dynamic programming that computes the nth Fibonacci number efficiently by storing previously calculated values.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n) or O(1) with optimization",
  pseudocode: `1. Initialize dp array with base cases: dp[0] = 0, dp[1] = 1
2. For i from 2 to n:
   a. dp[i] = dp[i-1] + dp[i-2]
3. Return dp[n]`,
  example: `Calculate Fibonacci(5):
dp = [0, 1, 1, 2, 3, 5]
Result: 5`,
  implementation: `def fibonacci(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Space-optimized version
def fibonacci_optimized(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr`,
  category: "Dynamic Programming",
  keySteps: [
    "Identify the recurrence relation (F(n) = F(n-1) + F(n-2))",
    "Define base cases (F(0) = 0, F(1) = 1)",
    "Choose between tabulation or memoization approach",
    "Implement the solution",
    "Optimize space complexity if needed",
  ],
};
