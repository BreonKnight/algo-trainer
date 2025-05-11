import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const SieveOfEratosthenesPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Sieve of Eratosthenes
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>An efficient algorithm to find all prime numbers up to a given limit</p>
      <p>Time: O(n log log n) where n is the upper limit</p>
      <p>Space: O(n) for storing the boolean array</p>
      <p>Use: Finding prime numbers, prime factorization, number theory problems</p>
    </div>
    <div className="mt-4 w-full">
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
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Initialize array of booleans for all numbers up to n</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Mark multiples of each prime number as non-prime</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Collect remaining unmarked numbers as primes</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Return the array of prime numbers</span>
        </div>
      </div>
    </div>
  </div>
);
