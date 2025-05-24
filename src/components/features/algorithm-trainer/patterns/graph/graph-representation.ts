import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const graphRepresentationPattern: AlgorithmPattern = {
  title: "Graph Representation",
  description:
    "A pattern for representing graphs in memory using different data structures. Common representations include adjacency matrix, adjacency list, and edge list, each with its own trade-offs in terms of space and time complexity.",
  timeComplexity:
    "Varies by representation:\n- Adjacency Matrix: O(V²) space, O(1) edge lookup\n- Adjacency List: O(V + E) space, O(degree(v)) edge lookup\n- Edge List: O(E) space, O(E) edge lookup",
  spaceComplexity:
    "Varies by representation:\n- Adjacency Matrix: O(V²)\n- Adjacency List: O(V + E)\n- Edge List: O(E)",
  pseudocode: `1. Adjacency Matrix:
   - Create a V×V matrix
   - For each edge (u,v), set matrix[u][v] = weight
   - For undirected graphs, also set matrix[v][u] = weight

2. Adjacency List:
   - Create an array of V lists
   - For each edge (u,v), add v to list[u]
   - For undirected graphs, also add u to list[v]

3. Edge List:
   - Create a list of edges
   - Each edge stores (u,v,weight)
   - Optionally sort by weight`,
  example: `Input: Undirected Graph
Vertices: 4
Edges: (0,1,2), (0,2,3), (1,2,1), (2,3,4)

1. Adjacency Matrix:
   [
     [0, 2, 3, 0],
     [2, 0, 1, 0],
     [3, 1, 0, 4],
     [0, 0, 4, 0]
   ]

2. Adjacency List:
   [
     [1,2],    // Vertex 0
     [0,2],    // Vertex 1
     [0,1,3],  // Vertex 2
     [2]       // Vertex 3
   ]

3. Edge List:
   [
     {from: 0, to: 1, weight: 2},
     {from: 0, to: 2, weight: 3},
     {from: 1, to: 2, weight: 1},
     {from: 2, to: 3, weight: 4}
   ]`,
  implementation: `# Adjacency Matrix
class GraphMatrix:
    def __init__(self, vertices: int):
        self.vertices = vertices
        self.matrix = [[0 for _ in range(vertices)] for _ in range(vertices)]
    
    def add_edge(self, from_vertex: int, to_vertex: int, weight: int = 1) -> None:
        self.matrix[from_vertex][to_vertex] = weight
        self.matrix[to_vertex][from_vertex] = weight  # For undirected graph
    
    def has_edge(self, from_vertex: int, to_vertex: int) -> bool:
        return self.matrix[from_vertex][to_vertex] != 0
    
    def get_weight(self, from_vertex: int, to_vertex: int) -> int:
        return self.matrix[from_vertex][to_vertex]

# Adjacency List
class GraphList:
    def __init__(self, vertices: int):
        self.vertices = vertices
        self.adj_list = [[] for _ in range(vertices)]
    
    def add_edge(self, from_vertex: int, to_vertex: int) -> None:
        self.adj_list[from_vertex].append(to_vertex)
        self.adj_list[to_vertex].append(from_vertex)  # For undirected graph
    
    def get_neighbors(self, vertex: int) -> list[int]:
        return self.adj_list[vertex]
    
    def has_edge(self, from_vertex: int, to_vertex: int) -> bool:
        return to_vertex in self.adj_list[from_vertex]

# Edge List
from dataclasses import dataclass

@dataclass
class Edge:
    from_vertex: int
    to_vertex: int
    weight: int

class GraphEdgeList:
    def __init__(self, vertices: int):
        self.vertices = vertices
        self.edges: list[Edge] = []
    
    def add_edge(self, from_vertex: int, to_vertex: int, weight: int = 1) -> None:
        self.edges.append(Edge(from_vertex, to_vertex, weight))
    
    def get_edges(self) -> list[Edge]:
        return self.edges
    
    def sort_by_weight(self) -> None:
        self.edges.sort(key=lambda edge: edge.weight)`,
  category: "Graph",
  keySteps: [
    "1. Choose appropriate representation based on graph properties",
    "2. Implement adjacency matrix for dense graphs",
    "3. Implement adjacency list for sparse graphs",
    "4. Implement edge list for algorithms that process all edges",
    "5. Handle both directed and undirected graphs",
    "6. Support weighted and unweighted edges",
    "7. Provide efficient edge lookup operations",
    "8. Implement neighbor traversal methods",
    "9. Consider memory constraints when choosing representation",
    "10. Add helper methods for common graph operations",
  ],
};
