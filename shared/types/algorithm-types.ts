export type PatternKey =
  | "A* Search"
  | "Activity Selection"
  | "Articulation Points"
  | "AVL Tree"
  | "Backtracking"
  | "Bellman-Ford"
  | "BFS"
  | "BFS Linked List"
  | "Binary Indexed Tree"
  | "Binary Search"
  | "Binary Search on Answer"
  | "Binary Search Tree"
  | "Bit Manipulation"
  | "Bitwise DP"
  | "B Tree"
  | "Bridges"
  | "Bubble Sort"
  | "Bucket Sort"
  | "Chinese Remainder Theorem"
  | "Circular Linked List"
  | "Counting Sort"
  | "DFS"
  | "DFS (Binary Tree)"
  | "DFS Graph"
  | "DFS Linked List"
  | "Digit DP"
  | "Dijkstra's Algorithm"
  | "Divide and Conquer"
  | "Doubly Linked List"
  | "Dynamic Programming"
  | "Coin Change"
  | "Dynamic Programming Iterative"
  | "Dynamic Programming Pattern"
  | "Edit Distance"
  | "Exponential Search"
  | "Extended Euclidean"
  | "Fast and Slow Pointers"
  | "Fast Fourier Transform"
  | "Fenwick Tree"
  | "Fibonacci"
  | "Fibonacci Search"
  | "Floyd Cycle Detection"
  | "Floyd-Warshall Algorithm"
  | "Ford-Fulkerson Algorithm"
  | "Fractional Knapsack"
  | "Graph Representation"
  | "Greedy"
  | "Grid Traversal"
  | "Hash Table"
  | "Heap Implementation"
  | "Heap Sort"
  | "Heavy Light Decomposition"
  | "Hopcroft-Karp's Algorithm"
  | "Huffman Coding"
  | "Hungarian Algorithm"
  | "Inorder Traversal"
  | "Insertion Sort"
  | "Interpolation Search"
  | "Interval Scheduling"
  | "Job Scheduling"
  | "Jump Search"
  | "Kadane's Algorithm"
  | "Kahn's Topological Sort"
  | "Karatsuba Multiplication"
  | "Knuth-Morris-Pratt"
  | "Kosaraju's Algorithm"
  | "Kruskal's Algorithm"
  | "Lowest Common Ancestor"
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
  | "Palindrome Partitioning"
  | "Prefix Sums"
  | "Prim's Algorithm"
  | "Probability DP"
  | "Queue Implementation"
  | "Quickselect"
  | "Quick Sort"
  | "Rabin-Karp"
  | "Radix Sort"
  | "Red-Black Tree"
  | "Recursion"
  | "Segment Tree"
  | "Selection Sort"
  | "Shell Sort"
  | "Sieve of Atkin"
  | "Sieve of Eratosthenes"
  | "Sieve of Sundaram"
  | "Sliding Window"
  | "Sparse Table"
  | "Stack Implementation"
  | "Stack Sort"
  | "State Compression DP"
  | "String Hashing"
  | "String Operations"
  | "Strongly Connected Components"
  | "Suffix Array"
  | "Suffix Tree"
  | "Ternary Search"
  | "Test Data"
  | "Topological Sort"
  | "Tree (Dynamic Programming)"
  | "Trie"
  | "Trie Operations"
  | "Two Pointers"
  | "Two Sum"
  | "Two Sum Dictionary"
  | "Two Sum Two Pointers"
  | "Union Find"
  | "Z Algorithm"
  | "Zigzag Traversal";

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
  difficulty?: string;
  keyPoints?: string[];
  commonUseCases?: string[];
  relatedPatterns?: string[];
  tips?: string[];
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
  "Binary Indexed Tree",
  "Binary Search",
  "Binary Search on Answer",
  "Binary Search Tree",
  "Bit Manipulation",
  "Bitwise DP",
  "B Tree",
  "Bridges",
  "Bubble Sort",
  "Bucket Sort",
  "Chinese Remainder Theorem",
  "Circular Linked List",
  "Counting Sort",
  "DFS",
  "DFS (Binary Tree)",
  "DFS Graph",
  "DFS Linked List",
  "Digit DP",
  "Dijkstra's Algorithm",
  "Divide and Conquer",
  "Doubly Linked List",
  "Dynamic Programming",
  "Coin Change",
  "Dynamic Programming Iterative",
  "Dynamic Programming Pattern",
  "Edit Distance",
  "Exponential Search",
  "Extended Euclidean",
  "Fast and Slow Pointers",
  "Fast Fourier Transform",
  "Fenwick Tree",
  "Fibonacci",
  "Fibonacci Search",
  "Floyd Cycle Detection",
  "Floyd-Warshall Algorithm",
  "Ford-Fulkerson Algorithm",
  "Fractional Knapsack",
  "Graph Representation",
  "Greedy",
  "Grid Traversal",
  "Hash Table",
  "Heap Implementation",
  "Heap Sort",
  "Heavy Light Decomposition",
  "Hopcroft-Karp's Algorithm",
  "Huffman Coding",
  "Hungarian Algorithm",
  "Inorder Traversal",
  "Insertion Sort",
  "Interpolation Search",
  "Interval Scheduling",
  "Job Scheduling",
  "Jump Search",
  "Kadane's Algorithm",
  "Kahn's Topological Sort",
  "Karatsuba Multiplication",
  "Knuth-Morris-Pratt",
  "Kosaraju's Algorithm",
  "Kruskal's Algorithm",
  "Lowest Common Ancestor",
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
  "Palindrome Partitioning",
  "Prefix Sums",
  "Prim's Algorithm",
  "Probability DP",
  "Queue Implementation",
  "Quickselect",
  "Quick Sort",
  "Rabin-Karp",
  "Radix Sort",
  "Red-Black Tree",
  "Recursion",
  "Segment Tree",
  "Selection Sort",
  "Shell Sort",
  "Sieve of Atkin",
  "Sieve of Eratosthenes",
  "Sieve of Sundaram",
  "Sliding Window",
  "Sparse Table",
  "Stack Implementation",
  "Stack Sort",
  "State Compression DP",
  "String Hashing",
  "String Operations",
  "Strongly Connected Components",
  "Suffix Array",
  "Suffix Tree",
  "Ternary Search",
  "Test Data",
  "Topological Sort",
  "Tree (Dynamic Programming)",
  "Trie",
  "Trie Operations",
  "Two Pointers",
  "Two Sum",
  "Two Sum Dictionary",
  "Two Sum Two Pointers",
  "Union Find",
  "Z Algorithm",
  "Zigzag Traversal",
];
