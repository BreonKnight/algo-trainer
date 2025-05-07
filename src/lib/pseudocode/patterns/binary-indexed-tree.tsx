import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const BinaryIndexedTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Binary Indexed Tree
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient range queries and point
      updates
    </div>

    <PseudocodeDisplay
      code={`BINARY-INDEXED-TREE(A)
    let n be the length of A
    let tree[1‥n] be a new array

    for i ← 1 to n
        do tree[i] ← 0

    for i ← 1 to n
        do UPDATE(tree, i, A[i])

    return tree

UPDATE(tree, idx, delta)
    while idx ≤ n
        do tree[idx] ← tree[idx] + delta
            idx ← idx + (idx & -idx)

QUERY(tree, idx)
    let sum ← 0
    while idx > 0
        do sum ← sum + tree[idx]
            idx ← idx - (idx & -idx)
    return sum

RANGE-QUERY(tree, l, r)
    return QUERY(tree, r) - QUERY(tree, l-1)

// Example:
// Input: A = [1, 3, 5, 7, 9, 11]
//
// Initial tree:
//   tree = [0, 0, 0, 0, 0, 0]
//
// After updates:
//   tree = [1, 4, 5, 16, 9, 20]
//
// Query(4):
//   idx = 4: sum = 16
//   idx = 0: return 16
//
// Range Query(2,5):
//   QUERY(5) = 25
//   QUERY(1) = 1
//   return 24
//
// Output: Range sum from index 2 to 5 is 24`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create tree array and set all values to 0</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Add value to all affected nodes using LSB</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Query: Compute prefix sums and range queries efficiently</span>
      </div>
    </div>
  </div>
);
