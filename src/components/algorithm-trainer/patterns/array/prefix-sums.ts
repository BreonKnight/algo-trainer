import { AlgorithmPattern } from "../../types";

export const prefixSumsPattern: AlgorithmPattern = {
  title: "Prefix Sums",
  description:
    "Prefix Sums is a technique that precomputes cumulative sums of array elements to efficiently answer range sum queries.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  pseudocode: `
    // Build prefix sums
    prefix_sums = [0] * (len(arr) + 1)

    for i in range(len(arr)):
        prefix_sums[i + 1] = prefix_sums[i] + arr[i]

    // Query range sum
    def range_sum(left, right):
        return prefix_sums[right + 1] - prefix_sums[left]
`,
  example: `arr = [1, 2, 3, 4, 5]
    prefix_sums = [0, 1, 3, 6, 10, 15]

    range_sum(1, 3) = 9
`,
  implementation: `def prefix_sums(arr):
    n = len(arr)
    prefix_sums = [0] * (n + 1)
    for i in range(n):
        prefix_sums[i + 1] = prefix_sums[i] + arr[i]
    return prefix_sums
`,
  category: "Array",
};
