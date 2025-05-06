import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MergeSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Merge Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Stable sorting with guaranteed
      performance
    </div>

    <PseudocodeDisplay
      code={`MERGESORT(A, p, r):
    if p < r:
        q ← ⌊(p + r) / 2⌋
        MERGESORT(A, p, q)
        MERGESORT(A, q + 1, r)
        MERGE(A, p, q, r)

MERGE(A, p, q, r):
    n₁ ← q - p + 1
    n₂ ← r - q
    let L[1..n₁ + 1] and R[1..n₂ + 1] be new arrays
    for i ← 1 to n₁:
        L[i] ← A[p + i - 1]
    for j ← 1 to n₂:
        R[j] ← A[q + j]
    L[n₁ + 1] ← ∞
    R[n₂ + 1] ← ∞
    i ← 1
    j ← 1
    for k ← p to r:
        if L[i] ≤ R[j]:
            A[k] ← L[i]
            i ← i + 1
        else:
            A[k] ← R[j]
            j ← j + 1

// Example:
// Input: A = [3, 7, 8, 5, 2, 1, 9, 5, 4]
//
// First split:
// Left: [3, 7, 8, 5]
// Right: [2, 1, 9, 5, 4]
//
// Recursive splits:
// [3, 7] [8, 5] [2, 1] [9, 5, 4]
//
// Merge steps:
// [3, 7] [5, 8] [1, 2] [4, 5, 9]
// [3, 5, 7, 8] [1, 2, 4, 5, 9]
// [1, 2, 3, 4, 5, 5, 7, 8, 9]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Divide array into two halves</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recursively sort each half</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Merge sorted halves</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Advantages:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Stable sorting algorithm</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Guaranteed O(n log n) performance</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Good for linked lists and external sorting</span>
        </div>
      </div>
    </div>
  </div>
);
