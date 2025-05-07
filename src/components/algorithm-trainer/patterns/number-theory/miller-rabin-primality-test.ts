import type { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const millerRabinPrimalityTestPattern: AlgorithmPattern = {
  title: "Miller-Rabin Primality Test",
  description:
    "A probabilistic primality test that determines whether a given number is probably prime or definitely composite. It's more efficient than deterministic tests for large numbers.",
  timeComplexity: "O(k log³ n), where k is the number of rounds",
  spaceComplexity: "O(1)",
  difficulty: "Hard",
  pseudocode: `# Miller-Rabin Primality Test
# Input: Integer n > 2, number of rounds k
# Output: "composite" or "probably prime"

Algorithm MILLER-RABIN-PRIMALITY-TEST(n, k)
    # Handle edge cases
    if n ≤ 1 then
        return "composite"
    if n ≤ 3 then
        return "prime"
    if n mod 2 = 0 then
        return "composite"
    
    # Write n-1 as d·2^s
    d ← n - 1
    s ← 0
    while d mod 2 = 0 do
        d ← d / 2
        s ← s + 1
    end while
    
    # Test k times
    for i ← 1 to k do
        a ← random integer in [2, n-2]
        x ← a^d mod n
        if x = 1 or x = n-1 then
            continue
        end if
        
        for j ← 1 to s-1 do
            x ← x² mod n
            if x = n-1 then
                break
            end if
            if x = 1 then
                return "composite"
            end if
        end for
        
        if x ≠ n-1 then
            return "composite"
        end if
    end for
    
    return "probably prime"`,
  example: `# Example:
# Input: n = 17, k = 5
# 
# Step 1: n-1 = 16 = 1·2^4
#         d = 1, s = 4
# 
# Round 1: a = 2
#          x = 2^1 mod 17 = 2
#          x² mod 17 = 4
#          x² mod 17 = 16 = n-1
#          continue
# 
# Round 2: a = 3
#          x = 3^1 mod 17 = 3
#          x² mod 17 = 9
#          x² mod 17 = 13
#          x² mod 17 = 16 = n-1
#          continue
# 
# ... (3 more rounds)
# 
# Output: "probably prime"`,
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
    # Handle edge cases
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False
    
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
        
        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
            if x == 1:
                return False
        else:
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
n = 17  # Known prime
k = 5
is_prime = miller_rabin_test(n, k)
print(f"Is {n} prime? {is_prime}")  # True

n = 561  # Carmichael number
is_prime = miller_rabin_test(n, k)
print(f"Is {n} prime? {is_prime}")  # False`,
  category: "Number Theory",
  keySteps: [
    "Handle edge cases (n ≤ 1, n ≤ 3, even numbers)",
    "Factor n-1 into d·2^s",
    "Choose random base a",
    "Test for strong pseudoprimes",
    "Repeat k times for accuracy",
  ],
};
