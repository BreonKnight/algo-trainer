import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const JumpSearchAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Jump Search</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(√n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Search in sorted arrays
    </div>

    <PseudocodeDisplay
      code={`// Jump search in sorted array
JUMP-SEARCH(A, x):
    n ← length[A]
    step ← ⌊√n⌋
    prev ← 0
    // Jump through array
    while A[min(step, n)] < x:
        prev ← step
        step ← step + ⌊√n⌋
        if prev ≥ n:
            return -1
    // Linear search in block
    while A[prev] < x:
        prev ← prev + 1
        if prev = min(step, n):
            return -1
    if A[prev] = x:
        return prev
    return -1

// Example:
// Input: A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x = 7
//
// Execution:
// 1. step = 3, prev = 0
// 2. A[3] = 4 < 7: prev = 3, step = 6
// 3. A[6] = 7 < 7: false
// 4. Linear search from index 3 to 6
// 5. Found at index 6
//
// Output: 6`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Calculate jump step size</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Jump: Skip through array in fixed steps</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search: Linear search in identified block</span>
      </div>
    </div>
  </div>
);
