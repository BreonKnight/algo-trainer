import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyDinicPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dinic's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V²E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding maximum
      flow in networks
    </div>

    <PseudocodeDisplay code={`// Standard Dinic's Algorithm
def dinic(graph, source, sink):
    # Initialize residual graph and max flow
    residual = {u: {v: graph[u][v] for v in graph[u]} 
                for u in graph}
    max_flow = 0
    
    def bfs():
        # Build level graph using BFS
        level = {source: 0}
        queue = [source]
        
        while queue:
            u = queue.pop(0)
            for v in residual[u]:
                if v not in level and residual[u][v] > 0:
                    level[v] = level[u] + 1
                    if v == sink:
                        return level
                    queue.append(v)
        return None
    
    def dfs(u, flow):
        if u == sink:
            return flow
        
        for v in residual[u]:
            if level[v] == level[u] + 1 and residual[u][v] > 0:
                path_flow = dfs(v, min(flow, residual[u][v]))
                if path_flow > 0:
                    residual[u][v] -= path_flow
                    residual[v][u] += path_flow
                    return path_flow
        return 0
    
    # Find blocking flows
    while True:
        level = bfs()
        if not level:
            break
        
        while True:
            flow = dfs(source, float('inf'))
            if flow == 0:
                break
            max_flow += flow
    
    return max_flow`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Residual graph and max flow</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Build: Level graph using BFS</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Blocking flow using DFS</span>
      </div>
    </div>
  </div>
);
