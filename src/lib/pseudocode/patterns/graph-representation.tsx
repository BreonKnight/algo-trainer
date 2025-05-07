import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const GraphRepresentationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Graph Representation
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(V+E) &nbsp;|&nbsp; Space: O(V+E) &nbsp;|&nbsp; Use: Efficient graph storage and
      traversal
    </div>

    <PseudocodeDisplay
      code={`// Adjacency List Representation
ADJ-LIST-REP(G):
    n ← |G.V|
    Adj[1..n] ← empty lists
    for each edge (u, v) ∈ G.E:
        APPEND(Adj[u], v)
        if G is undirected:
            APPEND(Adj[v], u)
    return Adj

// Adjacency Matrix Representation
ADJ-MATRIX-REP(G):
    n ← |G.V|
    M[1..n, 1..n] ← 0
    for each edge (u, v) ∈ G.E:
        M[u, v] ← 1
        if G is undirected:
            M[v, u] ← 1
    return M

// Edge List Representation
EDGE-LIST-REP(G):
    E ← empty list
    for each edge (u, v) ∈ G.E:
        APPEND(E, (u, v))
    return E

// Example:
// Input: G = (V, E) where
// V = {1, 2, 3, 4}
// E = {(1,2), (2,3), (3,4), (4,1)}
//
// Adjacency List:
// 1: [2, 4]
// 2: [1, 3]
// 3: [2, 4]
// 4: [3, 1]
//
// Adjacency Matrix:
//   1 2 3 4
// 1 0 1 0 1
// 2 1 0 1 0
// 3 0 1 0 1
// 4 1 0 1 0
//
// Edge List:
// [(1,2), (2,3), (3,4), (4,1)]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Adjacency List: O(V+E) space, efficient for sparse graphs</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Adjacency Matrix: O(V²) space, efficient for dense graphs</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Edge List: O(E) space, useful for algorithms that process edges</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Operations Complexity:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Check edge existence: O(1) matrix, O(deg(v)) list</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>List all edges: O(E) list, O(V²) matrix</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>List neighbors: O(deg(v)) list, O(V) matrix</span>
        </div>
      </div>
    </div>
  </div>
);
