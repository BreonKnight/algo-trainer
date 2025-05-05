import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TwoSumDictionaryPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Two Sum (Dictionary)</span>
      <span className="ml-2 text-xs text-secondary">(Array)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Find pairs that sum to target
    </div>

    <PseudocodeDisplay
      code={`# Two Sum (Dictionary): Find pairs that sum to target
# Input: Array A[1..n], target value t
# Output: Indices (i, j) where A[i] + A[j] = t, or (-1, -1) if not found

Algorithm TWO-SUM-DICTIONARY(A, t)
    # Initialize dictionary to store value-index pairs
    D ← empty dictionary

    for i ← 1 to length[A] do
        complement ← t - A[i]
        if complement ∈ D then
            return (D[complement], i)
        end if
        D[A[i]] ← i
    end for

    return (-1, -1)

# Example:
# Input: A = [2, 7, 11, 15], t = 9
#
# Step 1: i = 1, A[1] = 2, complement = 7, D = {2: 1}
# Step 2: i = 2, A[2] = 7, complement = 2 ∈ D, return (1, 2)
#
# Output: (1, 2)`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize empty dictionary</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>For each element, calculate complement</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check if complement exists in dictionary</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Store current element and index in dictionary</span>
      </div>
    </div>
  </div>
);
