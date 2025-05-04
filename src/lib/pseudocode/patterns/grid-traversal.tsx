import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GridTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Grid Traversal</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(mn) &nbsp;|&nbsp; Space: O(mn) &nbsp;|&nbsp; Use: Matrix traversal
      and path finding
    </div>

    <PseudocodeDisplay code={`GRID-TRAVERSAL(G)
    let m be the number of rows in G
    let n be the number of columns in G
    let visited[1‥m][1‥n] be a new array
    let result[1‥m][1‥n] be a new array

    for i ← 1 to m
        do for j ← 1 to n
            do visited[i][j] ← false
               result[i][j] ← 0

    let queue be a new empty queue
    queue.enqueue((1,1))
    visited[1][1] ← true
    result[1][1] ← 1

    while queue is not empty
        do (i,j) ← queue.dequeue()
           for each (di,dj) in [(0,1), (1,0), (0,-1), (-1,0)]
               do ni ← i + di
                  nj ← j + dj
                  if 1 ≤ ni ≤ m and 1 ≤ nj ≤ n and not visited[ni][nj]
                      then visited[ni][nj] ← true
                           result[ni][nj] ← result[i][j] + 1
                           queue.enqueue((ni,nj))

    return result

// Example:
// Input: G = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]
//
// Initial state:
//   visited = [
//     [true, false, false],
//     [false, false, false],
//     [false, false, false]
//   ]
//   result = [
//     [1, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
//   ]
//
// After first iteration:
//   visited = [
//     [true, true, false],
//     [true, false, false],
//     [false, false, false]
//   ]
//   result = [
//     [1, 2, 0],
//     [2, 0, 0],
//     [0, 0, 0]
//   ]
//
// Final result:
//   [
//     [1, 2, 3],
//     [2, 0, 4],
//     [3, 4, 5]
//   ]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create visited and result matrices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Use BFS to traverse grid in all directions</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Track visited cells and distance from start</span>
      </div>
    </div>
  </div>
);
