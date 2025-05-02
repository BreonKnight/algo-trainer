import { PatternKey, PATTERN_KEYS } from "./types";

export const monsterHunterExplanations: Partial<
  Record<
    PatternKey,
    {
      title: string;
      description: string;
      example: string;
      tips: string[];
    }
  >
> = {
  "Dynamic Programming Pattern": {
    title: "Monster Territory Dynamic Solver",
    description:
      "Like a monster hunter solving problems by breaking them down into smaller subproblems, Dynamic Programming Pattern solves problems by storing and reusing solutions to subproblems.",
    example:
      "Imagine you need to solve a complex problem by breaking it down into smaller subproblems - Dynamic Programming Pattern helps you do this efficiently by storing and reusing solutions to avoid redundant calculations.",
    tips: [
      "Break down problems into smaller subproblems",
      "Store solutions to subproblems in a table or cache",
      "Reuse solutions to avoid redundant calculations",
      "Consider both top-down (memoization) and bottom-up approaches",
      "Use it for optimization problems with overlapping subproblems",
      "Identify optimal substructure in your problem",
      "Define clear base cases for your subproblems",
      "Consider space optimization when possible",
    ],
  },
  Quickselect: {
    title: "Monster Territory Quick Selector",
    description:
      "Like a monster hunter quickly finding the k-th strongest monster in a territory, Quickselect efficiently finds the k-th smallest element in an unsorted list.",
    example:
      "Imagine you need to find the 5th strongest monster in a territory - Quickselect helps you do this without having to sort all the monsters first, making it much faster than a full sort.",
    tips: [
      "Choose a good pivot - like selecting a strategic monster to divide the territory",
      "Partition around pivot - similar to organizing monsters based on their strength relative to the pivot",
      "Recursively search in relevant partition - like focusing only on the part of the territory that contains your target",
      "Use random pivot selection - like randomly choosing a monster to avoid worst-case scenarios",
      "Consider median-of-medians - like using a more sophisticated strategy for guaranteed linear time performance",
    ],
  },
  "Quick Sort": {
    title: "Monster Territory Division",
    description:
      "Like dividing a monster's territory into smaller regions, Quick Sort efficiently sorts elements by partitioning around a pivot.",
    example:
      "Imagine dividing a monster's territory by choosing a central location (pivot) and organizing everything around it - stronger monsters on one side, weaker on the other.",
    tips: [
      "Choose a good pivot - like selecting a strategic central point in the territory",
      "Partition around pivot - similar to organizing monsters based on their strength relative to the pivot",
      "Recursively sort partitions - like organizing each sub-territory in the same way",
    ],
  },
  "Merge Sort": {
    title: "Monster Territory Merger",
    description:
      "Like merging two organized monster territories into one, Merge Sort combines sorted subarrays into a larger sorted array.",
    example:
      "Imagine having two organized monster territories and merging them into one larger territory while maintaining the order of monster strength.",
    tips: [
      "Divide territory in half - like splitting a monster territory into two equal parts",
      "Sort each half - similar to organizing each sub-territory",
      "Merge sorted halves - like combining two organized territories while maintaining order",
    ],
  },
  "Heap Sort": {
    title: "Monster Power Hierarchy",
    description:
      "Like organizing monsters in a power hierarchy where the strongest is always at the top, Heap Sort uses a heap data structure to sort elements.",
    example:
      "Imagine organizing monsters in a hierarchy where the strongest monster is always at the top, and you can quickly remove and replace the top monster.",
    tips: [
      "Build max heap - like creating a power hierarchy of monsters",
      "Extract maximum - similar to removing the strongest monster from the hierarchy",
      "Maintain heap property - like ensuring the hierarchy stays properly organized",
    ],
  },
  "Bubble Sort": {
    title: "Monster Strength Comparison",
    description:
      "Like comparing adjacent monsters and swapping them if they're in the wrong order, Bubble Sort repeatedly steps through the list.",
    example:
      "Imagine lining up monsters by strength and walking down the line, swapping any monster that's stronger than the one next to it.",
    tips: [
      "Compare adjacent elements - like comparing the strength of adjacent monsters",
      "Swap if in wrong order - similar to repositioning monsters based on their strength",
      "Repeat until no swaps needed - like continuing until all monsters are in the correct order",
    ],
  },
  "Selection Sort": {
    title: "Monster Selection Tournament",
    description:
      "Like finding the strongest monster in a group and placing it at the front, Selection Sort repeatedly finds the minimum element and places it at the beginning.",
    example:
      "Imagine holding a tournament to find the strongest monster, then placing that monster at the front of the line, and repeating with the remaining monsters.",
    tips: [
      "Find minimum element - like identifying the strongest monster in the current group",
      "Swap with first position - similar to moving the strongest monster to the front",
      "Repeat with remaining elements - like continuing the tournament with the remaining monsters",
    ],
  },
  "Insertion Sort": {
    title: "Monster Line Formation",
    description:
      "Like building a line of monsters one by one, Insertion Sort builds the final sorted array one item at a time.",
    example:
      "Imagine forming a line of monsters by strength, adding one monster at a time and inserting each new monster in the correct position.",
    tips: [
      "Start with first element - like beginning with a single monster",
      "Insert each new element in correct position - similar to placing each new monster in the right spot in the line",
      "Shift elements as needed - like making space for a monster by moving others",
    ],
  },
  "Binary Search": {
    title: "Monster Territory Search",
    description:
      "Like efficiently searching for a specific monster in a sorted territory, Binary Search quickly finds an element in a sorted array.",
    example:
      "Imagine looking for a specific monster in a territory where monsters are arranged by strength - you can quickly narrow down the search area.",
    tips: [
      "Start in the middle - like beginning your search at the center of the territory",
      "Eliminate half the search space - similar to determining which half of the territory to search next",
      "Repeat until found - like continuing to narrow down the search area until you find the monster",
    ],
  },
  "Binary Search on Answer": {
    title: "Monster Rarity Search",
    description:
      "Like finding the minimum rarity needed for a craft, Binary Search on Answer efficiently finds the optimal value in a range.",
    example:
      "Imagine trying to find the minimum rarity material needed for a craft - you can quickly narrow down the possibilities.",
    tips: [
      "Define search range - like establishing the possible range of material rarities",
      "Check middle value - similar to testing a specific rarity level",
      "Adjust range based on result - like narrowing down the search based on whether the test succeeded",
    ],
  },
  "Linear Search": {
    title: "Monster Territory Scan",
    description:
      "Like systematically scanning a territory for a specific monster, Linear Search checks each element in sequence.",
    example:
      "Imagine walking through a territory and checking each monster you encounter until you find the one you're looking for.",
    tips: [
      "Check each element in order - like examining each monster as you encounter it",
      "Stop when found - similar to stopping your search once you've found the target monster",
      "Continue to end if not found - like completing your scan if the monster isn't in the territory",
    ],
  },
  "Sliding Window": {
    title: "Sliding Window Monster Hunter",
    description:
      "The Sliding Window Monster Hunter is a master of tracking and maintaining a window of monsters. It uses a fixed-size window to efficiently hunt monsters in a sequence, perfect for problems where you need to find a subarray or substring that meets certain criteria.",
    example:
      "When hunting for the maximum number of monsters you can capture in a sequence without repeating any monster types, the Sliding Window Monster Hunter keeps track of the monsters in its current window and expands or contracts the window based on the monster types it encounters.",
    tips: [
      "Use two pointers to represent the window boundaries",
      "Keep track of the monsters in the current window using a map or set",
      "Expand the window when you find a new unique monster",
      "Contract the window when you encounter a duplicate monster",
      "Update your maximum count whenever you find a valid window",
    ],
  },
  "Two Pointers": {
    title: "Two Pointers Monster Hunter",
    description:
      "The Two Pointers Monster Hunter is an expert at using two pointers to efficiently track and hunt monsters in a sequence. It's particularly effective when you need to find pairs of monsters that meet certain criteria or when you need to manipulate a sequence of monsters in place.",
    example:
      "When hunting for pairs of monsters that sum to a specific value, the Two Pointers Monster Hunter starts with one pointer at the beginning and one at the end of the sequence, moving them inward based on the sum of the monsters they're pointing to.",
    tips: [
      "Use two pointers to traverse the sequence from different ends",
      "Move the pointers based on the comparison of their values",
      "Keep track of the best solution found so far",
      "Consider sorting the sequence first if order doesn't matter",
      "Be careful with pointer movement to avoid missing valid pairs",
    ],
  },
  "Floyd Cycle Detection": {
    title: "Fast and Slow Pointers Monster Hunter",
    description:
      "The Fast and Slow Pointers Monster Hunter is a master of detecting cycles and finding middle points in monster sequences. It uses two pointers moving at different speeds to efficiently solve problems involving cycles, palindromes, or finding middle elements.",
    example:
      "When hunting for a cycle in a sequence of monsters where each monster points to another monster, the Fast and Slow Pointers Monster Hunter uses a fast pointer that moves two steps at a time and a slow pointer that moves one step at a time. If they meet, there's a cycle!",
    tips: [
      "Use a fast pointer that moves two steps and a slow pointer that moves one step",
      "Initialize both pointers at the start of the sequence",
      "Check if the pointers meet to detect cycles",
      "Use the meeting point to find the start of the cycle",
      "Be careful with null checks when moving pointers",
    ],
  },
  "Topological Sort": {
    title: "Topological Sort Monster Hunter",
    description:
      "The Topological Sort Monster Hunter is an expert at ordering monsters based on their dependencies. It's perfect for problems involving task scheduling or course prerequisites.",
    example:
      "When hunting for a valid order to complete monster training courses with prerequisites, the Topological Sort Monster Hunter builds a graph of dependencies and uses DFS or BFS to find a valid order.",
    tips: [
      "Build an adjacency list and in-degree count",
      "Use a queue for BFS or recursion for DFS",
      "Start with nodes that have no incoming edges",
      "Remove edges as you process nodes",
      "Check for cycles that would make sorting impossible",
    ],
  },
  "Test Data": {
    title: "Test Data Monster Hunter",
    description:
      "The Test Data Monster Hunter is a master of generating edge cases, large inventories, and random scenarios to stress-test hunting strategies. This hunter ensures that every algorithm is ready for the wildest hunts!",
    example:
      "Before a big hunt, the Test Data Monster Hunter simulates empty inventories, massive loot hauls, and rare edge cases to make sure their strategy works in every situation.",
    tips: [
      "Generate edge cases like empty, single, and maximum size inputs.",
      "Create random and performance test cases to cover all scenarios.",
      "Use test data to validate and benchmark your algorithms.",
      "Document the types of test cases used for future reference.",
      "Test early and often to catch issues before the real hunt!",
    ],
  },
  "A* Search": {
    title: "A* Monster Pathfinder",
    description:
      "Like a master monster hunter planning the optimal path through dangerous territory, A* Search efficiently finds the shortest path by considering both the distance traveled and the estimated distance to the goal.",
    example:
      "Imagine hunting a rare monster in a maze-like territory - A* helps you find the quickest path by considering both how far you've traveled and how close you are to the monster's last known location.",
    tips: [
      "Use a priority queue to track the most promising paths",
      "Consider both actual cost and heuristic estimate",
      "Update path costs as you discover better routes",
      "Keep track of visited locations to avoid cycles",
      "Choose an appropriate heuristic for your hunting terrain",
    ],
  },
  "Graph Dijkstra": {
    title: "Monster Hunter's Pathfinder",
    description:
      "Like a monster hunter finding the safest path through dangerous territory, Dijkstra's algorithm finds the shortest path from a starting point to all other points.",
    example:
      "Imagine you're hunting a rare monster in a dangerous territory. Dijkstra helps you find the safest (shortest) path from your base to any location, avoiding the most dangerous areas.",
    tips: [
      "Start from your current location",
      "Keep track of the shortest known distance to each point",
      "Update distances when you find better paths",
      "Use a priority queue to always explore the closest unvisited point",
      "Mark points as visited to avoid revisiting them",
    ],
  },
  "Kadane's Algorithm": {
    title: "Kadane's Monster Territory Analyzer",
    description:
      "Like a monster hunter analyzing the most profitable hunting grounds, Kadane's algorithm finds the maximum sum subarray in a sequence of monster territories.",
    example:
      "Imagine you have a sequence of territories with different monster densities - Kadane's helps you find the contiguous stretch of territories that will yield the most monster materials.",
    tips: [
      "Keep track of the maximum sum ending at each position",
      "Compare current element with the sum of previous elements",
      "Reset the sum when it becomes negative",
      "Update the global maximum whenever you find a better sum",
      "Consider both positive and negative monster densities",
    ],
  },
  "KMP Algorithm": {
    title: "Knuth-Morris-Pratt Monster Pattern Seeker",
    description:
      "Like a monster hunter tracking a specific monster's movement pattern, the KMP algorithm efficiently searches for patterns in monster behavior sequences.",
    example:
      "Imagine trying to find a specific sequence of monster footprints in a long trail - KMP helps you quickly locate the pattern without backtracking through the entire trail.",
    tips: [
      "Build a prefix table to avoid unnecessary comparisons",
      "Use the prefix table to skip ahead when mismatches occur",
      "Keep track of the longest prefix that's also a suffix",
      "Update the pattern position based on the prefix table",
      "Consider the pattern's structure to optimize the search",
    ],
  },
  "Ternary Search": {
    title: "Monster Territory Triangulation",
    description:
      "Like a monster hunter dividing their search area into three parts to find the optimal hunting ground, Ternary Search efficiently finds the maximum or minimum in a unimodal function.",
    example:
      "Imagine searching for the highest point in a monster territory where the elevation first increases and then decreases - Ternary Search helps you find this peak by dividing the area into three parts and eliminating one-third at a time.",
    tips: [
      "Divide the search space into three equal parts",
      "Compare the values at the division points",
      "Eliminate one-third of the search space in each step",
      "Continue until you find the optimal point",
      "Handle edge cases carefully when near the boundaries",
    ],
  },
  "Exponential Search": {
    title: "Monster Territory Expansion",
    description:
      "Like a monster hunter expanding their search area exponentially to find a rare monster, Exponential Search efficiently finds a range where a target might be present in an unbounded sorted array.",
    example:
      "Imagine searching for a rare monster in an unknown territory - Exponential Search helps you quickly find the area where the monster might be by doubling your search range each time.",
    tips: [
      "Start with a small range and double it",
      "Use binary search within the found range",
      "Handle unbounded arrays efficiently",
      "Consider using it for unbounded or infinite arrays",
      "Be careful with overflow when doubling the range",
    ],
  },
  "Interpolation Search": {
    title: "Monster Territory Estimation",
    description:
      "Like a monster hunter estimating the target's location based on known values, Interpolation Search estimates the position of the target in a uniformly distributed array.",
    example:
      "Imagine searching for a monster in a territory where monster density is uniform - Interpolation Search helps you estimate where to look based on the known distribution.",
    tips: [
      "Use linear interpolation to estimate position",
      "Handle non-uniform distributions carefully",
      "Consider using it for uniformly distributed data",
      "Use it when you have a good estimate of the target's position",
      "Fall back to binary search if interpolation fails",
    ],
  },
  "Jump Search": {
    title: "Monster Territory Leaping",
    description:
      "Like a monster hunter jumping through a territory in fixed steps, Jump Search divides the array into blocks and jumps through them to find the target.",
    example:
      "Imagine searching for a monster by jumping through a territory in fixed steps - Jump Search helps you find the block where the monster might be and then perform a linear search within that block.",
    tips: [
      "Choose an optimal jump size",
      "Use linear search within the found block",
      "Consider using it for large arrays",
      "Use it when binary search is not suitable",
      "Balance between jump size and linear search time",
    ],
  },
  "Manacher's Algorithm": {
    title: "Monster Territory Symmetry Finder",
    description:
      "Like a monster hunter identifying symmetrical patterns in monster territories, Manacher's algorithm finds the longest palindromic substring in linear time.",
    example:
      "Imagine analyzing a monster's territory to find the largest symmetrical area - Manacher's helps you identify these patterns efficiently.",
    tips: [
      "Use center expansion approach",
      "Maintain a center and right boundary",
      "Use mirror positions to avoid redundant checks",
      "Handle both odd and even length palindromes",
      "Consider using it for pattern matching in monster territories",
    ],
  },
  "Graph SCC": {
    title: "Monster Territory Strongholds",
    description:
      "Like identifying groups of monster territories that are strongly connected, Strongly Connected Components (SCC) finds groups of vertices where every vertex is reachable from every other vertex.",
    example:
      "Imagine identifying groups of monster territories where monsters can move between any two territories in the group, but not to territories outside the group.",
    tips: [
      "Use depth-first search to find SCCs",
      "Mark nodes as visited during DFS",
      "Check for connectivity after removing a node",
      "Use it for understanding the structure of monster territories",
      "Handle edge cases like multiple components",
    ],
  },
  "Network Flow": {
    title: "Monster Territory Flow Network",
    description:
      "Like managing the flow of monsters between territories, Network Flow algorithms find the maximum flow in a network of connected territories.",
    example:
      "Imagine you have a network of monster territories with paths between them, each with a capacity for monster migration. Network Flow helps you find the maximum number of monsters that can move through this network.",
    tips: [
      "Use residual graphs to track available capacity",
      "Find augmenting paths to increase flow",
      "Consider both directed and undirected paths",
      "Handle edge cases like multiple sources or sinks",
      "Use appropriate algorithms based on network size",
    ],
  },
  "Maximum Bipartite Matching": {
    title: "Monster Hunter's Perfect Match Finder",
    description:
      "Like a monster hunter matching hunters to their ideal monster targets, Maximum Bipartite Matching finds the largest set of edges without common vertices.",
    example:
      "Imagine you need to assign each hunter to their most suitable monster type - Maximum Bipartite Matching helps you find the optimal assignment where each hunter gets their best match.",
    tips: [
      "Model the problem as a bipartite graph",
      "Use augmenting paths to increase the matching",
      "Alternate between matched and unmatched edges",
      "Consider using the Hopcroft-Karp algorithm for efficiency",
      "Use it for optimal resource allocation in monster hunting",
    ],
  },
  "State Compression DP": {
    title: "Monster Territory State Compressor",
    description:
      "Like a monster hunter efficiently tracking the state of multiple territories, State Compression DP uses bit manipulation to represent and process multiple states simultaneously.",
    example:
      "Imagine you need to track which territories have been visited and which monsters have been captured - State Compression helps you represent this information efficiently using bits.",
    tips: [
      "Use bit masks to represent states",
      "Consider each bit as a boolean flag",
      "Use bitwise operations to manipulate states",
      "Cache intermediate results to avoid redundant calculations",
      "Consider the trade-off between memory and computation",
    ],
  },
  "Digit DP": {
    title: "Monster Territory Digit Counter",
    description:
      "Like a monster hunter counting specific patterns in monster numbers, Digit DP efficiently counts numbers with specific digit properties in a range.",
    example:
      "Imagine you need to count how many monster IDs in a range have specific digit patterns - Digit DP helps you count these efficiently without checking every number.",
    tips: [
      "Use memoization to store intermediate results",
      "Track digit constraints and properties",
      "Handle leading zeros appropriately",
      "Consider using bitmask for digit constraints",
      "Use it for counting special monster identifiers",
    ],
  },
  Tree: {
    title: "Monster Territory Tree Operations",
    description:
      "A collection of algorithms for working with tree structures, including LCA, Heavy Light Decomposition, and other tree-based operations.",
    example:
      "Imagine you have a tree representing monster territories and their relationships. Tree Algorithms help you efficiently perform operations like finding common ancestors, decomposing the tree for efficient queries, and more.",
    tips: [
      "Understand the tree structure and its properties",
      "Use appropriate algorithms based on the operation needed",
      "Consider edge cases like empty trees or single nodes",
      "Optimize for the specific tree operations required",
      "Use efficient data structures for tree representation",
    ],
  },
  "Probability DP": {
    title: "Monster Territory Probability Predictor",
    description:
      "Like a monster hunter predicting the probability of different hunting outcomes, Probability DP calculates probabilities of different events in a sequence.",
    example:
      "Imagine you need to predict the probability of successfully hunting a monster after a series of attempts - Probability DP helps you calculate these probabilities efficiently.",
    tips: [
      "Store probabilities for different states",
      "Consider both success and failure probabilities",
      "Handle dependent and independent events",
      "Use memoization for recursive solutions",
      "Use it for predicting monster hunting outcomes",
    ],
  },
  "Suffix Tree": {
    title: "Monster Territory Suffix Tree",
    description:
      "Like a monster hunter organizing all possible patterns in a monster's territory, Suffix Tree provides a compact way to represent and search through all suffixes of a text.",
    example:
      "Imagine you need to quickly find all occurrences of any pattern in a monster's territory - Suffix Tree helps you organize and search through all possible patterns efficiently.",
    tips: [
      "Build the tree using Ukkonen's algorithm",
      "Use edge compression for space efficiency",
      "Consider using suffix links for faster construction",
      "Handle large texts with efficient memory usage",
      "Use it for complex pattern matching in monster territories",
    ],
  },
  "Suffix Array": {
    title: "Monster Territory Suffix Organizer",
    description:
      "Like a monster hunter organizing all possible endings of monster territories, Suffix Array provides an efficient way to search and analyze patterns in monster-related text.",
    example:
      "Imagine you have a long sequence of monster territories and need to quickly find all occurrences of a particular pattern - Suffix Array helps you search through all possible suffixes efficiently.",
    tips: [
      "Build the suffix array using efficient sorting",
      "Use binary search for pattern matching",
      "Consider using Kasai's algorithm for LCP array",
      "Handle large texts with efficient construction",
      "Use it for advanced pattern matching in monster databases",
    ],
  },
  "B Tree": {
    title: "Monster Territory Balanced Tree",
    description:
      "Like a monster hunter organizing territories in a balanced way for efficient access, B Tree maintains a balanced tree structure for efficient search, insertion, and deletion.",
    example:
      "Imagine organizing monster territories in a way that keeps the tree balanced, allowing quick access to any territory regardless of how many territories you add or remove.",
    tips: [
      "Maintain minimum and maximum number of children per node",
      "Split nodes when they become too full",
      "Merge nodes when they become too empty",
      "Keep all leaves at the same level",
      "Use it for efficient monster territory management",
    ],
  },
  "AVL Tree": {
    title: "Monster Territory Height-Balanced Tree",
    description:
      "Like a monster hunter maintaining perfect balance in their territory organization, AVL Tree is a self-balancing binary search tree that maintains height balance.",
    example:
      "Imagine organizing monster territories in a way that keeps the tree perfectly balanced, ensuring quick access to any territory regardless of the order they were added.",
    tips: [
      "Track balance factor for each node",
      "Perform rotations to maintain balance",
      "Handle left-left, left-right, right-right, and right-left cases",
      "Update balance factors after insertions and deletions",
      "Use it for maintaining balanced monster territory hierarchies",
    ],
  },
  "Red-Black Tree": {
    title: "Monster Territory Color-Balanced Tree",
    description:
      "Like a monster hunter using color coding to maintain territory balance, Red-Black Tree is a self-balancing binary search tree that uses color properties to maintain balance.",
    example:
      "Imagine organizing monster territories using a color-coded system that ensures the tree stays balanced, allowing efficient operations regardless of the order of insertions and deletions.",
    tips: [
      "Maintain red-black properties",
      "Handle color flips and rotations",
      "Consider uncle's color during insertions",
      "Handle different cases during deletion",
      "Use it for efficient monster territory management",
    ],
  },
  "Fenwick Tree": {
    title: "Monster Territory Binary Indexed Tree",
    description:
      "Like a monster hunter efficiently tracking cumulative resources across territories, Fenwick Tree provides efficient prefix sum operations and updates.",
    example:
      "Imagine you need to quickly calculate the total resources in any range of territories and update individual territory values - Fenwick Tree helps you do this efficiently.",
    tips: [
      "Use binary representation for efficient updates",
      "Calculate prefix sums using bit manipulation",
      "Handle both point updates and range queries",
      "Consider using it for dynamic resource tracking",
      "Use it for efficient monster resource management",
    ],
  },
  "Segment Tree": {
    title: "Monster Territory Range Query Tree",
    description:
      "Like a monster hunter efficiently answering questions about ranges of territories, Segment Tree provides efficient range queries and updates.",
    example:
      "Imagine you need to quickly find the maximum monster strength in any range of territories and update individual territory values - Segment Tree helps you do this efficiently.",
    tips: [
      "Build the tree recursively",
      "Handle range queries by combining segment results",
      "Update values and propagate changes up the tree",
      "Consider using lazy propagation for range updates",
      "Use it for efficient monster territory analysis",
    ],
  },
  "Activity Selection": {
    title: "Monster Territory Activity Planner",
    description:
      "Like a monster hunter selecting the maximum number of non-overlapping activities, Activity Selection finds the maximum size set of mutually compatible activities.",
    example:
      "Imagine you need to select the maximum number of monster hunts that don't overlap in time - Activity Selection helps you find the optimal schedule.",
    tips: [
      "Sort activities by finish time",
      "Select the first activity and then the next compatible one",
      "Use greedy approach for optimal solution",
      "Handle overlapping activities carefully",
      "Use it for optimal monster hunting scheduling",
    ],
  },
  "Huffman Coding": {
    title: "Monster Territory Code Compressor",
    description:
      "Like a monster hunter creating an efficient code for different monster types, Huffman Coding creates an optimal prefix code for compressing monster-related data.",
    example:
      "Imagine you need to create a compact code for different monster types based on their frequency - Huffman helps you create the most efficient code where common monsters have shorter codes.",
    tips: [
      "Build a frequency table for monster types",
      "Create a priority queue of nodes",
      "Combine the two least frequent nodes",
      "Build the tree from bottom up",
      "Assign codes based on the tree structure",
    ],
  },
  "Miller-Rabin Primality Test": {
    title: "Monster Territory Prime Detector",
    description:
      "Like a monster hunter identifying prime territories, Miller-Rabin efficiently tests if a number is prime.",
    example:
      "Imagine you need to identify which monster territories have prime numbers of monsters - Miller-Rabin helps you do this efficiently.",
    tips: [
      "Use multiple bases for better accuracy",
      "Handle edge cases carefully",
      "Consider using it for cryptographic applications",
      "Use it for identifying special monster territories",
      "Balance between accuracy and performance",
    ],
  },
  "Prime Factorization": {
    title: "Monster Hunter's Number Breaker",
    description:
      "Like a monster hunter breaking down complex numbers into their basic components, Prime Factorization decomposes numbers into their prime factors.",
    example:
      "Imagine analyzing a monster's strength rating to understand its basic components - Prime Factorization helps you break down complex numbers into their fundamental building blocks.",
    tips: [
      "Start with the smallest prime (2)",
      "Divide out all factors of each prime",
      "Move to the next prime when current one no longer divides",
      "Handle remaining prime factors greater than 2",
      "Use it for understanding number composition",
    ],
  },
  "Sieve of Eratosthenes": {
    title: "Monster Territory Prime Sieve",
    description:
      "Like filtering out non-prime monster territories, the Sieve of Eratosthenes efficiently finds all prime numbers up to a given limit.",
    example:
      "Imagine you have a list of monster territories numbered from 2 to n, and you want to identify which territories are prime (have special properties). The Sieve helps you efficiently mark non-prime territories.",
    tips: [
      "Start with the first prime number (2)",
      "Mark all multiples of each prime as non-prime",
      "Move to the next unmarked number",
      "Continue until you've processed all numbers up to n",
      "Use it for identifying special monster territories",
    ],
  },
  "Chinese Remainder Theorem": {
    title: "Monster Territory Remainder Solver",
    description:
      "Like a monster hunter solving complex territory division problems, Chinese Remainder Theorem finds a number that satisfies multiple congruence relations.",
    example:
      "Imagine you need to find a monster territory that satisfies multiple conditions - Chinese Remainder Theorem helps you find such territories.",
    tips: [
      "Ensure moduli are pairwise coprime",
      "Use extended Euclidean algorithm for inverses",
      "Handle large numbers carefully",
      "Use it for solving complex monster territory problems",
      "Consider using it for cryptographic applications",
    ],
  },
  "Extended Euclidean": {
    title: "Monster Territory GCD Extender",
    description:
      "Like a monster hunter finding the greatest common divisor and its coefficients, Extended Euclidean algorithm finds integers x and y such that ax + by = gcd(a,b).",
    example:
      "Imagine you need to find the largest common territory that can be divided between two monster groups - Extended Euclidean helps you find this and how to divide it.",
    tips: [
      "Use recursion or iteration for implementation",
      "Handle negative numbers carefully",
      "Consider using it for modular inverses",
      "Use it for solving linear Diophantine equations",
      "Optimize for your specific problem size",
    ],
  },
  "Grid Traversal": {
    title: "Monster Territory Grid Explorer",
    description:
      "Like a monster hunter systematically exploring a grid-based territory, Grid Traversal algorithms help navigate and analyze grid-based monster habitats.",
    example:
      "Imagine you're exploring a grid-based monster territory where each cell represents different terrain - Grid Traversal helps you systematically explore and analyze the entire territory.",
    tips: [
      "Use appropriate traversal patterns (spiral, zigzag, etc.)",
      "Keep track of visited cells",
      "Handle different movement patterns",
      "Consider using BFS or DFS for grid exploration",
      "Use it for mapping and analyzing monster territories",
    ],
  },
  "Matrix Chain Multiplication": {
    title: "Monster Territory Chain Multiplier",
    description:
      "Like a monster hunter finding the most efficient way to multiply multiple territories, Matrix Chain Multiplication finds the optimal way to multiply a sequence of matrices.",
    example:
      "Imagine you need to calculate the total monster population across multiple territories - Matrix Chain helps you find the most efficient way to combine the population data.",
    tips: [
      "Break down the problem into smaller subproblems",
      "Store intermediate results to avoid redundant calculations",
      "Consider all possible ways to split the sequence",
      "Choose the split that minimizes the total operations",
      "Build the solution from bottom up",
    ],
  },
  "Matrix Exponentiation": {
    title: "Monster Territory Power Calculator",
    description:
      "Like a monster hunter calculating territory powers efficiently, Matrix Exponentiation efficiently computes high powers of matrices.",
    example:
      "Imagine you need to predict monster population growth over many generations - Matrix Exponentiation helps you compute large powers efficiently to make these predictions.",
    tips: [
      "Use binary exponentiation for efficiency",
      "Handle matrix multiplication carefully",
      "Consider using it for solving linear recurrences",
      "Use it for predicting monster population dynamics",
      "Be mindful of numerical stability with large powers",
    ],
  },
  "Floyd-Warshall": {
    title: "Monster Territory All-Pairs Pathfinder",
    description:
      "Like a monster hunter finding the shortest paths between all pairs of territories, Floyd-Warshall finds the shortest paths between all pairs of vertices in a graph.",
    example:
      "Imagine you need to know the shortest path between every pair of monster territories in your map - Floyd-Warshall helps you create a complete distance matrix for all possible routes.",
    tips: [
      "Initialize the distance matrix with direct edges",
      "Consider each node as an intermediate point",
      "Update distances when you find better paths through intermediates",
      "Handle negative weights carefully",
      "Use it when you need all-pairs shortest paths",
    ],
  },
  Kruskal: {
    title: "Monster Territory Minimum Spanning Tree",
    description:
      "Like a monster hunter building the most efficient network of paths between territories, Kruskal's algorithm finds the minimum spanning tree of a graph.",
    example:
      "Imagine you need to connect all monster territories with the minimum total path length - Kruskal helps you build the most efficient network of paths while avoiding cycles.",
    tips: [
      "Sort all edges by weight",
      "Use a disjoint set to detect cycles",
      "Add edges in increasing order of weight",
      "Stop when you have V-1 edges",
      "Consider using Kruskal for sparse graphs",
    ],
  },
  Prim: {
    title: "Monster Territory Prim",
    description:
      "Like a monster hunter growing a network of paths from a central territory, Prim's algorithm builds a minimum spanning tree by always adding the closest unconnected territory.",
    example:
      "Imagine starting from your base camp and gradually connecting to the nearest unconnected territories - Prim helps you build the most efficient network while always staying connected.",
    tips: [
      "Use a greedy approach to find the minimum spanning tree",
      "Start with an arbitrary node",
      "Add the smallest edge that connects a new node to the tree",
      "Use it for finding the minimum spanning tree in a graph",
      "Handle edge cases like disconnected graph",
      "Consider using Prim for dense graphs",
    ],
  },
  "Graph Kosaraju": {
    title: "Monster Hunter's Strong Component Finder",
    description:
      "Like a monster hunter identifying strongly connected groups of territories, Kosaraju's algorithm finds strongly connected components in a directed graph.",
    example:
      "Imagine analyzing which groups of monster territories form natural migration zones - Kosaraju helps you identify these interconnected regions.",
    tips: [
      "Perform DFS to get finish times",
      "Reverse the graph",
      "Process nodes in reverse order of finish times",
      "Each DFS tree in the second pass forms an SCC",
      "Use it to understand the structure of monster migration patterns",
    ],
  },
  "Bellman-Ford": {
    title: "Monster Territory Negative Pathfinder",
    description:
      "Like a monster hunter finding the safest path through territories with negative dangers, Bellman-Ford can handle negative weights and detect negative cycles.",
    example:
      "Imagine some territories have negative danger values (safe havens) while others are dangerous - Bellman-Ford helps you find the safest path even when some routes actually reduce your total danger.",
    tips: [
      "Relax all edges repeatedly",
      "Check for negative cycles after V-1 iterations",
      "Update distances when you find better paths",
      "Consider using Bellman-Ford when negative weights are possible",
      "Use it for detecting arbitrage opportunities in monster trading",
    ],
  },
  BFS: {
    title: "Monster Territory Breadth Explorer",
    description:
      "Like a monster hunter systematically exploring a territory level by level, BFS explores all nodes at the current depth before moving to the next level.",
    example:
      "Imagine you're searching for a monster in a cave system - BFS helps you explore each level of the cave completely before moving deeper, ensuring you don't miss any side passages.",
    tips: [
      "Use a queue to track nodes to visit",
      "Mark nodes as visited to avoid cycles",
      "Keep track of the current level/depth",
      "Process all nodes at the current level before moving deeper",
      "Consider using BFS for finding shortest paths in unweighted graphs",
    ],
  },
  DFS: {
    title: "Monster Territory Depth Explorer",
    description:
      "Like a monster hunter following a trail as far as possible before backtracking, DFS explores as far as possible along each branch before backtracking.",
    example:
      "Imagine tracking a monster's trail through a forest - DFS helps you follow each path to its end before trying alternative routes, like following a scent trail until it ends.",
    tips: [
      "Use recursion or a stack to track the path",
      "Mark nodes as visited to avoid cycles",
      "Backtrack when you reach a dead end",
      "Consider using DFS for topological sorting or cycle detection",
      "Be mindful of stack depth in recursive implementations",
    ],
  },
  "Articulation Points": {
    title: "Monster Territory Critical Point Finder",
    description:
      "Like a monster hunter identifying critical territories that connect different regions, Articulation Points finds nodes whose removal would disconnect the graph.",
    example:
      "Imagine identifying which territories are crucial for monster migration - if these territories are blocked, different groups of monsters would be isolated from each other.",
    tips: [
      "Use DFS to track discovery times",
      "Keep track of the lowest reachable ancestor",
      "A node is an articulation point if it has a child with no back edge",
      "The root is special - it's an articulation point if it has more than one child",
      "Use it to identify critical points in monster migration routes",
    ],
  },
  "Union Find": {
    title: "Monster Territory Union Manager",
    description:
      "Like a monster hunter managing groups of connected territories, Union Find efficiently manages disjoint sets and finds connected components.",
    example:
      "Imagine you need to track which monster territories are connected and merge them when they become connected - Union Find helps you manage these connections efficiently.",
    tips: [
      "Use path compression for faster finds",
      "Consider using union by rank or size",
      "Handle both union and find operations efficiently",
      "Use it for dynamic connectivity problems",
      "Consider using it for maze generation in monster territories",
    ],
  },
  "Monotonic Queue": {
    title: "Monster Territory Queue Optimizer",
    description:
      "Like a monster hunter maintaining an optimal queue of territories, Monotonic Queue maintains elements in a specific order to solve sliding window problems efficiently.",
    example:
      "Imagine you need to track the strongest monster in a sliding window of territories - Monotonic Queue helps you maintain this information efficiently.",
    tips: [
      "Maintain elements in decreasing order",
      "Remove elements that are no longer in the window",
      "Use it for sliding window maximum/minimum problems",
      "Consider using it for optimization problems",
      "Handle both increasing and decreasing monotonic queues",
    ],
  },
  "Monotonic Stack": {
    title: "Monster Territory Stack Optimizer",
    description:
      "Like a monster hunter maintaining an optimal stack of territories, Monotonic Stack maintains elements in a specific order to solve problems efficiently.",
    example:
      "Imagine you need to find the next greater monster in a sequence of territories - Monotonic Stack helps you solve this efficiently.",
    tips: [
      "Maintain elements in increasing order",
      "Pop elements that are no longer needed",
      "Use it for next greater/smaller element problems",
      "Consider using it for histogram problems",
      "Handle both increasing and decreasing monotonic stacks",
    ],
  },
  "Queue Implementation": {
    title: "Monster Territory Queue Builder",
    description:
      "Like a monster hunter organizing a line of territories to explore, Queue Implementation provides efficient FIFO (First In, First Out) operations.",
    example:
      "Imagine you need to process monster territories in the order they were discovered - Queue helps you maintain this order efficiently.",
    tips: [
      "Use an array or linked list for implementation",
      "Handle both enqueue and dequeue operations",
      "Consider using circular buffer for array implementation",
      "Use it for BFS and other queue-based algorithms",
      "Handle edge cases like empty and full queues",
    ],
  },
  "Stack Implementation": {
    title: "Monster Territory Stack Builder",
    description:
      "Like a monster hunter organizing a stack of territories to explore, Stack Implementation provides efficient LIFO (Last In, First Out) operations.",
    example:
      "Imagine you need to backtrack through monster territories you've visited - Stack helps you maintain this order efficiently.",
    tips: [
      "Use an array or linked list for implementation",
      "Handle both push and pop operations",
      "Consider using dynamic resizing for array implementation",
      "Use it for DFS and other stack-based algorithms",
      "Handle edge cases like empty stack",
    ],
  },
  "Circular Linked List": {
    title: "Monster Territory Circular Organizer",
    description:
      "Like a monster hunter organizing territories in a circular pattern, Circular Linked List connects the last node back to the first.",
    example:
      "Imagine you need to process monster territories in a circular manner - Circular Linked List helps you maintain this structure efficiently.",
    tips: [
      "Handle the circular nature carefully",
      "Consider using sentinel nodes",
      "Use it for round-robin scheduling",
      "Implement efficient traversal methods",
      "Handle edge cases like empty list",
    ],
  },
  "Hash Table": {
    title: "Monster Territory Hash Organizer",
    description:
      "Like a monster hunter organizing territories by their unique identifiers, Hash Table provides efficient insertion, deletion, and lookup operations.",
    example:
      "Imagine you need to quickly find information about specific monster territories - Hash Table helps you organize and access this data efficiently.",
    tips: [
      "Choose a good hash function",
      "Handle collisions using chaining or open addressing",
      "Consider load factor for resizing",
      "Use it for fast lookups and insertions",
      "Handle edge cases like duplicate keys",
    ],
  },
  "Heap Implementation": {
    title: "Monster Territory Priority Organizer",
    description:
      "Like a monster hunter organizing territories by priority, Heap Implementation provides efficient priority queue operations.",
    example:
      "Imagine you need to process monster territories based on their importance - Heap helps you maintain this priority order efficiently.",
    tips: [
      "Maintain heap property during operations",
      "Handle both min and max heaps",
      "Consider using array implementation",
      "Use it for priority queue operations",
      "Handle edge cases like empty heap",
    ],
  },
  "Linked List": {
    title: "Monster Territory Chain Organizer",
    description:
      "Like a monster hunter organizing territories in a chain, Linked List provides efficient insertion and deletion operations.",
    example:
      "Imagine you need to maintain a flexible list of monster territories - Linked List helps you organize and modify this list efficiently.",
    tips: [
      "Handle both singly and doubly linked lists",
      "Consider using sentinel nodes",
      "Use it for dynamic data structures",
      "Implement efficient traversal methods",
      "Handle edge cases like empty list",
    ],
  },
  "Fast Fourier Transform": {
    title: "Monster Territory Frequency Analyzer",
    description:
      "Like a monster hunter analyzing the frequency patterns in monster territories, FFT efficiently computes the discrete Fourier transform.",
    example:
      "Imagine analyzing the frequency of monster appearances across different territories - FFT helps you identify patterns in the frequency domain.",
    tips: [
      "Use divide and conquer approach",
      "Handle complex numbers efficiently",
      "Consider using it for signal processing in monster tracking",
      "Use it for pattern recognition in monster behavior",
      "Optimize for your specific problem size",
    ],
  },
  "Job Scheduling": {
    title: "Monster Territory Scheduler",
    description:
      "Like a monster hunter scheduling hunting tasks efficiently, Job Scheduling finds the optimal way to schedule tasks with deadlines and profits.",
    example:
      "Imagine you need to schedule monster hunts to maximize your rewards while meeting deadlines - Job Scheduling helps you find the optimal schedule.",
    tips: [
      "Sort jobs by deadline or profit",
      "Use greedy approach for optimal solutions",
      "Consider using priority queue for scheduling",
      "Handle overlapping schedules carefully",
      "Use it for optimal monster hunting scheduling",
    ],
  },
  Recursion: {
    title: "Monster Territory Recursive Explorer",
    description:
      "Like a monster hunter solving problems by breaking them down into smaller, similar problems, Recursion solves problems by having a function call itself with smaller inputs.",
    example:
      "Imagine you're exploring a monster territory by repeatedly dividing it into smaller areas - Recursion helps you handle each area in the same way until you reach a base case.",
    tips: [
      "Define clear base cases",
      "Ensure each recursive call makes progress toward a base case",
      "Consider using memoization for overlapping subproblems",
      "Use it for problems with recursive structure",
      "Be mindful of stack depth and memory usage",
    ],
  },
  "Divide and Conquer": {
    title: "Monster Territory Divider",
    description:
      "Like a monster hunter dividing a large territory into smaller, manageable parts, Divide and Conquer solves problems by breaking them into smaller subproblems and combining their solutions.",
    example:
      "Imagine you need to analyze a large monster territory - Divide and Conquer helps you break it into smaller areas, solve each area independently, and combine the results.",
    tips: [
      "Break the problem into smaller subproblems",
      "Solve each subproblem independently",
      "Combine solutions to solve the original problem",
      "Consider using it for problems that can be divided",
      "Use it for efficient territory analysis",
    ],
  },
  Backtracking: {
    title: "Monster Territory Pathfinder",
    description:
      "Like a monster hunter trying different paths and backtracking when they hit a dead end, Backtracking systematically explores all possible solutions by trying different options and undoing choices that don't work.",
    example:
      "Imagine you're trying to find a path through a monster maze - Backtracking helps you try different routes and go back when you hit a dead end, systematically exploring all possibilities.",
    tips: [
      "Try different options at each step",
      "Backtrack when a choice leads to a dead end",
      "Keep track of the current path",
      "Consider using it for problems with multiple solutions",
      "Use it for exploring all possible monster paths",
    ],
  },
  Greedy: {
    title: "Monster Hunter's Greedy Strategy",
    description:
      "Like a monster hunter who always chooses the most valuable target at each step, the Greedy algorithm makes locally optimal choices hoping they lead to a globally optimal solution.",
    example:
      "Imagine you're a monster hunter with limited time. At each step, you choose the most valuable monster you can defeat, hoping this strategy leads to the maximum total value of monsters hunted.",
    tips: [
      "Always choose the most valuable option available at each step",
      "Consider the value-to-effort ratio of each monster",
      "Be careful - sometimes the greedy choice might not lead to the best overall outcome",
      "Use when the problem has optimal substructure and greedy choice property",
      "Prove the correctness of your greedy strategy if possible",
    ],
  },
  "Greedy Job Scheduling": {
    title: "Monster Hunter's Schedule Optimizer",
    description:
      "Like a monster hunter scheduling hunts to maximize rewards, Greedy Job Scheduling selects jobs to maximize profit while meeting deadlines.",
    example:
      "Imagine you have a list of monster hunts, each with a deadline and reward. You need to schedule as many hunts as possible to maximize your total reward while meeting all deadlines.",
    tips: [
      "Sort hunts by deadline or profit",
      "Choose the most profitable hunt that fits your schedule",
      "Keep track of your current time and available slots",
      "Consider both profit and time requirements",
      "Use a priority queue to efficiently manage your schedule",
    ],
  },
  "Greedy Fractional Knapsack": {
    title: "Monster Hunter's Resource Packer",
    description:
      "Like a monster hunter packing their bag with the most valuable monster parts, the Fractional Knapsack algorithm maximizes value while staying within weight limits.",
    example:
      "Imagine you're hunting monsters and can carry only 50kg of materials. Each monster part has a weight and value. You can take fractions of parts to maximize your total value.",
    tips: [
      "Calculate value-to-weight ratio for each monster part",
      "Sort parts by value-to-weight ratio in descending order",
      "Take as much as possible of the most valuable parts first",
      "Consider taking fractions of parts when you can't take the whole thing",
      "Keep track of remaining capacity and total value",
    ],
  },
  Graph: {
    title: "Monster Territory Network",
    description:
      "Like mapping the connections between different monster territories, Graph data structure represents relationships between entities.",
    example:
      "Imagine creating a map showing how different monster territories are connected - which territories are adjacent, which paths connect them, and how monsters can move between them.",
    tips: [
      "Use adjacency list/matrix - like creating a detailed map of territory connections",
      "Consider directed/undirected - similar to one-way or two-way paths between territories",
      "Handle weighted edges - like accounting for the difficulty of traveling between territories",
    ],
  },
  "Matrix Spiral Traversal": {
    title: "Monster Territory Spiral Explorer",
    description:
      "Like a monster hunter exploring a territory in a spiral pattern, Matrix Spiral Traversal visits all elements of a matrix in a spiral order.",
    example:
      "Imagine you're exploring a monster territory in a spiral pattern, starting from the center and moving outward - Matrix Spiral Traversal helps you visit every location systematically.",
    tips: [
      "Use four boundaries (top, right, bottom, left)",
      "Update boundaries as you traverse",
      "Handle different matrix sizes",
      "Consider both clockwise and counterclockwise spirals",
      "Use it for systematic territory exploration",
    ],
  },
  "Matrix Traversal": {
    title: "Monster Territory Matrix Operations",
    description:
      "Like navigating through a grid of monster territories, Matrix Traversal algorithms help you efficiently visit and process each cell in a matrix.",
    example:
      "Imagine you have a grid representing monster territories, and you need to visit each territory in a specific order. Matrix Traversal helps you efficiently navigate through the grid.",
    tips: [
      "Use appropriate traversal patterns (row-wise, column-wise, spiral)",
      "Keep track of visited cells to avoid cycles",
      "Consider edge cases like empty matrices",
      "Optimize for the specific traversal pattern required",
      "Use efficient data structures for matrix representation",
    ],
  },
  "Prefix Sum": {
    title: "Monster Territory Sum Calculator",
    description:
      "Like a monster hunter calculating cumulative resources across territories, Prefix Sum efficiently calculates the sum of elements in any subarray.",
    example:
      "Imagine you need to quickly calculate the total resources in any range of territories - Prefix Sum helps you answer these range sum queries efficiently.",
    tips: [
      "Precompute prefix sums in O(n) time",
      "Answer range queries in O(1) time",
      "Handle both 1D and 2D prefix sums",
      "Consider using it for range sum problems",
      "Use it for efficient resource calculation",
    ],
  },
  "Rotate Matrix": {
    title: "Monster Hunter's Map Rotator",
    description:
      "Like a monster hunter rotating their territory map to view it from different angles, Rotate Matrix transforms a matrix by rotating it 90 degrees.",
    example:
      "Imagine you need to view your monster territory map from different perspectives - Rotate Matrix helps you transform the map while preserving all the relationships between locations.",
    tips: [
      "Transpose the matrix first",
      "Reverse rows for clockwise rotation",
      "Reverse columns for counterclockwise rotation",
      "Handle different matrix sizes",
      "Consider in-place rotation for efficiency",
    ],
  },
  "Bit Manipulation": {
    title: "Monster Territory Bit Master",
    description:
      "Like a monster hunter efficiently tracking multiple monster attributes with bits, Bit Manipulation uses bitwise operations to solve problems efficiently.",
    example:
      "Imagine you need to track which monsters have which attributes using minimal space - Bit Manipulation helps you represent and manipulate this information using bits.",
    tips: [
      "Use bitwise AND, OR, XOR operations",
      "Consider using bit masks for state representation",
      "Use left and right shifts for multiplication and division",
      "Handle negative numbers carefully",
      "Use it for efficient monster attribute tracking",
    ],
  },
  "Stack Sort": {
    title: "Monster Territory Stack Sort",
    description:
      "A sorting algorithm that uses a stack to sort elements. It's like organizing your inventory by putting items in a stack and then taking them out in order.",
    example:
      "Imagine you have a stack of monster materials and you want to sort them by their value or weight. Stack Sort helps you do this efficiently.",
    tips: [
      "Use a stack to keep track of elements",
      "Push elements onto the stack",
      "Pop elements from the stack in sorted order",
      "Handle edge cases like empty stack",
      "Use it for sorting items in a stack",
    ],
  },
  "Two Sum": {
    title: "Monster Territory Two Sum Finder",
    description:
      "Finding two numbers in an array that add up to a target value. Like finding two monsters whose levels add up to a specific number.",
    example:
      "Imagine you have a list of monster levels and you need to find two levels that add up to a specific value. Two Sum helps you find these two levels.",
    tips: [
      "Use a hash map to store seen values",
      "Iterate through the array",
      "Calculate the complement for each element",
      "Check if the complement exists in the hash map",
      "Use it for efficient pair finding",
    ],
  },
  "Two Sum Two Pointers": {
    title: "Monster Territory Two Sum Two Pointers",
    description:
      "A variation of Two Sum that uses two pointers to find pairs efficiently. Like using two scouts to find matching monsters from opposite ends of a list.",
    example:
      "Imagine you have a sorted list of monster levels and you need to find two levels that add up to a specific value. Two Sum Two Pointers helps you find these two levels.",
    tips: [
      "Use two pointers to traverse the list",
      "Start with one pointer at the beginning and one at the end",
      "Move pointers based on the sum of the elements",
      "Stop when the sum equals the target",
      "Use it for efficient pair finding",
    ],
  },
  "Two Sum Dict": {
    title: "Monster Territory Two Sum Dictionary",
    description:
      "Using a dictionary to store seen values for quick lookup in Two Sum. Like keeping a log of monster levels you've seen to find matches quickly.",
    example:
      "Imagine you have a list of monster levels and you need to find two levels that add up to a specific value. Two Sum Dictionary helps you find these two levels.",
    tips: [
      "Use a hash map to store seen values",
      "Iterate through the list",
      "Calculate the complement for each element",
      "Check if the complement exists in the hash map",
      "Use it for efficient pair finding",
    ],
  },
  "Trie Operations": {
    title: "Monster Territory Trie Operations",
    description:
      "Operations on a trie data structure for efficient string storage and retrieval. Like organizing your monster names in a way that makes it easy to find similar names.",
    example:
      "Imagine you have a list of monster names and you need to find all names that start with a specific prefix. Trie Operations helps you do this efficiently.",
    tips: [
      "Use a trie data structure",
      "Insert strings into the trie",
      "Search for strings in the trie",
      "Handle edge cases like empty strings",
      "Use it for efficient string storage and retrieval",
    ],
  },
  "Binary Search Tree": {
    title: "Monster Territory Binary Search Tree",
    description:
      "A tree data structure where each node has at most two children, with left child being smaller and right child being larger. Like organizing monsters by their levels in a tree structure.",
    example:
      "Imagine you have a list of monster levels and you want to organize them in a tree structure. Binary Search Tree helps you do this efficiently.",
    tips: [
      "Use a binary tree structure",
      "Insert elements into the tree",
      "Search for elements in the tree",
      "Handle edge cases like empty tree",
      "Use it for efficient searching and sorting",
    ],
  },
  "Graph Bridges": {
    title: "Monster Territory Graph Bridges",
    description:
      "Finding critical edges in a graph whose removal increases the number of connected components. Like identifying key monster relationships that, if broken, would split the monster community.",
    example:
      "Imagine you have a graph representing monster territories and you need to find the bridges in the graph. These are the edges whose removal would increase the number of connected components.",
    tips: [
      "Use depth-first search to find bridges",
      "Mark edges as visited during DFS",
      "Check for connectivity after removing an edge",
      "Use it for understanding the structure of monster territories",
      "Handle edge cases like multiple components",
    ],
  },
  "Graph Kruskal": {
    title: "Monster Territory Greedy Kruskal",
    description:
      "A greedy algorithm for finding minimum spanning trees. Like connecting monster habitats with the minimum total distance.",
    example:
      "Imagine you have a graph representing monster territories and you need to find the minimum spanning tree of the graph. Greedy Kruskal helps you do this efficiently.",
    tips: [
      "Use a greedy approach to find the minimum spanning tree",
      "Sort edges by weight",
      "Add edges to the tree until all nodes are connected",
      "Use it for finding the minimum spanning tree in a graph",
      "Handle edge cases like disconnected graph",
    ],
  },
  String: {
    title: "Monster Territory String Operations",
    description:
      "A collection of algorithms for working with strings, including pattern matching, string manipulation, and text processing.",
    example:
      "Imagine you have a string representing a monster's name or territory description. String algorithms help you efficiently perform operations like searching, matching, and transforming these strings.",
    tips: [
      "Understand string properties and operations",
      "Use appropriate algorithms based on the task",
      "Consider edge cases like empty strings",
      "Optimize for the specific string operations required",
      "Use efficient data structures for string representation",
    ],
  },
  "Matrix Spiral Recursive": {
    title: "Monster Territory Spiral Recursive Explorer",
    description:
      "Like a monster hunter exploring a territory in a spiral pattern using recursive calls, Matrix Spiral Recursive visits all elements of a matrix in a spiral order using recursion.",
    example:
      "Imagine you're exploring a monster territory in a spiral pattern, starting from the center and moving outward - Matrix Spiral Recursive helps you visit every location systematically using recursive calls.",
    tips: [
      "Define base cases for recursion",
      "Handle different matrix sizes",
      "Consider both clockwise and counterclockwise spirals",
      "Use recursion to explore each layer",
      "Use it for systematic territory exploration",
    ],
  },
  "Matrix Traversal Recursive": {
    title: "Monster Territory Recursive Explorer",
    description:
      "Like a monster hunter exploring a territory using recursive calls, Matrix Traversal Recursive visits all elements of a matrix using recursion.",
    example:
      "Imagine you're exploring a monster territory using recursive calls - Matrix Traversal Recursive helps you visit every location systematically.",
    tips: [
      "Define base cases for recursion",
      "Handle different matrix sizes",
      "Consider different traversal patterns",
      "Use recursion to explore each cell",
      "Use it for systematic territory exploration",
    ],
  },
  "Dynamic Programming Fibonacci": {
    title: "Monster Territory Growth Calculator",
    description:
      "Like tracking the exponential growth of monster populations in a territory, the Fibonacci sequence represents a pattern of growth where each number is the sum of the two preceding ones.",
    example:
      "Imagine a monster territory where each generation's population is the sum of the previous two generations. Starting with 0 and 1 monsters, the population grows: 0, 1, 1, 2, 3, 5, 8, 13...",
    tips: [
      "Understand the base cases (0 and 1)",
      "Use dynamic programming to store and reuse previously calculated values",
      "Can be implemented recursively or iteratively",
      "Iterative approach is more efficient for larger numbers",
      "Watch out for integer overflow with large Fibonacci numbers",
    ],
  },
  "Dynamic Programming Iterative": {
    title: "Monster Territory Iterative Solver",
    description:
      "Like a monster hunter solving problems iteratively, Dynamic Programming Iterative solves problems using an iterative approach with dynamic programming.",
    example:
      "Imagine you need to solve a problem by breaking it down into smaller subproblems and solving them iteratively - Dynamic Programming Iterative helps you do this efficiently.",
    tips: [
      "Use an iterative approach to solve subproblems",
      "Store intermediate results in a table",
      "Consider both top-down and bottom-up approaches",
      "Use it for efficient problem solving",
      "Consider using it for optimization problems",
    ],
  },
  "Dynamic Programming Coin Change": {
    title: "Monster Territory Coin Changer",
    description:
      "Like a monster hunter making change for monster currency, Dynamic Programming Coin Change finds the minimum number of coins needed to make change.",
    example:
      "Imagine you need to make change for a monster currency using the minimum number of coins - Dynamic Programming Coin Change helps you do this efficiently.",
    tips: [
      "Use dynamic programming to store intermediate results",
      "Consider both top-down and bottom-up approaches",
      "Handle different coin denominations",
      "Use it for efficient coin change problems",
      "Consider using it for resource allocation problems",
    ],
  },
  "Dynamic Programming": {
    title: "Monster Territory Dynamic Solver",
    description:
      "Like a monster hunter solving problems by breaking them down into smaller subproblems, Dynamic Programming solves problems by storing and reusing solutions to subproblems.",
    example:
      "Imagine you need to solve a complex problem by breaking it down into smaller subproblems - Dynamic Programming helps you do this efficiently.",
    tips: [
      "Break down problems into smaller subproblems",
      "Store solutions to subproblems",
      "Reuse solutions to avoid redundant calculations",
      "Use it for efficient problem solving",
      "Consider using it for optimization problems",
    ],
  },
  "Tree DP": {
    title: "Monster Territory Tree Dynamic Solver",
    description:
      "Like a monster hunter solving problems on a tree structure using dynamic programming, Tree DP solves problems on trees by storing and reusing solutions to subproblems.",
    example:
      "Imagine you need to solve a problem on a tree structure by breaking it down into smaller subproblems - Tree DP helps you do this efficiently.",
    tips: [
      "Use dynamic programming on tree structures",
      "Store solutions to subproblems",
      "Reuse solutions to avoid redundant calculations",
      "Use it for efficient tree problem solving",
      "Consider using it for tree optimization problems",
    ],
  },
  "Greedy Activity Selection": {
    title: "Monster Territory Activity Selector",
    description:
      "Like a monster hunter selecting the maximum number of non-overlapping activities, Greedy Activity Selection finds the maximum size set of mutually compatible activities.",
    example:
      "Imagine you need to select the maximum number of monster hunts that don't overlap in time - Greedy Activity Selection helps you find the optimal schedule.",
    tips: [
      "Sort activities by finish time",
      "Select the first activity and then the next compatible one",
      "Use greedy approach for optimal solution",
      "Handle overlapping activities carefully",
      "Use it for optimal monster hunting scheduling",
    ],
  },
  "Greedy Huffman Coding": {
    title: "Monster Territory Code Compressor",
    description:
      "Like a monster hunter creating an efficient code for different monster types, Greedy Huffman Coding creates an optimal prefix code for compressing monster-related data.",
    example:
      "Imagine you need to create a compact code for different monster types based on their frequency - Greedy Huffman helps you create the most efficient code where common monsters have shorter codes.",
    tips: [
      "Build a frequency table for monster types",
      "Create a priority queue of nodes",
      "Combine the two least frequent nodes",
      "Build the tree from bottom up",
      "Assign codes based on the tree structure",
    ],
  },
  "Greedy Dijkstra": {
    title: "Monster Territory Pathfinder",
    description:
      "Like a monster hunter finding the shortest path through a territory, Greedy Dijkstra finds the shortest path from a starting point to all other points.",
    example:
      "Imagine you need to find the shortest path from your base to any location in a monster territory - Greedy Dijkstra helps you find the optimal path.",
    tips: [
      "Use a priority queue to track the shortest path",
      "Update distances when you find better paths",
      "Consider using it for finding shortest paths",
      "Handle edge cases like negative weights",
      "Use it for efficient path finding",
    ],
  },
  "Graph Bellman Ford": {
    title: "Monster Territory Negative Pathfinder",
    description:
      "Like a monster hunter finding the shortest path through a territory with negative weights, Graph Bellman Ford finds the shortest path from a starting point to all other points.",
    example:
      "Imagine you need to find the shortest path from your base to any location in a monster territory with negative weights - Graph Bellman Ford helps you find the optimal path.",
    tips: [
      "Use Bellman Ford for negative weights",
      "Update distances when you find better paths",
      "Consider using it for finding shortest paths",
      "Handle edge cases like negative cycles",
      "Use it for efficient path finding",
    ],
  },
  "Graph Floyd Warshall": {
    title: "Monster Territory All-Pairs Pathfinder",
    description:
      "Like a monster hunter finding the shortest paths between all pairs of territories, Graph Floyd Warshall finds the shortest paths between all pairs of vertices in a graph.",
    example:
      "Imagine you need to know the shortest path between every pair of monster territories in your map - Graph Floyd Warshall helps you create a complete distance matrix for all possible routes.",
    tips: [
      "Initialize the distance matrix with direct edges",
      "Consider each node as an intermediate point",
      "Update distances when you find better paths through intermediates",
      "Handle negative weights carefully",
      "Use it when you need all-pairs shortest paths",
    ],
  },
  "Graph Articulation Points": {
    title: "Monster Territory Critical Point Finder",
    description:
      "Like a monster hunter identifying critical territories that connect different regions, Graph Articulation Points finds nodes whose removal would disconnect the graph.",
    example:
      "Imagine identifying which territories are crucial for monster migration - if these territories are blocked, different groups of monsters would be isolated from each other.",
    tips: [
      "Use DFS to track discovery times",
      "Keep track of the lowest reachable ancestor",
      "A node is an articulation point if it has a child with no back edge",
      "The root is special - it's an articulation point if it has more than one child",
      "Use it to identify critical points in monster migration routes",
    ],
  },
  "DFS Linked List": {
    title: "Monster Territory Linked List Explorer",
    description:
      "Like a monster hunter exploring a linked list of territories using depth-first search, DFS Linked List visits all nodes in a linked list using DFS.",
    example:
      "Imagine you need to explore a linked list of monster territories using depth-first search - DFS Linked List helps you visit every territory systematically.",
    tips: [
      "Use recursion or a stack to track the path",
      "Mark nodes as visited to avoid cycles",
      "Backtrack when you reach a dead end",
      "Consider using DFS for topological sorting or cycle detection",
      "Be mindful of stack depth in recursive implementations",
    ],
  },
  "DFS Binary Tree": {
    title: "Monster Territory Binary Tree Explorer",
    description:
      "Like a monster hunter exploring a binary tree of territories using depth-first search, DFS Binary Tree visits all nodes in a binary tree using DFS.",
    example:
      "Imagine you need to explore a binary tree of monster territories using depth-first search - DFS Binary Tree helps you visit every territory systematically.",
    tips: [
      "Use recursion or a stack to track the path",
      "Mark nodes as visited to avoid cycles",
      "Backtrack when you reach a dead end",
      "Consider using DFS for topological sorting or cycle detection",
      "Be mindful of stack depth in recursive implementations",
    ],
  },
  "BFS Linked List": {
    title: "Monster Territory Linked List Breadth Explorer",
    description:
      "Like a monster hunter exploring a linked list of territories using breadth-first search, BFS Linked List visits all nodes in a linked list using BFS.",
    example:
      "Imagine you need to explore a linked list of monster territories using breadth-first search - BFS Linked List helps you visit every territory systematically.",
    tips: [
      "Use a queue to track nodes to visit",
      "Mark nodes as visited to avoid cycles",
      "Keep track of the current level/depth",
      "Process all nodes at the current level before moving deeper",
      "Consider using BFS for finding shortest paths in unweighted graphs",
    ],
  },
  "Strongly Connected Components": {
    title: "Monster Territory Strong Component Finder",
    description:
      "Like a monster hunter identifying strongly connected groups of territories, Strongly Connected Components finds groups of vertices where every vertex is reachable from every other vertex.",
    example:
      "Imagine identifying groups of monster territories where monsters can move between any two territories in the group, but not to territories outside the group.",
    tips: [
      "Use depth-first search to find SCCs",
      "Mark nodes as visited during DFS",
      "Check for connectivity after removing a node",
      "Use it for understanding the structure of monster territories",
      "Handle edge cases like multiple components",
    ],
  },
  "String Operations": {
    title: "Monster Territory String Operations",
    description:
      "Like a monster hunter manipulating strings of monster names and descriptions, String Operations provides efficient string manipulation and pattern matching.",
    example:
      "Imagine you need to manipulate strings of monster names and descriptions - String Operations helps you do this efficiently.",
    tips: [
      "Use appropriate string operations",
      "Consider using regular expressions",
      "Handle edge cases like empty strings",
      "Use it for efficient string manipulation",
      "Consider using it for pattern matching",
    ],
  },
  "Z Algorithm": {
    title: "Monster Territory Pattern Matcher",
    description:
      "Like a monster hunter finding patterns in monster names and descriptions, Z Algorithm efficiently finds all occurrences of a pattern in a text.",
    example:
      "Imagine you need to find all occurrences of a pattern in a monster's name or description - Z Algorithm helps you do this efficiently.",
    tips: [
      "Use Z Algorithm for pattern matching",
      "Consider using it for string matching",
      "Handle edge cases like empty strings",
      "Use it for efficient pattern matching",
      "Consider using it for text processing",
    ],
  },
  "Rabin Karp": {
    title: "Monster Territory Pattern Searcher",
    description:
      "Like a monster hunter searching for patterns in monster names and descriptions, Rabin Karp efficiently finds all occurrences of a pattern in a text using hashing.",
    example:
      "Imagine you need to find all occurrences of a pattern in a monster's name or description - Rabin Karp helps you do this efficiently using hashing.",
    tips: [
      "Use Rabin Karp for pattern matching",
      "Consider using it for string matching",
      "Handle edge cases like empty strings",
      "Use it for efficient pattern matching",
      "Consider using it for text processing",
    ],
  },
  "Divide And Conquer": {
    title: "Monster Territory Divider",
    description:
      "Like a monster hunter dividing a large territory into smaller, manageable parts, Divide and Conquer solves problems by breaking them into smaller subproblems and combining their solutions.",
    example:
      "Imagine you need to analyze a large monster territory - Divide and Conquer helps you break it into smaller areas, solve each area independently, and combine the results.",
    tips: [
      "Break the problem into smaller subproblems",
      "Solve each subproblem independently",
      "Combine solutions to solve the original problem",
      "Consider using it for problems that can be divided",
      "Use it for efficient territory analysis",
    ],
  },
  "Sieve of Sundaram": {
    title: "Monster Territory Prime Sieve",
    description:
      "Like a monster hunter filtering out non-prime monster territories, the Sieve of Sundaram efficiently finds all prime numbers up to a given limit.",
    example:
      "Imagine you have a list of monster territories numbered from 2 to n, and you want to identify which territories are prime (have special properties). The Sieve of Sundaram helps you efficiently mark non-prime territories.",
    tips: [
      "Start with the first prime number (2)",
      "Mark all multiples of each prime as non-prime",
      "Move to the next unmarked number",
      "Continue until you've processed all numbers up to n",
      "Use it for identifying special monster territories",
    ],
  },
  "Sieve of Atkin": {
    title: "Monster Territory Prime Sieve",
    description:
      "Like a monster hunter using an advanced sieve to find all prime monsters in a territory, the Sieve of Atkin efficiently finds all prime numbers up to a given limit.",
    example:
      "Imagine you need to find all prime monsters in a territory - the Sieve of Atkin helps you do this more efficiently than traditional sieving methods.",
    tips: [
      "Use quadratic forms - like using special patterns to identify prime monsters",
      "Mark non-primes - similar to marking monsters that are definitely not prime",
      "Consider wheel factorization - like using a more sophisticated approach to skip obvious non-primes",
      "Optimize memory usage - similar to efficiently tracking which monsters have been checked",
      "Use bit manipulation - like using compact representations to save space",
    ],
  },
  "Null Pattern": {
    title: "Monster Territory Null Handler",
    description:
      "Like a monster hunter knowing when to do nothing, the Null Pattern handles cases where no action is required.",
    example:
      "Imagine encountering a situation where taking any action would be worse than doing nothing - the Null Pattern helps you recognize and handle these cases gracefully.",
    tips: [
      "Handle null cases gracefully",
      "Consider when doing nothing is the optimal solution",
      "Document why no action is required",
    ],
  },
  "Heavy Light Decomposition": {
    title: "Monster Territory Route Optimizer",
    description:
      "Like a monster hunter organizing territories into efficient hunting routes, Heavy Light Decomposition breaks down a complex territory network into optimized chains for quick navigation.",
    example:
      "Imagine you need to quickly find the best route between any two monster territories in a vast network - Heavy Light Decomposition helps you organize the territories into efficient chains, making path queries much faster.",
    tips: [
      "Identify heavy paths - like finding the most frequently traveled routes between territories",
      "Build chains - similar to organizing territories into efficient hunting circuits",
      "Use segment trees - like maintaining quick access to territory information along each chain",
      "Query paths efficiently - similar to finding the optimal route between any two territories",
      "Consider territory sizes - like accounting for the importance of each territory in the network",
    ],
  },
  "Prefix Sums": {
    title: "Monster Territory Resource Tracker",
    description:
      "Like a monster hunter keeping track of cumulative resources across territories, Prefix Sums efficiently calculates the sum of elements in any subarray.",
    example:
      "Imagine you need to quickly calculate the total resources in any range of monster territories - Prefix Sums helps you answer these range sum queries efficiently by precomputing cumulative sums.",
    tips: [
      "Precompute prefix sums in O(n) time - like creating a running total of resources across territories",
      "Answer range queries in O(1) time - similar to instantly knowing the total resources between any two territories",
      "Initialize with an extra element at index 0 - like starting with an empty territory",
      "Use prefix differences for range sums - similar to calculating the resources in a specific territory range",
      "Consider using it for efficient resource tracking across monster territories",
    ],
  },
  Memoization: {
    title: "Monster Territory Memoization",
    description:
      "Like a monster hunter using a memoization table to store and reuse results of expensive function calls, Memoization efficiently solves problems by storing and reusing results of previous computations.",
    example:
      "Imagine you need to solve a problem that has overlapping subproblems - Memoization helps you store and reuse the results of these subproblems, avoiding redundant calculations.",
    tips: [
      "Identify overlapping subproblems",
      "Store results of expensive computations",
      "Reuse stored results instead of recalculating",
      "Use it for efficient problem solving",
      "Consider using it for optimization problems",
    ],
  },
  "Matrix Operations": {
    title: "Monster Territory Matrix Navigator",
    description:
      "Like a master monster hunter navigating through complex territories, Matrix Operations provide a comprehensive toolkit for territory mapping and analysis. Each matrix cell represents a different territory or region, and the various traversal methods and operations help you efficiently explore and manipulate these territories. Whether you're tracking monster movements, mapping resource distributions, or analyzing territory patterns, these operations give you the flexibility to process data in multiple ways.",
    example:
      "Imagine you're mapping out a vast monster territory:\n" +
      "1. Row-major traversal: Like systematically scanning each row of the territory from left to right, checking each territory's resources and monster populations\n" +
      "2. Column-major traversal: Like analyzing vertical migration patterns, checking how monsters move between territories at different elevations\n" +
      "3. Diagonal traversal: Like following monster tracks that cut across the territory diagonally, useful for tracking rare monster migration patterns\n" +
      "4. Spiral traversal: Like circling the territory from the outer edges inward, perfect for establishing territory boundaries and defense perimeters\n" +
      "5. Matrix rotation: Like rotating your territory map to view it from different angles, helping identify patterns that might be hidden in the default orientation\n" +
      "6. Matrix multiplication: Like combining different territory maps to create a comprehensive view of monster interactions and resource distributions\n" +
      "7. Matrix transpose: Like reorganizing your territory data to view relationships between territories in a different way, revealing hidden connections",
    tips: [
      "Use row-major traversal for systematic territory scanning and resource inventory",
      "Employ column-major traversal when analyzing vertical migration patterns and elevation-based monster distributions",
      "Diagonal traversal helps track cross-territory monster movements and identify rare migration paths",
      "Spiral traversal is essential for establishing territory boundaries and defense perimeters",
      "Matrix rotation helps view territory from different perspectives, revealing patterns that might be hidden in the default orientation",
      "Matrix multiplication combines multiple territory data sets to analyze monster interactions and resource distributions",
      "Transpose operations help reorganize territory data efficiently, revealing new insights about territory relationships",
      "Consider time and space complexity when processing large territories - O(n²) for most operations",
      "Use matrix initialization to create new territory maps with default values for resources or monster populations",
      "Combine different traversal methods to create comprehensive territory analysis strategies",
      "Remember that each operation has specific use cases - choose the right one for your hunting strategy",
      "Document your territory maps and operations for future reference and strategy planning",
    ],
  },
};

// Add debug logging
export function getMonsterHunterExplanation(patternKey: PatternKey) {
  const explanation = monsterHunterExplanations[patternKey];
  if (!explanation) {
    console.warn(
      `No Monster Hunter explanation found for pattern: ${patternKey}`
    );
    console.log("Available patterns:", Object.keys(monsterHunterExplanations));
  }
  return explanation;
}

// Add function to check for missing patterns
export function checkMissingPatterns() {
  const missingPatterns = PATTERN_KEYS.filter(
    (pattern: string) => !monsterHunterExplanations[pattern as PatternKey]
  );

  if (missingPatterns.length > 0) {
    console.warn(
      "Missing Monster Hunter explanations for patterns:",
      missingPatterns
    );
    return missingPatterns;
  }
  return [];
}

// Remove the immediate execution
// checkMissingPatterns();
