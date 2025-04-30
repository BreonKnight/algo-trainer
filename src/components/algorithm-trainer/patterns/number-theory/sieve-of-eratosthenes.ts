import type { AlgorithmPattern } from "../../types";

export const sieveOfEratosthenesPattern: AlgorithmPattern = {
  title: "Sieve of Eratosthenes",
  description:
    "An efficient algorithm for finding all prime numbers up to a given limit by iteratively marking the multiples of each prime number starting from 2.",
  timeComplexity: "O(n log log n)",
  spaceComplexity: "O(n)",
  pseudocode: `
1. Create a boolean array of size n+1, initialized to true
2. Mark 0 and 1 as non-prime
3. For each number i from 2 to sqrt(n):
   a. If i is prime:
      - Mark all multiples of i as non-prime
4. Return all numbers that are still marked as prime
  `,
  example: `
// Find all primes up to 30
const primes = sieveOfEratosthenes(30);
// Result will be [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  `,
  implementation: `
function sieveOfEratosthenes(n: number): number[] {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}
  `,
  category: "number-theory",
};
