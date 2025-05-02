import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BFSPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Breadth-First Search</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Level-order
      traversal and shortest path in unweighted graphs
    </div>

    <PseudocodeDisplay code={`// Standard BFS
BFS(G, s):
    for each vertex u in G.V - {s}:
        u.color = WHITE
        u.d = ∞
        u.π = NIL
    s.color = GRAY
    s.d = 0
    s.π = NIL
    Q = ∅
    ENQUEUE(Q, s)
    while Q ≠ ∅:
        u = DEQUEUE(Q)
        for each v in G.adj[u]:
            if v.color == WHITE:
                v.color = GRAY
                v.d = u.d + 1
                v.π = u
                ENQUEUE(Q, v)
        u.color = BLACK

// Shortest Path
SHORTEST-PATH(G, s, t):
    BFS(G, s)
    if t.d == ∞:
        return NIL
    path = []
    u = t
    while u ≠ NIL:
        path.append(u)
        u = u.π
    return reverse(path)

// Connected Components
CONNECTED-COMPONENTS(G):
    for each vertex u in G.V:
        u.color = WHITE
        u.π = NIL
    cc = 0
    for each vertex u in G.V:
        if u.color == WHITE:
            cc += 1
            BFS-VISIT(G, u, cc)
    return cc

// Level Order Traversal
LEVEL-ORDER(T):
    if T.root == NIL:
        return []
    Q = ∅
    ENQUEUE(Q, T.root)
    result = []
    while Q ≠ ∅:
        level_size = Q.size
        level = []
        for i from 1 to level_size:
            u = DEQUEUE(Q)
            level.append(u.key)
            if u.left ≠ NIL:
                ENQUEUE(Q, u.left)
            if u.right ≠ NIL:
                ENQUEUE(Q, u.right)
        result.append(level)
    return result`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        vertices to unvisited
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Explore:</span> Visit
        neighbors level by level
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Mark:</span> Track visited
        vertices and distances
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard BFS</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
    1
   / \\
  2   3
 / \\   \\
4   5   6

BFS starting from 1:
Level 0: [1]
Level 1: [2, 3]
Level 2: [4, 5, 6]

Visited order: 1, 2, 3, 4, 5, 6`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Shortest Path</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
    1
   / \\
  2   3
 / \\   \\
4   5   6

Shortest path from 1 to 6:
Path: [1, 3, 6]
Distance: 2`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Connected Components
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
1-2-3  4-5  6

Connected components:
Component 1: [1, 2, 3]
Component 2: [4, 5]
Component 3: [6]
Total components: 3`}
      </pre>
    </div>
  </div>
);
