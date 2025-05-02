import type { AlgorithmPattern } from "../../types";
import { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
import { matrixExponentiationPattern } from "./matrix-exponentiation";
import { gridTraversalPattern } from "./grid-traversal";
import { matrixOperationsPattern } from "./matrix-operations";
type MatrixPatternKey =
  | "Matrix Chain Multiplication"
  | "Matrix Exponentiation"
  | "Grid Traversal"
  | "Matrix Operations";

export const matrixPatterns: Record<MatrixPatternKey, AlgorithmPattern> = {
  "Matrix Chain Multiplication": matrixChainMultiplicationPattern,
  "Matrix Exponentiation": matrixExponentiationPattern,
  "Grid Traversal": gridTraversalPattern,
  "Matrix Operations": matrixOperationsPattern,
};

export { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
export { matrixExponentiationPattern } from "./matrix-exponentiation";
export { gridTraversalPattern } from "./grid-traversal";
export { matrixOperationsPattern } from "./matrix-operations";
