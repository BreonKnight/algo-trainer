import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const matrixTraversalPattern: AlgorithmPattern = {
  title: "Matrix Traversal",
  description:
    "A pattern for traversing a 2D matrix iteratively, typically using nested loops to visit each element in a specific order (row-wise or column-wise).",
  timeComplexity: "O(m*n) where m is rows and n is columns",
  spaceComplexity: "O(1) for traversal, O(m*n) if storing results",
  category: "Array",
  pseudocode: `
Matrix Traversal steps:
1. For each row i from 0 to rows-1:
   For each column j from 0 to cols-1:
     Process matrix[i][j]

Common variations:
- Row-wise: outer loop on rows
- Column-wise: outer loop on columns
- Different directions: top-down, bottom-up
- Different starting points
`,
  example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Row-wise traversal: 1,2,3,4,5,6,7,8,9
Column-wise traversal: 1,4,7,2,5,8,3,6,9`,
  implementation: `def matrix_traversal(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    # Row-wise traversal
    for i in range(rows):
        for j in range(cols):
            result.append(matrix[i][j])
    
    return result

def matrix_traversal_columnwise(matrix):
    if not matrix or not matrix[0]:
        return []
    
        rows = len(matrix)
        cols = len(matrix[0])
    result = []
    
    # Column-wise traversal
    for j in range(cols):
        for i in range(rows):
            result.append(matrix[i][j])
    
    return result`,
};
