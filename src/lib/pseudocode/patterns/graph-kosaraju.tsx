import { ChevronRight } from "lucide-react";

export const GraphKosarajuPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Kosaraju's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find strongly
      connected components
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`KOSARAJU(G)
    let n be the number of vertices in G
    let visited[1‥n] be a new array
    let order be a new empty stack
    let components be a new empty list
    
    for each vertex u in G.V
        do visited[u] ← FALSE
    
    for each vertex u in G.V
        do if not visited[u]
            then DFS-FIRST(G, u, visited, order)
    
    let G^T be the transpose of G
    for each vertex u in G.V
        do visited[u] ← FALSE
    
    while order is not empty
        do let u ← order.pop()
            if not visited[u]
                then let component be a new empty list
                    DFS-SECOND(G^T, u, visited, component)
                    components.append(component)
    
    return components

DFS-FIRST(G, u, visited, order)
    visited[u] ← TRUE
    for each v in G.Adj[u]
        do if not visited[v]
            then DFS-FIRST(G, v, visited, order)
    order.push(u)

DFS-SECOND(G, u, visited, component)
    visited[u] ← TRUE
    component.append(u)
    for each v in G.Adj[u]
        do if not visited[v]
            then DFS-SECOND(G, v, visited, component)

// Example:
// Input: G with edges (1,2), (2,3), (3,1), (2,4), (4,5), (5,6), (6,4)
// 
// First DFS:
//   Order: [3, 2, 1, 6, 5, 4]
// 
// Second DFS on G^T:
//   Component 1: [1, 2, 3]
//   Component 2: [4, 5, 6]
// 
// Output: [[1, 2, 3], [4, 5, 6]]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>First DFS: Fill order with vertices by finish time</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transpose: Create reverse graph</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Second DFS: Process vertices in reverse order</span>
      </div>
    </div>
  </div>
);
