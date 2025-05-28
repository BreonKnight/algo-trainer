import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const bubbleSortPattern: AlgorithmPattern = {
  title: "Bubble Sort Algorithm",
  description:
    "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements 'bubble' to the top of the list.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Start from the first element
2. Compare adjacent elements
3. If they are in wrong order, swap them
4. Move to the next pair
5. After each pass, the largest element will be in its correct position
6. Repeat steps 1-5 for remaining elements`,
  example: `arr = [5, 1, 4, 2, 8]

First Pass:
[5, 1, 4, 2, 8] -> [1, 5, 4, 2, 8] (5 > 1)
[1, 5, 4, 2, 8] -> [1, 4, 5, 2, 8] (5 > 4)
[1, 4, 5, 2, 8] -> [1, 4, 2, 5, 8] (5 > 2)
[1, 4, 2, 5, 8] -> [1, 4, 2, 5, 8] (5 < 8)

Second Pass:
[1, 4, 2, 5, 8] -> [1, 4, 2, 5, 8] (1 < 4)
[1, 4, 2, 5, 8] -> [1, 2, 4, 5, 8] (4 > 2)
[1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] (4 < 5)
[1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] (5 < 8)

Third Pass:
[1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] (no swaps needed)

Final result: [1, 2, 4, 5, 8]`,
  implementation: `def bubble_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Flag to optimize if no swaps occur
        swapped = False
        
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # If no swapping occurred in this pass, array is sorted
        if not swapped:
            break
    
    return arr`,
  category: "Sorting",
  keyPoints: [
    "Simple and intuitive algorithm",
    "Stable sorting algorithm",
    "In-place sorting algorithm",
    "Can be optimized to detect if array is already sorted",
  ],
  commonUseCases: [
    "Educational purposes",
    "Small data sets",
    "Nearly sorted data",
    "When simplicity is more important than performance",
  ],
  relatedPatterns: ["Selection Sort", "Insertion Sort", "Cocktail Sort"],
  tips: [
    "Use for small arrays (n < 50)",
    "Good choice when data is nearly sorted",
    "Consider using the optimized version with early termination",
    "Can be used as a building block in more complex algorithms",
  ],
};
