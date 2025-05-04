import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyActivitySelectionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Greedy Activity Selection</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Select
      maximum number of non-overlapping activities
    </div>

    <PseudocodeDisplay
      code={`GREEDY-ACTIVITY-SELECTOR(s, f)
    n ← length[s]
    A ← {a₁}  // First activity is always selected
    k ← 1
    for m ← 2 to n
        do if s[m] ≥ f[k]
            then A ← A ∪ {aₘ}
                k ← m
    return A

// Example:
// Input: s = [1, 3, 0, 5, 8, 5]  // Start times
//        f = [2, 4, 6, 7, 9, 9]  // Finish times
// 
// Step 1: Sort activities by finish time
//         a₁: (1,2)
//         a₂: (3,4)
//         a₃: (0,6)
//         a₄: (5,7)
//         a₅: (8,9)
//         a₆: (5,9)
// 
// Step 2: Select activities
//         Select a₁ (1-2)
//         Skip a₃ (overlaps)
//         Select a₂ (3-4)
//         Skip a₆ (overlaps)
//         Select a₄ (5-7)
//         Select a₅ (8-9)
// 
// Output: {a₁, a₂, a₄, a₅}`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Activities by finish time</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Select: First activity</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Iterate: Through remaining activities</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Add: Non-overlapping activities to set</span>
      </div>
    </div>
  </div>
);
