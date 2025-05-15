import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const graphDfsPattern: AlgorithmPattern = {
  title: "Graph DFS",
  description:
    "Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at a selected node and explores as far as possible along each branch before backtracking.",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Initialize visited set to track visited nodes
2. Define DFS function:
   a. Mark current node as visited
   b. Process current node (e.g., print or store)
   c. For each unvisited neighbor:
      - Recursively call DFS on the neighbor
3. Start DFS from the source node`,
  example: `Graph:
    1 -- 2 -- 5
    |    |    |
    3 -- 4    6

Starting from node 1:
1. Visit 1
2. Visit 2 (unvisited neighbor of 1)
3. Visit 4 (unvisited neighbor of 2)
4. Visit 3 (unvisited neighbor of 4)
5. Backtrack to 2, visit 5
6. Visit 6 (unvisited neighbor of 5)

Traversal order: 1 -> 2 -> 4 -> 3 -> 5 -> 6`,
  implementation: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)  # Process node
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Example usage:
graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 4],
    4: [2, 3],
    5: [2, 6],
    6: [5]
}
dfs(graph, 1)`,
  category: "Graph",
};
