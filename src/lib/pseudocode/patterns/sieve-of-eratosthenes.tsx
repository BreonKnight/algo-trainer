import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const SieveOfEratosthenesPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Sieve of Eratosthenes
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Find all primes up to n
    </div>

    <PseudocodeDisplay
      code={`# Sieve of Eratosthenes: Find all primes up to n
# Input: Integer n > 1
# Output: Array of primes ≤ n

Algorithm SIEVE-OF-ERATOSTHENES(n)
    # Initialize array of booleans
    is_prime ← array of size n + 1
    for i ← 2 to n do
        is_prime[i] ← true
    end for

    # Mark multiples of primes
    for i ← 2 to √n do
        if is_prime[i] then
            for j ← i² to n step i do
                is_prime[j] ← false
            end for
        end if
    end for

    # Collect primes
    primes ← empty array
    for i ← 2 to n do
        if is_prime[i] then
            primes.append(i)
        end if
    end for

    return primes

# Example:
# Input: n = 30
#
# Step 1: is_prime = [F, F, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T]
# Step 2: i = 2, mark multiples of 2
#         is_prime = [F, F, T, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F, T, F]
# Step 3: i = 3, mark multiples of 3
#         is_prime = [F, F, T, T, F, T, F, T, F, F, F, T, F, T, F, F, F, T, F, T, F, F, F, T, F, T, F, F, F, T, F]
# Step 4: i = 5, mark multiples of 5
#         is_prime = [F, F, T, T, F, T, F, T, F, F, F, T, F, T, F, F, F, T, F, T, F, F, F, T, F, T, F, F, F, T, F]
#
# Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize array of booleans</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Mark multiples of primes as non-prime</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Collect remaining primes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return array of primes</span>
      </div>
    </div>
  </div>
);
