import { AlgorithmPattern } from "../../types";

export const slidingWindowPattern: AlgorithmPattern = {
  title: "Sliding Window Pattern",
  description:
    "An algorithmic technique that involves maintaining a subset of elements as a window that slides over the data, typically used for array/string problems involving contiguous sequences.",
  timeComplexity: "Usually O(n)",
  spaceComplexity: "Usually O(1) or O(k) where k is window size",
  category: "Array",
  pseudocode: `1. Initialize window pointers (start, end)\n2. Initialize window state (sum, count, etc.)\n3. While end < array length:\n   a. Add element at end to window\n   b. While window condition not met:\n      - Remove element at start from window\n      - Increment start\n   c. Update result if needed\n   d. Increment end`,
  example: `Problem: Find max sum subarray of size k
Array: [2, 1, 5, 1, 3, 2], k=3

Window sums:
[2, 1, 5] = 8
[1, 5, 1] = 7
[5, 1, 3] = 9
[1, 3, 2] = 6

Max sum: 9`,
  implementation: `def sliding_window(arr, k):
    if not arr or k <= 0:
        return 0
        
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        # Remove first element of previous window
        window_sum -= arr[i-k]
        # Add last element of current window
        window_sum += arr[i]
        # Update max
        max_sum = max(max_sum, window_sum)
    
    return max_sum`,
};
