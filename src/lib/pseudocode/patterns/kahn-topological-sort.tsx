import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const KahnTopologicalSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Kahn's Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Topological sorting of DAGs
    </div>

    <PseudocodeDisplay
      code={`KAHN-TOPOLOGICAL-SORT(G):
    // G is a directed acyclic graph
    // Returns topological order or detects cycle
    in_degree[1..V] ← 0
    for each vertex v in G:
        for each neighbor u of v:
            in_degree[u] ← in_degree[u] + 1
    
    Q ← empty queue
    for each vertex v in G:
        if in_degree[v] = 0:
            Q.enqueue(v)
    
    topo_order ← empty list
    while Q is not empty:
        v ← Q.dequeue()
        topo_order.append(v)
        
        for each neighbor u of v:
            in_degree[u] ← in_degree[u] - 1
            if in_degree[u] = 0:
                Q.enqueue(u)
    
    if length(topo_order) ≠ V:
        return "Graph contains a cycle"
    return topo_order

// Example:
// Graph G:
// 1 → 2 → 3
// ↓   ↓   ↓
// 4 → 5 → 6
//
// Initial in_degree:
// [0,1,1,1,2,2]
//
// Topological order:
// [1,2,4,3,5,6]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Finds topological order of vertices in a DAG</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Can detect cycles in directed graphs</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses in-degree counting and queue-based approach</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(V + E) - each vertex and edge is processed once</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(V) - for in-degree array and queue</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>More efficient than DFS-based approach for large graphs</span>
        </div>
      </div>
    </div>
  </div>
);
