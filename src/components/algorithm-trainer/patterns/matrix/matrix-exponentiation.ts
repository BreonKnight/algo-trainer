import type { AlgorithmPattern } from "../../types";

export const matrixExponentiationPattern: AlgorithmPattern = {
  title: "Matrix Exponentiation",
  description:
    "Compute the power of a matrix efficiently using exponentiation by squaring.",
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
  example: `const matrix = [
  [1, 1],
  [1, 0]
];
const result = matrixPower(matrix, 5);
// [[8, 5], [5, 3]] (5th Fibonacci number)`,
  implementation: `function matrixPower(matrix: number[][], power: number): number[][] {
  const n = matrix.length;
  let result = identityMatrix(n);
  let base = matrix;
  
  while (power > 0) {
    if (power % 2 === 1) {
      result = multiply(result, base);
    }
    base = multiply(base, base);
    power = Math.floor(power / 2);
  }
  
  return result;
}

function identityMatrix(n: number): number[][] {
  return Array(n).fill(0).map((_, i) => 
    Array(n).fill(0).map((_, j) => i === j ? 1 : 0)
  );
}

function multiply(a: number[][], b: number[][]): number[][] {
  const n = a.length;
  const result: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  
  return result;
}`,
  category: "matrix",
};
