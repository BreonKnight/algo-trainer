import type { AlgorithmPattern } from "../../types/pattern-types";

export const sieveOfEratosthenesPattern: AlgorithmPattern = {
  title: "Sieve of Eratosthenes",
  description:
    "An efficient algorithm for finding all prime numbers up to a given limit by iteratively marking the multiples of each prime number starting from 2.",
  timeComplexity: "O(n log log n)",
  spaceComplexity: "O(n)",
  difficulty: "Easy",
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
const primesPatternPatternPatternPattern = sieveOfEratosthenes(30);
// Result will be [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  `,
  implementation: `def sieve_of_eratosthenes(n: int) -> list[int]:
    """
    Find all prime numbers up to a given limit using the Sieve of Eratosthenes algorithm.
    
    Args:
        n: Upper limit to find primes up to
    
    Returns:
        List of prime numbers up to n
    """
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    
    for i in range(2, int(n ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, n + 1, i):
                is_prime[j] = False
    
    primes = [i for i in range(2, n + 1) if is_prime[i]]
    return primes

def segmented_sieve(low: int, high: int) -> list[int]:
    """
    Find all prime numbers in a range using the Segmented Sieve algorithm.
    
    Args:
        low: Lower bound of the range
        high: Upper bound of the range
    
    Returns:
        List of prime numbers in the range [low, high]
    """
    # Find primes up to sqrt(high)
    limit = int(high ** 0.5) + 1
    base_primes = sieve_of_eratosthenes(limit)
    
    # Initialize sieve for the range
    size = high - low + 1
    is_prime = [True] * size
    
    for p in base_primes:
        # Find the first multiple of p in the range
        start = max(p * p, ((low + p - 1) // p) * p)
        for j in range(start, high + 1, p):
            is_prime[j - low] = False
    
    # Handle the case when low is 1
    if low == 1:
        is_prime[0] = False
    
    primes = [i + low for i, prime in enumerate(is_prime) if prime]
    return primes

# Example usage
n = 30
primes = sieve_of_eratosthenes(n)
print(f"Primes up to {n}: {primes}")  # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

low, high = 100, 200
range_primes = segmented_sieve(low, high)
print(f"Primes between {low} and {high}: {range_primes}")`,
  category: "Number Theory",
};
