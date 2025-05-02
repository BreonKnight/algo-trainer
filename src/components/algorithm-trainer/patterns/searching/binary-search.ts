import { AlgorithmPattern } from "../../types";

export const binarySearchPattern: AlgorithmPattern = {
  title: "Binary Search",
  description: "Efficient search algorithm for sorted arrays",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Initialize left = 0, right = length - 1\n2. While left <= right:\n   a. mid = (left + right) // 2\n   b. If arr[mid] == target:\n      - Return mid\n   c. If arr[mid] < target:\n      - left = mid + 1\n   d. Else:\n      - right = mid - 1\n3. Return -1 if not found`,
  example: `arr = [1, 3, 5, 7, 9, 11, 13, 15]
    target = 7
    
Step 1: mid = 3
arr[3] = 7 == target
Found at index 3!

Example 2 (target = 10):
Step 1: mid = 3, arr[3] = 7 < 10
left = 4
Step 2: mid = 5, arr[5] = 11 > 10
right = 4
Step 3: left > right
Not found!`,
  implementation: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
  category: "Searching",
};
