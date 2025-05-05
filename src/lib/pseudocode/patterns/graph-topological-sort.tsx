import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TopologicalSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Topological Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Linear ordering of vertices in a
      DAG
    </div>

    <PseudocodeDisplay
      code={`// DFS-based Topological Sort
TOPOLOGICAL-SORT(G):
    visited = [False] * |V|
    order = []
    for v in V:
        if not visited[v]:
            DFS(G, v, visited, order)
    return reversed(order)

// Kahn's Algorithm
KAHN-TOPOLOGICAL-SORT(G):
    in_degree = [0] * |V|
    for v in V:
        for u in G.adj[v]:
            in_degree[u] += 1

    queue = []
    for v in V:
        if in_degree[v] == 0:
            queue.append(v)

    order = []
    while queue:
        v = queue.pop(0)
        order.append(v)
        for u in G.adj[v]:
            in_degree[u] -= 1
            if in_degree[u] == 0:
                queue.append(u)

    if len(order) != |V|:
        return "Graph has a cycle"
    return order

// Topological Sort with Cycle Detection
TOPOLOGICAL-SORT-CYCLE(G):
    visited = [False] * |V|
    recursion_stack = [False] * |V|
    order = []

    for v in V:
        if not visited[v]:
            if DFS-CYCLE(G, v, visited, recursion_stack, order):
                return "Graph has a cycle"

    return reversed(order)

DFS-CYCLE(G, v, visited, recursion_stack, order):
    visited[v] = True
    recursion_stack[v] = True

    for u in G.adj[v]:
        if not visited[u]:
            if DFS-CYCLE(G, u, visited, recursion_stack, order):
                return True
        elif recursion_stack[u]:
            return True

    recursion_stack[v] = False
    order.append(v)
    return False`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">DFS:</span> Perform depth-first search
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Order:</span> Add vertices to order after
        processing
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Reverse:</span> Return vertices in reverse order
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: DFS-based Topological Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 → 1 → 2
↓   ↓   ↓
3 → 4 → 5

DFS traversal:
0: visited=[True,False,False,False,False,False]
1: visited=[True,True,False,False,False,False]
2: visited=[True,True,True,False,False,False]
3: visited=[True,True,True,True,False,False]
4: visited=[True,True,True,True,True,False]
5: visited=[True,True,True,True,True,True]

Topological order: [5, 4, 3, 2, 1, 0]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Kahn's Algorithm</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 → 1 → 2
↓   ↓   ↓
3 → 4 → 5

In-degrees: [0, 1, 1, 1, 2, 2]
Queue: [0]
Order: [0, 1, 3, 2, 4, 5]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Cycle Detection</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph with cycle:
0 → 1 → 2
↑   ↓   ↓
3 ← 4 ← 5

DFS traversal:
0: visited=[True,False,False,False,False,False]
1: visited=[True,True,False,False,False,False]
4: visited=[True,True,False,False,True,False]
3: visited=[True,True,False,True,True,False]
Cycle detected at vertex 0`}
      </pre>
    </div>
  </div>
);
