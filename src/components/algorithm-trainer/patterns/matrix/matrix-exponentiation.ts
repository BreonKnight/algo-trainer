import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const matrixExponentiationPattern: AlgorithmPattern = {
  title: "Matrix Exponentiation",
  description: "Compute the power of a matrix efficiently using exponentiation by squaring.",
  timeComplexity: "O(n³ log k)",
  spaceComplexity: "O(n²)",
  pseudocode: `function matrixPower(matrix, power):
    result = identityMatrix(len(matrix))
    while power > 0:
        if power % 2 == 1:
            result = multiply(result, matrix)
        matrix = multiply(matrix, matrix)
        power = power // 2
    return result`,
  example: `const matrixPatternPatternPatternPattern = [
  [1, 1],
  [1, 0]
];
const resultPatternPatternPatternPattern = matrixPower(matrix, 5);
// [[8, 5], [5, 3]] (5th Fibonacci number)`,
  implementation: `def matrix_power(matrix: list[list[int]], power: int) -> list[list[int]]:
    """
    Compute the power of a matrix efficiently using exponentiation by squaring.
    
    Args:
        matrix: Square matrix to raise to a power
        power: Non-negative integer power to raise the matrix to
    
    Returns:
        Matrix raised to the given power
    """
    n = len(matrix)
    result = identity_matrix(n)
    base = matrix
    
    while power > 0:
        if power % 2 == 1:
            result = multiply(result, base)
        base = multiply(base, base)
        power = power // 2
    
    return result

def identity_matrix(n: int) -> list[list[int]]:
    """
    Create an n x n identity matrix.
    
    Args:
        n: Size of the matrix
    
    Returns:
        n x n identity matrix
    """
    return [[1 if i == j else 0 for j in range(n)] for i in range(n)]

def multiply(a: list[list[int]], b: list[list[int]]) -> list[list[int]]:
    """
    Multiply two square matrices.
    
    Args:
        a: First matrix
        b: Second matrix
    
    Returns:
        Product of the two matrices
    """
    n = len(a)
    result = [[0] * n for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            for k in range(n):
                result[i][j] += a[i][k] * b[k][j]
    
    return result

# Example usage
matrix = [
    [1, 1],
    [1, 0]
]
result = matrix_power(matrix, 5)
print(f"Matrix raised to power 5: {result}")  # [[8, 5], [5, 3]] (5th Fibonacci number)`,
  category: "Matrix",
};
