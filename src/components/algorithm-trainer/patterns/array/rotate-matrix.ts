import { AlgorithmPattern } from "../../types";

export const rotateMatrixPattern: AlgorithmPattern = {
  title: "Rotate Matrix",
  description:
    "Rotate a 2D matrix 90 degrees clockwise. This is like rotating a map of the Ancient Forest to get a better view of monster paths.",
  category: "Array",
  pattern: `function rotateMatrix(matrix) {
  const n = matrix.length;
  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}`,
  example: `// Example: Rotating a 2x2 matrix
const matrix = [
  [1, 2],
  [3, 4]
];
rotateMatrix(matrix);
// Result: [
//   [3, 1],
//   [4, 2]
// ]`,
  explanation: `This algorithm rotates a matrix 90 degrees clockwise in two steps:
1. Transpose the matrix (swap rows and columns)
2. Reverse each row

Think of it like rotating a map of the Ancient Forest - first we flip it diagonally, then we mirror each row to get the final rotated view.`,
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  monsterHunterTheme: `In Monster Hunter, rotating the map is crucial for planning hunts. Just as hunters need to rotate their view to understand monster paths and terrain, this algorithm rotates a matrix to reveal new perspectives on the data.`,
  testCases: [
    {
      input: [
        [
          [1, 2],
          [3, 4],
        ],
      ],
      expected: [
        [3, 1],
        [4, 2],
      ],
    },
    {
      input: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      expected: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
  ],
};
