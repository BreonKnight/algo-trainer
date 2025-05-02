import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MatrixSpiralTraversalRecursivePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Matrix Spiral Traversal (Recursive)
      </span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(mn) &nbsp;|&nbsp; Space: O(mn) &nbsp;|&nbsp; Use: Matrix traversal
      in spiral order
    </div>

    <PseudocodeDisplay code={`// Recursive spiral traversal of matrix
SPIRAL-TRAVERSE(A, top, bottom, left, right):
    if top > bottom or left > right:
        return
    // Traverse top row
    for i ← left to right:
        print A[top, i]
    // Traverse right column
    for i ← top + 1 to bottom:
        print A[i, right]
    if top < bottom and left < right:
        // Traverse bottom row
        for i ← right - 1 downto left:
            print A[bottom, i]
        // Traverse left column
        for i ← bottom - 1 downto top + 1:
            print A[i, left]
    // Recursively traverse inner matrix
    SPIRAL-TRAVERSE(A, top + 1, bottom - 1, left + 1, right - 1)

// Example:
// Input: A = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]
// 
// Execution:
// 1. Outer layer: 1, 2, 3, 4, 8, 12, 11, 10, 9, 5
// 2. Inner layer: 6, 7
// 
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Base case: Check if traversal is complete</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traverse: Process outer layer in spiral order</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recurse: Process inner matrix with updated boundaries</span>
      </div>
    </div>
  </div>
);
