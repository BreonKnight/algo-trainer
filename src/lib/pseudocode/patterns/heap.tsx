import { ChevronRight } from "lucide-react";

export const HeapPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Heap</span>
      <span className="ml-2 text-xs text-secondary">(Priority Queue)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Priority-based
      operations
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Build max heap
BUILD-MAX-HEAP(A):
    heap-size = length(A)
    for i = floor(length(A)/2) downto 1:
        MAX-HEAPIFY(A, i)

// Maintain heap property
MAX-HEAPIFY(A, i):
    l = LEFT(i)
    r = RIGHT(i)
    largest = i
    if l ≤ heap-size and A[l] > A[i]:
        largest = l
    if r ≤ heap-size and A[r] > A[largest]:
        largest = r
    if largest ≠ i:
        exchange A[i] with A[largest]
        MAX-HEAPIFY(A, largest)

// Insert element
HEAP-INSERT(A, key):
    heap-size = heap-size + 1
    A[heap-size] = -∞
    HEAP-INCREASE-KEY(A, heap-size, key)

// Extract maximum
HEAP-EXTRACT-MAX(A):
    if heap-size < 1:
        error "heap underflow"
    max = A[1]
    A[1] = A[heap-size]
    heap-size = heap-size - 1
    MAX-HEAPIFY(A, 1)
    return max

// Increase key
HEAP-INCREASE-KEY(A, i, key):
    if key < A[i]:
        error "new key is smaller than current key"
    A[i] = key
    while i > 1 and A[PARENT(i)] < A[i]:
        exchange A[i] with A[PARENT(i)]
        i = PARENT(i)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Create max
        heap
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract:</span> Remove
        maximum
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Heap Operations
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial array: [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]

After BUILD-MAX-HEAP:
    [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]

After HEAP-INSERT(15):
    [16, 15, 10, 8, 14, 9, 3, 2, 4, 1, 7]

After HEAP-EXTRACT-MAX:
    [15, 14, 10, 8, 7, 9, 3, 2, 4, 1]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Heap Structure</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`        16
       /  \\
      14   10
     / \\   / \\
    8   7 9   3
   / \\ /
  2   4 1`}
      </pre>
    </div>
  </div>
);
