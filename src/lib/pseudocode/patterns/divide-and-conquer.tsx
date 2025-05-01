import { ChevronRight } from "lucide-react";

export const DivideAndConquerPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Divide and Conquer</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Break
      problems into smaller subproblems
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Merge Sort
MERGE-SORT(A, l, r):
    if l ≥ r:
        return
    mid = floor((l + r) / 2)
    MERGE-SORT(A, l, mid)
    MERGE-SORT(A, mid+1, r)
    MERGE(A, l, mid, r)

// Quick Sort
QUICK-SORT(A, l, r):
    if l ≥ r:
        return
    p = PARTITION(A, l, r)
    QUICK-SORT(A, l, p-1)
    QUICK-SORT(A, p+1, r)

// Binary Search
BINARY-SEARCH(A, l, r, x):
    if l > r:
        return -1
    mid = floor((l + r) / 2)
    if A[mid] == x:
        return mid
    if A[mid] > x:
        return BINARY-SEARCH(A, l, mid-1, x)
    return BINARY-SEARCH(A, mid+1, r, x)

// Strassen's Matrix Multiplication
STRASSEN(A, B):
    if A is 1x1:
        return A * B
    split A and B into 4 submatrices
    P1 = STRASSEN(A11, B12 - B22)
    P2 = STRASSEN(A11 + A12, B22)
    P3 = STRASSEN(A21 + A22, B11)
    P4 = STRASSEN(A22, B21 - B11)
    P5 = STRASSEN(A11 + A22, B11 + B22)
    P6 = STRASSEN(A12 - A22, B21 + B22)
    P7 = STRASSEN(A11 - A21, B11 + B12)
    C11 = P5 + P4 - P2 + P6
    C12 = P1 + P2
    C21 = P3 + P4
    C22 = P5 + P1 - P3 - P7
    return combine C11, C12, C21, C22`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Divide:</span> Break problem
        into smaller subproblems
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Conquer:</span> Solve
        subproblems recursively
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Merge
        solutions of subproblems
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Merge Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [38, 27, 43, 3, 9, 82, 10]
Divide:
[38, 27, 43, 3] [9, 82, 10]
[38, 27] [43, 3] [9, 82] [10]
[38] [27] [43] [3] [9] [82] [10]
Merge:
[27, 38] [3, 43] [9, 82] [10]
[3, 27, 38, 43] [9, 10, 82]
[3, 9, 10, 27, 38, 43, 82]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Quick Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [38, 27, 43, 3, 9, 82, 10]
Pivot = 38:
[27, 3, 9, 10] [38] [43, 82]
Pivot = 27:
[3, 9, 10] [27] [38] [43, 82]
Pivot = 3:
[3] [9, 10] [27] [38] [43, 82]
Pivot = 9:
[3] [9] [10] [27] [38] [43, 82]
Pivot = 43:
[3] [9] [10] [27] [38] [43] [82]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Strassen's Matrix Multiplication
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
P1 = 1 * (6 - 8) = -2
P2 = (1 + 2) * 8 = 24
P3 = (3 + 4) * 5 = 35
P4 = 4 * (7 - 5) = 8
P5 = (1 + 4) * (5 + 8) = 65
P6 = (2 - 4) * (7 + 8) = -30
P7 = (1 - 3) * (5 + 6) = -22
C11 = 65 + 8 - 24 - 30 = 19
C12 = -2 + 24 = 22
C21 = 35 + 8 = 43
C22 = 65 - 2 - 35 + 22 = 50
C = [[19, 22], [43, 50]]`}
      </pre>
    </div>
  </div>
);
