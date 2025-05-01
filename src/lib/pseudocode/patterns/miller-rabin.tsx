import React from "react";
import { ChevronRight } from "lucide-react";

export const MillerRabinPattern = () => {
  return (
    <div className="pseudocode">
      <div className="mb-2">
        <span className="text-accent font-bold">Miller-Rabin Algorithm</span>
        <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
      </div>
      <div className="mb-2 text-xs text-secondary">
        Time: O(k log³ n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use:
        Probabilistic primality test
      </div>

      <div className="mb-4">
        <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
          {`# Miller-Rabin Algorithm
# Input: Integer n > 2, number of rounds k
# Output: List of witnesses to compositeness

Algorithm MILLER-RABIN(n, k)
    # Handle edge cases
    if n ≤ 1 then
        return ["composite"]
    if n ≤ 3 then
        return ["prime"]
    if n mod 2 = 0 then
        return [2]
    
    # Write n-1 as d·2^s
    d ← n - 1
    s ← 0
    while d mod 2 = 0 do
        d ← d / 2
        s ← s + 1
    end while
    
    witnesses ← []
    # Test k times
    for i ← 1 to k do
        a ← random integer in [2, n-2]
        x ← a^d mod n
        if x = 1 or x = n-1 then
            continue
        end if
        
        found_witness ← false
        for j ← 1 to s-1 do
            x ← x² mod n
            if x = n-1 then
                found_witness ← true
                break
            end if
            if x = 1 then
                witnesses ← witnesses + [a]
                break
            end if
        end for
        
        if not found_witness and x ≠ n-1 then
            witnesses ← witnesses + [a]
        end if
    end for
    
    return witnesses`}
        </pre>
      </div>

      <div className="mb-2">
        <span className="text-accent font-bold">Key Steps:</span>
      </div>
      <div className="mb-2 text-sm">
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
};
