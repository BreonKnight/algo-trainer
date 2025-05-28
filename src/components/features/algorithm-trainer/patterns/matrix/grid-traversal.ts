import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const gridTraversalPattern: AlgorithmPattern = {
  title: "Grid Traversal",
  description: "Traverse a 2D grid using different patterns like spiral, diagonal, or zigzag.",
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
  example: `const gridPatternPatternPatternPattern = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const resultPatternPatternPatternPattern = spiralTraversal(grid);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]`,
  implementation: `def spiral_traversal(grid: list[list[int]]) -> list[int]:
    """
    Traverse a 2D grid in a spiral pattern.
    
    Args:
        grid: 2D matrix to traverse
    
    Returns:
        List of elements in spiral order
    """
    result = []
    top, bottom = 0, len(grid) - 1
    left, right = 0, len(grid[0]) - 1
    
    while top <= bottom and left <= right:
        # Top row
        for i in range(left, right + 1):
            result.append(grid[top][i])
        top += 1
        
        # Right column
        for i in range(top, bottom + 1):
            result.append(grid[i][right])
        right -= 1
        
        if top <= bottom:
            # Bottom row
            for i in range(right, left - 1, -1):
                result.append(grid[bottom][i])
            bottom -= 1
        
        if left <= right:
            # Left column
            for i in range(bottom, top - 1, -1):
                result.append(grid[i][left])
            left += 1
    
    return result

def diagonal_traversal(grid: list[list[int]]) -> list[int]:
    """
    Traverse a 2D grid in a diagonal pattern.
    
    Args:
        grid: 2D matrix to traverse
    
    Returns:
        List of elements in diagonal order
    """
    result = []
    m, n = len(grid), len(grid[0])
    
    for d in range(m + n - 1):
        if d % 2 == 0:
            # Upward diagonal
            i = min(d, m - 1)
            j = d - i
            while i >= 0 and j < n:
                result.append(grid[i][j])
                i -= 1
                j += 1
        else:
            # Downward diagonal
            j = min(d, n - 1)
            i = d - j
            while j >= 0 and i < m:
                result.append(grid[i][j])
                i += 1
                j -= 1
    
    return result

def zigzag_traversal(grid: list[list[int]]) -> list[int]:
    """
    Traverse a 2D grid in a zigzag pattern.
    
    Args:
        grid: 2D matrix to traverse
    
    Returns:
        List of elements in zigzag order
    """
    result = []
    m, n = len(grid), len(grid[0])
    
    for i in range(m):
        if i % 2 == 0:
            # Left to right
            for j in range(n):
                result.append(grid[i][j])
        else:
            # Right to left
            for j in range(n - 1, -1, -1):
                result.append(grid[i][j])
    
    return result

# Example usage
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(f"Spiral traversal: {spiral_traversal(grid)}")  # [1, 2, 3, 6, 9, 8, 7, 4, 5]
print(f"Diagonal traversal: {diagonal_traversal(grid)}")  # [1, 2, 4, 7, 5, 3, 6, 8, 9]
print(f"Zigzag traversal: {zigzag_traversal(grid)}")  # [1, 2, 3, 6, 5, 4, 7, 8, 9]`,
  category: "Matrix",
};
