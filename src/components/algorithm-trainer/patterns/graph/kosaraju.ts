import { AlgorithmPattern } from "../../types";

export const kosarajuPattern: AlgorithmPattern = {
  title: "Kosaraju's Algorithm",
  description: "Find strongly connected components in a directed graph",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Perform first DFS and store vertices in order of finishing time
2. Transpose the graph (reverse all edges)
3. Perform second DFS on transposed graph in order of finishing times
4. Each DFS tree in step 3 is a strongly connected component`,
  example: `Graph:
1 → 2 → 3 ← 4
↑   ↓   ↓   ↑
7 ← 6 ← 5 ← 8

SCCs: [1,2,6,7], [3,4,5,8]`,
  implementation: `def kosaraju(graph):
    # Step 1: Perform first DFS and store vertices in order of finishing time
    def dfs_first(v, visited, order):
        visited[v] = True
        for u in graph[v]:
            if not visited[u]:
                dfs_first(u, visited, order)
        order.append(v)

    # Step 2: Transpose the graph
    def transpose():
        transposed = {v: [] for v in graph}
        for v in graph:
            for u in graph[v]:
                transposed[u].append(v)
        return transposed

    # Step 3: Perform second DFS on transposed graph
    def dfs_second(v, visited, scc):
        visited[v] = True
        scc.append(v)
        for u in transposed[v]:
            if not visited[u]:
                dfs_second(u, visited, scc)

    # Main algorithm steps
    V = len(graph)
    visited = {v: False for v in graph}
    order = []

    # First DFS to get finishing times
    for v in graph:
        if not visited[v]:
            dfs_first(v, visited, order)

    # Transpose graph
    transposed = transpose()

    # Reset visited array and find SCCs
    visited = {v: False for v in graph}
    sccs = []

    # Second DFS to find SCCs
    for v in reversed(order):
        if not visited[v]:
            scc = []
            dfs_second(v, visited, scc)
            sccs.append(scc)

    return sccs`,
  category: "graph",
};
