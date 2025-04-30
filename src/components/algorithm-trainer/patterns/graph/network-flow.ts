import { AlgorithmPattern } from "../../types";

export const networkFlowPattern: AlgorithmPattern = {
  title: "Network Flow",
  description:
    "A graph algorithm that finds the maximum flow in a flow network. The flow network is a directed graph where each edge has a capacity and a flow. The algorithm finds the maximum flow from a source node to a sink node.",
  timeComplexity:
    "O(V * E^2) for Edmonds-Karp, O(V^2 * E) for Dinic's algorithm",
  spaceComplexity: "O(V + E)",
  pseudocode: `
function maxFlow(graph, source, sink):
    flow = 0
    while True:
        # Find augmenting path using BFS
        parent = [-1] * len(graph)
        queue = [source]
        parent[source] = source
        
        while queue:
            u = queue.pop(0)
            for v in range(len(graph)):
                if parent[v] == -1 and graph[u][v] > 0:
                    parent[v] = u
                    queue.append(v)
                    if v == sink:
                        break
        
        if parent[sink] == -1:
            break
            
        # Find minimum residual capacity
        path_flow = float('inf')
        v = sink
        while v != source:
            u = parent[v]
            path_flow = min(path_flow, graph[u][v])
            v = u
            
        # Update residual capacities
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            graph[v][u] += path_flow
            v = u
            
        flow += path_flow
        
    return flow
  `,
  example: `
// Example usage:
const graph = [
  [0, 16, 13, 0, 0, 0],
  [0, 0, 10, 12, 0, 0],
  [0, 4, 0, 0, 14, 0],
  [0, 0, 9, 0, 0, 20],
  [0, 0, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0]
];
const source = 0;
const sink = 5;
const maxFlow = maxFlow(graph, source, sink);
console.log(maxFlow); // Output: 23
  `,
  implementation: `
function maxFlow(graph: number[][], source: number, sink: number): number {
  let flow = 0;
  const n = graph.length;
  
  while (true) {
    // Find augmenting path using BFS
    const parent = new Array(n).fill(-1);
    const queue = [source];
    parent[source] = source;
    
    while (queue.length > 0) {
      const u = queue.shift()!;
      for (let v = 0; v < n; v++) {
        if (parent[v] === -1 && graph[u][v] > 0) {
          parent[v] = u;
          queue.push(v);
          if (v === sink) break;
        }
      }
    }
    
    if (parent[sink] === -1) break;
    
    // Find minimum residual capacity
    let pathFlow = Infinity;
    let v = sink;
    while (v !== source) {
      const u = parent[v];
      pathFlow = Math.min(pathFlow, graph[u][v]);
      v = u;
    }
    
    // Update residual capacities
    v = sink;
    while (v !== source) {
      const u = parent[v];
      graph[u][v] -= pathFlow;
      graph[v][u] += pathFlow;
      v = u;
    }
    
    flow += pathFlow;
  }
  
  return flow;
}
  `,
  category: "graph",
};
