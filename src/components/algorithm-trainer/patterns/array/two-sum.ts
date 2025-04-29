import { AlgorithmPattern } from "../../types";

export const two_sumPattern: AlgorithmPattern = {
  title: "Two Sum Algorithm (Brute Force)",
  description:
    "A problem-solving pattern that finds two numbers in an array that sum to a target value using a brute force approach.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. For i from 0 to n-1:\n   a. For j from i+1 to n-1:\n      - If arr[i] + arr[j] == target:\n         * Return [i, j]\n2. Return [] if no solution found`,
  example: `arr = [2, 7, 11, 15]
target = 9

Step 1: i=0, j=1
2 + 7 = 9
Found solution: [0, 1]`,
  implementation: `def two_sum(arr, target):
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == target:
                return [i, j]
    return []`,
  category: "Array",
};
