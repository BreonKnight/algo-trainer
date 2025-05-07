import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const jumpSearchPattern: AlgorithmPattern = {
  title: "Jump Search",
  description:
    "A search algorithm for sorted arrays that jumps ahead by fixed steps and then performs linear search in the identified block.",
  timeComplexity: "O(√n)",
  spaceComplexity: "O(1)",
  pseudocode: `function jumpSearch(arr, target):
    n = len(arr)
    step = int(sqrt(n))
    prev = 0
    
    # Find the block where target might be present
    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(sqrt(n))
        if prev >= n:
            return -1
    
    # Perform linear search in the identified block
    while arr[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
    
    # If target is found
    if arr[prev] == target:
        return prev
    
    return -1  # Target not found`,
  example: `# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
result = jump_search(arr, target)
print(result)  # 4

# For a larger array
large_arr = [i for i in range(1, 1001)]
target2 = 500
result2 = jump_search(large_arr, target2)
print(result2)  # 499`,
  implementation: `from typing import List
import math

def jump_search(arr: List[int], target: int) -> int:
    """
    Jump search implementation.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
    
    Returns:
        Index of target if found, -1 otherwise
    """
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0
    
    # Find the block where target might be present
    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1
    
    # Perform linear search in the identified block
    while arr[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
    
    # If target is found
    if arr[prev] == target:
        return prev
    
    return -1  # Target not found`,
  category: "Searching",
};
