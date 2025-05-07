import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const FractionalKnapsackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fractional Knapsack</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Maximize value while keeping
      weight under capacity
    </div>

    <PseudocodeDisplay
      code={`FRACTIONAL-KNAPSACK(W, w, v)
    n ← length[w]
    for i ← 1 to n
        do x[i] ← 0
    weight ← 0
    for i ← 1 to n
        do if weight + w[i] ≤ W
            then x[i] ← 1
                weight ← weight + w[i]
            else x[i] ← (W - weight) / w[i]
                weight ← W
                return x

// Example:
// Input: W = 50
//        w = [10, 20, 30]
//        v = [60, 100, 120]
//
// Step 1: Sort items by value/weight ratio
//        [6, 5, 4]
//
// Step 2: Take items in order
//        Take all of item 1 (10 units)
//        Take all of item 2 (20 units)
//        Take 20/30 of item 3
//
// Output: [1, 1, 0.666...]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Items by value/weight ratio</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Take: Items in order of highest ratio</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Fill: Take fraction of last item if needed</span>
      </div>
    </div>
  </div>
);
