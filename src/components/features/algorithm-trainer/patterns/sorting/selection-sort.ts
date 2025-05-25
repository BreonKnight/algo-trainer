import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const selectionSortPattern: AlgorithmPattern = {
  title: "Selection Sort Algorithm",
  description:
    "A simple sorting algorithm that divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the smallest element and moving it to the sorted region. It has the advantage of making the minimum number of swaps of any sorting algorithm.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Divide the array into sorted and unsorted regions
2. Find the minimum element in the unsorted region
3. Swap it with the first element of the unsorted region
4. Move the boundary between sorted and unsorted regions one element to the right
5. Repeat steps 2-4 until the unsorted region is empty`,
  example: `arr = [64, 25, 12, 22, 11]

Step 1: Find minimum (11) and swap with first element
[11, 25, 12, 22, 64]

Step 2: Find minimum (12) in unsorted region and swap
[11, 12, 25, 22, 64]

Step 3: Find minimum (22) in unsorted region and swap
[11, 12, 22, 25, 64]

Step 4: Find minimum (25) in unsorted region and swap
[11, 12, 22, 25, 64]

Step 5: Find minimum (64) in unsorted region and swap
[11, 12, 22, 25, 64]

Final result: [11, 12, 22, 25, 64]`,
  implementation: `def selection_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Find the minimum element in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr`,
  category: "Sorting",
  keyPoints: [
    "Simple and intuitive algorithm",
    "In-place sorting algorithm",
    "Not stable (may change relative order of equal elements)",
    "Makes minimum number of swaps",
  ],
  commonUseCases: [
    "Small data sets",
    "When minimizing swaps is important",
    "When memory writes are expensive",
    "Educational purposes",
  ],
  relatedPatterns: ["Bubble Sort", "Insertion Sort", "Heap Sort"],
  tips: [
    "Use for small arrays (n < 50)",
    "Good choice when minimizing swaps is important",
    "Consider using a min-heap for better performance",
    "Can be used as a building block in more complex algorithms",
  ],
};
