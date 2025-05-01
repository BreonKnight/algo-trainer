import { AlgorithmPattern } from "../../types";

export const bubbleSortPattern: AlgorithmPattern = {
  title: "Bubble Sort Algorithm",
  description:
    "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 0 to n-1:\n   a. For j from 0 to n-i-1:\n      - If arr[j] > arr[j+1]:\n        * Swap arr[j] and arr[j+1]\n2. Return sorted array`,
  example: `arr = [64, 34, 25, 12, 22]

Pass 1: [34, 25, 12, 22, 64]
Pass 2: [25, 12, 22, 34, 64]
Pass 3: [12, 22, 25, 34, 64]
Pass 4: [12, 22, 25, 34, 64]`,
  implementation: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
  category: "Sorting",
};
