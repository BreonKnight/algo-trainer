import { PatternKey, PATTERN_KEYS } from "./types.ts";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended.ts";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2.ts";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3.ts";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4.ts";
import { monsterHunterPatternsExtended5 } from "./monsterHunterPatternsExtended5.ts";
import { monsterHunterPatternsExtended6 } from "./monsterHunterPatternsExtended6.ts";
import { monsterHunterPatternsExtended7 } from "./monsterHunterPatternsExtended7.ts";
import { monsterHunterPatterns } from "./monsterHunterPatterns.ts";
import { algorithmPatterns } from "./patterns/index.ts";

// Combine all patterns
const allPatterns = new Map<PatternKey, string>([
  ...monsterHunterPatternsExtended,
  ...monsterHunterPatternsExtended2,
  ...monsterHunterPatternsExtended3,
  ...monsterHunterPatternsExtended4,
  ...monsterHunterPatternsExtended5,
  ...monsterHunterPatternsExtended6,
  ...monsterHunterPatternsExtended7,
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
    "Quickselect",
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
    "Red-Black Tree",
    "Fenwick Tree",
    "Segment Tree",
  ],

  Graphs: [
    "Graph",
    "Graph Dijkstra",
    "Graph Kosaraju",
    "Graph Articulation Points",
    "Graph Bridges",
    "Strongly Connected Components",
    "Network Flow",
    "Maximum Bipartite Matching",
    "A* Search",
    "Grid Traversal",
    "Graph Kruskal",
    "Prim",
  ],

  Strings: [
    "String",
    "Z Algorithm",
    "Manacher's Algorithm",
    "KMP Algorithm",
    "Rabin Karp",
    "Suffix Array",
    "Suffix Tree",
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
    "Miller-Rabin Primality Test",
  ],

  "Bit Manipulation": ["Bit Manipulation"],

  // Tree Algorithms
  "Tree Algorithms": ["Heavy Light Decomposition"],

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
    "Union Find",
  ],
};

// Verify pattern completeness
export function verifyPatternCompleteness() {
  const missingRegularPatterns = PATTERN_KEYS.filter((key: PatternKey) => {
    return !algorithmPatterns[key];
  });

  const missingMonsterHunterPatterns = PATTERN_KEYS.filter(
    (key: PatternKey) => {
      return !allPatterns.has(key);
    }
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

// Check for inconsistencies between pattern keys
const regularPatternKeys = Object.keys(algorithmPatterns);
const monsterHunterPatternKeys = Array.from(allPatterns.keys());

// Find patterns that exist in regular implementations but not in Monster Hunter patterns
const missingInMonsterHunter = regularPatternKeys.filter(
  (pattern: string) => !monsterHunterPatternKeys.includes(pattern as PatternKey)
);

// Find patterns that exist in Monster Hunter patterns but not in regular implementations
const missingInRegular = monsterHunterPatternKeys.filter(
  (pattern: PatternKey) => !regularPatternKeys.includes(pattern)
);

// Find patterns with different names
const differentNames = regularPatternKeys.filter((pattern: string) => {
  const monsterHunterPattern = monsterHunterPatternKeys.find(
    (mhPattern: PatternKey) => mhPattern.toLowerCase() === pattern.toLowerCase()
  );
  return monsterHunterPattern && monsterHunterPattern !== pattern;
});

// Log results
console.log("Pattern Inconsistency Check Results:");
console.log("----------------------------------");

if (missingInMonsterHunter.length > 0) {
  console.log("\nPatterns missing in Monster Hunter implementations:");
  missingInMonsterHunter.forEach((pattern) => console.log(`- ${pattern}`));
}

if (missingInRegular.length > 0) {
  console.log("\nPatterns missing in regular implementations:");
  missingInRegular.forEach((pattern) => console.log(`- ${pattern}`));
}

if (differentNames.length > 0) {
  console.log("\nPatterns with different names:");
  differentNames.forEach((pattern) => {
    const monsterHunterPattern = monsterHunterPatternKeys.find(
      (mhPattern) => mhPattern.toLowerCase() === pattern.toLowerCase()
    );
    console.log(
      `- Regular: "${pattern}" vs Monster Hunter: "${monsterHunterPattern}"`
    );
  });
}

console.log("\nSummary:");
console.log("--------");
console.log(`Total regular patterns: ${regularPatternKeys.length}`);
console.log(
  `Total Monster Hunter patterns: ${monsterHunterPatternKeys.length}`
);
console.log(`Missing in regular: ${missingInRegular.length}`);
console.log(`Missing in Monster Hunter: ${missingInMonsterHunter.length}`);
console.log(`Different names: ${differentNames.length}`);
