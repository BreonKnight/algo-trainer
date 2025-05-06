import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const RotateMatrixPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Rotate Matrix
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Rotate matrix 90 degrees
    </div>

    <PseudocodeDisplay
      code={`ROTATE-CLOCKWISE(A)
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
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">1.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Transpose:</span> Swap elements across
          diagonal
        </span>
      </div>
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">2.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Clockwise:</span> Reverse each row
        </span>
      </div>
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">3.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Counterclockwise:</span> Reverse each column
        </span>
      </div>
    </div>
  </div>
);
