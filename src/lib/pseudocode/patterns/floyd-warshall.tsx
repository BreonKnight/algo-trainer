import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const FloydWarshallPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Floyd-Warshall Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(V³) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: All-pairs shortest paths
    </div>

    <PseudocodeDisplay
      code={`FLOYD-WARSHALL(G):
    // G is a weighted directed graph
    // Returns shortest paths between all pairs of vertices
    n ← number of vertices in G
    dist[1..n][1..n] ← ∞
    next[1..n][1..n] ← null
    
    // Initialize distances
    for each vertex v in G:
        dist[v][v] ← 0
    for each edge (u,v) in G:
        dist[u][v] ← weight(u,v)
        next[u][v] ← v
    
    // Main algorithm
    for k ← 1 to n:
        for i ← 1 to n:
            for j ← 1 to n:
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] ← dist[i][k] + dist[k][j]
                    next[i][j] ← next[i][k]
    
    return dist, next

// Example:
// Graph G:
// 1 → 2 (weight: 3)
// 2 → 3 (weight: 4)
// 3 → 1 (weight: 2)
// 1 → 3 (weight: 6)
//
// Initial dist matrix:
// 0 3 6
// ∞ 0 4
// 2 ∞ 0
//
// Final dist matrix:
// 0 3 6
// 6 0 4
// 2 5 0`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Finds shortest paths between all pairs of vertices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handles negative edge weights (but not negative cycles)</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Can detect negative cycles through diagonal elements</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(V³) - three nested loops over vertices</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(V²) - for distance and next matrices</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>More efficient than running Dijkstra's V times for dense graphs</span>
        </div>
      </div>
    </div>
  </div>
);
