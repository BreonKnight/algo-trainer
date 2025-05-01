import { ChevronRight } from "lucide-react";

export const FloydWarshallPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Floyd-Warshall</span>
      <span className="ml-2 text-xs text-secondary">(Graph)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V³) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: Find shortest
      paths between all pairs of vertices
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Floyd-Warshall: Find shortest paths between all pairs of vertices
# Input: Weighted directed graph G = (V, E) with weight function w
# Output: Matrix D where D[i,j] is shortest path from i to j

Algorithm FLOYD-WARSHALL(G)
    n ← |V|
    # Initialize distance matrix
    for i ← 1 to n do
        for j ← 1 to n do
            if i = j then
                D[i,j] ← 0
            else if (i,j) ∈ E then
                D[i,j] ← w(i,j)
            else
                D[i,j] ← ∞
            end if
        end for
    end for
    
    # Update distances
    for k ← 1 to n do
        for i ← 1 to n do
            for j ← 1 to n do
                D[i,j] ← min(D[i,j], D[i,k] + D[k,j])
            end for
        end for
    end for
    
    return D

# Example:
# Input: G with V = {1,2,3,4} and edges:
# (1,2,3), (1,4,7), (2,1,8), (2,3,2), (3,1,5), (3,4,1), (4,1,2)
# 
# Step 1: Initial D matrix
#    1  2  3  4
# 1  0  3  ∞  7
# 2  8  0  2  ∞
# 3  5  ∞  0  1
# 4  2  ∞  ∞  0
# 
# Step 2: After k=1
#    1  2  3  4
# 1  0  3  ∞  7
# 2  8  0  2  15
# 3  5  8  0  1
# 4  2  5  ∞  0
# 
# Step 3: After k=2
#    1  2  3  4
# 1  0  3  5  7
# 2  8  0  2  15
# 3  5  8  0  1
# 4  2  5  7  0
# 
# Step 4: After k=3
#    1  2  3  4
# 1  0  3  5  6
# 2  7  0  2  3
# 3  5  8  0  1
# 4  2  5  7  0
# 
# Step 5: After k=4
#    1  2  3  4
# 1  0  3  5  6
# 2  5  0  2  3
# 3  3  6  0  1
# 4  2  5  7  0`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize distance matrix with direct edges</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Consider each vertex as intermediate point</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update distances using intermediate vertex</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return final distance matrix</span>
      </div>
    </div>
  </div>
);
