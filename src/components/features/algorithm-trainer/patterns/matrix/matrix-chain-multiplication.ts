import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const matrixChainMultiplicationPattern: AlgorithmPattern = {
  title: "Matrix Chain Multiplication",
  description:
    "Find the optimal way to multiply a chain of matrices to minimize the number of scalar multiplications.",
  timeComplexity: "O(n³)",
  spaceComplexity: "O(n²)",
  category: "Matrix",
  difficulty: "Hard",
  pseudocode: `function matrixChainOrder(p):
    n = len(p) - 1
    m = [[0] * n for _ in range(n)]
    s = [[0] * n for _ in range(n)]
    
    for l in range(2, n+1):
        for i in range(n-l+1):
            j = i + l - 1
            m[i][j] = float('inf')
            for k in range(i, j):
                cost = m[i][k] + m[k+1][j] + p[i]*p[k+1]*p[j+1]
                if cost < m[i][j]:
                    m[i][j] = cost
                    s[i][j] = k
    
    return m, s`,
  example: `const dimensionsPatternPatternPatternPattern = [10, 30, 5, 60];
const [m, s] = matrixChainOrder(dimensions);
// m[0][2] = 4500 (minimum multiplications)
// s[0][2] = 1 (optimal split)`,
  implementation: `def matrix_chain_order(p: list[int]) -> tuple[list[list[int]], list[list[int]]]:
    """
    Find the optimal way to multiply a chain of matrices to minimize the number of scalar multiplications.
    
    Args:
        p: List of matrix dimensions where p[i-1] x p[i] represents the dimensions of the i-th matrix
    
    Returns:
        Tuple containing:
        - m: Minimum number of scalar multiplications needed
        - s: Optimal split points for parenthesization
    """
    n = len(p) - 1
    m = [[0] * n for _ in range(n)]  # Minimum number of multiplications
    s = [[0] * n for _ in range(n)]  # Split points
    
    for l in range(2, n + 1):  # l is the chain length
        for i in range(n - l + 1):
            j = i + l - 1
            m[i][j] = float('inf')
            
            for k in range(i, j):
                cost = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1]
                if cost < m[i][j]:
                    m[i][j] = cost
                    s[i][j] = k
    
    return m, s

def print_optimal_parenthesization(s: list[list[int]], i: int, j: int) -> str:
    """
    Print the optimal parenthesization of matrix chain multiplication.
    
    Args:
        s: Split points matrix
        i: Start index
        j: End index
    
    Returns:
        String representation of optimal parenthesization
    """
    if i == j:
        return f"A{i + 1}"
    else:
        return f"({print_optimal_parenthesization(s, i, s[i][j])} x {print_optimal_parenthesization(s, s[i][j] + 1, j)})"

# Example usage
dimensions = [10, 30, 5, 60]
m, s = matrix_chain_order(dimensions)
print(f"Minimum number of multiplications: {m[0][2]}")
print(f"Optimal parenthesization: {print_optimal_parenthesization(s, 0, 2)}")`,
};
