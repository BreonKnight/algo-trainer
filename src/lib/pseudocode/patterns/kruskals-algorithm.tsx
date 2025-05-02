import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KruskalsAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Kruskal's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Graph)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find minimum
      spanning tree
    </div>

    <PseudocodeDisplay code={`# Kruskal's Algorithm: Find minimum spanning tree
# Input: Graph G = (V, E) with edge weights
# Output: Set of edges forming minimum spanning tree

Algorithm KRUSKAL(G)
    # Initialize disjoint set for vertices
    for each vertex v in V do
        MAKE-SET(v)
    end for
    
    # Sort edges by weight
    sort E by weight in non-decreasing order
    
    # Initialize result
    A ← empty set
    
    # Process edges in order
    for each edge (u, v) in E do
        if FIND-SET(u) ≠ FIND-SET(v) then
            A ← A ∪ {(u, v)}
            UNION(u, v)
        end if
    end for
    
    return A

# Example:
# Input: G = (V, E) where
# V = {a, b, c, d}
# E = {(a,b,1), (a,c,4), (a,d,3), (b,c,2), (b,d,5), (c,d,6)}
# 
# Step 1: Sort edges: (a,b,1), (b,c,2), (a,d,3), (a,c,4), (b,d,5), (c,d,6)
# Step 2: Add (a,b), (b,c), (a,d)
# 
# Output: {(a,b), (b,c), (a,d)}`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize disjoint sets for vertices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort edges by weight</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process edges in order and add to MST if no cycle</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return set of edges forming MST</span>
      </div>
    </div>
  </div>
);
