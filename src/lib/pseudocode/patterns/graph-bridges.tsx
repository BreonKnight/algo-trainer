import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const BridgesPattern = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">
      <span className="text-accent font-bold">Bridges</span>
    </h2>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find critical edges in graph
    </div>

    <PseudocodeDisplay
      code={`FIND-BRIDGES(G)
    let n be the number of vertices in G
    let disc[1‥n] be a new array
    let low[1‥n] be a new array
    let parent[1‥n] be a new array
    let bridges be a new empty list
    let time ← 0

    for each vertex u in G.V
        do disc[u] ← -1
            low[u] ← -1
            parent[u] ← NIL

    for each vertex u in G.V
        do if disc[u] = -1
            then DFS-BRIDGES(G, u, disc, low, parent, bridges, time)

    return bridges

DFS-BRIDGES(G, u, disc, low, parent, bridges, time)
    time ← time + 1
    disc[u] ← time
    low[u] ← time

    for each v in G.Adj[u]
        do if disc[v] = -1
            then parent[v] ← u
                DFS-BRIDGES(G, v, disc, low, parent, bridges, time)
                low[u] ← min(low[u], low[v])
                if low[v] > disc[u]
                    then bridges.append((u,v))
            else if v ≠ parent[u]
                then low[u] ← min(low[u], disc[v])

// Example:
// Input: G with edges (1,2), (2,3), (3,4), (4,1), (1,3)
//
// DFS from vertex 1:
//   disc = [1, 2, 3, 4]
//   low = [1, 1, 1, 1]
//   parent = [NIL, 1, 2, 3]
//
// Bridge check:
//   Edge (2,3): low[3] = 1 > disc[2] = 2? No
//   Edge (3,4): low[4] = 1 > disc[3] = 3? No
//   Edge (4,1): low[1] = 1 > disc[4] = 4? No
//   Edge (1,3): low[3] = 1 > disc[1] = 1? No
//
// Output: [] (no bridges)`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set up discovery and low values</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>DFS: Track discovery time and low values</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Identify: Check conditions for bridge edges</span>
      </div>
    </div>
  </div>
);
