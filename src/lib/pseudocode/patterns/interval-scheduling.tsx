import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const IntervalSchedulingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Interval Scheduling
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Maximum non-overlapping
      intervals
    </div>

    <PseudocodeDisplay
      code={`INTERVAL-SCHEDULING(I):
    // I is a list of intervals [start, end]
    // Returns maximum set of non-overlapping intervals
    
    // Sort intervals by end time
    SORT(I, key = end_time)
    
    selected ← empty list
    last_end ← -∞
    
    for each interval [start, end] in I:
        if start ≥ last_end:
            selected.append([start, end])
            last_end ← end
    
    return selected

// Example:
// Input intervals:
// [1,4], [2,5], [3,6], [4,7], [5,8]
//
// Sorted by end time:
// [1,4], [2,5], [3,6], [4,7], [5,8]
//
// Selected intervals:
// [1,4], [4,7]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Greedy algorithm for interval selection</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Always selects interval with earliest end time</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Produces optimal solution for maximum non-overlapping intervals</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(n log n) - dominated by sorting</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(n) - for storing selected intervals</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Optimal greedy solution for interval scheduling</span>
        </div>
      </div>
    </div>
  </div>
);
