import { AlgorithmPattern } from "../../types";

export const bellman_fordPattern: AlgorithmPattern = {
  title: "Bellman-Ford Algorithm",
  description:
    "Find shortest paths from a source vertex to all other vertices, even with negative edge weights",
  timeComplexity: "O(V * E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Initialize distances to all vertices as infinite except source (= 0)
2. Repeat V-1 times:
   - For each edge (u, v) with weight w:
     - If dist[u] + w < dist[v]:
       - dist[v] = dist[u] + w
3. Check for negative weight cycles:
   - For each edge (u, v) with weight w:
     - If dist[u] + w < dist[v]:
       - Report negative cycle`,
  example: `Graph (Monster Hunter World Map):
Ancient Forest → Wildspire Waste (-2)
Wildspire Waste → Coral Highlands (4)
Ancient Forest → Coral Highlands (5)
Coral Highlands → Rotten Vale (-3)

Source: Ancient Forest
Result:
Ancient Forest: 0
Wildspire Waste: -2
Coral Highlands: 2
Rotten Vale: -1`,
  implementation: `def bellman_ford(graph, source):
    # Initialize distances
    distances = {vertex: float('infinity') for vertex in graph}
    distances[source] = 0
    
    # Relax edges V-1 times
    V = len(graph)
    for _ in range(V - 1):
        for u in graph:
            for v, weight in graph[u].items():
                if distances[u] + weight < distances[v]:
                    distances[v] = distances[u] + weight
    
    # Check for negative cycles
    for u in graph:
        for v, weight in graph[u].items():
            if distances[u] + weight < distances[v]:
                return None  # Negative cycle exists
    
    return distances`,
  category: "Gsraph",
};
