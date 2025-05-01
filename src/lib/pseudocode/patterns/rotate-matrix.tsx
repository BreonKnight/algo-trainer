import { ChevronRight } from "lucide-react";

export const RotateMatrixPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Rotate Matrix</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Rotate matrix 90
      degrees
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`ROTATE-CLOCKWISE(A)
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
10 return A

// Example:
// Input: A = [[1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9]]
// 
// Clockwise rotation:
// Step 1: Transpose
//         [[1, 4, 7],
//          [2, 5, 8],
//          [3, 6, 9]]
// Step 2: Reverse rows
//         [[7, 4, 1],
//          [8, 5, 2],
//          [9, 6, 3]]
// 
// Counterclockwise rotation:
// Step 1: Transpose
//         [[1, 4, 7],
//          [2, 5, 8],
//          [3, 6, 9]]
// Step 2: Reverse columns
//         [[3, 6, 9],
//          [2, 5, 8],
//          [1, 4, 7]]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transpose: Swap elements across diagonal</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Clockwise: Reverse each row</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Counterclockwise: Reverse each column</span>
      </div>
    </div>
  </div>
);
