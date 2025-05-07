import { gridTraversalPattern } from "@/src/components/algorithm-trainer/patterns/matrix/grid-traversal";
import { matrixChainMultiplicationPattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-chain-multiplication";
import { matrixExponentiationPattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-exponentiation";
import { matrixOperationsPattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-operations";
import { matrixSpiralRecursivePattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-spiral-recursive";
import { matrixSpiralTraversalPattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-spiral-traversal";
import { matrixTraversalPattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-traversal";
import { matrixTraversalRecursivePattern } from "@/src/components/algorithm-trainer/patterns/matrix/matrix-traversal-recursive";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/src/lib/patterns/pattern-utils";

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
