import { AlgorithmPattern } from "../../types/pattern-types";

export const bTreePattern: AlgorithmPattern = {
  title: "B Tree",
  description:
    "A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(n)",
  pseudocode: `class BTreeNode:
    def __init__(self, t, leaf):
        self.t = t  # minimum degree
        self.leaf = leaf
        self.keys = []
        self.children = []

    def search(self, k):
        i = 0
        while i < len(self.keys) and k > self.keys[i]:
            i += 1

        if i < len(self.keys) and self.keys[i] == k:
            return self

        if self.leaf:
            return None

        return self.children[i].search(k)

    def insert(self, k):
        if len(self.keys) == 2 * self.t - 1:
            s = BTreeNode(self.t, False)
            s.children.append(self)
            s.split_child(0, self)
            i = 0
            if s.keys[0] < k:
                i += 1
            s.children[i].insert_non_full(k)
        else:
            self.insert_non_full(k)

    def insert_non_full(self, k):
        i = len(self.keys) - 1

        if self.leaf:
            while i >= 0 and self.keys[i] > k:
                self.keys.insert(i + 1, self.keys[i])
                i -= 1
            self.keys.insert(i + 1, k)
        else:
            while i >= 0 and self.keys[i] > k:
                i -= 1
            if len(self.children[i + 1].keys) == 2 * self.t - 1:
                self.split_child(i + 1, self.children[i + 1])
                if self.keys[i + 1] < k:
                    i += 1
            self.children[i + 1].insert_non_full(k)

    def split_child(self, i, y):
        z = BTreeNode(y.t, y.leaf)
        z.keys = y.keys[y.t:2*y.t-1]
        if not y.leaf:
            z.children = y.children[y.t:2*y.t]
        y.keys = y.keys[:y.t-1]
        y.children = y.children[:y.t]
        self.children.insert(i + 1, z)
        self.keys.insert(i, y.keys[y.t-1])`,
  example: `# Create a B-tree with minimum degree 3
b_tree = BTreeNode(3, True)

# Insert some keys
b_tree.insert(10)
b_tree.insert(20)
b_tree.insert(30)
b_tree.insert(40)
b_tree.insert(50)

# Search for a key
result = b_tree.search(30)
print(result)  # Should return the node containing 30`,
  implementation: `class BTree:
    def __init__(self, t):
        self.t = t
        self.root = BTreeNode(t, True)

    def search(self, k):
        return self.root.search(k)

    def insert(self, k):
        if len(self.root.keys) == 2 * self.t - 1:
            s = BTreeNode(self.t, False)
            s.children.append(self.root)
            s.split_child(0, self.root)
            i = 0
            if s.keys[0] < k:
                i += 1
            s.children[i].insert_non_full(k)
            self.root = s
        else:
            self.root.insert_non_full(k)`,
  category: "Data Structures",
  keySteps: [
    "1. Initialize the B-tree with a minimum degree t",
    "2. Implement the search operation to find a key in the tree",
    "3. Implement the insert operation to add a new key to the tree",
    "4. Handle node splitting when a node becomes full",
    "5. Maintain the B-tree properties during operations",
  ],
};
