import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GraphPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Graph Algorithms</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Representing
      relationships between objects
    </div>

    <PseudocodeDisplay
      code={`// Graph representation
GRAPH-REPRESENTATION(V, E):
  G = new Graph
  for each v ∈ V:
    G.adj[v] = []
  for each (u, v) ∈ E:
    G.adj[u].append(v)
    G.adj[v].append(u)  // For undirected graphs
  return G

// Depth-first search
DFS(G):
  for each v ∈ G.V:
    v.color = WHITE
    v.parent = NIL
  time = 0
  for each v ∈ G.V:
    if v.color = WHITE:
      DFS-VISIT(G, v)

DFS-VISIT(G, u):
  time = time + 1
  u.d = time
  u.color = GRAY
  for each v in G.adj[u]:
    if v.color == WHITE:
      v.parent = u
      DFS-VISIT(G, v)
  u.color = BLACK
  time = time + 1
  u.f = time

// Breadth-first search
BFS(G, s):
  for each v ∈ G.V:
    v.color = WHITE
    v.d = ∞
    v.parent = NIL
  s.color = GRAY
  s.d = 0
  Q = ∅
  ENQUEUE(Q, s)
  while Q ≠ ∅:
    u = DEQUEUE(Q)
    for each v in G.adj[u]:
      if v.color == WHITE:
        v.color = GRAY
        v.d = u.d + 1
        v.parent = u
        ENQUEUE(Q, v)
    u.color = BLACK`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Represent:</span> Create
        graph structure
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">DFS:</span> Depth-first
        search
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">BFS:</span> Breadth-first
        search
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Graph Structure
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Vertices: [1, 2, 3, 4, 5]
Edges: [(1,2), (1,3), (2,4), (3,4), (4,5)]

Adjacency List:
1: [2, 3]
2: [1, 4]
3: [1, 4]
4: [2, 3, 5]
5: [4]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: DFS Traversal</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Starting from vertex 1:
Discovery order: 1, 2, 4, 3, 5
Finishing order: 5, 3, 4, 2, 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: BFS Traversal</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Starting from vertex 1:
Level 0: [1]
Level 1: [2, 3]
Level 2: [4]
Level 3: [5]`}
      </pre>
    </div>
  </div>
);
