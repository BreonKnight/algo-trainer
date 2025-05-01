import { ChevronRight } from "lucide-react";

export const FloydWarshallPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Floyd-Warshall Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V³) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: Finding all
      pairs shortest paths in weighted graphs
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Standard Floyd-Warshall
FLOYD-WARSHALL(G):
    # Initialize distance matrix
    dist = [[∞] * |V| for _ in range(|V|)]
    for i in range(|V|):
        dist[i][i] = 0
    for (u, v, w) in G.E:
        dist[u][v] = w
    
    # Main algorithm
    for k in range(|V|):
        for i in range(|V|):
            for j in range(|V|):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist

// Floyd-Warshall with Path Reconstruction
FLOYD-WARSHALL-PATH(G):
    # Initialize distance and next matrices
    dist = [[∞] * |V| for _ in range(|V|)]
    next = [[None] * |V| for _ in range(|V|)]
    
    for i in range(|V|):
        dist[i][i] = 0
    for (u, v, w) in G.E:
        dist[u][v] = w
        next[u][v] = v
    
    # Main algorithm
    for k in range(|V|):
        for i in range(|V|):
            for j in range(|V|):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
                    next[i][j] = next[i][k]
    
    return dist, next

// Path reconstruction
RECONSTRUCT-PATH(u, v, next):
    if next[u][v] is None:
        return []
    path = [u]
    while u != v:
        u = next[u][v]
        path.append(u)
    return path

// Floyd-Warshall with Negative Cycle Detection
FLOYD-WARSHALL-NEGATIVE(G):
    # Initialize distance matrix
    dist = [[∞] * |V| for _ in range(|V|)]
    for i in range(|V|):
        dist[i][i] = 0
    for (u, v, w) in G.E:
        dist[u][v] = w
    
    # Main algorithm
    for k in range(|V|):
        for i in range(|V|):
            for j in range(|V|):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    # Check for negative cycles
    for i in range(|V|):
        if dist[i][i] < 0:
            return "Graph contains negative cycle"
    
    return dist`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up
        distance matrix
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax:</span> Update
        distances through intermediate vertices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Detect
        negative cycles if needed
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Floyd-Warshall
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 --4-- 1 --1-- 2
|      /      |
|     /       |
2    3        1
|   /         |
|  /          |
3 --5-- 4 --2-- 5

Initial distance matrix:
[[0,4,∞,2,∞,∞],
 [4,0,1,3,∞,∞],
 [∞,1,0,∞,∞,1],
 [2,3,∞,0,5,∞],
 [∞,∞,∞,5,0,2],
 [∞,∞,1,∞,2,0]]

Final distance matrix:
[[0,4,5,2,7,6],
 [4,0,1,3,6,5],
 [5,1,0,4,3,1],
 [2,3,4,0,5,6],
 [7,6,3,5,0,2],
 [6,5,1,6,2,0]]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Path Reconstruction
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Next matrix:
[[0,1,1,3,1,1],
 [0,1,2,3,2,2],
 [1,1,2,1,5,5],
 [0,1,1,3,4,1],
 [3,3,5,3,4,5],
 [2,2,2,2,4,5]]

Shortest path from 0 to 5:
0 → 1 → 2 → 5`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Negative Cycle Detection
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph with negative cycle:
0 --4-- 1 --1-- 2
|      /      |
|     /       |
2    3       -4
|   /         |
|  /          |
3 --5-- 4 --2-- 5

After k=2:
[[0,4,5,2,7,6],
 [4,0,1,3,6,5],
 [5,1,0,4,3,-3],
 [2,3,4,0,5,6],
 [7,6,3,5,0,2],
 [6,5,1,6,2,0]]

Negative cycle detected at vertex 2`}
      </pre>
    </div>
  </div>
);
