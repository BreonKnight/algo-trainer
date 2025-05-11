import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const SieveOfSundaramPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Sieve of Sundaram
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>An alternative to the Sieve of Eratosthenes that generates odd composite numbers</p>
      <p>Time: O(n log n) where n is the upper limit</p>
      <p>Space: O(n/2) for storing odd numbers up to n</p>
      <p>Use: Finding prime numbers, especially when memory is limited</p>
    </div>
    <div className="mt-4 w-full">
      <PseudocodeDisplay
        code={`# Sieve of Sundaram
# Input: Integer n > 1
# Output: Array of primes ≤ n

Algorithm SIEVE-OF-SUNDARAM(n)
    # Initialize array
    k ← (n - 1) // 2
    is_prime ← array of size k + 1
    for i ← 1 to k do
        is_prime[i] ← true
    end for

    # Mark numbers of form i + j + 2ij
    for i ← 1 to k do
        j ← i
        while i + j + 2*i*j ≤ k do
            is_prime[i + j + 2*i*j] ← false
            j ← j + 1
        end while
    end for

    # Collect primes
    primes ← [2]  # 2 is the only even prime
    for i ← 1 to k do
        if is_prime[i] then
            primes.append(2*i + 1)
        end if
    end for

    return primes

# Example:
# Input: n = 30
#
# Step 1: k = (30 - 1) // 2 = 14
#         is_prime = [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T]
#
# Step 2: Mark numbers
#         i = 1: mark 4, 7, 10, 13
#         i = 2: mark 7, 12
#         i = 3: mark 10
#         i = 4: mark 13
#
# Step 3: Collect primes
#         primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
#
# Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`}
      />
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Initialize array for odd numbers up to n/2</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Mark numbers of form i + j + 2ij as composite</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Collect remaining unmarked numbers as potential primes</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Transform indices to get actual prime numbers</span>
        </div>
      </div>
    </div>
  </div>
);
