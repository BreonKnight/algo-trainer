import { AlgorithmPattern } from "../../types/pattern-types";

export const topologicalSortPattern: AlgorithmPattern = {
  title: "Topological Sort",
  description:
    "Algorithm for ordering vertices in a directed acyclic graph (DAG) such that for each directed edge u->v, vertex u comes before v in the ordering.",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Initialize:
   a. Create empty result list
   b. Create map to track in-degree of each vertex
   c. Create queue for vertices with 0 in-degree
2. Build in-degree map:
   a. For each edge u->v:
      - Increment in-degree of v
3. Add all vertices with 0 in-degree to queue
4. While queue not empty:
   a. Remove vertex u from queue
   b. Add u to result
   c. For each neighbor v of u:
      - Decrement in-degree of v
      - If v's in-degree becomes 0:
        * Add v to queue
5. If result size < V, graph has cycle
6. Return result`,
  example: `Graph:
A -> B -> C
|         ^
v         |
D --------|

In-degrees:
A: 0
B: 1
C: 2
D: 1

Process:
1. Start with A (in-degree 0)
2. Process B (in-degree becomes 0)
3. Process D (in-degree becomes 0)
4. Process C (in-degree becomes 0)

Result: [A, B, D, C]`,
  implementation: `from collections import defaultdict, deque

def topological_sort(graph):
    # Create in-degree map
    in_degree = defaultdict(int)
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    # Initialize queue with 0 in-degree vertices
    queue = deque([u for u in graph if in_degree[u] == 0])
    result = []
    
    # Process vertices
    while queue:
        u = queue.popleft()
        result.append(u)
        
        # Update neighbors
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    # Check for cycle
    if len(result) != len(graph):
        return []  # Graph has cycle
    
    return result

# Example usage:
graph = {
    'A': ['B', 'D'],
    'B': ['C'],
    'C': [],
    'D': ['C']
}
print(topological_sort(graph))  # ['A', 'B', 'D', 'C']`,
  category: "Graph",
};
