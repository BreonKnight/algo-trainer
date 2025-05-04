import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const PrimPattern = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">
      <span className="text-accent font-bold">Prim's Algorithm</span>
    </h2>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      minimum spanning tree
    </div>

    <PseudocodeDisplay
      code={`// Standard Prim's Algorithm
def prim(graph):
    # Initialize MST and priority queue
    mst = []
    visited = set()
    heap = [(0, None, next(iter(graph)))]  # (weight, parent, vertex)
    
    while heap:
        weight, parent, u = heapq.heappop(heap)
        if u in visited:
            continue
        
        visited.add(u)
        if parent is not None:
            mst.append((parent, u, weight))
        
        # Add adjacent vertices to heap
        for v, w in graph[u].items():
            if v not in visited:
                heapq.heappush(heap, (w, u, v))
    
    return mst

// Prim's with Priority Queue
def prim_pq(graph):
    mst = []
    visited = set()
    heap = [(0, None, next(iter(graph)))]
    
    while heap:
        weight, parent, u = heapq.heappop(heap)
        if u in visited:
            continue
        
        visited.add(u)
        if parent is not None:
            mst.append((parent, u, weight))
        
        for v, w in graph[u].items():
            if v not in visited:
                heapq.heappush(heap, (w, u, v))
    
    return mst

// Prim's with Fibonacci Heap
def prim_fh(graph):
    mst = []
    visited = set()
    heap = FibonacciHeap()
    heap.insert(next(iter(graph)), 0)
    
    while not heap.is_empty():
        u = heap.extract_min()
        visited.add(u)
        
        for v, w in graph[u].items():
            if v not in visited:
                if v not in heap:
                    heap.insert(v, w)
                elif w < heap.get_key(v):
                    heap.decrease_key(v, w)
    
    return mst`}
    />

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
        <span className="font-semibold text-accent">Update:</span> Add adjacent
        vertices to queue
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

MST:
A-B (2)
B-C (3)
B-E (5)
A-D (6)

Total Weight: 16`}
      </pre>
    </div>
  </div>
);
