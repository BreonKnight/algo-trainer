import { PatternKey } from "./types";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4";
import { monsterHunterPatternsExtended5 } from "./monsterHunterPatternsExtended5";
import { monsterHunterPatternsExtended6 } from "./monsterHunterPatternsExtended6";
import { monsterHunterPatterns } from "./monsterHunterPatterns";
import { PATTERN_KEYS } from "./types";
import { algorithmPatterns } from "./patterns";

// Combine all patterns
const allPatterns = new Map<PatternKey, string>([
  ...monsterHunterPatternsExtended,
  ...monsterHunterPatternsExtended2,
  ...monsterHunterPatternsExtended3,
  ...monsterHunterPatternsExtended4,
  ...monsterHunterPatternsExtended5,
  ...monsterHunterPatternsExtended6,
  ...monsterHunterPatterns,
]);

// Organize patterns by category
export const monsterHunterPatternsByCategory = {
  // Basic Algorithms
  Searching: [
    "Binary Search",
    "Linear Search",
    "Binary Search on Answer",
    "Ternary Search",
    "Jump Search",
    "Exponential Search",
    "Interpolation Search",
    "Fibonacci Search",
  ],

  Sorting: [
    "Quick Sort",
    "Merge Sort",
    "Stack Sort",
    "Heap Sort",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
  ],

  // Data Structures
  Trees: [
    "Binary Search Tree",
    "Tree",
    "Tree DP",
    "B Tree",
    "AVL Tree",
    "Red Black Tree",
    "Fenwick Tree",
    "Segment Tree",
  ],

  Graphs: [
    "Graph",
    "Graph Dijkstra",
    "Graph Kosaraju",
    "Graph Prim",
    "Graph Articulation Points",
    "Graph Bridges",
    "Strongly Connected Components",
    "Network Flow",
    "Maximum Bipartite Matching",
    "A* Search",
    "Grid Traversal",
    "Graph Kruskal" as PatternKey,
    "Prim" as PatternKey,
  ],

  Strings: [
    "String",
    "Rabin-Karp",
    "KMP Algorithm",
    "Manacher's Algorithm",
    "Z Algorithm",
    "Suffix Tree",
    "Suffix Array",
  ],

  // Advanced Algorithms
  "Dynamic Programming": [
    "Dynamic Programming",
    "Dynamic Programming Pattern",
    "Dynamic Programming Fibonacci",
    "Dynamic Programming Iterative",
    "Dynamic Programming Coin Change",
    "State Compression DP",
    "Digit DP",
    "Tree DP",
    "Probability DP",
  ],

  Greedy: [
    "Greedy",
    "Greedy Activity Selection",
    "Greedy Fractional Knapsack",
    "Greedy Job Scheduling",
    "Greedy Huffman Coding",
    "Greedy Dijkstra",
  ],

  Backtracking: ["Backtracking"],

  // Specialized Algorithms
  "Number Theory": [
    "Extended Euclidean",
    "Chinese Remainder Theorem",
    "Sieve of Eratosthenes",
    "Miller-Rabin Algorithm",
  ],

  "Bit Manipulation": ["Bit Manipulation"],

  // Tree Algorithms
  "Tree Algorithms": ["LCA", "Heavy Light Decomposition"],

  // Matrix Operations
  "Matrix Operations": [
    "Matrix Operations",
    "Matrix Traversal",
    "Matrix Traversal Recursive",
    "Matrix Spiral Traversal",
    "Matrix Spiral Recursive",
    "Matrix Chain Multiplication",
    "Matrix Exponentiation",
  ],

  // Utility Functions
  Utility: [
    "Two Pointers",
    "Sliding Window",
    "Prefix Sum",
    "Prefix Sums",
    "Floyd Cycle Detection",
    "Memoization",
    "Quickselect",
    "Knapsack",
    "Union Find",
  ],
};

// Verify pattern completeness
export function verifyPatternCompleteness() {
  // Check if all patterns have regular implementations
  const missingRegularPatterns = PATTERN_KEYS.filter(
    (key) => !algorithmPatterns[key]
  );

  // Check if all patterns have Monster Hunter implementations
  const missingMonsterHunterPatterns = PATTERN_KEYS.filter(
    (key) => !allPatterns.has(key as PatternKey)
  );

  // Log results
  console.log("Pattern Verification Results:");
  console.log("----------------------------");

  if (missingRegularPatterns.length > 0) {
    console.log("\nMissing Regular Patterns:");
    missingRegularPatterns.forEach((pattern) => console.log(`- ${pattern}`));
  } else {
    console.log("\n✓ All patterns have regular implementations");
  }

  if (missingMonsterHunterPatterns.length > 0) {
    console.log("\nMissing Monster Hunter Patterns:");
    missingMonsterHunterPatterns.forEach((pattern) =>
      console.log(`- ${pattern}`)
    );
  } else {
    console.log("\n✓ All patterns have Monster Hunter implementations");
  }

  return {
    missingRegularPatterns,
    missingMonsterHunterPatterns,
    totalPatterns: PATTERN_KEYS.length,
    regularPatternsCount: Object.keys(algorithmPatterns).length,
    monsterHunterPatternsCount: allPatterns.size,
  };
}

// Export the combined patterns
export const allMonsterHunterPatterns = allPatterns;

// Run verification if needed
verifyPatternCompleteness();
