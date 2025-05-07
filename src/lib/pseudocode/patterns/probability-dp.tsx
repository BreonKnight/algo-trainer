import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const ProbabilityDPPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Probability DP
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n·k) &nbsp;|&nbsp; Space: O(n·k) &nbsp;|&nbsp; Use: Calculate probability of events
    </div>

    <PseudocodeDisplay
      code={`PROBABILITY-DP(n, k, p)
    let dp[0‥n][0‥k] be a new array
    for i ← 0 to n
        do for j ← 0 to k
            do dp[i][j] ← -1
    return CALC-PROB(n, k, p, dp)

CALC-PROB(n, k, p, dp)
    if n = 0
        then if k = 0
                then return 1
                else return 0
    if k < 0
        then return 0
    if dp[n][k] ≠ -1
        then return dp[n][k]

    let prob ← p · CALC-PROB(n-1, k-1, p, dp) + (1-p) · CALC-PROB(n-1, k, p, dp)
    dp[n][k] ← prob
    return prob

// Example:
// Input: n = 3, k = 2, p = 0.5
//
// Initial call: n = 3, k = 2
//
// For n = 3:
//   prob = 0.5·CALC-PROB(2,1) + 0.5·CALC-PROB(2,2)
//
// For n = 2:
//   prob = 0.5·CALC-PROB(1,0) + 0.5·CALC-PROB(1,1)
//
// For n = 1:
//   prob = 0.5·CALC-PROB(0,-1) + 0.5·CALC-PROB(0,0)
//
// Base cases:
//   CALC-PROB(0,0) = 1
//   CALC-PROB(0,-1) = 0
//
// Output: Probability of exactly 2 successes in 3 trials`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create DP table for memoization</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Base Cases: Handle terminal conditions</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recurse: Calculate probability using previous states</span>
      </div>
    </div>
  </div>
);
