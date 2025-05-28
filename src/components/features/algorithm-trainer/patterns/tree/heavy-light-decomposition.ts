import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const heavyLightDecompositionPattern: AlgorithmPattern = {
  title: "Heavy Light Decomposition",
  description:
    "A pattern for implementing and using heavy-light decomposition, a technique for efficiently handling queries on trees.",
  timeComplexity: "O(n) preprocessing, O(log n) per query",
  spaceComplexity: "O(n)",
  pseudocode: `1. First DFS to calculate subtree sizes and identify heavy edges
2. Second DFS to decompose tree into chains
3. Build segment trees for each chain
4. For path queries:
   a. While nodes are in different chains:
      - Query the segment tree of the deeper chain
      - Move to the parent of the chain's top
   b. When nodes are in same chain:
      - Query the segment tree for the path between them`,
  example: `Tree:
      1
    / | \\
   2  3  4
  / \\    \\
 5   6    7

Step 1: Calculate sizes
Node sizes: {1:7, 2:3, 3:1, 4:2, 5:1, 6:1, 7:1}

Step 2: Identify heavy edges
Heavy edges: 1-2, 2-5, 1-4, 4-7

Step 3: Decompose into chains
Chains: [1,2,5], [3], [1,4,7], [6]

Step 4: Build segment trees
Each chain gets its own segment tree`,
  implementation: `class HeavyLightDecomposition:
    def __init__(self, tree):
        self.tree = tree
        self.n = len(tree)
        self.parent = [0] * self.n
        self.depth = [0] * self.n
        self.size = [0] * self.n
        self.chain = [0] * self.n
        self.chain_head = [0] * self.n
        self.chain_pos = [0] * self.n
        self.chain_size = [0] * self.n
        self.chain_count = 0
        
        # First DFS to calculate sizes and identify heavy edges
        self.dfs_size(0, -1)
        
        # Second DFS to decompose tree into chains
        self.dfs_chains(0, -1)
        
        # Build segment trees for each chain
        self.segment_trees = []
        for i in range(self.chain_count):
            chain_size = self.chain_size[i]
            self.segment_trees.append([0] * (4 * chain_size))
    
    def dfs_size(self, u, p):
        self.size[u] = 1
        self.parent[u] = p
        self.depth[u] = self.depth[p] + 1 if p != -1 else 0
        
        max_size = 0
        heavy_child = -1
        
        for v in self.tree[u]:
            if v != p:
                self.dfs_size(v, u)
                self.size[u] += self.size[v]
                if self.size[v] > max_size:
                    max_size = self.size[v]
                    heavy_child = v
        
        self.heavy_child = heavy_child
    
    def dfs_chains(self, u, p):
        if self.chain_head[self.chain_count] == 0:
            self.chain_head[self.chain_count] = u
        
        self.chain[u] = self.chain_count
        self.chain_pos[u] = self.chain_size[self.chain_count]
        self.chain_size[self.chain_count] += 1
        
        if self.heavy_child != -1:
            self.dfs_chains(self.heavy_child, u)
        
        for v in self.tree[u]:
            if v != p and v != self.heavy_child:
                self.chain_count += 1
                self.dfs_chains(v, u)
    
    def query_path(self, u, v):
        res = 0
        while self.chain[u] != self.chain[v]:
            if self.depth[self.chain_head[self.chain[u]]] < self.depth[self.chain_head[self.chain[v]]]:
                u, v = v, u
            
            chain = self.chain[u]
            res += self.query_segment_tree(chain, self.chain_pos[self.chain_head[chain]], self.chain_pos[u])
            u = self.parent[self.chain_head[chain]]
        
        if self.depth[u] > self.depth[v]:
            u, v = v, u
        
        res += self.query_segment_tree(self.chain[u], self.chain_pos[u], self.chain_pos[v])
        return res`,
  category: "Data Structure",
};
