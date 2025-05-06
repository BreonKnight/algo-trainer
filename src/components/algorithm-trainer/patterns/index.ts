import { PatternKey } from "../types/pattern-types";

// Import all pattern categories
import { arrayPatterns } from "./array/index";
import { backtrackingPatterns } from "./backtracking/index";
import { dataStructurePatterns } from "./data-structures/index";
import { divideAndConquerPatterns } from "./divide-and-conquer/index";
import * as dynamicProgramming from "./dynamic-programming";
import * as greedy from "./greedy";
import * as tree from "./tree";
import * as string from "./string";
import * as searching from "./searching";
import * as sorting from "./sorting";
import * as numberTheory from "./number-theory";
import * as matrix from "./matrix";
import * as graph from "./graph";
import * as recursion from "./recursion";

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
];

// Export all implemented patterns
export const patterns = {
  // Dynamic Programming
  ...dynamicProgramming.dynamicProgrammingPatterns,

  // Greedy Algorithms
  ...greedy.greedyPatterns,

  // Tree Algorithms
  ...tree.treePatterns,

  // String Algorithms
  ...string.stringPatterns,

  // Searching Algorithms
  ...searching.searchingPatterns,

  // Sorting Algorithms
  ...sorting.sortingPatterns,

  // Number Theory
  ...numberTheory.numberTheoryPatterns,

  // Matrix Algorithms
  ...matrix.matrixPatterns,

  // Graph Algorithms
  ...graph.graphPatterns,

  // Data Structures
  ...dataStructurePatterns,

  // Divide and Conquer
  ...divideAndConquerPatterns,

  // Array Algorithms
  ...arrayPatterns,

  // Backtracking
  ...backtrackingPatterns,

  // Recursion
  ...recursion.recursionPatterns,
} as const;

// Alias for backward compatibility
export const algorithmPatterns = patterns;

export * from "./data-structures/union-find";

// DEBUG: List patterns missing Monster Hunter guides
import { monsterHunterExplanations } from "../monsterHunterExplanations";

export function logPatternsMissingMonsterHunterGuides() {
  const allPatternKeys = Object.keys(patterns);
  const missingPatterns = allPatternKeys.filter(
    (key) => !monsterHunterExplanations[key as PatternKey]
  );
  console.log("Patterns missing Monster Hunter guides:", missingPatterns);
  return missingPatterns;
}
