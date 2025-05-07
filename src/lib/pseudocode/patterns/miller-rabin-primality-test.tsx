import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const MillerRabinPrimalityTestPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Miller-Rabin Primality Test</span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(k log³ n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Probabilistic primality test
    </div>

    <PseudocodeDisplay
      code={`# Miller-Rabin Primality Test
# Input: Integer n > 2, number of rounds k
# Output: "composite" or "probably prime"

Algorithm MILLER-RABIN-PRIMALITY-TEST(n, k)
    # Handle edge cases
    if n ≤ 1 then
        return "composite"
    if n ≤ 3 then
        return "prime"
    if n mod 2 = 0 then
        return "composite"

    # Write n-1 as d·2^s
    d ← n - 1
    s ← 0
    while d mod 2 = 0 do
        d ← d / 2
        s ← s + 1
    end while

    # Test k times
    for i ← 1 to k do
        a ← random integer in [2, n-2]
        x ← a^d mod n
        if x = 1 or x = n-1 then
            continue
        end if

        for j ← 1 to s-1 do
            x ← x² mod n
            if x = n-1 then
                break
            end if
            if x = 1 then
                return "composite"
            end if
        end for

        if x ≠ n-1 then
            return "composite"
        end if
    end for

    return "probably prime"

# Example:
# Input: n = 17, k = 5
#
# Step 1: n-1 = 16 = 1·2^4
#         d = 1, s = 4
#
# Round 1: a = 2
#          x = 2^1 mod 17 = 2
#          x² mod 17 = 4
#          x² mod 17 = 16 = n-1
#          continue
#
# Round 2: a = 3
#          x = 3^1 mod 17 = 3
#          x² mod 17 = 9
#          x² mod 17 = 13
#          x² mod 17 = 16 = n-1
#          continue
#
# ... (3 more rounds)
#
# Output: "probably prime"`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handle edge cases (n ≤ 1, n ≤ 3, even numbers)</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Factor n-1 into d·2^s</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Choose random base a</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Test for strong pseudoprimes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Repeat k times for accuracy</span>
      </div>
    </div>
  </div>
);
