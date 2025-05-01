import { ChevronRight } from "lucide-react";

export const NetworkFlowPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Network Flow</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V·E²) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: Find maximum
      flow in network
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`FORD-FULKERSON(G, s, t)
    let f[1‥V][1‥V] be a new array
    for each edge (u,v) ∈ G.E
        do f[u][v] ← 0
            f[v][u] ← 0
    
    while there exists a path p from s to t in residual network Gf
        do let cf(p) ← min{cf(u,v) : (u,v) is in p}
            for each edge (u,v) in p
                do f[u][v] ← f[u][v] + cf(p)
                    f[v][u] ← -f[u][v]
    
    return f

// Example:
// Input: G = (V,E), s = 1, t = 4
// 
// Initial flow:
//   f[1][2] = 0, f[2][1] = 0
//   f[1][3] = 0, f[3][1] = 0
//   f[2][3] = 0, f[3][2] = 0
//   f[2][4] = 0, f[4][2] = 0
//   f[3][4] = 0, f[4][3] = 0
// 
// First augmenting path: 1 → 2 → 4
//   cf(p) = min{10, 8} = 8
//   Update flows:
//     f[1][2] = 8, f[2][1] = -8
//     f[2][4] = 8, f[4][2] = -8
// 
// Second augmenting path: 1 → 3 → 4
//   cf(p) = min{5, 10} = 5
//   Update flows:
//     f[1][3] = 5, f[3][1] = -5
//     f[3][4] = 5, f[4][3] = -5
// 
// Output: Maximum flow = 13`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set all flows to zero</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Augmenting path in residual network</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Flow along augmenting path</span>
      </div>
    </div>
  </div>
);
