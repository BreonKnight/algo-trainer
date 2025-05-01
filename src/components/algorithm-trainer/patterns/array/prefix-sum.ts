import { AlgorithmPattern } from "../../types";

export const prefixSumPattern: AlgorithmPattern = {
  title: "Prefix Sum Pattern",
  description:
    "A technique that precomputes cumulative sums of array elements to efficiently answer range sum queries.",
  timeComplexity: "Build: O(n), Query: O(1)",
  spaceComplexity: "O(n) for prefix array",
  category: "Array",
  pseudocode: `
Prefix Sum operations:
1. Build prefix array:
   - prefix[0] = arr[0]
   - For i from 1 to n-1:
     * prefix[i] = prefix[i-1] + arr[i]
2. Range sum query(left, right):
   - If left == 0:
     * Return prefix[right]
   - Else:
     * Return prefix[right] - prefix[left-1]
`,
  example: `Array: [1, 2, 3, 4, 5]
Prefix: [1, 3, 6, 10, 15]

Query sum(1, 3):
prefix[3] - prefix[0] = 10 - 1 = 9
(sum of elements at indices 1,2,3)

Query sum(2, 4):
prefix[4] - prefix[1] = 15 - 3 = 12
(sum of elements at indices 2,3,4)`,
  implementation: `class PrefixSum:
    def __init__(self, arr):
        self.prefix = [0] * len(arr)
        self.build_prefix(arr)
    
    def build_prefix(self, arr):
        self.prefix[0] = arr[0]
    for i in range(1, len(arr)):
            self.prefix[i] = self.prefix[i-1] + arr[i]
    
    def range_sum(self, left, right):
        if left == 0:
            return self.prefix[right]
        return self.prefix[right] - self.prefix[left-1]
    
    def range_average(self, left, right):
        sum_range = self.range_sum(left, right)
        return sum_range / (right - left + 1)`,
};
