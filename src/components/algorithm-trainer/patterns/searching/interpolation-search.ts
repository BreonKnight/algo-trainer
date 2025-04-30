import { AlgorithmPattern } from "../../types";

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
  example: `// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = interpolationSearch(arr, target);
console.log(result); // 4

// For non-uniformly distributed data
const nonUniformArr = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const target2 = 30;
const result2 = interpolationSearch(nonUniformArr, target2);
console.log(result2); // 3`,
  implementation: `function interpolationSearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right && target >= arr[left] && target <= arr[right]) {
    // If target is at the boundaries
    if (left === right) {
      if (arr[left] === target) {
        return left;
      }
      return -1;
    }
    
    // Probing the position with keeping uniform distribution in mind
    const pos = left + Math.floor(
      ((right - left) * (target - arr[left])) / (arr[right] - arr[left])
    );
    
    // Target found
    if (arr[pos] === target) {
      return pos;
    }
    
    // If target is larger, target is in upper part
    if (arr[pos] < target) {
      left = pos + 1;
    }
    // If target is smaller, target is in lower part
    else {
      right = pos - 1;
    }
  }
  
  return -1; // Target not found
}`,
  category: "searching",
};
