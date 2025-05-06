import { AlgorithmPattern } from "../../types";

export const binarySearchTreePattern: AlgorithmPattern = {
  title: "Binary Search Tree",
  description:
    "A pattern for implementing and using a binary search tree, a hierarchical data structure where each node has at most two children.",
  timeComplexity: "Average: O(log n) for insert/delete/search, Worst: O(n)",
  spaceComplexity: "O(n) for n nodes",
  category: "Data Structure",
  pseudocode: `
BST operations:
1. insert(value):
   - Add value maintaining BST property
2. delete(value):
   - Remove value maintaining BST property
3. search(value):
   - Find node with value
4. min():
   - Find minimum value
5. max():
   - Find maximum value
`,
  example: `bst = BST()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(1)
bst.insert(9)

     5
   /   \\
  3     7
 /       \\
1         9`,
  implementation: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        if not self.root:
            self.root = Node(value)
            return
            
        def _insert(node, value):
            if value < node.value:
                if node.left is None:
                    node.left = Node(value)
            else:
                    _insert(node.left, value)
            else:
                if node.right is None:
                    node.right = Node(value)
            else:
                    _insert(node.right, value)
                    
        _insert(self.root, value)
    
    def search(self, value):
        def _search(node, value):
            if node is None or node.value == value:
                return node
            if value < node.value:
                return _search(node.left, value)
            return _search(node.right, value)
            
        return _search(self.root, value)
    
    def min(self):
        if not self.root:
            return None
        
        node = self.root
        while node.left:
            node = node.left
        return node.value
    
    def max(self):
        if not self.root:
            return None
        
        node = self.root
        while node.right:
            node = node.right
        return node.value
    
    def delete(self, value):
        def _min_value_node(node):
            current = node
            while current.left:
                current = current.left
            return current
        
        def _delete(node, value):
            if not node:
                return node
                
            if value < node.value:
                node.left = _delete(node.left, value)
            elif value > node.value:
                node.right = _delete(node.right, value)
            else:
                if not node.left:
                    return node.right
                elif not node.right:
                    return node.left
                    
                temp = _min_value_node(node.right)
                node.value = temp.value
                node.right = _delete(node.right, temp.value)
                
            return node
            
        self.root = _delete(self.root, value)`,
};
