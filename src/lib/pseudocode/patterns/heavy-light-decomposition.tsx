import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const HeavyLightDecompositionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Heavy-Light Decomposition</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) per query &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Tree
      path queries
    </div>

    <PseudocodeDisplay code={`HLD(G)
    let size[1‥n] be a new array
    let parent[1‥n] be a new array
    let depth[1‥n] be a new array
    let head[1‥n] be a new array
    let pos[1‥n] be a new array
    
    DFS-SIZE(G, 1, 0)
    DFS-HLD(G, 1, 1)
    return (size, parent, depth, head, pos)

DFS-SIZE(G, u, p)
    size[u] ← 1
    parent[u] ← p
    for each v in G.Adj[u]
        do if v ≠ p
            then depth[v] ← depth[u] + 1
                DFS-SIZE(G, v, u)
                size[u] ← size[u] + size[v]

DFS-HLD(G, u, h)
    head[u] ← h
    let heavy ← NIL
    let max_size ← 0
    
    for each v in G.Adj[u]
        do if v ≠ parent[u] and size[v] > max_size
            then heavy ← v
                max_size ← size[v]
    
    if heavy ≠ NIL
        then DFS-HLD(G, heavy, h)
            for each v in G.Adj[u]
                do if v ≠ parent[u] and v ≠ heavy
                    then DFS-HLD(G, v, v)

// Example:
// Input: Tree with edges (1,2), (1,3), (2,4), (2,5), (3,6)
// 
// DFS-SIZE:
//   size = [6, 3, 2, 1, 1, 1]
//   parent = [0, 1, 1, 2, 2, 3]
//   depth = [0, 1, 1, 2, 2, 2]
// 
// DFS-HLD:
//   head = [1, 1, 3, 1, 1, 3]
//   pos = [1, 2, 4, 3, 5, 6]
// 
// Output: Decomposed tree with heavy paths`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute: Subtree sizes and parent pointers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Identify: Heavy edges and light edges</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Decompose: Tree into heavy paths</span>
      </div>
    </div>
  </div>
);
