import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const SieveOfAtkinPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Sieve of Atkin</span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n/log log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Find all primes up to n
    </div>

    <PseudocodeDisplay
      code={`# Sieve of Atkin
# Input: Integer n > 1
# Output: Array of primes ≤ n

Algorithm SIEVE-OF-ATKIN(n)
    # Initialize array
    is_prime ← array of size n + 1
    for i ← 0 to n do
        is_prime[i] ← false
    end for

    # Mark potential primes
    for x ← 1 to √n do
        for y ← 1 to √n do
            # Case 1: 4x² + y²
            k ← 4*x*x + y*y
            if k ≤ n and (k mod 12 = 1 or k mod 12 = 5) then
                is_prime[k] ← not is_prime[k]
            end if

            # Case 2: 3x² + y²
            k ← 3*x*x + y*y
            if k ≤ n and k mod 12 = 7 then
                is_prime[k] ← not is_prime[k]
            end if

            # Case 3: 3x² - y²
            k ← 3*x*x - y*y
            if x > y and k ≤ n and k mod 12 = 11 then
                is_prime[k] ← not is_prime[k]
            end if
        end for
    end for

    # Mark squares of primes as non-prime
    for i ← 5 to √n do
        if is_prime[i] then
            for j ← i*i to n step i*i do
                is_prime[j] ← false
            end for
        end if
    end for

    # Collect primes
    primes ← [2, 3]
    for i ← 5 to n do
        if is_prime[i] then
            primes.append(i)
        end if
    end for

    return primes

# Example:
# Input: n = 30
#
# Step 1: Initialize array
#         is_prime = [F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F]
#
# Step 2: Mark potential primes
#         x = 1, y = 1: k = 5, 4, 2
#         x = 2, y = 1: k = 17, 13, 11
#         x = 2, y = 2: k = 20, 16, 8
#         ...
#
# Step 3: Mark squares
#         i = 5: mark 25
#
# Step 4: Collect primes
#         primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
#
# Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize array for potential primes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Mark numbers using quadratic forms</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Mark squares of primes as non-prime</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Collect remaining primes</span>
      </div>
    </div>
  </div>
);
