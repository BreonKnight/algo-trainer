import { ChevronRight } from "lucide-react";

export const GreedyPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Greedy</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Make locally
      optimal choices
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Activity Selection
ACTIVITY-SELECTION(S):
    sort S by finish time
    A = [S[0]]
    last = 0
    for i from 1 to n-1:
        if S[i].start ≥ S[last].finish:
            A.append(S[i])
            last = i
    return A

// Fractional Knapsack
KNAPSACK(W, V, C):
    sort items by value/weight ratio
    total = 0
    for i from 0 to n-1:
        if C ≥ W[i]:
            total += V[i]
            C -= W[i]
        else:
            total += (C/W[i]) * V[i]
            break
    return total

// Huffman Coding
HUFFMAN(C):
    Q = priority queue of C
    for i from 1 to n-1:
        x = EXTRACT-MIN(Q)
        y = EXTRACT-MIN(Q)
        z = new node
        z.left = x
        z.right = y
        z.freq = x.freq + y.freq
        INSERT(Q, z)
    return EXTRACT-MIN(Q)

// Dijkstra's Algorithm
DIJKSTRA(G, s):
    dist = [∞] * n
    prev = [NIL] * n
    dist[s] = 0
    Q = priority queue of all vertices
    while Q is not empty:
        u = EXTRACT-MIN(Q)
        for each v in G.adj[u]:
            if dist[v] > dist[u] + G.weight(u, v):
                dist[v] = dist[u] + G.weight(u, v)
                prev[v] = u
    return (dist, prev)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Order items by
        some criterion
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Select:</span> Choose best
        option at each step
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Modify
        remaining options
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Activity Selection
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`S = [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14)]
Sorted by finish time:
[(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14)]
Selected activities:
[(1,4), (5,7), (8,11), (12,14)]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Fractional Knapsack
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`W = [10, 20, 30]
V = [60, 100, 120]
C = 50
Sorted by value/weight:
[(6, 10), (5, 20), (4, 30)]
Selected items:
10 units of item 1 (value: 60)
20 units of item 2 (value: 100)
20 units of item 3 (value: 80)
Total value: 240`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Huffman Coding</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`C = [('a', 5), ('b', 9), ('c', 12), ('d', 13), ('e', 16), ('f', 45)]
Tree construction:
Merge a(5) + b(9) = 14
Merge c(12) + d(13) = 25
Merge e(16) + 14 = 30
Merge 25 + 30 = 55
Merge f(45) + 55 = 100
Resulting codes:
f: 0
c: 100
d: 101
a: 1100
b: 1101
e: 111`}
      </pre>
    </div>
  </div>
);
