import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const FenwickTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fenwick Tree</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient
      prefix sums and point updates
    </div>

    <PseudocodeDisplay code={`FENWICK-TREE(A)
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
// Query(6):
//   idx = 6: sum = 20
//   idx = 4: sum = 36
//   idx = 0: return 36
//
// Output: Prefix sums [1, 4, 9, 16, 25, 36]`} />

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
        <span>Query: Sum values from all relevant nodes using LSB</span>
      </div>
    </div>
  </div>
);
