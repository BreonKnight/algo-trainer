import { monsterHunterExplanations } from "@/components/features/algorithm-trainer/data/monster-hunter/monsterHunterExplanations";
import { arrayPatterns } from "@/components/features/algorithm-trainer/patterns/array/index";
import { backtrackingPatterns } from "@/components/features/algorithm-trainer/patterns/backtracking/index";
import { dataStructurePatterns } from "@/components/features/algorithm-trainer/patterns/data-structures/index";
import { divideAndConquerPatterns } from "@/components/features/algorithm-trainer/patterns/divide-and-conquer/index";
import { dynamicProgrammingPatterns } from "@/components/features/algorithm-trainer/patterns/dynamic-programming";
import { graphPatterns } from "@/components/features/algorithm-trainer/patterns/graph";
import { greedyPatterns } from "@/components/features/algorithm-trainer/patterns/greedy";
import { matrixPatterns } from "@/components/features/algorithm-trainer/patterns/matrix";
import { numberTheoryPatterns } from "@/components/features/algorithm-trainer/patterns/number-theory";
import { otherPatterns } from "@/components/features/algorithm-trainer/patterns/other";
import { recursionPatterns } from "@/components/features/algorithm-trainer/patterns/recursion";
import { searchingPatterns } from "@/components/features/algorithm-trainer/patterns/searching";
import { sortingPatterns } from "@/components/features/algorithm-trainer/patterns/sorting";
import { stringPatterns } from "@/components/features/algorithm-trainer/patterns/string";
import { treePatterns } from "@/components/features/algorithm-trainer/patterns/tree";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";

// Import all pattern categories

// Patterns to be implemented later
export const patternsToImplement = [
  // Graph Algorithms
  "Hopcroft-Karp's Algorithm",
  "Tarjan's Algorithm",
  "Eulerian Path/Circuit",
  "Hamiltonian Path/Circuit",

  // String Algorithms
  "Suffix Automaton",
  "Aho-Corasick",
  "Burrows-Wheeler Transform",

  // Advanced Data Structures
  "B+ Tree",
  "Skip List",
  "Bloom Filter",
  "Count-Min Sketch",

  // Advanced Algorithms
  "Fast Fourier Transform",
  "Karatsuba Multiplication",
  "Miller-Rabin Primality Test",
  "Pollard's Rho Algorithm",

  // Optimization
  "Simulated Annealing",
  "Genetic Algorithm",
  "Branch and Bound",

  // Geometry
  "Convex Hull",
  "Line Sweep",
  "Voronoi Diagram",

  // Game Theory
  "Minimax Algorithm",
  "Alpha-Beta Pruning",
  "Nim Game",

  // Machine Learning
  "K-Means Clustering",
  "Decision Trees",
  "Neural Networks",
] as const;

// Export all implemented patterns
export const patterns = createPatternRecord({
  // Dynamic Programming
  ...dynamicProgrammingPatterns,

  // Greedy Algorithms
  ...greedyPatterns,

  // Tree Algorithms
  ...treePatterns,

  // String Algorithms
  ...stringPatterns,

  // Searching Algorithms
  ...searchingPatterns,

  // Sorting Algorithms
  ...sortingPatterns,

  // Number Theory
  ...numberTheoryPatterns,

  // Matrix Algorithms
  ...matrixPatterns,

  // Graph Algorithms
  ...graphPatterns,

  // Data Structures
  ...dataStructurePatterns,

  // Divide and Conquer
  ...divideAndConquerPatterns,

  // Array Algorithms
  ...arrayPatterns,

  // Backtracking
  ...backtrackingPatterns,

  // Recursion
  ...recursionPatterns,

  // Other Patterns
  ...otherPatterns,
});

// Alias for backward compatibility
export const algorithmPatterns = patterns;

export * from "@algo-trainer/shared/data-structures/union-find";

// DEBUG: List patterns missing Monster Hunter guides

export function logPatternsMissingMonsterHunterGuides() {
  const allPatternKeys = Object.keys(patterns);
  const missingPatterns = allPatternKeys.filter(
    (key) => !monsterHunterExplanations[key as keyof typeof monsterHunterExplanations]
  );
  console.log("Patterns missing Monster Hunter guides:", missingPatterns);
  return missingPatterns;
}
