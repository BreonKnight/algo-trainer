import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const GreedyEdmondsKarpPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Edmonds-Karp Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(VE²) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding maximum flow in networks
    </div>

    <PseudocodeDisplay
      code={`// Standard Edmonds-Karp
def edmonds_karp(graph, source, sink):
    # Initialize residual graph and max flow
    residual = {u: {v: graph[u][v] for v in graph[u]}
                for u in graph}
    max_flow = 0

    def bfs():
        # Find shortest augmenting path using BFS
        parent = {source: None}
        queue = [source]

        while queue:
            u = queue.pop(0)
            for v in residual[u]:
                if v not in parent and residual[u][v] > 0:
                    parent[v] = u
                    if v == sink:
                        return parent
                    queue.append(v)
        return None

    # Find and process augmenting paths
    while True:
        parent = bfs()
        if not parent:
            break

        # Find minimum residual capacity
        path_flow = float('inf')
        v = sink
        while v != source:
            u = parent[v]
            path_flow = min(path_flow, residual[u][v])
            v = u

        # Update residual capacities
        v = sink
        while v != source:
            u = parent[v]
            residual[u][v] -= path_flow
            residual[v][u] += path_flow
            v = u

        max_flow += path_flow

    return max_flow

// Edmonds-Karp with Edge Capacities
def edmonds_karp_edge_capacities(graph, source, sink, min_capacity):
    residual = {u: {v: graph[u][v] for v in graph[u]}
                for u in graph}
    max_flow = 0

    def bfs():
        parent = {source: None}
        queue = [source]

        while queue:
            u = queue.pop(0)
            for v in residual[u]:
                if v not in parent and residual[u][v] >= min_capacity:
                    parent[v] = u
                    if v == sink:
                        return parent
                    queue.append(v)
        return None

    while True:
        parent = bfs()
        if not parent:
            break

        path_flow = float('inf')
        v = sink
        while v != source:
            u = parent[v]
            path_flow = min(path_flow, residual[u][v])
            v = u

        v = sink
        while v != source:
            u = parent[v]
            residual[u][v] -= path_flow
            residual[v][u] += path_flow
            v = u

        max_flow += path_flow

    return max_flow

// Edmonds-Karp with Vertex Capacities
def edmonds_karp_vertex_capacities(graph, source, sink, vertex_capacities):
    # Split each vertex into in and out nodes
    residual = {}
    for u in graph:
        residual[f"{u}_in"] = {f"{u}_out": vertex_capacities[u]}
        residual[f"{u}_out"] = {}

    # Add original edges
    for u in graph:
        for v in graph[u]:
            residual[f"{u}_out"][f"{v}_in"] = graph[u][v]

    # Add source and sink
    residual[source] = {f"{source}_in": float('inf')}
    residual[f"{sink}_out"] = {sink: float('inf')}

    max_flow = 0

    def bfs():
        parent = {source: None}
        queue = [source]

        while queue:
            u = queue.pop(0)
            for v in residual[u]:
                if v not in parent and residual[u][v] > 0:
                    parent[v] = u
                    if v == sink:
                        return parent
                    queue.append(v)
        return None

    while True:
        parent = bfs()
        if not parent:
            break

        path_flow = float('inf')
        v = sink
        while v != source:
            u = parent[v]
            path_flow = min(path_flow, residual[u][v])
            v = u

        v = sink
        while v != source:
            u = parent[v]
            residual[u][v] -= path_flow
            residual[v][u] += path_flow
            v = u

        max_flow += path_flow

    return max_flow`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Residual graph and max flow
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find:</span> Shortest augmenting path using BFS
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Residual capacities and max flow
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Edmonds-Karp</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
S -> A(10), B(5)
A -> C(5), D(10)
B -> C(15)
C -> T(10)
D -> T(15)

Source: S, Sink: T

Max Flow: 20`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Edge Capacities</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
S -> A(10), B(5)
A -> C(5), D(10)
B -> C(15)
C -> T(10)
D -> T(15)

Source: S, Sink: T
Min Capacity: 5

Max Flow: 15`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Vertex Capacities</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
S -> A(10), B(5)
A -> C(5), D(10)
B -> C(15)
C -> T(10)
D -> T(15)

Vertex Capacities:
A: 8, B: 6, C: 12, D: 10

Max Flow: 18`}
      </pre>
    </div>
  </div>
);
