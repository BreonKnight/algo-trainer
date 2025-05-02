import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MatrixOperationsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Operations</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n³) &nbsp;|&nbsp; Space: O(n²) &nbsp;|&nbsp; Use: Matrix
      multiplication and operations
    </div>

    <PseudocodeDisplay code={`MATRIX-MULTIPLY(A, B)
    let m, n, p be the dimensions of A and B
    let C[1‥m, 1‥p] be a new matrix
    for i ← 1 to m
        do for j ← 1 to p
            do C[i, j] ← 0
                for k ← 1 to n
                    do C[i, j] ← C[i, j] + A[i, k] · B[k, j]
    return C

MATRIX-TRANSPOSE(A)
    let m, n be the dimensions of A
    let B[1‥n, 1‥m] be a new matrix
    for i ← 1 to m
        do for j ← 1 to n
            do B[j, i] ← A[i, j]
    return B

MATRIX-ADD(A, B)
    let m, n be the dimensions of A and B
    let C[1‥m, 1‥n] be a new matrix
    for i ← 1 to m
        do for j ← 1 to n
            do C[i, j] ← A[i, j] + B[i, j]
    return C

// Example:
// Matrix Multiplication:
// A = [1 2]    B = [5 6]
//     [3 4]        [7 8]
// 
// C[1,1] = 1·5 + 2·7 = 19
// C[1,2] = 1·6 + 2·8 = 22
// C[2,1] = 3·5 + 4·7 = 43
// C[2,2] = 3·6 + 4·8 = 50
// 
// Result: [19 22]
//         [43 50]
// 
// Matrix Transpose:
// A = [1 2 3]
//     [4 5 6]
// 
// Result: [1 4]
//         [2 5]
//         [3 6]
// 
// Matrix Addition:
// A = [1 2]    B = [5 6]
//     [3 4]        [7 8]
// 
// Result: [6  8]
//         [10 12]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Multiplication: Three nested loops for dot product calculation
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transpose: Swap row and column indices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Addition: Element-wise sum of corresponding entries</span>
      </div>
    </div>
  </div>
);
