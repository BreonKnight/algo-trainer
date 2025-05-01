import { AlgorithmPattern } from "../../types";

export const monotonicQueuePattern: AlgorithmPattern = {
  title: "Monotonic Queue Pattern",
  description:
    "A queue that maintains its elements in a strictly increasing or decreasing order, commonly used for sliding window maximum/minimum problems.",
  timeComplexity: "O(n) for n elements",
  category: "Data Structures",
  spaceComplexity: "O(k) where k is window size",
  pseudocode: `
Monotonic Queue operations:
1. For each element:
   a. Remove elements outside window
   b. While queue not empty and current element breaks monotonicity:
      - Remove from back
   c. Add current element
   d. Front of queue is max/min in window
`,
  example: `Find maximum in sliding window of size 3:
Array: [1, 3, -1, -3, 5, 3, 6, 7]

Window positions:
[1, 3, -1] -> max=3
[3, -1, -3] -> max=3
[-1, -3, 5] -> max=5
[-3, 5, 3] -> max=5
[5, 3, 6] -> max=6
[3, 6, 7] -> max=7

Result: [3, 3, 5, 5, 6, 7]`,
  implementation: `from collections import deque

def sliding_window_maximum(arr, k):
    result = []
    window = deque()  # stores indices
    
    for i in range(len(arr)):
        # Remove elements outside window
        while window and window[0] <= i - k:
            window.popleft()
        
        # Remove smaller elements
        while window and arr[i] >= arr[window[-1]]:
            window.pop()
        
        window.append(i)
        
        # Add to result if window is complete
        if i >= k - 1:
            result.append(arr[window[0]])
    
    return result

def sliding_window_minimum(arr, k):
    result = []
    window = deque()  # stores indices
    
    for i in range(len(arr)):
        # Remove elements outside window
        while window and window[0] <= i - k:
            window.popleft()
        
        # Remove larger elements
        while window and arr[i] <= arr[window[-1]]:
            window.pop()
        
        window.append(i)
        
        # Add to result if window is complete
        if i >= k - 1:
            result.append(arr[window[0]])
    
    return result`,
};
