import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const HopcroftKarpPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Hopcroft-Karp Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(√V E) &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use: Maximum bipartite matching
    </div>

    <PseudocodeDisplay
      code={`HOPCROFT-KARP(G):
    // G is a bipartite graph with left set L and right set R
    // Returns maximum matching
    matching ← empty map  // stores current matching
    dist ← empty map      // stores distances for BFS
    
    function BFS():
        Q ← empty queue
        for each u in L:
            if u is unmatched:
                dist[u] ← 0
                Q.enqueue(u)
            else:
                dist[u] ← ∞
        dist[nil] ← ∞
        
        while Q is not empty:
            u ← Q.dequeue()
            if dist[u] < dist[nil]:
                for each v in G.adj[u]:
                    if dist[matching[v]] = ∞:
                        dist[matching[v]] ← dist[u] + 1
                        Q.enqueue(matching[v])
        return dist[nil] ≠ ∞
    
    function DFS(u):
        if u ≠ nil:
            for each v in G.adj[u]:
                if dist[matching[v]] = dist[u] + 1:
                    if DFS(matching[v]):
                        matching[v] ← u
                        matching[u] ← v
                        return true
            dist[u] ← ∞
            return false
        return true
    
    // Main algorithm
    while BFS():
        for each u in L:
            if u is unmatched:
                DFS(u)
    
    return matching

// Example:
// Bipartite graph G:
// L = {1, 2, 3}
// R = {4, 5, 6}
// Edges: (1,4), (1,5), (2,5), (2,6), (3,4), (3,6)
//
// Maximum matching:
// 1-4, 2-5, 3-6`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Finds maximum matching in bipartite graphs</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses layered graph approach with BFS and DFS</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>More efficient than Ford-Fulkerson for bipartite graphs</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(√V E) - faster than Ford-Fulkerson's O(VE)</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(V + E) - for graph representation and auxiliary data</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Optimal for dense bipartite graphs</span>
        </div>
      </div>
    </div>
  </div>
);
