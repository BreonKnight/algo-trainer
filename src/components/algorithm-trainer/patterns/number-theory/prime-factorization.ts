import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const primeFactorizationPattern: AlgorithmPattern = {
  title: "Prime Factorization",
  description: "A pattern that decomposes a number into its prime factors.",
  timeComplexity: "O(sqrt(n))",
  spaceComplexity: "O(log n)",
  category: "Number Theory",
  pseudocode: `PRIME-FACTORS(n)
1  factors = []
2  // Handle even numbers
3  while n mod 2 == 0
4      factors.append(2)
5      n = n / 2
6  // Check odd numbers up to sqrt(n)
7  i = 3
8  while i * i ≤ n
9      while n mod i == 0
10         factors.append(i)
11         n = n / i
12     i = i + 2
13 // If n is a prime number > 2
14 if n > 2
15     factors.append(n)
16 return factors

PRIME-FACTORS-WITH-EXPONENTS(n)
1  factors = PRIME-FACTORS(n)
2  result = {}
3  for factor in factors
4      result[factor] = result[factor] + 1
5  return result`,
  example: `n = 60
Step 1: 60 ÷ 2 = 30, factors = [2]
Step 2: 30 ÷ 2 = 15, factors = [2, 2]
Step 3: 15 ÷ 3 = 5, factors = [2, 2, 3]
Step 4: 5 ÷ 5 = 1, factors = [2, 2, 3, 5]
Result: [2, 2, 3, 5]`,
  implementation: `def prime_factors(n: int) -> list[int]:
    """
    Find the prime factors of a number.
    
    Args:
        n: Number to factorize
    
    Returns:
        List of prime factors
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
    
    # If n is a prime number > 2
    if n > 2:
        factors.append(n)
    
    return factors

def prime_factors_with_exponents(n: int) -> dict[int, int]:
    """
    Find the prime factors of a number with their exponents.
    
    Args:
        n: Number to factorize
    
    Returns:
        Dictionary of prime factors and their exponents
    """
    factors = prime_factors(n)
    result = {}
    
    for factor in factors:
        result[factor] = result.get(factor, 0) + 1
    
    return result

# Example usage
n = 60
factors = prime_factors(n)
print(f"Prime factors of {n}: {factors}")  # [2, 2, 3, 5]

factors_with_exponents = prime_factors_with_exponents(n)
print(f"Prime factors with exponents: {factors_with_exponents}")  # {2: 2, 3: 1, 5: 1}`,
};
