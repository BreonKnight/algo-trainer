import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const DijkstraPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dijkstra's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O((V + E) log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Single-source shortest
      paths in weighted graphs
    </div>

    <PseudocodeDisplay
      code={`// Standard Dijkstra
DIJKSTRA(G, w, s):
  INITIALIZE-SINGLE-SOURCE(G, s)
  S = ∅
  Q = G.V
  while Q ≠ ∅:
    u = EXTRACT-MIN(Q)
    S = S ∪ {u}
    for each v in G.adj[u]:
      RELAX(u, v, w)

INITIALIZE-SINGLE-SOURCE(G, s):
  for each vertex v in G.V:
    v.d = ∞
    v.π = NIL
  s.d = 0

RELAX(u, v, w):
  if v.d > u.d + w(u, v):
    v.d = u.d + w(u, v)
    v.π = u

// Priority Queue Implementation
DIJKSTRA-PQ(G, w, s):
  dist = [∞] * n
  prev = [NIL] * n
  dist[s] = 0
  Q = priority queue of (vertex, distance)
  while Q is not empty:
    u = EXTRACT-MIN(Q)
    for each v in G.adj[u]:
      if dist[v] > dist[u] + w(u, v):
        dist[v] = dist[u] + w(u, v)
        prev[v] = u
        DECREASE-KEY(Q, v, dist[v])
  return (dist, prev)

// Path Reconstruction
GET-PATH(prev, s, t):
  path = []
  u = t
  while u ≠ NIL:
    path.append(u)
    u = prev[u]
  return reverse(path)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all distances to infinity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax:</span> Update distances through current
        vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Extract:</span> Select vertex with minimum
        distance
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Dijkstra</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
    1
  2/ \\3
  /   \\
2     3
 \\   /
  4\\ /2
    4

Starting from 1:
Distances:
1: 0
2: 2
3: 3
4: 5`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Priority Queue Implementation</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
    1
  2/ \\3
  /   \\
2     3
 \\   /
  4\\ /2
    4

Priority Queue steps:
Q = [(1,0), (2,∞), (3,∞), (4,∞)]
Q = [(2,2), (3,3), (4,∞)]
Q = [(3,3), (4,6)]
Q = [(4,5)]
Q = []`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Path Reconstruction</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Shortest path from 1 to 4:
Path: [1, 2, 4]
Distance: 5`}
      </pre>
    </div>
  </div>
);
