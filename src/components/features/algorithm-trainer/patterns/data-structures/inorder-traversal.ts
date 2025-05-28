import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const inorderTraversalPattern: AlgorithmPattern = {
  category: "tree",
  title: "Inorder Traversal",
  description:
    "A pattern for traversing a binary tree in inorder fashion (left subtree, root, right subtree). This traversal is useful for visiting nodes in sorted order in a binary search tree.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(h) where h is the height of the tree",
  pseudocode: `
    # Inorder Traversal
    # 1. Traverse the left subtree
    # 2. Visit the root node
    # 3. Traverse the right subtree
    
    function inorder_traversal(node):
        if node is None:
            return
        
        inorder_traversal(node.left)
        visit(node)
        inorder_traversal(node.right)
  `,
  example: `
    # Example usage:
    class TreeNode:
        def __init__(self, val=0):
            self.val = val
            self.left = None
            self.right = None
    
    def inorder_traversal(root):
        result = []
        
        def inorder(node):
            if not node:
                return
            inorder(node.left)
            result.append(node.val)
            inorder(node.right)
        
        inorder(root)
        return result
    
    # Create a sample tree
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(5)
    
    # Perform inorder traversal
    result = inorder_traversal(root)
    print(result)  # Output: [4, 2, 5, 1, 3]
  `,
  implementation: `class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

def inorder_traversal(root):
    """Perform inorder traversal of a binary tree.
    
    Args:
        root: The root node of the binary tree.
        
    Returns:
        A list containing the values of nodes in inorder traversal order.
    """
    result = []
    
    def inorder(node):
        if not node:
            return
        inorder(node.left)
        result.append(node.val)
        inorder(node.right)
    
    inorder(root)
    return result

def inorder_traversal_iterative(root):
    """Perform inorder traversal of a binary tree using iteration.
    
    Args:
        root: The root node of the binary tree.
        
    Returns:
        A list containing the values of nodes in inorder traversal order.
    """
    result = []
    stack = []
    current = root
    
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        
        current = stack.pop()
        result.append(current.val)
        current = current.right
    
    return result`,
  tips: [
    "Use recursion for a simpler implementation",
    "Use a stack for iterative implementation",
    "Inorder traversal visits nodes in sorted order for BSTs",
    "Use it for validating BST properties",
    "Consider using it for tree serialization",
  ],
};
