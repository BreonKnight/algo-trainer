import { AlgorithmPattern } from "../../types";

export const selection_sortPattern: AlgorithmPattern = {
  title: "Selection Sort Algorithm",
  description: "A simple sorting algorithm that divides the input into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region to add to the sorted region.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 0 to n-1:\n   a. Find minimum element in unsorted region [i..n-1]\n   b. Swap minimum element with first element of unsorted region\n2. Return sorted array`,
  example: `arr = [64, 25, 12, 22, 11]

First pass:
[64, 25, 12, 22, 11] -> min = 11
[11, 25, 12, 22, 64]

Second pass:
[11, 25, 12, 22, 64] -> min = 12
[11, 12, 25, 22, 64]

Third pass:
[11, 12, 25, 22, 64] -> min = 22
[11, 12, 22, 25, 64]

Fourth pass:
[11, 12, 22, 25, 64] -> min = 25
[11, 12, 22, 25, 64]`,
  implementation: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`
};
