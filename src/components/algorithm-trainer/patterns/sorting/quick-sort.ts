import { AlgorithmPattern } from "../../types";

export const quick_sortPattern: AlgorithmPattern = {
  title: "Quick Sort Algorithm",
  description:
    "A divide-and-conquer algorithm that picks a pivot element and partitions the array around it.",
  timeComplexity: "O(n log n) average case, O(n²) worst case",
  spaceComplexity: "O(log n) due to recursion stack",
  pseudocode: `1. Base case: If array length <= 1, return array\n2. Choose pivot:\n   a. Select last element as pivot\n   b. Initialize left = 0, right = len(arr) - 2\n3. Partition:\n   a. While left <= right:\n      - If arr[left] <= pivot: move left pointer right\n      - If arr[right] > pivot: move right pointer left\n      - If both conditions false: swap elements\n   b. Place pivot in correct position\n4. Recursively sort:\n   a. Sort left subarray (elements <= pivot)\n   b. Sort right subarray (elements > pivot)`,
  example: `arr = [7, 2, 1, 6, 8, 5, 3, 4]
    
    First partition (pivot = 4):
    [7, 2, 1, 6, 8, 5, 3, 4]
     L                    P
    Swap 7 and 3:
    [3, 2, 1, 6, 8, 5, 7, 4]
        L              R
    Swap 6 and 1:
    [3, 2, 1, 6, 8, 5, 7, 4]
           L        R
    Final partition:
    [3, 2, 1, 4, 8, 5, 7, 6]
              P
    
    Recursive calls:
    Left: [3, 2, 1]
Right: [8, 5, 7, 6]`,
  implementation: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[-1]
    left = 0
    right = len(arr) - 2
    
    while left <= right:
        if arr[left] <= pivot:
            left += 1
        elif arr[right] > pivot:
            right -= 1
        else:
            arr[left], arr[right] = arr[right], arr[left]
    
    arr[left], arr[-1] = arr[-1], arr[left]
    
    return quick_sort(arr[:left]) + [pivot] + quick_sort(arr[left+1:])`,
  category: "Sorting",
};
