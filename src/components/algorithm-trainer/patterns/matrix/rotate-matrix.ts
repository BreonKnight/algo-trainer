import { AlgorithmPattern } from "../../types";

export const rotateMatrixPattern: AlgorithmPattern = {
  title: "Rotate Matrix",
  description:
    "A pattern that rotates a matrix by 90 degrees clockwise or counterclockwise.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1) for in-place rotation",
  category: "Matrix",
  pseudocode: `ROTATE-CLOCKWISE(A)
1  n = A.rows
2  // Transpose the matrix
3  for i = 1 to n
4      for j = i to n
5          exchange A[i][j] with A[j][i]
6  // Reverse each row
7  for i = 1 to n
8      for j = 1 to n/2
9          exchange A[i][j] with A[i][n-j+1]
10 return A

ROTATE-COUNTERCLOCKWISE(A)
1  n = A.rows
2  // Transpose the matrix
3  for i = 1 to n
4      for j = i to n
5          exchange A[i][j] with A[j][i]
6  // Reverse each column
7  for j = 1 to n
8      for i = 1 to n/2
9          exchange A[i][j] with A[n-i+1][j]
10 return A`,
  example: `Original matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Clockwise rotation:
[7, 4, 1]
[8, 5, 2]
[9, 6, 3]

Counterclockwise rotation:
[3, 6, 9]
[2, 5, 8]
[1, 4, 7]`,
  implementation: `def rotate_clockwise(matrix: list[list[int]]) -> list[list[int]]:
    """
    Rotate a matrix 90 degrees clockwise.
    
    Args:
        matrix: 2D matrix to rotate
    
    Returns:
        Rotated matrix
    """
    # Transpose the matrix
    n = len(matrix)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for row in matrix:
        row.reverse()
    
    return matrix

def rotate_counterclockwise(matrix: list[list[int]]) -> list[list[int]]:
    """
    Rotate a matrix 90 degrees counterclockwise.
    
    Args:
        matrix: 2D matrix to rotate
    
    Returns:
        Rotated matrix
    """
    # Transpose the matrix
    n = len(matrix)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each column
    for i in range(n // 2):
        for j in range(n):
            matrix[i][j], matrix[n - 1 - i][j] = matrix[n - 1 - i][j], matrix[i][j]
    
    return matrix

# Example usage
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print("Original matrix:")
for row in matrix:
    print(row)

rotated_clockwise = rotate_clockwise([row[:] for row in matrix])
print("\nRotated clockwise:")
for row in rotated_clockwise:
    print(row)

rotated_counterclockwise = rotate_counterclockwise([row[:] for row in matrix])
print("\nRotated counterclockwise:")
for row in rotated_counterclockwise:
    print(row)`,
};
