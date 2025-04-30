import { PatternKey } from "./types";

export const monsterHunterTestData = new Map<PatternKey, string>([
  [
    "Quick Sort",
    `# Monster Hunter Quick Sort Challenge
# You are organizing your inventory of monster materials!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 4, 2]
Expected Output: [2, 3, 4, 5, 8]

# Monster Hunter Tip:
# Like quickly sorting through your loot for the best materials!`,
  ],
  [
    "Merge Sort",
    `# Monster Hunter Merge Sort Challenge
# You are organizing your inventory of monster materials!

# Test Case 1: Basic Sort
Input: [7, 2, 6, 3, 9]
Expected Output: [2, 3, 6, 7, 9]

# Monster Hunter Tip:
# Like merging piles of materials into a perfectly sorted stash!`,
  ],
  [
    "Stack Sort",
    `# Monster Hunter Stack Sort Challenge
# You are organizing your inventory of monster materials using stacks!

# Test Case 1: Stack Sort
Input: [4, 1, 3, 2]
Expected Output: [1, 2, 3, 4]

# Monster Hunter Tip:
# Like stacking materials in order for quick access!`,
  ],
  [
    "Heap Sort",
    `# Monster Hunter Heap Sort Challenge
# You are organizing your inventory of monster materials using a heap!

# Test Case 1: Heap Sort
Input: [9, 5, 2, 7, 1]
Expected Output: [1, 2, 5, 7, 9]

# Monster Hunter Tip:
# Like using a heap to always grab the rarest material first!`,
  ],
  [
    "Bubble Sort",
    `# Monster Hunter Bubble Sort Challenge
# You are organizing your inventory of monster materials!

# Test Case 1: Bubble Sort
Input: [6, 4, 2, 8, 5]
Expected Output: [2, 4, 5, 6, 8]

# Monster Hunter Tip:
# Like bubbling up the best materials to the top!`,
  ],
  [
    "Selection Sort",
    `# Monster Hunter Selection Sort Challenge
# You are organizing your inventory of monster materials!

# Test Case 1: Selection Sort
Input: [3, 7, 1, 9, 4]
Expected Output: [1, 3, 4, 7, 9]

# Monster Hunter Tip:
# Like selecting the best material each time for your collection!`,
  ],
  [
    "Insertion Sort",
    `# Monster Hunter Insertion Sort Challenge
# You are organizing your inventory of monster materials!

# Test Case 1: Insertion Sort
Input: [8, 2, 5, 1, 7]
Expected Output: [1, 2, 5, 7, 8]

# Monster Hunter Tip:
# Like inserting new materials into the right spot in your bag!`,
  ],
  [
    "Binary Search",
    `# Monster Hunter Binary Search Challenge
# You are searching for a specific material in your sorted inventory!

# Test Case 1: Material Search
Input: [1, 3, 5, 7, 9], Target: 5
Expected Output: 2

# Monster Hunter Tip:
# Like quickly finding a rare material in your sorted stash!`,
  ],
  [
    "Binary Search on Answer",
    `# Monster Hunter Binary Search on Answer Challenge
# You are searching for the minimum number of hunts needed to collect enough materials!

# Test Case 1: Minimum Hunts
Input: [2, 3, 5, 7], Target: 10
Expected Output: 2

# Monster Hunter Tip:
# Like narrowing down the minimum effort needed for your goal!`,
  ],
  [
    "Linear Search",
    `# Monster Hunter Linear Search Challenge
# You are searching for a specific material in your unsorted inventory!

# Test Case 1: Material Search
Input: [7, 2, 9, 4, 5], Target: 4
Expected Output: 3

# Monster Hunter Tip:
# Like checking each item in your bag one by one!`,
  ],
  [
    "Two Sum",
    `# Monster Hunter Two Sum Challenge
# You are finding material pairs for dual-material crafting!

# Test Case 1: Material Combination
Input: [2, 5, 8, 3] (material values)
Target: 7 (required sum)
Expected Output: [0, 3] (indices of materials summing to 7)

# Monster Hunter Tip:
# Like finding two materials that combine to meet a crafting requirement!`,
  ],
  [
    "Two Sum Two Pointers",
    `# Monster Hunter Two Sum Two Pointers Challenge
# You are finding pairs of monsters that together match a specific criteria!

# Test Case 1: Monster Strength Pairs
Input: [2, 7, 11, 15] (monster strength values)
Target: 9 (combined strength needed)
Expected Output: [0, 1] (indices of monsters with strength 2 and 7)

# Test Case 2: Material Value Pairs
Input: [3, 2, 4, 6, 8] (material values)
Target: 10 (combined value needed)
Expected Output: [1, 3] (indices of materials with values 2 and 8)

# Monster Hunter Tip:
# Like coordinating a pincer attack on a monster from two directions!`,
  ],
  [
    "Dynamic Programming",
    `# Monster Hunter Dynamic Programming Challenge
# You are optimizing your material farming route!

# Test Case 1: Material Collection Route
Input: [
  ["Rathalos Scale", 2],
  ["Rathalos Wing", 3],
  ["Rathalos Plate", 5],
  ["Rathalos Ruby", 8]
]
Expected Output: 18 (maximum value achievable)

# Monster Hunter Tip:
# Like planning the most efficient farming route for rare materials!`,
  ],
  [
    "Dynamic Programming Fibonacci",
    `# Monster Hunter DP Fibonacci Challenge
# You are calculating monster population growth!

# Test Case 1: Population Growth
Input: 5 (generations)
Expected Output: 5 (population after 5 generations)

# Monster Hunter Tip:
# Like predicting monster population growth patterns!`,
  ],
  [
    "Dynamic Programming Iterative",
    `# Monster Hunter DP Iterative Challenge
# You are optimizing material farming routes iteratively!

# Test Case 1: Route Optimization
Input: [2, 4, 1, 6, 3] (material values)
Expected Output: 10 (maximum value collectible path)

# Monster Hunter Tip:
# Like finding the best farming route step by step!`,
  ],
  [
    "Dynamic Programming Coin Change",
    `# Monster Hunter DP Coin Change Challenge
# You are finding minimum materials needed for crafting!

# Test Case 1: Material Combination
Input: Materials: [1, 3, 5], Target: 7
Expected Output: 3 (minimum materials needed)

# Monster Hunter Tip:
# Like finding the most efficient combination of materials!`,
  ],
  [
    "Greedy",
    `# Monster Hunter Greedy Challenge
# You are maximizing your material collection during a limited time hunt!

# Test Case 1: Time-Limited Hunt
Input: [
  ["Rathalos", 30, 5],  # [monster, time_needed, material_value]
  ["Diablos", 20, 3],
  ["Kirin", 15, 4],
  ["Nergigante", 40, 8]
]
Max Time: 60
Expected Output: ["Nergigante", "Kirin"]

# Monster Hunter Tip:
# Like choosing which monster to hunt based on time and reward!`,
  ],
  [
    "Greedy Activity Selection",
    `# Monster Hunter Greedy Activity Selection
# You are scheduling non-overlapping hunts!

# Test Case 1: Hunt Schedule
Input: [(2,5), (1,4), (6,8)] (start,end times)
Expected Output: [(1,4), (6,8)] (maximum non-overlapping hunts)

# Monster Hunter Tip:
# Like scheduling hunts to maximize efficiency!`,
  ],
  [
    "Greedy Fractional Knapsack",
    `# Monster Hunter Fractional Knapsack
# You are optimizing inventory space with divisible materials!

# Test Case 1: Inventory Optimization
Input: [(60,10), (100,20), (120,30)] (value,weight)
Capacity: 50
Expected Output: 240 (maximum value possible)

# Monster Hunter Tip:
# Like maximizing value in limited inventory space!`,
  ],
  [
    "Greedy Job Scheduling",
    `# Monster Hunter Job Scheduling
# You are scheduling hunts with deadlines!

# Test Case 1: Hunt Schedule
Input: [(2,100), (1,19), (2,27)] (deadline,reward)
Expected Output: 127 (maximum reward schedule)

# Monster Hunter Tip:
# Like scheduling hunts to maximize rewards before deadlines!`,
  ],
  [
    "Greedy Huffman Coding",
    `# Monster Hunter Huffman Coding
# You are compressing monster data efficiently!

# Test Case 1: Data Compression
Input: "RATHALOSWING" (frequency analysis)
Expected Output: Optimal binary encoding

# Monster Hunter Tip:
# Like creating efficient codes for monster data storage!`,
  ],
  [
    "Greedy Dijkstra",
    `# Monster Hunter Dijkstra
# You are finding shortest paths between hunting grounds!

# Test Case 1: Path Finding
Input: Graph of areas with distances
Start: "Base Camp"
Expected Output: Shortest paths to all areas

# Monster Hunter Tip:
# Like finding the quickest routes between hunting grounds!`,
  ],
  [
    "Backtracking",
    `# Monster Hunter Backtracking Challenge
# You are finding all possible combinations of monster materials!

# Test Case 1: Material Combinations
Input: ["Rathalos Scale", "Rathalos Wing", "Rathalos Plate"]
Expected Output: All possible combinations

# Monster Hunter Tip:
# Like trying different material combinations for crafting!`,
  ],
  [
    "Sliding Window",
    `# Monster Hunter Sliding Window Challenge
# You are tracking monster behavior patterns!

# Test Case 1: Monster Movement Pattern
Input: [1, 2, 3, 4, 5, 6, 7, 8]
Window Size: 3
Expected Output: [6, 7, 8]

# Monster Hunter Tip:
# Like observing a monster's behavior through a time window!`,
  ],
  [
    "Bit Manipulation",
    `# Monster Hunter Bit Manipulation Challenge
# You are encoding monster status effects!

# Test Case 1: Status Effects
Input: [Poison, Paralysis, Sleep, Stun]
Encoded: [1, 1, 0, 1]
Expected Output: 13 (binary: 1101)

# Monster Hunter Tip:
# Like efficiently storing multiple status effects in a single value!`,
  ],
  [
    "Topological Sort",
    `# Monster Hunter Topological Sort Challenge
# You are planning upgrade paths for your equipment!

# Test Case 1: Weapon Upgrade Path
Input: [
  ["Iron Sword", "Steel Sword"],
  ["Steel Sword", "Rathalos Sword"],
  ["Iron Sword", "Bone Sword"]
]
Expected Output: ["Iron Sword", "Steel Sword", "Rathalos Sword", "Bone Sword"]

# Monster Hunter Tip:
# Like determining the order of weapon upgrades!`,
  ],
  [
    "DFS",
    `# Monster Hunter DFS Challenge
# You are exploring interconnected monster territories!

# Test Case 1: Territory Exploration
Input: Map of connected territories
Start: "Ancient Forest"
Expected Output: All reachable territories in depth-first order

# Monster Hunter Tip:
# Like thoroughly exploring each branch of a territory before moving on!`,
  ],
  [
    "DFS Linked List",
    `# Monster Hunter DFS Linked List Challenge
# You are exploring a chain of connected areas!

# Test Case 1: Area Chain Exploration
Input: Linked areas [Base → Forest → Desert → Volcano]
Expected Output: All areas in depth-first order

# Monster Hunter Tip:
# Like following a chain of connected hunting grounds!`,
  ],
  [
    "DFS Binary Tree",
    `# Monster Hunter DFS Binary Tree Challenge
# You are exploring a branching path of monster territories!

# Test Case 1: Territory Tree Exploration
Input: Binary tree of territories
Expected Output: All territories in depth-first order

# Monster Hunter Tip:
# Like exploring each branch of territory completely before backtracking!`,
  ],
  [
    "BFS",
    `# Monster Hunter BFS Challenge
# You are mapping monster territory levels!

# Test Case 1: Territory Level Mapping
Input: Map of connected territories
Start: "Base Camp"
Expected Output: Territories grouped by distance from base

# Monster Hunter Tip:
# Like exploring all nearby areas before moving to distant ones!`,
  ],
  [
    "BFS Linked List",
    `# Monster Hunter BFS Linked List Challenge
# You are exploring area connections level by level!

# Test Case 1: Level Order Exploration
Input: Linked areas with branches
Expected Output: Areas grouped by distance from start

# Monster Hunter Tip:
# Like exploring all nearby areas before moving to connected ones!`,
  ],
  [
    "Stack Implementation",
    `# Monster Hunter Stack Implementation
# You are implementing a material stack system!

# Test Case 1: Material Stack Operations
Operations: [
  Push("Rathalos Scale"),
  Push("Rathalos Wing"),
  Pop(),
  Push("Rathalos Ruby")
]
Expected Output: ["Rathalos Scale", "Rathalos Ruby"]

# Monster Hunter Tip:
# Like managing a stack of materials where you can only access the top!`,
  ],
  [
    "Queue Implementation",
    `# Monster Hunter Queue Implementation
# You are managing a quest waiting list!

# Test Case 1: Quest Queue Operations
Operations: [
  Enqueue("Rathalos Hunt"),
  Enqueue("Diablos Hunt"),
  Dequeue(),
  Enqueue("Kirin Hunt")
]
Expected Output: ["Diablos Hunt", "Kirin Hunt"]

# Monster Hunter Tip:
# Like managing a queue of quests in first-come-first-serve order!`,
  ],
  [
    "Linked List",
    `# Monster Hunter Linked List Challenge
# You are creating a chain of monster materials!

# Test Case 1: Material Chain Operations
Operations: [
  Add("Rathalos Scale"),
  Add("Rathalos Wing"),
  Remove("Rathalos Scale"),
  Add("Rathalos Ruby")
]
Expected Output: ["Rathalos Wing", "Rathalos Ruby"]

# Monster Hunter Tip:
# Like linking materials in a chain where each points to the next!`,
  ],
  [
    "Circular Linked List",
    `# Monster Hunter Circular Linked List Challenge
# You are creating a rotating monster spawn pattern!

# Test Case 1: Spawn Pattern
Input: ["Rathalos", "Rathian", "Diablos", "Kirin"]
Operations: Rotate 2 times
Expected Output: ["Diablos", "Kirin", "Rathalos", "Rathian"]

# Monster Hunter Tip:
# Like creating a repeating cycle of monster spawns!`,
  ],
  [
    "Hash Table",
    `# Monster Hunter Hash Table Challenge
# You are creating a quick lookup system for materials!

# Test Case 1: Material Lookup
Operations: [
  Insert("RathScale", "Rathalos Scale"),
  Insert("RathWing", "Rathalos Wing"),
  Get("RathScale")
]
Expected Output: "Rathalos Scale"

# Monster Hunter Tip:
# Like organizing materials for quick retrieval by code name!`,
  ],
  [
    "Graph",
    `# Monster Hunter Graph Challenge
# You are mapping monster territory connections!

# Test Case 1: Territory Connections
Input: [
  ["Forest", "Desert"],
  ["Desert", "Volcano"],
  ["Forest", "Swamp"]
]
Expected Output: Connected territory map

# Monster Hunter Tip:
# Like creating a map showing how territories connect!`,
  ],
  [
    "Tree",
    `# Monster Hunter Tree Challenge
# You are organizing monster species in a hierarchy!

# Test Case 1: Monster Family Tree
Input: [
  ["Wyvern", "Flying Wyvern"],
  ["Flying Wyvern", "Rathalos"],
  ["Flying Wyvern", "Rathian"]
]
Expected Output: Hierarchical monster classification

# Monster Hunter Tip:
# Like organizing monsters by their species and subspecies!`,
  ],
  [
    "Binary Search Tree",
    `# Monster Hunter Binary Search Tree Challenge
# You are organizing materials by rarity in a tree!

# Test Case 1: Material Organization
Input: [7, 3, 9, 1, 5] (material rarities)
Operations: Insert in order
Expected Output: Balanced BST of materials

# Monster Hunter Tip:
# Like organizing materials in a way that makes searching efficient!`,
  ],
  [
    "Heap Implementation",
    `# Monster Hunter Heap Implementation
# You are creating a priority system for rare materials!

# Test Case 1: Material Priority Queue
Operations: [
  Insert("Rathalos Ruby", 10),
  Insert("Rathalos Scale", 1),
  ExtractMax()
]
Expected Output: "Rathalos Ruby"

# Monster Hunter Tip:
# Like maintaining a heap of materials sorted by rarity!`,
  ],
  [
    "Trie Operations",
    `# Monster Hunter Trie Challenge
# You are creating a prefix tree for monster names!

# Test Case 1: Monster Name Lookup
Input: ["Rathalos", "Rathian", "Rajang", "Diablos"]
Search Prefix: "Ra"
Expected Output: ["Rathalos", "Rathian", "Rajang"]

# Monster Hunter Tip:
# Like organizing monster names for quick prefix searching!`,
  ],
  [
    "Monotonic Stack",
    `# Monster Hunter Monotonic Stack Challenge
# You are tracking increasing monster threat levels!

# Like organizing monster names for quick prefix searching!`,
  ],
  [
    "Monotonic Stack",
    `# Monster Hunter Monotonic Stack Challenge
# You are tracking increasing monster threat levels!

# Test Case 1: Threat Level Stack
Input: [3, 1, 4, 2, 5] (threat levels)
Expected Output: [1, 2, 5] (monotonically increasing)

# Monster Hunter Tip:
# Like maintaining a stack of monsters with increasing threat!`,
  ],
  // ... rest of the entries remain unchanged ...
]);
