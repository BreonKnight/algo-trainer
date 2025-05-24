import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const maximumBipartiteMatchingPattern: AlgorithmPattern = {
  title: "Maximum Bipartite Matching",
  description:
    "A graph algorithm that finds the maximum matching in a bipartite graph. A matching is a set of edges without common vertices, and a maximum matching is a matching of maximum size.",
  timeComplexity: "O(V * E)",
  spaceComplexity: "O(V + E)",
  pseudocode: `
function maxBipartiteMatching(graph, n, m):
    # n = number of vertices in left set
    # m = number of vertices in right set
    match_to = [-1] * m
    result = 0
    
    def bpm(u, seen):
        for v in range(m):
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if match_to[v] == -1 or bpm(match_to[v], seen):
                    match_to[v] = u
                    return True
        return False
    
    for u in range(n):
        seen = [False] * m
        if bpm(u, seen):
            result += 1
    
    return result
  `,
  example: `
# Example usage:
graph = [
  [0, 1, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1]
]
n = 6  # Number of vertices in left set
m = 6  # Number of vertices in right set
max_matching = max_bipartite_matching(graph, n, m)
print(max_matching)  # Output: 5
  `,
  implementation: `from typing import List

def max_bipartite_matching(graph: List[List[int]], n: int, m: int) -> int:
    """
    Find the maximum matching in a bipartite graph.
    
    Args:
        graph: Adjacency matrix representing the bipartite graph
        n: Number of vertices in the left set
        m: Number of vertices in the right set
    
    Returns:
        Size of the maximum matching
    """
    match_to = [-1] * m
    result = 0
    
    def bpm(u: int, seen: List[bool]) -> bool:
        """
        A DFS based recursive function that returns true if a matching for vertex u is possible.
        
        Args:
            u: Vertex in the left set
            seen: Array to keep track of visited vertices in the right set
        
        Returns:
            True if a matching is possible, False otherwise
        """
        for v in range(m):
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if match_to[v] == -1 or bpm(match_to[v], seen):
                    match_to[v] = u
                    return True
        return False
    
    for u in range(n):
        seen = [False] * m
        if bpm(u, seen):
            result += 1
    
    return result

# Example usage
graph = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1]
]
n = 6  # Number of vertices in left set
m = 6  # Number of vertices in right set
max_matching = max_bipartite_matching(graph, n, m)
print(f"Maximum matching size: {max_matching}")  # 5`,
  category: "Graph",
};
