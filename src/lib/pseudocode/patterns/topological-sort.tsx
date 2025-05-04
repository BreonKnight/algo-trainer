import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TopologicalSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Topological Sort</span>
      <span className="ml-2 text-xs text-secondary">(Graph)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Linear
      ordering of vertices in a DAG
    </div>

    <PseudocodeDisplay code={`# Topological Sort: Linear ordering of vertices in a DAG
# Input: Directed Acyclic Graph G = (V, E)
# Output: Topological ordering of vertices

Algorithm TOPOLOGICAL-SORT(G)
    # Initialize visited and result arrays
    visited ← empty array of size |V|
    result ← empty array
    time ← 0

    # Helper function for DFS
    function DFS(u)
        visited[u] ← true
        time ← time + 1
        u.discovery ← time

        for each vertex v in G.Adj[u] do
            if not visited[v] then
                DFS(v)
            end if
        end for

        time ← time + 1
        u.finish ← time
        result.append(u)
    end function

    # Perform DFS on all vertices
    for each vertex u in G.V do
        if not visited[u] then
            DFS(u)
        end if
    end for

    # Reverse to get topological order
    return reverse(result)

# Example:
# Input: G = (V, E) where V = {1, 2, 3, 4, 5}
#        E = {(1,2), (1,3), (2,4), (3,4), (4,5)}
#
# Step 1: DFS(1)
#   discovery[1] = 1, finish[1] = 10
#   discovery[2] = 2, finish[2] = 7
#   discovery[4] = 3, finish[4] = 6
#   discovery[5] = 4, finish[5] = 5
#   discovery[3] = 8, finish[3] = 9
#
# Output: [1, 3, 2, 4, 5]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize visited and result arrays</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Perform DFS on all unvisited vertices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Track discovery and finish times</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Reverse result to get topological order</span>
      </div>
    </div>
  </div>
);
