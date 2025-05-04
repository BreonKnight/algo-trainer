export type PatternKey =
  | "A* Search"
  | "Activity Selection"
  | "Articulation Points"
  | "AVL Tree"
  | "Backtracking"
  | "Bellman-Ford"
  | "BFS"
  | "BFS Linked List"
  | "Binary Search"
  | "Binary Search on Answer"
  | "Binary Search Tree"
  | "Bit Manipulation"
  | "B Tree"
  | "Bridges"
  | "Bubble Sort"
  | "Chinese Remainder Theorem"
  | "Circular Linked List"
  | "DFS"
  | "DFS Binary Tree"
  | "DFS Linked List"
  | "Digit DP"
  | "Dijkstra"
  | "Divide and Conquer"
  | "Dynamic Programming"
  | "Dynamic Programming Coin Change"
  | "Dynamic Programming Fibonacci"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Pattern"
  | "Exponential Search"
  | "Extended Euclidean"
  | "Fast Fourier Transform"
  | "Fenwick Tree"
  | "Fibonacci Search"
  | "Floyd Cycle Detection"
  | "Floyd-Warshall"
  | "Fractional Knapsack"
  | "Graph"
  | "Greedy"
  | "Grid Traversal"
  | "Hash Table"
  | "Heap Implementation"
  | "Heap Sort"
  | "Heavy Light Decomposition"
  | "Huffman Coding"
  | "Hungarian Algorithm"
  | "Insertion Sort"
  | "Interpolation Search"
  | "Job Scheduling"
  | "Jump Search"
  | "Kadane's Algorithm"
  | "Knuth-Morris-Pratt"
  | "Kosaraju"
  | "Kruskal"
  | "Linear Search"
  | "Linked List"
  | "Lowest Common Ancestor"
  | "Manacher's Algorithm"
  | "Matrix Chain Multiplication"
  | "Matrix Exponentiation"
  | "Matrix Operations"
  | "Matrix Spiral Recursive"
  | "Matrix Spiral Traversal"
  | "Matrix Traversal"
  | "Matrix Traversal Recursive"
  | "Maximum Bipartite Matching"
  | "Memoization"
  | "Merge Sort"
  | "Miller-Rabin Primality Test"
  | "Monotonic Queue"
  | "Monotonic Stack"
  | "Network Flow"
  | "Null Pattern"
  | "Prefix Sums"
  | "Prim"
  | "Prime Factorization"
  | "Probability DP"
  | "Queue Implementation"
  | "Quickselect"
  | "Quick Sort"
  | "Rabin-Karp"
  | "Radix Sort"
  | "Red-Black Tree"
  | "Recursion"
  | "Rotate Matrix"
  | "Segment Tree"
  | "Selection Sort"
  | "Sieve of Atkin"
  | "Sieve of Eratosthenes"
  | "Sieve of Sundaram"
  | "Sliding Window"
  | "Stack Implementation"
  | "Stack Sort"
  | "State Compression DP"
  | "String Operations"
  | "Strongly Connected Components"
  | "Suffix Array"
  | "Suffix Tree"
  | "Ternary Search"
  | "Test Data"
  | "Topological Sort"
  | "Tree"
  | "Tree DP"
  | "Trie Operations"
  | "Two Pointers"
  | "Two Sum"
  | "Two Sum Dict"
  | "Two Sum Two Pointers"
  | "Union Find"
  | "Z Algorithm";

export interface AlgorithmPattern {
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudocode: string;
  example: string;
  implementation: string;
  category: string;
  pattern?: string;
  keySteps?: string[];
}

export const PATTERN_KEYS: PatternKey[] = [
  "A* Search",
  "Activity Selection",
  "Articulation Points",
  "AVL Tree",
  "Backtracking",
  "Bellman-Ford",
  "BFS",
  "BFS Linked List",
  "Binary Search",
  "Binary Search on Answer",
  "Binary Search Tree",
  "Bit Manipulation",
  "B Tree",
  "Bubble Sort",
  "Chinese Remainder Theorem",
  "Circular Linked List",
  "DFS",
  "DFS Binary Tree",
  "DFS Linked List",
  "Digit DP",
  "Dijkstra",
  "Divide and Conquer",
  "Dynamic Programming",
  "Dynamic Programming Coin Change",
  "Dynamic Programming Fibonacci",
  "Dynamic Programming Iterative",
  "Dynamic Programming Pattern",
  "Exponential Search",
  "Extended Euclidean",
  "Fast Fourier Transform",
  "Fenwick Tree",
  "Fibonacci Search",
  "Floyd Cycle Detection",
  "Floyd-Warshall",
  "Fractional Knapsack",
  "Graph",
  "Greedy",
  "Grid Traversal",
  "Hash Table",
  "Heap Implementation",
  "Heap Sort",
  "Heavy Light Decomposition",
  "Huffman Coding",
  "Hungarian Algorithm",
  "Insertion Sort",
  "Interpolation Search",
  "Job Scheduling",
  "Jump Search",
  "Kadane's Algorithm",
  "Knuth-Morris-Pratt",
  "Kosaraju",
  "Kruskal",
  "Linear Search",
  "Linked List",
  "Lowest Common Ancestor",
  "Manacher's Algorithm",
  "Matrix Chain Multiplication",
  "Matrix Exponentiation",
  "Matrix Operations",
  "Matrix Spiral Recursive",
  "Matrix Spiral Traversal",
  "Matrix Traversal",
  "Matrix Traversal Recursive",
  "Maximum Bipartite Matching",
  "Memoization",
  "Merge Sort",
  "Miller-Rabin Primality Test",
  "Monotonic Queue",
  "Monotonic Stack",
  "Network Flow",
  "Null Pattern",
  "Prefix Sums",
  "Prim",
  "Prime Factorization",
  "Probability DP",
  "Queue Implementation",
  "Quickselect",
  "Quick Sort",
  "Rabin-Karp",
  "Radix Sort",
  "Red-Black Tree",
  "Recursion",
  "Rotate Matrix",
  "Segment Tree",
  "Selection Sort",
  "Sieve of Atkin",
  "Sieve of Eratosthenes",
  "Sieve of Sundaram",
  "Sliding Window",
  "Stack Implementation",
  "Stack Sort",
  "State Compression DP",
  "String Operations",
  "Strongly Connected Components",
  "Suffix Array",
  "Suffix Tree",
  "Ternary Search",
  "Test Data",
  "Topological Sort",
  "Tree",
  "Tree DP",
  "Trie Operations",
  "Two Pointers",
  "Two Sum",
  "Two Sum Dict",
  "Two Sum Two Pointers",
  "Union Find",
  "Z Algorithm",
];
