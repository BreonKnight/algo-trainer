import { AlgorithmPattern } from "../../types";

export const dynamicProgrammingCoinChangePattern: AlgorithmPattern = {
  title: "Dynamic Programming Coin Change",
  description:
    "A classic dynamic programming problem that finds the minimum number of coins needed to make a given amount of money.",
  timeComplexity: "O(amount * number of coins)",
  spaceComplexity: "O(amount)",
  pseudocode: `1. Initialize dp array with infinity\n2. Set dp[0] = 0\n3. For amount from 1 to target:\n   a. For each coin:\n      - If coin <= amount:\n        * dp[amount] = min(dp[amount], dp[amount-coin] + 1)\n4. Return dp[target] if not infinity else -1`,
  example: `coins = [1, 2, 5]
amount = 11

dp[0] = 0
dp[1] = 1 (1)
dp[2] = 1 (2)
dp[3] = 2 (1+2)
dp[4] = 2 (2+2)
dp[5] = 1 (5)
...
dp[11] = 3 (5+5+1)`,
  implementation: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1`,
  category: "Dynamic Programming",
};
