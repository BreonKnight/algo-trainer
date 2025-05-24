import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const matrixSpiralTraversalPattern: AlgorithmPattern = {
  title: "Matrix Spiral Traversal",
  description:
    "An iterative approach to traverse a matrix in a spiral pattern, starting from the outer layer and moving inward.",
  timeComplexity: "O(m*n)",
  spaceComplexity: "O(1) for traversal, O(m*n) if storing results",
  category: "Matrix",
  difficulty: "Medium",
  pseudocode: `function spiralTraversal(matrix):
    if matrix is empty:
        return []
    
    result = []
    top = 0, bottom = rows-1
    left = 0, right = cols-1
    
    while top <= bottom and left <= right:
        # Traverse top row
        for j from left to right:
            result.push(matrix[top][j])
        top++
        
        # Traverse right column
        for i from top to bottom:
            result.push(matrix[i][right])
        right--
        
        if top <= bottom:
            # Traverse bottom row
            for j from right to left:
                result.push(matrix[bottom][j])
            bottom--
        
        if left <= right:
            # Traverse left column
            for i from bottom to top:
                result.push(matrix[i][left])
            left++
    
    return result`,
  example: `Matrix:
[1,  2,  3,  4]
[5,  6,  7,  8]
[9,  10, 11, 12]
[13, 14, 15, 16]

Spiral Traversal: 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10`,
  implementation: `def spiral_traversal(matrix):
    if not matrix or not matrix[0]:
        return []
    
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        # Traverse top row
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        
        # Traverse right column
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse bottom row
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        
        if left <= right:
            # Traverse left column
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result

# Example usage
matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
]

result = spiral_traversal(matrix)
print("Spiral Traversal:", result)`,
};
