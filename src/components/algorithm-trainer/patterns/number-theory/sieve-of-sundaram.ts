import { AlgorithmPattern } from "../../types/pattern-types";

export const sieveOfSundaramPattern: AlgorithmPattern = {
  title: "Sieve of Sundaram",
  description:
    "An algorithm to find all prime numbers up to a given limit, optimized for Monster Hunter resource gathering.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `# Sieve of Sundaram
# Input: Integer n > 1
# Output: Array of primes ≤ n

Algorithm SIEVE-OF-SUNDARAM(n)
    # Initialize array
    k ← (n - 1) // 2
    is_prime ← array of size k + 1
    for i ← 1 to k do
        is_prime[i] ← true
    end for
    
    # Mark numbers of form i + j + 2ij
    for i ← 1 to k do
        j ← i
        while i + j + 2*i*j ≤ k do
            is_prime[i + j + 2*i*j] ← false
            j ← j + 1
        end while
    end for
    
    # Collect primes
    primes ← [2]  # 2 is the only even prime
    for i ← 1 to k do
        if is_prime[i] then
            primes.append(2*i + 1)
        end if
    end for
    
    return primes`,
  example: `# Find optimal gathering points in a Monster Hunter area
area_size = 30
gathering_points = find_optimal_gathering_points(area_size)
print(f"Optimal gathering points: {gathering_points}")
# Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`,
  implementation: `def sieve_of_sundaram(n):
    """
    Find all prime numbers up to n using the Sieve of Sundaram algorithm.
    In Monster Hunter context, this helps identify optimal resource gathering patterns.
    
    Args:
        n (int): Upper limit for prime numbers
    
    Returns:
        list: List of prime numbers up to n
    """
    if n < 2:
        return []
    
    # Initialize array for odd numbers
    k = (n - 1) // 2
    is_prime = [True] * (k + 1)
    
    # Mark numbers of form i + j + 2ij
    for i in range(1, k + 1):
        j = i
        while i + j + 2 * i * j <= k:
            is_prime[i + j + 2 * i * j] = False
            j += 1
    
    # Collect primes
    primes = [2]  # 2 is the only even prime
    for i in range(1, k + 1):
        if is_prime[i]:
            primes.append(2 * i + 1)
    
    return primes

def find_optimal_gathering_points(area_size):
    """
    Find optimal gathering points in a Monster Hunter area using prime numbers.
    Primes represent locations with the highest resource density.
    
    Args:
        area_size (int): Size of the area to search
    
    Returns:
        list: List of optimal gathering points
    """
    primes = sieve_of_sundaram(area_size)
    return primes

# Example usage:
# area_size = 30
# gathering_points = find_optimal_gathering_points(area_size)
# print(f"Optimal gathering points: {gathering_points}")`,
  category: "Number Theory",
  pattern: `The Sieve of Sundaram algorithm is used to find all prime numbers up to a given limit. 
In the Monster Hunter context, we use this algorithm to identify optimal resource gathering points in an area.

Key Concepts:
1. Prime numbers represent locations with the highest resource density
2. The algorithm efficiently marks non-prime locations
3. The remaining unmarked locations are optimal gathering points

The algorithm works by:
1. Initializing an array for odd numbers
2. Marking numbers of the form i + j + 2ij as non-prime
3. Collecting the remaining unmarked numbers as primes
4. Transforming these numbers into actual gathering point coordinates

This implementation helps hunters optimize their resource gathering routes by identifying the most valuable locations in an area.`,
};
