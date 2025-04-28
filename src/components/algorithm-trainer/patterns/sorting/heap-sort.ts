import { AlgorithmPattern } from "../../types";

export const heapsortPattern: AlgorithmPattern = {
  title: "Heap Sort Algorithm",
  description:
    "A comparison-based sorting algorithm that uses a binary heap data structure to build a max-heap and repeatedly extract the maximum element.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Build max heap from input array\n2. Repeatedly extract maximum:\n   a. Swap root with last element\n   b. Reduce heap size by 1\n   c. Heapify root node\n3. Return sorted array`,
  example: `arr = [4, 10, 3, 5, 1]
Build max heap:
     10
    /  \\
   5    3
  / \\
 4   1

Extract max elements:
1. [1, 5, 3, 4] | 10
2. [1, 4, 3] | 5, 10
3. [1, 3] | 4, 5, 10
4. [1] | 3, 4, 5, 10

Result: [1, 3, 4, 5, 10]`,
  implementation: `def heap_sort(arr):
def heapify(arr, n, i):
    largest = i
        left = 2 * i + 1
        right = 2 * i + 2
    
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    
    return arr`,
};
