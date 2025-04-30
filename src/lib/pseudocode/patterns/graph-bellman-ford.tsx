import { ChevronRight } from "lucide-react";

export const BellmanFordPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bellman-Ford Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(VE) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Shortest path in
      graphs with negative weights, negative cycle detection
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`BELLMAN-FORD(G, w, s):
    // G is the graph, w is the weight function, s is the source
    INITIALIZE-SINGLE-SOURCE(G, s)
    for i = 1 to |G.V| - 1:
        for each edge (u, v) ∈ G.E:
            RELAX(u, v, w)
    for each edge (u, v) ∈ G.E:
        if v.d > u.d + w(u, v):
            return FALSE
    return TRUE

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
        <span className="font-semibold text-accent">Relax:</span> Relax all
        edges |V| - 1 times
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Verify no
        negative-weight cycles
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> TRUE if no
        negative cycles, FALSE otherwise
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
     A
    / \
   2  -4
  /     \
 B       C
  \     /
   3   1
    \ /
     D

Starting from A:
1. A: 0
2. B: 2 (A → B)
3. C: -4 (A → C)
4. D: -3 (A → C → D)

Shortest paths:
A → B: 2
A → C: -4
A → D: -3`}
      </pre>
    </div>
  </div>
);
