import { ChevronRight } from "lucide-react";

export const HeapSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Heap Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: In-place
      sorting with guaranteed performance
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`HEAPSORT(A):
    BUILD-MAX-HEAP(A)
    for i = A.length downto 2:
        exchange A[1] with A[i]
        A.heap-size = A.heap-size - 1
        MAX-HEAPIFY(A, 1)

BUILD-MAX-HEAP(A):
    A.heap-size = A.length
    for i = ⌊A.length/2⌋ downto 1:
        MAX-HEAPIFY(A, i)

MAX-HEAPIFY(A, i):
    l = LEFT(i)
    r = RIGHT(i)
    
    if l ≤ A.heap-size and A[l] > A[i]:
        largest = l
    else:
        largest = i
    
    if r ≤ A.heap-size and A[r] > A[largest]:
        largest = r
    
    if largest ≠ i:
        exchange A[i] with A[largest]
        MAX-HEAPIFY(A, largest)

LEFT(i):
    return 2i

RIGHT(i):
    return 2i + 1`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build heap:</span> Convert
        array into a max-heap
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract max:</span> Remove
        maximum element and place at end
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Restore heap:</span> Fix
        heap property after removal
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        until heap is empty
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [5, 2, 9, 3, 7, 6, 1, 8, 4]

Build max-heap:
1. [9, 8, 6, 5, 7, 2, 1, 3, 4]

Sorting steps:
1. [8, 7, 6, 5, 4, 2, 1, 3, 9]
2. [7, 5, 6, 3, 4, 2, 1, 8, 9]
3. [6, 5, 2, 3, 4, 1, 7, 8, 9]
4. [5, 4, 2, 3, 1, 6, 7, 8, 9]
5. [4, 3, 2, 1, 5, 6, 7, 8, 9]
6. [3, 1, 2, 4, 5, 6, 7, 8, 9]
7. [2, 1, 3, 4, 5, 6, 7, 8, 9]
8. [1, 2, 3, 4, 5, 6, 7, 8, 9]

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
      </pre>
    </div>
  </div>
);
