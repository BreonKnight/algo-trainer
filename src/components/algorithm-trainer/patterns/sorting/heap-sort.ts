import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const heapSortPattern: AlgorithmPattern = {
  title: "Heap Sort Algorithm",
  description:
    "A comparison-based sorting algorithm that uses a binary heap data structure. It divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the largest element and moving it to the sorted region.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Build a max heap from the input array
2. At this point, the largest item is stored at the root of the heap
3. Replace it with the last item of the heap followed by reducing the size of heap by 1
4. Heapify the root of the tree
5. Repeat steps 2-4 while size of heap is greater than 1`,
  example: `arr = [4, 10, 3, 5, 1]

Step 1: Build max heap
[10, 5, 3, 4, 1]

Step 2: Extract max (10) and heapify
[5, 4, 3, 1, 10]

Step 3: Extract max (5) and heapify
[4, 1, 3, 5, 10]

Step 4: Extract max (4) and heapify
[3, 1, 4, 5, 10]

Step 5: Extract max (3) and heapify
[1, 3, 4, 5, 10]

Final result: [1, 3, 4, 5, 10]`,
  implementation: `def heapify(arr, n, i):
    largest = i  # Initialize largest as root
    left = 2 * i + 1  # left = 2*i + 1
    right = 2 * i + 2  # right = 2*i + 2
    
    # See if left child of root exists and is greater than root
    if left < n and arr[left] > arr[largest]:
        largest = left
    
    # See if right child of root exists and is greater than root
    if right < n and arr[right] > arr[largest]:
        largest = right
    
    # Change root if needed
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap
        heapify(arr, n, largest)  # Heapify the root

def heap_sort(arr):
    n = len(arr)
    
    # Build a maxheap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)
    
    return arr`,
  category: "Sorting",
  keyPoints: [
    "In-place sorting algorithm",
    "Not stable (may change relative order of equal elements)",
    "Guaranteed O(n log n) time complexity",
    "Uses binary heap data structure",
  ],
  commonUseCases: [
    "Priority queue implementation",
    "External sorting",
    "Real-time systems",
    "Embedded systems",
  ],
  relatedPatterns: ["Binary Heap", "Priority Queue", "Selection Sort"],
  tips: [
    "Use a max heap for ascending order, min heap for descending order",
    "Consider using a binary heap implementation for better performance",
    "Heap sort is often used in hybrid algorithms",
    "Good choice when memory is limited",
  ],
};
