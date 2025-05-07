import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const QuickSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Quick Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) avg, O(n²) worst &nbsp;|&nbsp; Space: O(log n) &nbsp;|&nbsp; Use: Efficient
      general-purpose sorting
    </div>

    <PseudocodeDisplay
      code={`QUICKSORT(A, p, r):
    if p < r:
        q ← PARTITION(A, p, r)
        QUICKSORT(A, p, q-1)
        QUICKSORT(A, q+1, r)

PARTITION(A, p, r):
    x ← A[r]    // pivot
    i ← p - 1
    for j ← p to r-1:
        if A[j] ≤ x:
            i ← i + 1
            exchange A[i] with A[j]
    exchange A[i+1] with A[r]
    return i + 1

// Example:
// Input: A = [3, 7, 8, 5, 2, 1, 9, 5, 4]
//
// First partition (pivot = 4):
// [3, 2, 1, 4, 7, 8, 9, 5, 5]
//
// Recursive calls:
// Left: [3, 2, 1]
// Right: [7, 8, 9, 5, 5]
//
// Final result: [1, 2, 3, 4, 5, 5, 7, 8, 9]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Choose pivot element (usually last element)</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Partition array around pivot</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recursively sort subarrays</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Optimization Tips:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Use median-of-three for pivot selection</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Switch to insertion sort for small subarrays</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Use tail recursion optimization</span>
        </div>
      </div>
    </div>
  </div>
);
