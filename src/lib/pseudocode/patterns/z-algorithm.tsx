import { ChevronRight } from "lucide-react";

export const ZAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Z Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(String)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Pattern matching
      in string
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Z Algorithm: Pattern matching in string
# Input: String S[1..n]
# Output: Array Z[1..n] where Z[i] is length of longest substring starting at i that is also a prefix

Algorithm Z-ALGORITHM(S)
    n ← length[S]
    Z[1..n] ← [0, 0, ..., 0]
    Z[1] ← n
    L ← 1
    R ← 1
    
    for i ← 2 to n do
        if i > R then
            # Case 1: i outside current Z-box
            L ← i
            R ← i
            while R ≤ n and S[R-L+1] = S[R] do
                R ← R + 1
            Z[i] ← R - L
            R ← R - 1
        else
            # Case 2: i inside current Z-box
            k ← i - L + 1
            if Z[k] < R - i + 1 then
                # Case 2a: Z[k] < remaining
                Z[i] ← Z[k]
            else
                # Case 2b: Z[k] ≥ remaining
                L ← i
                while R ≤ n and S[R-L+1] = S[R] do
                    R ← R + 1
                Z[i] ← R - L
                R ← R - 1
    return Z

# Example:
# Input: S = "aabxaabxcaabxaabxay"
# 
# Step 1: Initialize Z[1] = 19 (length of S)
# Step 2: i=2, outside Z-box, find Z[2] = 1
# Step 3: i=3, outside Z-box, find Z[3] = 0
# Step 4: i=4, outside Z-box, find Z[4] = 0
# Step 5: i=5, outside Z-box, find Z[5] = 4
# ... continue until i=19
# 
# Output: Z = [19, 1, 0, 0, 4, 1, 0, 0, 0, 8, 1, 0, 0, 5, 1, 0, 0, 1, 0]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize Z array and first element</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Maintain Z-box boundaries (L, R)</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handle two cases: outside and inside Z-box</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute Z[i] based on position and previous values</span>
      </div>
    </div>
  </div>
);
