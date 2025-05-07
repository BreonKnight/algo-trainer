import type { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const chineseRemainderTheoremPattern: AlgorithmPattern = {
  title: "Chinese Remainder Theorem",
  description:
    "A theorem that gives a unique solution to simultaneous congruences with pairwise coprime moduli. It's useful for solving systems of linear congruences.",
  timeComplexity: "O(n log M), where n is the number of congruences and M is the product of moduli",
  spaceComplexity: "O(1)",
  pseudocode: `
1. Compute product of all moduli: M = m1 * m2 * ... * mn
2. For each congruence (ai, mi):
   a. Compute Mi = M/mi
   b. Find inverse of Mi modulo mi
   c. Add ai * Mi * inverse to solution
3. Return solution modulo M
  `,
  example: `
# Solve system of congruences:
# x ≡ 2 mod 3
# x ≡ 3 mod 5
# x ≡ 2 mod 7
result = chinese_remainder_theorem(
  [2, 3, 2],  # remainders
  [3, 5, 7]   # moduli
)
# Result will be 23
  `,
  implementation: `from typing import List, Tuple

def extended_euclidean(a: int, b: int) -> Tuple[int, int, int]:
    """
    Compute the greatest common divisor and coefficients for the equation ax + by = gcd(a, b).
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        Tuple containing (gcd, x, y) where x and y are coefficients
    """
    if b == 0:
        return a, 1, 0
    gcd, x1, y1 = extended_euclidean(b, a % b)
    x = y1
    y = x1 - (a // b) * y1
    return gcd, x, y

def chinese_remainder_theorem(remainders: List[int], moduli: List[int]) -> int:
    """
    Solve a system of linear congruences using the Chinese Remainder Theorem.
    
    Args:
        remainders: List of remainders
        moduli: List of pairwise coprime moduli
    
    Returns:
        Solution to the system of congruences
    """
    n = len(remainders)
    M = 1
    for m in moduli:
        M *= m
    
    result = 0
    for i in range(n):
        Mi = M // moduli[i]
        _, x, _ = extended_euclidean(Mi, moduli[i])
        result += remainders[i] * Mi * x
    
    return ((result % M) + M) % M

# Example usage
remainders = [2, 3, 2]  # x ≡ 2 mod 3, x ≡ 3 mod 5, x ≡ 2 mod 7
moduli = [3, 5, 7]
result = chinese_remainder_theorem(remainders, moduli)
print(f"Solution: {result}")  # 23`,
  category: "Number Theory",
};
