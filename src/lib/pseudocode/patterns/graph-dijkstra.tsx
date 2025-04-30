import { ChevronRight } from "lucide-react";

export const DijkstraPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dijkstra's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O((V + E) log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use:
      Shortest path in weighted graphs with non-negative edges
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`DIJKSTRA(G, w, s):
    // G is the graph, w is the weight function, s is the source
    INITIALIZE-SINGLE-SOURCE(G, s)
    S = ∅
    Q = G.V
    while Q ≠ ∅:
        u = EXTRACT-MIN(Q)
        S = S ∪ {u}
        for each vertex v ∈ G.Adj[u]:
            RELAX(u, v, w)

INITIALIZE-SINGLE-SOURCE(G, s):
    for each vertex v ∈ G.V:
        v.d = ∞
        v.π = NIL
    s.d = 0

RELAX(u, v, w):
    if v.d > u.d + w(u, v):
        v.d = u.d + w(u, v)
        v.π = u`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        distances to infinity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract:</span> Select
        vertex with minimum distance
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax:</span> Update
        distances to neighbors
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        until all vertices processed
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
1. A: 0
2. B: 2 (A → B)
3. C: 4 (A → C)
4. D: 5 (A → B → D)

Shortest paths:
A → B: 2
A → C: 4
A → D: 5`}
      </pre>
    </div>
  </div>
);
