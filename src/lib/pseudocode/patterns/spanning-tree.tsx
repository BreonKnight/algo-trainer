import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const SpanningTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Spanning Tree
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log V) &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use: Finding minimum spanning
      trees
    </div>

    <PseudocodeDisplay
      code={`// Kruskal's Algorithm
KRUSKAL(G):
  A = ∅
  for each vertex v in G.V:
    MAKE-SET(v)
  sort G.E by weight
  for each edge (u,v) in G.E (in sorted order):
    if FIND-SET(u) ≠ FIND-SET(v):
      A = A ∪ {(u,v)}
      UNION(u,v)
  return A

// Prim's Algorithm
PRIM(G, w, r):
  for each u in G.V:
    key[u] = ∞
    π[u] = NIL
  key[r] = 0
  Q = G.V
  while Q ≠ ∅:
    u = EXTRACT-MIN(Q)
    for each v in G.Adj[u]:
      if v ∈ Q and w(u,v) < key[v]:
        π[v] = u
        key[v] = w(u,v)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Kruskal's:</span> Sort edges, add if no cycle
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Prim's:</span> Grow tree from single vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Both:</span> Guarantee minimum weight spanning
        tree
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Graph</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`    A
   /|\\
  2 | 3
 /  |  \\
B   |   C
 \\  |  /
  4 | 5
   \\|/
    D

Kruskal's Steps:
1. Sort edges: (A,B,2), (A,C,3), (B,D,4), (C,D,5)
2. Add (A,B): A-B
3. Add (A,C): A-B-C
4. Add (B,D): A-B-C-D

Prim's Steps:
1. Start at A
2. Add (A,B): A-B
3. Add (A,C): A-B-C
4. Add (B,D): A-B-C-D`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Both algorithms find minimum spanning tree</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Kruskal's better for sparse graphs</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Prim's better for dense graphs</span>
        </div>
      </div>
    </div>
  </div>
);
