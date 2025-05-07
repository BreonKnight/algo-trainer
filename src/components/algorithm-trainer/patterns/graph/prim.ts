import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const primPattern: AlgorithmPattern = {
  title: "Prim's Algorithm",
  description:
    "Find a minimum spanning tree in a weighted undirected graph starting from a source vertex",
  timeComplexity: "O((V + E) log V) with binary heap",
  spaceComplexity: "O(V)",
  pseudocode: `1. Start with any vertex as source
2. Initialize key values as infinite except source (= 0)
3. While not all vertices are included:
   - Pick vertex u with minimum key value
   - Include u in MST
   - Update key values of adjacent vertices
     if smaller than current key`,
  example: `Graph (Monster Hunter World Gathering Hub):
Workshop --- Canteen (2)
Workshop --- Item Box (4)
Canteen --- Quest Board (3)
Item Box --- Quest Board (1)
Canteen --- Item Box (5)

MST from Workshop:
Workshop --- Canteen (2)
Item Box --- Quest Board (1)
Workshop --- Item Box (4)

Total Cost: 7`,
  implementation: `from heapq import heappush, heappop

def prim(graph, start):
    # Initialize data structures
    mst = []
    visited = set([start])
    edges = []
    
    # Add edges from start vertex
    for to_vertex, weight in graph[start].items():
        heappush(edges, (weight, start, to_vertex))
    
    while edges and len(visited) < len(graph):
        weight, from_vertex, to_vertex = heappop(edges)
        
        if to_vertex in visited:
            continue
            
        visited.add(to_vertex)
        mst.append((from_vertex, to_vertex, weight))
        
        # Add new edges to heap
        for next_vertex, next_weight in graph[to_vertex].items():
            if next_vertex not in visited:
                heappush(edges, (next_weight, to_vertex, next_vertex))
    
    return mst`,
  category: "Graph",
};
