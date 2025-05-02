import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const InsertionSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Insertion Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Sorting array
      in-place
    </div>

    <PseudocodeDisplay code={`# Insertion Sort: Build sorted array one element at a time
# Input: Array A[1..n] of n elements
# Output: Array A sorted in non-decreasing order

INSERTION-SORT(A)
    n ← length[A]    # Number of elements in array
    
    # Start from second element (index 2)
    for j ← 2 to n do
        key ← A[j]    # Current element to insert
        i ← j - 1     # Start comparing with previous element
        
        # Move elements greater than key one position ahead
        while i > 0 and A[i] > key do
            A[i+1] ← A[i]    # Shift element right
            i ← i - 1         # Move left
        end while
        
        A[i+1] ← key    # Insert key in correct position
    end for

# Example:
# Input: A = [5, 2, 4, 6, 1, 3]
# Pass 1: [2, 5, 4, 6, 1, 3]  # Insert 2
# Pass 2: [2, 4, 5, 6, 1, 3]  # Insert 4
# Pass 3: [2, 4, 5, 6, 1, 3]  # Insert 6
# Pass 4: [1, 2, 4, 5, 6, 3]  # Insert 1
# Pass 5: [1, 2, 3, 4, 5, 6]  # Insert 3
# Output: [1, 2, 3, 4, 5, 6]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Select: Current element to insert</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Shift: Elements greater than current element</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Current element in correct position</span>
      </div>
    </div>
  </div>
);
