import { AlgorithmPattern } from "../../types";

export const binary_search_on_answerPattern: AlgorithmPattern = {
  title: "Binary Search on Answer Algorithm",
  description: "A problem-solving pattern that uses binary search to find an answer in a range of possible values, typically used when the answer space is monotonic.",
  timeComplexity: "O(log n) * C, where C is the cost of checking a value",
  spaceComplexity: "O(1)",
  pseudocode: `1. Define check(x) function that returns true if x is valid\n2. Initialize left = min_possible, right = max_possible\n3. While left < right:\n   a. mid = (left + right) // 2\n   b. If check(mid):\n      - right = mid\n   c. Else:\n      - left = mid + 1\n4. Return left`,
  example: `Problem: Find square root of 16
left = 1, right = 16

Step 1: mid = 8
check(8): 8*8 > 16
right = 8

Step 2: mid = 4
check(4): 4*4 = 16
right = 4

Step 3: left = 4, right = 4
Answer: 4`,
  implementation: `def binary_search_answer(min_val, max_val, check):
    def check(x):
        # Problem-specific check function
        pass
    
    left, right = min_val, max_val
    while left < right:
        mid = (left + right) // 2
        if check(mid):
            right = mid
        else:
            left = mid + 1
    
    return left`
};
