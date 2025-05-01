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
# Example usage:
graph = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
]
source = 0
sink = 5
max_flow = max_flow(graph, source, sink)
print(max_flow)  # Output: 23
  `,
  implementation: `from typing import List
import math

def max_flow(graph: List[List[int]], source: int, sink: int) -> int:
    """
    Find the maximum flow in a flow network using the Edmonds-Karp algorithm.
    
    Args:
        graph: Adjacency matrix representing the flow network
        source: Source node
        sink: Sink node
    
    Returns:
        Maximum flow from source to sink
    """
    flow = 0
    n = len(graph)
    
    while True:
        # Find augmenting path using BFS
        parent = [-1] * n
        queue = [source]
        parent[source] = source
        
        while queue:
            u = queue.pop(0)
            for v in range(n):
                if parent[v] == -1 and graph[u][v] > 0:
                    parent[v] = u
                    queue.append(v)
                    if v == sink:
                        break
        
        if parent[sink] == -1:
            break
        
        # Find minimum residual capacity
        path_flow = math.inf
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

# Example usage
graph = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
]
source = 0
sink = 5
max_flow_value = max_flow(graph, source, sink)
print(f"Maximum flow: {max_flow_value}")  # 23`,
  category: "graph",
};
