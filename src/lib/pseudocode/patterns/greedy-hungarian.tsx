import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyHungarianPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Hungarian Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n³) &nbsp;|&nbsp; Space: O(n²) &nbsp;|&nbsp; Use: Solve assignment
      problem
    </div>

    <PseudocodeDisplay code={`// Hungarian algorithm for assignment problem
HUNGARIAN(C):
    n ← rows[C]
    // Step 1: Subtract row minima
    for i ← 1 to n:
        row_min ← min(C[i, 1..n])
        for j ← 1 to n:
            C[i, j] ← C[i, j] - row_min

    // Step 2: Subtract column minima
    for j ← 1 to n:
        col_min ← min(C[1..n, j])
        for i ← 1 to n:
            C[i, j] ← C[i, j] - col_min

    // Step 3: Find minimum number of lines
    while true:
        // Find maximum matching
        matching ← FIND-MAX-MATCHING(C)
        if size(matching) = n:
            return matching

        // Find minimum uncovered value
        min_val ← ∞
        for i ← 1 to n:
            for j ← 1 to n:
                if not covered[i] and not covered[j]:
                    min_val ← min(min_val, C[i, j])

        // Update matrix
        for i ← 1 to n:
            for j ← 1 to n:
                if not covered[i] and not covered[j]:
                    C[i, j] ← C[i, j] - min_val
                else if covered[i] and covered[j]:
                    C[i, j] ← C[i, j] + min_val

// Example:
// Input: C = [
//   [3, 5, 6],
//   [2, 4, 7],
//   [3, 5, 8]
// ]
//
// Step 1: Subtract row minima
// [
//   [0, 2, 3],
//   [0, 2, 5],
//   [0, 2, 5]
// ]
//
// Step 2: Subtract column minima
// [
//   [0, 0, 0],
//   [0, 0, 2],
//   [0, 0, 2]
// ]
//
// Step 3: Find matching
// Output: {(1,1), (2,2), (3,3)}`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Reduce: Subtract row and column minima</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Match: Find maximum matching</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Adjust matrix until perfect matching</span>
      </div>
    </div>
  </div>
);
