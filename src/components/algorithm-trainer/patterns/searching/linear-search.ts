import { AlgorithmPattern } from "../../types/pattern-types";

export const linearSearchPattern: AlgorithmPattern = {
  title: "Linear Search",
  description: "Simple search algorithm for unsorted arrays",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 0 to n-1:\n   a. If arr[i] == target:\n      - Return i\n2. Return -1 if not found`,
  example: `arr = [10, 20, 30, 40, 50]
target = 30

Step 1: i=0, arr[0]=10 ≠ 30
Step 2: i=1, arr[1]=20 ≠ 30
Step 3: i=2, arr[2]=30 = 30
Found at index 2!`,
  implementation: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
  category: "Searching",
};
