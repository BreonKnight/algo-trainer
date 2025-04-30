import { ChevronRight } from "lucide-react";

export const StronglyConnectedComponentsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Strongly Connected Components
      </span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      strongly connected components in directed graphs
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`STRONGLY-CONNECTED-COMPONENTS(G):
    // G is a directed graph
    call DFS(G) to compute finishing times u.f for each vertex u
    compute Gᵀ
    call DFS(Gᵀ), but in the main loop of DFS, consider the vertices
        in order of decreasing u.f (as computed in line 1)
    output the vertices of each tree in the depth-first forest formed in line 3
        as a separate strongly connected component

DFS(G):
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
    u.f = time`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">First DFS:</span> Compute
        finishing times
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Transpose:</span> Compute
        the transpose of G
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Second DFS:</span> Process
        vertices in decreasing order of finishing times
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Output:</span> Each DFS tree
        is a strongly connected component
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
     A → B → C
     ↑   ↓   ↓
     D ← E ← F

First DFS (finishing times):
1. A: f=6
2. B: f=5
3. C: f=4
4. D: f=3
5. E: f=2
6. F: f=1

Transpose Graph:
     A ← B ← C
     ↓   ↑   ↑
     D → E → F

Second DFS (in order of decreasing f):
1. A → D
2. B → E
3. C → F

Strongly Connected Components:
{A, D}
{B, E}
{C, F}`}
      </pre>
    </div>
  </div>
);
