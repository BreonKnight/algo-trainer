import { ChevronRight } from "lucide-react";

export const PrimPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prim's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Minimum
      spanning tree in weighted undirected graphs
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`PRIM(G, w, r):
    // G is the graph, w is the weight function, r is the root
    for each u ∈ G.V:
        u.key = ∞
        u.π = NIL
    r.key = 0
    Q = G.V
    while Q ≠ ∅:
        u = EXTRACT-MIN(Q)
        for each v ∈ G.Adj[u]:
            if v ∈ Q and w(u, v) < v.key:
                v.π = u
                v.key = w(u, v)

MST-PRINT(G, r):
    for each v ∈ G.V - {r}:
        print "(" v.π ", " v ")"`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        keys to infinity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract:</span> Select
        vertex with minimum key
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Update keys
        of adjacent vertices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        until queue is empty
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

Starting from A:
1. A: key = 0, π = NIL
2. B: key = 2, π = A
3. C: key = 4, π = A
4. D: key = 1, π = C

Minimum Spanning Tree:
(A, B)
(A, C)
(C, D)

Total weight: 7`}
      </pre>
    </div>
  </div>
);
