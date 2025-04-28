import { AlgorithmPattern } from "../../types";

export const kadanes_algorithmPattern: AlgorithmPattern = {
  title: "Kadane's Algorithm Pattern",
  description: "A dynamic programming algorithm for finding the maximum subarray sum in a one-dimensional array.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  pseudocode: `
Kadane's Algorithm steps:
1. Initialize:
   - current_sum = max_sum = arr[0]
2. For each element from index 1:
   a. current_sum = max(element, current_sum + element)
   b. max_sum = max(max_sum, current_sum)
3. Return max_sum
`,
  example: `Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Steps:
-2: curr=-2, max=-2
1:  curr=1,  max=1
-3: curr=-2, max=1
4:  curr=4,  max=4
-1: curr=3,  max=4
2:  curr=5,  max=5
1:  curr=6,  max=6
-5: curr=1,  max=6
4:  curr=5,  max=6

Maximum subarray sum: 6
Subarray: [4, -1, 2, 1]`,
  implementation: `def kadanes_algorithm(arr):
    if not arr:
        return 0
    
    current_sum = max_sum = arr[0]
    start = end = temp_start = 0
    
    for i in range(1, len(arr)):
        if arr[i] > current_sum + arr[i]:
            current_sum = arr[i]
            temp_start = i
        else:
            current_sum = current_sum + arr[i]
        
        if current_sum > max_sum:
            max_sum = current_sum
            start = temp_start
            end = i
    
    return max_sum, arr[start:end+1]

def kadanes_algorithm_simple(arr):
    if not arr:
        return 0
    
    current_sum = max_sum = arr[0]
    
    for num in arr[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    
    return max_sum`
};
