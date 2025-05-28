import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const insertionSortPattern: AlgorithmPattern = {
  title: "Insertion Sort Algorithm",
  description:
    "A simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages: it is simple to implement, efficient for small data sets, stable, in-place, and online.",
  timeComplexity: "O(n²) worst and average case, O(n) best case",
  spaceComplexity: "O(1)",
  pseudocode: `1. Start from the second element (index 1)
2. Compare the current element with the previous elements
3. If the current element is smaller than the previous element:
   a. Shift the previous element to the right
   b. Continue until we find the correct position
4. Insert the current element in its correct position
5. Repeat steps 2-4 for all elements`,
  example: `arr = [12, 11, 13, 5, 6]

Step 1: [12, 11, 13, 5, 6]
         ^
         Current element: 11
         Shift 12 right
         [11, 12, 13, 5, 6]

Step 2: [11, 12, 13, 5, 6]
            ^
            Current element: 13
            No shift needed
            [11, 12, 13, 5, 6]

Step 3: [11, 12, 13, 5, 6]
               ^
               Current element: 5
               Shift 13, 12, 11 right
               [5, 11, 12, 13, 6]

Step 4: [5, 11, 12, 13, 6]
                  ^
                  Current element: 6
                  Shift 13, 12, 11 right
                  [5, 6, 11, 12, 13]

Final result: [5, 6, 11, 12, 13]`,
  implementation: `def insertion_sort(arr):
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
        key = arr[i]  # Current element to be inserted
        
        # Move elements of arr[0..i-1] that are greater than key
        # to one position ahead of their current position
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    
    return arr`,
  category: "Sorting",
  keyPoints: [
    "Simple and intuitive algorithm",
    "Stable sorting algorithm",
    "In-place sorting algorithm",
    "Efficient for small data sets",
  ],
  commonUseCases: [
    "Small data sets",
    "Nearly sorted data",
    "Online sorting",
    "Hybrid sorting algorithms",
  ],
  relatedPatterns: ["Selection Sort", "Bubble Sort", "Shell Sort"],
  tips: [
    "Use for small arrays (n < 50)",
    "Good choice when data is nearly sorted",
    "Consider using binary search for finding insertion point",
    "Can be used as a building block in more complex algorithms",
  ],
};
