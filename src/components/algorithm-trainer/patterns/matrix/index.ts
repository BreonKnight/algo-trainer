import { AlgorithmPattern } from "../../types/pattern-types";
import { createPatternRecord } from "../../../../lib/patterns/pattern-utils";
import { matrixChainMultiplicationPattern } from "./matrix-chain-multiplication";
import { matrixExponentiationPattern } from "./matrix-exponentiation";
import { gridTraversalPattern } from "./grid-traversal";
import { matrixOperationsPattern } from "./matrix-operations";
import { matrixSpiralRecursivePattern } from "./matrix-spiral-recursive";
import { matrixTraversalPattern } from "./matrix-traversal";
import { matrixSpiralTraversalPattern } from "./matrix-spiral-traversal";
import { matrixTraversalRecursivePattern } from "./matrix-traversal-recursive";

export const matrixPatterns = createPatternRecord<AlgorithmPattern>({
  "Matrix Chain Multiplication": matrixChainMultiplicationPattern,
  "Matrix Exponentiation": matrixExponentiationPattern,
  "Grid Traversal": gridTraversalPattern,
  "Matrix Operations": matrixOperationsPattern,
  "Matrix Spiral Recursive": matrixSpiralRecursivePattern,
  "Matrix Traversal Recursive": matrixTraversalRecursivePattern,
  "Matrix Traversal": matrixTraversalPattern,
  "Matrix Spiral Traversal": matrixSpiralTraversalPattern,
});
