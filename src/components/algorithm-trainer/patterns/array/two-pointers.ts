import { AlgorithmPattern } from "../../types/pattern-types";

export const twoPointersPattern: AlgorithmPattern = {
  title: "Two Pointers Pattern",
  description:
    "A technique that uses two pointers to solve array-related problems efficiently, often moving them towards each other or in the same direction.",
  timeComplexity: "Usually O(n)",
  spaceComplexity: "Usually O(1)",
  category: "Array",
  difficulty: "Medium",
  keyPoints: [
    "Use two pointers to traverse the array",
    "Can move in opposite directions or same direction",
    "Often used for searching pairs or subarrays",
    "Efficient for sorted arrays",
  ],
  commonUseCases: [
    "Finding pairs that sum to a target",
    "Removing duplicates from sorted array",
    "Finding subarrays with specific properties",
    "Merging sorted arrays",
  ],
  pseudocode: `
Two Pointers patterns:
1. Opposite direction:
   - left = 0, right = n-1
   - While left < right:
     * Process elements
     * Move pointers based on condition
2. Same direction:
   - slow = fast = 0
   - While fast < n:
     * Process elements
     * Move pointers at different speeds
`,
  example: `Problem: Two Sum in sorted array
Array: [2, 7, 11, 15], target = 9

left = 0, right = 3
Step 1: 2 + 15 = 17 > 9
right--
Step 2: 2 + 11 = 13 > 9
right--
Step 3: 2 + 7 = 9 == target
Found pair: [0, 1]`,
  implementation: `def two_pointers_opposite(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    
    return []

def two_pointers_same_direction(arr):
    # Example: Remove duplicates
    if not arr:
        return 0
    
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    
    return slow + 1`,
  relatedPatterns: ["Sliding Window", "Binary Search", "Merge Sort"],
  tips: [
    "Always check array bounds before moving pointers",
    "Consider edge cases (empty array, single element)",
    "For opposite direction, ensure pointers don't cross",
    "For same direction, consider if you need to maintain order",
  ],
};
