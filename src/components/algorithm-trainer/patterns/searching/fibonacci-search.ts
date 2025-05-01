import { AlgorithmPattern } from "../../types";

export const fibonacciSearchPattern: AlgorithmPattern = {
  title: "Fibonacci Search",
  description:
    "A search algorithm that uses Fibonacci numbers to divide the array into unequal parts. It's a divide and conquer algorithm that works on sorted arrays.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  pseudocode: `function fibonacciSearch(arr, target):
    n = len(arr)
    
    # Initialize Fibonacci numbers
    fibMMinus2 = 0  # (m-2)'th Fibonacci number
    fibMMinus1 = 1  # (m-1)'th Fibonacci number
    fibM = fibMMinus2 + fibMMinus1  # m'th Fibonacci number
    
    # fibM is going to store the smallest Fibonacci number greater than or equal to n
    while fibM < n:
        fibMMinus2 = fibMMinus1
        fibMMinus1 = fibM
        fibM = fibMMinus2 + fibMMinus1
    
    # Marks the eliminated range from front
    offset = -1
    
    # While there are elements to be inspected
    while fibM > 1:
        # Check if fibMMinus2 is a valid location
        i = min(offset + fibMMinus2, n - 1)
        
        # If target is greater than the value at index i, cut the subarray from offset to i
        if arr[i] < target:
            fibM = fibMMinus1
            fibMMinus1 = fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
            offset = i
        
        # If target is less than the value at index i, cut the subarray after i+1
        elif arr[i] > target:
            fibM = fibMMinus2
            fibMMinus1 = fibMMinus1 - fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
        
        # Element found
        else:
            return i
    
    # Compare the last element with target
    if fibMMinus1 and arr[offset + 1] == target:
        return offset + 1
    
    return -1  # Target not found`,
  example: `# Example usage
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
result = fibonacci_search(arr, target)
print(result)  # 4

# For a larger array
large_arr = [i for i in range(1, 1001)]
target2 = 500
result2 = fibonacci_search(large_arr, target2)
print(result2)  # 499

# Using optimized version
result3 = fibonacci_search_optimized(arr, target)
print(result3)  # 4`,
  implementation: `from typing import List

def fibonacci_search(arr: List[int], target: int) -> int:
    """
    Basic Fibonacci search implementation.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
    
    Returns:
        Index of target if found, -1 otherwise
    """
    n = len(arr)
    
    # Initialize Fibonacci numbers
    fibMMinus2 = 0  # (m-2)'th Fibonacci number
    fibMMinus1 = 1  # (m-1)'th Fibonacci number
    fibM = fibMMinus2 + fibMMinus1  # m'th Fibonacci number
    
    # fibM is going to store the smallest Fibonacci number greater than or equal to n
    while fibM < n:
        fibMMinus2 = fibMMinus1
        fibMMinus1 = fibM
        fibM = fibMMinus2 + fibMMinus1
    
    # Marks the eliminated range from front
    offset = -1
    
    # While there are elements to be inspected
    while fibM > 1:
        # Check if fibMMinus2 is a valid location
        i = min(offset + fibMMinus2, n - 1)
        
        # If target is greater than the value at index i, cut the subarray from offset to i
        if arr[i] < target:
            fibM = fibMMinus1
            fibMMinus1 = fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
            offset = i
        
        # If target is less than the value at index i, cut the subarray after i+1
        elif arr[i] > target:
            fibM = fibMMinus2
            fibMMinus1 = fibMMinus1 - fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
        
        # Element found
        else:
            return i
    
    # Compare the last element with target
    if fibMMinus1 and arr[offset + 1] == target:
        return offset + 1
    
    return -1  # Target not found

def fibonacci_search_optimized(arr: List[int], target: int) -> int:
    """
    Optimized Fibonacci search implementation with early termination.
    
    Args:
        arr: Sorted array of integers
        target: Value to search for
    
    Returns:
        Index of target if found, -1 otherwise
    """
    n = len(arr)
    
    # Initialize Fibonacci numbers
    fibMMinus2 = 0
    fibMMinus1 = 1
    fibM = fibMMinus2 + fibMMinus1
    
    # Find the smallest Fibonacci number greater than or equal to n
    while fibM < n:
        fibMMinus2 = fibMMinus1
        fibMMinus1 = fibM
        fibM = fibMMinus2 + fibMMinus1
    
    offset = -1
    
    while fibM > 1:
        i = min(offset + fibMMinus2, n - 1)
        
        # Early termination if we've gone past the target
        if arr[i] > target:
            break
        
        if arr[i] < target:
            fibM = fibMMinus1
            fibMMinus1 = fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
            offset = i
        else:
            return i
    
    # Check the last element
    if fibMMinus1 and arr[offset + 1] == target:
        return offset + 1
    
    return -1`,
  category: "searching",
};
