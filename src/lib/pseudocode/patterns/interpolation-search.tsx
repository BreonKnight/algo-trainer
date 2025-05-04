import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const InterpolationSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Interpolation Search</span>
      <span className="ml-2 text-xs text-secondary">(Search)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find
      element in uniformly distributed sorted array
    </div>

    <PseudocodeDisplay code={`# Interpolation Search: Find element in uniformly distributed sorted array
# Input: Sorted array A[1..n], target value x
# Output: Index of x in A if found, -1 otherwise

Algorithm INTERPOLATION-SEARCH(A, x)
    low ← 1
    high ← length[A]

    while low ≤ high and x ≥ A[low] and x ≤ A[high] do
        # Calculate position using interpolation formula
        pos ← low + ((x - A[low]) * (high - low)) / (A[high] - A[low])

        if A[pos] = x then
            return pos
        end if

        if A[pos] < x then
            low ← pos + 1
        else
            high ← pos - 1
        end if
    end while

    return -1

# Example:
# Input: A = [10, 20, 30, 40, 50, 60, 70, 80, 90], x = 50
#
# Step 1: low = 1, high = 9
#         pos = 1 + ((50-10)*(9-1))/(90-10) = 5
#         A[5] = 50
#
# Output: 5`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize search boundaries</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Calculate position using interpolation formula</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Adjust boundaries based on comparison</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return index if found, -1 otherwise</span>
      </div>
    </div>
  </div>
);
