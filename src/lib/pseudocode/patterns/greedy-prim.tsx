import { ChevronRight } from "lucide-react";

export const GreedyPrimPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prim's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O((V+E)logV) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      minimum spanning tree
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Standard Prim's Algorithm
def prim(graph, start):
    # Initialize MST and visited set
    mst = []
    visited = {start}
    
    # Priority queue for edges
    import heapq
    edges = [(weight, start, neighbor) 
             for neighbor, weight in graph[start].items()]
    heapq.heapify(edges)
    
    while edges and len(visited) < len(graph):
        # Get minimum weight edge
        weight, u, v = heapq.heappop(edges)
        
        if v not in visited:
            visited.add(v)
            mst.append((u, v, weight))
            
            # Add new edges to queue
            for neighbor, weight in graph[v].items():
                if neighbor not in visited:
                    heapq.heappush(edges, (weight, v, neighbor))
    
    return mst

// Prim's with Early Exit
def prim_with_max_weight(graph, start, max_weight):
    mst = []
    visited = {start}
    total_weight = 0
    
    edges = [(weight, start, neighbor) 
             for neighbor, weight in graph[start].items()]
    heapq.heapify(edges)
    
    while edges and len(visited) < len(graph):
        weight, u, v = heapq.heappop(edges)
        
        if v not in visited and total_weight + weight <= max_weight:
            visited.add(v)
            mst.append((u, v, weight))
            total_weight += weight
            
            for neighbor, weight in graph[v].items():
                if neighbor not in visited:
                    heapq.heappush(edges, (weight, v, neighbor))
        elif total_weight + weight > max_weight:
            break
    
    return mst, total_weight

// Prim's with Maximum Degree
def prim_with_max_degree(graph, start, max_degree):
    mst = []
    visited = {start}
    degree = {node: 0 for node in graph}
    degree[start] = 0
    
    edges = [(weight, start, neighbor) 
             for neighbor, weight in graph[start].items()]
    heapq.heapify(edges)
    
    while edges and len(visited) < len(graph):
        weight, u, v = heapq.heappop(edges)
        
        if v not in visited and degree[u] < max_degree and degree[v] < max_degree:
            visited.add(v)
            mst.append((u, v, weight))
            degree[u] += 1
            degree[v] += 1
            
            for neighbor, weight in graph[v].items():
                if neighbor not in visited:
                    heapq.heappush(edges, (weight, v, neighbor))
    
    return mst`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> MST,
        visited set, and priority queue
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Extract
        minimum weight edge
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Add edge to
        MST and update queue
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Prim's
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(2), D(6)
B -> A(2), C(3), D(8), E(5)
C -> B(3), E(7)
D -> A(6), B(8), E(9)
E -> B(5), C(7), D(9)

Start: A

MST:
A-B (2)
B-C (3)
B-E (5)
A-D (6)

Total Weight: 16`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Prim's with Max Weight
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(2), D(6)
B -> A(2), C(3), D(8), E(5)
C -> B(3), E(7)
D -> A(6), B(8), E(9)
E -> B(5), C(7), D(9)

Start: A
Max Weight: 10

MST:
A-B (2)
B-C (3)
B-E (5)

Total Weight: 10`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Prim's with Max Degree
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(2), D(6)
B -> A(2), C(3), D(8), E(5)
C -> B(3), E(7)
D -> A(6), B(8), E(9)
E -> B(5), C(7), D(9)

Start: A
Max Degree: 2

MST:
A-B (2)
B-C (3)
A-D (6)
C-E (7)

Total Weight: 18`}
      </pre>
    </div>
  </div>
);
