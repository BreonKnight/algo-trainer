import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const HeapPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Heap
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Priority queue implementation
    </div>

    <PseudocodeDisplay
      code={`// Get parent index
PARENT(i):
  return ⌊i/2⌋

// Get left child index
LEFT(i):
  return 2i

// Get right child index
RIGHT(i):
  return 2i + 1

// Maintain heap property
MAX-HEAPIFY(A, i):
  l = LEFT(i)
  r = RIGHT(i)
  largest = i
  if l ≤ A.heap-size and A[l] > A[i]:
    largest = l
  if r ≤ A.heap-size and A[r] > A[largest]:
    largest = r
  if largest ≠ i:
    exchange A[i] with A[largest]
    MAX-HEAPIFY(A, largest)

// Build max heap
BUILD-MAX-HEAP(A):
  A.heap-size = A.length
  for i = ⌊A.length/2⌋ downto 1:
    MAX-HEAPIFY(A, i)

// Extract maximum element
HEAP-EXTRACT-MAX(A):
  if A.heap-size < 1:
    error "heap underflow"
  max = A[1]
  A[1] = A[A.heap-size]
  A.heap-size = A.heap-size - 1
  MAX-HEAPIFY(A, 1)
  return max

// Increase key value
HEAP-INCREASE-KEY(A, i, key):
  if key < A[i]:
    error "new key is smaller than current key"
  A[i] = key
  while i > 1 and A[PARENT(i)] < A[i]:
    exchange A[i] with A[PARENT(i)]
    i = PARENT(i)

// Insert new element
MAX-HEAP-INSERT(A, key):
  A.heap-size = A.heap-size + 1
  A[A.heap-size] = -∞
  HEAP-INCREASE-KEY(A, A.heap-size, key)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Create max heap from array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract:</span> Remove and return maximum
        element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add new element maintaining heap
        property
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Heap Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial array: [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
After BUILD-MAX-HEAP: [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
After HEAP-EXTRACT-MAX: [14, 8, 10, 4, 7, 9, 3, 2, 1]
After MAX-HEAP-INSERT(15): [15, 14, 10, 8, 7, 9, 3, 2, 1, 4]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Heap Properties</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Parent of 2: 1
Left child of 1: 2
Right child of 1: 3
Heap size: 10
Maximum element: 16`}
      </pre>
    </div>
  </div>
);
