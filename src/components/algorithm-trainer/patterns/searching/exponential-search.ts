import { AlgorithmPattern } from "../../types";

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
  example: `// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = exponentialSearch(arr, target);
console.log(result); // 4

// For unbounded arrays
function findInUnboundedArray(arr, target):
    # Start with a small range
    i = 1
    while arr[i] < target:
        i = i * 2
    
    # Now we have a range where target might be present
    return exponentialSearch(arr, target)`,
  implementation: `function exponentialSearch(arr: number[], target: number): number {
  // If target is at first position
  if (arr[0] === target) {
    return 0;
  }
  
  // Find range for binary search
  let i = 1;
  const n = arr.length;
  
  while (i < n && arr[i] <= target) {
    i = i * 2;
  }
  
  // Call binary search for the found range
  return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

function binarySearch(
  arr: number[],
  target: number,
  left: number,
  right: number
): number {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Target not found
}

// For unbounded arrays
function findInUnboundedArray(arr: number[], target: number): number {
  // Start with a small range
  let i = 1;
  while (arr[i] < target) {
    i = i * 2;
  }
  
  // Now we have a range where target might be present
  return exponentialSearch(arr, target);
}`,
  category: "searching",
};
