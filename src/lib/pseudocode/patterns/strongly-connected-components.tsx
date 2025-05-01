import { ChevronRight } from "lucide-react";

export const StronglyConnectedComponentsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Strongly Connected Components
      </span>
      <span className="ml-2 text-xs text-secondary">(Graph)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find strongly
      connected components in directed graph
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Strongly Connected Components: Find strongly connected components in directed graph
# Input: G = (V, E) - directed graph
# Output: List of strongly connected components

Algorithm STRONGLY-CONNECTED-COMPONENTS(G)
    # First DFS pass to get finishing times
    for each vertex u ∈ G.V
        u.color ← WHITE
        u.π ← NIL
    time ← 0
    for each vertex u ∈ G.V
        if u.color = WHITE
            DFS-VISIT(G, u)

    # Compute transpose of G
    G^T ← TRANSPOSE(G)

    # Second DFS pass in decreasing order of finishing times
    for each vertex u ∈ G.V
        u.color ← WHITE
        u.π ← NIL
    for each vertex u ∈ G.V in decreasing order of u.f
        if u.color = WHITE
            DFS-VISIT(G^T, u)
            # All vertices visited in this DFS form a component
            output component

Algorithm DFS-VISIT(G, u)
    time ← time + 1
    u.d ← time
    u.color ← GRAY
    for each v ∈ G.Adj[u]
        if v.color = WHITE
            v.π ← u
            DFS-VISIT(G, v)
    u.color ← BLACK
    time ← time + 1
    u.f ← time

Algorithm TRANSPOSE(G)
    G^T ← new Graph
    G^T.V ← G.V
    for each vertex u ∈ G.V
        for each vertex v ∈ G.Adj[u]
            add u to G^T.Adj[v]
    return G^T

# Example:
# Input: G = (V, E) where
# V = {a, b, c, d, e, f}
# E = {(a,b), (b,c), (c,a), (b,d), (d,e), (e,f), (f,d)}
# 
# First DFS pass:
# a: d=1, f=6
# b: d=2, f=5
# c: d=3, f=4
# d: d=7, f=12
# e: d=8, f=11
# f: d=9, f=10
# 
# Second DFS pass on G^T:
# Component 1: {a, b, c}
# Component 2: {d, e, f}
# 
# Output: [{a, b, c}, {d, e, f}]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Perform first DFS pass to get finishing times</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute transpose of the graph</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Perform second DFS pass in decreasing order of finishing times
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Each DFS tree in second pass forms a strongly connected component
        </span>
      </div>
    </div>
  </div>
);
