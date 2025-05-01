import { AlgorithmPattern } from "../../types";

export const floyd_warshallPattern: AlgorithmPattern = {
  title: "Floyd-Warshall Algorithm",
  description:
    "Find shortest paths between all pairs of vertices in a weighted graph",
  timeComplexity: "O(V³)",
  spaceComplexity: "O(V²)",
  pseudocode: `1. Initialize distance matrix from adjacency matrix
2. For each vertex k:
   - For each vertex i:
     - For each vertex j:
       - If dist[i][k] + dist[k][j] < dist[i][j]:
         - dist[i][j] = dist[i][k] + dist[k][j]`,
  example: `Graph (Monster Hunter World Biomes):
           To Forest  To Waste   To Highland
Forest        0          3           6
Waste         3          0           2
Highland      6          2           0

After Floyd-Warshall:
           To Forest  To Waste   To Highland
Forest        0          3           5
Waste         3          0           2
Highland      5          2           0`,
  implementation: `def floyd_warshall(graph):
    # Initialize distances from graph
    vertices = list(graph.keys())
    n = len(vertices)
    dist = {i: {j: float('infinity') for j in vertices} for i in vertices}
    
    # Set initial distances
    for i in vertices:
        dist[i][i] = 0
        for j, weight in graph[i].items():
            dist[i][j] = weight
    
    # Floyd-Warshall algorithm
    for k in vertices:
        for i in vertices:
            for j in vertices:
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist`,
  category: "Graph",
};
