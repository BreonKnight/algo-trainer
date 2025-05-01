import { ChevronRight } from "lucide-react";

export const PrimeFactorizationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prime Factorization</span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(√n) &nbsp;|&nbsp; Space: O(log n) &nbsp;|&nbsp; Use: Factorize
      numbers into primes
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Prime Factorization
# Input: Integer n > 1
# Output: Array of prime factors with exponents

Algorithm PRIME-FACTORIZATION(n)
    factors ← empty array
    # Handle even numbers
    while n mod 2 = 0 do
        factors.append(2)
        n ← n / 2
    end while
    
    # Check odd numbers up to √n
    i ← 3
    while i * i ≤ n do
        while n mod i = 0 do
            factors.append(i)
            n ← n / i
        end while
        i ← i + 2
    end while
    
    # If n is still > 1, it's a prime
    if n > 1 then
        factors.append(n)
    end if
    
    return factors

# Example:
# Input: n = 60
# 
# Step 1: Handle even numbers
#         n = 60 / 2 = 30
#         n = 30 / 2 = 15
#         factors = [2, 2]
# 
# Step 2: Check odd numbers
#         i = 3: 15 / 3 = 5
#         factors = [2, 2, 3]
#         i = 5: 5 / 5 = 1
#         factors = [2, 2, 3, 5]
# 
# Output: [2, 2, 3, 5]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handle even numbers first</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check odd numbers up to √n</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Divide by each prime factor</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handle remaining prime if any</span>
      </div>
    </div>
  </div>
);
