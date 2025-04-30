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
  example: `# Find all primes up to 100
primes = sieve_of_sundaram(100)
print(primes)
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`,
  implementation: `def sieve_of_sundaram(n: int) -> list[int]:
    """
    Find all prime numbers up to a given limit using the Sieve of Sundaram algorithm.
    
    Args:
        n: Upper limit to find primes up to
    
    Returns:
        List of prime numbers up to n
    """
    # Calculate limit for the sieve
    limit = (n - 1) // 2
    
    # Initialize sieve array
    sieve = [True] * (limit + 1)
    
    # Mark numbers of the form i + j + 2ij
    for i in range(1, limit + 1):
        j = i
        while i + j + 2 * i * j <= limit:
            sieve[i + j + 2 * i * j] = False
            j += 1
    
    # Generate primes
    primes = [2]  # 2 is the only even prime
    for i in range(1, limit + 1):
        if sieve[i]:
            primes.append(2 * i + 1)
    
    return primes

def sieve_of_sundaram_optimized(n: int) -> list[int]:
    """
    Optimized version of the Sieve of Sundaram algorithm with early termination.
    
    Args:
        n: Upper limit to find primes up to
    
    Returns:
        List of prime numbers up to n
    """
    limit = (n - 1) // 2
    sieve = [True] * (limit + 1)
    
    for i in range(1, limit + 1):
        max_j = (limit - i) // (2 * i + 1)
        for j in range(i, max_j + 1):
            sieve[i + j + 2 * i * j] = False
    
    primes = [2]
    for i in range(1, limit + 1):
        if sieve[i]:
            primes.append(2 * i + 1)
    
    return primes

# Example usage
n = 100
primes = sieve_of_sundaram(n)
print(f"Primes up to {n}: {primes}")  # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

# Using optimized version
optimized_primes = sieve_of_sundaram_optimized(n)
print(f"Optimized primes up to {n}: {optimized_primes}")`,
  category: "number-theory",
};
