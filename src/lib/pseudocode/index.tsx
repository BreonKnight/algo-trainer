import { AStarSearchPattern } from "./patterns/a-star-search";
import { ArticulationPointsPattern } from "./patterns/articulation-points";
import { AVLTreePattern } from "./patterns/avl-tree";
import { BacktrackingPattern } from "./patterns/backtracking";
import { BellmanFordPattern } from "./patterns/bellman-ford";
import { BFSPattern } from "./patterns/bfs";
import { BfsLinkedListPattern } from "./patterns/bfs-linked-list";
import { BinarySearchOnAnswerPattern } from "./patterns/binary-search-on-answer";
import { BinarySearchPattern } from "./patterns/binary-search";
import { BinarySearchTreePattern } from "./patterns/binary-search-tree";
import { BitManipulationPattern } from "./patterns/bit-manipulation";
import { BTreePattern } from "./patterns/b-tree";
import { BubbleSortPattern } from "./patterns/bubble-sort";
import { ChineseRemainderTheoremPattern } from "./patterns/chinese-remainder-theorem";
import { CircularLinkedListPattern } from "./patterns/circular-linked-list";
import { DFSPattern } from "./patterns/dfs";
import { DfsBinaryTreePattern } from "./patterns/dfs-binary-tree";
import { DfsLinkedListPattern } from "./patterns/dfs-linked-list";
import { DigitDPPattern } from "./patterns/digit-dp";
import { DivideAndConquerPattern } from "./patterns/divide-and-conquer";
import { DynamicProgrammingCoinChangePattern } from "./patterns/dynamic-programming-coin-change";
import { DynamicProgrammingFibonacciPattern } from "./patterns/dynamic-programming-fibonacci";
import { DynamicProgrammingIterativePattern } from "./patterns/dynamic-programming-iterative";
import { DynamicProgrammingPattern } from "./patterns/dynamic-programming";
import { DynamicProgrammingPatternTemplate } from "./patterns/dynamic-programming-pattern";
import { ExtendedEuclideanAlgorithmPattern } from "./patterns/extended-euclidean-algorithm";
import { ExponentialSearchPattern } from "./patterns/exponential-search";
import { FastFourierTransformPattern } from "./patterns/fast-fourier-transform";
import { FenwickTreePattern } from "./patterns/fenwick-tree";
import { FloydCycleDetectionPattern } from "./patterns/floyd-cycle-detection";
import { FloydWarshallPattern } from "./patterns/graph-floyd-warshall";
import { BridgesPattern } from "./patterns/graph-bridges";
import { KosarajuPattern } from "./patterns/graph-kosaraju";
import { GraphPattern } from "./patterns/graph";
import { DijkstraPattern } from "./patterns/dijkstra";
import { ActivitySelectionPattern } from "./patterns/activity-selection.tsx";
import { FractionalKnapsackPattern } from "./patterns/fractional-knapsack.tsx";
import { HuffmanCodingPattern } from "./patterns/huffman-coding.tsx";
import { JobSchedulingPattern } from "./patterns/job-scheduling.tsx";
import { GridTraversalPattern } from "./patterns/grid-traversal";
import { HashTablePattern } from "./patterns/hash-table";
import { HeapImplementationPattern } from "./patterns/heap-implementation";
import { HeapSortPattern } from "./patterns/heap-sort";
import { HeavyLightDecompositionPattern } from "./patterns/heavy-light-decomposition";
import { InsertionSortPattern } from "./patterns/insertion-sort";
import { InterpolationSearchPattern } from "./patterns/interpolation-search";
import { JumpSearchAlgorithmPattern } from "./patterns/jump-search-algorithm";
import { KadanesAlgorithmPattern } from "./patterns/kadanes-algorithm";
import { KnuthMorrisPrattPattern } from "./patterns/kmp-algorithm";
import { KruskalPattern } from "./patterns/greedy-kruskal";
import { LCAPattern } from "./patterns/lca";
import { LinearSearchPattern } from "./patterns/linear-search";
import { LinkedListPattern } from "./patterns/linked-list";
import { ManachersAlgorithmPattern } from "./patterns/manachers-algorithm";
import { MatrixChainMultiplicationPattern } from "./patterns/matrix-chain-multiplication";
import { MatrixExponentiationPattern } from "./patterns/matrix-exponentiation";
import { MatrixOperationsPattern } from "./patterns/matrix-operations";
import { MatrixSpiralTraversalPattern } from "./patterns/matrix-spiral-traversal";
import { MatrixSpiralTraversalRecursivePattern } from "./patterns/matrix-spiral-recursive";
import { MatrixTraversalPattern } from "./patterns/matrix-traversal";
import { MatrixTraversalRecursivePattern } from "./patterns/matrix-traversal-recursive";
import { MaximumBipartiteMatchingPattern } from "./patterns/maximum-bipartite-matching";
import { MemoizationPattern } from "./patterns/memoization";
import { MergeSortPattern } from "./patterns/merge-sort";
import { MillerRabinPrimalityTestPattern } from "./patterns/miller-rabin-primality-test";
import { MonotonicQueuePattern } from "./patterns/monotonic-queue";
import { MonotonicStackPattern } from "./patterns/monotonic-stack";
import { NetworkFlowPattern } from "./patterns/network-flow";
import { NullPattern } from "./patterns/null-pattern";
import { PrefixSumPattern } from "./patterns/prefix-sum";
import { PrefixSumsPattern } from "./patterns/prefix-sums";
import { PrimPattern } from "./patterns/prims-algorithm";
import { ProbabilityDPPattern } from "./patterns/probability-dp";
import { QueueImplementationPattern } from "./patterns/queue-implementation";
import { QuickselectPattern } from "./patterns/quickselect";
import { QuickSortPattern } from "./patterns/quick-sort";
import { RabinKarpPattern } from "./patterns/rabin-karp";
import { RedBlackTreePattern } from "./patterns/red-black-tree";
import { RecursionPattern } from "./patterns/recursion";
import { SegmentTreePattern } from "./patterns/segment-tree";
import { SelectionSortPattern } from "./patterns/selection-sort";
import { SieveOfAtkinPattern } from "./patterns/sieve-of-atkin";
import { SieveOfEratosthenesPattern } from "./patterns/sieve-of-eratosthenes";
import { SieveOfSundaramPattern } from "./patterns/sieve-of-sundaram";
import { SlidingWindowPattern } from "./patterns/sliding-window";
import { StackImplementationPattern } from "./patterns/stack-implementation";
import { StackSortPattern } from "./patterns/stack-sort";
import { StateCompressionDPPattern } from "./patterns/state-compression-dp";
import { StringPattern } from "./patterns/string";
import { StronglyConnectedComponentsPattern } from "./patterns/strongly-connected-components";
import { SuffixArrayPattern } from "./patterns/suffix-array";
import { SuffixTreePattern } from "./patterns/suffix-tree";
import { TernarySearchAlgorithmPattern } from "./patterns/ternary-search-algorithm";
import { TopologicalSortPattern } from "./patterns/topological-sort";
import { TreeDynamicProgrammingPattern } from "./patterns/tree-dp";
import { TreePattern } from "./patterns/tree";
import { TrieOperationsPattern } from "./patterns/trie-operations";
import { TwoPointersPattern } from "./patterns/two-pointers";
import { TwoSumDictionaryPattern } from "./patterns/two-sum-dict";
import { TwoSumPattern } from "./patterns/two-sum";
import { TwoSumTwoPointersPattern } from "./patterns/two-sum-two-pointers";
import { UnionFindPattern } from "./patterns/union-find";
import { ZAlgorithmPattern } from "./patterns/z-algorithm";
import { GreedyPattern } from "./patterns/greedy";

export const pseudocodePatterns: Record<string, () => JSX.Element> = {
  "A* Search": AStarSearchPattern,
  "Activity Selection": ActivitySelectionPattern,
  "Articulation Points": ArticulationPointsPattern,
  "AVL Tree": AVLTreePattern,
  Backtracking: BacktrackingPattern,
  "Bellman-Ford": BellmanFordPattern,
  BFS: BFSPattern,
  "BFS Linked List": BfsLinkedListPattern,
  "Binary Search": BinarySearchPattern,
  "Binary Search on Answer": BinarySearchOnAnswerPattern,
  "Binary Search Tree": BinarySearchTreePattern,
  "Bit Manipulation": BitManipulationPattern,
  "B Tree": BTreePattern,
  "Bubble Sort": BubbleSortPattern,
  "Chinese Remainder Theorem": ChineseRemainderTheoremPattern,
  "Circular Linked List": CircularLinkedListPattern,
  DFS: DFSPattern,
  "DFS Binary Tree": DfsBinaryTreePattern,
  "DFS Linked List": DfsLinkedListPattern,
  "Digit DP": DigitDPPattern,
  "Divide and Conquer": DivideAndConquerPattern,
  "Dynamic Programming": DynamicProgrammingPattern,
  "Dynamic Programming Coin Change": DynamicProgrammingCoinChangePattern,
  "Dynamic Programming Fibonacci": DynamicProgrammingFibonacciPattern,
  "Dynamic Programming Iterative": DynamicProgrammingIterativePattern,
  "Dynamic Programming Pattern": DynamicProgrammingPatternTemplate,
  "Exponential Search": ExponentialSearchPattern,
  "Extended Euclidean": ExtendedEuclideanAlgorithmPattern,
  "Fast Fourier Transform": FastFourierTransformPattern,
  "Fenwick Tree": FenwickTreePattern,
  "Floyd Cycle Detection": FloydCycleDetectionPattern,
  "Floyd-Warshall": FloydWarshallPattern,
  "Fractional Knapsack": FractionalKnapsackPattern,
  Graph: GraphPattern,
  "Huffman Coding": HuffmanCodingPattern,
  "Insertion Sort": InsertionSortPattern,
  "Interpolation Search": InterpolationSearchPattern,
  Dijkstra: DijkstraPattern,
  Bridges: BridgesPattern,
  Kosaraju: KosarajuPattern,
  Kruskal: KruskalPattern,
  "Strongly Connected Components": StronglyConnectedComponentsPattern,
  Greedy: GreedyPattern,
  "Grid Traversal": GridTraversalPattern,
  "Hash Table": HashTablePattern,
  "Heap Implementation": HeapImplementationPattern,
  "Heap Sort": HeapSortPattern,
  "Heavy Light Decomposition": HeavyLightDecompositionPattern,
  "Job Scheduling": JobSchedulingPattern,
  "Jump Search": JumpSearchAlgorithmPattern,
  "Kadane's Algorithm": KadanesAlgorithmPattern,
  "Knuth-Morris-Pratt": KnuthMorrisPrattPattern,
  "Linear Search": LinearSearchPattern,
  "Linked List": LinkedListPattern,
  "Manacher's Algorithm": ManachersAlgorithmPattern,
  "Matrix Chain Multiplication": MatrixChainMultiplicationPattern,
  "Matrix Exponentiation": MatrixExponentiationPattern,
  "Matrix Operations": MatrixOperationsPattern,
  "Matrix Spiral Recursive": MatrixSpiralTraversalRecursivePattern,
  "Matrix Spiral Traversal": MatrixSpiralTraversalPattern,
  "Matrix Traversal": MatrixTraversalPattern,
  "Matrix Traversal Recursive": MatrixTraversalRecursivePattern,
  "Maximum Bipartite Matching": MaximumBipartiteMatchingPattern,
  Memoization: MemoizationPattern,
  "Merge Sort": MergeSortPattern,
  "Miller-Rabin Primality Test": MillerRabinPrimalityTestPattern,
  "Monotonic Queue": MonotonicQueuePattern,
  "Monotonic Stack": MonotonicStackPattern,
  "Network Flow": NetworkFlowPattern,
  "Null Pattern": NullPattern,
  "Prefix Sum": PrefixSumPattern,
  "Prefix Sums": PrefixSumsPattern,
  Prim: PrimPattern,
  "Prime Factorization": SieveOfEratosthenesPattern,
  "Probability DP": ProbabilityDPPattern,
  "Queue Implementation": QueueImplementationPattern,
  Quickselect: QuickselectPattern,
  "Quick Sort": QuickSortPattern,
  "Rabin Karp": RabinKarpPattern,
  "Red-Black Tree": RedBlackTreePattern,
  Recursion: RecursionPattern,
  "Rotate Matrix": MatrixOperationsPattern,
  "Segment Tree": SegmentTreePattern,
  "Selection Sort": SelectionSortPattern,
  "Sieve of Atkin": SieveOfAtkinPattern,
  "Sieve of Eratosthenes": SieveOfEratosthenesPattern,
  "Sieve of Sundaram": SieveOfSundaramPattern,
  "Sliding Window": SlidingWindowPattern,
  "Stack Implementation": StackImplementationPattern,
  "Stack Sort": StackSortPattern,
  "State Compression DP": StateCompressionDPPattern,
  "String Operations": StringPattern,
  "Suffix Array": SuffixArrayPattern,
  "Suffix Tree": SuffixTreePattern,
  "Lowest Common Ancestor": LCAPattern,
  "Ternary Search": TernarySearchAlgorithmPattern,
  "Test Data": NullPattern,
  "Topological Sort": TopologicalSortPattern,
  Tree: TreePattern,
  "Tree DP": TreeDynamicProgrammingPattern,
  "Trie Operations": TrieOperationsPattern,
  "Two Pointers": TwoPointersPattern,
  "Two Sum": TwoSumPattern,
  "Two Sum Dict": TwoSumDictionaryPattern,
  "Two Sum Two Pointers": TwoSumTwoPointersPattern,
  "Union Find": UnionFindPattern,
  "Z Algorithm": ZAlgorithmPattern,
};
