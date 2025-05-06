import { AlgorithmPattern } from "../../types";

export const kahnsTopologicalSortPattern: AlgorithmPattern = {
  title: "Kahn's Topological Sort",
  description:
    "An algorithm for finding a topological ordering of vertices in a directed acyclic graph (DAG). It works by repeatedly removing vertices with no incoming edges and adding them to the topological order.",
  timeComplexity: "O(V + E) where V is the number of vertices and E is the number of edges",
  spaceComplexity: "O(V) for storing the in-degree array and queue",
  pseudocode: `1. Calculate in-degree for each vertex
2. Add all vertices with in-degree 0 to a queue
3. While queue is not empty:
   a. Remove a vertex from queue
   b. Add it to the topological order
   c. For each neighbor of the vertex:
      - Decrease its in-degree by 1
      - If in-degree becomes 0, add to queue
4. If topological order contains all vertices, return it
   Otherwise, the graph has a cycle`,
  example: `Input: Directed Acyclic Graph
Vertices: 5
Edges: (0,1), (0,2), (1,3), (2,3), (3,4)

Step 1: Calculate in-degrees
Vertex 0: 0
Vertex 1: 1
Vertex 2: 1
Vertex 3: 2
Vertex 4: 1

Step 2: Add vertex 0 to queue (in-degree = 0)

Step 3: Process queue
- Remove 0, add to order [0]
- Decrease in-degree of 1 and 2
- Add 1 and 2 to queue (in-degree = 0)
- Remove 1, add to order [0,1]
- Decrease in-degree of 3
- Remove 2, add to order [0,1,2]
- Decrease in-degree of 3
- Add 3 to queue (in-degree = 0)
- Remove 3, add to order [0,1,2,3]
- Decrease in-degree of 4
- Add 4 to queue (in-degree = 0)
- Remove 4, add to order [0,1,2,3,4]

Final topological order: [0,1,2,3,4]`,
  implementation: `from collections import deque
from typing import Optional, List

class Graph:
    def __init__(self, vertices: int):
        self.vertices = vertices
        self.adj_list = [[] for _ in range(vertices)]
    
    def add_edge(self, from_vertex: int, to_vertex: int) -> None:
        self.adj_list[from_vertex].append(to_vertex)
    
    def topological_sort(self) -> Optional[List[int]]:
        # Calculate in-degree for each vertex
        in_degree = [0] * self.vertices
        for i in range(self.vertices):
            for neighbor in self.adj_list[i]:
                in_degree[neighbor] += 1
        
        # Add vertices with in-degree 0 to queue
        queue = deque()
        for i in range(self.vertices):
            if in_degree[i] == 0:
                queue.append(i)
        
        # Process queue and build topological order
        order = []
        count = 0
        
        while queue:
            vertex = queue.popleft()
            order.append(vertex)
            count += 1
            
            # Decrease in-degree for all neighbors
            for neighbor in self.adj_list[vertex]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
        
        # Check if we have a valid topological order
        return order if count == self.vertices else None`,
  category: "Graph",
  keySteps: [
    "1. Calculate in-degree for each vertex in the graph",
    "2. Initialize a queue with vertices having in-degree 0",
    "3. Process the queue by removing vertices and updating in-degrees",
    "4. Add processed vertices to the topological order",
    "5. Check if all vertices were processed to detect cycles",
    "6. Use adjacency list for efficient neighbor traversal",
    "7. Handle edge cases like empty graphs and disconnected components",
    "8. Consider using a priority queue for lexicographically smallest order",
    "9. Track visited vertices to detect cycles",
    "10. Return null if a cycle is detected",
  ],
};
