import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const fibonacciDpPattern: AlgorithmPattern = {
  title: "Dynamic Programming Fibonacci",
  description:
    "A classic example of dynamic programming that calculates Fibonacci numbers efficiently by storing previously computed values.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Initialize dp array with base cases
2. For i from 2 to n:
   a. dp[i] = dp[i-1] + dp[i-2]
3. Return dp[n]`,
  example: `Calculate fib(5)

dp = [0, 1]
i=2: dp[2] = 1 + 0 = 1
i=3: dp[3] = 1 + 1 = 2
i=4: dp[4] = 2 + 1 = 3
i=5: dp[5] = 3 + 2 = 5

Result: 5`,
  implementation: `def fibonacci_dp(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]`,
  category: "Dynamic Programming",
};
