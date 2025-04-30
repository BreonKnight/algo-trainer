import { ChevronRight } from "lucide-react";

export const KruskalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Kruskal's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Minimum
      spanning tree in weighted undirected graphs
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`KRUSKAL(G, w):
    // G is the graph, w is the weight function
    A = ∅
    for each vertex v ∈ G.V:
        MAKE-SET(v)
    sort the edges of G.E into nondecreasing order by weight w
    for each edge (u, v) ∈ G.E, taken in nondecreasing order by weight:
        if FIND-SET(u) ≠ FIND-SET(v):
            A = A ∪ {(u, v)}
            UNION(u, v)
    return A

MAKE-SET(x):
    x.p = x
    x.rank = 0

FIND-SET(x):
    if x ≠ x.p:
        x.p = FIND-SET(x.p)
    return x.p

UNION(x, y):
    x = FIND-SET(x)
    y = FIND-SET(y)
    if x.rank > y.rank:
        y.p = x
    else:
        x.p = y
        if x.rank == y.rank:
            y.rank = y.rank + 1`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        disjoint sets for each vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Sort edges by
        weight
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Union:</span> Add edge if it
        connects different sets
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Set of edges
        in the MST
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
     A
    / \
   2   4
  /     \
 B       C
  \     /
   3   1
    \ /
     D

Sorted edges:
1. (C, D): 1
2. (A, B): 2
3. (B, D): 3
4. (A, C): 4

Process:
1. Add (C, D)
2. Add (A, B)
3. Skip (B, D) - forms cycle
4. Add (A, C)

Minimum Spanning Tree:
(A, B)
(A, C)
(C, D)

Total weight: 7`}
      </pre>
    </div>
  </div>
);
