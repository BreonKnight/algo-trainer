import type { AlgorithmPattern } from "../../types";

export const matrixChainMultiplicationPattern: AlgorithmPattern = {
  title: "Matrix Chain Multiplication",
  description:
    "Find the optimal way to multiply a chain of matrices to minimize the number of scalar multiplications.",
  timeComplexity: "O(n³)",
  spaceComplexity: "O(n²)",
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
  example: `const dimensions = [10, 30, 5, 60];
const [m, s] = matrixChainOrder(dimensions);
// m[0][2] = 4500 (minimum multiplications)
// s[0][2] = 1 (optimal split)`,
  implementation: `function matrixChainOrder(p: number[]): [number[][], number[][]] {
  const n = p.length - 1;
  const m: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  const s: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  
  for (let l = 2; l <= n; l++) {
    for (let i = 0; i < n - l + 1; i++) {
      const j = i + l - 1;
      m[i][j] = Infinity;
      
      for (let k = i; k < j; k++) {
        const cost = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
        if (cost < m[i][j]) {
          m[i][j] = cost;
          s[i][j] = k;
        }
      }
    }
  }
  
  return [m, s];
}`,
  category: "matrix",
};
