import { AlgorithmPattern } from "../../types";

export const bridgesPattern: AlgorithmPattern = {
  title: "Bridge Finding Algorithm",
  description: "Find edges in a graph whose removal disconnects the graph",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Start DFS from any vertex
2. For each vertex v:
   - Keep track of discovery time and lowest reachable vertex
   - For each edge (v,w):
     - If w can't reach v's ancestors through another path
       - (v,w) is a bridge`,
  example: `Graph (Monster Hunter Rise Critical Paths):
Kamura Village === Great Bridge ===> Shrine Ruins
                     ||
                     ||
                  Frost Islands === Flooded Forest
                     ||
                  Lava Caverns

Bridges (Critical Paths):
- Great Bridge (connects Kamura to hunting grounds)
- Path to Frost Islands (connects to northern areas)
- Path to Lava Caverns (only access to volcanic region)`,
  implementation: `def find_bridges(graph):
    def dfs(u, parent, visited, disc, low, time, bridges):
        # Mark current node as visited
        visited[u] = True
        
        # Initialize discovery time and low value
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        # Go through all vertices adjacent to this
        for v in graph[u]:
            # If v is not visited yet, then recur for it
            if not visited[v]:
                dfs(v, u, visited, disc, low, time, bridges)
                
                # Check if the subtree rooted with v has a connection to
                # one of the ancestors of u
                low[u] = min(low[u], low[v])
                
                # If the lowest vertex reachable from subtree under v is
                # below u in DFS tree, then u-v is a bridge
                if low[v] > disc[u]:
                    bridges.append((u, v))
                    
            # Update low value of u for parent function calls
            elif v != parent:
                low[u] = min(low[u], disc[v])
    
    # Initialize variables
    visited = {v: False for v in graph}
    disc = {v: float("inf") for v in graph}
    low = {v: float("inf") for v in graph}
    time = [0]
    bridges = []
    
    # Call the recursive helper function to find bridges
    # in DFS tree rooted with vertex 'i'
    for i in graph:
        if not visited[i]:
            dfs(i, -1, visited, disc, low, time, bridges)
            
    return bridges`,
  category: "graph",
};
