import type { AlgorithmPattern } from "../../types";
import { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
import { matrixExponentiationPattern } from "./matrix-exponentiation";
import { gridTraversalPattern } from "./grid-traversal";

type MatrixPatternKey =
  | "Matrix Chain Multiplication"
  | "Matrix Exponentiation"
  | "Grid Traversal";

export const matrixPatterns: Record<MatrixPatternKey, AlgorithmPattern> = {
  "Matrix Chain Multiplication": matrixChainMultiplicationPattern,
  "Matrix Exponentiation": matrixExponentiationPattern,
  "Grid Traversal": gridTraversalPattern,
};

export { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
export { matrixExponentiationPattern } from "./matrix-exponentiation";
export { gridTraversalPattern } from "./grid-traversal";
