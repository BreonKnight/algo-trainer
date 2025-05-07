import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const MaximumBipartiteMatchingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Maximum Bipartite Matching</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(VE) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find maximum matching in bipartite
      graph
    </div>

    <PseudocodeDisplay
      code={`// Maximum bipartite matching using Ford-Fulkerson
MAX-BIPARTITE-MATCHING(G):
    // G is a bipartite graph with partitions L and R
    // Add source s and sink t
    s ← new vertex
    t ← new vertex
    for each u ∈ L:
        add edge (s, u)
    for each v ∈ R:
        add edge (v, t)
    // Find maximum flow
    return FORD-FULKERSON(G, s, t)

// Ford-Fulkerson algorithm
FORD-FULKERSON(G, s, t):
    for each edge (u, v) ∈ G.E:
        f[u, v] ← 0
        f[v, u] ← 0
    while there exists a path p from s to t in residual network Gf:
        cf(p) ← min{cf(u, v) : (u, v) is in p}
        for each edge (u, v) in p:
            f[u, v] ← f[u, v] + cf(p)
            f[v, u] ← -f[u, v]
    return f

// Example:
// Input: G = (L ∪ R, E), where
// L = {1, 2, 3}, R = {4, 5, 6}
// E = {(1,4), (1,5), (2,5), (3,4), (3,6)}
//
// Execution:
// 1. Add source s and sink t
// 2. Add edges: (s,1), (s,2), (s,3), (4,t), (5,t), (6,t)
// 3. Find augmenting paths:
//    - s→1→4→t
//    - s→2→5→t
//    - s→3→6→t
//
// Output: Matching = {(1,4), (2,5), (3,6)}`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transform: Convert to flow network</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Maximum flow using Ford-Fulkerson</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Extract: Matching from flow solution</span>
      </div>
    </div>
  </div>
);
