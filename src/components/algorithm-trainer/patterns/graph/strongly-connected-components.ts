import { AlgorithmPattern } from "../../types";

export const stronglyConnectedComponentsPattern: AlgorithmPattern = {
  title: "Strongly Connected Components",
  description:
    "A graph algorithm that finds strongly connected components in a directed graph. A strongly connected component is a maximal subgraph where every pair of vertices is mutually reachable.",
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V + E)",
  pseudocode: `
function kosaraju(graph):
    # First pass: compute finishing times
    visited = [False] * len(graph)
    order = []
    
    def dfs(u):
        visited[u] = True
        for v in graph[u]:
            if not visited[v]:
                dfs(v)
        order.append(u)
    
    for u in range(len(graph)):
        if not visited[u]:
            dfs(u)
    
    # Second pass: process in reverse order
    visited = [False] * len(graph)
    components = []
    
    def reverse_dfs(u, component):
        visited[u] = True
        component.append(u)
        for v in reversed_graph[u]:
            if not visited[v]:
                reverse_dfs(v, component)
    
    reversed_graph = [[] for _ in range(len(graph))]
    for u in range(len(graph)):
        for v in graph[u]:
            reversed_graph[v].append(u)
    
    for u in reversed(order):
        if not visited[u]:
            component = []
            reverse_dfs(u, component)
            components.append(component)
    
    return components
  `,
  example: `
// Example usage:
const graph = [
  [1],        // 0 -> 1
  [2],        // 1 -> 2
  [0, 3],     // 2 -> 0, 3
  [4],        // 3 -> 4
  [5],        // 4 -> 5
  [3]         // 5 -> 3
];
const components = kosaraju(graph);
console.log(components); // Output: [[0, 1, 2], [3, 4, 5]]
  `,
  implementation: `
function kosaraju(graph: number[][]): number[][] {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const order: number[] = [];
  
  // First pass: compute finishing times
  function dfs(u: number): void {
    visited[u] = true;
    for (const v of graph[u]) {
      if (!visited[v]) {
        dfs(v);
      }
    }
    order.push(u);
  }
  
  for (let u = 0; u < n; u++) {
    if (!visited[u]) {
      dfs(u);
    }
  }
  
  // Second pass: process in reverse order
  visited.fill(false);
  const components: number[][] = [];
  
  function reverseDfs(u: number, component: number[]): void {
    visited[u] = true;
    component.push(u);
    for (const v of reversedGraph[u]) {
      if (!visited[v]) {
        reverseDfs(v, component);
      }
    }
  }
  
  // Build reversed graph
  const reversedGraph: number[][] = Array.from({ length: n }, () => []);
  for (let u = 0; u < n; u++) {
    for (const v of graph[u]) {
      reversedGraph[v].push(u);
    }
  }
  
  // Process vertices in reverse order
  for (let i = n - 1; i >= 0; i--) {
    const u = order[i];
    if (!visited[u]) {
      const component: number[] = [];
      reverseDfs(u, component);
      components.push(component);
    }
  }
  
  return components;
}
  `,
  category: "graph",
};
