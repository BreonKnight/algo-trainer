import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const TwoSumTwoPointersPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Two Sum (Two Pointers)
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find pairs that sum to target
    </div>

    <PseudocodeDisplay
      code={`# Two Sum (Two Pointers): Find pairs that sum to target
# Input: Array A[1..n], target value t
# Output: Indices (i, j) where A[i] + A[j] = t, or (-1, -1) if not found

Algorithm TWO-SUM-TWO-POINTERS(A, t)
    # Sort array for two pointers approach
    A ← SORT(A)
    left ← 1
    right ← length[A]

    while left < right do
        sum ← A[left] + A[right]
        if sum = t then
            return (left, right)
        else if sum < t then
            left ← left + 1
        else
            right ← right - 1
        end if
    end while

    return (-1, -1)

# Example:
# Input: A = [2, 7, 11, 15], t = 9
#
# Step 1: A = [2, 7, 11, 15], left = 1, right = 4
# Step 2: sum = 2 + 15 = 17 > 9, right = 3
# Step 3: sum = 2 + 11 = 13 > 9, right = 2
# Step 4: sum = 2 + 7 = 9 = t, return (1, 2)
#
# Output: (1, 2)`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort the input array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize left and right pointers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Move pointers based on sum comparison with target</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return indices when sum equals target</span>
      </div>
    </div>
  </div>
);
