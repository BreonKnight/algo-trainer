import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const matrixSpiralTraversalPattern: AlgorithmPattern = {
  title: "Matrix Spiral Traversal",
  description:
    "An iterative pattern to traverse a matrix in a spiral order, moving in a clockwise direction from the outer elements to the inner elements.",
  timeComplexity: "O(m*n) where m is rows and n is columns",
  spaceComplexity: "O(1) excluding the result array",
  category: "Array",
  pseudocode: `
Spiral Traversal steps:
1. Initialize boundaries: top, bottom, left, right
2. While boundaries haven't crossed:
   a. Traverse right (top row)
   b. Traverse down (right column)
   c. Traverse left (bottom row)
   d. Traverse up (left column)
   e. Update boundaries inward
`,
  example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Spiral order: 1,2,3,6,9,8,7,4,5

Steps:
1. Top row: 1,2,3
2. Right col: 6,9
3. Bottom row: 8,7
4. Left col: 4
5. Inner element: 5`,
  implementation: `def spiral_traversal(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    top = 0
    bottom = rows - 1
    left = 0
    right = cols - 1

    while top <= bottom and left <= right:
        # Traverse right
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        
        # Traverse down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse left
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        
        if left <= right:
            # Traverse up
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result`,
};
