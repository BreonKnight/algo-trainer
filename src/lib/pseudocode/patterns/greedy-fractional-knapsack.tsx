import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyFractionalKnapsackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fractional Knapsack Problem</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(nW) &nbsp;|&nbsp; Space: O(nW) &nbsp;|&nbsp; Use: Optimal item
      selection with weight constraint
    </div>

    <PseudocodeDisplay
      code={`// 0-1 Knapsack problem
KNAPSACK(w, v, W):
    n ← length[w]
    // Initialize DP table
    let dp[0..n, 0..W] be a new table
    for i ← 0 to n:
        for j ← 0 to W:
            dp[i, j] ← 0

    // Fill DP table
    for i ← 1 to n:
        for j ← 0 to W:
            if w[i] > j:
                dp[i, j] ← dp[i-1, j]
            else:
                dp[i, j] ← max(dp[i-1, j], v[i] + dp[i-1, j-w[i]])

    // Reconstruct solution
    j ← W
    S ← ∅
    for i ← n downto 1:
        if dp[i, j] ≠ dp[i-1, j]:
            S ← S ∪ {i}
            j ← j - w[i]

    return dp[n, W], S

// Example:
// Input: w = [2, 3, 4, 5], v = [3, 4, 5, 6], W = 5
//
// DP Table:
//   0 1 2 3 4 5
// 0 0 0 0 0 0 0
// 1 0 0 3 3 3 3
// 2 0 0 3 4 4 7
// 3 0 0 3 4 5 7
// 4 0 0 3 4 5 7
//
// Output: max_value = 7, items = {1, 2}`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create DP table</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Fill: Compute optimal values</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Reconstruct: Find selected items</span>
      </div>
    </div>
  </div>
);
