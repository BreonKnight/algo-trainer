import type { AlgorithmPattern } from "../../types";
import { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
import { matrixExponentiationPattern } from "./matrix-exponentiation";
import { gridTraversalPattern } from "./grid-traversal";
import { matrixOperationsPattern } from "./matrix-operations";
import { matrixSpiralRecursivePattern } from "./matrix-spiral-recursive";
import { matrixTraversalPattern } from "./matrix-traversal";
import { rotateMatrixPattern } from "./rotate-matrix";
import { matrixSpiralTraversalPattern } from "./matrix-spiral-traversal";
import { matrixTraversalRecursivePattern } from "./matrix-traversal-recursive";

type MatrixPatternKey =
  | "Matrix Chain Multiplication"
  | "Matrix Exponentiation"
  | "Grid Traversal"
  | "Matrix Operations"
  | "Matrix Spiral Recursive"
  | "Matrix Traversal Recursive"
  | "Matrix Traversal"
  | "Rotate Matrix"
  | "Matrix Spiral Traversal";

export const matrixPatterns: Record<MatrixPatternKey, AlgorithmPattern> = {
  "Matrix Chain Multiplication": matrixChainMultiplicationPattern,
  "Matrix Exponentiation": matrixExponentiationPattern,
  "Grid Traversal": gridTraversalPattern,
  "Matrix Operations": matrixOperationsPattern,
  "Matrix Spiral Recursive": matrixSpiralRecursivePattern,
  "Matrix Traversal Recursive": matrixTraversalRecursivePattern,
  "Matrix Traversal": matrixTraversalPattern,
  "Rotate Matrix": rotateMatrixPattern,
  "Matrix Spiral Traversal": matrixSpiralTraversalPattern,
};

export { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
export { matrixExponentiationPattern } from "./matrix-exponentiation";
export { gridTraversalPattern } from "./grid-traversal";
export { matrixOperationsPattern } from "./matrix-operations";
export { matrixSpiralRecursivePattern } from "./matrix-spiral-recursive";
export { matrixTraversalPattern } from "./matrix-traversal";
export { rotateMatrixPattern } from "./rotate-matrix";
export { matrixSpiralTraversalPattern } from "./matrix-spiral-traversal";
export { matrixTraversalRecursivePattern } from "./matrix-traversal-recursive";
