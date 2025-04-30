import { AlgorithmPattern } from "../../types";

export const rotateMatrixPattern: AlgorithmPattern = {
  title: "Rotate Matrix",
  description:
    "Rotate a 2D matrix 90 degrees clockwise. This is like rotating a map of the Ancient Forest to get a better view of monster paths.",
  category: "Array",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Transpose the matrix (swap rows and columns)
2. Reverse each row`,
  example: `# Example: Rotating a 2x2 matrix
matrix = [
    [1, 2],
    [3, 4]
]
rotate_matrix(matrix)
# Result: [
#   [3, 1],
#   [4, 2]
# ]`,
  implementation: `def rotate_matrix(matrix):
    n = len(matrix)
    # Transpose the matrix
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()
    return matrix`,
};
