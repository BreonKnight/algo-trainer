import type { AlgorithmPattern } from "../../types";

export const chineseRemainderTheoremPattern: AlgorithmPattern = {
  title: "Chinese Remainder Theorem",
  description:
    "A theorem that gives a unique solution to simultaneous congruences with pairwise coprime moduli. It's useful for solving systems of linear congruences.",
  timeComplexity:
    "O(n log M), where n is the number of congruences and M is the product of moduli",
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
// Solve system of congruences:
// x ≡ 2 mod 3
// x ≡ 3 mod 5
// x ≡ 2 mod 7
const result = chineseRemainderTheorem(
  [2, 3, 2],  // remainders
  [3, 5, 7]   // moduli
);
// Result will be 23
  `,
  implementation: `
function extendedEuclidean(a: number, b: number): { gcd: number; x: number; y: number } {
  if (b === 0) return { gcd: a, x: 1, y: 0 };
  const { gcd, x: x1, y: y1 } = extendedEuclidean(b, a % b);
  return { gcd, x: y1, y: x1 - Math.floor(a / b) * y1 };
}

function chineseRemainderTheorem(remainders: number[], moduli: number[]): number {
  const n = remainders.length;
  let M = 1;
  for (const m of moduli) {
    M *= m;
  }
  
  let result = 0;
  for (let i = 0; i < n; i++) {
    const Mi = M / moduli[i];
    const { x } = extendedEuclidean(Mi, moduli[i]);
    result += remainders[i] * Mi * x;
  }
  
  return ((result % M) + M) % M;
}
  `,
  category: "number-theory",
};
