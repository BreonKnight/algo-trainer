import { AlgorithmPattern } from "../../types";

export const dijkstraPattern: AlgorithmPattern = {
  title: "Dijkstra's Algorithm",
  description:
    "Find shortest paths from a source vertex to all other vertices in a weighted graph with non-negative edges",
  timeComplexity: "O((V + E) * log V) with binary heap",
  spaceComplexity: "O(V)",
  pseudocode: `1. Initialize distances to all vertices as infinite except source (= 0)
2. Create priority queue and add source with distance 0
3. While priority queue is not empty:
   - Extract vertex u with minimum distance
   - For each neighbor v of u:
     - If dist[u] + weight(u,v) < dist[v]:
       - Update dist[v]
       - Add v to priority queue`,
  example: `Graph (Monster Hunter Rise Areas):
Shrine Ruins → Frost Islands (4)
Shrine Ruins → Sandy Plains (2)
Sandy Plains → Flooded Forest (3)
Frost Islands → Lava Caverns (5)
Flooded Forest → Lava Caverns (2)

Source: Shrine Ruins
Result:
Shrine Ruins: 0
Sandy Plains: 2
Frost Islands: 4
Flooded Forest: 5
Lava Caverns: 7`,
  implementation: `from heapq import heappush, heappop

def dijkstra(graph, source):
    # Initialize distances
    distances = {vertex: float('infinity') for vertex in graph}
    distances[source] = 0
    
    # Priority queue [(distance, vertex)]
    pq = [(0, source)]
    
    while pq:
        current_distance, current_vertex = heappop(pq)
        
        # Skip if we've found a better path
        if current_distance > distances[current_vertex]:
            continue
            
        # Check all neighbors
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            
            # Update if we find a shorter path
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heappush(pq, (distance, neighbor))
    
    return distances`,
  category: "graph",
};
