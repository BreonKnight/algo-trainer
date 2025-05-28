import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const treeDPPattern: AlgorithmPattern = {
  title: "Tree (Dynamic Programming)",
  description:
    "A dynamic programming technique for solving problems on trees by processing nodes in a post-order traversal and combining results from subtrees.",
  timeComplexity: "O(n) where n is number of nodes",
  spaceComplexity: "O(n)",
  pseudocode: `1. Define the DP state for each node
2. Perform post-order traversal of the tree
3. For each node:
   a. Process all children first
   b. Combine results from children
   c. Update the node's state
4. Return the result from the root node`,
  example: `Problem: Maximum Path Sum in Binary Tree
Tree:
    1
   / \
  2   3
 / \
4   5

Maximum path sum: 11 (4 -> 2 -> 5)`,
  implementation: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_path_sum(root):
    max_sum = float('-inf')
    
    def dfs(node):
        nonlocal max_sum
        if not node:
            return 0
        
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        
        # Update maximum path sum
        max_sum = max(max_sum, node.val + left + right)
        
        # Return maximum path sum from this node
        return node.val + max(left, right)
    
    dfs(root)
    return max_sum`,
  category: "Dynamic Programming",
  keySteps: [
    "Define the state representation for tree nodes",
    "Implement post-order traversal",
    "Process children before parent nodes",
    "Combine results from subtrees",
    "Update the global solution",
  ],
};
