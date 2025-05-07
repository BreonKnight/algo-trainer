import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const QuickselectPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Quickselect
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) average, O(n²) worst &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find k-th
      smallest element
    </div>

    <PseudocodeDisplay
      code={`QUICKSELECT(A, k)
    return SELECT(A, 1, A.length, k)

SELECT(A, p, r, k)
    if p = r
        then return A[p]
    let q ← PARTITION(A, p, r)
    let i ← q - p + 1
    if k = i
        then return A[q]
    else if k < i
        then return SELECT(A, p, q-1, k)
    else return SELECT(A, q+1, r, k-i)

PARTITION(A, p, r)
    let x ← A[r]
    let i ← p - 1
    for j ← p to r - 1
        do if A[j] ≤ x
            then i ← i + 1
                exchange A[i] with A[j]
    exchange A[i+1] with A[r]
    return i + 1

// Example:
// Input: A = [3, 2, 1, 5, 4], k = 3
//
// First call: p = 1, r = 5, k = 3
//   q = 3 (after PARTITION)
//   i = 3 - 1 + 1 = 3
//   k = i, return A[3] = 3
//
// Output: 3`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Partition: Divide array using pivot element</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compare: Check if k-th element is found</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recurse: Search in appropriate subarray</span>
      </div>
    </div>
  </div>
);
