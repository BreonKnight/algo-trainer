import { AlgorithmPattern } from "../../types";

export const linear_searchPattern: AlgorithmPattern = {
  title: "Linear Search Algorithm",
  description: "A simple search algorithm that checks each element in the list sequentially until a match is found or the whole list has been searched.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 0 to n-1:\n   a. If arr[i] == target:\n      - Return i\n2. Return -1 if not found`,
  example: `arr = [64, 34, 25, 12, 22, 11, 90]
target = 12

Step 1: Check 64 ≠ 12
Step 2: Check 34 ≠ 12
Step 3: Check 25 ≠ 12
Step 4: Check 12 = 12
Found at index 3!`,
  implementation: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`
};
