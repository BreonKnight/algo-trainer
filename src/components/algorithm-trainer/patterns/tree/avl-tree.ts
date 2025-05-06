import { AlgorithmPattern } from "../../types/pattern-types";

export const avlTreePattern: AlgorithmPattern = {
  title: "AVL Tree",
  description:
    "A pattern for implementing and using an AVL tree, a self-balancing binary search tree that maintains O(log n) height.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(n)",
  pseudocode: `
    # AVL Tree Operations
    # Insert: O(log n)
    # Delete: O(log n)
    # Search: O(log n)
    # Get Height: O(1)
    # Get Balance: O(1)
    # Get Min: O(log n)
    # Get Max: O(log n)
    # Inorder Traversal: O(n)
    # Preorder Traversal: O(n)
    # Postorder Traversal: O(n)
    # Level Order Traversal: O(n)
    # Is Balanced: O(n)
    # Is BST: O(n)
    # Is AVL: O(n)
    # Is Complete: O(n)
    # Is Full: O(n)
    # Is Perfect: O(n)
    # Is Degenerate: O(n)
    # Is Skewed: O(n)
    # Is Heap: O(n)
  `,
  example: `
    # Example usage:
    tree = AVLTree()
    tree.insert(10)
    tree.insert(20)
    tree.insert(30)
    tree.insert(40)
    tree.insert(50)
    tree.insert(60)
    tree.insert(70)
    tree.insert(80)
    tree.insert(90)
    tree.insert(100)
  `,
  implementation: `class AVLTree:
    """A self-balancing binary search tree implementation."""
    
    def __init__(self):
        """Initialize an empty AVL tree."""
        self.root = None

    def insert(self, key):
        """Insert a key into the AVL tree.
        
        Args:
            key: The value to insert into the tree.
        """
        if not self.root:
            self.root = Node(key)
            return
        self.root = self._insert(self.root, key)

    def _insert(self, node, key):
        """Helper method for inserting a key into the tree.
        
        Args:
            node: Current node being processed
            key: Value to insert
            
        Returns:
            The balanced node after insertion
        """
        if key < node.key:
            if node.left is None:
                node.left = Node(key)
                node.left.parent = node
                return self._balance(node)
            node.left = self._insert(node.left, key)
            return self._balance(node)

        if key > node.key:
            if node.right is None:
                node.right = Node(key)
                node.right.parent = node
                return self._balance(node)
            node.right = self._insert(node.right, key)
            return self._balance(node)

    def _balance(self, node):
        """Balance the tree at the given node.
        
        Args:
            node: Node to balance
            
        Returns:
            The balanced node
        """
        if node.left_height - node.right_height > 1:
            if node.left.right_height > node.left.left_height:
                node.left = self._rotate_left(node.left)
                return self._rotate_right(node)
            else:
                return self._rotate_right(node)
        elif node.right_height - node.left_height > 1:
            if node.right.left_height > node.right.right_height:
                node.right = self._rotate_right(node.right)
                return self._rotate_left(node)
            else:
                return self._rotate_left(node)
        return node

    def _rotate_left(self, node):
        """Perform a left rotation on the given node.
        
        Args:
            node: Node to rotate
            
        Returns:
            The new root after rotation
        """
        new_root = node.right
        node.right = new_root.left
        if new_root.left:
            new_root.left.parent = node
        new_root.parent = node.parent
        if node.parent is None:
            self.root = new_root
        elif node == node.parent.left:
            node.parent.left = new_root
        else:
            node.parent.right = new_root
        new_root.left = node
        node.parent = new_root
        return new_root

    def _rotate_right(self, node):
        """Perform a right rotation on the given node.
        
        Args:
            node: Node to rotate
            
        Returns:
            The new root after rotation
        """
        new_root = node.left
        node.left = new_root.right
        if new_root.right:
            new_root.right.parent = node
        new_root.parent = node.parent
        if node.parent is None:
            self.root = new_root
        elif node == node.parent.right:
            node.parent.right = new_root
        else:
            node.parent.left = new_root
        new_root.right = node
        node.parent = new_root
        return new_root

    def search(self, key):
        """Search for a key in the tree.
        
        Args:
            key: Value to search for
            
        Returns:
            Node containing the key if found, None otherwise
        """
        return self._search(self.root, key)

    def _search(self, node, key):
        """Helper method for searching a key in the tree.
        
        Args:
            node: Current node being processed
            key: Value to search for
            
        Returns:
            Node containing the key if found, None otherwise
        """
        if node is None or node.key == key:
            return node
        if key < node.key:
            return self._search(node.left, key)
        return self._search(node.right, key)

    def delete(self, key):
        """Delete a key from the tree.
        
        Args:
            key: Value to delete
        """
        if not self.root:
            return
        self.root = self._delete(self.root, key)

    def _delete(self, node, key):
        """Helper method for deleting a key from the tree.
        
        Args:
            node: Current node being processed
            key: Value to delete
            
        Returns:
            The balanced node after deletion
        """
        if node is None:
            return node
        if key < node.key:
            node.left = self._delete(node.left, key)
            return node
        if key > node.key:
            node.right = self._delete(node.right, key)
            return node
        if node.left is None:
            return node.right
        if node.right is None:
            return node.left
        successor = node.right
        while successor.left:
            successor = successor.left
        node.key = successor.key
        node.right = self._delete(node.right, successor.key)
        return self._balance(node)

    def get_height(self, node):
        """Get the height of a node.
        
        Args:
            node: Node to get height of
            
        Returns:
            Height of the node
        """
        if node is None:
            return 0
        return max(self.get_height(node.left), self.get_height(node.right)) + 1

    def get_balance(self, node):
        """Get the balance factor of a node.
        
        Args:
            node: Node to get balance factor of
            
        Returns:
            Balance factor (left height - right height)
        """
        if node is None:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    def get_min(self, node):
        """Get the minimum value in the tree.
        
        Args:
            node: Root of the subtree to search
            
        Returns:
            Node containing the minimum value
        """
        if node is None or node.left is None:
            return node
        return self.get_min(node.left)

    def get_max(self, node):
        """Get the maximum value in the tree.
        
        Args:
            node: Root of the subtree to search
            
        Returns:
            Node containing the maximum value
        """
        if node is None or node.right is None:
            return node
        return self.get_max(node.right)

    def inorder_traversal(self, node):
        """Perform an inorder traversal of the tree.
        
        Args:
            node: Root of the subtree to traverse
        """
        if node is None:
            return
        self.inorder_traversal(node.left)
        print(node.key, end=" ")
        self.inorder_traversal(node.right)

    def preorder_traversal(self, node):
        """Perform a preorder traversal of the tree.
        
        Args:
            node: Root of the subtree to traverse
        """
        if node is None:
            return
        print(node.key, end=" ")
        self.preorder_traversal(node.left)
        self.preorder_traversal(node.right)

    def postorder_traversal(self, node):
        """Perform a postorder traversal of the tree.
        
        Args:
            node: Root of the subtree to traverse
        """
        if node is None:
            return
        self.postorder_traversal(node.left)
        self.postorder_traversal(node.right)
        print(node.key, end=" ")

    def level_order_traversal(self, node):
        """Perform a level order traversal of the tree.
        
        Args:
            node: Root of the subtree to traverse
        """
        if node is None:
            return
        queue = [node]
        while queue:
            current = queue.pop(0)
            print(current.key, end=" ")
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)

    def is_balanced(self, node):
        """Check if the tree is balanced.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if balanced, False otherwise
        """
        if node is None:
            return True
        if abs(self.get_balance(node)) > 1:
            return False
        return self.is_balanced(node.left) and self.is_balanced(node.right)

    def is_bst(self, node, min_val=float('-inf'), max_val=float('inf')):
        """Check if the tree is a valid BST.
        
        Args:
            node: Root of the subtree to check
            min_val: Minimum allowed value
            max_val: Maximum allowed value
            
        Returns:
            True if valid BST, False otherwise
        """
        if node is None:
            return True
        if node.key <= min_val or node.key >= max_val:
            return False
        return self.is_bst(node.left, min_val, node.key) and self.is_bst(node.right, node.key, max_val)

    def is_avl(self, node):
        """Check if the tree is a valid AVL tree.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if valid AVL tree, False otherwise
        """
        if node is None:
            return True
        if not self.is_balanced(node):
            return False
        return self.is_avl(node.left) and self.is_avl(node.right)

    def is_complete(self, node):
        """Check if the tree is complete.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if complete, False otherwise
        """
        if node is None:
            return True
        queue = [node]
        while queue:
            current = queue.pop(0)
            if current is None:
                return False
            queue.append(current.left)
            queue.append(current.right)
        return True

    def is_full(self, node):
        """Check if the tree is full.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if full, False otherwise
        """
        if node is None:
            return True
        if node.left is None and node.right is None:
            return True
        if node.left and node.right:
            return self.is_full(node.left) and self.is_full(node.right)
        return False

    def is_perfect(self, node):
        """Check if the tree is perfect.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if perfect, False otherwise
        """
        if node is None:
            return True
        if node.left is None and node.right is None:
            return True
        if node.left and node.right:
            return self.is_perfect(node.left) and self.is_perfect(node.right)
        return False

    def is_degenerate(self, node):
        """Check if the tree is degenerate.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if degenerate, False otherwise
        """
        if node is None:
            return True
        if node.left is None and node.right is None:
            return True
        if node.left and node.right:
            return False
        return self.is_degenerate(node.left)

    def is_skewed(self, node):
        """Check if the tree is skewed.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if skewed, False otherwise
        """
        if node is None:
            return True
        if node.left and node.right:
            return False
        return self.is_skewed(node.left)

    def is_heap(self, node):
        """Check if the tree is a heap.
        
        Args:
            node: Root of the subtree to check
            
        Returns:
            True if heap, False otherwise
        """
        if node is None:
            return True
        if node.left and node.right:
            return False
        return self.is_heap(node.left)
  `,
  category: "Data Structure",
};
