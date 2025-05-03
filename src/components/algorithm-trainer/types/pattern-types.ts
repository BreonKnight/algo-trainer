export type PatternKey =
  | "A* Search"
  | "Activity Selection"
  | "Dijkstra"
  | "Fractional Knapsack"
  | "Huffman Coding"
  | "Job Scheduling"
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
  | "Bubble Sort"
  | "Chinese Remainder Theorem"
  | "Circular Linked List"
  | "DFS"
  | "DFS Binary Tree"
  | "DFS Linked List"
  | "Digit DP"
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
  | "Graph"
  | "Bridges"
  | "Kosaraju"
  | "Kruskal"
  | "Prim"
  | "Grid Traversal"
  | "Hash Table"
  | "Heap Implementation"
  | "Heap Sort"
  | "Heavy Light Decomposition"
  | "Hungarian Algorithm"
  | "Insertion Sort"
  | "Interpolation Search"
  | "Jump Search"
  | "Kadane's Algorithm"
  | "Knuth-Morris-Pratt"
  | "Lowest Common Ancestor"
  | "Linear Search"
  | "Linked List"
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
  | "Strongly Connected Components"
  | "String Operations"
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
  testData: {
    input:
      | number[]
      | {
          arr: number[];
          target?: number;
          [key: string]:
            | string
            | number
            | number[]
            | undefined
            | Record<string, number[]>;
        };
    expected: number | number[];
    description: string;
  }[];
  explanation?: string;
}
