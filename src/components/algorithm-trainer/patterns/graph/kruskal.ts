import { AlgorithmPattern } from "../../types";

export const kruskalPattern: AlgorithmPattern = {
  title: "Kruskal's Algorithm",
  description: "Find a minimum spanning tree in a weighted undirected graph",
  timeComplexity: "O(E log E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Sort all edges by weight
2. Initialize disjoint set for all vertices
3. For each edge (u,v) in sorted order:
   - If u and v are not in same set:
     - Add edge to MST
     - Union sets of u and v`,
  example: `Graph (Monster Hunter Rise Camp Connections):
Kamura Village --- Base Camp A (3)
Base Camp A --- Base Camp B (4)
Base Camp B --- Sub Camp 1 (2)
Sub Camp 1 --- Kamura Village (5)
Base Camp A --- Sub Camp 1 (1)

Minimum Spanning Tree:
Base Camp A --- Sub Camp 1 (1)
Sub Camp 1 --- Base Camp B (2)
Kamura Village --- Base Camp A (3)

Total Cost: 6`,
  implementation: `class UnionFind:
    def __init__(self, vertices):
        self.parent = {v: v for v in vertices}
        self.rank = {v: 0 for v in vertices}
    
    def find(self, item):
        if self.parent[item] != item:
            self.parent[item] = self.find(self.parent[item])
        return self.parent[item]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1

def kruskal(graph):
    # Create edges list with weights
    edges = []
    for u in graph:
        for v, weight in graph[u].items():
            if u < v:  # Avoid duplicates in undirected graph
                edges.append((weight, u, v))
    
    # Sort edges by weight
    edges.sort()
    
    # Initialize Union-Find
    uf = UnionFind(graph.keys())
    
    # Build MST
    mst = []
    for weight, u, v in edges:
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append((u, v, weight))
    
    return mst`,
  category: "Graph",
};
