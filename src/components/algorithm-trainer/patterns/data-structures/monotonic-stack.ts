import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const monotonicStackPattern: AlgorithmPattern = {
  title: "Monotonic Stack Pattern",
  description:
    "A stack that maintains its elements in a strictly increasing or decreasing order, useful for finding the next/previous greater/smaller element.",
  timeComplexity: "O(n) amortized for n elements",
  category: "Data Structures",
  spaceComplexity: "O(n) for stack",
  pseudocode: `
Monotonic Stack operations:
1. For each element:
   a. While stack not empty and current element breaks monotonicity:
      - Pop elements
      - Process popped elements
   b. Push current element
2. Process remaining elements in stack
`,
  example: `Find next greater element:
Array: [4, 5, 2, 10, 8]

Steps:
4: stack=[4]
5: pop 4, stack=[5]
2: stack=[5,2]
10: pop 2,5, stack=[10]
8: stack=[10,8]

Result: [5, 10, 10, -1, -1]`,
  implementation: `def next_greater_element(arr):
    n = len(arr)
    result = [-1] * n
    stack = []
    
    for i in range(n):
        while stack and arr[i] > arr[stack[-1]]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)
    
    return result

def previous_smaller_element(arr):
    n = len(arr)
    result = [-1] * n
    stack = []
    
    for i in range(n):
        while stack and arr[i] < arr[stack[-1]]:
            stack.pop()
        if stack:
            result[i] = arr[stack[-1]]
        stack.append(i)
    
    return result`,
};
