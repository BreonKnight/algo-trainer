import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const redBlackTreePattern: AlgorithmPattern = {
  title: "Red-Black Tree",
  description: `
    A self-balancing binary search tree where each node has an extra bit for color (red or black). 
    The tree maintains balance through color properties and rotations, ensuring O(log n) performance for all operations.

    Properties:
    1. Every node is either red or black
    2. The root is black
    3. All leaves (NIL) are black
    4. If a node is red, both its children are black
    5. Every path from a node to its descendant leaves contains the same number of black nodes
  `,
  timeComplexity: "O(log n) for search, insert, and delete",
  spaceComplexity: "O(n)",
  implementation: `class Node:
    def __init__(self, key, color='RED'):
        self.key = key
        self.left = None
        self.right = None
        self.parent = None
        self.color = color

class RedBlackTree:
    def __init__(self):
        self.NIL = Node(None, 'BLACK')
        self.root = self.NIL

    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL:
            y.left.parent = x
        y.parent = x.parent
        if x.parent == self.NIL:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        y.left = x
        x.parent = y

    def right_rotate(self, x):
        y = x.left
        x.left = y.right
        if y.right != self.NIL:
            y.right.parent = x
        y.parent = x.parent
        if x.parent == self.NIL:
            self.root = y
        elif x == x.parent.right:
            x.parent.right = y
        else:
            x.parent.left = y
        y.right = x
        x.parent = y

    def insert(self, key):
        z = Node(key)
        y = self.NIL
        x = self.root
        while x != self.NIL:
            y = x
            if z.key < x.key:
                x = x.left
            else:
                x = x.right
        z.parent = y
        if y == self.NIL:
            self.root = z
        elif z.key < y.key:
            y.left = z
        else:
            y.right = z
        z.left = self.NIL
        z.right = self.NIL
        z.color = 'RED'
        self.insert_fixup(z)

    def insert_fixup(self, z):
        while z.parent.color == 'RED':
            if z.parent == z.parent.parent.left:
                y = z.parent.parent.right
                if y.color == 'RED':
                    z.parent.color = 'BLACK'
                    y.color = 'BLACK'
                    z.parent.parent.color = 'RED'
                    z = z.parent.parent
                else:
                    if z == z.parent.right:
                        z = z.parent
                        self.left_rotate(z)
                    z.parent.color = 'BLACK'
                    z.parent.parent.color = 'RED'
                    self.right_rotate(z.parent.parent)
            else:
                y = z.parent.parent.left
                if y.color == 'RED':
                    z.parent.color = 'BLACK'
                    y.color = 'BLACK'
                    z.parent.parent.color = 'RED'
                    z = z.parent.parent
                else:
                    if z == z.parent.left:
                        z = z.parent
                        self.right_rotate(z)
                    z.parent.color = 'BLACK'
                    z.parent.parent.color = 'RED'
                    self.left_rotate(z.parent.parent)
        self.root.color = 'BLACK'

    def search(self, key):
        x = self.root
        while x != self.NIL and key != x.key:
            if key < x.key:
                x = x.left
            else:
                x = x.right
        return x

    def inorder_traversal(self, node=None):
        if node is None:
            node = self.root
        if node != self.NIL:
            self.inorder_traversal(node.left)
            print(f"Key: {node.key}, Color: {node.color}")
            self.inorder_traversal(node.right)

    def level_order_traversal(self):
        if self.root == self.NIL:
            return []
        
        result = []
        queue = [self.root]
        
        while queue:
            level_size = len(queue)
            current_level = []
            
            for _ in range(level_size):
                node = queue.pop(0)
                current_level.append({
                    'key': node.key,
                    'color': node.color
                })
                
                if node.left != self.NIL:
                    queue.append(node.left)
                if node.right != self.NIL:
                    queue.append(node.right)
            
            result.append(current_level)
        
        return result`,
  example: `
    # Create a red-black tree
    rbt = RedBlackTree()
    
    # Insert some keys
    rbt.insert(10)
    rbt.insert(20)
    rbt.insert(30)
    rbt.insert(15)
    rbt.insert(25)
    
    # Search for a key
    node = rbt.search(20)
    if node != rbt.NIL:
        print(f"Found key: {node.key}")
    
    # Traverse the tree
    print("Inorder traversal:")
    rbt.inorder_traversal()
  `,
  pseudocode: `
    class Node:
        key: any
        left: Node
        right: Node
        parent: Node
        color: 'RED' | 'BLACK'

    class RedBlackTree:
        NIL: Node
        root: Node

        function left_rotate(x: Node):
            y = x.right
            x.right = y.left
            if y.left != NIL:
                y.left.parent = x
            y.parent = x.parent
            if x.parent == NIL:
                root = y
            else if x == x.parent.left:
                x.parent.left = y
            else:
                x.parent.right = y
            y.left = x
            x.parent = y

        function right_rotate(x: Node):
            y = x.left
            x.left = y.right
            if y.right != NIL:
                y.right.parent = x
            y.parent = x.parent
            if x.parent == NIL:
                root = y
            else if x == x.parent.right:
                x.parent.right = y
            else:
                x.parent.left = y
            y.right = x
            x.parent = y

        function insert(key: any):
            z = new Node(key)
            y = NIL
            x = root
            while x != NIL:
                y = x
                if z.key < x.key:
                    x = x.left
                else:
                    x = x.right
            z.parent = y
            if y == NIL:
                root = z
            else if z.key < y.key:
                y.left = z
            else:
                y.right = z
            z.left = NIL
            z.right = NIL
            z.color = 'RED'
            insert_fixup(z)

        function insert_fixup(z: Node):
            while z.parent.color == 'RED':
                if z.parent == z.parent.parent.left:
                    y = z.parent.parent.right
                    if y.color == 'RED':
                        z.parent.color = 'BLACK'
                        y.color = 'BLACK'
                        z.parent.parent.color = 'RED'
                        z = z.parent.parent
                    else:
                        if z == z.parent.right:
                            z = z.parent
                            left_rotate(z)
                        z.parent.color = 'BLACK'
                        z.parent.parent.color = 'RED'
                        right_rotate(z.parent.parent)
                else:
                    y = z.parent.parent.left
                    if y.color == 'RED':
                        z.parent.color = 'BLACK'
                        y.color = 'BLACK'
                        z.parent.parent.color = 'RED'
                        z = z.parent.parent
                    else:
                        if z == z.parent.left:
                            z = z.parent
                            right_rotate(z)
                        z.parent.color = 'BLACK'
                        z.parent.parent.color = 'RED'
                        left_rotate(z.parent.parent)
            root.color = 'BLACK'

        function search(key: any): Node
            x = root
            while x != NIL and key != x.key:
                if key < x.key:
                    x = x.left
                else:
                    x = x.right
            return x
  `,
  category: "Data Structures",
};
