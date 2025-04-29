import { AlgorithmPattern } from "../../types";

export const two_sum_two_pointersPattern: AlgorithmPattern = {
  title: "Two Sum Algorithm (Two Pointers)",
  description:
    "A solution to the Two Sum problem using two pointers technique, which requires the array to be sorted.",
  timeComplexity: "O(n log n) due to sorting",
  spaceComplexity: "O(1) if modifying input array, O(n) if creating new array",
  category: "Array",
  pseudocode: `1. Sort the array (if not already sorted)\n2. Initialize left = 0, right = n-1\n3. While left < right:\n   a. sum = arr[left] + arr[right]\n   b. If sum == target:\n      - Return [left, right]\n   c. If sum < target:\n      - left++\n   d. Else:\n      - right--\n4. Return [] if no solution found`,
  example: `arr = [15, 2, 11, 7]
sorted = [2, 7, 11, 15]
target = 9

Step 1: sum = 2 + 15 = 17 > 9
right--

Step 2: sum = 2 + 11 = 13 > 9
right--

Step 3: sum = 2 + 7 = 9 == target
Found solution: [0, 1]`,
  implementation: `def two_sum_two_pointers(arr, target):
    # Create sorted copy to preserve original indices
    sorted_arr = sorted(arr)
    left, right = 0, len(arr) - 1
    
    while left < right:
        curr_sum = sorted_arr[left] + sorted_arr[right]
        if curr_sum == target:
            # Find original indices
            i = arr.index(sorted_arr[left])
            j = arr.index(sorted_arr[right])
            return [min(i, j), max(i, j)]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return []`,
};
