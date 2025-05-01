import { AlgorithmPattern } from "../../types";

export const suffixTreePattern: AlgorithmPattern = {
  title: "Suffix Tree",
  description:
    "A compressed trie containing all the suffixes of a given string, providing efficient string operations.",
  timeComplexity: "O(n) construction time",
  spaceComplexity: "O(n)",
  pseudocode: `1. Initialize the suffix tree with a root node
2. For each suffix of the string:
   a. Start from the root
   b. Find the longest path matching the suffix
   c. Split the edge if necessary
   d. Add remaining characters as a new edge
3. Compress the tree by merging edges with single children`,
  example: `Input string: "banana$"
Suffix Tree:
    (root)
    /    \\
   a      b
  / \\    / \\
 n   $  a   a
/ \\    / \\  \\
a  $  n  $  n
|     |     |
$     a     a
      |     |
      $     $
      n
      |
      a
      |
      $`,
  implementation: `class SuffixTreeNode:
    def __init__(self):
        self.children = {}
        self.start = -1
        self.end = -1
        self.suffix_link = None

class SuffixTree:
    def __init__(self, text):
        self.text = text + '$'
        self.root = SuffixTreeNode()
        self.active_node = self.root
        self.active_edge = 0
        self.active_length = 0
        self.remaining = 0
        self.build()

    def build(self):
        n = len(self.text)
        for i in range(n):
            self.extend(i)

    def extend(self, pos):
        self.remaining += 1
        last_new_node = None
        
        while self.remaining > 0:
            if self.active_length == 0:
                self.active_edge = pos
            
            if self.text[self.active_edge] not in self.active_node.children:
                leaf = SuffixTreeNode()
                leaf.start = pos
                leaf.end = len(self.text) - 1
                self.active_node.children[self.text[self.active_edge]] = leaf
                
                if last_new_node is not None:
                    last_new_node.suffix_link = self.active_node
                    last_new_node = None
            else:
                next_node = self.active_node.children[self.text[self.active_edge]]
                edge_length = next_node.end - next_node.start + 1
                
                if self.active_length >= edge_length:
                    self.active_edge += edge_length
                    self.active_length -= edge_length
                    self.active_node = next_node
                    continue
                
                if self.text[next_node.start + self.active_length] == self.text[pos]:
                    if last_new_node is not None and self.active_node != self.root:
                        last_new_node.suffix_link = self.active_node
                        last_new_node = None
                    self.active_length += 1
                    break
                
                split = SuffixTreeNode()
                split.start = next_node.start
                split.end = next_node.start + self.active_length - 1
                self.active_node.children[self.text[self.active_edge]] = split
                
                leaf = SuffixTreeNode()
                leaf.start = pos
                leaf.end = len(self.text) - 1
                split.children[self.text[pos]] = leaf
                
                next_node.start += self.active_length
                split.children[self.text[next_node.start]] = next_node
                
                if last_new_node is not None:
                    last_new_node.suffix_link = split
                
                last_new_node = split
            
            self.remaining -= 1
            if self.active_node == self.root and self.active_length > 0:
                self.active_length -= 1
                self.active_edge = pos - self.remaining + 1
            elif self.active_node != self.root:
                self.active_node = self.active_node.suffix_link`,
  category: "String",
  keySteps: [
    "Initialize the suffix tree structure",
    "Implement Ukkonen's algorithm for linear-time construction",
    "Handle active point updates during construction",
    "Manage suffix links for efficient traversal",
    "Compress the tree for optimal space usage",
  ],
};
