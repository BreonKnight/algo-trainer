import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MatrixTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Traversal</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(mn) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Traverse 2D
      matrix in various patterns
    </div>

    <PseudocodeDisplay code={`// Matrix traversal patterns
MATRIX-TRAVERSE(A):
    m ← rows[A]
    n ← columns[A]

    // Row-wise traversal
    for i ← 1 to m:
        for j ← 1 to n:
            process A[i, j]

    // Column-wise traversal
    for j ← 1 to n:
        for i ← 1 to m:
            process A[i, j]

    // Diagonal traversal
    for d ← 1 to m + n - 1:
        for i ← max(1, d - n + 1) to min(d, m):
            j ← d - i + 1
            process A[i, j]

// Example:
// Input: A = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
//
// Row-wise: 1, 2, 3, 4, 5, 6, 7, 8, 9
// Column-wise: 1, 4, 7, 2, 5, 8, 3, 6, 9
// Diagonal: 1, 2, 4, 3, 5, 7, 6, 8, 9`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Get matrix dimensions</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traverse: Process elements in desired pattern</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Apply operation to each element</span>
      </div>
    </div>
  </div>
);
