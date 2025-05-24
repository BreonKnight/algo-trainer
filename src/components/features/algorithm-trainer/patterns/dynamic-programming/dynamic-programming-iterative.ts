import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const dynamicProgrammingIterativePattern: AlgorithmPattern = {
  title: "Dynamic Programming Iterative",
  description:
    "A bottom-up approach to dynamic programming that solves problems by building solutions iteratively from smaller subproblems.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n) or O(1) with optimization",
  pseudocode: `1. Initialize the DP table/array with base cases
2. For each state from smallest to largest:
   a. Calculate the current state using previously computed states
   b. Store the result in the DP table
3. Return the solution for the target state`,
  example: `Problem: Climbing stairs (n steps)
State: dp[i] = ways to reach step i
Base cases: dp[0] = 1, dp[1] = 1
Recurrence: dp[i] = dp[i-1] + dp[i-2]

For n = 3:
dp = [1, 1, 2, 3]
Result: 3 ways to climb 3 steps`,
  implementation: `def climb_stairs(n):
    if n <= 1:
        return 1
    dp = [0] * (n + 1)
    dp[0] = dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Space-optimized version
def climb_stairs_optimized(n):
    if n <= 1:
        return 1
    prev, curr = 1, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr`,
  category: "Dynamic Programming",
  keySteps: [
    "Identify the problem's states and transitions",
    "Define base cases for smallest subproblems",
    "Determine the order of state computation",
    "Implement the iterative solution",
    "Optimize space complexity if possible",
  ],
};
