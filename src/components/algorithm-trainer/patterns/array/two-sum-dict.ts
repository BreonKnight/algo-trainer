import { AlgorithmPattern } from "../../types";

export const two_sum_dictPattern: AlgorithmPattern = {
  title: "Two Sum Dict Algorithm",
  description:
    "A problem-solving pattern that finds two numbers in an array that sum to a target value using a dictionary for O(n) time complexity.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Initialize an empty dictionary\n2. For each number in the array:\n   a. Calculate complement = target - number\n   b. If complement is in dictionary:\n      - Return [dictionary[complement], current_index]\n   c. Else:\n      - Add number and its index to dictionary\n3. Return [] if no solution found`,
  example: `arr = [2, 7, 11, 15]\ntarget = 9\n\nStep 1: dictionary = {}\nStep 2: complement = 9 - 2 = 7\n7 not in dictionary, add 2:0\nStep 3: complement = 9 - 7 = 2\n2 in dictionary at index 0\nFound solution: [0, 1]`,
  implementation: `def two_sum_dict(arr, target):\n    num_dict = {}\n    for i, num in enumerate(arr):\n        complement = target - num\n        if complement in num_dict:\n            return [num_dict[complement], i]\n        num_dict[num] = i\n    return []`,
};
