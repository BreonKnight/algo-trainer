import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const LCAPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Lowest Common Ancestor</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) per query &nbsp;|&nbsp; Space: O(n log n) &nbsp;|&nbsp; Use: Find LCA in tree
    </div>

    <PseudocodeDisplay
      code={`LCA-PREPROCESS(T)
    let n be the number of vertices in T
    let depth[1‥n] be a new array
    let up[1‥n][0‥log n] be a new array

    DFS-LCA(T, T.root, NIL, depth, up)
    return (depth, up)

DFS-LCA(T, u, p, depth, up)
    up[u][0] ← p
    for i ← 1 to log n
        do if up[u][i-1] ≠ NIL
            then up[u][i] ← up[up[u][i-1]][i-1]
            else up[u][i] ← NIL

    for each v in T.Adj[u]
        do if v ≠ p
            then depth[v] ← depth[u] + 1
                DFS-LCA(T, v, u, depth, up)

LCA-QUERY(u, v, depth, up)
    if depth[u] < depth[v]
        then swap(u, v)

    for i ← log n downto 0
        do if depth[u] - (1 << i) ≥ depth[v]
            then u ← up[u][i]

    if u = v
        then return u

    for i ← log n downto 0
        do if up[u][i] ≠ up[v][i]
            then u ← up[u][i]
                v ← up[v][i]

    return up[u][0]

// Example:
// Input: Tree with edges (1,2), (1,3), (2,4), (2,5), (3,6)
//
// Preprocessing:
//   depth = [0, 1, 1, 2, 2, 2]
//   up[1] = [NIL, NIL, NIL]
//   up[2] = [1, NIL, NIL]
//   up[3] = [1, NIL, NIL]
//   up[4] = [2, 1, NIL]
//   up[5] = [2, 1, NIL]
//   up[6] = [3, 1, NIL]
//
// Query: LCA(4,6)
//   Step 1: Bring 4 to depth 2
//   Step 2: Binary search for LCA
//   Output: 1`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Preprocess: Build binary lifting table</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Query: Bring nodes to same depth</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Binary Search: Find lowest common ancestor</span>
      </div>
    </div>
  </div>
);
