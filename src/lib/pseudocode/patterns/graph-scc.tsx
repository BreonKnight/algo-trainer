import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const StronglyConnectedComponentsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Strongly Connected Components</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding strongly connected
      components in directed graphs
    </div>

    <PseudocodeDisplay
      code={`// Kosaraju's Algorithm
KOSARAJU-SCC(G):
    # First DFS pass
    visited = [False] * |V|
    order = []
    for v in V:
        if not visited[v]:
            DFS(G, v, visited, order)

    # Reverse graph
    G_rev = REVERSE-GRAPH(G)

    # Second DFS pass
    visited = [False] * |V|
    components = []
    for v in reversed(order):
        if not visited[v]:
            component = []
            DFS(G_rev, v, visited, component)
            components.append(component)
    return components

// Tarjan's Algorithm
TARJAN-SCC(G):
    index = 0
    indices = [-1] * |V|
    low = [-1] * |V|
    on_stack = [False] * |V|
    stack = []
    components = []

    for v in V:
        if indices[v] == -1:
            STRONGLY-CONNECTED(v)
    return components

STRONGLY-CONNECTED(v):
    indices[v] = index
    low[v] = index
    index = index + 1
    stack.append(v)
    on_stack[v] = True

    for w in G.adj[v]:
        if indices[w] == -1:
            STRONGLY-CONNECTED(w)
            low[v] = min(low[v], low[w])
        elif on_stack[w]:
            low[v] = min(low[v], indices[w])

    if low[v] == indices[v]:
        component = []
        while True:
            w = stack.pop()
            on_stack[w] = False
            component.append(w)
            if w == v:
                break
        components.append(component)

// Gabow's Algorithm
GABOW-SCC(G):
    index = 0
    indices = [-1] * |V|
    path = []
    components = []

    for v in V:
        if indices[v] == -1:
            GABOW-DFS(v)
    return components

GABOW-DFS(v):
    indices[v] = index
    index = index + 1
    path.append(v)

    for w in G.adj[v]:
        if indices[w] == -1:
            GABOW-DFS(w)
        else:
            while path and indices[path[-1]] > indices[w]:
                path.pop()

    if path[-1] == v:
        component = []
        while True:
            w = path.pop()
            component.append(w)
            if w == v:
                break
        components.append(component)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">DFS Pass:</span> Perform depth-first search to
        get vertex order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Reverse:</span> Create reversed graph
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Second Pass:</span> Process vertices in reverse
        order
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Kosaraju's Algorithm</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 → 1 → 2 → 0
1 → 3
3 → 4
4 → 3

First DFS order: [4, 3, 2, 1, 0]
Reversed graph:
0 → 2
1 → 0
2 → 1
3 → 1, 4
4 → 3

SCCs: [[0, 1, 2], [3, 4]]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Tarjan's Algorithm</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 → 1 → 2 → 0
1 → 3
3 → 4
4 → 3

DFS traversal:
0: indices=[0,-1,-1,-1,-1], low=[0,-1,-1,-1,-1]
1: indices=[0,1,-1,-1,-1], low=[0,1,-1,-1,-1]
2: indices=[0,1,2,-1,-1], low=[0,1,0,-1,-1]
3: indices=[0,1,2,3,-1], low=[0,1,0,3,-1]
4: indices=[0,1,2,3,4], low=[0,1,0,3,3]

SCCs: [[0, 1, 2], [3, 4]]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Gabow's Algorithm</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
0 → 1 → 2 → 0
1 → 3
3 → 4
4 → 3

DFS traversal:
0: indices=[0,-1,-1,-1,-1], path=[0]
1: indices=[0,1,-1,-1,-1], path=[0,1]
2: indices=[0,1,2,-1,-1], path=[0,1,2]
3: indices=[0,1,2,3,-1], path=[0,1,2,3]
4: indices=[0,1,2,3,4], path=[0,1,2,3,4]

SCCs: [[0, 1, 2], [3, 4]]`}
      </pre>
    </div>
  </div>
);
