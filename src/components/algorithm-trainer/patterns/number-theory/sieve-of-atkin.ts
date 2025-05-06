import type { AlgorithmPattern } from "../../types/pattern-types";

export const sieveOfAtkinPattern: AlgorithmPattern = {
  title: "Sieve of Atkin",
  description:
    "A modern algorithm for finding all prime numbers up to a given limit. It's more efficient than the Sieve of Eratosthenes for large ranges.",
  timeComplexity: "O(n / log log n)",
  spaceComplexity: "O(n)",
  difficulty: "Hard",
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
const primesPatternPatternPatternPattern = sieveOfAtkin(100);
console.log(primes);
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`,
  implementation: `def sieve_of_atkin(n: int) -> list[int]:
    """
    Find all prime numbers up to a given limit using the Sieve of Atkin algorithm.
    
    Args:
        n: Upper limit to find primes up to
    
    Returns:
        List of prime numbers up to n
    """
    # Initialize sieve array
    sieve = [False] * (n + 1)
    
    # Preliminary work
    sqrt_n = int(n ** 0.5)
    for x in range(1, sqrt_n + 1):
        for y in range(1, sqrt_n + 1):
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
    for x in range(5, sqrt_n + 1):
        if sieve[x]:
            for y in range(x * x, n + 1, x * x):
                sieve[y] = False
    
    # Add primes 2 and 3
    sieve[2] = True
    sieve[3] = True
    
    # Generate list of primes
    primes = [i for i, is_prime in enumerate(sieve) if is_prime]
    return primes

def sieve_of_atkin_optimized(n: int) -> list[int]:
    """
    Optimized version of the Sieve of Atkin algorithm using wheel factorization.
    
    Args:
        n: Upper limit to find primes up to
    
    Returns:
        List of prime numbers up to n
    """
    # Initialize sieve array
    sieve = [False] * (n + 1)
    
    # Wheel factorization using mod 60
    wheel = [1, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 53, 59]
    wheel_size = len(wheel)
    
    # Preliminary work
    sqrt_n = int(n ** 0.5)
    for x in range(1, sqrt_n + 1):
        for y in range(1, sqrt_n + 1):
            # Case 1: 4x² + y² = n
            z = 4 * x * x + y * y
            if z <= n and z % 60 in [1, 13, 17, 29, 37, 41, 49, 53]:
                sieve[z] = not sieve[z]
            
            # Case 2: 3x² + y² = n
            z = 3 * x * x + y * y
            if z <= n and z % 60 in [7, 19, 31, 43]:
                sieve[z] = not sieve[z]
            
            # Case 3: 3x² - y² = n
            z = 3 * x * x - y * y
            if x > y and z <= n and z % 60 in [11, 23, 47, 59]:
                sieve[z] = not sieve[z]
    
    # Mark all multiples of squares as non-prime
    for x in range(5, sqrt_n + 1):
        if sieve[x]:
            for y in range(x * x, n + 1, x * x):
                sieve[y] = False
    
    # Add primes 2, 3, and 5
    sieve[2] = True
    sieve[3] = True
    sieve[5] = True
    
    # Generate list of primes
    primes = [2, 3, 5]  # Start with known primes
    for i in range(7, n + 1):
        if sieve[i] and i % 60 in wheel:
            primes.append(i)
    
    return primes

# Example usage
n = 100
primes = sieve_of_atkin(n)
print(f"Primes up to {n}: {primes}")  # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

# Using optimized version
optimized_primes = sieve_of_atkin_optimized(n)
print(f"Optimized primes up to {n}: {optimized_primes}")`,
  category: "Number Theory",
};
