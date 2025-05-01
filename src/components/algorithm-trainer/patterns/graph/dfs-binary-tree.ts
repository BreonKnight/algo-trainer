import { AlgorithmPattern } from "../../types";

export const dfs_binary_treePattern: AlgorithmPattern = {
  title: "DFS on Binary Tree",
  description:
    "Apply Depth-First Search on a binary tree structure to traverse or search through nodes in pre-order, in-order, or post-order.",
  timeComplexity: "O(N)",
  spaceComplexity: "O(H) where H is the height of the tree",
  pseudocode: `1. Initialize visited set and result array
2. Define DFS function:
   a. If node is null or visited, return
   b. Pre-order: Process node before children
   c. Mark node as visited
   d. Recursively call DFS on left child
   e. In-order: Process node between children
   f. Recursively call DFS on right child
   g. Post-order: Process node after children
3. Start DFS from root node`,
  example: `Binary Tree:
     1
   /   \\
  2     3
 / \\   / \\
4   5 6   7

Traversal Orders:
Pre-order:  [1, 2, 4, 5, 3, 6, 7]
In-order:   [4, 2, 5, 1, 6, 3, 7]
Post-order: [4, 5, 2, 6, 7, 3, 1]`,
  implementation: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def dfs_binary_tree(root):
    visited = set()
    preorder = []
    inorder = []
    postorder = []
    
    def dfs(node):
        if not node or node in visited:
            return
        
        # Pre-order: Process before children
        visited.add(node)
        preorder.append(node.val)
        
        # Process left subtree
        dfs(node.left)
        
        # In-order: Process between children
        inorder.append(node.val)
        
        # Process right subtree
        dfs(node.right)
        
        # Post-order: Process after children
        postorder.append(node.val)
    
    dfs(root)
    return {
        'preorder': preorder,
        'inorder': inorder,
        'postorder': postorder
    }`,
  category: "Graph",
};
