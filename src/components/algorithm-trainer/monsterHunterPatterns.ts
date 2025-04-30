import { PatternKey } from "./types";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4";

// Add matrix exponentiation pattern
const matrixExponentiationPattern = new Map<PatternKey, string>([
  [
    "Matrix Operations",
    `# Monster Hunter Matrix Exponentiation Pattern
# Weapon Power Amplification Strategy

def matrix_multiply(a, b):
    # Combine two weapon power matrices
    n = len(a)
    result = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                result[i][j] += a[i][k] * b[k][j]
    return result

def matrix_exponentiation(matrix, power):
    # Amplify weapon power efficiently
    n = len(matrix)
    result = [[1 if i == j else 0 for j in range(n)] for i in range(n)]
    base = [row[:] for row in matrix]
    
    while power > 0:
        if power % 2 == 1:
            result = matrix_multiply(result, base)
        base = matrix_multiply(base, base)
        power //= 2
    
    return result

# Example: Calculate weapon power progression
matrix = [
    [1, 1],
    [1, 0]
]
power = 5
result = matrix_exponentiation(matrix, power)
# Result shows the weapon's power at different stages`,
  ],
]);

// Combine all patterns into a single Map
export const monsterHunterPatterns = new Map<PatternKey, string>([
  ...monsterHunterPatternsExtended,
  ...monsterHunterPatternsExtended2,
  ...monsterHunterPatternsExtended3,
  ...monsterHunterPatternsExtended4,
  ...matrixExponentiationPattern,
]);
