import { PatternKey } from "@/components/algorithm-trainer/types";

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
  "Dijkstra's Algorithm": {
    title: "Monster Territory Pathfinder",
    description:
      "Find the shortest paths between hunting grounds, considering terrain difficulty and monster presence.",
    example:
      "Given a map of hunting grounds with weighted paths representing difficulty, find the safest route to reach a specific monster.",
    tips: [
      "Use priority queue for efficient path selection",
      "Handle unreachable areas gracefully",
      "Consider using it for weighted graphs",
      "Optimize for large hunting grounds",
      "Use it for finding optimal paths",
    ],
  },
  "Divide and Conquer": {
    title: "Divide and Conquer",
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
  "Binary Search": {
    title: "Monster Tracking System",
    description:
      "Efficiently locate monsters in a sorted hunting ground by repeatedly dividing the search area in half.",
    example:
      "When tracking a monster's power level in a sorted list of territories, use binary search to quickly find its location.",
    tips: [
      "Ensure the search space is sorted",
      "Handle edge cases carefully",
      "Consider using it for sorted data",
      "Track boundaries accurately",
      "Use it for efficient searching",
    ],
  },
  DFS: {
    title: "Deep Monster Cave Explorer",
    description:
      "Explore deep monster caves and tunnels by following each path to its end before backtracking.",
    example:
      "When exploring a complex cave system to find a monster's nest, use DFS to thoroughly explore each branching path.",
    tips: [
      "Use a stack for tracking paths",
      "Remember to backtrack properly",
      "Handle cycles in the cave system",
      "Consider path depth limits",
      "Mark visited areas",
    ],
  },
  BFS: {
    title: "Monster Territory Scanner",
    description:
      "Systematically explore monster territories level by level, ensuring all nearby areas are checked before moving deeper.",
    example:
      "When searching for monster tracks in an area, use BFS to scan outward in expanding circles from your starting point.",
    tips: [
      "Use a queue for level-order traversal",
      "Track visited locations",
      "Process each level completely",
      "Handle multiple starting points",
      "Consider using it for shortest paths",
    ],
  },
  "Dynamic Programming": {
    title: "Monster Hunt Strategy Optimizer",
    description:
      "Optimize hunting strategies by breaking down complex hunts into smaller subproblems and storing solutions for reuse.",
    example:
      "When planning the most efficient way to hunt multiple monsters with limited resources, use dynamic programming to calculate and store optimal strategies.",
    tips: [
      "Identify overlapping subproblems",
      "Store and reuse calculated results",
      "Build solutions bottom-up",
      "Consider space-time tradeoffs",
      "Look for optimal substructure",
    ],
  },
  Greedy: {
    title: "Quick Monster Decision Maker",
    description:
      "Make quick, locally optimal decisions during hunts without considering the entire problem space.",
    example:
      "When deciding which monster to hunt first in a time-limited quest, choose the closest one that gives the most rewards.",
    tips: [
      "Make locally optimal choices",
      "Consider immediate benefits",
      "Handle edge cases carefully",
      "Verify greedy choice property",
      "Use for optimization problems",
    ],
  },
  Backtracking: {
    title: "Monster Hunt Path Explorer",
    description:
      "Systematically explore all possible hunting paths by trying each option and backtracking when a path proves unsuccessful.",
    example:
      "When finding all possible ways to defeat a group of monsters with limited resources, try different combinations and backtrack when a strategy fails.",
    tips: [
      "Define clear constraints",
      "Implement efficient pruning",
      "Track current state properly",
      "Handle base cases correctly",
      "Consider solution space size",
    ],
  },
  "Hash Table": {
    title: "Monster Encyclopedia Index",
    description:
      "Quickly access monster information using a hash-based indexing system for efficient lookups.",
    example:
      "Create a fast lookup system for monster weaknesses and resistances using their unique identifiers as keys.",
    tips: [
      "Choose good hash functions",
      "Handle collisions properly",
      "Consider load factor",
      "Implement efficient resizing",
      "Use for fast lookups",
    ],
  },
  "Binary Search Tree": {
    title: "Monster Power Hierarchy",
    description:
      "Organize monsters in a hierarchical tree structure based on their power levels for efficient searching and ordering.",
    example:
      "Create a binary search tree of monsters based on their threat levels to quickly find monsters of similar strength.",
    tips: [
      "Keep the tree balanced",
      "Handle duplicates properly",
      "Implement efficient traversal",
      "Consider self-balancing variants",
      "Use for ordered data",
    ],
  },
  "Heap Implementation": {
    title: "Monster Priority Queue",
    description:
      "Maintain a priority-based queue of monsters based on their threat levels or importance.",
    example:
      "Use a heap to always track the most dangerous monster in an area, updating as new monsters appear or leave.",
    tips: [
      "Maintain heap property",
      "Implement efficient operations",
      "Handle priority updates",
      "Consider heap variants",
      "Use for priority queues",
    ],
  },
  "Knuth-Morris-Pratt": {
    title: "Monster Pattern Tracker",
    description:
      "Efficiently find specific monster behavior patterns in long sequences of monster movements or actions.",
    example:
      "Use KMP to quickly identify a specific attack pattern within a monster's recorded battle sequence.",
    tips: [
      "Build prefix table efficiently",
      "Handle pattern boundaries",
      "Preprocess the pattern",
      "Track partial matches",
      "Use for string matching",
    ],
  },
  "Two Pointers": {
    title: "Dual Monster Tracker",
    description:
      "Track two points of interest in a monster hunting sequence using two moving pointers.",
    example:
      "Find pairs of monsters whose combined threat level equals a specific value by moving two pointers through a sorted list.",
    tips: [
      "Initialize pointers correctly",
      "Move pointers efficiently",
      "Handle edge cases",
      "Consider sorted input",
      "Use for range problems",
    ],
  },
  "Sliding Window": {
    title: "Monster Activity Monitor",
    description:
      "Monitor monster activity in a fixed-size window that slides through a sequence of observations.",
    example:
      "Track the maximum number of monsters active in any consecutive time period by sliding a window through activity logs.",
    tips: [
      "Define window size clearly",
      "Update window efficiently",
      "Track window state",
      "Handle window boundaries",
      "Use for subsequence problems",
    ],
  },
  "Prefix Sums": {
    title: "Cumulative Monster Stats",
    description: "Calculate running totals of monster statistics to enable quick range queries.",
    example:
      "Precompute cumulative damage dealt by monsters to quickly find total damage in any time range.",
    tips: [
      "Build prefix sums efficiently",
      "Handle range queries",
      "Consider 2D variants",
      "Update values efficiently",
      "Use for range calculations",
    ],
  },
  "Quick Sort": {
    title: "Monster Ranking System",
    description:
      "Efficiently sort monsters based on various attributes using the divide-and-conquer approach.",
    example:
      "Sort monsters by their threat level using quicksort to organize them into difficulty tiers.",
    tips: [
      "Choose good pivot elements",
      "Handle partitioning efficiently",
      "Consider randomization",
      "Implement tail recursion",
      "Use for general sorting",
    ],
  },
  "Bellman-Ford": {
    title: "Monster Path Validator",
    description:
      "Find shortest paths in monster territories while detecting and handling negative cycles.",
    example:
      "Calculate optimal paths through areas with both beneficial and harmful effects, detecting areas that infinitely boost or drain resources.",
    tips: [
      "Handle negative weights",
      "Detect negative cycles",
      "Consider path constraints",
      "Track path predecessors",
      "Use for negative weights",
    ],
  },
  "Floyd-Warshall Algorithm": {
    title: "All-Pairs Monster Routes",
    description: "Calculate shortest paths between all pairs of locations in monster territories.",
    example:
      "Find the shortest paths between all hunting camps and monster nests, considering all possible intermediate stops.",
    tips: [
      "Initialize distances properly",
      "Update paths systematically",
      "Handle path reconstruction",
      "Consider memory usage",
      "Use for dense graphs",
    ],
  },
  "Union Find": {
    title: "Monster Territory Grouping",
    description: "Track and merge monster territories while maintaining efficient group lookups.",
    example:
      "Group monsters into territories and quickly determine if two monsters belong to the same territory.",
    tips: [
      "Use path compression",
      "Implement union by rank",
      "Track set sizes",
      "Optimize find operations",
      "Use for disjoint sets",
    ],
  },
  "Topological Sort": {
    title: "Monster Hunt Prerequisite Planner",
    description: "Organize monster hunts based on their prerequisites and dependencies.",
    example:
      "Plan a sequence of hunts where some monsters must be defeated before others can be challenged.",
    tips: [
      "Check for cycles",
      "Track in-degrees",
      "Handle multiple solutions",
      "Consider dependencies",
      "Use for DAGs",
    ],
  },
  "Strongly Connected Components": {
    title: "Monster Territory Analyzer",
    description:
      "Identify strongly connected groups of monster territories where each location is reachable from every other.",
    example:
      "Find groups of monster nests that form closed ecosystems where monsters can freely move between all locations.",
    tips: [
      "Use Kosaraju's Algorithm's algorithm",
      "Track visit order",
      "Handle edge cases",
      "Consider graph direction",
      "Use for directed graphs",
    ],
  },
};
