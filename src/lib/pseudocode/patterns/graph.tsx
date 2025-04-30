import { ChevronRight } from "lucide-react";

export const GraphPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Graph Algorithms</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Representing
      relationships between objects
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Create a graph with vertices and edges
GRAPH-REPRESENTATION(vertices, edges):
    # Initialize empty adjacency list
    graph = new dictionary
    
    # Add vertices to graph
    for each vertex in vertices:
        graph[vertex] = new list
    
    # Add edges to graph
    for each edge (u, v) in edges:
        # Add v to u's neighbors
        graph[u].append(v)
        # For undirected graphs, add u to v's neighbors
        graph[v].append(u)
    
    return graph

// Traverse the graph from a starting vertex
GRAPH-TRAVERSAL(graph, start_vertex):
    # Initialize visited set and queue
    visited = new set
    queue = new queue
    # Mark start vertex as visited
    visited.add(start_vertex)
    # Add start vertex to queue
    queue.enqueue(start_vertex)
    
    # Process vertices until queue is empty
    while queue is not empty:
        # Get next vertex to process
        current_vertex = queue.dequeue()
        
        # Process current vertex
        process(current_vertex)
        
        # Visit all neighbors of current vertex
        for each neighbor in graph[current_vertex]:
            # If neighbor hasn't been visited
            if neighbor not in visited:
                # Mark neighbor as visited
                visited.add(neighbor)
                # Add neighbor to queue
                queue.enqueue(neighbor)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        empty graph structure
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Add vertices
        and edges
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse:</span> Visit
        vertices in order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Track:</span> Keep record of
        visited vertices
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Graph Representation
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Vertices: [A, B, C, D, E]
Edges: [(A,B), (A,C), (B,D), (C,D), (D,E)]

Adjacency List:
A: [B, C]
B: [A, D]
C: [A, D]
D: [B, C, E]
E: [D]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Graph Traversal
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Starting from vertex A:

Step 1: Visit A
Queue: [A]
Visited: {A}

Step 2: Process A's neighbors
Queue: [B, C]
Visited: {A, B, C}

Step 3: Process B's neighbors
Queue: [C, D]
Visited: {A, B, C, D}

Step 4: Process C's neighbors
Queue: [D]
Visited: {A, B, C, D}

Step 5: Process D's neighbors
Queue: [E]
Visited: {A, B, C, D, E}

Step 6: Process E's neighbors
Queue: []
Visited: {A, B, C, D, E}

Traversal order: A → B → C → D → E`}
      </pre>
    </div>
  </div>
);
