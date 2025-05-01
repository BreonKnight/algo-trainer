import { ChevronRight } from "lucide-react";

export const DFSPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Depth-First Search</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Topological
      sort, cycle detection, and strongly connected components
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Standard DFS
DFS(G):
    for each vertex u in G.V:
        u.color = WHITE
        u.π = NIL
    time = 0
    for each vertex u in G.V:
        if u.color == WHITE:
            DFS-VISIT(G, u)

DFS-VISIT(G, u):
    time = time + 1
    u.d = time
    u.color = GRAY
    for each v in G.adj[u]:
        if v.color == WHITE:
            v.π = u
            DFS-VISIT(G, v)
    u.color = BLACK
    time = time + 1
    u.f = time

// Topological Sort
TOPOLOGICAL-SORT(G):
    DFS(G)
    sort vertices by decreasing finish time
    return sorted vertices

// Cycle Detection
HAS-CYCLE(G):
    for each vertex u in G.V:
        u.color = WHITE
    for each vertex u in G.V:
        if u.color == WHITE:
            if DFS-CYCLE(G, u):
                return true
    return false

DFS-CYCLE(G, u):
    u.color = GRAY
    for each v in G.adj[u]:
        if v.color == WHITE:
            if DFS-CYCLE(G, v):
                return true
        elif v.color == GRAY:
            return true
    u.color = BLACK
    return false

// Strongly Connected Components
SCC(G):
    DFS(G)
    compute G^T
    DFS(G^T) in order of decreasing finish time
    return trees in depth-first forest`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        vertices to unvisited
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Explore:</span> Visit
        vertices depth-first
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Mark:</span> Track discovery
        and finish times
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard DFS</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
    1
   / \\
  2   3
 / \\   \\
4   5   6

DFS starting from 1:
Discovery order: 1, 2, 4, 5, 3, 6
Finish order: 4, 5, 2, 6, 3, 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Topological Sort
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
1 → 2 → 3
↓   ↓   ↓
4 → 5 → 6

Topological order:
[1, 4, 2, 5, 3, 6]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Strongly Connected Components
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
1 → 2 → 3
↑   ↓   ↓
4 ← 5 ← 6

SCCs:
Component 1: [1, 4]
Component 2: [2, 5, 6]
Component 3: [3]`}
      </pre>
    </div>
  </div>
);
