import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const EditDistancePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Edit Distance
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(mn) &nbsp;|&nbsp; Space: O(mn) &nbsp;|&nbsp; Use: String similarity and transformation
    </div>

    <PseudocodeDisplay
      code={`EDIT-DISTANCE(s, t):
    // s and t are input strings
    // Returns minimum number of operations to transform s to t
    m ← length(s)
    n ← length(t)
    dp[0..m][0..n] ← 0
    
    // Initialize first row and column
    for i ← 0 to m:
        dp[i][0] ← i
    for j ← 0 to n:
        dp[0][j] ← j
    
    // Fill dp table
    for i ← 1 to m:
        for j ← 1 to n:
            if s[i-1] = t[j-1]:
                dp[i][j] ← dp[i-1][j-1]
            else:
                dp[i][j] ← 1 + min(
                    dp[i-1][j],    // deletion
                    dp[i][j-1],    // insertion
                    dp[i-1][j-1]   // substitution
                )
    
    return dp[m][n]

// Example:
// Input: s = "kitten", t = "sitting"
//
// dp table:
//    s i t t i n g
// k  1 2 3 4 5 6 7
// i  2 1 2 3 4 5 6
// t  3 2 1 2 3 4 5
// t  4 3 2 1 2 3 4
// e  5 4 3 2 2 3 4
// n  6 5 4 3 3 2 3
//
// Operations:
// 1. kitten → sitten (substitute 'k' with 's')
// 2. sitten → sittin (substitute 'e' with 'i')
// 3. sittin → sitting (insert 'g')
//
// Edit distance: 3`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Dynamic programming solution for string transformation</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handles three operations: insertion, deletion, substitution</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Can be extended to include transposition and other operations</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(mn) - filling dp table of size m×n</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(mn) - for dp table</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Can be optimized to O(min(m,n)) space</span>
        </div>
      </div>
    </div>
  </div>
);
