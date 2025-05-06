import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BitwiseDPPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Bitwise Dynamic Programming
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n2ⁿ) &nbsp;|&nbsp; Space: O(2ⁿ) &nbsp;|&nbsp; Use: Subset problems and state
      compression
    </div>

    <PseudocodeDisplay
      code={`BITWISE-DP(n, cost):
    // n is number of elements
    // cost[i][j] is cost of including element j in subset i
    // Returns minimum cost of covering all elements
    
    // Initialize dp array
    dp[0..2ⁿ-1] ← ∞
    dp[0] ← 0
    
    // Iterate through all possible subsets
    for mask ← 0 to 2ⁿ-1:
        // Try adding each element to current subset
        for j ← 0 to n-1:
            if not (mask & (1 << j)):
                new_mask ← mask | (1 << j)
                dp[new_mask] ← min(dp[new_mask], dp[mask] + cost[mask][j])
    
    return dp[2ⁿ-1]

// Example: Traveling Salesman Problem
// n = 3 cities
// cost matrix:
// 0 10 15
// 10 0 20
// 15 20 0
//
// Binary representation of states:
// 000: empty set
// 001: {0}
// 010: {1}
// 011: {0,1}
// 100: {2}
// 101: {0,2}
// 110: {1,2}
// 111: {0,1,2}
//
// Final answer: minimum cost of visiting all cities`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses bit manipulation for state representation</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Efficient for subset and permutation problems</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Common in competitive programming</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(n2ⁿ) - for n elements and 2ⁿ possible states</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(2ⁿ) - for dp array</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Practical for n ≤ 20 due to exponential complexity</span>
        </div>
      </div>
    </div>
  </div>
);
