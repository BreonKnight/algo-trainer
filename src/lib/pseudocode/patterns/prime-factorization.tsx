import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const PrimeFactorizationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prime Factorization</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(√n) &nbsp;|&nbsp; Space: O(log n) &nbsp;|&nbsp; Use: Decompose number into prime
      factors
    </div>

    <PseudocodeDisplay
      code={`PRIME-FACTORS(n)
  factors = []
  // Handle even numbers
  while n mod 2 == 0
    factors.append(2)
    n = n / 2
  // Check odd numbers up to sqrt(n)
  i = 3
  while i * i <= n
    while n mod i == 0
      factors.append(i)
      n = n / i
    i = i + 2
  // If n is a prime number > 2
  if n > 2
    factors.append(n)
  return factors

// Example:
// Input: n = 60
// Step 1: 60 ÷ 2 = 30, factors = [2]
// Step 2: 30 ÷ 2 = 15, factors = [2, 2]
// Step 3: 15 ÷ 3 = 5, factors = [2, 2, 3]
// Step 4: 5 ÷ 5 = 1, factors = [2, 2, 3, 5]
// Output: [2, 2, 3, 5]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handle: Even numbers (factor of 2)</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check: Odd numbers up to √n</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Add: Remaining prime factor if &gt; 2</span>
      </div>
    </div>
  </div>
);
