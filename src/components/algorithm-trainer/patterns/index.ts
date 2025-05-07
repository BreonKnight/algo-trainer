import { monsterHunterExplanations } from "@/components/algorithm-trainer/monsterHunterExplanations";
import { arrayPatterns } from "@/components/algorithm-trainer/patterns/array/index";
import { backtrackingPatterns } from "@/components/algorithm-trainer/patterns/backtracking/index";
import { dataStructurePatterns } from "@/components/algorithm-trainer/patterns/data-structures/index";
import { divideAndConquerPatterns } from "@/components/algorithm-trainer/patterns/divide-and-conquer/index";
import { dynamicProgrammingPatterns } from "@/components/algorithm-trainer/patterns/dynamic-programming";
import { graphPatterns } from "@/components/algorithm-trainer/patterns/graph";
import { greedyPatterns } from "@/components/algorithm-trainer/patterns/greedy";
import { matrixPatterns } from "@/components/algorithm-trainer/patterns/matrix";
import { numberTheoryPatterns } from "@/components/algorithm-trainer/patterns/number-theory";
import { recursionPatterns } from "@/components/algorithm-trainer/patterns/recursion";
import { searchingPatterns } from "@/components/algorithm-trainer/patterns/searching";
import { sortingPatterns } from "@/components/algorithm-trainer/patterns/sorting";
import { stringPatterns } from "@/components/algorithm-trainer/patterns/string";
import { treePatterns } from "@/components/algorithm-trainer/patterns/tree";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";

// Import all pattern categories

// Patterns to be implemented later
export const patternsToImplement = [
  // Graph Algorithms
  "Hopcroft-Karp",
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
});

// Alias for backward compatibility
export const algorithmPatterns = patterns;

export * from "@/components/algorithm-trainer/patterns/data-structures/union-find";

// DEBUG: List patterns missing Monster Hunter guides

export function logPatternsMissingMonsterHunterGuides() {
  const allPatternKeys = Object.keys(patterns);
  const missingPatterns = allPatternKeys.filter(
    (key) => !monsterHunterExplanations[key as keyof typeof monsterHunterExplanations]
  );
  console.log("Patterns missing Monster Hunter guides:", missingPatterns);
  return missingPatterns;
}
