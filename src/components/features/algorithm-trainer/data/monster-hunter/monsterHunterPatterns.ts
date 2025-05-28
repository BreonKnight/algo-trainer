import { PatternKey } from "@algo-trainer/shared/types/algorithm-types";

import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4";
import { monsterHunterPatternsExtended5 } from "./monsterHunterPatternsExtended5";
import { monsterHunterPatternsExtended6 } from "./monsterHunterPatternsExtended6";
import { monsterHunterPatternsExtended7 } from "./monsterHunterPatternsExtended7";
import { monsterHunterPatternsExtended8 } from "./monsterHunterPatternsExtended8";
import { monsterHunterPatternsExtended9 } from "./monsterHunterPatternsExtended9";

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
export const articulationPointsMonsterHunterPattern = new Map<PatternKey, string>([
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

// Add Shell Sort pattern
const shellSortPattern = new Map<PatternKey, string>([
  [
    "Shell Sort",
    `# Monster Hunter Shell Sort Pattern
# Weapon Upgrade Sequence Optimization

function shell_sort(weapons: number[]): number[] {
  const n = weapons.length;
  
  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
    // Do a gapped insertion sort for this gap size
    for (let i = gap; i < n; i++) {
      // Save current weapon power
      const temp = weapons[i];
      
      // Shift earlier gap-sorted weapons up until the correct
      // location for weapons[i] is found
      let j;
      for (j = i; j >= gap && weapons[j - gap] > temp; j -= gap) {
        weapons[j] = weapons[j - gap];
      }
      
      // Put temp (the original weapons[i]) in its correct location
      weapons[j] = temp;
    }
  }
  
  return weapons;
}

// Example usage:
const weapon_powers = [64, 34, 25, 12, 22, 11, 90];
const sorted_weapons = shell_sort(weapon_powers);
console.log(\`Sorted weapon powers: \${sorted_weapons}\`);

// Tips:
// 1. Use Shell Sort for efficient weapon power progression
// 2. Choose appropriate gap sequences for different weapon types
// 3. Optimize gap reduction strategy for specific monster encounters
// 4. Consider using different gap sequences for different weapon categories
// 5. Use Shell Sort when you need to quickly sort partially upgraded weapons
`,
  ],
]);

// Add Zigzag Traversal pattern
const zigzagTraversalPattern = new Map<PatternKey, string>([
  [
    "Zigzag Traversal",
    `# Monster Hunter Zigzag Traversal Pattern
# Territory Exploration Strategy

def explore_territory_levels(territory_tree):
    """
    Explore territory levels in zigzag pattern.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like exploring territory levels
    - Alternate exploration paths
    - Cover all areas efficiently
    - Plan patrol routes
    
    Example:
    territory_tree = {
        "value": "Base Camp",
        "left": {
            "value": "Ancient Forest",
            "left": {"value": "Forest Edge"},
            "right": {"value": "Forest Depths"}
        },
        "right": {
            "value": "Wildspire Waste",
            "left": {"value": "Desert Edge"},
            "right": {"value": "Desert Center"}
        }
    }
    path = explore_territory_levels(territory_tree)
    # Shows zigzag exploration path
    """
    def get_level_nodes(root):
        if not root:
            return []
        
        result = []
        current_level = [root]
        left_to_right = True
        
        while current_level:
            level_size = len(current_level)
            current_values = []
            
            for _ in range(level_size):
                node = current_level.pop(0)
                current_values.append(node["value"])
                
                if node.get("left"):
                    current_level.append(node["left"])
                if node.get("right"):
                    current_level.append(node["right"])
            
            if not left_to_right:
                current_values.reverse()
            
            result.extend(current_values)
            left_to_right = not left_to_right
        
        return result
    
    return get_level_nodes(territory_tree)

def plan_territory_exploration(territory_tree):
    """
    Plan territory exploration in zigzag pattern.
    
    Args:
        territory_tree: Tree structure of territories
    
    Returns:
        List of territories in zigzag traversal order
    """
    return explore_territory_levels(territory_tree)

# Example usage
territory_tree = {
    "value": "Base Camp",
    "left": {
        "value": "Ancient Forest",
        "left": {"value": "Forest Edge"},
        "right": {"value": "Forest Depths"}
    },
    "right": {
        "value": "Wildspire Waste",
        "left": {"value": "Desert Edge"},
        "right": {"value": "Desert Center"}
    }
}

path = plan_territory_exploration(territory_tree)
print("Territory exploration path:", path)

# Monster Hunter Tips:
# 1. Use for level exploration
# 2. Alternate directions
# 3. Cover all areas
# 4. Plan patrol routes
# 5. Consider level order`,
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
  ...monsterHunterPatternsExtended9,
  ...matrixExponentiationPattern,
  ...fastFourierTransformPattern,
  ...articulationPointsMonsterHunterPattern,
  ...shellSortPattern,
  ...zigzagTraversalPattern,
]);
