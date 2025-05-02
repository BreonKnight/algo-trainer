import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const PrefixSumPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prefix Sum</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient range
      sum queries
    </div>

    <PseudocodeDisplay code={`// Standard Prefix Sum
PREFIX-SUM(A):
    n = len(A)
    prefix = [0] * (n + 1)
    for i from 1 to n:
        prefix[i] = prefix[i-1] + A[i-1]
    return prefix

// Range Sum Query
RANGE-SUM(prefix, l, r):
    return prefix[r+1] - prefix[l]

// 2D Prefix Sum
PREFIX-SUM-2D(A):
    rows, cols = len(A), len(A[0])
    prefix = [[0] * (cols + 1) for _ in range(rows + 1)]
    
    for i from 1 to rows:
        for j from 1 to cols:
            prefix[i][j] = A[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]
    return prefix

// 2D Range Sum Query
RANGE-SUM-2D(prefix, r1, c1, r2, c2):
    return prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]

// Prefix Sum with Updates
PREFIX-SUM-UPDATE(A, i, val):
    diff = val - A[i]
    A[i] = val
    n = len(A)
    for j from i+1 to n:
        prefix[j] += diff

// Prefix Sum with Binary Indexed Tree
PREFIX-SUM-BIT(A):
    n = len(A)
    bit = [0] * (n + 1)
    
    def update(i, val):
        while i <= n:
            bit[i] += val
            i += i & -i
    
    def query(i):
        res = 0
        while i > 0:
            res += bit[i]
            i -= i & -i
        return res
    
    for i in range(n):
        update(i+1, A[i])
    
    return bit`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        prefix sum array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute:</span> Calculate
        cumulative sums
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Get range sums
        in O(1)
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Prefix Sum
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [1, 2, 3, 4, 5]

Prefix Sum:
[0, 1, 3, 6, 10, 15]

Range Sum Queries:
sum(0,2) = 6
sum(1,3) = 9
sum(2,4) = 12`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: 2D Prefix Sum</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

Prefix Sum:
[[0, 0, 0, 0],
 [0, 1, 3, 6],
 [0, 5, 12, 21],
 [0, 12, 27, 45]]

Range Sum Queries:
sum(0,0,1,1) = 12
sum(1,1,2,2) = 28
sum(0,0,2,2) = 45`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Prefix Sum with Updates
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial: [1, 2, 3, 4, 5]
Prefix: [0, 1, 3, 6, 10, 15]

Update A[2] = 6:
Array: [1, 2, 6, 4, 5]
Prefix: [0, 1, 3, 9, 13, 18]

Range Sum Queries:
sum(0,2) = 9
sum(1,3) = 12
sum(2,4) = 15`}
      </pre>
    </div>
  </div>
);
