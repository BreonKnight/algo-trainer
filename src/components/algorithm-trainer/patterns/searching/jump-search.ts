import { AlgorithmPattern } from "../../types";

function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));

  // Finding the block where element may be present
  let prev = 0;
  let curr = Math.min(step, n) - 1;

  while (curr < n && arr[curr] < target) {
    prev = curr;
    curr = Math.min(curr + step, n - 1);
  }

  // Linear search for target in block beginning with prev
  while (prev <= curr) {
    if (arr[prev] === target) {
      return prev;
    }
    prev++;
  }

  return -1;
}

// Optimized version with binary search in the block
function jumpSearchOptimized(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));

  // Finding the block where element may be present
  let prev = 0;
  let curr = Math.min(step, n) - 1;

  while (curr < n && arr[curr] < target) {
    prev = curr;
    curr = Math.min(curr + step, n - 1);
  }

  // Binary search in the identified block
  let left = prev;
  let right = curr;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export const jumpSearchPattern: AlgorithmPattern = {
  title: "Jump Search",
  description:
    "A search algorithm for sorted arrays that jumps ahead by fixed steps and then performs a linear search in the identified block. It's more efficient than linear search but less efficient than binary search.",
  timeComplexity: "O(√n)",
  spaceComplexity: "O(1)",
  pseudocode: `function jumpSearch(arr, target):
    n = arr.length
    step = Math.floor(Math.sqrt(n))
    
    # Finding the block where element may be present
    prev = 0
    curr = Math.min(step, n) - 1
    
    while curr < n and arr[curr] < target:
        prev = curr
        curr = Math.min(curr + step, n - 1)
    
    # Linear search for target in block beginning with prev
    while prev <= curr:
        if arr[prev] == target:
            return prev
        prev += 1
    
    return -1  # Target not found`,
  example: `// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = jumpSearch(arr, target);
console.log(result); // 4

// Optimized version with binary search in the block
function jumpSearchOptimized(arr, target):
    n = arr.length
    step = Math.floor(Math.sqrt(n))
    
    # Finding the block where element may be present
    prev = 0
    curr = Math.min(step, n) - 1
    
    while curr < n and arr[curr] < target:
        prev = curr
        curr = Math.min(curr + step, n - 1)
    
    # Binary search in the identified block
    left = prev
    right = curr
    
    while left <= right:
        mid = Math.floor((left + right) / 2)
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
  implementation: `function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  
  // Finding the block where element may be present
  let prev = 0;
  let curr = Math.min(step, n) - 1;
  
  while (curr < n && arr[curr] < target) {
    prev = curr;
    curr = Math.min(curr + step, n - 1);
  }
  
  // Linear search for target in block beginning with prev
  while (prev <= curr) {
    if (arr[prev] === target) {
      return prev;
    }
    prev++;
  }
  
  return -1; // Target not found
}

// Optimized version with binary search in the block
function jumpSearchOptimized(arr: number[], target: number): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  
  // Finding the block where element may be present
  let prev = 0;
  let curr = Math.min(step, n) - 1;
  
  while (curr < n && arr[curr] < target) {
    prev = curr;
    curr = Math.min(curr + step, n - 1);
  }
  
  // Binary search in the identified block
  let left = prev;
  let right = curr;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Target not found
}`,
  category: "searching",
};
