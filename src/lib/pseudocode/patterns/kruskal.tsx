import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KruskalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Kruskal's Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Minimum spanning tree in
      undirected graphs
    </div>

    <PseudocodeDisplay
      code={`KRUSKAL(G, w):
    A ← ∅
    for each vertex v ∈ G.V:
        MAKE-SET(v)
    sort G.E into nondecreasing order by weight w
    for each edge (u, v) ∈ G.E, taken in nondecreasing order by weight:
        if FIND-SET(u) ≠ FIND-SET(v):
            A ← A ∪ {(u, v)}
            UNION(u, v)
    return A

MAKE-SET(x):
    x.p ← x
    x.rank ← 0

UNION(x, y):
    LINK(FIND-SET(x), FIND-SET(y))

LINK(x, y):
    if x.rank > y.rank:
        y.p ← x
    else:
        x.p ← y
        if x.rank = y.rank:
            y.rank ← y.rank + 1

FIND-SET(x):
    if x ≠ x.p:
        x.p ← FIND-SET(x.p)
    return x.p

// Example:
// Input: G = (V, E) where
// V = {a, b, c, d, e, f}
// E = {(a,b,4), (a,c,3), (b,c,1), (b,d,2), (c,d,4), (d,e,2), (d,f,2), (e,f,3)}
//
// Sorted edges by weight:
// (b,c,1), (b,d,2), (d,e,2), (d,f,2), (a,c,3), (e,f,3), (a,b,4), (c,d,4)
//
// MST edges in order of selection:
// (b,c,1), (b,d,2), (d,e,2), (d,f,2), (a,c,3)
//
// Total weight: 10`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Greedy algorithm that always selects minimum weight edge</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses disjoint-set data structure for efficient operations</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Produces minimum spanning tree for connected graphs</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Sorting edges: O(E log E)</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Disjoint-set operations: O(E α(V))</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Total: O(E log E) = O(E log V) since E ≤ V²</span>
        </div>
      </div>
    </div>
  </div>
);
