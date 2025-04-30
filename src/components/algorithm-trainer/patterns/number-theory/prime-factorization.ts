import type { AlgorithmPattern } from "../../types";

export const primeFactorizationPattern: AlgorithmPattern = {
  title: "Prime Factorization",
  description:
    "An algorithm to decompose a number into its prime factors. It's useful for various number theory problems and cryptography applications.",
  timeComplexity: "O(√n)",
  spaceComplexity: "O(log n)",
  pseudocode: `function primeFactors(n):
    factors = []
    
    # Handle 2 separately
    while n % 2 == 0:
        factors.append(2)
        n = n // 2
    
    # Check odd numbers up to sqrt(n)
    i = 3
    while i * i <= n:
        while n % i == 0:
            factors.append(i)
            n = n // i
        i += 2
    
    # If n is a prime > 2
    if n > 2:
        factors.append(n)
    
    return factors`,
  example: `// Factorize 315
const factors = primeFactors(315);
console.log(factors); // [3, 3, 5, 7]

// Factorize 1001
const factors2 = primeFactors(1001);
console.log(factors2); // [7, 11, 13]`,
  implementation: `function primeFactors(n: number): number[] {
  const factors: number[] = [];
  
  // Handle 2 separately
  while (n % 2 === 0) {
    factors.push(2);
    n = Math.floor(n / 2);
  }
  
  // Check odd numbers up to sqrt(n)
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = Math.floor(n / i);
    }
  }
  
  // If n is a prime > 2
  if (n > 2) {
    factors.push(n);
  }
  
  return factors;
}

// Optimized version using trial division with precomputed primes
function primeFactorsOptimized(n: number, primes: number[]): number[] {
  const factors: number[] = [];
  
  for (const p of primes) {
    if (p * p > n) break;
    
    while (n % p === 0) {
      factors.push(p);
      n = Math.floor(n / p);
    }
  }
  
  if (n > 1) {
    factors.push(n);
  }
  
  return factors;
}`,
  category: "number-theory",
};
