import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const ternarySearchPattern: AlgorithmPattern = {
  title: "Ternary Search",
  description:
    "A divide-and-conquer search algorithm that divides the search space into three parts instead of two, useful for finding the maximum or minimum of a unimodal function.",
  timeComplexity: "O(log3 n)",
  spaceComplexity: "O(1)",
  pseudocode: `function ternarySearch(arr, target):
    left = 0
    right = arr.length - 1
    
    while left <= right:
        # Calculate two midpoints
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        # Check if target is at either midpoint
        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2
            
        # Determine which third to search
        if target < arr[mid1]:
            right = mid1 - 1
        elif target > arr[mid2]:
            left = mid2 + 1
        else:
            left = mid1 + 1
            right = mid2 - 1
            
    return -1  # Target not found`,
  example: `// Example usage
const arrPatternPatternPattern = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetPatternPatternPattern = 5;
const resultPatternPatternPattern = ternarySearch(arr, target);
console.log(result); // 4

// Finding maximum of a unimodal function
function findMaximum(func, left, right, precision = 1e-6):
    while right - left > precision:
        mid1 = left + (right - left) / 3
        mid2 = right - (right - left) / 3
        
        if func(mid1) < func(mid2):
            left = mid1
        else:
            right = mid2
            
    return (left + right) / 2`,
  implementation: `def ternary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        # Calculate two midpoints
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        # Check if target is at either midpoint
        if arr[mid1] == target:
            return mid1
        if arr[mid2] == target:
            return mid2
        
        # Determine which third to search
        if target < arr[mid1]:
            right = mid1 - 1
        elif target > arr[mid2]:
            left = mid2 + 1
        else:
            left = mid1 + 1
            right = mid2 - 1
    
    return -1  # Target not found

# Finding maximum of a unimodal function
def find_maximum(func, left, right, precision=1e-6):
    while right - left > precision:
        mid1 = left + (right - left) / 3
        mid2 = right - (right - left) / 3
        
        if func(mid1) < func(mid2):
            left = mid1
        else:
            right = mid2
    
    return (left + right) / 2`,
  category: "Searching",
};
