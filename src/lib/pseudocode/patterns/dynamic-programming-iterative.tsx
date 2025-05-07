import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const DynamicProgrammingIterativePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Iterative DP
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solving problems with bottom-up
      approach
    </div>

    <PseudocodeDisplay
      code={`ITERATIVE-DP(n)
    # Initialize DP array with base cases
    dp[0] ← base_case_0
    dp[1] ← base_case_1

    # Fill DP array
    for i ← 2 to n
        dp[i] ← compute_from_previous(dp[i-1], dp[i-2])

    return dp[n]

# Example:
# Input: n = 5
# Base cases: dp[0] = 0, dp[1] = 1
# Compute: dp[i] = dp[i-1] + dp[i-2]
# Output: dp[5] = 5`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: DP array with base cases</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Fill: DP array from bottom up</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: Final state value</span>
      </div>
    </div>
  </div>
);
