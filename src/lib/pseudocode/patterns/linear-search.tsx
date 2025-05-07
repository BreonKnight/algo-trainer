import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const LinearSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Linear Search</span>
      <span className="ml-2 text-xs text-secondary">(Search)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find element in unsorted array
    </div>

    <PseudocodeDisplay
      code={`# Linear Search: Find element in unsorted array
# Input: Array A[1..n], target value x
# Output: Index of x in A if found, -1 otherwise

Algorithm LINEAR-SEARCH(A, x)
    for i ← 1 to length[A] do
        if A[i] = x then
            return i
        end if
    end for
    return -1

# Example:
# Input: A = [4, 2, 7, 1, 3], x = 7
#
# Step 1: i = 1, A[1] = 4 ≠ 7
# Step 2: i = 2, A[2] = 2 ≠ 7
# Step 3: i = 3, A[3] = 7 = 7
#
# Output: 3`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize loop through array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compare each element with target</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return index if found</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return -1 if not found</span>
      </div>
    </div>
  </div>
);
