import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const dynamicProgrammingPattern: AlgorithmPattern = {
  title: "Dynamic Programming Pattern",
  description:
    "A problem-solving pattern that breaks down complex problems into simpler subproblems, storing their solutions to avoid redundant calculations.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Define the state representation
2. Initialize the base cases
3. Define the recurrence relation
4. Fill the DP table/array iteratively
5. Return the solution from the final state`,
  example: `Problem: Fibonacci sequence
State: dp[i] = ith Fibonacci number
Base cases: dp[0] = 0, dp[1] = 1
Recurrence: dp[i] = dp[i-1] + dp[i-2]

For n = 5:
dp = [0, 1, 1, 2, 3, 5]
Result: 5`,
  implementation: `def fibonacci(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`,
  category: "Dynamic Programming",
  keySteps: [
    "Identify if the problem has overlapping subproblems",
    "Define the state representation",
    "Establish base cases",
    "Formulate the recurrence relation",
    "Choose between top-down (memoization) or bottom-up (tabulation) approach",
    "Implement the solution",
    "Optimize space if possible",
  ],
};
