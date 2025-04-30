import { ChevronRight } from "lucide-react";

export const TreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Tree Algorithms</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(h) &nbsp;|&nbsp; Use: Hierarchical data
      processing
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Traverse binary tree in different orders
TREE-TRAVERSAL(node):
    # Pre-order: Root, Left, Right
    if node ≠ NIL:
        process(node)
        TREE-TRAVERSAL(node.left)
        TREE-TRAVERSAL(node.right)

    # In-order: Left, Root, Right
    if node ≠ NIL:
        TREE-TRAVERSAL(node.left)
        process(node)
        TREE-TRAVERSAL(node.right)

    # Post-order: Left, Right, Root
    if node ≠ NIL:
        TREE-TRAVERSAL(node.left)
        TREE-TRAVERSAL(node.right)
        process(node)

// Search in binary search tree
TREE-SEARCH(node, key):
    # If node is empty or key found
    if node == NIL or key == node.key:
        return node
    
    # If key is smaller, search left
    if key < node.key:
        return TREE-SEARCH(node.left, key)
    # If key is larger, search right
    else:
        return TREE-SEARCH(node.right, key)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Visit:</span> Process
        current node
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse:</span> Move to
        child nodes
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Check node
        values
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recurse:</span> Continue
        search
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Tree Traversal</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Tree:
      1
    /   \
   2     3
  / \   / \
 4   5 6   7

Pre-order:  1 → 2 → 4 → 5 → 3 → 6 → 7
In-order:   4 → 2 → 5 → 1 → 6 → 3 → 7
Post-order: 4 → 5 → 2 → 6 → 7 → 3 → 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Binary Search Tree
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Tree:
      4
    /   \
   2     6
  / \   / \
 1   3 5   7

Search for 5:
Step 1: Compare with 4 → go right
Step 2: Compare with 6 → go left
Step 3: Compare with 5 → found

Search for 8:
Step 1: Compare with 4 → go right
Step 2: Compare with 6 → go right
Step 3: Compare with 7 → go right
Step 4: Reached NIL → not found`}
      </pre>
    </div>
  </div>
);
