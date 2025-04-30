import { ChevronRight } from "lucide-react";

export const GraphBasicsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Graph Basics</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Representing
      relationships between objects
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Create graph from vertices and edges
CREATE-GRAPH(vertices, edges):
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

// Check if path exists between two vertices
HAS-PATH(graph, start, end):
    # Initialize visited set
    visited = new set
    
    # Use DFS to find path
    return DFS(graph, start, end, visited)

// Depth-first search helper
DFS(graph, current, end, visited):
    # If reached destination
    if current == end:
        return true
    
    # Mark current vertex as visited
    visited.add(current)
    
    # Try all neighbors
    for each neighbor in graph[current]:
        # If neighbor not visited
        if neighbor not in visited:
            # Recursively search from neighbor
            if DFS(graph, neighbor, end, visited):
                return true
    
    # No path found
    return false`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        empty graph
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
        <span className="font-semibold text-accent">Search:</span> Find path
        between vertices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Explore:</span> Visit
        neighbors recursively
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Graph Creation</span>
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
      <span className="font-semibold text-accent">Example: Path Finding</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Find path from A to E:

Step 1: Start at A
Visited: {A}

Step 2: Try B
Visited: {A, B}

Step 3: Try D
Visited: {A, B, D}

Step 4: Try E
Visited: {A, B, D, E}
Path found: A → B → D → E

Alternative path: A → C → D → E`}
      </pre>
    </div>
  </div>
);
