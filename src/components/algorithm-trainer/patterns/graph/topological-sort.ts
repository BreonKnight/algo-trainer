import { AlgorithmPattern } from "../../types";

export const topological_sortPattern: AlgorithmPattern = {
  title: "Topological Sort Algorithm",
  description:
    "An algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge u->v, vertex u comes before v in the ordering.",
  timeComplexity: "O(V + E)",
  category: "Graph Algorithms",
  spaceComplexity: "O(V)",
  pseudocode: `1. Calculate in-degree for each vertex\n2. Add vertices with in-degree 0 to queue\n3. While queue not empty:\n   a. Remove vertex from queue\n   b. Add to result\n   c. Reduce in-degree of neighbors\n   d. If any neighbor's in-degree becomes 0:\n      - Add to queue\n4. If visited all vertices, return result\n   Else, graph has cycle`,
  example: `Graph:
A -> B -> C
|         ^
v         |
D --------|

In-degrees: A:0, B:1, C:2, D:1

Steps:
1. Start with A (in-degree 0)
2. Add B (now in-degree 0)
3. Add D (now in-degree 0)
4. Add C (now in-degree 0)

Result: [A, B, D, C]`,
  implementation: `from collections import defaultdict, deque

def topological_sort(graph):
    # Calculate in-degree
    in_degree = defaultdict(int)
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    # Add vertices with in-degree 0 to queue
    queue = deque([u for u in graph if in_degree[u] == 0])
    result = []
    
    while queue:
        u = queue.popleft()
        result.append(u)
        
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    return result if len(result) == len(graph) else []`,
};
