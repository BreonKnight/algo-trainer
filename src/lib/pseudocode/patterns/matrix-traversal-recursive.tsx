import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MatrixTraversalRecursivePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Recursive Matrix Traversal</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(mn) &nbsp;|&nbsp; Space: O(m+n) &nbsp;|&nbsp; Use: Recursive
      matrix traversal
    </div>

    <PseudocodeDisplay code={`DFS-TRAVERSE(A, i, j, visited)
    let m, n be the dimensions of A
    if i < 1 or i > m or j < 1 or j > n or visited[i, j] = TRUE
        then return
    
    visited[i, j] ← TRUE
    result ← A[i, j]
    
    // Visit adjacent cells
    DFS-TRAVERSE(A, i-1, j, visited)    // Up
    DFS-TRAVERSE(A, i+1, j, visited)    // Down
    DFS-TRAVERSE(A, i, j-1, visited)    // Left
    DFS-TRAVERSE(A, i, j+1, visited)    // Right
    
    return result

RECURSIVE-TRAVERSE(A)
    let m, n be the dimensions of A
    let visited[1‥m, 1‥n] be a new array
    let result[1‥m·n] be a new array
    let idx ← 1
    
    for i ← 1 to m
        do for j ← 1 to n
            do visited[i, j] ← FALSE
    
    for i ← 1 to m
        do for j ← 1 to n
            do if visited[i, j] = FALSE
                then result[idx] ← DFS-TRAVERSE(A, i, j, visited)
                    idx ← idx + 1
    
    return result

// Example:
// Input: A = [1 2 3]
//            [4 5 6]
//            [7 8 9]
// 
// Starting from (1,1):
// 1. Visit (1,1) = 1
// 2. Visit (2,1) = 4
// 3. Visit (3,1) = 7
// 4. Visit (3,2) = 8
// 5. Visit (3,3) = 9
// 6. Visit (2,3) = 6
// 7. Visit (2,2) = 5
// 8. Visit (1,2) = 2
// 9. Visit (1,3) = 3
// 
// Output: [1, 4, 7, 8, 9, 6, 5, 2, 3]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create visited matrix and result array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>DFS: Recursively visit unvisited adjacent cells</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Collect: Store visited values in result array</span>
      </div>
    </div>
  </div>
);
