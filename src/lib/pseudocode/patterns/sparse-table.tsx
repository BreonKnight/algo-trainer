import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const SparseTablePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Sparse Table
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) query, O(n log n) build &nbsp;|&nbsp; Space: O(n log n) &nbsp;|&nbsp; Use: Range
      minimum/maximum queries
    </div>

    <PseudocodeDisplay
      code={`// Build sparse table
BUILD-SPARSE-TABLE(A, n):
  k = floor(log₂(n))
  st = new array[n][k+1]
  
  // Initialize first column
  for i = 0 to n-1:
    st[i][0] = A[i]
  
  // Fill remaining columns
  for j = 1 to k:
    for i = 0 to n-2^j:
      st[i][j] = min(st[i][j-1], st[i+2^(j-1)][j-1])
  return st

// Query minimum in range [L, R]
QUERY-MIN(st, L, R):
  j = floor(log₂(R-L+1))
  return min(st[L][j], st[R-2^j+1][j])

// Example usage
A = [4, 2, 3, 7, 1, 5, 3, 3, 9, 6, 7, 1, 2, 4, 5]
st = BUILD-SPARSE-TABLE(A, 15)
min_val = QUERY-MIN(st, 2, 7)  // Returns minimum in range [2,7]`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Precompute ranges of powers of 2
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Combine two overlapping ranges
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Optimize:</span> Use bit operations for powers
        of 2
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Array [4,2,3,7,1,5,3]</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Sparse Table:
j=0: [4,2,3,7,1,5,3]
j=1: [2,2,3,1,1,3]
j=2: [2,1,1,1]

Query [2,5]:
1. j = floor(log₂(5-2+1)) = 1
2. min(st[2][1], st[5-2^1+1][1])
   = min(3, 1) = 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>O(1) query time for range minimum/maximum</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Static data structure (no updates)</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Can be extended for other range queries</span>
        </div>
      </div>
    </div>
  </div>
);
