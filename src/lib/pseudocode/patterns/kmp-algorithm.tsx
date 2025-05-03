import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KnuthMorrisPrattPattern = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        <span className="text-accent font-bold">Knuth-Morris-Pratt</span>
      </h2>
      <p className="text-gray-600">
        A linear time pattern matching algorithm that uses a preprocessed
        pattern to skip unnecessary comparisons.
      </p>
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

      <div className="mb-2">
        <span className="text-accent font-bold">Key Steps:</span>
      </div>
      <div className="mb-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Compute prefix function for pattern</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Match pattern against text using prefix function</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Skip unnecessary comparisons using prefix function</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Report all occurrences of pattern</span>
        </div>
      </div>
    </div>
  );
};
