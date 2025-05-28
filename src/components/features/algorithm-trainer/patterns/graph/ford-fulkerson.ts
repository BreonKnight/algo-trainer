import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const fordFulkersonPattern: AlgorithmPattern = {
  title: "Ford-Fulkerson Algorithm",
  description:
    "An algorithm for computing the maximum flow in a flow network. It works by finding augmenting paths from the source to the sink and increasing the flow along these paths until no more augmenting paths can be found.",
  timeComplexity:
    "O(E * max_flow) where E is the number of edges and max_flow is the maximum flow value",
  spaceComplexity: "O(V + E) for storing the residual graph and path information",
  pseudocode: `1. Initialize residual graph with original capacities
2. While there exists an augmenting path from source to sink:
   a. Find an augmenting path using DFS or BFS
   b. Find the minimum capacity along the path
   c. Update residual capacities along the path
   d. Add the flow to the total flow
3. Return the maximum flow`,
  example: `Input: Flow Network
Source: 0, Sink: 5
Edges with capacities:
0->1: 10
0->2: 8
1->2: 2
1->3: 4
2->4: 9
3->5: 10
4->3: 6
4->5: 10

Step 1: Find augmenting path 0->1->3->5
  - Min capacity: 4
  - Update flow: 4
  - Update residual capacities

Step 2: Find augmenting path 0->2->4->5
  - Min capacity: 8
  - Update flow: 12
  - Update residual capacities

Step 3: Find augmenting path 0->2->4->3->5
  - Min capacity: 2
  - Update flow: 14
  - Update residual capacities

Final maximum flow: 14`,
  implementation: `from collections import deque
from typing import List

class FordFulkerson:
    def __init__(self, vertices: int):
        self.vertices = vertices
        self.graph = [[0] * vertices for _ in range(vertices)]
        self.residual_graph = [[0] * vertices for _ in range(vertices)]
        self.parent = [-1] * vertices
        self.visited = [False] * vertices
    
    def add_edge(self, from_vertex: int, to_vertex: int, capacity: int) -> None:
        self.graph[from_vertex][to_vertex] = capacity
        self.residual_graph[from_vertex][to_vertex] = capacity
    
    def _bfs(self, source: int, sink: int) -> bool:
        # Reset visited array and parent array
        self.visited = [False] * self.vertices
        self.parent = [-1] * self.vertices
        
        # Initialize queue with source
        queue = deque([source])
        self.visited[source] = True
        
        # BFS to find augmenting path
        while queue:
            current = queue.popleft()
            
            for v in range(self.vertices):
                if not self.visited[v] and self.residual_graph[current][v] > 0:
                    queue.append(v)
                    self.parent[v] = current
                    self.visited[v] = True
                    
                    if v == sink:
                        return True
        
        return False
    
    def find_max_flow(self, source: int, sink: int) -> int:
        max_flow = 0
        
        # Find augmenting paths and update flow
        while self._bfs(source, sink):
            # Find minimum capacity in the path
            path_flow = float('inf')
            v = sink
            
            while v != source:
                u = self.parent[v]
                path_flow = min(path_flow, self.residual_graph[u][v])
                v = u
            
            # Update residual capacities
            v = sink
            while v != source:
                u = self.parent[v]
                self.residual_graph[u][v] -= path_flow
                self.residual_graph[v][u] += path_flow
                v = u
            
            max_flow += path_flow
        
        return max_flow`,
  category: "Graph",
  keySteps: [
    "1. Initialize the residual graph with original capacities",
    "2. Implement BFS to find augmenting paths",
    "3. Find the minimum capacity along the augmenting path",
    "4. Update residual capacities in both directions",
    "5. Accumulate the flow and repeat until no more augmenting paths exist",
    "6. Use adjacency matrix for dense graphs or adjacency list for sparse graphs",
    "7. Keep track of parent pointers for path reconstruction",
    "8. Handle edge cases like disconnected graphs",
    "9. Consider using a queue for BFS implementation",
    "10. Use residual capacities to track remaining flow capacity",
  ],
};
