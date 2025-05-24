import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const matrixTraversalRecursivePattern: AlgorithmPattern = {
  title: "Matrix Traversal Recursive",
  description:
    "A recursive approach to traverse a matrix, which breaks down the traversal into smaller subproblems.",
  timeComplexity: "O(m*n)",
  spaceComplexity: "O(m*n) for recursion stack",
  category: "Matrix",
  difficulty: "Easy",
  pseudocode: `function traverseMatrix(matrix, row, col, visited):
    if row < 0 or row >= rows or col < 0 or col >= cols:
        return
    if visited[row][col]:
        return
    
    # Process current cell
    process(matrix[row][col])
    visited[row][col] = true
    
    # Recursively traverse in all four directions
    traverseMatrix(matrix, row-1, col, visited)  # Up
    traverseMatrix(matrix, row+1, col, visited)  # Down
    traverseMatrix(matrix, row, col-1, visited)  # Left
    traverseMatrix(matrix, row, col+1, visited)  # Right`,
  example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Recursive Traversal starting from (0,0):
1. Process (0,0): 1
2. Process (0,1): 2
3. Process (0,2): 3
4. Process (1,2): 6
5. Process (2,2): 9
6. Process (2,1): 8
7. Process (2,0): 7
8. Process (1,0): 4
9. Process (1,1): 5`,
  implementation: `def traverse_matrix(matrix, row, col, visited):
    rows = len(matrix)
    cols = len(matrix[0])
    
    # Base cases
    if row < 0 or row >= rows or col < 0 or col >= cols:
        return
    if visited[row][col]:
        return
    
    # Process current cell
    print(matrix[row][col], end=" ")
    visited[row][col] = True
    
    # Recursively traverse in all four directions
    traverse_matrix(matrix, row - 1, col, visited)  # Up
    traverse_matrix(matrix, row + 1, col, visited)  # Down
    traverse_matrix(matrix, row, col - 1, visited)  # Left
    traverse_matrix(matrix, row, col + 1, visited)  # Right

# Example usage
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Initialize visited matrix
visited = [[False for _ in range(len(matrix[0]))] for _ in range(len(matrix))]

print("Recursive Traversal:")
traverse_matrix(matrix, 0, 0, visited)`,
};
