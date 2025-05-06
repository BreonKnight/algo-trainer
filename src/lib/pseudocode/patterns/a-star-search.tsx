import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const AStarSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        A* Search
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(b^d) &nbsp;|&nbsp; Space: O(b^d) &nbsp;|&nbsp; Use: Optimal path finding with
      heuristics
    </div>

    <PseudocodeDisplay
      code={`A-STAR-SEARCH(G, start, goal)
    let openSet be a new priority queue
    let gScore[1‥n] be a new array
    let fScore[1‥n] be a new array
    let cameFrom[1‥n] be a new array

    for each vertex v in G.V
        do gScore[v] ← ∞
           fScore[v] ← ∞
           cameFrom[v] ← null

    gScore[start] ← 0
    fScore[start] ← h(start, goal)
    openSet.insert(start, fScore[start])

    while openSet is not empty
        do current ← openSet.extract_min()
           if current = goal
               then return RECONSTRUCT-PATH(cameFrom, current)

           for each neighbor in G.adj[current]
               do tentative_gScore ← gScore[current] + d(current, neighbor)
                  if tentative_gScore < gScore[neighbor]
                      then cameFrom[neighbor] ← current
                           gScore[neighbor] ← tentative_gScore
                           fScore[neighbor] ← gScore[neighbor] + h(neighbor, goal)
                           if neighbor not in openSet
                               then openSet.insert(neighbor, fScore[neighbor])

    return null

RECONSTRUCT-PATH(cameFrom, current)
    let path be a new array
    while current ≠ null
        do path.append(current)
           current ← cameFrom[current]
    return reverse(path)

// Example:
// Input: G = {
//   V = {A, B, C, D, E},
//   E = {(A,B,4), (A,C,2), (B,D,5), (C,D,1), (C,E,3), (D,E,1)}
// }
// start = A, goal = E
//
// Initial state:
//   openSet = {(A,6)}
//   gScore = {A:0, B:∞, C:∞, D:∞, E:∞}
//   fScore = {A:6, B:∞, C:∞, D:∞, E:∞}
//
// First iteration:
//   current = A
//   openSet = {(B,9), (C,5)}
//   gScore = {A:0, B:4, C:2, D:∞, E:∞}
//   fScore = {A:6, B:9, C:5, D:∞, E:∞}
//
// Second iteration:
//   current = C
//   openSet = {(B,9), (D,4), (E,5)}
//   gScore = {A:0, B:4, C:2, D:3, E:5}
//   fScore = {A:6, B:9, C:5, D:4, E:5}
//
// Final path: A → C → D → E`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set up priority queue and score arrays</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Expand nodes with lowest f-score</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Maintain g-scores and reconstruct path</span>
      </div>
    </div>
  </div>
);
