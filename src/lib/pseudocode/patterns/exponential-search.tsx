import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const ExponentialSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Exponential Search
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(log i) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find element in unbounded sorted
      array
    </div>

    <PseudocodeDisplay
      code={`# Exponential Search: Find element in unbounded sorted array
# Input: Sorted array A[1..n], target value x
# Output: Index of x in A if found, -1 otherwise

Algorithm EXPONENTIAL-SEARCH(A, x)
    n ← length[A]

    # If x is at first position
    if A[1] = x then
        return 1
    end if

    # Find range for binary search
    i ← 1
    while i < n and A[i] ≤ x do
        i ← i * 2
    end while

    # Binary search in found range
    return BINARY-SEARCH(A, i/2, min(i, n), x)

Algorithm BINARY-SEARCH(A, low, high, x)
    while low ≤ high do
        mid ← ⌊(low + high)/2⌋
        if A[mid] = x then
            return mid
        else if A[mid] < x then
            low ← mid + 1
        else
            high ← mid - 1
        end if
    end while
    return -1

# Example:
# Input: A = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], x = 70
#
# Step 1: i = 1, A[1] = 10 ≠ 70
# Step 2: i = 2, A[2] = 20 ≤ 70
# Step 3: i = 4, A[4] = 40 ≤ 70
# Step 4: i = 8, A[8] = 80 > 70
# Step 5: Binary search in range [4,8]
#         mid = 6, A[6] = 60 < 70
#         mid = 7, A[7] = 70 = 70
#
# Output: 7`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check if element is at first position</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find range by exponentially increasing index</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Perform binary search in found range</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return index if found, -1 otherwise</span>
      </div>
    </div>
  </div>
);
