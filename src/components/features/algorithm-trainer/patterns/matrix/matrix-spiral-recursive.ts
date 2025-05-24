import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const matrixSpiralRecursivePattern: AlgorithmPattern = {
  title: "Matrix Spiral Recursive",
  description:
    "A recursive approach to traverse a matrix in a spiral pattern, starting from the outer layer and moving inward.",
  timeComplexity: "O(m*n)",
  spaceComplexity: "O(m*n) for recursion stack",
  category: "Matrix",
  difficulty: "Medium",
  pseudocode: `function spiralTraversal(matrix, startRow, endRow, startCol, endCol):
    if startRow > endRow or startCol > endCol:
        return []
    
    result = []
    
    # Traverse top row
    for j from startCol to endCol:
        result.push(matrix[startRow][j])
    
    # Traverse right column
    for i from startRow+1 to endRow:
        result.push(matrix[i][endCol])
    
    # Traverse bottom row if exists
    if startRow < endRow:
        for j from endCol-1 to startCol:
            result.push(matrix[endRow][j])
    
    # Traverse left column if exists
    if startCol < endCol:
        for i from endRow-1 to startRow+1:
            result.push(matrix[i][startCol])
    
    # Recursively process inner spiral
    result.push(...spiralTraversal(matrix, startRow+1, endRow-1, startCol+1, endCol-1))
    
    return result`,
  example: `Matrix:
[1,  2,  3,  4]
[5,  6,  7,  8]
[9,  10, 11, 12]
[13, 14, 15, 16]

Spiral Traversal: 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10`,
  implementation: `def spiral_traversal(matrix, start_row, end_row, start_col, end_col):
    if start_row > end_row or start_col > end_col:
        return []
    
    result = []
    
    # Traverse top row
    for j in range(start_col, end_col + 1):
        result.append(matrix[start_row][j])
    
    # Traverse right column
    for i in range(start_row + 1, end_row + 1):
        result.append(matrix[i][end_col])
    
    # Traverse bottom row if exists
    if start_row < end_row:
        for j in range(end_col - 1, start_col - 1, -1):
            result.append(matrix[end_row][j])
    
    # Traverse left column if exists
    if start_col < end_col:
        for i in range(end_row - 1, start_row, -1):
            result.append(matrix[i][start_col])
    
    # Recursively process inner spiral
    result.extend(spiral_traversal(matrix, start_row + 1, end_row - 1, start_col + 1, end_col - 1))
    
    return result

# Example usage
matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
]

result = spiral_traversal(matrix, 0, len(matrix) - 1, 0, len(matrix[0]) - 1)
print("Spiral Traversal:", result)`,
};
