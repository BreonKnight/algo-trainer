import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const KnuthMorrisPrattPattern = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        <span className="text-accent font-bold">Knuth-Morris-Pratt</span>
      </h2>
      <div className="text-sm text-secondary">
        <p>
          A linear time pattern matching algorithm that uses a preprocessed pattern to skip
          unnecessary comparisons.
        </p>
        <p>Time: O(n + m) where n is text length and m is pattern length</p>
        <p>Space: O(m) for storing the prefix function</p>
        <p>Use: Efficient string pattern matching, DNA sequence analysis, text search</p>
      </div>
      <PseudocodeDisplay
        code={`# Knuth-Morris-Pratt: Pattern matching in strings
# Input: Text T[1..n], Pattern P[1..m]
# Output: All starting positions where P occurs in T

Algorithm KMP-MATCHER(T, P)
    n ← length[T]
    m ← length[P]

    # Compute prefix function
    π ← COMPUTE-PREFIX-FUNCTION(P)

    q ← 0  # Number of characters matched
    for i ← 1 to n do
        while q > 0 and P[q + 1] ≠ T[i] do
            q ← π[q]
        end while
        if P[q + 1] = T[i] then
            q ← q + 1
        end if
        if q = m then
            print "Pattern occurs at position" i - m
            q ← π[q]
        end if
    end for

Algorithm COMPUTE-PREFIX-FUNCTION(P)
    m ← length[P]
    π[1] ← 0
    k ← 0
    for q ← 2 to m do
        while k > 0 and P[k + 1] ≠ P[q] do
            k ← π[k]
        end while
        if P[k + 1] = P[q] then
            k ← k + 1
        end if
        π[q] ← k
    end for
    return π

# Example:
# Input: T = "ABABDABACDABABCABAB", P = "ABABCABAB"
#
# Step 1: π = [0, 0, 1, 2, 0, 1, 2, 3, 4]
# Step 2: Match at position 10
#
# Output: Pattern occurs at position 10`}
      />

      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Compute prefix function for pattern</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Match pattern against text using prefix function</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Skip unnecessary comparisons using prefix function</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Report all occurrences of pattern</span>
          </div>
        </div>
      </div>
    </div>
  );
};
