import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KruskalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Kruskal's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      minimum spanning tree in weighted graphs
    </div>

    <PseudocodeDisplay code={`// Kruskal's Algorithm
KRUSKAL(G):
    # Initialize
    A = []
    for v in V:
        MAKE-SET(v)
    
    # Sort edges by weight
    edges = sorted(G.E, key=lambda e: e.weight)
    
    # Process edges
    for (u, v) in edges:
        if FIND-SET(u) != FIND-SET(v):
            A.append((u, v))
            UNION(u, v)
    
    return A

// Union-Find Data Structure
MAKE-SET(x):
    parent[x] = x
    rank[x] = 0

FIND-SET(x):
    if parent[x] != x:
        parent[x] = FIND-SET(parent[x])
    return parent[x]

UNION(x, y):
    x_root = FIND-SET(x)
    y_root = FIND-SET(y)
    
    if x_root == y_root:
        return
    
    if rank[x_root] < rank[y_root]:
        parent[x_root] = y_root
    else:
        parent[y_root] = x_root
        if rank[x_root] == rank[y_root]:
            rank[x_root] += 1

// Kruskal's with Path Compression
KRUSKAL-PATH-COMPRESSION(G):
    # Initialize
    A = []
    parent = [i for i in range(|V|)]
    rank = [0] * |V|
    
    # Sort edges by weight
    edges = sorted(G.E, key=lambda e: e.weight)
    
    # Process edges
    for (u, v) in edges:
        u_root = FIND-SET-PC(u, parent)
        v_root = FIND-SET-PC(v, parent)
        if u_root != v_root:
            A.append((u, v))
            UNION-PC(u_root, v_root, parent, rank)
    
    return A

FIND-SET-PC(x, parent):
    if parent[x] != x:
        parent[x] = FIND-SET-PC(parent[x], parent)
    return parent[x]

UNION-PC(x, y, parent, rank):
    if rank[x] < rank[y]:
        parent[x] = y
    else:
        parent[y] = x
        if rank[x] == rank[y]:
            rank[x] += 1`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Sort edges by
        weight
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Union-Find:</span> Use
        disjoint set data structure
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Add:</span> Add edges that
        don't form cycles
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Kruskal's
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 --1-- 1 --2-- 2
|      /      |
|     /       |
3    4        5
|   /         |
|  /          |
3 --6-- 4 --7-- 5

Sorted edges:
(0,1,1), (1,2,2), (0,3,3), (1,3,4), (2,5,5), (3,4,6), (4,5,7)

MST edges:
(0,1), (1,2), (0,3), (2,5), (3,4)
Total weight: 16`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Union-Find Operations
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Processing edge (0,1):
Find-Set(0) = 0, Find-Set(1) = 1
Union(0,1): parent = [0,0,2,3,4,5]

Processing edge (1,2):
Find-Set(1) = 0, Find-Set(2) = 2
Union(0,2): parent = [0,0,0,3,4,5]

Processing edge (0,3):
Find-Set(0) = 0, Find-Set(3) = 3
Union(0,3): parent = [0,0,0,0,4,5]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Path Compression
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Before path compression:
parent = [0,0,0,0,4,5]
rank = [2,0,0,0,1,1]

After Find-Set(5):
parent = [0,0,0,0,4,4]
rank = [2,0,0,0,1,1]

After Find-Set(4):
parent = [0,0,0,0,0,0]
rank = [2,0,0,0,1,1]`}
      </pre>
    </div>
  </div>
);
