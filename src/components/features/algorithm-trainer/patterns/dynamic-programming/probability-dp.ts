import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const probabilityDPPattern: AlgorithmPattern = {
  title: "Probability DP",
  description:
    "A dynamic programming technique for solving probability problems by breaking them down into smaller subproblems and combining their probabilities.",
  timeComplexity: "O(n * m) where n is number of states and m is number of transitions",
  spaceComplexity: "O(n)",
  pseudocode: `1. Define the probability state space
2. Initialize probability distribution
3. For each step:
   a. Calculate transition probabilities
   b. Update probability distribution
4. Return the final probability distribution`,
  example: `Problem: Probability of getting at least k heads in n coin flips
n = 3, k = 2
P(at least 2 heads) = P(2 heads) + P(3 heads)
= 3/8 + 1/8 = 1/2`,
  implementation: `def probability_at_least_k_heads(n, k):
    # dp[i][j] = probability of getting j heads in i flips
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    dp[0][0] = 1  # Base case: 0 flips, 0 heads
    
    for i in range(1, n + 1):
        for j in range(i + 1):
            # Probability of getting heads
            if j > 0:
                dp[i][j] += dp[i-1][j-1] * 0.5
            # Probability of getting tails
            dp[i][j] += dp[i-1][j] * 0.5
    
    # Sum probabilities for k or more heads
    return sum(dp[n][j] for j in range(k, n + 1))`,
  category: "Dynamic Programming",
  keySteps: [
    "Define the probability state space",
    "Initialize the base case probabilities",
    "Calculate transition probabilities",
    "Update the probability distribution",
    "Combine probabilities for the final result",
  ],
};
