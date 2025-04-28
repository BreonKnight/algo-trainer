import { AlgorithmPattern } from "../../types";

export const matrix_traversal_recursivePattern: AlgorithmPattern = {
  title: "Matrix Traversal Recursive",
  description: "A recursive approach to traverse a 2D matrix, which can be particularly useful for problems requiring backtracking or complex traversal patterns.",
  timeComplexity: "O(m*n) where m is rows and n is columns",
  spaceComplexity: "O(m*n) due to recursive call stack",
  pseudocode: `
Matrix Recursive Traversal steps:
1. Base case: Check bounds and conditions
2. Process current cell
3. Recursive calls for next positions:
   - Call for next row
   - Call for next column
4. Backtrack if needed
`,
  example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Recursive traversal (row-first):
traverse(0,0) -> 1
  traverse(1,0) -> 4
    traverse(2,0) -> 7
      traverse(0,1) -> 2
        ...`,
  implementation: `def matrix_traversal_recursive(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    def traverse(row, col):
        # Base case: out of bounds
        if row >= rows or col >= cols:
        return
        
        # Process current cell
        result.append(matrix[row][col])
        
        # Recursive calls
        if col + 1 < cols:
            # Move right in current row
            traverse(row, col + 1)
        elif row + 1 < rows:
            # Move to start of next row
            traverse(row + 1, 0)
    
    traverse(0, 0)
    return result`
};
