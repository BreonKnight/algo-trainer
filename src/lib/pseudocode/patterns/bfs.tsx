import { ChevronRight } from "lucide-react";

export const BFSPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Breadth-First Search</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Shortest path
      in unweighted graphs
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`BFS(G, s):
    // G is the graph, s is the source vertex
    for each vertex u ∈ G.V - {s}:
        u.color = WHITE
        u.d = ∞
        u.π = NIL
    
    s.color = GRAY
    s.d = 0
    s.π = NIL
    
    Q = ∅
    ENQUEUE(Q, s)
    
    while Q ≠ ∅:
        u = DEQUEUE(Q)
        for each v ∈ G.Adj[u]:
            if v.color == WHITE:
                v.color = GRAY
                v.d = u.d + 1
                v.π = u
                ENQUEUE(Q, v)
        u.color = BLACK

PRINT-PATH(G, s, v):
    if v == s:
        print s
    else if v.π == NIL:
        print "no path from" s "to" v "exists"
    else:
        PRINT-PATH(G, s, v.π)
        print v`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        vertices to white, distance to infinity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Enqueue:</span> Add source
        vertex to queue
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Explore:</span> Process
        vertices level by level
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Mark:</span> Mark vertices
        as visited
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
    1
   / \
  2   3
 / \   \
4   5   6

BFS starting from vertex 1:

Level 0: [1]
Level 1: [2, 3]
Level 2: [4, 5, 6]

Shortest path from 1 to 6:
1 → 3 → 6`}
      </pre>
    </div>
  </div>
);
