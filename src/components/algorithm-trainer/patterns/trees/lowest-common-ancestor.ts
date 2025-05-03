import { AlgorithmPattern } from "../../types";

export const lowestCommonAncestorPattern: AlgorithmPattern = {
  title: "Lowest Common Ancestor",
  description:
    "An algorithm to find the lowest common ancestor (LCA) of two nodes in a binary tree. The LCA is the lowest node that has both nodes as descendants. This implementation uses a recursive approach to traverse the tree and find the LCA.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(h) where h is the height of the tree",
  category: "Trees",
  pseudocode: `
1. If root is null, return null
2. If root is either p or q, return root
3. Recursively find LCA in left subtree
4. Recursively find LCA in right subtree
5. If both left and right return non-null:
   - Current root is the LCA
6. If one of left or right is non-null:
   - Return the non-null value
7. If both are null:
   - Return null
  `,
  example: `Input Tree:
        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4

Find LCA of nodes 5 and 1:
- Start at root (3)
- Both 5 and 1 are descendants of 3
- Return 3 as LCA

Find LCA of nodes 5 and 4:
- Start at root (3)
- Left subtree contains 5
- Right subtree contains 1
- Continue in left subtree
- At node 5:
  - Left subtree contains 6
  - Right subtree contains 2
  - Continue in right subtree
- At node 2:
  - Left subtree contains 7
  - Right subtree contains 4
  - Return 5 as LCA`,
  implementation: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowest_common_ancestor(root, p, q):
    # Base case: if root is null or matches either p or q
    if not root or root == p or root == q:
        return root
    
    # Recursively find LCA in left and right subtrees
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    # If both left and right return non-null, current root is LCA
    if left and right:
        return root
    
    # Return the non-null value (if any)
    return left if left else right

# Example usage
# Construct the example tree
root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)
root.left.left = TreeNode(6)
root.left.right = TreeNode(2)
root.right.left = TreeNode(0)
root.right.right = TreeNode(8)
root.left.right.left = TreeNode(7)
root.left.right.right = TreeNode(4)

# Find LCA of nodes 5 and 1
p = root.left  # node 5
q = root.right  # node 1
lca = lowest_common_ancestor(root, p, q)
print(f"LCA of {p.val} and {q.val} is {lca.val}")  # Output: 3

# Find LCA of nodes 5 and 4
p = root.left  # node 5
q = root.left.right.right  # node 4
lca = lowest_common_ancestor(root, p, q)
print(f"LCA of {p.val} and {q.val} is {lca.val}")  # Output: 5`,
  keySteps: [
    "Check if current node is null or matches either target node",
    "Recursively search for LCA in left and right subtrees",
    "If both subtrees return non-null, current node is the LCA",
    "Return the non-null result from either subtree",
    "Return null if no LCA is found",
  ],
};
