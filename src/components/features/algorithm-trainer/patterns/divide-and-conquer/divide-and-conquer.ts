import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const divideAndConquerPattern: AlgorithmPattern = {
  title: "Divide and Conquer",
  description:
    "A problem-solving approach that recursively breaks down a problem into smaller, more manageable subproblems until they become simple enough to solve directly. The solutions to the subproblems are then combined to solve the original problem.",
  timeComplexity: "Varies by algorithm, typically O(n log n) for sorting and searching algorithms",
  spaceComplexity:
    "Varies by algorithm, typically O(log n) for recursive algorithms due to the call stack",
  pseudocode: `1. Divide the problem into smaller subproblems\n2. Conquer the subproblems by solving them recursively\n3. Combine the solutions of the subproblems to solve the original problem\n\nBase case: If the problem is small enough, solve it directly\nRecursive case: Divide, conquer, and combine`,
  example: `Problem: Merge Sort\n\nGiven: [38, 27, 43, 3, 9, 82, 10]\n\nDivide:\n[38, 27, 43, 3] | [9, 82, 10]\n[38, 27] | [43, 3] | [9, 82] | [10]\n[38] | [27] | [43] | [3] | [9] | [82] | [10]\n\nConquer (merge):\n[27, 38] | [3, 43] | [9, 82] | [10]\n[3, 27, 38, 43] | [9, 10, 82]\n[3, 9, 10, 27, 38, 43, 82]\n\nResult: [3, 9, 10, 27, 38, 43, 82]`,
  implementation: `def merge_sort(arr):\n    # Base case: if the array has 0 or 1 elements, it's already sorted\n    if len(arr) <= 1:\n        return arr\n    \n    # Divide: split the array into two halves\n    mid = len(arr) // 2\n    left = arr[:mid]\n    right = arr[mid:]\n    \n    # Conquer: recursively sort the two halves\n    left = merge_sort(left)\n    right = merge_sort(right)\n    \n    # Combine: merge the sorted halves\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    \n    # Compare elements from both arrays and merge them in sorted order\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    \n    # Append any remaining elements\n    result.extend(left[i:])\n    result.extend(right[j:])\n    \n    return result\n\n# Example usage\narr = [38, 27, 43, 3, 9, 82, 10]\nsorted_arr = merge_sort(arr)\nprint(f"Sorted array: {sorted_arr}")`,
  category: "Divide and Conquer",
  difficulty: "Medium",
};
