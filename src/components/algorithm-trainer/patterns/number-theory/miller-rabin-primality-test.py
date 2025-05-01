def is_prime(n: int, k: int) -> bool:
    """
    Miller-Rabin Primality Test
    Returns True if n is probably prime, False if n is definitely composite.
    
    Args:
        n: The number to test for primality
        k: The number of rounds of testing to perform
        
    Returns:
        bool: True if n is probably prime, False if n is definitely composite
    """
    # Handle edge cases
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False

    # Write n-1 as d*2^s
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1

    # Test k times
    for _ in range(k):
        # Choose random base a
        a = random.randint(2, n - 2)
        x = pow(a, d, n)

        if x == 1 or x == n - 1:
            continue

        # Test for strong pseudoprimes
        is_composite = True
        for _ in range(s - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                is_composite = False
                break
            if x == 1:
                return False

        if is_composite:
            return False

    return True

# Example usage
if __name__ == "__main__":
    import random
    
    # Test cases
    test_cases = [
        (17, 5),  # Prime
        (15, 5),  # Composite
        (2, 5),   # Small prime
        (1, 5),   # Edge case
        (4, 5),   # Even number
    ]
    
    for n, k in test_cases:
        result = is_prime(n, k)
        print(f"is_prime({n}, {k}) = {result}") 