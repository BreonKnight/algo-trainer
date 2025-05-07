import { gridTraversalPattern } from "@/components/algorithm-trainer/patterns/matrix/grid-traversal";
import { matrixChainMultiplicationPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-chain-multiplication";
import { matrixExponentiationPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-exponentiation";
import { matrixOperationsPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-operations";
import { matrixSpiralRecursivePattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-spiral-recursive";
import { matrixSpiralTraversalPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-spiral-traversal";
import { matrixTraversalPattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-traversal";
import { matrixTraversalRecursivePattern } from "@/components/algorithm-trainer/patterns/matrix/matrix-traversal-recursive";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";

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
