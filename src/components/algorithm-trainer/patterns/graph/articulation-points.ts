import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const articulationPointsPattern: AlgorithmPattern = {
  title: "Articulation Points",
  description:
    "Find vertices in a graph whose removal increases the number of connected components",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Start DFS from any vertex
2. For each vertex v:
   - Keep track of discovery time and lowest reachable vertex
   - If any child subtree can't reach above v
     - v is an articulation point
3. Root is articulation point if it has > 1 children`,
  example: `Graph (Monster Hunter World Map Connections):
Ancient Forest --- Astera (critical hub)
Astera --- Wildspire Waste
Astera --- Coral Highlands
Coral Highlands --- Rotten Vale
Rotten Vale --- Elder's Recess

Articulation Points:
- Astera (removing it disconnects Ancient Forest)
- Coral Highlands (removing it disconnects Rotten Vale and Elder's Recess)`,
  implementation: `def find_articulation_points(graph):
    def dfs(u, parent, visited, disc, low, time, ap):
        # Count children in DFS tree
        children = 0
        
        # Mark current node as visited
        visited[u] = True
        
        # Initialize discovery time and low value
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        # Go through all vertices adjacent to this
        for v in graph[u]:
            # If v is not visited yet, then make it a child of u
            # in DFS tree and recur for it
            if not visited[v]:
                children += 1
                dfs(v, u, visited, disc, low, time, ap)
                
                # Check if the subtree rooted with v has a connection to
                # one of the ancestors of u
                low[u] = min(low[u], low[v])
                
                # u is an articulation point in following cases:
                # (1) u is root of DFS tree and has two or more children
                if parent == -1 and children > 1:
                    ap.add(u)
                    
                # (2) If u is not root and low value of one of its child
                # is more than discovery value of u
                if parent != -1 and low[v] >= disc[u]:
                    ap.add(u)
                    
            # Update low value of u for parent function calls
            elif v != parent:
                low[u] = min(low[u], disc[v])
    
    # Initialize variables
    visited = {v: False for v in graph}
    disc = {v: float("inf") for v in graph}
    low = {v: float("inf") for v in graph}
    time = [0]
    ap = set()
    
    # Call the recursive helper function to find articulation points
    # in DFS tree rooted with vertex 'i'
    for i in graph:
        if not visited[i]:
            dfs(i, -1, visited, disc, low, time, ap)
            
    return list(ap)`,
  category: "Graph",
};
