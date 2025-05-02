import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MatrixSpiralTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Spiral Traversal</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(mn) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Traverse matrix
      in spiral order
    </div>

    <PseudocodeDisplay code={`SPIRAL-TRAVERSE(A)
    let m, n be the dimensions of A
    let result[1‥m·n] be a new array
    let top ← 1, bottom ← m
    let left ← 1, right ← n
    let idx ← 1
    
    while top ≤ bottom and left ≤ right
        do for i ← left to right
            do result[idx] ← A[top, i]
                idx ← idx + 1
            top ← top + 1
            
            for i ← top to bottom
                do result[idx] ← A[i, right]
                    idx ← idx + 1
                right ← right - 1
                
                if top ≤ bottom
                    then for i ← right downto left
                        do result[idx] ← A[bottom, i]
                            idx ← idx + 1
                        bottom ← bottom - 1
                        
                        if left ≤ right
                            then for i ← bottom downto top
                                do result[idx] ← A[i, left]
                                    idx ← idx + 1
                                left ← left + 1
    return result

// Example:
// Input: A = [1  2  3  4]
//            [5  6  7  8]
//            [9 10 11 12]
// 
// Traversal order:
// 1. Top row: 1, 2, 3, 4
// 2. Right column: 8, 12
// 3. Bottom row: 11, 10, 9
// 4. Left column: 5
// 5. Middle: 6, 7
// 
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set boundaries for spiral traversal</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traverse: Move right, down, left, up in spiral pattern</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Adjust boundaries after each complete spiral</span>
      </div>
    </div>
  </div>
);
