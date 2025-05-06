import { createPatternRecord } from "@/lib/patterns/pattern-utils";

// Import all pattern categories
import { arrayPatterns } from "./array/index";
import { backtrackingPatterns } from "./backtracking/index";
import { dataStructurePatterns } from "./data-structures/index";
import { divideAndConquerPatterns } from "./divide-and-conquer/index";
import { dynamicProgrammingPatterns } from "./dynamic-programming";
import { greedyPatterns } from "./greedy";
import { treePatterns } from "./tree";
import { stringPatterns } from "./string";
import { searchingPatterns } from "./searching";
import { sortingPatterns } from "./sorting";
import { numberTheoryPatterns } from "./number-theory";
import { matrixPatterns } from "./matrix";
import { graphPatterns } from "./graph";
import { recursionPatterns } from "./recursion";

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

export * from "./data-structures/union-find";

// DEBUG: List patterns missing Monster Hunter guides
import { monsterHunterExplanations } from "../monsterHunterExplanations";

export function logPatternsMissingMonsterHunterGuides() {
  const allPatternKeys = Object.keys(patterns);
  const missingPatterns = allPatternKeys.filter(
    (key) => !monsterHunterExplanations[key as keyof typeof monsterHunterExplanations]
  );
  console.log("Patterns missing Monster Hunter guides:", missingPatterns);
  return missingPatterns;
}
