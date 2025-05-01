import { ChevronRight } from "lucide-react";

export const GraphArticulationPointsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Graph Articulation Points</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find critical
      vertices in graph
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`FIND-ARTICULATION-POINTS(G)
    let n be the number of vertices in G
    let disc[1‥n] be a new array
    let low[1‥n] be a new array
    let parent[1‥n] be a new array
    let ap[1‥n] be a new array
    let time ← 0
    
    for each vertex u in G.V
        do disc[u] ← -1
            low[u] ← -1
            parent[u] ← NIL
            ap[u] ← FALSE
    
    for each vertex u in G.V
        do if disc[u] = -1
            then DFS-AP(G, u, disc, low, parent, ap, time)
    
    return ap

DFS-AP(G, u, disc, low, parent, ap, time)
    let children ← 0
    time ← time + 1
    disc[u] ← time
    low[u] ← time
    
    for each v in G.Adj[u]
        do if disc[v] = -1
            then children ← children + 1
                parent[v] ← u
                DFS-AP(G, v, disc, low, parent, ap, time)
                low[u] ← min(low[u], low[v])
                if parent[u] = NIL and children > 1
                    then ap[u] ← TRUE
                if parent[u] ≠ NIL and low[v] ≥ disc[u]
                    then ap[u] ← TRUE
            else if v ≠ parent[u]
                then low[u] ← min(low[u], disc[v])

// Example:
// Input: G with edges (1,2), (2,3), (3,4), (4,1), (1,3)
// 
// DFS from vertex 1:
//   disc = [1, 2, 3, 4]
//   low = [1, 1, 1, 1]
//   parent = [NIL, 1, 2, 3]
// 
// Articulation points:
//   Vertex 1: TRUE (root with multiple children)
//   Vertex 2: FALSE
//   Vertex 3: FALSE
//   Vertex 4: FALSE
// 
// Output: [TRUE, FALSE, FALSE, FALSE]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set up discovery and low values</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>DFS: Track discovery time and low values</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Identify: Check conditions for articulation points</span>
      </div>
    </div>
  </div>
);
