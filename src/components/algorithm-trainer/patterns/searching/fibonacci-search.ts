import { AlgorithmPattern } from "../../types";

function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize Fibonacci numbers
  let fibM2 = 0; // (m-2)'th Fibonacci number
  let fibM1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibM1 + fibM2; // m'th Fibonacci number

  // fibM is going to store the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM1 + fibM2;
  }

  // Marks the eliminated range from front
  let offset = -1;

  // While there are elements to be inspected
  while (fibM > 1) {
    // Check if fibM2 is a valid location
    const i = Math.min(offset + fibM2, n - 1);

    // If target is greater than the value at index i, cut the subarray from offset to i
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    }
    // If target is less than the value at index i, cut the subarray after i+1
    else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    }
    // Element found
    else {
      return i;
    }
  }

  // Compare the last element with target
  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}

// Optimized version with early termination
function fibonacciSearchOptimized(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize Fibonacci numbers
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM1 + fibM2;

  // Find the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM1 + fibM2;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);

    // Early termination if we've gone past the target
    if (arr[i] > target) {
      break;
    }

    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else {
      return i;
    }
  }

  // Check the last element
  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}

export const fibonacciSearchPattern: AlgorithmPattern = {
  title: "Fibonacci Search",
  description:
    "A search algorithm that uses Fibonacci numbers to divide the search space and find an element in a sorted array",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  pseudocode: `def fibonacci_search(arr, target):
    n = len(arr)
    
    # Initialize Fibonacci numbers
    fibM2 = 0  # (m-2)'th Fibonacci number
    fibM1 = 1  # (m-1)'th Fibonacci number
    fibM = fibM1 + fibM2  # m'th Fibonacci number
    
    # Find the smallest Fibonacci number greater than or equal to n
    while fibM < n:
        fibM2 = fibM1
        fibM1 = fibM
        fibM = fibM1 + fibM2
    
    # Marks the eliminated range from front
    offset = -1
    
    # While there are elements to be inspected
    while fibM > 1:
        # Check if fibM2 is a valid location
        i = min(offset + fibM2, n - 1)
        
        # If target is greater than the value at index i
        if arr[i] < target:
            fibM = fibM1
            fibM1 = fibM2
            fibM2 = fibM - fibM1
            offset = i
        # If target is less than the value at index i
        elif arr[i] > target:
            fibM = fibM2
            fibM1 = fibM1 - fibM2
            fibM2 = fibM - fibM1
        # Element found
        else:
            return i
    
    # Compare the last element with target
    if fibM1 and arr[offset + 1] == target:
        return offset + 1
    
    return -1`,
  example: `// Basic Fibonacci search
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(fibonacciSearch(arr, 5)); // 4

// Optimized Fibonacci search
console.log(fibonacciSearchOptimized(arr, 5)); // 4

// Search for non-existent element
console.log(fibonacciSearch(arr, 10)); // -1`,
  implementation: `function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;
  
  // Initialize Fibonacci numbers
  let fibM2 = 0; // (m-2)'th Fibonacci number
  let fibM1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibM1 + fibM2; // m'th Fibonacci number
  
  // fibM is going to store the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM1 + fibM2;
  }
  
  // Marks the eliminated range from front
  let offset = -1;
  
  // While there are elements to be inspected
  while (fibM > 1) {
    // Check if fibM2 is a valid location
    const i = Math.min(offset + fibM2, n - 1);
    
    // If target is greater than the value at index i, cut the subarray from offset to i
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    }
    // If target is less than the value at index i, cut the subarray after i+1
    else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    }
    // Element found
    else {
      return i;
    }
  }
  
  // Compare the last element with target
  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }
  
  return -1;
}

function fibonacciSearchOptimized(arr: number[], target: number): number {
  const n = arr.length;
  
  // Initialize Fibonacci numbers
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM1 + fibM2;
  
  // Find the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM1 + fibM2;
  }
  
  let offset = -1;
  
  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);
    
    // Early termination if we've gone past the target
    if (arr[i] > target) {
      break;
    }
    
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else {
      return i;
    }
  }
  
  // Check the last element
  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }
  
  return -1;
}`,
  category: "searching",
};
