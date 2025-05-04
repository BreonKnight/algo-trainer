import { PatternKey } from "../types/pattern-types";

// This mapping ensures consistency between regular patterns and Monster Hunter patterns
export const patternMapping: Record<string, PatternKey> = {
  // Sorting Patterns
  "Radix Sort": "Radix Sort",
  "Quick Sort": "Quick Sort",
  "Merge Sort": "Merge Sort",
  "Heap Sort": "Heap Sort",
  "Bubble Sort": "Bubble Sort",
  "Selection Sort": "Selection Sort",
  "Insertion Sort": "Insertion Sort",
  "Stack Sort": "Stack Sort",

  // Searching Patterns
  "Binary Search": "Binary Search",
  "Linear Search": "Linear Search",
  "Binary Search on Answer": "Binary Search on Answer",
  "Ternary Search": "Ternary Search",
  "Jump Search": "Jump Search",
  "Exponential Search": "Exponential Search",
  "Interpolation Search": "Interpolation Search",
  "Fibonacci Search": "Fibonacci Search",

  // Dynamic Programming Patterns
  "Dynamic Programming": "Dynamic Programming",
  "Dynamic Programming Pattern": "Dynamic Programming Pattern",
  "Dynamic Programming Fibonacci": "Dynamic Programming Fibonacci",
  "Dynamic Programming Iterative": "Dynamic Programming Iterative",
  "Dynamic Programming Coin Change": "Dynamic Programming Coin Change",
  "State Compression DP": "State Compression DP",
  "Digit DP": "Digit DP",
  "Tree DP": "Tree DP",
  "Probability DP": "Probability DP",

  // Graph Patterns
  "A* Search": "A* Search",
  "Articulation Points": "Articulation Points",
  "Bellman-Ford": "Bellman-Ford",
  "Floyd-Warshall": "Floyd-Warshall",
  Kruskal: "Kruskal",
  "Strongly Connected Components": "Strongly Connected Components",
  "Maximum Bipartite Matching": "Maximum Bipartite Matching",
  "Topological Sort": "Topological Sort",
  Prim: "Prim",
  Kosaraju: "Kosaraju",

  // Data Structure Patterns
  "B Tree": "B Tree",
  "Circular Linked List": "Circular Linked List",
  "Fenwick Tree": "Fenwick Tree",
  "Linked List": "Linked List",
  "Lowest Common Ancestor": "Lowest Common Ancestor",
  "Segment Tree": "Segment Tree",
  "Union Find": "Union Find",
  Tree: "Tree",
  "DFS Binary Tree": "DFS Binary Tree",

  // String Patterns
  "String Operations": "String Operations",
  "Rabin-Karp": "Rabin-Karp",
  "Knuth-Morris-Pratt": "Knuth-Morris-Pratt",
  "Manacher's Algorithm": "Manacher's Algorithm",
  "Z Algorithm": "Z Algorithm",
  "Suffix Array": "Suffix Array",
  "Suffix Tree": "Suffix Tree",

  // Matrix Patterns
  "Matrix Operations": "Matrix Operations",
  "Matrix Traversal": "Matrix Traversal",
  "Matrix Traversal Recursive": "Matrix Traversal Recursive",
  "Matrix Spiral Traversal": "Matrix Spiral Traversal",
  "Matrix Spiral Recursive": "Matrix Spiral Recursive",
  "Matrix Chain Multiplication": "Matrix Chain Multiplication",
  "Matrix Exponentiation": "Matrix Exponentiation",

  // Number Theory Patterns
  "Chinese Remainder Theorem": "Chinese Remainder Theorem",
  "Extended Euclidean": "Extended Euclidean",
  "Fast Fourier Transform": "Fast Fourier Transform",
  "Sieve of Atkin": "Sieve of Atkin",
  "Sieve of Eratosthenes": "Sieve of Eratosthenes",
  "Sieve of Sundaram": "Sieve of Sundaram",

  // Other Patterns
  Backtracking: "Backtracking",
  "Bit Manipulation": "Bit Manipulation",
  "Divide and Conquer": "Divide and Conquer",
  "Floyd Cycle Detection": "Floyd Cycle Detection",
  "Kadane's Algorithm": "Kadane's Algorithm",
  Recursion: "Recursion",
  "Sliding Window": "Sliding Window",
  "Two Pointers": "Two Pointers",

  // Greedy Patterns
  "Activity Selection": "Activity Selection",
  "Fractional Knapsack": "Fractional Knapsack",
  "Huffman Coding": "Huffman Coding",
  "Job Scheduling": "Job Scheduling",

  // BFS/DFS Patterns
  BFS: "BFS",
  "BFS Linked List": "BFS Linked List",
  DFS: "DFS",
  "DFS Linked List": "DFS Linked List",
};

// Function to get the corresponding Monster Hunter pattern key
export function getMonsterHunterPatternKey(
  regularPatternKey: string
): PatternKey | undefined {
  return patternMapping[regularPatternKey];
}

// Function to get the corresponding regular pattern key
export function getRegularPatternKey(
  monsterHunterPatternKey: PatternKey
): string | undefined {
  const entry = Object.entries(patternMapping).find(
    ([, value]) => value === monsterHunterPatternKey
  );
  return entry ? entry[0] : undefined;
}

// Function to validate pattern mappings
export function validatePatternMappings(): {
  missingRegular: string[];
  missingMonsterHunter: PatternKey[];
} {
  const allPatternKeys = Object.values(patternMapping);
  const allRegularKeys = Object.keys(patternMapping);

  const missingRegular = allRegularKeys.filter((key) => !patternMapping[key]);
  const missingMonsterHunter = allPatternKeys.filter(
    (key) => !Object.values(patternMapping).includes(key)
  );

  return {
    missingRegular,
    missingMonsterHunter,
  };
}
