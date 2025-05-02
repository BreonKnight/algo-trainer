import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const PrimsAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prim's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Minimum
      spanning tree
    </div>

    <PseudocodeDisplay code={`// Prim's algorithm for minimum spanning tree
PRIM(G, w, r):
    for each u ∈ G.V:
        key[u] ← ∞
        π[u] ← NIL
    key[r] ← 0
    Q ← G.V
    while Q ≠ ∅:
        u ← EXTRACT-MIN(Q)
        for each v ∈ G.Adj[u]:
            if v ∈ Q and w(u, v) < key[v]:
                π[v] ← u
                key[v] ← w(u, v)

// Example:
// Input: G = (V, E), where
// V = {1, 2, 3, 4, 5}
// E = {(1,2,2), (1,3,3), (2,3,1), (2,4,4), (3,4,5), (3,5,6), (4,5,7)}
// r = 1
// 
// Execution:
// 1. Initialize: key = [0, ∞, ∞, ∞, ∞], π = [NIL, NIL, NIL, NIL, NIL]
// 2. Extract 1: key = [0, 2, 3, ∞, ∞], π = [NIL, 1, 1, NIL, NIL]
// 3. Extract 2: key = [0, 2, 1, 4, ∞], π = [NIL, 1, 2, 2, NIL]
// 4. Extract 3: key = [0, 2, 1, 4, 6], π = [NIL, 1, 2, 2, 3]
// 5. Extract 4: key = [0, 2, 1, 4, 6], π = [NIL, 1, 2, 2, 3]
// 6. Extract 5: key = [0, 2, 1, 4, 6], π = [NIL, 1, 2, 2, 3]
// 
// Output: MST edges = {(1,2), (2,3), (2,4), (3,5)}`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Initialize: Set all keys to infinity and predecessors to NIL
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Process: Extract minimum key vertex and update adjacent vertices
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Build: Construct MST using predecessor pointers</span>
      </div>
    </div>
  </div>
);
