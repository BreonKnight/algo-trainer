import type { AlgorithmPattern } from "../../types";

export const sieveOfAtkinPattern: AlgorithmPattern = {
  title: "Sieve of Atkin",
  description:
    "A modern algorithm for finding all prime numbers up to a given limit. It's more efficient than the Sieve of Eratosthenes for large ranges.",
  timeComplexity: "O(n / log log n)",
  spaceComplexity: "O(n)",
  pseudocode: `function sieveOfAtkin(n):
    # Initialize sieve array
    sieve = [False] * (n + 1)
    
    # Preliminary work
    for x in range(1, int(sqrt(n)) + 1):
        for y in range(1, int(sqrt(n)) + 1):
            # Case 1: 4x² + y² = n
            z = 4 * x * x + y * y
            if z <= n and (z % 12 == 1 or z % 12 == 5):
                sieve[z] = not sieve[z]
            
            # Case 2: 3x² + y² = n
            z = 3 * x * x + y * y
            if z <= n and z % 12 == 7:
                sieve[z] = not sieve[z]
            
            # Case 3: 3x² - y² = n
            z = 3 * x * x - y * y
            if x > y and z <= n and z % 12 == 11:
                sieve[z] = not sieve[z]
    
    # Mark all multiples of squares as non-prime
    for x in range(5, int(sqrt(n)) + 1):
        if sieve[x]:
            for y in range(x * x, n + 1, x * x):
                sieve[y] = False
    
    # Add primes 2 and 3
    sieve[2] = True
    sieve[3] = True
    
    # Generate list of primes
    primes = [i for i, is_prime in enumerate(sieve) if is_prime]
    return primes`,
  example: `// Find all primes up to 100
const primes = sieveOfAtkin(100);
console.log(primes);
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`,
  implementation: `function sieveOfAtkin(n: number): number[] {
  // Initialize sieve array
  const sieve: boolean[] = new Array(n + 1).fill(false);
  
  // Preliminary work
  const sqrtN = Math.floor(Math.sqrt(n));
  for (let x = 1; x <= sqrtN; x++) {
    for (let y = 1; y <= sqrtN; y++) {
      // Case 1: 4x² + y² = n
      let z = 4 * x * x + y * y;
      if (z <= n && (z % 12 === 1 || z % 12 === 5)) {
        sieve[z] = !sieve[z];
      }
      
      // Case 2: 3x² + y² = n
      z = 3 * x * x + y * y;
      if (z <= n && z % 12 === 7) {
        sieve[z] = !sieve[z];
      }
      
      // Case 3: 3x² - y² = n
      z = 3 * x * x - y * y;
      if (x > y && z <= n && z % 12 === 11) {
        sieve[z] = !sieve[z];
      }
    }
  }
  
  // Mark all multiples of squares as non-prime
  for (let x = 5; x <= sqrtN; x++) {
    if (sieve[x]) {
      for (let y = x * x; y <= n; y += x * x) {
        sieve[y] = false;
      }
    }
  }
  
  // Add primes 2 and 3
  sieve[2] = true;
  sieve[3] = true;
  
  // Generate list of primes
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Optimized version with wheel factorization
function sieveOfAtkinOptimized(n: number): number[] {
  const sieve: boolean[] = new Array(n + 1).fill(false);
  const sqrtN = Math.floor(Math.sqrt(n));
  
  // Use wheel factorization for better performance
  const wheel = [1, 7, 11, 13, 17, 19, 23, 29];
  const wheelSize = wheel.length;
  
  for (let x = 1; x <= sqrtN; x++) {
    for (let y = 1; y <= sqrtN; y++) {
      // Case 1: 4x² + y² = n
      let z = 4 * x * x + y * y;
      if (z <= n && (z % 12 === 1 || z % 12 === 5)) {
        sieve[z] = !sieve[z];
      }
      
      // Case 2: 3x² + y² = n
      z = 3 * x * x + y * y;
      if (z <= n && z % 12 === 7) {
        sieve[z] = !sieve[z];
      }
      
      // Case 3: 3x² - y² = n
      z = 3 * x * x - y * y;
      if (x > y && z <= n && z % 12 === 11) {
        sieve[z] = !sieve[z];
      }
    }
  }
  
  // Mark all multiples of squares as non-prime
  for (let x = 5; x <= sqrtN; x++) {
    if (sieve[x]) {
      for (let y = x * x; y <= n; y += x * x) {
        sieve[y] = false;
      }
    }
  }
  
  // Add primes 2 and 3
  sieve[2] = true;
  sieve[3] = true;
  
  // Generate list of primes using wheel factorization
  const primes: number[] = [2, 3];
  for (let i = 5; i <= n; i += 2) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}`,
  category: "number-theory",
};
