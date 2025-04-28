import { AlgorithmPattern } from "../../types";

export const stack_sortPattern: AlgorithmPattern = {
  title: "Stack Sort Algorithm",
  description: "A sorting algorithm that uses a stack data structure to sort elements in descending order.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Initialize an empty stack\n2. For each element in the input array:\n   a. While stack is not empty and top element > current number:\n      - Pop elements from stack\n   b. Push current number to stack\n3. Return the sorted stack`,
  example: `Input: [5, 2, 8, 1, 9, 3]

Step 1: Push 5
Stack: [5]

Step 2: Push 2
Stack: [5, 2]

Step 3: Push 8
Stack: [8]

Step 4: Push 1
Stack: [8, 1]

Step 5: Push 9
Stack: [9]

Step 6: Push 3
Stack: [9, 3]

Final result: [9, 3]`,
  implementation: `def stack_sort(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack`
};
