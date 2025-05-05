import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TreeImplementationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Tree Implementation</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Tree representation and traversal
    </div>

    <PseudocodeDisplay
      code={`// Binary tree node structure
TREE-NODE(key):
    node ← new object
    node.key ← key
    node.left ← NIL
    node.right ← NIL
    node.parent ← NIL
    return node

// Tree traversal algorithms
INORDER-TREE-WALK(x):
    if x ≠ NIL:
        INORDER-TREE-WALK(x.left)
        print x.key
        INORDER-TREE-WALK(x.right)

PREORDER-TREE-WALK(x):
    if x ≠ NIL:
        print x.key
        PREORDER-TREE-WALK(x.left)
        PREORDER-TREE-WALK(x.right)

POSTORDER-TREE-WALK(x):
    if x ≠ NIL:
        POSTORDER-TREE-WALK(x.left)
        POSTORDER-TREE-WALK(x.right)
        print x.key

// Tree search operations
TREE-SEARCH(x, k):
    if x = NIL or k = x.key:
        return x
    if k < x.key:
        return TREE-SEARCH(x.left, k)
    else:
        return TREE-SEARCH(x.right, k)

ITERATIVE-TREE-SEARCH(x, k):
    while x ≠ NIL and k ≠ x.key:
        if k < x.key:
            x ← x.left
        else:
            x ← x.right
    return x

TREE-MINIMUM(x):
    while x.left ≠ NIL:
        x ← x.left
    return x

TREE-MAXIMUM(x):
    while x.right ≠ NIL:
        x ← x.right
    return x

TREE-SUCCESSOR(x):
    if x.right ≠ NIL:
        return TREE-MINIMUM(x.right)
    y ← x.parent
    while y ≠ NIL and x = y.right:
        x ← y
        y ← y.parent
    return y

// Example:
// Input: Binary tree with keys [4, 2, 6, 1, 3, 5, 7]
//
// Tree structure:
//       4
//     /   \\
//    2     6
//   / \\   / \\
//  1   3 5   7
//
// Inorder traversal: 1 2 3 4 5 6 7
// Preorder traversal: 4 2 1 3 6 5 7
// Postorder traversal: 1 3 2 5 7 6 4`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Structure: Define node with key, left, right, and parent pointers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traversal: Implement inorder, preorder, and postorder walks</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Operations: Search, minimum, maximum, and successor functions</span>
      </div>
    </div>
  </div>
);
