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

  // Searching Patterns
  "Binary Search",
  "Linear Search",
  "Binary Search on Answer",
  "Ternary Search",
  "Jump Search",
  "Exponential Search",
  "Interpolation Search",
  "Fibonacci Search",

  // Dynamic Programming Patterns
  "Dynamic Programming",
  "Dynamic Programming Pattern",
  "Dynamic Programming Iterative",
  "Dynamic Programming Coin Change",
  "State Compression DP",
  "Digit DP",
  "Tree DP",
  "Probability DP",

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

  // Data Structure Patterns
  "B Tree",
  "Circular Linked List",
  "Fenwick Tree",
  "Linked List",
  "Segment Tree",
  "Union Find",
  "Lowest Common Ancestor",
  "Trie",
  "Trie Operations",

  // String Patterns
  "String Operations",
  "Rabin-Karp",
  "Knuth-Morris-Pratt",
  "Manacher's Algorithm",
  "Z Algorithm",
  "Suffix Array",
  "Suffix Tree",

  // Matrix Patterns
  "Matrix Operations",
  "Matrix Traversal",
  "Matrix Traversal Recursive",
  "Matrix Spiral Traversal",
  "Matrix Spiral Recursive",
  "Matrix Chain Multiplication",
  "Matrix Exponentiation",

  // Number Theory Patterns
  "Chinese Remainder Theorem",
  "Extended Euclidean",
  "Fast Fourier Transform",
  "Sieve of Atkin",
  "Sieve of Eratosthenes",
  "Sieve of Sundaram",

  // Other Patterns
  "Backtracking",
  "Bit Manipulation",
  "Divide and Conquer",
  "Floyd Cycle Detection",
  "Kadane's Algorithm",
  "Prefix Sum",
  "Recursion",
  "Sliding Window",
  "Two Pointers",
  "Test Data",

  // Greedy Patterns
  "Activity Selection",
  "Fractional Knapsack",
  "Huffman Coding",
  "Job Scheduling",

  // BFS/DFS Patterns
  "BFS",
  "BFS Linked List",
  "DFS",
  "DFS Linked List",
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
