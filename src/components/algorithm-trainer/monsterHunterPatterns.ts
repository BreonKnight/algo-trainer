import { PatternKey } from "./types.ts";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended.ts";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2.ts";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3.ts";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4.ts";
import { monsterHunterPatternsExtended5 } from "./monsterHunterPatternsExtended5.ts";
import { monsterHunterPatternsExtended6 } from "./monsterHunterPatternsExtended6.ts";
import { monsterHunterPatternsExtended7 } from "./monsterHunterPatternsExtended7.ts";
import { monsterHunterPatternsExtended8 } from "./monsterHunterPatternsExtended8.ts";

// Add matrix exponentiation pattern
const matrixExponentiationPattern = new Map<PatternKey, string>([
  [
    "Matrix Exponentiation",
    `# Monster Hunter Matrix Exponentiation Pattern
# Weapon Power Amplification Strategy

function multiply_matrices(a: number[][], b: number[][]): number[][] {
  const n = a.length;
  const result = Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

function amplify_weapon_power(base_power: number, amplification: number): number {
  // Represent weapon power progression as matrix exponentiation
  const matrix = [[1, 1], [1, 0]];
  let result = [[1, 0], [0, 1]]; // Identity matrix
  let power = amplification;
  
  while (power > 0) {
    if (power % 2 === 1) {
      result = multiply_matrices(result, matrix);
    }
    matrix = multiply_matrices(matrix, matrix);
    power = Math.floor(power / 2);
  }
  
  return result[0][0] * base_power;
}

// Example usage:
const base_power = 100;
const amplification = 5;
const amplified_power = amplify_weapon_power(base_power, amplification);
console.log(\`Weapon power after amplification: \${amplified_power}\`);

// Tips:
// 1. Use matrix exponentiation for efficient power progression
// 2. Consider weapon upgrade paths as matrix transformations
// 3. Optimize amplification sequences for maximum power gain
// 4. Use identity matrix for base case
// 5. Apply binary exponentiation for logarithmic time complexity
`,
  ],
]);

// Add Fast Fourier Transform pattern
export const fastFourierTransformPattern = new Map<PatternKey, string>([
  [
    "Fast Fourier Transform",
    `# Monster Hunter Fast Fourier Transform Pattern
# Monster Attack Pattern Analysis

function fft(sequence: number[]): number[] {
  const n = sequence.length;
  if (n === 1) return sequence;
  
  const even = fft(sequence.filter((_, i) => i % 2 === 0));
  const odd = fft(sequence.filter((_, i) => i % 2 === 1));
  
  const result = Array(n).fill(0);
  for (let k = 0; k < n / 2; k++) {
    const t = Math.exp(-2 * Math.PI * k / n) * odd[k];
    result[k] = even[k] + t;
    result[k + n/2] = even[k] - t;
  }
  
  return result;
}

// Example usage:
const attack_pattern = [1, 0, -1, 0, 1, 0, -1, 0]; // Simple repeating pattern
const frequency_analysis = fft(attack_pattern);
console.log(\`Frequency analysis of attack pattern: \${frequency_analysis}\`);

// Tips:
// 1. Use FFT to analyze monster attack patterns
// 2. Identify periodic patterns in monster movements
// 3. Convert time-domain signals to frequency domain
// 4. Use complex numbers for phase information
// 5. Apply inverse FFT for pattern synthesis
`,
  ],
]);

// Add Articulation Points pattern
export const articulationPointsMonsterHunterPattern = new Map<
  PatternKey,
  string
>([
  [
    "Articulation Points",
    `# Monster Hunter Articulation Points Pattern
# Critical Territory Junction Analysis

function find_articulation_points(territories: number[][]): number[] {
  const n = territories.length;
  const visited = Array(n).fill(false);
  const disc = Array(n).fill(0);
  const low = Array(n).fill(0);
  const parent = Array(n).fill(-1);
  const ap = Array(n).fill(false);
  let time = 0;
  
  function dfs(u: number): void {
    visited[u] = true;
    disc[u] = low[u] = ++time;
    let children = 0;
    
    for (const v of territories[u]) {
      if (!visited[v]) {
        children++;
        parent[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);
        
        if (parent[u] === -1 && children > 1) ap[u] = true;
        if (parent[u] !== -1 && low[v] >= disc[u]) ap[u] = true;
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  
  return ap.map((is_ap, i) => is_ap ? i : -1).filter(i => i !== -1);
}

// Example usage:
const territory_connections = [
  [1, 2],
  [0, 2, 3],
  [0, 1],
  [1, 4],
  [3]
];
const critical_junctions = find_articulation_points(territory_connections);
console.log(\`Critical territory junctions: \${critical_junctions}\`);

// Tips:
// 1. Identify critical territory junctions
// 2. Plan backup routes around articulation points
// 3. Use DFS to find vulnerable connections
// 4. Track discovery time and low values
// 5. Consider multiple connected components
`,
  ],
]);

// Export all patterns
export const monsterHunterPatterns = new Map<PatternKey, string>([
  ...monsterHunterPatternsExtended,
  ...monsterHunterPatternsExtended2,
  ...monsterHunterPatternsExtended3,
  ...monsterHunterPatternsExtended4,
  ...monsterHunterPatternsExtended5,
  ...monsterHunterPatternsExtended6,
  ...monsterHunterPatternsExtended7,
  ...monsterHunterPatternsExtended8,
  ...matrixExponentiationPattern,
  ...fastFourierTransformPattern,
  ...articulationPointsMonsterHunterPattern,
]);
