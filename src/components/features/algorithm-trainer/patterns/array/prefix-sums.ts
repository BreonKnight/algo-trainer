import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const prefixSumsPattern: AlgorithmPattern = {
  title: "Prefix Sums",
  description:
    "Prefix Sums is a technique that precomputes cumulative sums of array elements to efficiently answer range sum queries.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  category: "Array",
  difficulty: "Easy",
  keyPoints: [
    "Precomputes cumulative sums for efficient range queries",
    "Transforms O(n) range sum queries into O(1) operations",
    "Useful for problems involving subarray sums",
    "Can be extended to 2D arrays for matrix range queries",
  ],
  commonUseCases: [
    "Finding sum of any subarray in O(1) time",
    "Finding subarrays with target sum",
    "Counting subarrays with specific properties",
    "2D range queries in matrices",
  ],
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
  relatedPatterns: ["Sliding Window", "Two Pointers", "Binary Search"],
  tips: [
    "Initialize prefix array with size n+1 for easier indexing",
    "Remember to handle edge cases (empty array, single element)",
    "Consider using 0-based or 1-based indexing consistently",
    "For 2D arrays, compute both row and column prefix sums",
  ],
};
