import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const PrefixSumsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Prefix Sums
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Range sum queries
    </div>

    <PseudocodeDisplay
      code={`PREFIX-SUMS(A)
    let n be the length of A
    let prefix[0‥n] be a new array
    prefix[0] ← 0

    for i ← 1 to n
        do prefix[i] ← prefix[i-1] + A[i]

    return prefix

RANGE-SUM(prefix, l, r)
    return prefix[r] - prefix[l-1]

// Example:
// Input: A = [1, 2, 3, 4, 5]
//
// prefix[0] = 0
// prefix[1] = 0 + 1 = 1
// prefix[2] = 1 + 2 = 3
// prefix[3] = 3 + 3 = 6
// prefix[4] = 6 + 4 = 10
// prefix[5] = 10 + 5 = 15
//
// Range sum from index 2 to 4:
// RANGE-SUM(prefix, 2, 4) = prefix[4] - prefix[1] = 10 - 1 = 9
//
// Output: prefix = [0, 1, 3, 6, 10, 15]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create prefix array with size n+1</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute: Cumulative sums in prefix array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Query: Calculate range sums using prefix differences</span>
      </div>
    </div>
  </div>
);
