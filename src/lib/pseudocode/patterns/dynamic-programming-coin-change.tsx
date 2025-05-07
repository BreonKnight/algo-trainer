import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const DynamicProgrammingCoinChangePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Coin Change (DP)
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n*m) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Finding minimum coins needed for
      amount
    </div>

    <PseudocodeDisplay
      code={`COIN-CHANGE(coins, amount)
    # Initialize DP array with infinity
    dp[0..amount] ← ∞
    dp[0] ← 0  # Base case: 0 coins needed for amount 0

    # Fill DP array
    for i ← 1 to amount
        for each coin in coins
            if coin ≤ i
                dp[i] ← min(dp[i], dp[i - coin] + 1)

    if dp[amount] = ∞
        return -1
    else
        return dp[amount]

# Example:
# Input: coins = [1, 2, 5], amount = 11
# dp array after filling:
# [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]
# Output: 3  # 5 + 5 + 1`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: DP array with infinity and base case</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Fill: DP array by trying each coin</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: Minimum coins or -1 if impossible</span>
      </div>
    </div>
  </div>
);
