import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const HeapSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Heap Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: In-place sorting with guaranteed
      performance
    </div>

    <PseudocodeDisplay
      code={`HEAPSORT(A):
    BUILD-MAX-HEAP(A)
    for i ← length[A] downto 2:
        exchange A[1] with A[i]
        heap-size[A] ← heap-size[A] - 1
        MAX-HEAPIFY(A, 1)

BUILD-MAX-HEAP(A):
    heap-size[A] ← length[A]
    for i ← ⌊length[A]/2⌋ downto 1:
        MAX-HEAPIFY(A, i)

MAX-HEAPIFY(A, i):
    l ← LEFT(i)
    r ← RIGHT(i)
    if l ≤ heap-size[A] and A[l] > A[i]:
        largest ← l
    else:
        largest ← i
    if r ≤ heap-size[A] and A[r] > A[largest]:
        largest ← r
    if largest ≠ i:
        exchange A[i] with A[largest]
        MAX-HEAPIFY(A, largest)

LEFT(i):
    return 2i

RIGHT(i):
    return 2i + 1

// Example:
// Input: A = [3, 7, 8, 5, 2, 1, 9, 5, 4]
//
// Build max heap:
//        9
//      /   \\
//     7     8
//    / \\   / \\
//   5   2 1   5
//  / \\
// 3   4
//
// Extract max and heapify:
// [9, 8, 7, 5, 5, 4, 3, 2, 1]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Build max heap from array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Extract maximum element</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Maintain heap property</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Advantages:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>In-place sorting algorithm</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Guaranteed O(n log n) performance</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>No extra space required</span>
        </div>
      </div>
    </div>
  </div>
);
