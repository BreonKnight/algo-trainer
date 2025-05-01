import { AlgorithmPattern } from "../../types";

export const insertionSortPattern: AlgorithmPattern = {
  title: "Insertion Sort Algorithm",
  description:
    "A simple sorting algorithm that builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 1 to n-1:\n   a. key = arr[i]\n   b. j = i - 1\n   c. While j >= 0 and arr[j] > key:\n      - arr[j+1] = arr[j]\n      - j = j - 1\n   d. arr[j+1] = key\n2. Return sorted array`,
  example: `arr = [5, 3, 8, 4, 2]

Step 1: i=1, key=3
  Compare 5 > 3: Shift 5 right
  [3, 5, 8, 4, 2]

Step 2: i=2, key=8
  Compare 5 > 8: No shift needed
  [3, 5, 8, 4, 2]

Step 3: i=3, key=4
  Compare 8 > 4: Shift 8 right
  Compare 5 > 4: Shift 5 right
  [3, 4, 5, 8, 2]

Step 4: i=4, key=2
  Compare 8 > 2: Shift 8 right
  Compare 5 > 2: Shift 5 right
  Compare 4 > 2: Shift 4 right
  Compare 3 > 2: Shift 3 right
  [2, 3, 4, 5, 8]

Final sorted array: [2, 3, 4, 5, 8]`,
  implementation: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`,
  category: "Sorting",
};
