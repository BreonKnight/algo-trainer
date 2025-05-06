import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const HeapSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Heap Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: In-place sorting with guaranteed
      performance
    </div>

    <PseudocodeDisplay
      code={`// Standard Heap Sort
HEAP-SORT(A):
    n = len(A)

    # Build max heap
    for i = n//2 - 1 downto 0:
        MAX-HEAPIFY(A, n, i)

    # Extract elements one by one
    for i = n-1 downto 0:
        # Move current root to end
        swap(A[0], A[i])
        # Heapify reduced heap
        MAX-HEAPIFY(A, i, 0)

MAX-HEAPIFY(A, n, i):
    largest = i
    left = 2*i + 1
    right = 2*i + 2

    # Find largest among root and children
    if left < n and A[left] > A[largest]:
        largest = left
    if right < n and A[right] > A[largest]:
        largest = right

    # If root is not largest, swap and heapify
    if largest != i:
        swap(A[i], A[largest])
        MAX-HEAPIFY(A, n, largest)

// Min Heap Sort
MIN-HEAP-SORT(A):
    n = len(A)

    # Build min heap
    for i = n//2 - 1 downto 0:
        MIN-HEAPIFY(A, n, i)

    # Extract elements one by one
    for i = n-1 downto 0:
        # Move current root to end
        swap(A[0], A[i])
        # Heapify reduced heap
        MIN-HEAPIFY(A, i, 0)

MIN-HEAPIFY(A, n, i):
    smallest = i
    left = 2*i + 1
    right = 2*i + 2

    # Find smallest among root and children
    if left < n and A[left] < A[smallest]:
        smallest = left
    if right < n and A[right] < A[smallest]:
        smallest = right

    # If root is not smallest, swap and heapify
    if smallest != i:
        swap(A[i], A[smallest])
        MIN-HEAPIFY(A, n, smallest)

// Heap Sort with Custom Comparator
HEAP-SORT-COMPARATOR(A, compare):
    n = len(A)

    # Build heap with custom comparator
    for i = n//2 - 1 downto 0:
        HEAPIFY-COMPARATOR(A, n, i, compare)

    # Extract elements one by one
    for i = n-1 downto 0:
        swap(A[0], A[i])
        HEAPIFY-COMPARATOR(A, i, 0, compare)

HEAPIFY-COMPARATOR(A, n, i, compare):
    target = i
    left = 2*i + 1
    right = 2*i + 2

    # Find target using comparator
    if left < n and compare(A[left], A[target]):
        target = left
    if right < n and compare(A[right], A[target]):
        target = right

    # If root is not target, swap and heapify
    if target != i:
        swap(A[i], A[target])
        HEAPIFY-COMPARATOR(A, n, target, compare)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Construct max heap from array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract:</span> Remove max element and heapify
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue until array is sorted
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Heap Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [4, 10, 3, 5, 1]

Build heap:
[10, 5, 3, 4, 1]

Extract max:
[5, 4, 3, 1, 10]
[4, 1, 3, 5, 10]
[3, 1, 4, 5, 10]
[1, 3, 4, 5, 10]

Output: [1, 3, 4, 5, 10]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Min Heap Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [4, 10, 3, 5, 1]

Build heap:
[1, 4, 3, 5, 10]

Extract min:
[3, 4, 10, 5, 1]
[4, 5, 10, 3, 1]
[5, 10, 4, 3, 1]
[10, 5, 4, 3, 1]

Output: [10, 5, 4, 3, 1]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Custom Comparator</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: ["banana", "apple", "cherry", "date"]
Comparator: length

Build heap:
["banana", "date", "cherry", "apple"]

Extract:
["date", "apple", "cherry", "banana"]
["cherry", "apple", "date", "banana"]
["apple", "cherry", "date", "banana"]

Output: ["apple", "cherry", "date", "banana"]`}
      </pre>
    </div>
  </div>
);
