import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const networkFlowPattern: AlgorithmPattern = {
  title: "Network Flow",
  description:
    "A collection of algorithms for solving maximum flow problems in networks, including Dinic's, Edmonds-Karp, and Ford-Fulkerson algorithms.",
  timeComplexity:
    "Dinic's: O(V²E), Edmonds-Karp: O(VE²), Ford-Fulkerson: O(Ef) where f is the maximum flow",
  spaceComplexity: "O(V²)",
  category: "Graph",
  pseudocode: `DINIC(G, s, t)
1  flow = 0
2  level = [0] * G.V
3  ptr = [0] * G.V
4  while BFS-LEVEL(G, s, t, level)
5      ptr = [0] * G.V
6      while True
7          f = DFS-FLOW(G, s, t, ∞, level, ptr)
8          if f == 0
9              break
10         flow = flow + f
11 return flow

BFS-LEVEL(G, s, t, level)
1  level = [-1] * G.V
2  level[s] = 0
3  Q = {s}
4  while Q ≠ ∅
5      v = DEQUEUE(Q)
6      for each edge e in G.adj[v]
7          if e.capacity > 0 and level[e.to] < 0
8              level[e.to] = level[v] + 1
9              ENQUEUE(Q, e.to)
10 return level[t] ≠ -1

DFS-FLOW(G, v, t, f, level, ptr)
1  if v == t
2      return f
3  while ptr[v] < G.adj[v].length
4      e = G.adj[v][ptr[v]]
5      if e.capacity > 0 and level[v] < level[e.to]
6          d = DFS-FLOW(G, e.to, t, min(f, e.capacity), level, ptr)
7          if d > 0
8              e.capacity = e.capacity - d
9              G.adj[e.to][e.rev].capacity = G.adj[e.to][e.rev].capacity + d
10             return d
11     ptr[v] = ptr[v] + 1
12 return 0

EDMONDS-KARP(G, s, t)
1  flow = 0
2  parent = [-1] * G.V
3  while BFS(G, s, t, parent)
4      path_flow = ∞
5      v = t
6      while v ≠ s
7          u = parent[v]
8          for each edge e in G.adj[u]
9              if e.to == v
10                 path_flow = min(path_flow, e.capacity)
11                 break
12         v = u
13     v = t
14     while v ≠ s
15         u = parent[v]
16         for each edge e in G.adj[u]
17             if e.to == v
18                 e.capacity = e.capacity - path_flow
19                 G.adj[e.to][e.rev].capacity = G.adj[e.to][e.rev].capacity + path_flow
20                 break
21         v = u
22     flow = flow + path_flow
23 return flow

FORD-FULKERSON(G, s, t)
1  flow = 0
2  parent = [-1] * G.V
3  while DFS(G, s, t, parent)
4      path_flow = ∞
5      v = t
6      while v ≠ s
7          u = parent[v]
8          for each edge e in G.adj[u]
9              if e.to == v
10                 path_flow = min(path_flow, e.capacity)
11                 break
12         v = u
13     v = t
14     while v ≠ s
15         u = parent[v]
16         for each edge e in G.adj[u]
17             if e.to == v
18                 e.capacity = e.capacity - path_flow
19                 G.adj[e.to][e.rev].capacity = G.adj[e.to][e.rev].capacity + path_flow
20                 break
21         v = u
22     flow = flow + path_flow
23 return flow`,
  example: `Graph:
    s
   / \
  1   2
 /     \
a       b
 \     /
  3   4
   \ /
    t

Maximum flow = 5`,
  implementation: `from collections import deque
from typing import List, Dict, Tuple

class Edge:
    def __init__(self, to: int, rev: int, capacity: int):
        self.to = to
        self.rev = rev
        self.capacity = capacity

class NetworkFlow:
    def __init__(self, n: int):
        self.size = n
        self.graph: List[List[Edge]] = [[] for _ in range(n)]
    
    def add_edge(self, fr: int, to: int, cap: int) -> None:
        forward = Edge(to, len(self.graph[to]), cap)
        backward = Edge(fr, len(self.graph[fr]), 0)
        self.graph[fr].append(forward)
        self.graph[to].append(backward)
    
    def bfs_level(self, s: int, t: int, level: List[int]) -> bool:
        level[:] = [-1] * self.size
        level[s] = 0
        q = deque([s])
        
        while q:
            v = q.popleft()
            for edge in self.graph[v]:
                if edge.capacity > 0 and level[edge.to] < 0:
                    level[edge.to] = level[v] + 1
                    q.append(edge.to)
        
        return level[t] != -1
    
    def dfs_flow(self, v: int, t: int, f: int, level: List[int], ptr: List[int]) -> int:
        if v == t:
            return f
        
        while ptr[v] < len(self.graph[v]):
            edge = self.graph[v][ptr[v]]
            if edge.capacity > 0 and level[v] < level[edge.to]:
                d = self.dfs_flow(edge.to, t, min(f, edge.capacity), level, ptr)
                if d > 0:
                    edge.capacity -= d
                    self.graph[edge.to][edge.rev].capacity += d
                    return d
            ptr[v] += 1
        
        return 0
    
    def dinic(self, s: int, t: int) -> int:
        flow = 0
        level = [0] * self.size
        ptr = [0] * self.size
        
        while self.bfs_level(s, t, level):
            ptr[:] = [0] * self.size
            while True:
                f = self.dfs_flow(s, t, float('inf'), level, ptr)
                if f == 0:
                    break
                flow += f
        
        return flow
    
    def edmonds_karp(self, s: int, t: int) -> int:
        flow = 0
        parent = [-1] * self.size
        
        def bfs() -> bool:
            parent[:] = [-1] * self.size
            parent[s] = -2
            q = deque([s])
            
            while q:
                v = q.popleft()
                for edge in self.graph[v]:
                    if edge.capacity > 0 and parent[edge.to] == -1:
                        parent[edge.to] = v
                        if edge.to == t:
                            return True
                        q.append(edge.to)
            
            return False
        
        while bfs():
            path_flow = float('inf')
            v = t
            while v != s:
                u = parent[v]
                for edge in self.graph[u]:
                    if edge.to == v:
                        path_flow = min(path_flow, edge.capacity)
                        break
                v = u
            
            v = t
            while v != s:
                u = parent[v]
                for edge in self.graph[u]:
                    if edge.to == v:
                        edge.capacity -= path_flow
                        self.graph[edge.to][edge.rev].capacity += path_flow
                        break
                v = u
            
            flow += path_flow
        
        return flow
    
    def ford_fulkerson(self, s: int, t: int) -> int:
        flow = 0
        parent = [-1] * self.size
        
        def dfs(v: int, min_cap: int) -> int:
            if v == t:
                return min_cap
            
            for edge in self.graph[v]:
                if edge.capacity > 0 and parent[edge.to] == -1:
                    parent[edge.to] = v
                    f = dfs(edge.to, min(min_cap, edge.capacity))
                    if f > 0:
                        edge.capacity -= f
                        self.graph[edge.to][edge.rev].capacity += f
                        return f
            
            return 0
        
        while True:
            parent[:] = [-1] * self.size
            parent[s] = -2
            f = dfs(s, float('inf'))
            if f == 0:
                break
            flow += f
        
        return flow

# Example usage
n = 6  # Number of vertices
s = 0  # Source
t = 5  # Sink

# Create network flow instance
nf = NetworkFlow(n)

# Add edges (from, to, capacity)
edges = [
    (0, 1, 10),
    (0, 2, 10),
    (1, 2, 2),
    (1, 3, 4),
    (1, 4, 8),
    (2, 4, 9),
    (3, 5, 10),
    (4, 3, 6),
    (4, 5, 10)
]

for fr, to, cap in edges:
    nf.add_edge(fr, to, cap)

# Calculate maximum flow using different algorithms
dinic_flow = nf.dinic(s, t)
print(f"Dinic's algorithm max flow: {dinic_flow}")

edmonds_karp_flow = nf.edmonds_karp(s, t)
print(f"Edmonds-Karp algorithm max flow: {edmonds_karp_flow}")

ford_fulkerson_flow = nf.ford_fulkerson(s, t)
print(f"Ford-Fulkerson algorithm max flow: {ford_fulkerson_flow}")`,
};
