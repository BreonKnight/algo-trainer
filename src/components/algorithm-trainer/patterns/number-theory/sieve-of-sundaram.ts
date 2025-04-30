import type { AlgorithmPattern } from "../../types";

export const sieveOfSundaramPattern: AlgorithmPattern = {
  title: "Sieve of Sundaram",
  description:
    "An algorithm to find all prime numbers up to a given limit. It's more efficient than the Sieve of Eratosthenes for certain ranges.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `function sieveOfSundaram(n):
    # Calculate limit for the sieve
    limit = (n - 1) // 2
    
    # Initialize sieve array
    sieve = [true] * (limit + 1)
    
    # Mark numbers of the form i + j + 2ij
    for i in range(1, limit + 1):
        j = i
        while i + j + 2 * i * j <= limit:
            sieve[i + j + 2 * i * j] = false
            j += 1
    
    # Generate primes
    primes = [2]  # 2 is the only even prime
    for i in range(1, limit + 1):
        if sieve[i]:
            primes.append(2 * i + 1)
    
    return primes`,
  example: `// Find all primes up to 100
const primes = sieveOfSundaram(100);
console.log(primes);
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`,
  implementation: `function sieveOfSundaram(n: number): number[] {
  // Calculate limit for the sieve
  const limit = Math.floor((n - 1) / 2);
  
  // Initialize sieve array
  const sieve: boolean[] = new Array(limit + 1).fill(true);
  
  // Mark numbers of the form i + j + 2ij
  for (let i = 1; i <= limit; i++) {
    let j = i;
    while (i + j + 2 * i * j <= limit) {
      sieve[i + j + 2 * i * j] = false;
      j++;
    }
  }
  
  // Generate primes
  const primes: number[] = [2]; // 2 is the only even prime
  for (let i = 1; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(2 * i + 1);
    }
  }
  
  return primes;
}

// Optimized version with early termination
function sieveOfSundaramOptimized(n: number): number[] {
  const limit = Math.floor((n - 1) / 2);
  const sieve: boolean[] = new Array(limit + 1).fill(true);
  
  for (let i = 1; i <= limit; i++) {
    const maxJ = Math.floor((limit - i) / (2 * i + 1));
    for (let j = i; j <= maxJ; j++) {
      sieve[i + j + 2 * i * j] = false;
    }
  }
  
  const primes: number[] = [2];
  for (let i = 1; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(2 * i + 1);
    }
  }
  
  return primes;
}`,
  category: "number-theory",
};
