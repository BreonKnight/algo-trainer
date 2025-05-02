import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GraphImplementationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Graph Implementation</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V+E) &nbsp;|&nbsp; Space: O(V+E) &nbsp;|&nbsp; Use: Graph
      representation and traversal
    </div>

    <PseudocodeDisplay code={`// Adjacency list representation
GRAPH-ADJ-LIST(V, E):
    n ← length[V]
    Adj[1..n] ← empty lists
    for each edge (u, v) ∈ E:
        APPEND(Adj[u], v)
        if graph is undirected:
            APPEND(Adj[v], u)
    return Adj

// Adjacency matrix representation
GRAPH-ADJ-MATRIX(V, E):
    n ← length[V]
    M[1..n, 1..n] ← 0
    for each edge (u, v) ∈ E:
        M[u, v] ← 1
        if graph is undirected:
            M[v, u] ← 1
    return M

// Depth-first search
DFS(G):
    for each vertex u ∈ G.V:
        color[u] ← WHITE
        π[u] ← NIL
    time ← 0
    for each vertex u ∈ G.V:
        if color[u] = WHITE:
            DFS-VISIT(G, u)

DFS-VISIT(G, u):
    time ← time + 1
    d[u] ← time
    color[u] ← GRAY
    for each v ∈ G.Adj[u]:
        if color[v] = WHITE:
            π[v] ← u
            DFS-VISIT(G, v)
    color[u] ← BLACK
    time ← time + 1
    f[u] ← time

// Breadth-first search
BFS(G, s):
    for each vertex u ∈ G.V - {s}:
        color[u] ← WHITE
        d[u] ← ∞
        π[u] ← NIL
    color[s] ← GRAY
    d[s] ← 0
    π[s] ← NIL
    Q ← empty queue
    ENQUEUE(Q, s)
    while Q not empty:
        u ← DEQUEUE(Q)
        for each v ∈ G.Adj[u]:
            if color[v] = WHITE:
                color[v] ← GRAY
                d[v] ← d[u] + 1
                π[v] ← u
                ENQUEUE(Q, v)
        color[u] ← BLACK

// Example:
// Input: V = {1, 2, 3, 4}, E = {(1,2), (2,3), (3,4), (4,1)}
// 
// Adjacency List:
//   1: [2, 4]
//   2: [1, 3]
//   3: [2, 4]
//   4: [3, 1]
// 
// Adjacency Matrix:
//   1 2 3 4
// 1 0 1 0 1
// 2 1 0 1 0
// 3 0 1 0 1
// 4 1 0 1 0`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Representation: Choose between adjacency list or matrix</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traversal: Implement DFS and BFS algorithms</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Properties: Track discovery/finish times and predecessors</span>
      </div>
    </div>
  </div>
);
