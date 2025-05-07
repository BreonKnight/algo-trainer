import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const DijkstraPattern = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">
      <span className="text-accent font-bold">Dijkstra's Algorithm</span>
    </h2>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent"></span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O((V+E)logV) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding shortest paths from a
      source
    </div>

    <div className="text-sm text-secondary mb-4">
      A greedy algorithm that finds the shortest path from a source vertex to all other vertices in
      a weighted graph. At each step, it greedily selects the vertex with the minimum distance that
      hasn't been processed yet.
    </div>

    <PseudocodeDisplay
      code={`// Standard Dijkstra (Greedy Approach)
DIJKSTRA(G, w, s)
1  INITIALIZE-SINGLE-SOURCE(G, s)
2  S = ∅  // Set of processed vertices
3  Q = G.V  // Priority queue of vertices
4  while Q ≠ ∅
5      u = EXTRACT-MIN(Q)  // Greedy choice: vertex with minimum distance
6      S = S ∪ {u}
7      for each vertex v ∈ G.Adj[u]
8          RELAX(u, v, w)

INITIALIZE-SINGLE-SOURCE(G, s)
1  for each vertex v ∈ G.V
2      v.d = ∞
3      v.π = NIL
4  s.d = 0

RELAX(u, v, w)
1  if v.d > u.d + w(u, v)
2      v.d = u.d + w(u, v)
3      v.π = u

// Dijkstra with Path Reconstruction
DIJKSTRA-WITH-PATH(G, w, s, t)
1  INITIALIZE-SINGLE-SOURCE(G, s)
2  S = ∅
3  Q = G.V
4  while Q ≠ ∅
5      u = EXTRACT-MIN(Q)
6      if u == t
7          break
8      S = S ∪ {u}
9      for each vertex v ∈ G.Adj[u]
10         RELAX(u, v, w)
11  return CONSTRUCT-PATH(s, t)

CONSTRUCT-PATH(s, t)
1  path = []
2  u = t
3  while u ≠ NIL
4      path.append(u)
5      u = u.π
6  return REVERSE(path)

// Bidirectional Dijkstra (Optimization)
BIDIRECTIONAL-DIJKSTRA(G, w, s, t)
1  INITIALIZE-SINGLE-SOURCE(G, s)
2  INITIALIZE-SINGLE-SOURCE(G, t)
3  S_f = ∅  // Forward search set
4  S_b = ∅  // Backward search set
5  Q_f = G.V  // Forward priority queue
6  Q_b = G.V  // Backward priority queue
7  min_dist = ∞
8  meeting_node = NIL
9  while Q_f ≠ ∅ and Q_b ≠ ∅
10     u = EXTRACT-MIN(Q_f)
11     if u ∈ S_f
12         continue
13     S_f = S_f ∪ {u}
14     if u ∈ S_b
15         total_dist = u.d + u.d_b
16         if total_dist < min_dist
17             min_dist = total_dist
18             meeting_node = u
19     for each vertex v ∈ G.Adj[u]
20         if v ∉ S_f
21             RELAX(u, v, w)
22     u = EXTRACT-MIN(Q_b)
23     if u ∈ S_b
24         continue
25     S_b = S_b ∪ {u}
26     if u ∈ S_f
27         total_dist = u.d + u.d_b
28         if total_dist < min_dist
29             min_dist = total_dist
30             meeting_node = u
31     for each vertex v ∈ G.Adj[u]
32         if v ∉ S_b
33             RELAX(u, v, w)
34 return min_dist, meeting_node`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all distances to infinity
        except source (0)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Greedy Choice:</span> Select vertex with minimum
        distance
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax:</span> Update distances for unprocessed
        neighbors
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Until all vertices are processed
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Dijkstra</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(4), C(2)
B -> C(1), D(5)
C -> D(8), E(10)
D -> E(2)
E -> D(2)

Source: A

Step 1: distances = {A:0, B:∞, C:∞, D:∞, E:∞}
Step 2: Process A
   - Update B: 4
   - Update C: 2
Step 3: Process C (greedy choice)
   - Update D: 10
   - Update E: 12
Step 4: Process B
   - Update D: 9
Step 5: Process D
   - Update E: 11
Step 6: Process E
   No updates

Final distances: {A:0, B:4, C:2, D:9, E:11}`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Dijkstra with Path</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(4), C(2)
B -> C(1), D(5)
C -> D(8), E(10)
D -> E(2)
E -> D(2)

Source: A, Target: E

Shortest Path: A -> C -> D -> E
Distance: 12`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Bidirectional Dijkstra</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(4), C(2)
B -> C(1), D(5)
C -> D(8), E(10)
D -> E(2)
E -> D(2)

Source: A, Target: E

Meeting Node: D
Total Distance: 12`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Implementation (Python)</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`def dijkstra(graph, source):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[source] = 0
    pq = [(0, source)]
    
    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        
        if current_distance > distances[current_vertex]:
            continue
        
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`}
      </pre>
    </div>
  </div>
);
