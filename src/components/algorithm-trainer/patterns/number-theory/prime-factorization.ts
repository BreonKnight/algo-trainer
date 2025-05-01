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
  implementation: `def prime_factors(n: int) -> list[int]:
    """
    Find the prime factors of a number using trial division.
    
    Args:
        n: Number to factorize
    
    Returns:
        List of prime factors in ascending order
    """
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
    
    return factors

def prime_factors_optimized(n: int, primes: list[int]) -> list[int]:
    """
    Find the prime factors of a number using precomputed primes.
    
    Args:
        n: Number to factorize
        primes: List of precomputed primes
    
    Returns:
        List of prime factors in ascending order
    """
    factors = []
    
    for p in primes:
        if p * p > n:
            break
        
        while n % p == 0:
            factors.append(p)
            n = n // p
    
    if n > 1:
        factors.append(n)
    
    return factors

def count_prime_factors(n: int) -> dict[int, int]:
    """
    Count the occurrences of each prime factor.
    
    Args:
        n: Number to factorize
    
    Returns:
        Dictionary mapping prime factors to their counts
    """
    factors = prime_factors(n)
    counts = {}
    
    for p in factors:
        counts[p] = counts.get(p, 0) + 1
    
    return counts

def get_total_factors(n: int) -> int:
    """
    Calculate the total number of factors of a number.
    
    Args:
        n: Number to find factors for
    
    Returns:
        Total number of factors
    """
    counts = count_prime_factors(n)
    total = 1
    
    for count in counts.values():
        total *= (count + 1)
    
    return total

# Example usage
n = 315
factors = prime_factors(n)
print(f"Prime factors of {n}: {factors}")  # [3, 3, 5, 7]

# Using precomputed primes
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
optimized_factors = prime_factors_optimized(n, primes)
print(f"Optimized prime factors of {n}: {optimized_factors}")

# Count prime factors
counts = count_prime_factors(n)
print(f"Prime factor counts: {counts}")  # {3: 2, 5: 1, 7: 1}

# Get total number of factors
total = get_total_factors(n)
print(f"Total number of factors: {total}")  # 12`,
  category: "number-theory",
};
