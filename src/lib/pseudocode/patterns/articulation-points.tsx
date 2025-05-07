import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const ArticulationPointsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Articulation Points
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find vertices whose removal
      increases connected components
    </div>

    <PseudocodeDisplay
      code={`# Articulation Points: Find vertices whose removal increases connected components
# Input: Undirected graph G = (V, E)
# Output: Set of articulation points

Algorithm ARTICULATION-POINTS(G)
    time ← 0
    for each vertex v in V do
        visited[v] ← false
        disc[v] ← ∞
        low[v] ← ∞
        parent[v] ← NIL
    end for

    for each vertex v in V do
        if not visited[v] then
            DFS-AP(v)
        end if
    end for

    return articulation_points

Algorithm DFS-AP(u)
    visited[u] ← true
    disc[u] ← low[u] ← time + 1
    time ← time + 1
    children ← 0

    for each vertex v in Adj[u] do
        if not visited[v] then
            children ← children + 1
            parent[v] ← u
            DFS-AP(v)

            # Check if subtree rooted with v has connection to ancestors of u
            low[u] ← min(low[u], low[v])

            # u is articulation point if:
            # 1. u is root and has two or more children
            # 2. u is not root and low[v] ≥ disc[u]
            if parent[u] = NIL and children > 1 then
                articulation_points ← articulation_points ∪ {u}
            else if parent[u] ≠ NIL and low[v] ≥ disc[u] then
                articulation_points ← articulation_points ∪ {u}
            end if
        else if v ≠ parent[u] then
            low[u] ← min(low[u], disc[v])
        end if
    end for

# Example:
# Input: G with V = {0,1,2,3,4} and edges:
# (0,1), (1,2), (2,0), (1,3), (1,4), (3,4)
#
# Step 1: Start DFS from 0
# Step 2: Visit 0, 1, 2
# Step 3: Backtrack to 1, visit 3, 4
# Step 4: Check articulation points
#         - 1 is root with 2 children
#         - No other vertices satisfy conditions
#
# Output: {1}`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize visited, discovery, and low values</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Perform DFS from each unvisited vertex</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update low values and check articulation conditions</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return set of articulation points</span>
      </div>
    </div>
  </div>
);
