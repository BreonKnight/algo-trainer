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

// Helper function to calculate Levenshtein distance
function levenshteinDistance(a: string, b: string): number {
  const matrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + substitutionCost // substitution
      );
    }
  }

  return matrix[b.length][a.length];
}

// Function to find similar patterns
function findSimilarPatterns(patterns: PatternKey[]): Record<string, string[]> {
  const similarPatterns: Record<string, string[]> = {};

  // Helper function to normalize pattern names for comparison
  const normalizeName = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "") // Remove non-alphanumeric characters
      .replace(/\s+/g, ""); // Remove spaces
  };

  // Check each pattern against all others
  for (let i = 0; i < patterns.length; i++) {
    const currentPattern = patterns[i];
    const normalizedCurrent = normalizeName(currentPattern);
    const similar: string[] = [];

    for (let j = 0; j < patterns.length; j++) {
      if (i === j) continue; // Skip self-comparison

      const otherPattern = patterns[j];
      const normalizedOther = normalizeName(otherPattern);

      // Check for similar patterns using various criteria
      if (
        // Exact match after normalization
        normalizedCurrent === normalizedOther ||
        // One is a substring of the other
        normalizedCurrent.includes(normalizedOther) ||
        normalizedOther.includes(normalizedCurrent) ||
        // Levenshtein distance is small (for similar names)
        (normalizedCurrent.length > 3 &&
          normalizedOther.length > 3 &&
          levenshteinDistance(normalizedCurrent, normalizedOther) <= 2)
      ) {
        similar.push(otherPattern);
      }
    }

    if (similar.length > 0) {
      similarPatterns[currentPattern] = similar;
    }
  }

  return similarPatterns;
}

// Combine all patterns
const allPatterns = new Map<PatternKey, string>(
  [
    ...Array.from(monsterHunterPatternsExtended.entries()),
    ...Array.from(monsterHunterPatternsExtended2.entries()),
    ...Array.from(monsterHunterPatternsExtended3.entries()),
    ...Array.from(monsterHunterPatternsExtended4.entries()),
    ...Array.from(monsterHunterPatternsExtended5.entries()),
    ...Array.from(monsterHunterPatternsExtended6.entries()),
    ...Array.from(monsterHunterPatternsExtended7.entries()),
    ...Array.from(monsterHunterPatterns.entries()),
  ].map(([key, value]) => [key, value] as const)
);

// Organize patterns by category
export const monsterHunterPatternsByCategory = {
  Array: [
    "Two Sums",
    "Two Pointers",
    "Sliding Window",
    "Prefix Sums",
    "Bit Manipulation",
    "Two Sum Dict",
    "Kadane's Algorithm",
  ],
  Searching: [
    "Binary Search",
    "Linear Search",
    "Binary Search on Answer",
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
    "Radix Sort",
  ],

  // Data Structures
  Trees: [
    "Binary Search Tree",
    "Tree",
    "B Tree",
    "AVL Tree",
    "Red-Black Tree",
    "Fenwick Tree",
    "Segment Tree",
  ],

  Graphs: [
    "Graph",
    "Dijkstra",
    "Kosaraju",
    "Articulation Points",
    "Bridges",
    "Strongly Connected Components",
    "Network Flow",
    "Maximum Bipartite Matching",
    "A* Search",
    "Grid Traversal",
    "Kruskal",
    "Prim",
    "Lowest Common Ancestor",
  ],

  Strings: [
    "String Operations",
    "Z Algorithm",
    "Manacher's Algorithm",
    "Knuth-Morris-Pratt",
    "Rabin-Karp",
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

  "Activity Selection": ["Activity Selection"],

  Dijkstra: ["Dijkstra"],

  "Fractional Knapsack": ["Fractional Knapsack"],

  "Huffman Coding": ["Huffman Coding"],

  "Job Scheduling": ["Job Scheduling"],

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

  const missingMonsterHunterPatterns = PATTERN_KEYS.filter((key: PatternKey) => {
    return !allPatterns.has(key);
  });

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
    missingMonsterHunterPatterns.forEach((pattern) => console.log(`- ${pattern}`));
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

// Check for similar patterns in the combined patterns
const similarPatterns = findSimilarPatterns(Array.from(allPatterns.keys()));

// Log similar patterns if any are found
if (Object.keys(similarPatterns).length > 0) {
  console.log("\nSimilar Monster Hunter Patterns Found:");
  Object.entries(similarPatterns).forEach(([pattern, similar]) => {
    console.log(`\n${pattern}:`);
    similar.forEach((similarPattern) => console.log(`- ${similarPattern}`));
  });
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
    console.log(`- Regular: "${pattern}" vs Monster Hunter: "${monsterHunterPattern}"`);
  });
}

console.log("\nSummary:");
console.log("--------");
console.log(`Total regular patterns: ${regularPatternKeys.length}`);
console.log(`Total Monster Hunter patterns: ${monsterHunterPatternKeys.length}`);
console.log(`Missing in regular: ${missingInRegular.length}`);
console.log(`Missing in Monster Hunter: ${missingInMonsterHunter.length}`);
console.log(`Different names: ${differentNames.length}`);
