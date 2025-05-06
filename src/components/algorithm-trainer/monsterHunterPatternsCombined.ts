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
  ]
    .map(([key, value]) => [key, value] as const)
    .filter(([key]) => PATTERN_KEYS.includes(key as PatternKey) || key === "Null Pattern")
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

  "Data Structures": [
    "Binary Search Tree",
    "AVL Tree",
    "B Tree",
    "Red-Black Tree",
    "Fenwick Tree",
    "Segment Tree",
    "Binary Indexed Tree",
    "Suffix Tree",
    "Hash Table",
    "Linked List",
    "Circular Linked List",
    "DFS Linked List",
    "BFS Linked List",
    "Doubly Linked List",
    "Stack Implementation",
    "Queue Implementation",
    "Heap Implementation",
    "Union Find",
    "Monotonic Stack",
    "Monotonic Queue",
    "Trie",
    "Trie Operations",
    "Sparse Table",
    "Tree Implementation",
  ],

  Algorithms: [
    "A* Search",
    "DFS",
    "BFS",
    "DFS Binary Tree",
    "DFS Graph",
    "Dijkstra",
    "Kosaraju",
    "Articulation Points",
    "Bridges",
    "Strongly Connected Components",
    "Network Flow",
    "Maximum Bipartite Matching",
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
    "Spanning Tree",
  ],

  Strings: [
    "String Operations",
    "Z Algorithm",
    "Manacher's Algorithm",
    "Knuth-Morris-Pratt",
    "Rabin-Karp",
    "Suffix Array",
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
    "Activity Selection",
    "Fractional Knapsack",
    "Huffman Coding",
    "Job Scheduling",
    "Interval Scheduling",
    "Hungarian Algorithm",
    "Greedy",
  ],

  "Other Techniques": [
    "Backtracking",
    "Extended Euclidean",
    "Chinese Remainder Theorem",
    "Sieve of Eratosthenes",
    "Sieve of Atkin",
    "Sieve of Sundaram",
    "Miller-Rabin Primality Test",
    "Fast Fourier Transform",
    "Divide and Conquer",
    "Karatsuba Multiplication",
    "Fast and Slow Pointers",
    "Heavy Light Decomposition",
    "Lowest Common Ancestor",
    "LCA DFS",
    "Inorder Traversal",
    "Recursion",
    "Fibonacci",
    "Null Pattern",
    "Test Data",
  ],
};

// Type the algorithmPatterns object
const typedAlgorithmPatterns = algorithmPatterns as Partial<Record<PatternKey, AlgorithmPattern>>;

// Function to verify pattern completeness
export function verifyPatternCompleteness() {
  const missingRegularPatterns = PATTERN_KEYS.filter((key: PatternKey) => {
    return !typedAlgorithmPatterns[key];
  });

  const missingMonsterHunterPatterns = PATTERN_KEYS.filter((key: PatternKey) => {
    return !allPatterns.has(key);
  });

  return {
    missingRegularPatterns,
    missingMonsterHunterPatterns,
    totalPatterns: PATTERN_KEYS.length,
    regularPatternsCount: Object.keys(typedAlgorithmPatterns).length,
    monsterHunterPatternsCount: allPatterns.size,
  };
}

// Function to verify pattern consistency
export function verifyPatternConsistency() {
  // Get all patterns from different sources
  const typePatterns = PATTERN_KEYS;
  const monsterHunterPatterns = Array.from(allPatterns.keys());
  const categoryPatterns = Object.values(monsterHunterPatternsByCategory).flat() as PatternKey[];

  // Create sets for easier comparison
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

  return {
    extraMonsterHunterPatterns,
    extraCategoryPatterns,
  };
}

// Function to get all validation results
export function getValidationResults() {
  const completeness = verifyPatternCompleteness();
  const consistency = verifyPatternConsistency();
  const extraPatterns = checkExtraPatterns();
  const similarPatterns = findSimilarPatterns(Array.from(allPatterns.keys()));

  return {
    similarPatterns,
    missingInRegular: completeness.missingRegularPatterns,
    missingInMonsterHunter: consistency.missingInMonsterHunter,
    missingInCategories: consistency.missingInCategories,
    differentNames: consistency.differentNames,
    extraPatterns: {
      monsterHunter: extraPatterns.extraMonsterHunterPatterns,
      categories: extraPatterns.extraCategoryPatterns,
    },
    stats: {
      totalPatterns: completeness.totalPatterns,
      regularPatternsCount: completeness.regularPatternsCount,
      monsterHunterPatternsCount: completeness.monsterHunterPatternsCount,
      categoryPatternsCount: consistency.stats.categoryCount,
    },
  };
}

// Export the combined patterns
export const allMonsterHunterPatterns = allPatterns;
