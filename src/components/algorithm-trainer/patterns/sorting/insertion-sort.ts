import { AlgorithmPattern } from "../../types";

export const insertion_sortPattern: AlgorithmPattern = {
  title: "Insertion Sort Algorithm",
  description: "A simple sorting algorithm that builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.",
  timeComplexity: "O(n²) worst/average case, O(n) best case",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 1 to n-1:\n   a. key = arr[i]\n   b. j = i - 1\n   c. While j >= 0 and arr[j] > key:\n      - Move arr[j] one position ahead\n      - Decrement j\n   d. Place key at correct position\n2. Return sorted array`,
  example: `arr = [12, 11, 13, 5, 6]

Pass 1: [11, 12, 13, 5, 6]
Pass 2: [11, 12, 13, 5, 6]
Pass 3: [5, 11, 12, 13, 6]
Pass 4: [5, 6, 11, 12, 13]

Key steps for inserting 5:
[11, 12, 13, 13, 6]
[11, 12, 12, 13, 6]
[11, 11, 12, 13, 6]
[5, 11, 12, 13, 6]`,
  implementation: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`
};
