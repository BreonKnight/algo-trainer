import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const BellmanFordPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Bellman Ford
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(VE) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find shortest paths with negative
      weights
    </div>

    <PseudocodeDisplay
      code={`# Bellman-Ford: Find shortest paths with negative weights
# Input: Weighted directed graph G = (V, E) with weight function w, source vertex s
# Output: Shortest paths from s to all vertices, or indication of negative cycle

Algorithm BELLMAN-FORD(G, w, s)
    # Initialize distances
    for each vertex v in V do
        d[v] ← ∞
        π[v] ← NIL
    end for
    d[s] ← 0

    # Relax edges |V| - 1 times
    for i ← 1 to |V| - 1 do
        for each edge (u, v) in E do
            if d[v] > d[u] + w(u, v) then
                d[v] ← d[u] + w(u, v)
                π[v] ← u
            end if
        end for
    end for

    # Check for negative cycles
    for each edge (u, v) in E do
        if d[v] > d[u] + w(u, v) then
            return "Graph contains negative cycle"
        end if
    end for

    return d, π

# Example:
# Input: G with V = {s,a,b,c} and edges:
# (s,a,4), (s,b,5), (a,b,-1), (a,c,2), (b,c,1)
#
# Step 1: Initial distances
#         d = [0, ∞, ∞, ∞]
# Step 2: After first relaxation
#         d = [0, 4, 5, ∞]
# Step 3: After second relaxation
#         d = [0, 4, 3, 4]
# Step 4: After third relaxation
#         d = [0, 4, 3, 4]
# Step 5: No negative cycle found
#
# Output: d = [0, 4, 3, 4]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize distances and predecessors</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Relax edges |V| - 1 times</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check for negative cycles</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return distances and predecessors</span>
      </div>
    </div>
  </div>
);
