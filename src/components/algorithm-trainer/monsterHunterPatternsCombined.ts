import { PatternKey, PATTERN_KEYS } from "./types.ts";
import { AlgorithmPattern } from "./types/pattern-types.ts";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended.ts";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2.ts";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3.ts";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4.ts";
import { monsterHunterPatternsExtended5 } from "./monsterHunterPatternsExtended5.ts";
import { monsterHunterPatternsExtended6 } from "./monsterHunterPatternsExtended6.ts";
import { monsterHunterPatternsExtended7 } from "./monsterHunterPatternsExtended7.ts";
import { monsterHunterPatternsExtended8 } from "./monsterHunterPatternsExtended8.ts";
import { monsterHunterPatternsExtended9 } from "./monsterHunterPatternsExtended9.ts";
import { monsterHunterPatterns } from "./monsterHunterPatterns.ts";
import { patterns as algorithmPatterns } from "./patterns/index.ts";
import { pseudocodePatterns } from "../../lib/pseudocode/index.tsx";

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
    ...Array.from(monsterHunterPatternsExtended8.entries()),
    ...Array.from(monsterHunterPatternsExtended9.entries()),
    ...Array.from(monsterHunterPatterns.entries()),
  ].map(([key, value]) => [key, value] as const)
);

// Organize patterns by category
export const monsterHunterPatternsByCategory = {
  Array: [
    "Two Sum",
    "Two Sum Dict",
    "Two Sum Two Pointers",
    "Sliding Window",
    "Two Pointers",
    "Prefix Sums",
    "Kadane's Algorithm",
    "Quickselect",
    "Union Find",
    "Floyd Cycle Detection",
    "Memoization",
    "Bit Manipulation",
    "Matrix Operations",
    "Matrix Traversal",
    "Matrix Traversal Recursive",
    "Matrix Spiral Traversal",
    "Matrix Spiral Recursive",
    "Matrix Chain Multiplication",
    "Matrix Exponentiation",
    "Zigzag Traversal",
    "Stack Sort",
  ],
  Searching: [
    "Binary Search",
    "Binary Search on Answer",
    "Linear Search",
    "Exponential Search",
    "Interpolation Search",
    "Fibonacci Search",
    "Ternary Search",
    "Jump Search",
  ],

  Sorting: [
    "Quick Sort",
    "Merge Sort",
    "Heap Sort",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Radix Sort",
    "Counting Sort",
    "Bucket Sort",
    "Shell Sort",
  ],

  Trees: [
    "Binary Search Tree",
    "Tree Implementation",
    "B Tree",
    "AVL Tree",
    "Red-Black Tree",
    "Fenwick Tree",
    "Segment Tree",
    "Tree DP",
    "Heavy Light Decomposition",
    "Lowest Common Ancestor",
    "LCA DFS",
    "Inorder Traversal",
  ],

  Graphs: [
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
    "Bellman-Ford",
    "Floyd-Warshall",
    "Ford-Fulkerson",
    "Hopcroft-Karp",
    "Kahn's Topological Sort",
    "Topological Sort",
    "Graph Representation",
    "DFS Graph",
    "Spanning Tree",
  ],

  Strings: [
    "String Operations",
    "Z Algorithm",
    "Manacher's Algorithm",
    "Knuth-Morris-Pratt",
    "Rabin-Karp",
    "Suffix Array",
    "Suffix Tree",
    "String Hashing",
    "Palindrome Partitioning",
    "Edit Distance",
  ],

  "Dynamic Programming": [
    "Dynamic Programming",
    "Dynamic Programming Pattern",
    "Dynamic Programming Iterative",
    "Dynamic Programming Coin Change",
    "State Compression DP",
    "Digit DP",
    "Tree DP",
    "Probability DP",
    "Bitwise DP",
  ],

  "Greedy Algorithms": [
    "Greedy",
    "Activity Selection",
    "Fractional Knapsack",
    "Huffman Coding",
    "Job Scheduling",
    "Interval Scheduling",
    "Hungarian Algorithm",
  ],

  Backtracking: ["Backtracking", "Palindrome Partitioning"],

  "Number Theory": [
    "Extended Euclidean",
    "Chinese Remainder Theorem",
    "Sieve of Eratosthenes",
    "Sieve of Atkin",
    "Sieve of Sundaram",
    "Miller-Rabin Primality Test",
    "Fast Fourier Transform",
  ],

  "Divide and Conquer": ["Divide and Conquer", "Karatsuba Multiplication"],

  Recursion: ["Recursion", "DFS", "DFS Linked List", "DFS Binary Tree", "BFS", "BFS Linked List"],

  "Data Structures": [
    "Hash Table",
    "Linked List",
    "Circular Linked List",
    "Stack Implementation",
    "Queue Implementation",
    "Heap Implementation",
    "Union Find",
    "Monotonic Stack",
    "Monotonic Queue",
    "Sparse Table",
    "Binary Indexed Tree",
    "Doubly Linked List",
    "Trie",
    "Trie Operations",
  ],

  Miscellaneous: [
    "A* Search",
    "Bit Manipulation",
    "Memoization",
    "Quickselect",
    "Fast and Slow Pointers",
    "Fibonacci",
  ],

  Testing: ["Test Data"],
};

// Type the algorithmPatterns object
const typedAlgorithmPatterns = algorithmPatterns as Partial<Record<PatternKey, AlgorithmPattern>>;

// Verify pattern completeness
export function verifyPatternCompleteness() {
  const missingRegularPatterns = PATTERN_KEYS.filter((key: PatternKey) => {
    return !typedAlgorithmPatterns[key];
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
    regularPatternsCount: Object.keys(typedAlgorithmPatterns).length,
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
const regularPatternKeys = Object.keys(typedAlgorithmPatterns);
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

// Function to verify pattern consistency across all definitions
export function verifyPatternConsistency() {
  // Get all patterns from different sources
  const typePatterns = PATTERN_KEYS;
  const monsterHunterPatterns = Array.from(allPatterns.keys());
  const categoryPatterns = Object.values(monsterHunterPatternsByCategory).flat() as PatternKey[];

  // Create sets for easier comparison
  const typeSet = new Set(typePatterns);
  const monsterHunterSet = new Set(monsterHunterPatterns);
  const categorySet = new Set(categoryPatterns);

  // Find patterns that exist in one place but not others
  const missingInMonsterHunter = typePatterns.filter((p) => !monsterHunterSet.has(p));
  const missingInCategories = typePatterns.filter((p) => !categorySet.has(p));

  // Find patterns with different names (case-insensitive comparison)
  const normalizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const normalizedType = new Map(typePatterns.map((p) => [normalizeName(p), p]));
  const normalizedMonsterHunter = new Map(monsterHunterPatterns.map((p) => [normalizeName(p), p]));
  const normalizedCategory = new Map(categoryPatterns.map((p) => [normalizeName(p), p]));

  const differentNames = new Set<string>();

  // Compare normalized names
  for (const [normName, pattern] of normalizedType) {
    if (
      normalizedMonsterHunter.get(normName) &&
      normalizedMonsterHunter.get(normName) !== pattern
    ) {
      differentNames.add(`${pattern} vs ${normalizedMonsterHunter.get(normName)}`);
    }
    if (normalizedCategory.get(normName) && normalizedCategory.get(normName) !== pattern) {
      differentNames.add(`${pattern} vs ${normalizedCategory.get(normName)}`);
    }
  }

  // Log results
  console.log("\nPattern Consistency Check Results:");
  console.log("--------------------------------");

  if (missingInMonsterHunter.length > 0) {
    console.log("\nPatterns in types.ts but missing in Monster Hunter patterns:");
    missingInMonsterHunter.forEach((p) => console.log(`- ${p}`));
  }

  if (missingInCategories.length > 0) {
    console.log("\nPatterns in types.ts but missing in categories:");
    missingInCategories.forEach((p) => console.log(`- ${p}`));
  }

  if (differentNames.size > 0) {
    console.log("\nPatterns with different names across files:");
    Array.from(differentNames).forEach((p) => console.log(`- ${p}`));
  }

  // Summary statistics
  console.log("\nSummary:");
  console.log("--------");
  console.log(`Total patterns in types.ts: ${typePatterns.length}`);
  console.log(`Total patterns in Monster Hunter: ${monsterHunterPatterns.length}`);
  console.log(`Total patterns in categories: ${categoryPatterns.length}`);
  console.log(`Missing in Monster Hunter: ${missingInMonsterHunter.length}`);
  console.log(`Missing in categories: ${missingInCategories.length}`);
  console.log(`Different names: ${differentNames.size}`);

  return {
    missingInMonsterHunter,
    missingInCategories,
    differentNames: Array.from(differentNames),
    stats: {
      typeCount: typePatterns.length,
      monsterHunterCount: monsterHunterPatterns.length,
      categoryCount: categoryPatterns.length,
    },
  };
}

// Function to check for extra patterns
export function checkExtraPatterns() {
  const patternKeySet = new Set(PATTERN_KEYS);

  // Check Monster Hunter patterns
  const extraMonsterHunterPatterns = Array.from(allPatterns.keys()).filter(
    (pattern) => !patternKeySet.has(pattern)
  );

  // Check Categories
  const categoryPatterns = new Set(
    Object.values(monsterHunterPatternsByCategory).flat()
  ) as Set<PatternKey>;
  const extraCategoryPatterns = Array.from(categoryPatterns).filter(
    (pattern) => !patternKeySet.has(pattern)
  );

  // Log results
  console.log("\nExtra Pattern Check Results:");
  console.log("---------------------------");

  if (extraMonsterHunterPatterns.length > 0) {
    console.log("\nPatterns in Monster Hunter but not in PATTERN_KEYS:");
    extraMonsterHunterPatterns.forEach((p) => console.log(`- ${p}`));
  } else {
    console.log("\n✓ No extra patterns in Monster Hunter implementations");
  }

  if (extraCategoryPatterns.length > 0) {
    console.log("\nPatterns in Categories but not in PATTERN_KEYS:");
    extraCategoryPatterns.forEach((p) => console.log(`- ${p}`));
  } else {
    console.log("\n✓ No extra patterns in Categories");
  }

  // Summary
  console.log("\nSummary:");
  console.log("--------");
  console.log(`Total PATTERN_KEYS: ${PATTERN_KEYS.length}`);
  console.log(`Extra in Monster Hunter: ${extraMonsterHunterPatterns.length}`);
  console.log(`Extra in Categories: ${extraCategoryPatterns.length}`);

  return {
    extraMonsterHunterPatterns,
    extraCategoryPatterns,
  };
}

// Run all verifications
verifyPatternConsistency();
checkExtraPatterns();
