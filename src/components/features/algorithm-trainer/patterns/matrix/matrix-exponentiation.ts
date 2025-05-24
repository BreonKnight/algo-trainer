import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const matrixExponentiationPattern: AlgorithmPattern = {
  title: "Matrix Exponentiation",
  description:
    "A technique to efficiently compute the power of a matrix using the divide and conquer approach, reducing the time complexity from O(n) to O(log n).",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(log n)",
  category: "Matrix",
  difficulty: "Hard",
  pseudocode: `function matrixExponentiation(matrix, power):
    if power == 0:
        return identity matrix
    if power == 1:
        return matrix
    if power % 2 == 0:
        half = matrixExponentiation(matrix, power/2)
        return multiply(half, half)
    else:
        half = matrixExponentiation(matrix, (power-1)/2)
        return multiply(multiply(half, half), matrix)`,
  example: `Matrix: [[1, 1], [1, 0]]
Power: 5

Step 1: power = 5 (odd)
  - Calculate matrix^(5-1)/2 = matrix^2
  - Multiply result by original matrix

Step 2: power = 2 (even)
  - Calculate matrix^1
  - Square the result

Result: [[8, 5], [5, 3]]`,
  implementation: `def matrix_multiply(a, b):
    n = len(a)
    result = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                result[i][j] += a[i][k] * b[k][j]
    return result

def matrix_exponentiation(matrix, power):
    n = len(matrix)
    
    # Base cases
    if power == 0:
        # Return identity matrix
        return [[1 if i == j else 0 for j in range(n)] for i in range(n)]
    if power == 1:
        return matrix
    
    # Recursive cases
    if power % 2 == 0:
        # If power is even, square the result of power/2
        half = matrix_exponentiation(matrix, power // 2)
        return matrix_multiply(half, half)
    else:
        # If power is odd, multiply by original matrix
        half = matrix_exponentiation(matrix, (power - 1) // 2)
        return matrix_multiply(matrix_multiply(half, half), matrix)

# Example usage
matrix = [[1, 1], [1, 0]]
power = 5
result = matrix_exponentiation(matrix, power)
print(f"Matrix raised to power {power}:")
for row in result:
    print(row)`,
};
