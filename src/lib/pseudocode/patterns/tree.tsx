import { ChevronRight } from "lucide-react";

export const TreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Tree Operations</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Tree traversal and
      operations
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Tree node structure
TREE-NODE:
    key
    left
    right
    parent

// Tree traversal algorithms
INORDER-TREE-WALK(x):
    if x ≠ NIL:
        INORDER-TREE-WALK(x.left)
        process x.key
        INORDER-TREE-WALK(x.right)

PREORDER-TREE-WALK(x):
    if x ≠ NIL:
        process x.key
        PREORDER-TREE-WALK(x.left)
        PREORDER-TREE-WALK(x.right)

POSTORDER-TREE-WALK(x):
    if x ≠ NIL:
        POSTORDER-TREE-WALK(x.left)
        POSTORDER-TREE-WALK(x.right)
        process x.key

// Tree search operations
TREE-SEARCH(x, k):
    if x = NIL or k = x.key:
        return x
    if k < x.key:
        return TREE-SEARCH(x.left, k)
    else:
        return TREE-SEARCH(x.right, k)

// Example:
// Input: Binary tree
//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7
// 
// Inorder: 1, 2, 3, 4, 5, 6, 7
// Preorder: 4, 2, 1, 3, 6, 5, 7
// Postorder: 1, 3, 2, 5, 7, 6, 4`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Define: Tree node structure</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traverse: Implement different traversal orders</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search: Find nodes in the tree</span>
      </div>
    </div>
  </div>
);
