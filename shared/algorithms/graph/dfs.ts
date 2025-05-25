import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const dfsGraphPattern: AlgorithmPattern = {
  title: "DFS Graph",
  description:
    "A depth-first search algorithm for traversing or searching graph data structures. It explores as far as possible along each branch before backtracking, making it useful for finding paths, detecting cycles, and exploring connected components.",
  timeComplexity: "O(V + E) where V is the number of vertices and E is the number of edges",
  spaceComplexity: "O(V) for the visited array and recursion stack",
  pseudocode: `1. Initialize visited array for all vertices
2. For each unvisited vertex:
   a. Call DFS on the vertex
   b. Mark vertex as visited
   c. For each unvisited neighbor:
      - Recursively call DFS
3. Optional: Track discovery and finish times
4. Optional: Build DFS tree/forest`,
  example: `Input: Undirected Graph
Vertices: 5
Edges: (0,1), (0,2), (1,2), (1,3), (2,4)

Step 1: Start DFS from vertex 0
- Visit 0, mark as visited
- Visit unvisited neighbor 1
  - Visit 1, mark as visited
  - Visit unvisited neighbor 2
    - Visit 2, mark as visited
    - Visit unvisited neighbor 4
      - Visit 4, mark as visited
      - No unvisited neighbors, backtrack
    - No more unvisited neighbors, backtrack
  - Visit unvisited neighbor 3
    - Visit 3, mark as visited
    - No unvisited neighbors, backtrack
  - No more unvisited neighbors, backtrack
- No more unvisited neighbors, backtrack

DFS Order: 0 -> 1 -> 2 -> 4 -> 3`,
  implementation: `class Graph:
    def __init__(self, vertices: int):
        self.vertices = vertices
        self.adj_list = [[] for _ in range(vertices)]
        self.visited = [False] * vertices
        self.discovery_time = [0] * vertices
        self.finish_time = [0] * vertices
        self.time = 0

    def add_edge(self, from_vertex: int, to_vertex: int) -> None:
        self.adj_list[from_vertex].append(to_vertex)
        self.adj_list[to_vertex].append(from_vertex)  # For undirected graph

    def dfs(self, vertex: int) -> None:
        # Mark current vertex as visited
        self.visited[vertex] = True
        self.time += 1
        self.discovery_time[vertex] = self.time

        # Visit all unvisited neighbors
        for neighbor in self.adj_list[vertex]:
            if not self.visited[neighbor]:
                self.dfs(neighbor)

        # Record finish time
        self.time += 1
        self.finish_time[vertex] = self.time

    def dfs_traversal(self) -> None:
        # Reset visited array and time
        self.visited = [False] * self.vertices
        self.time = 0

        # Start DFS from each unvisited vertex
        for i in range(self.vertices):
            if not self.visited[i]:
                self.dfs(i)

    def has_cycle(self) -> bool:
        # Reset visited array
        self.visited = [False] * self.vertices

        # Check for cycles starting from each vertex
        for i in range(self.vertices):
            if not self.visited[i] and self._has_cycle_util(i, -1):
                return True
        return False

    def _has_cycle_util(self, vertex: int, parent: int) -> bool:
        self.visited[vertex] = True

        # Check all neighbors
        for neighbor in self.adj_list[vertex]:
            # If neighbor is not visited, recursively check it
            if not self.visited[neighbor]:
                if self._has_cycle_util(neighbor, vertex):
                    return True
            # If neighbor is visited and not parent, cycle exists
            elif neighbor != parent:
                return True

        return False

    def get_discovery_time(self) -> list[int]:
        return self.discovery_time

    def get_finish_time(self) -> list[int]:
        return self.finish_time`,
  category: "Graph",
  keySteps: [
    "1. Initialize visited array for all vertices",
    "2. Implement recursive DFS function",
    "3. Track discovery and finish times",
    "4. Handle disconnected components",
    "5. Implement cycle detection",
    "6. Build DFS tree/forest",
    "7. Handle both directed and undirected graphs",
    "8. Consider using stack for iterative implementation",
    "9. Add path tracking if needed",
    "10. Implement topological sort for DAGs",
  ],
};
