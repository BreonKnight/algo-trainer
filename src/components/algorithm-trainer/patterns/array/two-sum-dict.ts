import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const twoSumDictPattern: AlgorithmPattern = {
  title: "Two Sum Dictionary",
  description:
    "A problem-solving pattern that finds two numbers in an array that sum to a target value using a dictionary/hash map for optimal time complexity.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  category: "Array",
  pseudocode: `1. Create an empty dictionary to store numbers and their indices
2. For each number in the array:
   a. Calculate the complement (target - current number)
   b. If complement exists in dictionary:
      - Return [current index, complement's index]
   c. Store current number and its index in dictionary
3. Return [] if no solution found`,
  example: `arr = [2, 7, 11, 15]
target = 9

Step 1: num = 2, complement = 7
dict = {2: 0}

Step 2: num = 7, complement = 2
Found 2 in dict at index 0
Solution: [0, 1]`,
  implementation: `def two_sum_dict(arr, target):
    num_dict = {}
    for i, num in enumerate(arr):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i
    return []`,
};
