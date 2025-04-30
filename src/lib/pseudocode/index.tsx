import { DynamicProgrammingPattern } from "./patterns/dynamic-programming";
import { DynamicProgrammingPatternTemplate } from "./patterns/dynamic-programming-pattern";
import { BinarySearchOnAnswerPattern } from "./patterns/binary-search-on-answer";
import { BitManipulationPattern } from "./patterns/bit-manipulation";
import { SlidingWindowPattern } from "./patterns/sliding-window";
import { QuickSortPattern } from "./patterns/quick-sort";
import { MergeSortPattern } from "./patterns/merge-sort";
import { StackSortPattern } from "./patterns/stack-sort";
import { HeapSortPattern } from "./patterns/heap-sort";
import { BubbleSortPattern } from "./patterns/bubble-sort";
import { SelectionSortPattern } from "./patterns/selection-sort";
import { InsertionSortPattern } from "./patterns/insertion-sort";
import { BinarySearchPattern } from "./patterns/binary-search";
import { LinearSearchPattern } from "./patterns/linear-search";
import { TwoSumPattern } from "./patterns/two-sum";
import { TwoSumTwoPointersPattern } from "./patterns/two-sum-two-pointers";
import { DynamicProgrammingFibonacciPattern } from "./patterns/dynamic-programming-fibonacci";
import { DynamicProgrammingIterativePattern } from "./patterns/dynamic-programming-iterative";
import { DynamicProgrammingCoinChangePattern } from "./patterns/dynamic-programming-coin-change";
import { GreedyActivitySelectionPattern } from "./patterns/greedy-activity-selection";
import { GreedyFractionalKnapsackPattern } from "./patterns/greedy-fractional-knapsack";
import { GreedyJobSchedulingPattern } from "./patterns/greedy-job-scheduling";
import { GreedyHuffmanCodingPattern } from "./patterns/greedy-huffman-coding";
import { GreedyDijkstraPattern } from "./patterns/greedy-dijkstra";
import { DFSLinkedListPattern } from "./patterns/dfs-linked-list";
import { DFSBinaryTreePattern } from "./patterns/dfs-binary-tree";
import { BFSLinkedListPattern } from "./patterns/bfs-linked-list";
import { StackImplementationPattern } from "./patterns/stack-implementation";
import { QueueImplementationPattern } from "./patterns/queue-implementation";
import { HashTablePattern } from "./patterns/hash-table";
import { MonotonicStackPattern } from "./patterns/monotonic-stack";
import { MonotonicQueuePattern } from "./patterns/monotonic-queue";
import { TwoPointersPattern } from "./patterns/two-pointers";
import { PrefixSumPattern } from "./patterns/prefix-sum";
import { FloydCycleDetectionPattern } from "./patterns/floyd-cycle-detection";
import { MatrixTraversalPattern } from "./patterns/matrix-traversal";
import { MatrixTraversalRecursivePattern } from "./patterns/matrix-traversal-recursive";
import { MatrixSpiralTraversalPattern } from "./patterns/matrix-spiral-traversal";
import { MatrixSpiralRecursivePattern } from "./patterns/matrix-spiral-recursive";
import { TopologicalSortPattern } from "./patterns/topological-sort";
import { CircularLinkedListPattern } from "./patterns/circular-linked-list";
import { BinarySearchTreePattern } from "./patterns/binary-search-tree";
import { TrieOperationsPattern } from "./patterns/trie-operations";
import { TernarySearchPattern } from "./patterns/ternary-search-algorithm";
import { JumpSearchPattern } from "./patterns/jump-search-algorithm";
import { ExponentialSearchPattern } from "./patterns/exponential-search";
import { HeapImplementationPattern } from "./patterns/heap-implementation";
import { TwoSumDictPattern } from "./patterns/two-sum-dict";
import { LinkedListPattern } from "./patterns/linked-list";
import { DivideAndConquerPattern } from "./patterns/divide-and-conquer";
import { ArticulationPointsPattern } from "./patterns/articulation-points";
import { DijkstraPattern } from "./patterns/graph-dijkstra";
import { GraphKosarajuPattern } from "./patterns/graph-kosaraju";
import { NetworkFlowPattern } from "./patterns/network-flow";
import { MaximumBipartiteMatchingPattern } from "./patterns/maximum-bipartite-matching";
import { ExtendedEuclideanAlgorithmPattern } from "./patterns/extended-euclidean-algorithm";
import { ChineseRemainderTheoremPattern } from "./patterns/chinese-remainder-theorem";
import { SieveofEratosthenesPattern } from "./patterns/sieve-of-eratosthenes";
import { GraphArticulationPointsPattern } from "./patterns/graph-articulation-points";
import { GraphBridgesPattern } from "./patterns/graph-bridges";
import { GridTraversalPattern } from "./patterns/grid-traversal";
import { StateCompressionDPPattern } from "./patterns/state-compression-dp";
import { DigitDPPattern } from "./patterns/digit-dp";
import { ProbabilityDPPattern } from "./patterns/probability-dp";
import { TreeDPPattern } from "./patterns/tree-dp";
import { StronglyConnectedComponentsPattern } from "./patterns/strongly-connected-components";
import { InterpolationSearchPattern } from "./patterns/interpolation-search";
import { FibonacciSearchPattern } from "./patterns/fibonacci-search";
import { HeavyLightDecompositionPattern } from "./patterns/heavy-light-decomposition";
import { LCAPattern } from "./patterns/lca";
import { SuffixTreePattern } from "./patterns/suffix-tree";
import { SuffixArrayPattern } from "./patterns/suffix-array";
import { BTreePattern } from "./patterns/b-tree";
import { AVLTreePattern } from "./patterns/avl-tree";
import { RedBlackTreePattern } from "./patterns/red-black-tree";
import { UnionFindPattern } from "./patterns/union-find";
import { FenwickTreePattern } from "./patterns/fenwick-tree";
import { SegmentTreePattern } from "./patterns/segment-tree";
import { ZAlgorithmPattern } from "./patterns/z-algorithm";
import { KMPAlgorithmPattern } from "./patterns/kmp-algorithm";
import { RabinKarpPattern } from "./patterns/rabin-karp";
import { PrimsAlgorithmPattern } from "./patterns/prims-algorithm";
import { KruskalsAlgorithmPattern } from "./patterns/kruskals-algorithm";
import { FloydWarshallPattern } from "./patterns/floyd-warshall";
import { BellmanFordPattern } from "./patterns/bellman-ford";
import { ManachersAlgorithmPattern } from "./patterns/manachers-algorithm";
import { AStarSearchPattern } from "./patterns/a-star-search";
import { KadanesAlgorithmPattern } from "./patterns/kadanes-algorithm";
import { KnapsackPattern } from "./patterns/knapsack";
import { MatrixOperationsPattern } from "./patterns/matrix-operations";
import { MemoizationPattern } from "./patterns/memoization";
import { PrefixSumsPattern } from "./patterns/prefix-sums";
import { QuickselectPattern } from "./patterns/quickselect";
import { MatrixChainMultiplicationPattern } from "./patterns/matrix-chain-multiplication";
import { MatrixExponentiationPattern } from "./patterns/matrix-exponentiation";
import { GraphPattern } from "./patterns/graph";
import { DFSPattern } from "./patterns/dfs";
import { BFSPattern } from "./patterns/bfs";
import { TreePattern } from "./patterns/tree";
import { StringPattern } from "./patterns/string";
import { RecursionPattern } from "./patterns/recursion";

export const pseudocodePatterns: Record<string, () => JSX.Element> = {
  "Dynamic Programming": DynamicProgrammingPattern,
  "Dynamic Programming Pattern": DynamicProgrammingPatternTemplate,
  "Binary Search on Answer": BinarySearchOnAnswerPattern,
  "Bit Manipulation": BitManipulationPattern,
  "Sliding Window": SlidingWindowPattern,
  "Quick Sort": QuickSortPattern,
  "Merge Sort": MergeSortPattern,
  "Stack Sort": StackSortPattern,
  "Heap Sort": HeapSortPattern,
  "Bubble Sort": BubbleSortPattern,
  "Selection Sort": SelectionSortPattern,
  "Insertion Sort": InsertionSortPattern,
  "Binary Search": BinarySearchPattern,
  "Linear Search": LinearSearchPattern,
  "Two Sum": TwoSumPattern,
  "Two Sum Two Pointers": TwoSumTwoPointersPattern,
  "Dynamic Programming Fibonacci": DynamicProgrammingFibonacciPattern,
  "Dynamic Programming Iterative": DynamicProgrammingIterativePattern,
  "Dynamic Programming Coin Change": DynamicProgrammingCoinChangePattern,
  "Greedy Activity Selection": GreedyActivitySelectionPattern,
  "Greedy Fractional Knapsack": GreedyFractionalKnapsackPattern,
  "Greedy Job Scheduling": GreedyJobSchedulingPattern,
  "Greedy Huffman Coding": GreedyHuffmanCodingPattern,
  "Greedy Dijkstra": GreedyDijkstraPattern,
  "DFS Linked List": DFSLinkedListPattern,
  "DFS Binary Tree": DFSBinaryTreePattern,
  "BFS Linked List": BFSLinkedListPattern,
  "Stack Implementation": StackImplementationPattern,
  "Queue Implementation": QueueImplementationPattern,
  "Hash Table": HashTablePattern,
  "Monotonic Stack": MonotonicStackPattern,
  "Monotonic Queue": MonotonicQueuePattern,
  "Two Pointers": TwoPointersPattern,
  "Prefix Sum": PrefixSumPattern,
  "Floyd Cycle Detection": FloydCycleDetectionPattern,
  "Matrix Traversal": MatrixTraversalPattern,
  "Matrix Traversal Recursive": MatrixTraversalRecursivePattern,
  "Matrix Spiral Traversal": MatrixSpiralTraversalPattern,
  "Matrix Spiral Recursive": MatrixSpiralRecursivePattern,
  "Topological Sort": TopologicalSortPattern,
  "Circular Linked List": CircularLinkedListPattern,
  "Binary Search Tree": BinarySearchTreePattern,
  "Trie Operations": TrieOperationsPattern,
  "Ternary Search": TernarySearchPattern,
  "Jump Search": JumpSearchPattern,
  "Exponential Search": ExponentialSearchPattern,
  "Heap Implementation": HeapImplementationPattern,
  "Two Sum Dict": TwoSumDictPattern,
  "Linked List": LinkedListPattern,
  "Divide and Conquer": DivideAndConquerPattern,
  "Articulation Points": ArticulationPointsPattern,
  "Graph Dijkstra": DijkstraPattern,
  "Graph Kosaraju": GraphKosarajuPattern,
  "Network Flow": NetworkFlowPattern,
  "Strongly Connected Components": StronglyConnectedComponentsPattern,
  "Maximum Bipartite Matching": MaximumBipartiteMatchingPattern,
  "A* Search": AStarSearchPattern,
  "Grid Traversal": GridTraversalPattern,
  "State Compression DP": StateCompressionDPPattern,
  "Digit DP": DigitDPPattern,
  "Tree DP": TreeDPPattern,
  "Probability DP": ProbabilityDPPattern,
  "Interpolation Search": InterpolationSearchPattern,
  "Fibonacci Search": FibonacciSearchPattern,
  "Extended Euclidean": ExtendedEuclideanAlgorithmPattern,
  "Chinese Remainder Theorem": ChineseRemainderTheoremPattern,
  "Sieve of Eratosthenes": SieveofEratosthenesPattern,
  "Graph Articulation Points": GraphArticulationPointsPattern,
  "Graph Bridges": GraphBridgesPattern,
  "Kadane's Algorithm": KadanesAlgorithmPattern,
  "Rabin-Karp": RabinKarpPattern,
  "KMP Algorithm": KMPAlgorithmPattern,
  "Manacher's Algorithm": ManachersAlgorithmPattern,
  "Z Algorithm": ZAlgorithmPattern,
  "Prim's Algorithm": PrimsAlgorithmPattern,
  "Kruskal's Algorithm": KruskalsAlgorithmPattern,
  "Floyd-Warshall": FloydWarshallPattern,
  "Bellman-Ford": BellmanFordPattern,
  "Heavy Light Decomposition": HeavyLightDecompositionPattern,
  LCA: LCAPattern,
  "Suffix Tree": SuffixTreePattern,
  "Suffix Array": SuffixArrayPattern,
  "B Tree": BTreePattern,
  "AVL Tree": AVLTreePattern,
  "Red Black Tree": RedBlackTreePattern,
  "Union Find": UnionFindPattern,
  "Fenwick Tree": FenwickTreePattern,
  "Segment Tree": SegmentTreePattern,
  "A Star Search": AStarSearchPattern,
  Knapsack: KnapsackPattern,
  "Matrix Operations": MatrixOperationsPattern,
  Memoization: MemoizationPattern,
  "Prefix Sums": PrefixSumsPattern,
  Quickselect: QuickselectPattern,
  "Matrix Chain Multiplication": MatrixChainMultiplicationPattern,
  "Matrix Exponentiation": MatrixExponentiationPattern,
  Graph: GraphPattern,
  DFS: DFSPattern,
  BFS: BFSPattern,
  Tree: TreePattern,
  String: StringPattern,
  Recursion: RecursionPattern,
  Dijkstra: DijkstraPattern,
};
