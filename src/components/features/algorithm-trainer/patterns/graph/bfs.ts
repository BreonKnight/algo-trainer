import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const bfsPattern: AlgorithmPattern = {
  title: "BFS",
  description:
    "Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It explores all vertices at the present depth before moving to vertices at the next depth level.",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Initialize visited set and queue
2. Add start node to queue and mark as visited
3. While queue is not empty:
   a. Dequeue a node
   b. Process the node (e.g., print or store)
   c. For each unvisited neighbor:
      - Mark as visited
      - Add to queue
4. Repeat until queue is empty`,
  example: `Graph:
    1 -- 2 -- 5
    |    |    |
    3 -- 4    6

Starting from node 1:
1. Visit 1
2. Visit 2, 3 (neighbors of 1)
3. Visit 4, 5 (neighbors of 2)
4. Visit 6 (neighbor of 5)

Traversal order: 1 -> 2 -> 3 -> 4 -> 5 -> 6`,
  implementation: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex)  # Process node
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Example usage:
graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 4],
    4: [2, 3],
    5: [2, 6],
    6: [5]
}
bfs(graph, 1)`,
  category: "Graph",
};
