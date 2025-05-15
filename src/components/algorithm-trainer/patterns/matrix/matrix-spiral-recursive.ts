import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const matrixSpiralRecursivePattern: AlgorithmPattern = {
  title: "Matrix Spiral Recursive",
  description:
    "A recursive approach to traverse a matrix in spiral order, which breaks down the spiral traversal into smaller subproblems.",
  timeComplexity: "O(m*n) where m is rows and n is columns",
  spaceComplexity: "O(min(m,n)) due to recursive call stack",
  category: "Array",
  pseudocode: `
Recursive Spiral steps:
1. Base cases:
   - Empty matrix
   - Single row/column
2. Process outer layer:
   - Traverse top row
   - Traverse right column
   - Traverse bottom row
   - Traverse left column
3. Recursively process inner matrix
`,
  example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Recursive calls:
1. Outer layer: 1,2,3,6,9,8,7,4
2. Inner matrix: [5]`,
  implementation: `def spiral_recursive(matrix):
    if not matrix or not matrix[0]:
        return []
    
    def spiral_helper(top, bottom, left, right):
        if top > bottom or left > right:
            return []
        
        result = []
        
        # Single row
        if top == bottom:
            return [matrix[top][j] for j in range(left, right + 1)]
        
        # Single column
        if left == right:
            return [matrix[i][left] for i in range(top, bottom + 1)]
        
        # Process outer layer
        # Top row
        result.extend(matrix[top][j] for j in range(left, right + 1))
        
        # Right column
        result.extend(matrix[i][right] for i in range(top + 1, bottom))
        
        # Bottom row
        result.extend(matrix[bottom][j] for j in range(right, left - 1, -1))
        
        # Left column
        result.extend(matrix[i][left] for i in range(bottom - 1, top, -1))
        
        # Recursively process inner matrix
        result.extend(spiral_helper(top + 1, bottom - 1, 
                                 left + 1, right - 1))
        
        return result
    
    return spiral_helper(0, len(matrix) - 1, 
                        0, len(matrix[0]) - 1)`,
};
