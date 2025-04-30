import type { AlgorithmPattern } from "../../types";

export const extendedEuclideanPattern: AlgorithmPattern = {
  title: "Extended Euclidean Algorithm",
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
// Find GCD and coefficients for 35 and 15
const result = extendedEuclidean(35, 15);
// Result will be { gcd: 5, x: 1, y: -2 }
// Because 35*1 + 15*(-2) = 5
  `,
  implementation: `
function extendedEuclidean(a: number, b: number): { gcd: number; x: number; y: number } {
  if (b === 0) {
    return { gcd: a, x: 1, y: 0 };
  }
  
  const { gcd, x: x1, y: y1 } = extendedEuclidean(b, a % b);
  const x = y1;
  const y = x1 - Math.floor(a / b) * y1;
  
  return { gcd, x, y };
}
  `,
  category: "number-theory",
};
