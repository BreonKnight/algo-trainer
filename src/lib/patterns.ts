export const PATTERN_KEYS = [
  "random",
  "ascending",
  "descending",
  "v-shaped",
  "a-shaped",
  "mountain",
  "valley",
  "random-duplicates",
  "ascending-duplicates",
  "descending-duplicates",
] as const;

export const categoryColors = {
  // Basic Algorithms
  Sorting: "text-accent",
  Searching: "text-accent2",
  "Sorting Algorithms": "text-accent",
  "Search Algorithms": "text-accent2",

  // Data Structures
  Trees: "text-accent",
  Graphs: "text-accent2",
  "Graph Algorithms": "text-accent2",
  "Data Structures": "text-accent",
  "Tree Algorithms": "text-accent",

  // String and Text Processing
  Strings: "text-accent3",
  "String Algorithms": "text-accent3",

  // Advanced Algorithms
  "Dynamic Programming": "text-accent",
  Greedy: "text-accent3",
  "Greedy Algorithms": "text-accent3",
  Backtracking: "text-accent3",

  // Number Theory and Math
  "Number Theory": "text-accent3",
  "Bit Manipulation": "text-accent3",

  // Matrix and Grid Operations
  "Matrix Operations": "text-accent3",
  "Matrix Traversal": "text-accent3",

  // Utility and Techniques
  Utility: "text-secondary",
  Techniques: "text-accent3",
  "Array Techniques": "text-accent2",
  "Divide and Conquer": "text-accent2",
  Recursion: "text-accent2",

  // Special Categories
  "monster-hunter": "text-secondary",
  Other: "text-secondary",
  "Other Algorithms": "text-secondary",
} as const;

export type PatternKey = (typeof PATTERN_KEYS)[number];
