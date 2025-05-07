import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const stronglyConnectedComponentsPattern: AlgorithmPattern = {
  title: "Strongly Connected Components",
  description:
    "A graph algorithm that finds strongly connected components in a directed graph. A strongly connected component is a maximal subgraph where every pair of vertices is mutually reachable.",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V + E)",
  pseudocode: `
function kosaraju(graph):
    # First pass: compute finishing times
    visited = [False] * len(graph)
    order = []
    
    def dfs(u):
        visited[u] = True
        for v in graph[u]:
            if not visited[v]:
                dfs(v)
        order.append(u)
    
    for u in range(len(graph)):
        if not visited[u]:
            dfs(u)
    
    # Second pass: process in reverse order
    visited = [False] * len(graph)
    components = []
    
    def reverse_dfs(u, component):
        visited[u] = True
        component.append(u)
        for v in reversed_graph[u]:
            if not visited[v]:
                reverse_dfs(v, component)
    
    reversed_graph = [[] for _ in range(len(graph))]
    for u in range(len(graph)):
        for v in graph[u]:
            reversed_graph[v].append(u)
    
    for u in reversed(order):
        if not visited[u]:
            component = []
            reverse_dfs(u, component)
            components.append(component)
    
    return components
  `,
  example: `
# Example usage:
graph = [
    [1],        # 0 -> 1
    [2],        # 1 -> 2
    [0, 3],     # 2 -> 0, 3
    [4],        # 3 -> 4
    [5],        # 4 -> 5
    [3]         # 5 -> 3
]
components = kosaraju(graph)
print(components)  # Output: [[0, 1, 2], [3, 4, 5]]
  `,
  implementation: `from typing import List

def kosaraju(graph: List[List[int]]) -> List[List[int]]:
    """
    Find strongly connected components in a directed graph using Kosaraju's algorithm.
    
    Args:
        graph: Adjacency list representation of the graph
    
    Returns:
        List of strongly connected components, where each component is a list of vertices
    """
    n = len(graph)
    visited = [False] * n
    order = []
    
    # First pass: compute finishing times
    def dfs(u: int) -> None:
        """
        Depth-first search to compute finishing times.
        
        Args:
            u: Current vertex
        """
        visited[u] = True
        for v in graph[u]:
            if not visited[v]:
                dfs(v)
        order.append(u)
    
    for u in range(n):
        if not visited[u]:
            dfs(u)
    
    # Second pass: process in reverse order
    visited = [False] * n
    components = []
    
    def reverse_dfs(u: int, component: List[int]) -> None:
        """
        Depth-first search on the reversed graph to find strongly connected components.
        
        Args:
            u: Current vertex
            component: Current strongly connected component
        """
        visited[u] = True
        component.append(u)
        for v in reversed_graph[u]:
            if not visited[v]:
                reverse_dfs(v, component)
    
    # Build reversed graph
    reversed_graph = [[] for _ in range(n)]
    for u in range(n):
        for v in graph[u]:
            reversed_graph[v].append(u)
    
    # Process vertices in reverse order
    for u in reversed(order):
        if not visited[u]:
            component = []
            reverse_dfs(u, component)
            components.append(component)
    
    return components

# Example usage
graph = [
    [1],        # 0 -> 1
    [2],        # 1 -> 2
    [0, 3],     # 2 -> 0, 3
    [4],        # 3 -> 4
    [5],        # 4 -> 5
    [3]         # 5 -> 3
]
components = kosaraju(graph)
print(f"Strongly connected components: {components}")  # [[0, 1, 2], [3, 4, 5]]`,
  category: "Graph",
};
