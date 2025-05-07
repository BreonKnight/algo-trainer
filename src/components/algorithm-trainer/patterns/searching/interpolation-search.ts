import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const interpolationSearchPattern: AlgorithmPattern = {
  title: "Interpolation Search",
  description:
    "An improved variant of binary search that uses the value of the target to estimate its position in the array. It works best on uniformly distributed data.",
  timeComplexity: "O(log log n) average case, O(n) worst case",
  spaceComplexity: "O(1)",
  pseudocode: `function interpolationSearch(arr, target):
    left = 0
    right = arr.length - 1
    
    while left <= right and target >= arr[left] and target <= arr[right]:
        # If target is at the boundaries
        if left == right:
            if arr[left] == target:
                return left
            return -1
        
        # Probing the position with keeping uniform distribution in mind
        pos = left + int((right - left) * (target - arr[left]) / (arr[right] - arr[left]))
        
        # Target found
        if arr[pos] == target:
            return pos
        
        # If target is larger, target is in upper part
        if arr[pos] < target:
            left = pos + 1
        # If target is smaller, target is in lower part
        else:
            right = pos - 1
    
    return -1  # Target not found`,
  example: `# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
result = interpolation_search(arr, target)
print(result)  # 4

# For non-uniformly distributed data
non_uniform_arr = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90]
target2 = 30
result2 = interpolation_search(non_uniform_arr, target2)
print(result2)  # 3`,
  implementation: `from typing import List

def interpolation_search(arr: List[int], target: int) -> int:
    """
    Interpolation search implementation.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
    
    Returns:
        Index of target if found, -1 otherwise
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right and target >= arr[left] and target <= arr[right]:
        # If target is at the boundaries
        if left == right:
            if arr[left] == target:
                return left
            return -1
        
        # Probing the position with keeping uniform distribution in mind
        pos = left + int((right - left) * (target - arr[left]) / (arr[right] - arr[left]))
        
        # Target found
        if arr[pos] == target:
            return pos
        
        # If target is larger, target is in upper part
        if arr[pos] < target:
            left = pos + 1
        # If target is smaller, target is in lower part
        else:
            right = pos - 1
    
    return -1  # Target not found`,
  category: "Searching",
};
