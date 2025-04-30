import { ChevronRight } from "lucide-react";

export const DFSPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Depth-First Search</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Topological
      sort, cycle detection, strongly connected components
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`DFS(G):
    for each vertex u ∈ G.V:
        u.color = WHITE
        u.π = NIL
    time = 0
    for each vertex u ∈ G.V:
        if u.color == WHITE:
            DFS-VISIT(G, u)

DFS-VISIT(G, u):
    time = time + 1
    u.d = time
    u.color = GRAY
    for each v ∈ G.Adj[u]:
        if v.color == WHITE:
            v.π = u
            DFS-VISIT(G, v)
    u.color = BLACK
    time = time + 1
    u.f = time

TOPOLOGICAL-SORT(G):
    call DFS(G) to compute finishing times v.f for each vertex v
    as each vertex is finished, insert it onto the front of a linked list
    return the linked list of vertices`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        vertices to white
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Visit:</span> Recursively
        explore each unvisited vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Time:</span> Track discovery
        and finishing times
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

DFS starting from vertex 1:

Discovery order: 1 → 2 → 4 → 5 → 3 → 6
Finishing order: 4 → 5 → 2 → 6 → 3 → 1

Tree edges: 1-2, 2-4, 2-5, 1-3, 3-6`}
      </pre>
    </div>
  </div>
);
