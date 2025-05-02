import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyFordFulkersonPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Ford-Fulkerson Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E * max_flow) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      maximum flow in networks
    </div>

    <PseudocodeDisplay code={`// Standard Ford-Fulkerson
def ford_fulkerson(graph, source, sink):
    # Initialize residual graph and max flow
    residual = {u: {v: graph[u][v] for v in graph[u]} 
                for u in graph}
    max_flow = 0
    
    def bfs():
        # Find augmenting path using BFS
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

// Ford-Fulkerson with Capacity Scaling
def ford_fulkerson_capacity_scaling(graph, source, sink):
    residual = {u: {v: graph[u][v] for v in graph[u]} 
                for u in graph}
    max_flow = 0
    
    # Find maximum capacity
    max_capacity = max(graph[u][v] 
                      for u in graph 
                      for v in graph[u])
    
    # Start with largest power of 2
    delta = 1
    while delta * 2 <= max_capacity:
        delta *= 2
    
    def bfs(delta):
        parent = {source: None}
        queue = [source]
        
        while queue:
            u = queue.pop(0)
            for v in residual[u]:
                if v not in parent and residual[u][v] >= delta:
                    parent[v] = u
                    if v == sink:
                        return parent
                    queue.append(v)
        return None
    
    while delta >= 1:
        while True:
            parent = bfs(delta)
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
        
        delta //= 2
    
    return max_flow

// Ford-Fulkerson with Multiple Sources/Sinks
def ford_fulkerson_multiple(graph, sources, sinks):
    # Add super source and super sink
    super_source = 'S'
    super_sink = 'T'
    
    # Initialize residual graph
    residual = {u: {v: graph[u][v] for v in graph[u]} 
                for u in graph}
    residual[super_source] = {s: float('inf') for s in sources}
    residual[super_sink] = {}
    
    for u in graph:
        if u not in residual:
            residual[u] = {}
        if u in sinks:
            residual[u][super_sink] = float('inf')
    
    max_flow = 0
    
    def bfs():
        parent = {super_source: None}
        queue = [super_source]
        
        while queue:
            u = queue.pop(0)
            for v in residual[u]:
                if v not in parent and residual[u][v] > 0:
                    parent[v] = u
                    if v == super_sink:
                        return parent
                    queue.append(v)
        return None
    
    while True:
        parent = bfs()
        if not parent:
            break
        
        path_flow = float('inf')
        v = super_sink
        while v != super_source:
            u = parent[v]
            path_flow = min(path_flow, residual[u][v])
            v = u
        
        v = super_sink
        while v != super_source:
            u = parent[v]
            residual[u][v] -= path_flow
            residual[v][u] += path_flow
            v = u
        
        max_flow += path_flow
    
    return max_flow`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Residual
        graph and max flow
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find:</span> Augmenting path
        using BFS
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Residual
        capacities and max flow
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Ford-Fulkerson
      </span>
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
      <span className="font-semibold text-accent">
        Example: Capacity Scaling
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
S -> A(10), B(5)
A -> C(5), D(10)
B -> C(15)
C -> T(10)
D -> T(15)

Source: S, Sink: T
Delta Values: 16, 8, 4, 2, 1

Max Flow: 20`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Multiple Sources/Sinks
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
S1 -> A(10), B(5)
S2 -> C(15)
A -> D(10)
B -> D(5)
C -> T1(10), T2(5)
D -> T1(5), T2(10)

Sources: [S1, S2]
Sinks: [T1, T2]

Max Flow: 25`}
      </pre>
    </div>
  </div>
);
