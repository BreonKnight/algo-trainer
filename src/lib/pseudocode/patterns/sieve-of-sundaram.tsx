import { ChevronRight } from "lucide-react";

export const SieveOfSundaramPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Sieve of Sundaram</span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Find all
      primes up to n
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Sieve of Sundaram
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
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize array for odd numbers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Mark numbers of form i + j + 2ij</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Collect remaining primes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transform indices to get actual primes</span>
      </div>
    </div>
  </div>
);
