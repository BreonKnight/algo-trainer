import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const dynamicProgrammingCoinChangePattern: AlgorithmPattern = {
  title: "Dynamic Programming Coin Change",
  description:
    "A dynamic programming solution to the coin change problem that finds the minimum number of coins needed to make up a given amount.",
  timeComplexity: "O(n * m) where n is amount and m is number of coin types",
  spaceComplexity: "O(n)",
  pseudocode: `1. Initialize dp array of size amount + 1 with infinity
2. Set dp[0] = 0 (base case: 0 coins needed for amount 0)
3. For each coin:
   a. For each amount from coin value to target:
      - Update dp[amount] = min(dp[amount], dp[amount - coin] + 1)
4. Return dp[amount] if not infinity, else -1`,
  example: `coins = [1, 2, 5]
amount = 11

dp = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]
Result: 3 coins (5 + 5 + 1)`,
  implementation: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1`,
  category: "Dynamic Programming",
  keySteps: [
    "Define the state (dp[i] = min coins for amount i)",
    "Initialize the DP array with infinity",
    "Set the base case (dp[0] = 0)",
    "Iterate through coins and amounts",
    "Update the DP array using the recurrence relation",
    "Return the result for the target amount",
  ],
};
