import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const SuffixArrayPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Suffix Array
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient string operations
    </div>

    <PseudocodeDisplay
      code={`# Suffix Array: Efficient string operations
# Input: String S[1..n]
# Output: Suffix array SA[1..n] where SA[i] is starting index of i-th smallest suffix

Algorithm SUFFIX-ARRAY(S)
    n ← length[S]
    # Initialize suffix array with indices
    SA ← array of size n
    for i ← 1 to n do
        SA[i] ← i
    end for

    # Sort suffixes based on first character
    sort SA using S[SA[i]] as key

    # Sort suffixes based on increasing length
    for k ← 1 to n do
        # Create equivalence classes
        rank ← array of size n
        rank[SA[1]] ← 0
        for i ← 2 to n do
            if S[SA[i]] = S[SA[i-1]] then
                rank[SA[i]] ← rank[SA[i-1]]
            else
                rank[SA[i]] ← rank[SA[i-1]] + 1
            end if
        end for

        # Sort suffixes based on first 2^k characters
        temp ← array of size n
        for i ← 1 to n do
            temp[i] ← SA[i]
        end for

        for i ← 1 to n do
            SA[i] ← temp[i]
            if SA[i] > k then
                SA[i] ← SA[i] - k
            else
                SA[i] ← SA[i] + n - k
            end if
        end for

        # Update equivalence classes
        new_rank ← array of size n
        new_rank[SA[1]] ← 0
        for i ← 2 to n do
            if rank[SA[i]] = rank[SA[i-1]] and
               rank[SA[i]+k] = rank[SA[i-1]+k] then
                new_rank[SA[i]] ← new_rank[SA[i-1]]
            else
                new_rank[SA[i]] ← new_rank[SA[i-1]] + 1
            end if
        end for
        rank ← new_rank
    end for

    return SA

# Example:
# Input: S = "banana"
#
# Step 1: SA = [1, 2, 3, 4, 5, 6]
# Step 2: Sort by first character
#         SA = [2, 1, 3, 5, 4, 6]
# Step 3: Sort by first 2 characters
#         SA = [2, 1, 3, 5, 4, 6]
# Step 4: Sort by first 4 characters
#         SA = [6, 4, 2, 1, 3, 5]
#
# Output: [6, 4, 2, 1, 3, 5]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize suffix array with indices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort suffixes based on first character</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Create and update equivalence classes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort suffixes based on increasing length</span>
      </div>
    </div>
  </div>
);
