import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const FordFulkersonPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Ford-Fulkerson Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(E|f*|) &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use: Maximum flow in networks
    </div>

    <PseudocodeDisplay
      code={`FORD-FULKERSON(G, s, t):
    // G is a flow network with source s and sink t
    // Returns maximum flow value
    for each edge (u,v) in G.E:
        f[u,v] ← 0
        f[v,u] ← 0
    
    while there exists path p from s to t in residual network Gf:
        cf(p) ← min{cf(u,v): (u,v) is in p}
        for each edge (u,v) in p:
            f[u,v] ← f[u,v] + cf(p)
            f[v,u] ← -f[u,v]
    
    return sum of f[s,v] for all v

// Example:
// Flow network G:
// s → 1 → t
//   ↘ 2 ↗
//
// Capacities:
// s→1: 10, s→2: 8
// 1→t: 4, 2→t: 9
//
// Initial flow: 0
// After first augmentation: 4
// After second augmentation: 8
// Final maximum flow: 12`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Finds maximum flow in a flow network</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses residual networks and augmenting paths</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Can be implemented with different path-finding methods</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(E|f*|) - where |f*| is the maximum flow value</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(V + E) - for residual network</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>With Edmonds-Karp: O(VE²) time complexity</span>
        </div>
      </div>
    </div>
  </div>
);
