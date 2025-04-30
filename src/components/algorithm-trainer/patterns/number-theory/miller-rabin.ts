import type { AlgorithmPattern } from "../../types";

export const millerRabinPattern: AlgorithmPattern = {
  title: "Miller-Rabin Primality Test",
  description:
    "A probabilistic primality test that determines whether a given number is probably prime or definitely composite. It's more efficient than deterministic tests for large numbers.",
  timeComplexity: "O(k log³ n), where k is the number of rounds",
  spaceComplexity: "O(1)",
  pseudocode: `function isPrime(n, k):
    # Handle base cases
    if n <= 1 or n == 4:
        return false
    if n <= 3:
        return true
    
    # Find d such that n-1 = 2^s * d
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1
    
    # Test k times
    for i in range(k):
        a = random(2, n-2)
        x = pow(a, d, n)
        
        if x == 1 or x == n-1:
            continue
            
        for j in range(s-1):
            x = pow(x, 2, n)
            if x == n-1:
                break
        else:
            return false
    
    return true`,
  example: `# Test if 561 is prime (it's a Carmichael number)
is_prime = miller_rabin_test(561, 5)
print(is_prime)  # False

# Test if 104729 is prime (it is)
is_prime2 = miller_rabin_test(104729, 5)
print(is_prime2)  # True`,
  implementation: `import random
from typing import List, Tuple

def miller_rabin_test(n: int, k: int) -> bool:
    """
    Perform the Miller-Rabin primality test on a number.
    
    Args:
        n: Number to test for primality
        k: Number of rounds of testing
    
    Returns:
        True if n is probably prime, False if n is definitely composite
    """
    # Handle base cases
    if n <= 1 or n == 4:
        return False
    if n <= 3:
        return True
    
    # Find d such that n-1 = 2^s * d
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1
    
    # Test k times
    for _ in range(k):
        a = random.randint(2, n - 2)
        x = pow(a, d, n)
        
        if x == 1 or x == n - 1:
            continue
        
        found = False
        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                found = True
                break
        
        if not found:
            return False
    
    return True

def mod_exp(base: int, exp: int, mod: int) -> int:
    """
    Compute (base^exp) % mod efficiently using modular exponentiation.
    
    Args:
        base: Base number
        exp: Exponent
        mod: Modulus
    
    Returns:
        (base^exp) % mod
    """
    result = 1
    base = base % mod
    
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        exp = exp // 2
        base = (base * base) % mod
    
    return result

# Example usage
n = 561  # Carmichael number
k = 5
is_prime = miller_rabin_test(n, k)
print(f"Is {n} prime? {is_prime}")  # False

n = 104729  # Known prime
is_prime = miller_rabin_test(n, k)
print(f"Is {n} prime? {is_prime}")  # True`,
  category: "number-theory",
};
