import { PatternKey } from "./types";

export const monsterHunterTestData: Record<PatternKey, string> = {
  "Quick Sort": `# Monster Hunter Quick Sort Challenge
# You are organizing your inventory of monster materials!

# Test Case 1: Rathalos Materials
Input: ["Rathalos Scale", "Rathalos Wing", "Rathalos Plate", "Rathalos Ruby"]
Expected Output: ["Rathalos Plate", "Rathalos Ruby", "Rathalos Scale", "Rathalos Wing"]

# Test Case 2: Mixed Monster Parts
Input: ["Rathalos Scale", "Diablos Horn", "Kirin Horn", "Nergigante Gem"]
Expected Output: ["Diablos Horn", "Kirin Horn", "Nergigante Gem", "Rathalos Scale"]

# Monster Hunter Tip:
# Think of the pivot as choosing a "target monster" to organize materials around!`,

  "Merge Sort": `# Monster Hunter Merge Sort Challenge
# You are combining different monster material sets!

# Test Case 1: Elder Dragon Materials
Input: ["Teostra Gem", "Kushala Gem", "Nergigante Gem", "Vaal Gem"]
Expected Output: ["Kushala Gem", "Nergigante Gem", "Teostra Gem", "Vaal Gem"]

# Test Case 2: Wyvern Materials
Input: ["Rathalos Scale", "Rathian Scale", "Diablos Horn", "Bazelgeuse Scale"]
Expected Output: ["Bazelgeuse Scale", "Diablos Horn", "Rathalos Scale", "Rathian Scale"]

# Monster Hunter Tip:
# Like combining different monster material sets into a complete collection!`,

  "Stack Sort": `# Monster Hunter Stack Sort Challenge
# You are stacking monster materials by rarity!

# Test Case 1: Mixed Rarity Materials
Input: ["Rathalos Scale+", "Rathalos Scale", "Rathalos Ruby", "Rathalos Plate"]
Expected Output: ["Rathalos Ruby", "Rathalos Plate", "Rathalos Scale+", "Rathalos Scale"]

# Monster Hunter Tip:
# Like stacking materials with rarer ones on top!`,

  "Heap Sort": `# Monster Hunter Heap Sort Challenge
# You are organizing materials in a priority heap!

# Test Case 1: Material Priority
Input: ["Rathalos Ruby", "Rathalos Scale", "Rathalos Wing", "Rathalos Plate"]
Priority: [100, 10, 20, 50]
Expected Output: ["Rathalos Ruby", "Rathalos Plate", "Rathalos Wing", "Rathalos Scale"]

# Monster Hunter Tip:
# Like organizing materials by their rarity value in a heap structure!`,

  "Bubble Sort": `# Monster Hunter Bubble Sort Challenge
# You are sorting monster materials by size!

# Test Case 1: Material Sizes
Input: ["Large Scale", "Small Scale", "Medium Scale", "Extra Large Scale"]
Expected Output: ["Small Scale", "Medium Scale", "Large Scale", "Extra Large Scale"]

# Monster Hunter Tip:
# Like bubbling up larger materials to the top of your inventory!`,

  "Selection Sort": `# Monster Hunter Selection Sort Challenge
# You are selecting the best materials for crafting!

# Test Case 1: Material Quality
Input: ["Worn Scale", "Quality Scale", "Perfect Scale", "Damaged Scale"]
Expected Output: ["Damaged Scale", "Worn Scale", "Quality Scale", "Perfect Scale"]

# Monster Hunter Tip:
# Like selecting the best material for each crafting slot!`,

  "Insertion Sort": `# Monster Hunter Insertion Sort Challenge
# You are inserting materials into your sorted inventory!

# Test Case 1: Material Insertion
Input: ["Rathalos Scale", "Rathian Scale", "Azure Scale", "Silver Scale"]
Expected Output: ["Azure Scale", "Rathalos Scale", "Rathian Scale", "Silver Scale"]

# Monster Hunter Tip:
# Like inserting new materials into their correct position in your sorted inventory!`,

  "Binary Search": `# Monster Hunter Binary Search Challenge
# You are searching for specific monster materials in your sorted inventory!

# Test Case 1: Finding Elder Dragon Gems
Input: ["Kushala Gem", "Nergigante Gem", "Teostra Gem", "Vaal Gem"]
Target: "Teostra Gem"
Expected Output: 2 (index where Teostra Gem is found)

# Monster Hunter Tip:
# Like efficiently searching your organized material box!`,

  "Binary Search on Answer": `# Monster Hunter Binary Search Challenge
# You are finding the minimum rarity needed for a craft!

# Test Case 1: Material Rarity Search
Input: [1, 3, 5, 7, 9] (material rarities)
Target: 6 (minimum needed)
Expected Output: 7 (next highest rarity available)

# Monster Hunter Tip:
# Like finding the minimum rarity material that will work for your craft!`,

  "Linear Search": `# Monster Hunter Linear Search Challenge
# You are searching through unsorted monster drops!

# Test Case 1: Fresh Monster Drops
Input: ["Scale", "Claw", "Wing", "Tail", "Horn"]
Target: "Tail"
Expected Output: 3 (index where Tail is found)

# Monster Hunter Tip:
# Like searching through fresh monster drops before organizing them!`,

  "Two Sum": `# Monster Hunter Two Sum Challenge
# You are finding material pairs for dual-material crafting!

# Test Case 1: Material Combination
Input: [2, 5, 8, 3] (material values)
Target: 7 (required sum)
Expected Output: [0, 3] (indices of materials summing to 7)

# Monster Hunter Tip:
# Like finding two materials that combine to meet a crafting requirement!`,

  "Dynamic Programming": `# Monster Hunter Dynamic Programming Challenge
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

  Greedy: `# Monster Hunter Greedy Challenge
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

  Backtracking: `# Monster Hunter Backtracking Challenge
# You are finding all possible combinations of monster materials!

# Test Case 1: Material Combinations
Input: ["Rathalos Scale", "Rathalos Wing", "Rathalos Plate"]
Expected Output: All possible combinations

# Monster Hunter Tip:
# Like trying different material combinations for crafting!`,

  "Sliding Window": `# Monster Hunter Sliding Window Challenge
# You are tracking monster behavior patterns!

# Test Case 1: Monster Movement Pattern
Input: [1, 2, 3, 4, 5, 6, 7, 8]
Window Size: 3
Expected Output: [6, 7, 8]

# Monster Hunter Tip:
# Like observing a monster's behavior through a time window!`,

  "Bit Manipulation": `# Monster Hunter Bit Manipulation Challenge
# You are encoding monster status effects!

# Test Case 1: Status Effects
Input: [Poison, Paralysis, Sleep, Stun]
Encoded: [1, 1, 0, 1]
Expected Output: 13 (binary: 1101)

# Monster Hunter Tip:
# Like efficiently storing multiple status effects in a single value!`,

  "Topological Sort": `# Monster Hunter Topological Sort Challenge
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

  DFS: `# Monster Hunter DFS Challenge
# You are exploring interconnected monster territories!

# Test Case 1: Territory Exploration
Input: Map of connected territories
Start: "Ancient Forest"
Expected Output: All reachable territories in depth-first order

# Monster Hunter Tip:
# Like thoroughly exploring each branch of a territory before moving on!`,

  BFS: `# Monster Hunter BFS Challenge
# You are mapping monster territory levels!

# Test Case 1: Territory Level Mapping
Input: Map of connected territories
Start: "Base Camp"
Expected Output: Territories grouped by distance from base

# Monster Hunter Tip:
# Like exploring all nearby areas before moving to distant ones!`,

  "Stack Implementation": `# Monster Hunter Stack Implementation
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

  "Queue Implementation": `# Monster Hunter Queue Implementation
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

  "Linked List": `# Monster Hunter Linked List Challenge
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

  "Circular Linked List": `# Monster Hunter Circular Linked List Challenge
# You are creating a rotating monster spawn pattern!

# Test Case 1: Spawn Pattern
Input: ["Rathalos", "Rathian", "Diablos", "Kirin"]
Operations: Rotate 2 times
Expected Output: ["Diablos", "Kirin", "Rathalos", "Rathian"]

# Monster Hunter Tip:
# Like creating a repeating cycle of monster spawns!`,

  "Hash Table": `# Monster Hunter Hash Table Challenge
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

  Graph: `# Monster Hunter Graph Challenge
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

  Tree: `# Monster Hunter Tree Challenge
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

  "Binary Search Tree": `# Monster Hunter Binary Search Tree Challenge
# You are organizing materials by rarity in a tree!

# Test Case 1: Material Organization
Input: [7, 3, 9, 1, 5] (material rarities)
Operations: Insert in order
Expected Output: Balanced BST of materials

# Monster Hunter Tip:
# Like organizing materials in a way that makes searching efficient!`,

  "Heap Implementation": `# Monster Hunter Heap Implementation
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

  Trie: `# Monster Hunter Trie Challenge
# You are creating a prefix tree for monster names!

# Test Case 1: Monster Name Lookup
Input: ["Rathalos", "Rathian", "Rajang", "Diablos"]
Search Prefix: "Ra"
Expected Output: ["Rathalos", "Rathian", "Rajang"]

# Monster Hunter Tip:
# Like organizing monster names for quick prefix searching!`,

  "Monotonic Stack": `# Monster Hunter Monotonic Stack Challenge
# You are tracking increasing monster threat levels!

# Test Case 1: Threat Level Stack
Input: [3, 1, 4, 2, 5] (threat levels)
Expected Output: [1, 2, 5] (monotonically increasing)

# Monster Hunter Tip:
# Like maintaining a stack of monsters with increasing threat!`,

  "Monotonic Queue": `# Monster Hunter Monotonic Queue Challenge
# You are tracking maximum damage in time windows!

# Test Case 1: Damage Window
Input: [10, 5, 8, 7, 9, 4, 6] (damage values)
Window Size: 3
Expected Output: Maximum damage in each window

# Monster Hunter Tip:
# Like tracking the highest damage dealer in a time period!`,

  "Two Pointers": `# Monster Hunter Two Pointers Challenge
# You are coordinating a dual monster hunt!

# Test Case 1: Monster Pair Selection
Input: ["Rathalos", "Rathian", "Diablos", "Kirin"]
Target: "Rathalos + Rathian"
Expected Output: [0, 1]

# Monster Hunter Tip:
# Like coordinating two hunters approaching from different directions!`,

  "DFS Linked List": `# Monster Hunter DFS Linked List Challenge
# You are exploring a chain of connected areas!

# Test Case 1: Area Chain Exploration
Input: Linked areas [Base → Forest → Desert → Volcano]
Expected Output: All areas in depth-first order

# Monster Hunter Tip:
# Like following a chain of connected hunting grounds!`,

  "DFS Binary Tree": `# Monster Hunter DFS Binary Tree Challenge
# You are exploring a branching path of monster territories!

# Test Case 1: Territory Tree Exploration
Input: Binary tree of territories
Expected Output: All territories in depth-first order

# Monster Hunter Tip:
# Like exploring each branch of territory completely before backtracking!`,

  "BFS Linked List": `# Monster Hunter BFS Linked List Challenge
# You are exploring area connections level by level!

# Test Case 1: Level Order Exploration
Input: Linked areas with branches
Expected Output: Areas grouped by distance from start

# Monster Hunter Tip:
# Like exploring all nearby areas before moving to connected ones!`,

  "Dynamic Programming Fibonacci": `# Monster Hunter DP Fibonacci Challenge
# You are calculating monster population growth!

# Test Case 1: Population Growth
Input: 5 (generations)
Expected Output: Population after 5 generations

# Monster Hunter Tip:
# Like predicting monster population growth patterns!`,

  "Dynamic Programming Iterative": `# Monster Hunter DP Iterative Challenge
# You are optimizing material farming routes iteratively!

# Test Case 1: Route Optimization
Input: [2, 4, 1, 6, 3] (material values)
Expected Output: Maximum value collectible path

# Monster Hunter Tip:
# Like finding the best farming route step by step!`,

  "Dynamic Programming Coin Change": `# Monster Hunter DP Coin Change Challenge
# You are finding minimum materials needed for crafting!

# Test Case 1: Material Combination
Input: Materials: [1, 3, 5], Target: 7
Expected Output: Minimum materials needed

# Monster Hunter Tip:
# Like finding the most efficient combination of materials!`,

  "Greedy Activity Selection": `# Monster Hunter Greedy Activity Selection
# You are scheduling non-overlapping hunts!

# Test Case 1: Hunt Schedule
Input: [(2,5), (1,4), (6,8)] (start,end times)
Expected Output: Maximum non-overlapping hunts

# Monster Hunter Tip:
# Like scheduling hunts to maximize efficiency!`,

  "Greedy Fractional Knapsack": `# Monster Hunter Fractional Knapsack
# You are optimizing inventory space with divisible materials!

# Test Case 1: Inventory Optimization
Input: [(60,10), (100,20), (120,30)] (value,weight)
Capacity: 50
Expected Output: Maximum value possible

# Monster Hunter Tip:
# Like maximizing value in limited inventory space!`,

  "Greedy Job Scheduling": `# Monster Hunter Job Scheduling
# You are scheduling hunts with deadlines!

# Test Case 1: Hunt Schedule
Input: [(2,100), (1,19), (2,27)] (deadline,reward)
Expected Output: Maximum reward schedule

# Monster Hunter Tip:
# Like scheduling hunts to maximize rewards before deadlines!`,

  "Greedy Huffman Coding": `# Monster Hunter Huffman Coding
# You are compressing monster data efficiently!

# Test Case 1: Data Compression
Input: "RATHALOSWING" (frequency analysis)
Expected Output: Optimal binary encoding

# Monster Hunter Tip:
# Like creating efficient codes for monster data storage!`,

  "Greedy Dijkstra": `# Monster Hunter Dijkstra
# You are finding shortest paths between hunting grounds!

# Test Case 1: Path Finding
Input: Graph of areas with distances
Start: "Base Camp"
Expected Output: Shortest paths to all areas

# Monster Hunter Tip:
# Like finding the quickest routes between hunting grounds!`,

  "Floyd Cycle Detection": `# Monster Hunter Cycle Detection
# You are detecting monster patrol patterns!

# Test Case 1: Patrol Pattern
Input: [1,2,3,4,5,3] (location sequence)
Expected Output: Cycle starts at index 2

# Monster Hunter Tip:
# Like finding where a monster's patrol route loops!`,

  "Rabin-Karp": `# Monster Hunter Rabin-Karp
# You are searching for monster track patterns!

# Test Case 1: Track Pattern
Input: "LRLRLRRL" (movement pattern)
Pattern: "LRL"
Expected Output: Pattern occurrences

# Monster Hunter Tip:
# Like finding specific patterns in monster tracks!`,

  "Knuth-Morris-Pratt": `# Monster Hunter KMP
# You are matching complex monster behavior patterns!

# Test Case 1: Behavior Pattern
Input: "ATTACKRESTATTACK"
Pattern: "ATTACK"
Expected Output: Pattern occurrences

# Monster Hunter Tip:
# Like efficiently finding repeated monster behaviors!`,

  "Manacher's Algorithm": `# Monster Hunter Manacher
# You are finding symmetric monster formations!

# Test Case 1: Formation Pattern
Input: "RATHIANSOLOSNAIHTAR"
Expected Output: Longest symmetric formation

# Monster Hunter Tip:
# Like finding mirror patterns in monster formations!`,

  "Z-Algorithm": `# Monster Hunter Z-Algorithm
# You are finding all pattern occurrences in monster data!

# Test Case 1: Pattern Search
Input: "RATHALOSRATHIANRATHALOS"
Pattern: "RATHALOS"
Expected Output: All pattern occurrences

# Monster Hunter Tip:
# Like finding all instances of a monster pattern!`,

  "Matrix Traversal": `# Monster Hunter Matrix Traversal
# You are exploring a 2D map grid!

# Test Case 1: Map Exploration
Input: 4x4 area grid
Expected Output: All areas in traversal order

# Monster Hunter Tip:
# Like systematically exploring a hunting ground grid!`,

  "Matrix Traversal Recursive": `# Monster Hunter Recursive Traversal
# You are recursively exploring nested areas!

# Test Case 1: Nested Exploration
Input: 3x3 nested area grid
Expected Output: All subareas explored

# Monster Hunter Tip:
# Like exploring each subarea before moving deeper!`,

  "Matrix Spiral Traversal": `# Monster Hunter Spiral Traversal
# You are spiraling through a monster's territory!

# Test Case 1: Spiral Pattern
Input: 3x3 territory grid
Expected Output: Spiral path through territory

# Monster Hunter Tip:
# Like following a monster's spiral movement pattern!`,

  "Matrix Spiral Recursive": `# Monster Hunter Recursive Spiral
# You are recursively spiraling through nested territories!

# Test Case 1: Nested Spiral
Input: 4x4 nested territory grid
Expected Output: Recursive spiral path

# Monster Hunter Tip:
# Like exploring nested territories in a spiral pattern!`,

  "Prefix Sum": `# Monster Hunter Prefix Sum
# You are calculating cumulative damage totals!

# Test Case 1: Damage Calculation
Input: [10, 20, 30, 40, 50] (damage values)
Query: Sum from index 1 to 3
Expected Output: 90 (20 + 30 + 40)

# Monster Hunter Tip:
# Like tracking cumulative damage in different areas!`,

  "Kadane's Algorithm": `# Monster Hunter Kadane
# You are finding maximum damage streak!

# Test Case 1: Damage Streak
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Expected Output: Maximum sum subarray

# Monster Hunter Tip:
# Like finding your best damage combo sequence!`,
};
