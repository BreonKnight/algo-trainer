import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const RabinKarpPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Rabin-Karp
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n + m) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Pattern matching with rolling hash
    </div>

    <PseudocodeDisplay
      code={`# Rabin-Karp: Pattern matching with rolling hash
# Input: Text T[1..n], pattern P[1..m]
# Output: Starting indices where P occurs in T

Algorithm RABIN-KARP(T, P)
    n ← length[T]
    m ← length[P]
    d ← 256  # Number of characters in alphabet
    q ← 101  # Prime number for hash
    h ← d^(m-1) mod q

    # Compute hash of pattern and first window
    p ← 0
    t ← 0
    for i ← 1 to m do
        p ← (d * p + P[i]) mod q
        t ← (d * t + T[i]) mod q
    end for

    # Slide pattern over text
    for s ← 0 to n - m do
        if p = t then
            # Check for exact match
            match ← true
            for i ← 1 to m do
                if P[i] ≠ T[s + i] then
                    match ← false
                    break
                end if
            end for
            if match then
                print "Pattern found at index" s
            end if
        end if

        # Compute hash for next window
        if s < n - m then
            t ← (d * (t - T[s + 1] * h) + T[s + m + 1]) mod q
            if t < 0 then
                t ← t + q
            end if
        end if
    end for

# Example:
# Input: T = "GEEKS FOR GEEKS", P = "GEEK"
#
# Step 1: p = hash("GEEK") = 71
#         t = hash("GEEK") = 71
#         Match found at index 0
# Step 2: t = hash("EEKS") = 69
# Step 3: t = hash("EKS ") = 75
# Step 4: t = hash("KS F") = 83
# Step 5: t = hash("S FO") = 95
# Step 6: t = hash(" FOR") = 70
# Step 7: t = hash("FOR ") = 82
# Step 8: t = hash("OR G") = 79
# Step 9: t = hash("R GE") = 71
#         Match found at index 10
#
# Output: Pattern found at indices 0 and 10`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute hash of pattern and first window</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Slide pattern over text</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check for exact match when hashes match</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update rolling hash for next window</span>
      </div>
    </div>
  </div>
);
