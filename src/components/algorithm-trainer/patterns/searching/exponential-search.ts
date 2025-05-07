import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const exponentialSearchPattern: AlgorithmPattern = {
  title: "Exponential Search",
  description:
    "A search algorithm for unbounded or infinite sorted arrays. It first finds a range where the target might be present, then performs a binary search within that range.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  pseudocode: `function exponentialSearch(arr, target):
    # If target is at first position
    if arr[0] == target:
        return 0
    
    # Find range for binary search
    i = 1
    n = arr.length
    
    while i < n and arr[i] <= target:
        i = i * 2
    
    # Call binary search for the found range
    return binarySearch(arr, target, i // 2, min(i, n - 1))

function binarySearch(arr, target, left, right):
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Target not found`,
  example: `# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
result = exponential_search(arr, target)
print(result)  # 4

# For unbounded arrays
def find_in_unbounded_array(arr, target):
    # Start with a small range
    i = 1
    while arr[i] < target:
        i = i * 2
    
    # Now we have a range where target might be present
    return exponential_search(arr, target)`,
  implementation: `from typing import List

def binary_search(arr: List[int], target: int, left: int, right: int) -> int:
    """
    Binary search implementation for a given range.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
        left: Left boundary of search range
        right: Right boundary of search range
    
    Returns:
        Index of target if found, -1 otherwise
    """
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Target not found

def exponential_search(arr: List[int], target: int) -> int:
    """
    Exponential search implementation.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
    
    Returns:
        Index of target if found, -1 otherwise
    """
    # If target is at first position
    if arr[0] == target:
        return 0
    
    # Find range for binary search
    i = 1
    n = len(arr)
    
    while i < n and arr[i] <= target:
        i = i * 2
    
    # Call binary search for the found range
    return binary_search(arr, target, i // 2, min(i, n - 1))

def find_in_unbounded_array(arr: List[int], target: int) -> int:
    """
    Find target in an unbounded array.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
    
    Returns:
        Index of target if found, -1 otherwise
    """
    # Start with a small range
    i = 1
    while arr[i] < target:
        i = i * 2
    
    # Now we have a range where target might be present
    return exponential_search(arr, target)`,
  category: "Searching",
};
