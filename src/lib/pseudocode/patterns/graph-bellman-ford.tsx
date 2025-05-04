import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BellmanFordPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bellman-Ford Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(VE) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      single-source shortest paths with negative weights
    </div>

    <PseudocodeDisplay code={`// Standard Bellman-Ford
BELLMAN-FORD(G, s):
    # Initialize
    dist = [∞] * |V|
    parent = [None] * |V|
    dist[s] = 0

    # Relax edges |V|-1 times
    for i in range(|V|-1):
        for (u, v, w) in G.E:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                parent[v] = u

    # Check for negative cycles
    for (u, v, w) in G.E:
        if dist[u] + w < dist[v]:
            return "Graph contains negative cycle"

    return dist, parent

// Bellman-Ford with Path Reconstruction
BELLMAN-FORD-PATH(G, s):
    # Initialize
    dist = [∞] * |V|
    parent = [None] * |V|
    dist[s] = 0

    # Relax edges |V|-1 times
    for i in range(|V|-1):
        for (u, v, w) in G.E:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                parent[v] = u

    # Check for negative cycles
    for (u, v, w) in G.E:
        if dist[u] + w < dist[v]:
            return "Graph contains negative cycle"

    return dist, parent

// Path reconstruction
RECONSTRUCT-PATH(s, v, parent):
    if v == s:
        return [s]
    if parent[v] is None:
        return []
    path = RECONSTRUCT-PATH(s, parent[v], parent)
    path.append(v)
    return path

// Bellman-Ford with Early Termination
BELLMAN-FORD-EARLY(G, s):
    # Initialize
    dist = [∞] * |V|
    parent = [None] * |V|
    dist[s] = 0

    # Relax edges until no improvement
    for i in range(|V|-1):
        improved = False
        for (u, v, w) in G.E:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                parent[v] = u
                improved = True
        if not improved:
            break

    # Check for negative cycles
    for (u, v, w) in G.E:
        if dist[u] + w < dist[v]:
            return "Graph contains negative cycle"

    return dist, parent`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up
        distance and parent arrays
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax:</span> Update
        distances through edge relaxation
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Detect
        negative cycles
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Bellman-Ford
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 --4-- 1 --1-- 2
|      /      |
|     /       |
2    3       -4
|   /         |
|  /          |
3 --5-- 4 --2-- 5

Initial state:
dist = [0,∞,∞,∞,∞,∞]
parent = [None,None,None,None,None,None]

After first iteration:
dist = [0,4,∞,2,∞,∞]
parent = [None,0,None,0,None,None]

After second iteration:
dist = [0,4,5,2,7,6]
parent = [None,0,1,0,1,2]

Final distances from 0:
[0,4,5,2,7,6]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Path Reconstruction
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Parent array:
[None,0,1,0,1,2]

Shortest paths from 0:
0 → 1: [0,1]
0 → 2: [0,1,2]
0 → 3: [0,3]
0 → 4: [0,1,4]
0 → 5: [0,1,2,5]`}
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

After |V|-1 iterations:
dist = [0,4,5,2,7,6]

After checking for negative cycles:
Negative cycle detected: 2 → 5 → 4 → 2`}
      </pre>
    </div>
  </div>
);
