export const PATTERN_KEYS = [
  "Quick Sort",
  "Merge Sort",
  "Stack Sort",
  "Heap Sort",
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Binary Search",
  "Binary Search on Answer",
  "Linear Search",
  "Two Sum",
  "Two Sum Dict",
  "Two Sum Two Pointers",
  "Dynamic Programming",
  "Dynamic Programming Fibonacci",
  "Dynamic Programming Iterative",
  "Dynamic Programming Coin Change",
  "Greedy",
  "Greedy Activity Selection",
  "Greedy Fractional Knapsack",
  "Greedy Job Scheduling",
  "Greedy Huffman Coding",
  "Greedy Dijkstra",
  "Backtracking",
  "Sliding Window",
  "Bit Manipulation",
  "Topological Sort",
  "DFS",
  "DFS Linked List",
  "DFS Binary Tree",
  "BFS",
  "BFS Linked List",
  "Stack Implementation",
  "Queue Implementation",
  "Linked List",
  "Circular Linked List",
  "Hash Table",
  "Graph",
  "Tree",
  "Binary Search Tree",
  "Heap Implementation",
  "Trie",
  "Monotonic Stack",
  "Monotonic Queue",
  "Two Pointers",
  "Prefix Sum",
  "Kadane's Algorithm",
  "Floyd Cycle Detection",
  "Rabin-Karp",
  "Knuth-Morris-Pratt",
  "Manacher's Algorithm",
  "Z-Algorithm",
  "Matrix Traversal",
  "Matrix Traversal Recursive",
  "Matrix Spiral Traversal",
  "Matrix Spiral Recursive",
] as const;

export type PatternKey = (typeof PATTERN_KEYS)[number];

export interface AlgorithmPattern {
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudocode: string;
  example: string;
  implementation: string;
}
