// Pattern Categories
export type PatternCategory =
  | "Sorting"
  | "Searching"
  | "Dynamic Programming"
  | "Graph"
  | "Data Structure"
  | "String"
  | "Matrix"
  | "Number Theory"
  | "Other"
  | "Greedy"
  | "BFS/DFS"
  | "Two Sum";

// Base Pattern Interface
export interface BasePattern {
  title: string;
  description: string;
  category: PatternCategory;
  difficulty?: "Easy" | "Medium" | "Hard";
  timeComplexity?: string;
  spaceComplexity?: string;
  pseudocode?: string;
  example?: string;
  implementation?: string;
  keySteps?: string[];
  tips?: string[];
  relatedPatterns?: string[];
}

// Monster Hunter Pattern Interface
export interface MonsterHunterPattern extends BasePattern {
  monsterHunterTitle: string;
  monsterHunterDescription: string;
  monsterHunterExample: string;
  monsterHunterTips: string[];
}

// Pattern Key Type
export type PatternKey = (typeof PATTERN_KEYS)[number];

// Pattern Keys Array - Single Source of Truth
export const PATTERN_KEYS = [
  // Sorting Patterns
  "Radix Sort",
  "Quick Sort",
  "Merge Sort",
  "Heap Sort",
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Stack Sort",
  "Bucket Sort",
  "Counting Sort",

  // Searching Patterns
  "Binary Search",
  "Linear Search",
  "Binary Search on Answer",
  "Ternary Search",
  "Jump Search",
  "Exponential Search",
  "Interpolation Search",
  "Fibonacci Search",
  "Quickselect",

  // Dynamic Programming Patterns
  "Dynamic Programming",
  "Dynamic Programming Pattern",
  "Dynamic Programming Iterative",
  "Dynamic Programming Coin Change",
  "State Compression DP",
  "Digit DP",
  "Tree DP",
  "Probability DP",
  "Bitwise DP",

  // Graph Patterns
  "A* Search",
  "Articulation Points",
  "Bellman-Ford",
  "Floyd-Warshall",
  "Kruskal",
  "Strongly Connected Components",
  "Maximum Bipartite Matching",
  "Topological Sort",
  "Prim",
  "Kosaraju",
  "Bridges",
  "Dijkstra",
  "Network Flow",
  "Heavy Light Decomposition",
  "Hopcroft-Karp",
  "Ford-Fulkerson",
  "Kahn's Topological Sort",
  "Graph Representation",
  "DFS Graph",
  "Spanning Tree",

  // Data Structure Patterns
  "B Tree",
  "Circular Linked List",
  "Fenwick Tree",
  "Linked List",
  "Segment Tree",
  "Union Find",
  "DFS Binary Tree",
  "AVL Tree",
  "Binary Search Tree",
  "Red-Black Tree",
  "Binary Indexed Tree",
  "Doubly Linked List",
  "Hash Table",
  "Heap Implementation",
  "Queue Implementation",
  "Stack Implementation",
  "Lowest Common Ancestor",
  "Trie",
  "Trie Operations",
  "Monotonic Queue",
  "Monotonic Stack",
  "Sparse Table",

  // String Patterns
  "String Operations",
  "Rabin-Karp",
  "Knuth-Morris-Pratt",
  "Manacher's Algorithm",
  "Z Algorithm",
  "Suffix Array",
  "Suffix Tree",
  "String Hashing",
  "Palindrome Partitioning",
  "Edit Distance",

  // Matrix Patterns
  "Matrix Operations",
  "Matrix Traversal",
  "Matrix Traversal Recursive",
  "Matrix Spiral Traversal",
  "Matrix Spiral Recursive",
  "Matrix Chain Multiplication",
  "Matrix Exponentiation",
  "Grid Traversal",

  // Number Theory Patterns
  "Chinese Remainder Theorem",
  "Extended Euclidean",
  "Fast Fourier Transform",
  "Sieve of Atkin",
  "Sieve of Eratosthenes",
  "Sieve of Sundaram",
  "Miller-Rabin Primality Test",
  "Karatsuba Multiplication",
  "Shell Sort",

  // Other Patterns
  "Backtracking",
  "Bit Manipulation",
  "Divide and Conquer",
  "Floyd Cycle Detection",
  "Kadane's Algorithm",
  "Prefix Sums",
  "Recursion",
  "Sliding Window",
  "Two Pointers",
  "Memoization",
  "Fast and Slow Pointers",
  "Fibonacci",
  "Interval Scheduling",

  // Greedy Patterns
  "Activity Selection",
  "Fractional Knapsack",
  "Huffman Coding",
  "Job Scheduling",
  "Hungarian Algorithm",
  "Greedy",

  // BFS/DFS Patterns
  "BFS",
  "BFS Linked List",
  "DFS",
  "DFS Linked List",
  "LCA DFS",
  "Inorder Traversal",
  "Zigzag Traversal",

  // Two Sum Variations
  "Two Sum",
  "Two Sum Dict",
  "Two Sum Two Pointers",
] as const;

// Pattern Mapping Type
export type PatternMapping = Record<PatternKey, PatternKey>;

// Pattern Category Colors
export const categoryColors: Record<PatternCategory, string> = {
  Sorting: "text-accent",
  Searching: "text-accent2",
  "Dynamic Programming": "text-accent",
  Graph: "text-accent2",
  "Data Structure": "text-accent",
  String: "text-accent3",
  Matrix: "text-accent3",
  "Number Theory": "text-accent3",
  Other: "text-secondary",
  Greedy: "text-accent3",
  "BFS/DFS": "text-accent2",
  "Two Sum": "text-accent4",
} as const;
