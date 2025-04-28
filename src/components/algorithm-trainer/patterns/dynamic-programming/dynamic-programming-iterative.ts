import { AlgorithmPattern } from "../../types";

export const dynamicProgrammingIterativePattern: AlgorithmPattern = {
  title: "Dynamic Programming Iterative (Bottom-up)",
  description:
    "A bottom-up approach to dynamic programming that builds the solution iteratively from smaller subproblems to larger ones.",
  timeComplexity: "Varies by problem",
  spaceComplexity: "Often O(n) or O(n²)",
  pseudocode: `1. Initialize dp array/table\n2. Fill base cases\n3. Iterate through states in order:\n   a. For each state, compute value from previous states\n4. Return final state value`,
  example: `Problem: Longest Increasing Subsequence

arr = [10, 9, 2, 5, 3, 7, 101, 18]
dp[i] = length of LIS ending at i

dp = [1, 1, 1, 2, 2, 3, 4, 4]
Result: 4`,
  implementation: `def longest_increasing_subsequence(arr):
    if not arr:
        return 0
    
    n = len(arr)
    dp = [1] * n
    
    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)`,
};
