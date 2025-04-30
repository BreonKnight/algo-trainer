import { ChevronRight } from "lucide-react";

export const BinarySearchTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Binary Search Tree</span>
      <span className="ml-2 text-xs text-secondary">(Search Tree)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(h) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Ordered data
      storage
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Search for key
TREE-SEARCH(x, k):
    if x == NIL or k == x.key:
        return x
    if k < x.key:
        return TREE-SEARCH(x.left, k)
    else:
        return TREE-SEARCH(x.right, k)

// Insert node
TREE-INSERT(T, z):
    y = NIL
    x = T.root
    while x ≠ NIL:
        y = x
        if z.key < x.key:
            x = x.left
        else:
            x = x.right
    z.p = y
    if y == NIL:
        T.root = z
    else if z.key < y.key:
        y.left = z
    else:
        y.right = z

// Delete node
TREE-DELETE(T, z):
    if z.left == NIL:
        TRANSPLANT(T, z, z.right)
    else if z.right == NIL:
        TRANSPLANT(T, z, z.left)
    else:
        y = TREE-MINIMUM(z.right)
        if y.p ≠ z:
            TRANSPLANT(T, y, y.right)
            y.right = z.right
            y.right.p = y
        TRANSPLANT(T, z, y)
        y.left = z.left
        y.left.p = y

// Find minimum
TREE-MINIMUM(x):
    while x.left ≠ NIL:
        x = x.left
    return x

// Find successor
TREE-SUCCESSOR(x):
    if x.right ≠ NIL:
        return TREE-MINIMUM(x.right)
    y = x.p
    while y ≠ NIL and x == y.right:
        x = y
        y = y.p
    return y`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Find key in
        tree
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add node to
        tree
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete:</span> Remove node
        from tree
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: BST Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial tree:
        5
       / \\
      3   7
     / \\ / \\
    2  4 6  8

After TREE-INSERT(1):
        5
       / \\
      3   7
     / \\ / \\
    2  4 6  8
   /
  1

After TREE-DELETE(3):
        5
       / \\
      4   7
     /   / \\
    2   6   8
   /
  1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Search Results</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`TREE-SEARCH(5) -> Found
TREE-SEARCH(9) -> Not found
TREE-MINIMUM() -> 1
TREE-SUCCESSOR(4) -> 5`}
      </pre>
    </div>
  </div>
);
