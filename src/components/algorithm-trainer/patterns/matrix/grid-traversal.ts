import type { AlgorithmPattern } from "../../types";

export const gridTraversalPattern: AlgorithmPattern = {
  title: "Grid Traversal",
  description:
    "Traverse a 2D grid using different patterns like spiral, diagonal, or zigzag.",
  timeComplexity: "O(n*m)",
  spaceComplexity: "O(1)",
  pseudocode: `function spiralTraversal(grid):
    result = []
    top, bottom = 0, len(grid)-1
    left, right = 0, len(grid[0])-1
    
    while top <= bottom and left <= right:
        # Top row
        for i in range(left, right+1):
            result.append(grid[top][i])
        top += 1
        
        # Right column
        for i in range(top, bottom+1):
            result.append(grid[i][right])
        right -= 1
        
        if top <= bottom:
            # Bottom row
            for i in range(right, left-1, -1):
                result.append(grid[bottom][i])
            bottom -= 1
        
        if left <= right:
            # Left column
            for i in range(bottom, top-1, -1):
                result.append(grid[i][left])
            left += 1
    
    return result`,
  example: `const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const result = spiralTraversal(grid);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]`,
  implementation: `function spiralTraversal(grid: number[][]): number[] {
  const result: number[] = [];
  let top = 0, bottom = grid.length - 1;
  let left = 0, right = grid[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Top row
    for (let i = left; i <= right; i++) {
      result.push(grid[top][i]);
    }
    top++;
    
    // Right column
    for (let i = top; i <= bottom; i++) {
      result.push(grid[i][right]);
    }
    right--;
    
    if (top <= bottom) {
      // Bottom row
      for (let i = right; i >= left; i--) {
        result.push(grid[bottom][i]);
      }
      bottom--;
    }
    
    if (left <= right) {
      // Left column
      for (let i = bottom; i >= top; i--) {
        result.push(grid[i][left]);
      }
      left++;
    }
  }
  
  return result;
}`,
  category: "matrix",
};
