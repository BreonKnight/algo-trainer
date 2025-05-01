import { PatternKey } from "../../types";

export const unionFindPattern = {
  title: "Union Find",
  description:
    "A data structure that tracks elements partitioned into a number of disjoint (non-overlapping) subsets. It provides near-constant-time operations for adding new sets, merging sets, and finding a representative member of a set.",
  timeComplexity: "O(α(n)) per operation (amortized)",
  spaceComplexity: "O(n)",
  pseudocode: `class UnionFind:
    def __init__(self, size):
        self.parent = [i for i in range(size)]
        self.rank = [0] * size
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        x_root = self.find(x)
        y_root = self.find(y)
        
        if x_root == y_root:
            return
        
        if self.rank[x_root] < self.rank[y_root]:
            self.parent[x_root] = y_root
        elif self.rank[x_root] > self.rank[y_root]:
            self.parent[y_root] = x_root
        else:
            self.parent[y_root] = x_root
            self.rank[x_root] += 1`,
  implementation: `class UnionFind:
    """
    Union Find (Disjoint Set Union) implementation with path compression and union by rank.
    Time: O(α(n)) per operation (amortized)
    Space: O(n)
    """
    def __init__(self, size):
        self.parent = [i for i in range(size)]
        self.rank = [0] * size
    
    def find(self, x):
        """
        Find the root of x with path compression.
        """
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        """
        Union two sets using union by rank.
        """
        x_root = self.find(x)
        y_root = self.find(y)
        
        if x_root == y_root:
            return  # Already in the same set
        
        # Union by rank
        if self.rank[x_root] < self.rank[y_root]:
            self.parent[x_root] = y_root
        elif self.rank[x_root] > self.rank[y_root]:
            self.parent[y_root] = x_root
        else:
            self.parent[y_root] = x_root
            self.rank[x_root] += 1
    
    def are_connected(self, x, y):
        """
        Check if two elements are in the same set.
        """
        return self.find(x) == self.find(y)
    
    def get_size(self, x):
        """
        Get the size of the set containing x.
        """
        root = self.find(x)
        return sum(1 for i in range(len(self.parent)) if self.find(i) == root)
    
    def get_sets(self):
        """
        Get all sets in the Union Find structure.
        """
        sets = {}
        for i in range(len(self.parent)):
            root = self.find(i)
            if root not in sets:
                sets[root] = []
            sets[root].append(i)
        return list(sets.values())`,
  example: `# Example usage:
uf = UnionFind(5)  # Create UnionFind for 5 elements

# Initially, each element is its own set
print(uf.are_connected(0, 1))  # False

# Union some elements
uf.union(0, 1)
uf.union(2, 3)
uf.union(1, 2)

# Check connections
print(uf.are_connected(0, 3))  # True
print(uf.are_connected(0, 4))  # False

# Get size of set containing 0
print(uf.get_size(0))  # 4 (elements 0, 1, 2, 3)

# Get all sets
print(uf.get_sets())  # [[0, 1, 2, 3], [4]]`,
  category: "data-structures",
  pattern: "Union Find",
  explanation: `The Union Find data structure, also known as Disjoint Set Union (DSU), is used to efficiently manage and query connected components in a graph. It supports two main operations:

1. Find: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.

2. Union: Join two subsets into a single subset.

The implementation uses two optimizations:
- Path Compression: Flattens the structure of the tree during find operations
- Union by Rank: Always attaches the shorter tree to the root of the taller tree

This results in near-constant-time operations, making it extremely efficient for problems involving connected components, such as:
- Finding connected components in a graph
- Detecting cycles in a graph
- Kruskal's algorithm for minimum spanning trees
- Image processing
- Network connectivity problems

Additional features:
- Size tracking: Get the size of any set
- Set retrieval: Get all sets in the structure
- Connection checking: Check if two elements are connected`,
};
