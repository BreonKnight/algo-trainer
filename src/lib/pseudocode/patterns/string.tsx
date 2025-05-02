import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const StringPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">String Algorithms</span>
      <span className="ml-2 text-xs text-secondary">(Pattern Matching)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n + m) &nbsp;|&nbsp; Space: O(m) &nbsp;|&nbsp; Use: Text
      processing and pattern matching
    </div>

    <PseudocodeDisplay code={`// Knuth-Morris-Pratt algorithm
KMP-MATCHER(T, P):
    n = T.length
    m = P.length
    π = COMPUTE-PREFIX-FUNCTION(P)
    q = 0  // Number of characters matched
    for i = 1 to n:
        while q > 0 and P[q + 1] ≠ T[i]:
            q = π[q]
        if P[q + 1] = T[i]:
            q = q + 1
        if q = m:
            print "Pattern occurs with shift" i - m
            q = π[q]

COMPUTE-PREFIX-FUNCTION(P):
    m = P.length
    let π[1..m] be a new array
    π[1] = 0
    k = 0
    for q = 2 to m:
        while k > 0 and P[k + 1] ≠ P[q]:
            k = π[k]
        if P[k + 1] = P[q]:
            k = k + 1
        π[q] = k
    return π

// Longest Common Subsequence
LCS(X, Y):
    m = X.length
    n = Y.length
    let c[0..m, 0..n] be a new table
    for i = 0 to m:
        c[i, 0] = 0
    for j = 0 to n:
        c[0, j] = 0
    for i = 1 to m:
        for j = 1 to n:
            if X[i] = Y[j]:
                c[i, j] = c[i - 1, j - 1] + 1
            else:
                c[i, j] = max(c[i - 1, j], c[i, j - 1])
    return c[m, n]

// Edit Distance
EDIT-DISTANCE(X, Y):
    m = X.length
    n = Y.length
    let d[0..m, 0..n] be a new table
    for i = 0 to m:
        d[i, 0] = i
    for j = 0 to n:
        d[0, j] = j
    for i = 1 to m:
        for j = 1 to n:
            if X[i] = Y[j]:
                d[i, j] = d[i - 1, j - 1]
            else:
                d[i, j] = 1 + min(d[i - 1, j],     // Delete
                                 d[i, j - 1],     // Insert
                                 d[i - 1, j - 1]) // Replace
    return d[m, n]`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">KMP:</span> Pattern matching
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">LCS:</span> Find longest
        common subsequence
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Edit:</span> Compute edit
        distance
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: KMP Matching</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Text: "ABABDABACDABABCABAB"
Pattern: "ABABCABAB"
Prefix function: [0, 0, 1, 2, 0, 1, 2, 3, 4]
Matches found at position 10`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: LCS</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`X: "ABCBDAB"
Y: "BDCABA"
LCS: "BCBA"
Length: 4`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Edit Distance</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`X: "kitten"
Y: "sitting"
Edit distance: 3
Operations: k→s, e→i, insert g`}
      </pre>
    </div>
  </div>
);
