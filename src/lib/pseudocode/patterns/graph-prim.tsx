import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const PrimPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prim's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding minimum spanning tree in
      weighted graphs
    </div>

    <PseudocodeDisplay
      code={`// Standard Prim's Algorithm
PRIM(G):
    # Initialize
    key = [∞] * |V|
    parent = [None] * |V|
    in_mst = [False] * |V|

    # Start with vertex 0
    key[0] = 0

    for _ in range(|V|):
        # Find minimum key vertex
        u = min((v for v in range(|V|) if not in_mst[v]), key=lambda v: key[v])
        in_mst[u] = True

        # Update keys of adjacent vertices
        for v in G.adj[u]:
            if not in_mst[v] and G.weight(u, v) < key[v]:
                key[v] = G.weight(u, v)
                parent[v] = u

    return parent

// Prim's with Priority Queue
PRIM-PQ(G):
    # Initialize
    key = [∞] * |V|
    parent = [None] * |V|
    in_mst = [False] * |V|
    pq = PriorityQueue()

    # Start with vertex 0
    key[0] = 0
    pq.put((0, 0))

    while not pq.empty():
        _, u = pq.get()
        if in_mst[u]:
            continue

        in_mst[u] = True
        for v in G.adj[u]:
            weight = G.weight(u, v)
            if not in_mst[v] and weight < key[v]:
                key[v] = weight
                parent[v] = u
                pq.put((weight, v))

    return parent

// Prim's with Fibonacci Heap
PRIM-FH(G):
    # Initialize
    key = [∞] * |V|
    parent = [None] * |V|
    in_mst = [False] * |V|
    fh = FibonacciHeap()

    # Start with vertex 0
    key[0] = 0
    nodes = [fh.insert(key[v], v) for v in range(|V|)]

    while not fh.empty():
        u = fh.extract_min().value
        in_mst[u] = True

        for v in G.adj[u]:
            weight = G.weight(u, v)
            if not in_mst[v] and weight < key[v]:
                key[v] = weight
                parent[v] = u
                fh.decrease_key(nodes[v], weight)

    return parent`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up key and parent arrays
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Select:</span> Choose minimum key vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Update keys of adjacent vertices
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Prim's</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 --1-- 1 --2-- 2
|      /      |
|     /       |
3    4        5
|   /         |
|  /          |
3 --6-- 4 --7-- 5

Initial state:
key = [0,∞,∞,∞,∞,∞]
parent = [None,None,None,None,None,None]

After processing vertex 0:
key = [0,1,∞,3,∞,∞]
parent = [None,0,None,0,None,None]

After processing vertex 1:
key = [0,1,2,3,4,∞]
parent = [None,0,1,0,1,None]

Final MST edges:
(0,1), (1,2), (0,3), (2,5), (3,4)
Total weight: 16`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Priority Queue</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Priority Queue operations:
Insert: (0,0)
Extract: (0,0)
Insert: (1,1), (3,3)
Extract: (1,1)
Insert: (2,2), (4,4)
Extract: (2,2)
Insert: (5,5)
Extract: (3,3)
Insert: (6,4)
Extract: (4,4)
Extract: (5,5)

Final MST edges:
(0,1), (1,2), (0,3), (2,5), (3,4)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Fibonacci Heap</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Fibonacci Heap operations:
Insert: 0(0), 1(∞), 2(∞), 3(∞), 4(∞), 5(∞)
Extract: 0
Decrease: 1(1), 3(3)
Extract: 1
Decrease: 2(2), 4(4)
Extract: 2
Decrease: 5(5)
Extract: 3
Decrease: 4(6)
Extract: 4
Extract: 5

Final MST edges:
(0,1), (1,2), (0,3), (2,5), (3,4)`}
      </pre>
    </div>
  </div>
);
