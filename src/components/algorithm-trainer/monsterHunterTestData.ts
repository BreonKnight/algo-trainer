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
# You are trying to find the minimum rarity level needed to craft a weapon!

# Test Case 1: Basic Search
Input: min_rarity = 1, max_rarity = 10, target_value = 7
Expected Output: 7

# Monster Hunter Tip:
# Like finding the minimum rarity level needed for a craft!`,
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
# You are tracking monster status effects!

# Test Case 1: Status Effects
Input: statuses = 0b0000
Expected Output: {
    "apply": function to apply status,
    "remove": function to remove status,
    "has": function to check status,
    "toggle": function to toggle status
}

# Monster Hunter Tip:
# Like efficiently tracking multiple status effects!`,
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
  [
    "State Compression DP",
    `# Monster Hunter State Compression DP Challenge
# You are optimizing your equipment loadout!

# Test Case 1: Equipment Optimization
Input: slots = 3, items = [
    {"name": "Rathalos Helm", "defense": 50, "weight": 2},
    {"name": "Nergigante Mail", "defense": 60, "weight": 3},
    {"name": "Teostra Greaves", "defense": 55, "weight": 2}
]
Expected Output: 165

# Monster Hunter Tip:
# Like finding the best equipment combination!`,
  ],
  [
    "Digit DP",
    `# Monster Hunter Digit DP Challenge
# You are counting valid material combinations!

# Test Case 1: Material Combinations
Input: max_rarity = 5, target_sum = 7
Expected Output: 15

# Monster Hunter Tip:
# Like counting all possible material combinations!`,
  ],
  [
    "Tree DP",
    `# Monster Hunter Tree DP Challenge
# You are planning optimal hunting routes!

# Test Case 1: Territory Optimization
Input: tree = {
    "Ancient Forest": {
        "rewards": 100,
        "children": ["Wildspire Waste", "Coral Highlands"]
    },
    "Wildspire Waste": {
        "rewards": 80,
        "children": ["Rotten Vale"]
    }
}
Expected Output: 180

# Monster Hunter Tip:
# Like finding the most rewarding hunting path!`,
  ],
  [
    "Probability DP",
    `# Monster Hunter Probability DP Challenge
# You are calculating survival chances!

# Test Case 1: Survival Probability
Input: attacks = [
    {"damage": 30, "probability": 0.3},
    {"damage": 50, "probability": 0.1},
    {"damage": 20, "probability": 0.6}
], max_turns = 3, health = 100
Expected Output: 0.729

# Monster Hunter Tip:
# Like calculating your chances of survival!`,
  ],
  [
    "Extended Euclidean" as PatternKey,
    `# Monster Hunter Extended Euclidean Challenge
# You are finding optimal resource distribution between hunters!

# Test Case 1: Resource Distribution
Input: a = 30, b = 45
Expected Output: (15, -1, 1)  # GCD, x, y coefficients

# Monster Hunter Tip:
# Like finding the best way to share materials between hunters!`,
  ],
  [
    "Chinese Remainder Theorem" as PatternKey,
    `# Monster Hunter Chinese Remainder Theorem Challenge
# You are finding when multiple monster spawns align!

# Test Case 1: Monster Spawn Alignment
Input: remainders = [2, 3, 2], moduli = [3, 4, 5]
Expected Output: 47  # Days until all monsters spawn together

# Monster Hunter Tip:
# Like predicting when all your target monsters will appear!`,
  ],
  [
    "Sieve of Eratosthenes" as PatternKey,
    `# Monster Hunter Sieve Challenge
# You are finding all special rarity levels!

# Test Case 1: Prime Rarity Levels
Input: max_rarity = 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like identifying all special material rarity levels!`,
  ],
  [
    "Heavy Light Decomposition" as PatternKey,
    `# Monster Hunter Heavy Light Decomposition Challenge
# You are organizing monster territories into efficient paths!

# Test Case 1: Territory Decomposition
Input: tree = {
    "Ancient Forest": {
        "children": ["Wildspire Waste", "Coral Highlands"],
        "size": 3
    },
    "Wildspire Waste": {
        "children": ["Rotten Vale"],
        "size": 2
    }
}
Expected Output: [
    ["Ancient Forest", "Wildspire Waste", "Rotten Vale"],
    ["Coral Highlands"]
]

# Monster Hunter Tip:
# Like organizing hunting routes for maximum efficiency!`,
  ],
  [
    "LCA" as PatternKey,
    `# Monster Hunter LCA Challenge
# You are finding common territory between monsters!

# Test Case 1: Territory Intersection
Input: tree = {
    "Ancient Forest": {
        "children": ["Wildspire Waste", "Coral Highlands"],
        "depth": 0
    },
    "Wildspire Waste": {
        "children": ["Rotten Vale"],
        "depth": 1
    }
}, monster1 = "Rotten Vale", monster2 = "Coral Highlands"
Expected Output: "Ancient Forest"

# Monster Hunter Tip:
# Like finding where two monster paths intersect!`,
  ],
  [
    "Suffix Tree" as PatternKey,
    `# Monster Hunter Suffix Tree Challenge
# You are building a tree of monster attack patterns!

# Test Case 1: Attack Pattern Tree
Input: "RARFRARF"  # R=Roar, A=Attack, F=Fly
Expected Output: Tree structure with all suffixes

# Monster Hunter Tip:
# Like organizing all possible attack sequences!`,
  ],
  [
    "Suffix Array" as PatternKey,
    `# Monster Hunter Suffix Array Challenge
# You are organizing monster attack patterns!

# Test Case 1: Attack Pattern Array
Input: "RARFRARF"  # R=Roar, A=Attack, F=Fly
Expected Output: [7, 5, 3, 1, 6, 4, 2, 0]

# Monster Hunter Tip:
# Like creating an index of all attack sequences!`,
  ],
  [
    "B Tree" as PatternKey,
    `# Monster Hunter B Tree Challenge
# You are organizing a large material database!

# Test Case 1: Material Organization
Input: order = 3, materials = ["Rathalos Scale", "Rathalos Wing", "Rathalos Plate", "Rathalos Ruby"]
Expected Output: Balanced B Tree structure

# Monster Hunter Tip:
# Like organizing a massive collection of materials!`,
  ],
  [
    "AVL Tree" as PatternKey,
    `# Monster Hunter AVL Tree Challenge
# You are maintaining a balanced material collection!

# Test Case 1: Material Balance
Input: [
    ("Rathalos Scale", 1),
    ("Rathalos Wing", 3),
    ("Rathalos Plate", 5),
    ("Rathalos Ruby", 7)
]
Expected Output: Balanced AVL Tree structure

# Monster Hunter Tip:
# Like keeping your material collection perfectly organized!`,
  ],
  [
    "Red Black Tree" as PatternKey,
    `# Monster Hunter Red Black Tree Challenge
# You are organizing materials with color coding!

# Test Case 1: Color Coded Materials
Input: [
    ("Rathalos Scale", 1),
    ("Rathalos Wing", 3),
    ("Rathalos Plate", 5),
    ("Rathalos Ruby", 7)
]
Expected Output: Balanced Red Black Tree structure

# Monster Hunter Tip:
# Like organizing materials with a color-coded system!`,
  ],
  [
    "Fenwick Tree" as PatternKey,
    `# Monster Hunter Fenwick Tree Challenge
# You are tracking material counts efficiently!

# Test Case 1: Material Counting
Input: [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9]
Query: Sum of materials 1 to 6
Expected Output: 18

# Monster Hunter Tip:
# Like keeping track of your material inventory!`,
  ],
  [
    "Segment Tree" as PatternKey,
    `# Monster Hunter Segment Tree Challenge
# You are tracking material ranges!

# Test Case 1: Range Queries
Input: [1, 3, 5, 7, 9, 11]
Query: Sum of materials 2 to 5
Expected Output: 32

# Monster Hunter Tip:
# Like tracking material quantities in different ranges!`,
  ],
  [
    "Matrix Operations" as PatternKey,
    `# Monster Hunter Matrix Operations Challenge
# You are optimizing material transformations!

# Test Case 1: Matrix Chain Multiplication
Input: [30, 35, 15, 5, 10, 20, 25]
Expected Output: 15125

# Monster Hunter Tip:
# Like finding the most efficient way to combine monster materials!`,
  ],
  [
    "Matrix Operations" as PatternKey,
    `# Monster Hunter Matrix Operations Challenge
# You are calculating monster evolution over time!

# Test Case 1: Matrix Exponentiation
Input: [[1, 1], [1, 0]], 5
Expected Output: [[8, 5], [5, 3]]

# Monster Hunter Tip:
# Like predicting how a monster will evolve over multiple generations!`,
  ],
  [
    "Matrix Traversal" as PatternKey,
    `# Monster Hunter Matrix Traversal Challenge
# You are exploring a monster's territory grid!

# Test Case 1: Territory Exploration
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like systematically exploring every area of a monster's territory!`,
  ],
  [
    "Matrix Traversal Recursive" as PatternKey,
    `# Monster Hunter Matrix Traversal Recursive Challenge
# You are exploring a monster's territory using recursive paths!

# Test Case 1: Recursive Territory Exploration
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like exploring a territory by following each path to its end before backtracking!`,
  ],
  [
    "Matrix Spiral Traversal" as PatternKey,
    `# Monster Hunter Matrix Spiral Traversal Challenge
# You are exploring a monster's territory in a spiral pattern!

# Test Case 1: Spiral Territory Exploration
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like spiraling around a monster's territory to ensure no area is missed!`,
  ],
  [
    "Matrix Spiral Recursive" as PatternKey,
    `# Monster Hunter Matrix Spiral Recursive Challenge
# You are exploring a monster's territory in a recursive spiral pattern!

# Test Case 1: Recursive Spiral Exploration
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like recursively spiraling through a monster's territory, layer by layer!`,
  ],
  [
    "Prefix Sum",
    `# Monster Hunter Prefix Sum Challenge
# You are tracking cumulative damage on a monster!

# Test Case 1: Basic Damage Tracking
Input: [150, 200, 300, 100, 250]  # Damage per hit
Expected Output: [150, 350, 650, 750, 1000]  # Cumulative damage

# Test Case 2: Range Query
Input: [150, 200, 300, 100, 250]
Query: Total damage between hits 2-4
Expected Output: 600 (350 + 300 + 100)

# Monster Hunter Tip:
# Like tracking the total damage dealt to a monster over time!`,
  ],
  [
    "Ternary Search",
    `# Monster Hunter Ternary Search Challenge
# You are finding the optimal weapon sharpness level!

# Test Case 1: Sharpness Optimization
Input: [10, 20, 30, 40, 50]  # Sharpness levels
Expected Output: 30  # Optimal sharpness level

# Monster Hunter Tip:
# Like finding the perfect balance between sharpness and durability!`,
  ],
  [
    "Jump Search",
    `# Monster Hunter Jump Search Challenge
# You are searching for a monster in a large territory!

# Test Case 1: Monster Location
Input: ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
Target: "Nergigante"
Expected Output: 2

# Monster Hunter Tip:
# Like jumping through territory sections to find a monster!`,
  ],
  [
    "Exponential Search",
    `# Monster Hunter Exponential Search Challenge
# You are searching for a monster in an unknown territory!

# Test Case 1: Monster Location
Input: ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
Target: "Nergigante"
Expected Output: 2

# Monster Hunter Tip:
# Like expanding your search area exponentially until you find the monster!`,
  ],
  [
    "Interpolation Search",
    `# Monster Hunter Interpolation Search Challenge
# You are searching for a monster in a uniformly distributed territory!

# Test Case 1: Monster Location
Input: ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
Target: "Nergigante"
Expected Output: 2

# Monster Hunter Tip:
# Like estimating where a monster might be based on known patterns!`,
  ],
  [
    "Rabin-Karp",
    `# Monster Hunter Rabin-Karp Challenge
# You are searching for monster track patterns!

# Test Case 1: Track Pattern Search
Input: "RAFRRAFRRAFR"  # R=Roar, A=Attack, F=Fly
Pattern: "RAFR"
Expected Output: [0, 4, 8]  # Positions where pattern occurs

# Monster Hunter Tip:
# Like quickly finding specific monster behavior patterns!`,
  ],
  [
    "KMP Algorithm",
    `# Monster Hunter KMP Challenge
# You are matching complex monster attack patterns!

# Test Case 1: Attack Pattern Matching
Input: "RAFRRAFRRAFR"  # R=Roar, A=Attack, F=Fly
Pattern: "RAFR"
Expected Output: [0, 4, 8]  # Positions where pattern occurs

# Monster Hunter Tip:
# Like efficiently finding attack patterns without backtracking!`,
  ],
  [
    "Manacher's Algorithm",
    `# Monster Hunter Manacher's Challenge
# You are finding symmetric monster patterns!

# Test Case 1: Symmetric Pattern
Input: "RAFARAFAR"  # R=Roar, A=Attack, F=Fly
Expected Output: "RAFARAFAR"  # Longest symmetric pattern

# Monster Hunter Tip:
# Like identifying patterns that read the same forwards and backwards!`,
  ],
  [
    "Matrix Traversal",
    `# Monster Hunter Matrix Traversal Challenge
# You are exploring hunting grounds systematically!

# Test Case 1: Territory Exploration
Input: [
  ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
  ['F', 'C', 'C', 'M'],
  ['C', 'C', 'M', 'M']
]
Expected Output: All zones visited in order

# Monster Hunter Tip:
# Like systematically exploring every area of a territory!`,
  ],
  [
    "Matrix Spiral Traversal",
    `# Monster Hunter Matrix Spiral Challenge
# You are exploring hunting grounds in a spiral pattern!

# Test Case 1: Spiral Exploration
Input: [
  ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
  ['F', 'C', 'C', 'M'],
  ['C', 'C', 'M', 'M']
]
Expected Output: All zones visited in spiral order

# Monster Hunter Tip:
# Like spiraling around a territory to ensure no area is missed!`,
  ],
  [
    "Rotate Matrix",
    `# Monster Hunter Rotate Matrix Challenge
# You are rotating your hunting ground map to find optimal attack angles!

# Test Case 1: 90 Degree Rotation
Input: [
  ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
  ['F', 'C', 'C', 'M'],
  ['C', 'C', 'M', 'M']
]
Expected Output: [
  ['C', 'F', 'F'],
  ['C', 'C', 'F'],
  ['M', 'C', 'C'],
  ['M', 'M', 'M']
]

# Test Case 2: 180 Degree Rotation
Input: [
  ['F', 'F', 'C', 'M'],
  ['F', 'C', 'C', 'M'],
  ['C', 'C', 'M', 'M']
]
Expected Output: [
  ['M', 'M', 'M', 'C'],
  ['M', 'C', 'C', 'F'],
  ['M', 'C', 'F', 'F']
]

# Monster Hunter Tip:
# Like rotating your map to find the best approach angle for attacking a monster!`,
  ],
  [
    "A* Search" as PatternKey,
    `# Monster Hunter A* Search Challenge
# You are finding the optimal path through a complex hunting ground!

# Test Case 1: Basic Path Finding
Input:
Map = [
  ['S', 'F', 'F', 'M'],  # S=Start, F=Forest, M=Mountain, G=Goal
  ['F', 'M', 'F', 'F'],
  ['F', 'F', 'M', 'F'],
  ['M', 'F', 'F', 'G']
]
Terrain Costs = {
  'F': 1,   # Forest (easy to traverse)
  'M': 3    # Mountain (difficult to traverse)
}

Expected Output: [(0,0), (0,1), (1,2), (2,2), (3,2), (3,3)]  # Optimal path coordinates

# Test Case 2: Multiple Paths
Input:
Map = [
  ['S', 'F', 'F', 'F'],
  ['M', 'M', 'F', 'F'],
  ['F', 'F', 'F', 'G']
]
Terrain Costs = {
  'F': 1,
  'M': 5
}

Expected Output: [(0,0), (0,1), (0,2), (0,3), (1,3), (2,3)]  # Path avoiding mountains

# Test Case 3: Complex Hunting Grounds
Input:
Hunting Grounds = {
    "Base Camp": [("Ancient Forest", 2), ("Wildspire Waste", 3)],
    "Ancient Forest": [("Coral Highlands", 4)],
    "Wildspire Waste": [("Rotten Vale", 3)],
    "Coral Highlands": [("Elder's Recess", 5)],
    "Rotten Vale": [("Elder's Recess", 4)]
}
Start = "Base Camp"
Target = "Elder's Recess"

Expected Output: ["Base Camp", "Ancient Forest", "Coral Highlands", "Elder's Recess"]

# Monster Hunter Tip:
# Like finding the most efficient route to a monster, considering terrain difficulty!`,
  ],
  [
    "Bellman-Ford",
    `# Monster Hunter Bellman-Ford Challenge
# You are finding the safest paths through monster territories!

# Test Case 1: Basic Path Finding
Input:
Territories = ['Base Camp', 'Forest', 'Mountain', 'Nest']
Paths = [
  ('Base Camp', 'Forest', 2),    # (from, to, danger_level)
  ('Forest', 'Mountain', 3),
  ('Mountain', 'Nest', 1),
  ('Base Camp', 'Mountain', 6),
  ('Forest', 'Nest', 5)
]
Start = 'Base Camp'

Expected Output: {
  'Forest': 2,      # Minimum danger to reach Forest
  'Mountain': 5,    # Minimum danger to reach Mountain
  'Nest': 6         # Minimum danger to reach Nest
}

# Test Case 2: Negative Cycles (Dangerous Areas)
Input:
Territories = ['Camp', 'Cave', 'Peak', 'Valley']
Paths = [
  ('Camp', 'Cave', 4),
  ('Cave', 'Peak', -2),
  ('Peak', 'Valley', 3),
  ('Valley', 'Cave', -6)    # Dangerous cycle!
]
Start = 'Camp'

Expected Output: "Unsafe territory detected!"  # Negative cycle warning

# Monster Hunter Tip:
# Like finding the safest routes through monster territories, even when some areas become more dangerous over time!`,
  ],
  [
    "Strongly Connected Components" as PatternKey,
    `# Monster Hunter Strongly Connected Components Challenge
# You are analyzing monster territory connections!

# Test Case 1: Basic Territory Connections
Input:
Territories = {
    "Ancient Forest": ["Wildspire Waste"],
    "Wildspire Waste": ["Coral Highlands"],
    "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
    "Elder's Recess": ["Rotten Vale"],
    "Rotten Vale": ["Wildspire Waste"]
}

Expected Output: [
    ["Ancient Forest", "Wildspire Waste", "Coral Highlands"],
    ["Elder's Recess"],
    ["Rotten Vale"]
]

# Test Case 2: Complex Territory Network
Input:
Territories = {
    "Base Camp": ["Ancient Forest", "Wildspire Waste"],
    "Ancient Forest": ["Coral Highlands"],
    "Wildspire Waste": ["Rotten Vale"],
    "Coral Highlands": ["Elder's Recess"],
    "Rotten Vale": ["Elder's Recess"],
    "Elder's Recess": ["Base Camp"]
}

Expected Output: [
    ["Base Camp", "Ancient Forest", "Wildspire Waste", "Coral Highlands", "Rotten Vale", "Elder's Recess"]
]

# Test Case 3: Multiple Independent Territories
Input:
Territories = {
    "Ancient Forest": ["Wildspire Waste"],
    "Wildspire Waste": ["Ancient Forest"],
    "Coral Highlands": ["Elder's Recess"],
    "Elder's Recess": ["Coral Highlands"],
    "Rotten Vale": []
}

Expected Output: [
    ["Ancient Forest", "Wildspire Waste"],
    ["Coral Highlands", "Elder's Recess"],
    ["Rotten Vale"]
]

# Monster Hunter Tip:
# Like identifying groups of territories where monsters can freely move between any two areas in the group!`,
  ],
  [
    "Sieve of Sundaram" as PatternKey,
    `# Monster Hunter Sieve of Sundaram Challenge
# You are finding optimal resource gathering points in a territory!

# Test Case 1: Small Territory
Input: area_size = 10
Expected Output: [2, 3, 5, 7]

# Test Case 2: Medium Territory
Input: area_size = 30
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

# Test Case 3: Large Territory
Input: area_size = 50
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

# Monster Hunter Tip:
# Like finding the most valuable gathering spots in a territory!`,
  ],
  [
    "Union Find" as PatternKey,
    `# Monster Hunter Union Find Challenge
# You are tracking connected monster territories and managing territory connections!

# Test Case 1: Basic Territory Connections
Input: [
  ("Ancient Forest", "Wildspire Waste"),
  ("Wildspire Waste", "Coral Highlands"),
  ("Rotten Vale", "Elder's Recess")
]
Expected Output: {
  "Ancient Forest": ["Ancient Forest", "Wildspire Waste", "Coral Highlands"],
  "Rotten Vale": ["Rotten Vale", "Elder's Recess"]
}

# Test Case 2: Dynamic Territory Connections
Input: [
  ("Ancient Forest", "Wildspire Waste"),
  ("Coral Highlands", "Elder's Recess"),
  ("Wildspire Waste", "Coral Highlands")
]
Expected Output: {
  "Ancient Forest": ["Ancient Forest", "Wildspire Waste", "Coral Highlands", "Elder's Recess"]
}

# Test Case 3: Territory Size Tracking
Input: [
  ("Ancient Forest", "Wildspire Waste"),
  ("Coral Highlands", "Elder's Recess"),
  ("Wildspire Waste", "Coral Highlands")
]
Query: Size of territory containing "Ancient Forest"
Expected Output: 4

# Monster Hunter Tip:
# Like tracking which monster territories are connected and can be explored together!
# Use Union Find to efficiently manage territory connections as you discover new paths.
# This helps in planning efficient hunting routes and understanding monster migration patterns.`,
  ],
  [
    "Miller-Rabin Primality Test" as PatternKey,
    `# Monster Hunter Miller-Rabin Challenge
# You are testing if a monster's power level is prime!

# Test Case 1: Prime Power Level
Input: monster_power = 17, k = 5
Expected Output: true
Explanation: 17 is a prime number, so the test should return true

# Test Case 2: Composite Power Level
Input: monster_power = 15, k = 5
Expected Output: false
Explanation: 15 is not a prime number, so the test should return false

# Test Case 3: Small Prime
Input: monster_power = 2, k = 5
Expected Output: true
Explanation: 2 is a prime number, so the test should return true

# Test Case 4: Edge Case
Input: monster_power = 1, k = 5
Expected Output: false
Explanation: 1 is not a prime number, so the test should return false

# Test Case 5: Even Number
Input: monster_power = 4, k = 5
Expected Output: false
Explanation: 4 is not a prime number, so the test should return false

# Monster Hunter Tip:
# Like testing if a monster's power level is a special prime number!`,
  ],
  [
    "Fast Fourier Transform" as PatternKey,
    `# Monster Hunter Fast Fourier Transform Challenge
# You are analyzing monster attack patterns in the frequency domain!

# Test Case 1: Basic Pattern Analysis
Input: [1, 0, 1, 0, 1, 0, 1, 0]  # Simple repeating attack pattern
Expected Output: [4, 0, 0, 0, 4, 0, 0, 0]  # Frequency components

# Test Case 2: Complex Pattern Analysis
Input: [1, 2, 3, 4, 3, 2, 1, 0]  # More complex attack pattern
Expected Output: Complex frequency components showing pattern structure

# Test Case 3: Real-time Pattern Analysis
Input: [0.5, 1.0, 0.5, 0.0, -0.5, -1.0, -0.5, 0.0]  # Wave-like attack pattern
Expected Output: Frequency components showing wave characteristics

# Monster Hunter Tip:
# Like analyzing monster attack patterns to find their frequency components!
# This helps you predict when and how a monster will attack based on their pattern's frequency.`,
  ],
  [
    "Graph Articulation Points",
    `# Monster Hunter Graph Articulation Points Challenge
# You are finding critical points in monster territory!

# Test Case 1: Basic Territory Analysis
Input:
territory = {
    'Ancient Forest': ['Astera'],
    'Astera': ['Ancient Forest', 'Wildspire Waste', 'Coral Highlands'],
    'Wildspire Waste': ['Astera'],
    'Coral Highlands': ['Astera', 'Rotten Vale'],
    'Rotten Vale': ['Coral Highlands', 'Elder's Recess'],
    'Elder's Recess': ['Rotten Vale']
}
Expected Output: ['Astera', 'Coral Highlands']

# Test Case 2: Complex Territory Network
Input:
territory = {
    'Base Camp': ['Ancient Forest', 'Wildspire Waste'],
    'Ancient Forest': ['Base Camp', 'Coral Highlands'],
    'Wildspire Waste': ['Base Camp', 'Rotten Vale'],
    'Coral Highlands': ['Ancient Forest', 'Elder's Recess'],
    'Rotten Vale': ['Wildspire Waste', 'Elder's Recess'],
    'Elder's Recess': ['Coral Highlands', 'Rotten Vale']
}
Expected Output: ['Base Camp', 'Ancient Forest', 'Wildspire Waste', 'Coral Highlands', 'Rotten Vale']

# Test Case 3: Multiple Independent Territories
Input:
territory = {
    'Ancient Forest': ['Wildspire Waste'],
    'Wildspire Waste': ['Ancient Forest'],
    'Coral Highlands': ['Elder's Recess'],
    'Elder's Recess': ['Coral Highlands'],
    'Rotten Vale': []
}
Expected Output: []

# Monster Hunter Tip:
# Like finding critical paths in monster territory that, if blocked,
# would prevent monsters from moving between different areas!`,
  ],
  [
    "Network Flow",
    `# Monster Hunter Network Flow Challenge
# You are optimizing resource distribution between territories!

# Test Case 1: Basic Resource Distribution
Input:
territory = {
    'Base Camp': {'Ancient Forest': 10, 'Wildspire Waste': 5},
    'Ancient Forest': {'Coral Highlands': 7},
    'Wildspire Waste': {'Rotten Vale': 4},
    'Coral Highlands': {'Elder's Recess': 6},
    'Rotten Vale': {'Elder's Recess': 3},
    'Elder's Recess': {}
}
source = 'Base Camp'
sink = 'Elder's Recess'
Expected Output: 9 (7 through Ancient Forest + 2 through Wildspire Waste)

# Test Case 2: Multiple Paths with Different Capacities
Input:
territory = {
    'Astera': {'Ancient Forest': 8, 'Wildspire Waste': 6},
    'Ancient Forest': {'Coral Highlands': 5, 'Rotten Vale': 3},
    'Wildspire Waste': {'Rotten Vale': 4},
    'Coral Highlands': {'Elder's Recess': 7},
    'Rotten Vale': {'Elder's Recess': 6},
    'Elder's Recess': {}
}
source = 'Astera'
sink = 'Elder's Recess'
Expected Output: 12 (5 through Ancient Forest + 4 through Wildspire Waste + 3 through Rotten Vale)

# Test Case 3: Complex Network with Multiple Sources
Input:
territory = {
    'Astera': {'Ancient Forest': 10},
    'Seliana': {'Wildspire Waste': 8},
    'Ancient Forest': {'Coral Highlands': 7},
    'Wildspire Waste': {'Rotten Vale': 6},
    'Coral Highlands': {'Elder's Recess': 5},
    'Rotten Vale': {'Elder's Recess': 4},
    'Elder's Recess': {}
}
# Create a super source
territory['Super Source'] = {'Astera': float('inf'), 'Seliana': float('inf')}
source = 'Super Source'
sink = 'Elder's Recess'
Expected Output: 9 (5 through Coral Highlands + 4 through Rotten Vale)

# Test Case 4: Supply Chain Optimization
Input:
territory = {
    'Base Camp': {'Ancient Forest': 15, 'Wildspire Waste': 10},
    'Ancient Forest': {'Coral Highlands': 12, 'Rotten Vale': 8},
    'Wildspire Waste': {'Rotten Vale': 7},
    'Coral Highlands': {'Elder's Recess': 10},
    'Rotten Vale': {'Elder's Recess': 9},
    'Elder's Recess': {}
}
source = 'Base Camp'
sink = 'Elder's Recess'
Expected Output: 19 (10 through Coral Highlands + 9 through Rotten Vale)

# Test Case 5: Emergency Resource Distribution
Input:
territory = {
    'Emergency Camp': {'Ancient Forest': 20, 'Wildspire Waste': 15},
    'Ancient Forest': {'Coral Highlands': 18},
    'Wildspire Waste': {'Rotten Vale': 12},
    'Coral Highlands': {'Elder's Recess': 15},
    'Rotten Vale': {'Elder's Recess': 10},
    'Elder's Recess': {}
}
source = 'Emergency Camp'
sink = 'Elder's Recess'
Expected Output: 25 (15 through Coral Highlands + 10 through Rotten Vale)

# Monster Hunter Tip:
# Like optimizing your supply lines to ensure maximum resources reach your hunting grounds!
# Use Network Flow to:
# 1. Plan efficient resource distribution between territories
# 2. Find bottlenecks in your supply chain
# 3. Optimize emergency resource delivery
# 4. Balance multiple supply routes
# 5. Maximize resource delivery to critical hunting grounds`,
  ],
]);
