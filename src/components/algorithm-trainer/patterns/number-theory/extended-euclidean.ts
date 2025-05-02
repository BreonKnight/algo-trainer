import type { AlgorithmPattern } from "../../types";

export const extendedEuclideanPattern: AlgorithmPattern = {
  title: "Extended Euclidean",
  description:
    "An extension of the Euclidean algorithm that computes the greatest common divisor (GCD) of two integers and finds integers x and y such that ax + by = gcd(a, b).",
  timeComplexity: "O(log min(a, b))",
  spaceComplexity: "O(1)",
  pseudocode: `
1. If b is 0, return (a, 1, 0)
2. Recursively compute (gcd, x1, y1) = extendedEuclidean(b, a mod b)
3. Update x and y:
   x = y1
   y = x1 - (a/b) * y1
4. Return (gcd, x, y)
  `,
  example: `
# Find GCD and coefficients for 35 and 15
result = extended_euclidean(35, 15)
# Result will be (5, 1, -2)
# Because 35*1 + 15*(-2) = 5
  `,
  implementation: `def extended_euclidean(a: int, b: int) -> tuple[int, int, int]:
    """
    Extended Euclidean Algorithm to find GCD and coefficients.
    
    Args:
        a: First integer
        b: Second integer
    
    Returns:
        Tuple containing (gcd, x, y) where:
        - gcd: Greatest common divisor of a and b
        - x, y: Coefficients such that ax + by = gcd(a, b)
    """
    if b == 0:
        return a, 1, 0
    
    gcd, x1, y1 = extended_euclidean(b, a % b)
    x = y1
    y = x1 - (a // b) * y1
    
    return gcd, x, y

def modular_inverse(a: int, m: int) -> int:
    """
    Find the modular multiplicative inverse of a modulo m.
    
    Args:
        a: Integer to find inverse for
        m: Modulus
    
    Returns:
        Modular inverse of a modulo m
    Raises:
        ValueError: If a and m are not coprime
    """
    gcd, x, y = extended_euclidean(a, m)
    if gcd != 1:
        raise ValueError(f"{a} and {m} are not coprime")
    return x % m

# Example usage
a, b = 35, 15
gcd, x, y = extended_euclidean(a, b)
print(f"GCD of {a} and {b}: {gcd}")
print(f"Coefficients: {x} and {y}")
print(f"Verification: {a}*{x} + {b}*{y} = {a*x + b*y}")

# Find modular inverse
a, m = 3, 11
try:
    inv = modular_inverse(a, m)
    print(f"Modular inverse of {a} modulo {m}: {inv}")
    print(f"Verification: {a} * {inv} mod {m} = {(a * inv) % m}")
except ValueError as e:
    print(e)`,
  category: "Number Theory",
};
