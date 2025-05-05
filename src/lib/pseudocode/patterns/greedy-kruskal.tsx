import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KruskalPattern = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">
      <span className="text-accent font-bold">Kruskal's Algorithm</span>
    </h2>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding minimum spanning tree
    </div>

    <PseudocodeDisplay
      code={`// Standard Kruskal's Algorithm
def kruskal(graph):
    # Initialize MST and parent array
    mst = []
    parent = {node: node for node in graph}
    rank = {node: 0 for node in graph}

    # Sort edges by weight
    edges = [(weight, u, v)
             for u in graph
             for v, weight in graph[u].items()]
    edges.sort()

    def find(u):
        if parent[u] != u:
            parent[u] = find(parent[u])
        return parent[u]

    def union(u, v):
        u_root = find(u)
        v_root = find(v)
        if u_root == v_root:
            return False
        if rank[u_root] > rank[v_root]:
            parent[v_root] = u_root
        else:
            parent[u_root] = v_root
            if rank[u_root] == rank[v_root]:
                rank[v_root] += 1
        return True

    # Process edges
    for weight, u, v in edges:
        if union(u, v):
            mst.append((u, v, weight))

    return mst

// Kruskal's with Maximum Degree
def kruskal_with_max_degree(graph, max_degree):
    mst = []
    parent = {node: node for node in graph}
    rank = {node: 0 for node in graph}
    degree = {node: 0 for node in graph}

    edges = [(weight, u, v)
             for u in graph
             for v, weight in graph[u].items()]
    edges.sort()

    def find(u):
        if parent[u] != u:
            parent[u] = find(parent[u])
        return parent[u]

    def union(u, v):
        if degree[u] >= max_degree or degree[v] >= max_degree:
            return False
        u_root = find(u)
        v_root = find(v)
        if u_root == v_root:
            return False
        if rank[u_root] > rank[v_root]:
            parent[v_root] = u_root
        else:
            parent[u_root] = v_root
            if rank[u_root] == rank[v_root]:
                rank[v_root] += 1
        degree[u] += 1
        degree[v] += 1
        return True

    for weight, u, v in edges:
        if union(u, v):
            mst.append((u, v, weight))

    return mst

// Kruskal's with Edge Limit
def kruskal_with_edge_limit(graph, max_edges):
    mst = []
    parent = {node: node for node in graph}
    rank = {node: 0 for node in graph}

    edges = [(weight, u, v)
             for u in graph
             for v, weight in graph[u].items()]
    edges.sort()

    def find(u):
        if parent[u] != u:
            parent[u] = find(parent[u])
        return parent[u]

    def union(u, v):
        u_root = find(u)
        v_root = find(v)
        if u_root == v_root:
            return False
        if rank[u_root] > rank[v_root]:
            parent[v_root] = u_root
        else:
            parent[u_root] = v_root
            if rank[u_root] == rank[v_root]:
                rank[v_root] += 1
        return True

    for weight, u, v in edges:
        if len(mst) >= max_edges:
            break
        if union(u, v):
            mst.append((u, v, weight))

    return mst`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> MST, parent array, and rank
        array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Edges by weight
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Add edges if they don't form
        cycles
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Kruskal's</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(2), D(6)
B -> A(2), C(3), D(8), E(5)
C -> B(3), E(7)
D -> A(6), B(8), E(9)
E -> B(5), C(7), D(9)

Sorted Edges:
A-B (2)
B-C (3)
B-E (5)
A-D (6)
C-E (7)
B-D (8)
D-E (9)

MST:
A-B (2)
B-C (3)
B-E (5)
A-D (6)

Total Weight: 16`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Kruskal's with Max Degree</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(2), D(6)
B -> A(2), C(3), D(8), E(5)
C -> B(3), E(7)
D -> A(6), B(8), E(9)
E -> B(5), C(7), D(9)

Max Degree: 2

MST:
A-B (2)
B-C (3)
A-D (6)
C-E (7)

Total Weight: 18`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Kruskal's with Edge Limit</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(2), D(6)
B -> A(2), C(3), D(8), E(5)
C -> B(3), E(7)
D -> A(6), B(8), E(9)
E -> B(5), C(7), D(9)

Max Edges: 3

MST:
A-B (2)
B-C (3)
B-E (5)

Total Weight: 10`}
      </pre>
    </div>
  </div>
);
