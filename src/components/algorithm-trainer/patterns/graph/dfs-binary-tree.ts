import { AlgorithmPattern } from "../../types";

export const dfs_binary_treePattern: AlgorithmPattern = {
  title: "DFS on Binary Tree",
  description: "Application of DFS to traverse a binary tree, with three main variations: pre-order, in-order, and post-order traversal.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(h) where h is tree height",
  pseudocode: `Pre-order traversal:\n1. Process root\n2. Traverse left subtree\n3. Traverse right subtree\n\nIn-order traversal:\n1. Traverse left subtree\n2. Process root\n3. Traverse right subtree\n\nPost-order traversal:\n1. Traverse left subtree\n2. Traverse right subtree\n3. Process root`,
  example: `Tree:
     1
   /   \\
  2     3
 / \\
4   5

Pre-order: 1,2,4,5,3
In-order: 4,2,5,1,3
Post-order: 4,5,2,3,1`,
  implementation: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorder(root):
    if not root:
        return
    print(root.val)  # Process root
    preorder(root.left)  # Left subtree
    preorder(root.right)  # Right subtree

def inorder(root):
    if not root:
        return
    inorder(root.left)  # Left subtree
    print(root.val)  # Process root
    inorder(root.right)  # Right subtree

def postorder(root):
    if not root:
        return
    postorder(root.left)  # Left subtree
    postorder(root.right)  # Right subtree
    print(root.val)  # Process root`
};
