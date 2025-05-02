import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BinarySearchTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Binary Search Tree</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(h) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient search
      and insertion
    </div>

    <PseudocodeDisplay code={`// Binary search tree node structure
BST-NODE:
    key
    left
    right
    parent

// Tree operations
TREE-INSERT(T, z):
    y ← NIL
    x ← T.root
    while x ≠ NIL:
        y ← x
        if z.key < x.key:
            x ← x.left
        else:
            x ← x.right
    z.parent ← y
    if y = NIL:
        T.root ← z
    else if z.key < y.key:
        y.left ← z
    else:
        y.right ← z

TREE-SEARCH(x, k):
    if x = NIL or k = x.key:
        return x
    if k < x.key:
        return TREE-SEARCH(x.left, k)
    else:
        return TREE-SEARCH(x.right, k)

TREE-DELETE(T, z):
    if z.left = NIL:
        TRANSPLANT(T, z, z.right)
    else if z.right = NIL:
        TRANSPLANT(T, z, z.left)
    else:
        y ← TREE-MINIMUM(z.right)
        if y.parent ≠ z:
            TRANSPLANT(T, y, y.right)
            y.right ← z.right
            y.right.parent ← y
        TRANSPLANT(T, z, y)
        y.left ← z.left
        y.left.parent ← y

TRANSPLANT(T, u, v):
    if u.parent = NIL:
        T.root ← v
    else if u = u.parent.left:
        u.parent.left ← v
    else:
        u.parent.right ← v
    if v ≠ NIL:
        v.parent ← u.parent

// Example:
// Input: T = empty tree
// Operations:
// 1. Insert 5
// 2. Insert 3
// 3. Insert 7
// 4. Insert 2
// 5. Insert 4
// 6. Insert 6
// 7. Insert 8
// 
// Resulting tree:
//        5
//      /   \\
//     3     7
//    / \\   / \\
//   2   4 6   8`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Maintain BST property</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search: Binary search in tree</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Delete: Handle three cases</span>
      </div>
    </div>
  </div>
);
