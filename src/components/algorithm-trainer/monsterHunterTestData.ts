import type { PatternKey } from "@/components/algorithm-trainer/types";

export const monsterHunterTestData = new Map<PatternKey, string>([
  [
    "Matrix Operations" as PatternKey,
    `# Monster Hunter Matrix Operations Challenge
# You are performing operations on territory matrices!

# Test Case 1: Basic Operations
Input: {
    "matrix1": [[1, 2], [3, 4]],
    "matrix2": [[5, 6], [7, 8]]
}
Expected Output: [[19, 22], [43, 50]]

# Monster Hunter Tip:
# Like combining territory data for better analysis!`,
  ],
  [
    "Radix Sort" as PatternKey,
    `# Monster Hunter Radix Sort Challenge
# You are organizing monster classification numbers!

# Test Case 1: Basic Sort
Input: [170, 45, 75, 90, 802, 24, 2, 66]
Expected Output: [2, 24, 45, 66, 75, 90, 170, 802]

# Monster Hunter Tip:
# Like sorting monster materials by their classification numbers!`,
  ],
  [
    "Network Flow" as PatternKey,
    `# Monster Hunter Network Flow Challenge
# You are finding the maximum resource flow through territories!

# Test Case 1: Resource Distribution
Input: {
    "graph": {
        "Base Camp": {"Ancient Forest": 10, "Wildspire Waste": 5},
        "Ancient Forest": {"Coral Highlands": 7},
        "Wildspire Waste": {"Rotten Vale": 4},
        "Coral Highlands": {"Elder's Recess": 6},
        "Rotten Vale": {"Elder's Recess": 3},
        "Elder's Recess": {}
    },
    "source": "Base Camp",
    "sink": "Elder's Recess"
}
Expected Output: 9

# Monster Hunter Tip:
# Like finding the most efficient resource distribution network!`,
  ],
  [
    "Hungarian Algorithm" as PatternKey,
    `# Monster Hunter Hungarian Algorithm Challenge
# You are finding optimal hunter-territory assignments!

# Test Case 1: Basic Assignment
Input: [
    [3, 5, 1],
    [2, 4, 6],
    [7, 3, 2]
]
Expected Output: [
    [0, 2],
    [1, 0],
    [2, 1]
]

# Monster Hunter Tip:
# Like assigning hunters to territories for maximum efficiency!`,
  ],
  [
    "Prime Factorization" as PatternKey,
    `# Monster Hunter Prime Factorization Challenge
# You are analyzing monster strength ratings!

# Test Case 1: Basic Analysis
Input: 60
Expected Output: [2, 2, 3, 5]

# Monster Hunter Tip:
# Like breaking down a monster's strength into its prime components!`,
  ],

  [
    "Quickselect" as PatternKey,
    `# Monster Hunter Quickselect Challenge
# You are finding the k-th strongest monster in a territory!

# Test Case 1: Basic Selection
Input: {
    "monster_powers": [5, 3, 8, 2, 7, 1, 9, 4, 6],
    "k": 4  # Find the 4th strongest monster
}
Expected Output: 5

# Test Case 2: Edge Case - First Strongest
Input: {
    "monster_powers": [5, 3, 8, 2, 7, 1, 9, 4, 6],
    "k": 1  # Find the strongest monster
}
Expected Output: 9

# Test Case 3: Edge Case - Last Strongest
Input: {
    "monster_powers": [5, 3, 8, 2, 7, 1, 9, 4, 6],
    "k": 9  # Find the weakest monster
}
Expected Output: 1

# Monster Hunter Tip:
# Like quickly finding the k-th strongest monster in a territory without having to sort all monsters first!`,
  ],
  [
    "Heavy Light Decomposition" as PatternKey,
    `# Monster Hunter Heavy Light Decomposition Challenge
# You are organizing monster territories into efficient hunting routes!

# Test Case 1: Basic Territory Organization
Input: {
    "territory_tree": {
        "Base Camp": ["Ancient Forest", "Wildspire Waste", "Coral Highlands"],
        "Ancient Forest": ["Rotten Vale"],
        "Wildspire Waste": ["Elder's Recess"],
        "Coral Highlands": ["Hoarfrost Reach"],
        "Rotten Vale": [],
        "Elder's Recess": [],
        "Hoarfrost Reach": []
    }
}
Expected Output: {
    "chains": [
        ["Base Camp", "Ancient Forest", "Rotten Vale"],
        ["Wildspire Waste", "Elder's Recess"],
        ["Coral Highlands", "Hoarfrost Reach"]
    ],
    "heavy_edges": [
        ["Base Camp", "Ancient Forest"],
        ["Ancient Forest", "Rotten Vale"],
        ["Base Camp", "Wildspire Waste"],
        ["Base Camp", "Coral Highlands"]
    ]
}

# Test Case 2: Complex Territory Network
Input: {
    "territory_tree": {
        "Base Camp": ["Ancient Forest", "Wildspire Waste"],
        "Ancient Forest": ["Coral Highlands", "Rotten Vale"],
        "Wildspire Waste": ["Elder's Recess"],
        "Coral Highlands": ["Hoarfrost Reach"],
        "Rotten Vale": ["Guiding Lands"],
        "Elder's Recess": [],
        "Hoarfrost Reach": [],
        "Guiding Lands": []
    }
}
Expected Output: {
    "chains": [
        ["Base Camp", "Ancient Forest", "Coral Highlands", "Hoarfrost Reach"],
        ["Rotten Vale", "Guiding Lands"],
        ["Wildspire Waste", "Elder's Recess"]
    ],
    "heavy_edges": [
        ["Base Camp", "Ancient Forest"],
        ["Ancient Forest", "Coral Highlands"],
        ["Coral Highlands", "Hoarfrost Reach"],
        ["Ancient Forest", "Rotten Vale"],
        ["Rotten Vale", "Guiding Lands"],
        ["Base Camp", "Wildspire Waste"],
        ["Wildspire Waste", "Elder's Recess"]
    ]
}

# Monster Hunter Tip:
# Like organizing monster territories into efficient hunting routes, where heavy edges represent the most frequently traveled paths!`,
  ],
  [
    "Red-Black Tree" as PatternKey,
    `# Monster Hunter Red-Black Tree Challenge
# You are implementing a Red-Black Tree!

# Test Case 1: Basic Insertion
Input: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
Expected Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# Test Case 2: Insertion and Deletion
Input: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
Expected Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]  

# Monster Hunter Tip:
# Like organizing monster territories into efficient hunting routes, where heavy edges represent the most frequently traveled paths!`,
  ],
  [
    "Miller-Rabin Primality Test" as PatternKey,
    `# Monster Hunter Miller-Rabin Primality Test Challenge
# You are testing the primality of a number!

# Test Case 1: Basic Primality Test
Input: 29
Expected Output: "prime"

# Test Case 2: Composite Number
Input: 30
Expected Output: "composite"    

# Monster Hunter Tip:
# Like testing the primality of a number to ensure it's safe to hunt!`,
  ],
  [
    "AVL Tree" as PatternKey,
    `# Monster Hunter AVL Tree Challenge
# You are implementing an AVL Tree!

# Test Case 1: Basic Insertion and Balancing
Input: {
    "operations": [
        {"type": "insert", "value": 10},
        {"type": "insert", "value": 20},
        {"type": "insert", "value": 30},
        {"type": "insert", "value": 40},
        {"type": "insert", "value": 50}
    ]
}
Expected Output: {
    "inorder": [10, 20, 30, 40, 50],
    "height": 3,
    "isBalanced": true
}

# Test Case 2: Insertion, Deletion, and Rebalancing
Input: {
    "operations": [
        {"type": "insert", "value": 10},
        {"type": "insert", "value": 20},
        {"type": "insert", "value": 30},
        {"type": "delete", "value": 20},
        {"type": "insert", "value": 40},
        {"type": "insert", "value": 50}
    ]
}
Expected Output: {
    "inorder": [10, 30, 40, 50],
    "height": 3,
    "isBalanced": true
}

# Monster Hunter Tip:
# Like organizing monster territories into efficient hunting routes, 
# where the tree automatically balances itself to maintain optimal traversal paths!`,
  ],
  [
    "Binary Search Tree" as PatternKey,
    `# Monster Hunter Binary Search Tree Challenge
# You are organizing monster materials by rarity!

# Test Case 1: Basic Insertion and Search
Input: {
    "operations": [
        {"type": "insert", "material": "Rathalos Scale", "rarity": 3},
        {"type": "insert", "material": "Rathalos Ruby", "rarity": 5},
        {"type": "insert", "material": "Monster Bone", "rarity": 1},
        {"type": "search", "rarity": 3}
    ]
}
Expected Output: "Rathalos Scale"

# Test Case 2: Complex Operations
Input: {
    "operations": [
        {"type": "insert", "material": "Rathalos Scale", "rarity": 3},
        {"type": "insert", "material": "Rathalos Ruby", "rarity": 5},
        {"type": "insert", "material": "Monster Bone", "rarity": 1},
        {"type": "insert", "material": "Rathalos Wing", "rarity": 4},
        {"type": "delete", "rarity": 3},
        {"type": "search", "rarity": 4}
    ]
}
Expected Output: "Rathalos Wing"

# Monster Hunter Tip:
# Like organizing your material box by rarity for quick access!`,
  ],
  [
    "Trie Operations" as PatternKey,
    `# Monster Hunter Trie Operations Challenge
# You are organizing monster names and information!

# Test Case 1: Basic Insertion and Search
Input: {
    "operations": [
        {"type": "insert", "name": "Rathalos", "info": {"weakness": "Flash", "habitat": "Ancient Forest"}},
        {"type": "insert", "name": "Nergigante", "info": {"weakness": "Dragon", "habitat": "Elder's Recess"}},
        {"type": "search", "name": "Rathalos"}
    ]
}
Expected Output: {"weakness": "Flash", "habitat": "Ancient Forest"}

# Monster Hunter Tip:
# Like having a quick reference guide for monster information!`,
  ],
  [
    "Kosaraju's Algorithm" as PatternKey,
    `# Monster Hunter Kosaraju's Algorithm Challenge

# Given a map of monster territories with directed paths between them,
# find groups of territories where monsters can freely move between all areas.

# Example input:
territories = {
    'Base Camp': ['Ancient Forest', 'Wildspire Waste'],
    'Ancient Forest': ['Coral Highlands'],
    'Wildspire Waste': ['Rotten Vale'],
    'Coral Highlands': ["Elder's Recess"],
    'Rotten Vale': ["Elder's Recess"],
    "Elder's Recess": ['Coral Highlands', 'Rotten Vale']
}

# Expected output:
# [
#   ['Base Camp'],
#   ['Ancient Forest'],
#   ['Wildspire Waste'],
#   ['Coral Highlands', "Elder's Recess", 'Rotten Vale']
# ]

def find_territory_groups(territories):
    """
    Find strongly connected components in monster territory graph.
    Returns list of territory groups where monsters can freely move.
    """
    # Your solution here
    pass

# Test cases
test_cases = [
    {
        'input': {
            'Base Camp': ['Ancient Forest', 'Wildspire Waste'],
            'Ancient Forest': ['Coral Highlands'],
            'Wildspire Waste': ['Rotten Vale'],
            'Coral Highlands': ["Elder's Recess"],
            'Rotten Vale': ["Elder's Recess"],
            "Elder's Recess": ['Coral Highlands', 'Rotten Vale']
        },
        'expected': [
            ['Base Camp'],
            ['Ancient Forest'],
            ['Wildspire Waste'],
            ['Coral Highlands', "Elder's Recess", 'Rotten Vale']
        ]
    },
    {
        'input': {
            'Camp 1': ['Area A', 'Area B'],
            'Area A': ['Area B'],
            'Area B': ['Area A'],
            'Area C': ['Area D'],
            'Area D': ['Area E'],
            'Area E': ['Area C']
        },
        'expected': [
            ['Camp 1'],
            ['Area A', 'Area B'],
            ['Area C', 'Area D', 'Area E']
        ]
    }
]

# Run tests
for i, test in enumerate(test_cases, 1):
    result = find_territory_groups(test['input'])
    expected = test['expected']
    print(f'Test case {i}:')
    print(f'Input: {test["input"]}')
    print(f'Expected: {expected}')
    print(f'Got: {result}')
    print(f'Passed: {sorted(map(sorted, result)) == sorted(map(sorted, expected))}\\n')`,
  ],
  [
    "Matrix Spiral Recursive" as PatternKey,
    `# Monster Hunter Matrix Spiral Recursive Challenge
# You are traversing a territory map in spiral order (recursively)!

# Test Case 1: Basic Spiral Traversal
Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like circling a monster's lair inwards!`,
  ],
  [
    "Matrix Spiral Traversal" as PatternKey,
    `# Monster Hunter Matrix Spiral Traversal Challenge
# You are traversing a territory map in spiral order!

# Test Case 1: Basic Spiral Traversal
Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like circling a monster's lair!`,
  ],
  [
    "Matrix Traversal" as PatternKey,
    `# Monster Hunter Matrix Traversal Challenge
# You are traversing a monster territory map!

# Test Case 1: Basic Traversal
Input: [[1, 2], [3, 4]]
Expected Output: [1, 2, 3, 4]

# Monster Hunter Tip:
# Like exploring every part of a territory!`,
  ],
  [
    "Matrix Traversal Recursive" as PatternKey,
    `# Monster Hunter Matrix Traversal Recursive Challenge
# You are recursively traversing a monster territory map!

# Test Case 1: Basic Recursive Traversal
Input: [[1, 2], [3, 4]]
Expected Output: [1, 2, 3, 4]

# Monster Hunter Tip:
# Like exploring every part of a territory using recursion!`,
  ],
  [
    "Maximum Bipartite Matching" as PatternKey,
    `# Monster Hunter Maximum Bipartite Matching Challenge
# You are assigning hunters to monsters for maximum efficiency!

# Test Case 1: Basic Matching
Input: {
    "hunters": ["A", "B"],
    "monsters": ["X", "Y"],
    "edges": [["A", "X"], ["A", "Y"], ["B", "Y"]]
}
Expected Output: [["A", "X"], ["B", "Y"]]

# Monster Hunter Tip:
# Like pairing hunters and monsters for the best results!`,
  ],
  [
    "Memoization" as PatternKey,
    `# Monster Hunter Memoization Challenge
# You are optimizing your hunting strategies!

# Test Case 1: Basic Strategy Caching
Input: {
    "function": "calculate_damage",
    "parameters": {
        "weapon": "Great Sword",
        "monster": "Rathalos",
        "hit_zone": "Head"
    }
}
Expected Output: 120

# Monster Hunter Tip:
# Like remembering the most effective strategies for each monster!`,
  ],
  [
    "Merge Sort" as PatternKey,
    `# Monster Hunter Merge Sort Challenge
# You are organizing monster territories by size!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Monster Hunter Tip:
# Like efficiently organizing your territory map by size!`,
  ],
  [
    "Monotonic Queue" as PatternKey,
    `# Monster Hunter Monotonic Queue Challenge
# You are tracking monster strength levels!

# Test Case 1: Basic Strength Tracking
Input: {
    "strength_levels": [1, 3, -1, -3, 5, 3, 6, 7],
    "window_size": 3
}
Expected Output: [3, 3, 5, 5, 6, 7]

# Monster Hunter Tip:
# Like tracking the strongest monsters in a sliding window!`,
  ],
  [
    "Monotonic Stack" as PatternKey,
    `# Monster Hunter Monotonic Stack Challenge
# You are tracking monster strength levels!

# Test Case 1: Basic Strength Tracking
Input: [1, 3, -1, -3, 5, 3, 6, 7]
Expected Output: [7, 6, 5, 3, 1]

# Monster Hunter Tip:
# Like tracking the strongest monsters in a stack!`,
  ],
  [
    "Prefix Sums" as PatternKey,
    `# Monster Hunter Prefix Sums Challenge
# You are tracking cumulative resources across territories!

# Test Case 1: Basic Prefix Sums
Input: [3, 1, 4, 2, 5]
Expected Output: [0, 3, 4, 8, 10, 15]

# Monster Hunter Tip:
# Like tracking cumulative resources for quick range queries!`,
  ],
  [
    "Prim's Algorithm" as PatternKey,
    `# Monster Hunter Prim's Algorithm Challenge
# You are building the minimum cost network of monster camps!

# Test Case 1: Basic MST
Input: {
    "edges": [
        {"from": "A", "to": "B", "weight": 1},
        {"from": "B", "to": "C", "weight": 2},
        {"from": "A", "to": "C", "weight": 3}
    ]
}
Expected Output: 3

# Monster Hunter Tip:
# Like connecting all camps with the least cost!`,
  ],
  [
    "Probability DP" as PatternKey,
    `# Monster Hunter Probability DP Challenge
# You are calculating the probability of a successful hunt!

# Test Case 1: Basic Probability
Input: {
    "success_chance": [0.5, 0.7, 0.8]
}
Expected Output: 0.28

# Monster Hunter Tip:
# Like stacking the odds in your favor!`,
  ],
  [
    "Rabin-Karp" as PatternKey,
    `# Monster Hunter Rabin-Karp Challenge
# You are searching for a pattern in a monster's roar!

# Test Case 1: Basic Pattern Search
Input: {
    "text": "abracadabra",
    "pattern": "abra"
}
Expected Output: 0

# Monster Hunter Tip:
# Like quickly finding a pattern in a monster's roar!`,
  ],
  [
    "Recursion" as PatternKey,
    `# Monster Hunter Recursion Challenge
# You are solving a hunt with recursive strategies!

# Test Case 1: Basic Recursion
Input: 5
Expected Output: 120

# Monster Hunter Tip:
# Like breaking down a big hunt into smaller recursive steps!`,
  ],
  [
    "Segment Tree" as PatternKey,
    `# Monster Hunter Segment Tree Challenge
# You are managing monster territory queries efficiently!

# Test Case 1: Basic Range Query
Input: [1, 3, 5, 7, 9, 11], query: [1, 3]
Expected Output: 15

# Monster Hunter Tip:
# Like quickly answering questions about monster territories!`,
  ],
  [
    "Selection Sort" as PatternKey,
    `# Monster Hunter Selection Sort Challenge
# You are selecting the rarest monster materials!

# Test Case 1: Basic Sort
Input: [64, 25, 12, 22, 11]
Expected Output: [11, 12, 22, 25, 64]

# Monster Hunter Tip:
# Like picking the rarest materials one by one!`,
  ],
  [
    "Sieve of Atkin" as PatternKey,
    `# Monster Hunter Sieve of Atkin Challenge
# You are finding all prime monster strengths up to a limit!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like filtering out non-prime monster strengths!`,
  ],
  [
    "Sieve of Eratosthenes" as PatternKey,
    `# Monster Hunter Sieve of Eratosthenes Challenge
# You are finding all prime monster strengths up to a limit!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like filtering out non-prime monster strengths!`,
  ],
  [
    "Sieve of Sundaram" as PatternKey,
    `# Monster Hunter Sieve of Sundaram Challenge
# You are finding all prime monster strengths up to a limit!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like filtering out non-prime monster strengths!`,
  ],
  [
    "Stack Sort" as PatternKey,
    `# Monster Hunter Stack Sort Challenge
# You are sorting monster items using stacks!

# Test Case 1: Basic Stack Sort
Input: [34, 3, 31, 98, 92, 23]
Expected Output: [3, 23, 31, 34, 92, 98]

# Monster Hunter Tip:
# Like using stacks to organize your monster items!`,
  ],
  [
    "String Operations" as PatternKey,
    `# Monster Hunter String Operations Challenge
# You are performing operations on monster names!

# Test Case 1: Basic Concatenation
Input: ["Rathalos", "Nergigante"]
Expected Output: "RathalosNergigante"

# Monster Hunter Tip:
# Like combining monster names for a new species!`,
  ],
  [
    "Strongly Connected Components" as PatternKey,
    `# Monster Hunter Strongly Connected Components Challenge
# You are finding groups of territories where monsters can move freely!

# Test Case 1: Basic SCC
Input: {
    "territories": {
        "A": ["B"],
        "B": ["C"],
        "C": ["A"],
        "D": ["E"],
        "E": ["F"],
        "F": ["D"]
    }
}
Expected Output: [["A", "B", "C"], ["D", "E", "F"]]

# Monster Hunter Tip:
# Like finding clusters of territories with free movement!`,
  ],
  [
    "Suffix Array" as PatternKey,
    `# Monster Hunter Suffix Array Challenge
# You are indexing monster names for fast lookup!

# Test Case 1: Basic Suffix Array
Input: "banana"
Expected Output: [5, 3, 1, 0, 4, 2]

# Monster Hunter Tip:
# Like creating a quick index for monster names!`,
  ],
  [
    "Suffix Tree" as PatternKey,
    `# Monster Hunter Suffix Tree Challenge
# You are building a tree of monster name suffixes!

# Test Case 1: Basic Suffix Tree
Input: "banana"
Expected Output: "Tree with all suffixes of 'banana'"

# Monster Hunter Tip:
# Like mapping all possible endings of a monster's name!`,
  ],
  [
    "Ternary Search" as PatternKey,
    `# Monster Hunter Ternary Search Challenge
# You are searching for the optimal monster hunting spot!

# Test Case 1: Basic Ternary Search
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: 7
Expected Output: 6

# Monster Hunter Tip:
# Like narrowing down the best spot to hunt!`,
  ],
  [
    "Test Data" as PatternKey,
    `# Monster Hunter Test Data Challenge
# You are testing your monster hunting strategies!

# Test Case 1: Basic Test
Input: [1, 2, 3]
Expected Output: [1, 2, 3]

# Monster Hunter Tip:
# Like running a test hunt before the real thing!`,
  ],
  [
    "Topological Sort" as PatternKey,
    `# Monster Hunter Topological Sort Challenge
# You are ordering monster hunts based on prerequisites!

# Test Case 1: Basic Topological Sort
Input: {
    "quests": [
        {"name": "Hunt A", "prerequisites": []},
        {"name": "Hunt B", "prerequisites": ["Hunt A"]},
        {"name": "Hunt C", "prerequisites": ["Hunt B"]}
    ]
}
Expected Output: ["Hunt A", "Hunt B", "Hunt C"]

# Monster Hunter Tip:
# Like planning your hunts in the right order!`,
  ],
  [
    "Tree" as PatternKey,
    `# Monster Hunter Tree Challenge
# You are organizing monster territories in a tree structure!

# Test Case 1: Basic Tree Traversal
Input: {
    "tree": {
        "value": "Base Camp",
        "children": [
            {"value": "Ancient Forest"},
            {"value": "Wildspire Waste"}
        ]
    }
}
Expected Output: ["Base Camp", "Ancient Forest", "Wildspire Waste"]

# Monster Hunter Tip:
# Like exploring all branches of monster territories!`,
  ],
  [
    "Tree (Dynamic Programming)" as PatternKey,
    `# Monster Hunter Tree (Dynamic Programming) Challenge
# You are optimizing hunts on a tree of monster territories!

# Test Case 1: Basic Tree (Dynamic Programming)
Input: {
    "tree": {
        "value": 1,
        "children": [
            {"value": 2},
            {"value": 3}
        ]
    }
}
Expected Output: 4

# Monster Hunter Tip:
# Like using dynamic programming to optimize tree hunts!`,
  ],
  [
    "Two Pointers" as PatternKey,
    `# Monster Hunter Two Pointers Challenge
# You are finding pairs of monsters that meet a certain criteria!

# Test Case 1: Basic Two Pointers
Input: [1, 2, 3, 4, 5, 6], target: 7
Expected Output: [[0, 5], [1, 4], [2, 3]]

# Monster Hunter Tip:
# Like using two hunters to find the perfect pair!`,
  ],
  [
    "Two Sum" as PatternKey,
    `# Monster Hunter Two Sum Challenge
# You are finding pairs of materials that combine to make a weapon!

# Test Case 1: Basic Material Pair
Input: {
    "materials": [2, 7, 11, 15],
    "target": 9
}
Expected Output: [0, 1]

# Monster Hunter Tip:
# Like finding the right combination of materials for weapon crafting!`,
  ],
  [
    "Two Sum Dictionary" as PatternKey,
    `# Monster Hunter Two Sum Dictionary Challenge
# You are finding pairs of materials that combine to make a weapon!

# Test Case 1: Basic Material Pair
Input: {
    "materials": [2, 7, 11, 15],
    "target": 9
}
Expected Output: [0, 1]

# Monster Hunter Tip:
# Like finding the right combination of materials for weapon crafting!`,
  ],
  [
    "Two Sum Two Pointers" as PatternKey,
    `# Monster Hunter Two Sum Two Pointers Challenge
# You are finding pairs of materials that combine to make a weapon!

# Test Case 1: Basic Material Pair
Input: {
    "materials": [2, 7, 11, 15],
    "target": 9
}
Expected Output: [0, 1]

# Monster Hunter Tip:
# Like finding the right combination of materials for weapon crafting!`,
  ],
  [
    "Union Find" as PatternKey,
    `# Monster Hunter Union Find Challenge
# You are grouping monster territories into connected components!

# Test Case 1: Basic Union Find
Input: {
    "territories": ["A", "B", "C", "D"],
    "connections": [["A", "B"], ["C", "D"]]
}
Expected Output: [["A", "B"], ["C", "D"]]

# Monster Hunter Tip:
# Like grouping territories that are connected!`,
  ],
  [
    "Z Algorithm" as PatternKey,
    `# Monster Hunter Z Algorithm Challenge
# You are searching for a monster pattern in a string!

# Test Case 1: Basic Z Algorithm
Input: {
    "text": "abxabcabcaby",
    "pattern": "abcaby"
}
Expected Output: 6

# Monster Hunter Tip:
# Like quickly finding a monster's pattern in a string!`,
  ],
  [
    "Binary Search" as PatternKey,
    `# Monster Hunter Binary Search Challenge
# You are searching for a rare monster material in a sorted inventory!

# Test Case 1: Basic Search
Input: { materials: ["Bone", "Claw", "Fang", "Gem", "Scale"], target: "Gem" }
Expected Output: 3

# Monster Hunter Tip:
# Like quickly finding a rare material in your sorted inventory!`,
  ],
  [
    "Dynamic Programming" as PatternKey,
    `# Monster Hunter Dynamic Programming Challenge
# You are planning the most efficient hunting route!

# Test Case 1: Max Reward Path
Input: { rewards: [2, 7, 9, 3, 1] }
Expected Output: 12

# Monster Hunter Tip:
# Like optimizing your hunt for maximum rewards!`,
  ],
  [
    "BFS" as PatternKey,
    `# Monster Hunter BFS Challenge
# You are exploring all reachable territories from your base camp!

# Test Case 1: Territory Exploration
Input: { map: { "Base Camp": ["Forest", "Desert"], "Forest": ["Lake"], "Desert": [], "Lake": [] }, start: "Base Camp" }
Expected Output: ["Base Camp", "Forest", "Desert", "Lake"]

# Monster Hunter Tip:
# Like exploring every territory layer by layer!`,
  ],
  [
    "DFS" as PatternKey,
    `# Monster Hunter DFS Challenge
# You are tracking a monster deep into the territory!

# Test Case 1: Deepest Path
Input: { map: { "Base Camp": ["Forest", "Desert"], "Forest": ["Lake"], "Desert": [], "Lake": [] }, start: "Base Camp" }
Expected Output: ["Base Camp", "Forest", "Lake", "Desert"]

# Monster Hunter Tip:
# Like following a monster's trail as deep as it goes!`,
  ],
  [
    "Greedy" as PatternKey,
    `# Monster Hunter Greedy Challenge
# You are collecting the most valuable loot in the shortest time!

# Test Case 1: Loot Selection
Input: { loots: [{value: 10, time: 2}, {value: 5, time: 1}, {value: 15, time: 3}], time_limit: 3 }
Expected Output: 15

# Monster Hunter Tip:
# Like always picking the shiniest loot first!`,
  ],
  [
    "Sliding Window" as PatternKey,
    `# Monster Hunter Sliding Window Challenge
# You are tracking monster activity in a moving territory window!

# Test Case 1: Max Activity Window
Input: { activity: [1, 3, 2, 5, 4], window: 3 }
Expected Output: 11

# Monster Hunter Tip:
# Like watching for monster activity in a specific area!`,
  ],
  [
    "Graph" as PatternKey,
    `# Monster Hunter Graph Challenge
# You are mapping out all monster territories and their connections!

# Test Case 1: Territory Map
Input: { territories: { "A": ["B", "C"], "B": ["D"], "C": [], "D": [] } }
Expected Output: ["A", "B", "C", "D"]

# Monster Hunter Tip:
# Like drawing a map of all monster territories!`,
  ],
  [
    "Heap Implementation" as PatternKey,
    `# Monster Hunter Heap Implementation Challenge
# You are managing a priority queue of monster hunts!

# Test Case 1: Hunt Priorities
Input: [5, 3, 8, 1, 7]
Expected Output: [1, 3, 5, 7, 8]

# Monster Hunter Tip:
# Like always hunting the most urgent monster first!`,
  ],
  [
    "Stack Implementation" as PatternKey,
    `# Monster Hunter Stack Implementation Challenge
# You are tracking your hunting actions in a stack!

# Test Case 1: Action Stack
Input: ["Track", "Scout", "Attack", "Capture"]
Expected Output: ["Capture", "Attack", "Scout", "Track"]

# Monster Hunter Tip:
# Like retracing your steps in reverse order!`,
  ],
  [
    "Queue Implementation" as PatternKey,
    `# Monster Hunter Queue Implementation Challenge
# You are managing a queue of monster hunting requests!

# Test Case 1: Hunt Queue
Input: ["Hunt A", "Hunt B", "Hunt C"]
Expected Output: ["Hunt A", "Hunt B", "Hunt C"]

# Monster Hunter Tip:
# Like processing hunting requests in the order they arrive!`,
  ],
  [
    "Hash Table" as PatternKey,
    `# Monster Hunter Hash Table Challenge
# You are organizing monster data for quick lookup!

# Test Case 1: Monster Lookup
Input: { "Rathalos": "Fire", "Nergigante": "Dragon", "Legiana": "Ice" }, search: "Nergigante"
Expected Output: "Dragon"

# Monster Hunter Tip:
# Like instantly finding a monster's weakness!`,
  ],
  [
    "Backtracking" as PatternKey,
    `# Monster Hunter Backtracking Challenge
# You are finding all possible hunting paths!

# Test Case 1: All Paths
Input: { map: { "Base Camp": ["Forest", "Desert"], "Forest": ["Lake"], "Desert": [], "Lake": [] }, start: "Base Camp", end: "Lake" }
Expected Output: [["Base Camp", "Forest", "Lake"]]

# Monster Hunter Tip:
# Like trying every possible path to catch a monster!`,
  ],
  [
    "Quick Sort" as PatternKey,
    `# Monster Hunter Quick Sort Challenge
# You are sorting monster loot by value!

# Test Case 1: Sort Loot
Input: [12, 4, 5, 3, 8, 7]
Expected Output: [3, 4, 5, 7, 8, 12]

# Monster Hunter Tip:
# Like quickly organizing your loot after a hunt!`,
  ],
  [
    "Binary Search on Answer" as PatternKey,
    `# Monster Hunter Binary Search on Answer Challenge
# You are finding the minimum stamina needed to hunt all monsters!

# Test Case 1: Min Stamina
Input: { monsters: [3, 6, 7, 11], hours: 8 }
Expected Output: 4

# Monster Hunter Tip:
# Like narrowing down the minimum resources needed for a successful hunt!`,
  ],
  [
    "Bit Manipulation" as PatternKey,
    `# Monster Hunter Bit Manipulation Challenge
# You are toggling monster traps using bitwise operations!

# Test Case 1: Trap Toggles
Input: { traps: 5, toggle: 2 }
Expected Output: 7

# Monster Hunter Tip:
# Like flipping switches to set monster traps!`,
  ],
  [
    "State Compression DP" as PatternKey,
    `# Monster Hunter State Compression DP Challenge
# You are optimizing hunts with compressed state tracking!

# Test Case 1: Hunt States
Input: { states: [1, 0, 1, 1], actions: 2 }
Expected Output: 3

# Monster Hunter Tip:
# Like compressing your hunting log for efficiency!`,
  ],
  [
    "Digit DP" as PatternKey,
    `# Monster Hunter Digit DP Challenge
# You are counting monster numbers with special properties!

# Test Case 1: Count Numbers
Input: { max: 20, property: "even" }
Expected Output: 10

# Monster Hunter Tip:
# Like counting all even-numbered monsters in a range!`,
  ],
  [
    "Extended Euclidean" as PatternKey,
    `# Monster Hunter Extended Euclidean Challenge
# You are finding the greatest common divisor of monster strengths!

# Test Case 1: GCD
Input: { a: 30, b: 20 }
Expected Output: 10

# Monster Hunter Tip:
# Like finding the strongest common trait among monsters!`,
  ],
  [
    "Chinese Remainder Theorem" as PatternKey,
    `# Monster Hunter Chinese Remainder Theorem Challenge
# You are synchronizing monster hunts across different territories!

# Test Case 1: Synchronize Hunts
Input: { remainders: [2, 3, 2], moduli: [3, 5, 7] }
Expected Output: 23

# Monster Hunter Tip:
# Like coordinating hunts to happen at the perfect time in every territory!`,
  ],
  [
    "A* Search" as PatternKey,
    `# Monster Hunter A* Search Challenge
# You are finding the optimal path to hunt a monster!

# Test Case 1: Basic Path Finding
Input: {
    "start": "Base Camp",
    "goal": "Monster Lair",
    "territories": {
        "Base Camp": {"Ancient Forest": 2, "Wildspire Waste": 3},
        "Ancient Forest": {"Monster Lair": 4},
        "Wildspire Waste": {"Monster Lair": 2},
        "Monster Lair": {}
    },
    "heuristic": {
        "Base Camp": 4,
        "Ancient Forest": 2,
        "Wildspire Waste": 1,
        "Monster Lair": 0
    }
}
Expected Output: ["Base Camp", "Wildspire Waste", "Monster Lair"]

# Monster Hunter Tip:
# Like finding the quickest path to your target monster!`,
  ],
  [
    "Activity Selection" as PatternKey,
    `# Monster Hunter Activity Selection Challenge
# You are selecting the maximum number of hunts that don't overlap!

# Test Case 1: Basic Hunt Selection
Input: [
    {"start": 1, "end": 4},
    {"start": 3, "end": 5},
    {"start": 0, "end": 6},
    {"start": 5, "end": 7},
    {"start": 3, "end": 8},
    {"start": 5, "end": 9},
    {"start": 6, "end": 10},
    {"start": 8, "end": 11},
    {"start": 8, "end": 12},
    {"start": 2, "end": 13},
    {"start": 12, "end": 14}
]
Expected Output: [
    {"start": 1, "end": 4},
    {"start": 5, "end": 7},
    {"start": 8, "end": 11},
    {"start": 12, "end": 14}
]

# Monster Hunter Tip:
# Like scheduling the maximum number of hunts without overlapping!`,
  ],
  [
    "Articulation Points" as PatternKey,
    `# Monster Hunter Articulation Points Challenge
# You are finding critical territories in the monster network!

# Test Case 1: Basic Territory Analysis
Input: {
    "territories": {
        "Base Camp": ["Ancient Forest", "Wildspire Waste"],
        "Ancient Forest": ["Base Camp", "Coral Highlands"],
        "Wildspire Waste": ["Base Camp", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    }
}
Expected Output: ["Base Camp", "Ancient Forest", "Wildspire Waste"]

# Monster Hunter Tip:
# Like finding the most important territories in your hunting network!`,
  ],
  [
    "Bellman-Ford" as PatternKey,
    `# Monster Hunter Bellman-Ford Challenge
# You are finding the shortest paths to all territories, even with negative distances!

# Test Case 1: Basic Path Finding
Input: {
    "territories": {
        "Base Camp": {"Ancient Forest": 4, "Wildspire Waste": 5},
        "Ancient Forest": {"Coral Highlands": 3},
        "Wildspire Waste": {"Rotten Vale": -2},
        "Coral Highlands": {"Elder's Recess": 2},
        "Rotten Vale": {"Elder's Recess": 1},
        "Elder's Recess": {}
    },
    "start": "Base Camp"
}
Expected Output: {
    "Base Camp": 0,
    "Ancient Forest": 4,
    "Wildspire Waste": 5,
    "Coral Highlands": 7,
    "Rotten Vale": 3,
    "Elder's Recess": 4
}

# Monster Hunter Tip:
# Like finding the shortest paths even when some routes are shortcuts!`,
  ],
  [
    "BFS Linked List" as PatternKey,
    `# Monster Hunter BFS Linked List Challenge
# You are traversing a linked list of monster territories!

# Test Case 1: Basic Traversal
Input: {
    "head": {
        "territory": "Base Camp",
        "next": {
            "territory": "Ancient Forest",
            "next": {
                "territory": "Coral Highlands",
                "next": {
                    "territory": "Elder's Recess",
                    "next": null
                }
            }
        }
    }
}
Expected Output: ["Base Camp", "Ancient Forest", "Coral Highlands", "Elder's Recess"]

# Monster Hunter Tip:
# Like following a chain of territories one by one!`,
  ],
  [
    "B Tree" as PatternKey,
    `# Monster Hunter B Tree Challenge
# You are organizing monster territories in a balanced tree structure!

# Test Case 1: Basic B Tree Operations
Input: {
    "operations": [
        {"type": "insert", "value": 10},
        {"type": "insert", "value": 20},
        {"type": "insert", "value": 30},
        {"type": "insert", "value": 40},
        {"type": "insert", "value": 50},
        {"type": "search", "value": 30}
    ]
}
Expected Output: true

# Monster Hunter Tip:
# Like organizing territories in a balanced way for quick access!`,
  ],
  [
    "Bubble Sort" as PatternKey,
    `# Monster Hunter Bubble Sort Challenge
# You are sorting monster materials by value!

# Test Case 1: Basic Sort
Input: [64, 34, 25, 12, 22, 11, 90]
Expected Output: [11, 12, 22, 25, 34, 64, 90]

# Monster Hunter Tip:
# Like sorting your materials by bubbling up the most valuable ones!`,
  ],
  [
    "Circular Linked List" as PatternKey,
    `# Monster Hunter Circular Linked List Challenge
# You are managing a circular route through monster territories!

# Test Case 1: Basic Circular List
Input: {
    "head": {
        "territory": "Base Camp",
        "next": {
            "territory": "Ancient Forest",
            "next": {
                "territory": "Coral Highlands",
                "next": null
            }
        }
    }
}
Expected Output: ["Base Camp", "Ancient Forest", "Coral Highlands", "Base Camp"]

# Monster Hunter Tip:
# Like patrolling territories in a continuous loop!`,
  ],
  [
    "DFS (Binary Tree)" as PatternKey,
    `# Monster Hunter DFS (Binary Tree) Challenge
# You are exploring a binary tree of monster territories!

# Test Case 1: Basic Tree Traversal
Input: {
    "value": "Base Camp",
    "left": {
        "value": "Ancient Forest",
        "left": {"value": "Rotten Vale", "left": null, "right": null},
        "right": {"value": "Coral Highlands", "left": null, "right": null}
    },
    "right": {
        "value": "Wildspire Waste",
        "left": {"value": "Elder's Recess", "left": null, "right": null},
        "right": null
    }
}
Expected Output: ["Base Camp", "Ancient Forest", "Rotten Vale", "Coral Highlands", "Wildspire Waste", "Elder's Recess"]

# Monster Hunter Tip:
# Like exploring every branch of monster territories!`,
  ],
  [
    "DFS Linked List" as PatternKey,
    `# Monster Hunter DFS Linked List Challenge
# You are traversing a linked list of monster territories!

# Test Case 1: Basic Traversal
Input: {
    "head": {
        "territory": "Base Camp",
        "next": {
            "territory": "Ancient Forest",
            "next": {
                "territory": "Coral Highlands",
                "next": {
                    "territory": "Elder's Recess",
                    "next": null
                }
            }
        }
    }
}
Expected Output: ["Base Camp", "Ancient Forest", "Coral Highlands", "Elder's Recess"]

# Monster Hunter Tip:
# Like following a monster's trail as deep as it goes!`,
  ],
  [
    "Dijkstra's Algorithm" as PatternKey,
    `# Monster Hunter Dijkstra's Challenge
# You are finding the shortest path to hunt a monster!

# Test Case 1: Basic Path Finding
Input: {
    "start": "Base Camp",
    "territories": {
        "Base Camp": {"Ancient Forest": 4, "Wildspire Waste": 5},
        "Ancient Forest": {"Coral Highlands": 3},
        "Wildspire Waste": {"Rotten Vale": 2},
        "Coral Highlands": {"Elder's Recess": 2},
        "Rotten Vale": {"Elder's Recess": 1},
        "Elder's Recess": {}
    }
}
Expected Output: {
    "Base Camp": 0,
    "Ancient Forest": 4,
    "Wildspire Waste": 5,
    "Coral Highlands": 7,
    "Rotten Vale": 7,
    "Elder's Recess": 8
}

# Monster Hunter Tip:
# Like finding the quickest route to your target monster!`,
  ],
  [
    "Divide and Conquer" as PatternKey,
    `# Monster Hunter Divide and Conquer Challenge
# You are breaking down a large hunting territory into smaller parts!

# Test Case 1: Basic Territory Division
Input: {
    "territory": "Ancient Forest",
    "sub_territories": [
        "Upper Forest",
        "Lower Forest",
        "Cave System",
        "Waterfall Area"
    ]
}
Expected Output: [
    ["Upper Forest", "Lower Forest"],
    ["Cave System", "Waterfall Area"]
]

# Monster Hunter Tip:
# Like breaking down a large territory into manageable sections!`,
  ],
  [
    "Coin Change" as PatternKey,
    `# Monster Hunter Coin Change Challenge
# You are finding the minimum number of materials needed for crafting!

# Test Case 1: Basic Material Combination
Input: {
    "materials": [1, 2, 5],
    "target": 11
}
Expected Output: 3

# Monster Hunter Tip:
# Like finding the minimum materials needed for crafting!`,
  ],
  [
    "Dynamic Programming Fibonacci" as PatternKey,
    `# Monster Hunter Dynamic Programming Fibonacci Challenge
# You are calculating monster population growth!

# Test Case 1: Basic Population Growth
Input: 10
Expected Output: 55

# Monster Hunter Tip:
# Like tracking how monster populations grow over time!`,
  ],
  [
    "Dynamic Programming Iterative" as PatternKey,
    `# Monster Hunter Dynamic Programming Iterative Challenge
# You are optimizing your hunting strategy iteratively!

# Test Case 1: Basic Strategy Optimization
Input: [1, 2, 3, 1]
Expected Output: 4

# Monster Hunter Tip:
# Like improving your hunting strategy step by step!`,
  ],
  [
    "Dynamic Programming Pattern" as PatternKey,
    `# Monster Hunter Dynamic Programming Pattern Challenge
# You are finding patterns in monster behavior!

# Test Case 1: Basic Pattern Recognition
Input: "abcabcabc"
Expected Output: true

# Monster Hunter Tip:
# Like recognizing patterns in monster movements!`,
  ],
  [
    "Exponential Search" as PatternKey,
    `# Monster Hunter Exponential Search Challenge
# You are searching for a rare monster in an unbounded territory!

# Test Case 1: Basic Search
Input: {
    "territories": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    "target": 70
}
Expected Output: 6

# Monster Hunter Tip:
# Like searching for a rare monster in an unknown territory!`,
  ],
  [
    "Fast Fourier Transform" as PatternKey,
    `# Monster Hunter Fast Fourier Transform Challenge
# You are analyzing monster sound patterns!

# Test Case 1: Basic Sound Analysis
Input: [1, 2, 3, 4]
Expected Output: [10, -2+2i, -2, -2-2i]

# Monster Hunter Tip:
# Like analyzing monster roars to identify them!`,
  ],
  [
    "Fenwick Tree" as PatternKey,
    `# Monster Hunter Fenwick Tree Challenge
# You are tracking cumulative resources across territories!

# Test Case 1: Basic Resource Tracking
Input: [1, 2, 3, 4, 5]
Expected Output: [1, 3, 3, 10, 5]

# Monster Hunter Tip:
# Like keeping track of resources in each territory!`,
  ],
  [
    "Fibonacci Search" as PatternKey,
    `# Monster Hunter Fibonacci Search Challenge
# You are searching for a monster in a sorted territory list!

# Test Case 1: Basic Search
Input: {
    "territories": [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100],
    "target": 85
}
Expected Output: 8

# Monster Hunter Tip:
# Like using Fibonacci numbers to search territories efficiently!`,
  ],
  [
    "Floyd Cycle Detection" as PatternKey,
    `# Monster Hunter Floyd Cycle Detection Challenge
# You are detecting cycles in monster movement patterns!

# Test Case 1: Basic Cycle Detection
# Example: Creating a linked list 1 -> 2 -> 3 -> 4
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)

# Now you can use 'head' as input to your function, e.g.:
result = your_function(head)
Expected Output: false

# Monster Hunter Tip:
# Like detecting if a monster is moving in circles!`,
  ],
  [
    "Floyd-Warshall Algorithm" as PatternKey,
    `# Monster Hunter Floyd-Warshall Algorithm Challenge
# You are finding the shortest paths between all territories!

# Test Case 1: Basic Path Finding
Input: {
    "territories": [
        [0, 5, float('inf'), 10],
        [float('inf'), 0, 3, float('inf')],
        [float('inf'), float('inf'), 0, 1],
        [float('inf'), float('inf'), float('inf'), 0]
    ]
}
Expected Output: [
    [0, 5, 8, 9],
    [float('inf'), 0, 3, 4],
    [float('inf'), float('inf'), 0, 1],
    [float('inf'), float('inf'), float('inf'), 0]
]

# Monster Hunter Tip:
# Like finding the shortest paths between all territories at once!`,
  ],
  [
    "Fractional Knapsack" as PatternKey,
    `# Monster Hunter Fractional Knapsack Challenge
# You are maximizing the value of materials in your limited inventory!

# Test Case 1: Basic Material Selection
Input: {
    "materials": [
        {"value": 60, "weight": 10},
        {"value": 100, "weight": 20},
        {"value": 120, "weight": 30}
    ],
    "capacity": 50
}
Expected Output: 240

# Monster Hunter Tip:
# Like choosing the most valuable materials that fit in your bag!`,
  ],
  [
    "Grid Traversal" as PatternKey,
    `# Monster Hunter Grid Traversal Challenge
# You are exploring a grid of monster territories!

# Test Case 1: Basic Grid Exploration
Input: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like exploring every part of a territory grid!`,
  ],
  [
    "Heap Sort" as PatternKey,
    `# Monster Hunter Heap Sort Challenge
# You are sorting monster materials by value!

# Test Case 1: Basic Sort
Input: [12, 11, 13, 5, 6, 7]
Expected Output: [5, 6, 7, 11, 12, 13]

# Monster Hunter Tip:
# Like organizing your materials in a heap for quick access!`,
  ],
  [
    "Huffman Coding" as PatternKey,
    `# Monster Hunter Huffman Coding Challenge
# You are compressing monster data for efficient storage!

# Test Case 1: Basic Compression
Input: "Rathalos"
Expected Output: {
    "R": "0",
    "a": "10",
    "t": "110",
    "h": "1110",
    "l": "1111",
    "o": "1100",
    "s": "1101"
}

# Monster Hunter Tip:
# Like compressing monster data to save space!`,
  ],
  [
    "Insertion Sort" as PatternKey,
    `# Monster Hunter Insertion Sort Challenge
# You are sorting monster materials as you collect them!

# Test Case 1: Basic Sort
Input: [12, 11, 13, 5, 6]
Expected Output: [5, 6, 11, 12, 13]

# Monster Hunter Tip:
# Like sorting materials as you pick them up!`,
  ],
  [
    "Interpolation Search" as PatternKey,
    `# Monster Hunter Interpolation Search Challenge
# You are searching for a monster in a uniformly distributed territory!

# Test Case 1: Basic Search
Input: {
    "territories": [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47],
    "target": 18
}
Expected Output: 4

# Monster Hunter Tip:
# Like estimating where to find a monster based on territory distribution!`,
  ],
  [
    "Job Scheduling" as PatternKey,
    `# Monster Hunter Job Scheduling Challenge
# You are scheduling monster hunts for maximum rewards!

# Test Case 1: Basic Hunt Scheduling
Input: [
    {"start": 1, "end": 3, "reward": 5},
    {"start": 2, "end": 5, "reward": 6},
    {"start": 4, "end": 6, "reward": 5},
    {"start": 6, "end": 7, "reward": 4},
    {"start": 5, "end": 8, "reward": 11},
    {"start": 7, "end": 9, "reward": 2}
]
Expected Output: 17

# Monster Hunter Tip:
# Like scheduling hunts to maximize your rewards!`,
  ],
  [
    "Jump Search" as PatternKey,
    `# Monster Hunter Jump Search Challenge
# You are searching for a monster in a sorted territory list!

# Test Case 1: Basic Search
Input: {
    "territories": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
    "target": 55
}
Expected Output: 10

# Monster Hunter Tip:
# Like jumping through territories to find your target quickly!`,
  ],
  [
    "Kadane's Algorithm" as PatternKey,
    `# Monster Hunter Kadane's Algorithm Challenge
# You are finding the most profitable sequence of hunts!

# Test Case 1: Basic Profit Analysis
Input: [-2, -3, 4, -1, -2, 1, 5, -3]
Expected Output: 7

# Monster Hunter Tip:
# Like finding the most profitable sequence of hunts!`,
  ],
  [
    "Knuth-Morris-Pratt" as PatternKey,
    `# Monster Hunter Knuth-Morris-Pratt Challenge
# You are searching for a monster pattern in a territory!

# Test Case 1: Basic Pattern Search
Input: {
    "text": "ABABDABACDABABCABAB",
    "pattern": "ABABCABAB"
}
Expected Output: 10

# Monster Hunter Tip:
# Like finding a monster's movement pattern in territory data!`,
  ],
  [
    "Kruskal's Algorithm" as PatternKey,
    `# Monster Hunter Kruskal's Algorithm Challenge
# You are building the minimum cost network of monster camps!

# Test Case 1: Basic MST
Input: {
    "edges": [
        {"from": "A", "to": "B", "weight": 1},
        {"from": "B", "to": "C", "weight": 2},
        {"from": "A", "to": "C", "weight": 3}
    ]
}
Expected Output: [
    {"from": "A", "to": "B", "weight": 1},
    {"from": "B", "to": "C", "weight": 2}
]

# Monster Hunter Tip:
# Like connecting all camps with the least cost!`,
  ],
  [
    "Linear Search" as PatternKey,
    `# Monster Hunter Linear Search Challenge
# You are searching for a monster in a territory list!

# Test Case 1: Basic Search
Input: {
    "territories": [10, 20, 80, 30, 60, 50, 110, 100, 130, 170],
    "target": 110
}
Expected Output: 6

# Monster Hunter Tip:
# Like checking each territory one by one!`,
  ],
  [
    "Linked List" as PatternKey,
    `# Monster Hunter Linked List Challenge
# You are managing a chain of monster territories!

# Test Case 1: Basic List Operations
Input: {
    "operations": [
        {"type": "insert", "value": 1},
        {"type": "insert", "value": 2},
        {"type": "insert", "value": 3},
        {"type": "delete", "value": 2}
    ]
}
Expected Output: [1, 3]

# Monster Hunter Tip:
# Like managing a chain of connected territories!`,
  ],
  [
    "Lowest Common Ancestor" as PatternKey,
    `# Monster Hunter Lowest Common Ancestor Challenge
# You are finding the common meeting point for two territories!

# Test Case 1: Basic LCA
Input: {
    "tree": {
        "value": "Base Camp",
        "left": {
            "value": "Ancient Forest",
            "left": {"value": "Rotten Vale", "left": null, "right": null},
            "right": {"value": "Coral Highlands", "left": null, "right": null}
        },
        "right": {
            "value": "Wildspire Waste",
            "left": {"value": "Elder's Recess", "left": null, "right": null},
            "right": null
        }
    },
    "node1": "Rotten Vale",
    "node2": "Coral Highlands"
}
Expected Output: "Ancient Forest"

# Monster Hunter Tip:
# Like finding the best meeting point for two hunting parties!`,
  ],
  [
    "Manacher's Algorithm" as PatternKey,
    `# Monster Hunter Manacher's Algorithm Challenge
# You are finding the longest palindromic monster name!

# Test Case 1: Basic Palindrome
Input: "Rathalos"
Expected Output: "ala"

# Monster Hunter Tip:
# Like finding symmetrical patterns in monster names!`,
  ],
  [
    "Matrix Chain Multiplication" as PatternKey,
    `# Monster Hunter Matrix Chain Multiplication Challenge
# You are optimizing the order of territory operations!

# Test Case 1: Basic Chain
Input: [10, 20, 30, 40, 30]
Expected Output: 30000

# Monster Hunter Tip:
# Like finding the most efficient order of territory operations!`,
  ],
  [
    "Matrix Exponentiation" as PatternKey,
    `# Monster Hunter Matrix Exponentiation Challenge
# You are calculating territory growth patterns!

# Test Case 1: Basic Exponentiation
Input: {
    "matrix": [[1, 1], [1, 0]],
    "power": 5
}
Expected Output: [[8, 5], [5, 3]]

# Monster Hunter Tip:
# Like predicting how territories will grow over time!`,
  ],
  [
    "Binary Indexed Tree" as PatternKey,
    `# Monster Hunter Binary Indexed Tree Challenge
# You are tracking resources across territories!

# Test Case 1: Basic Resource Tracking
Input: {
    "territory_resources": [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9],
    "queries": [
        {"type": "sum", "range": [0, 5]},
        {"type": "update", "index": 3, "value": 6},
        {"type": "sum", "range": [0, 5]}
    ]
}
Expected Output: [12, null, 17]

# Monster Hunter Tip:
# Like efficiently tracking and updating resources across territories!`,
  ],
  [
    "Bitwise DP" as PatternKey,
    `# Monster Hunter Bitwise DP Challenge
# You are tracking monster states efficiently!

# Test Case 1: Basic State Tracking
Input: {
    "monster_states": [1, 0, 1, 1, 0],
    "target_state": 3
}
Expected Output: 3

# Monster Hunter Tip:
# Like tracking monster states using bitwise operations!`,
  ],
  [
    "Bucket Sort" as PatternKey,
    `# Monster Hunter Bucket Sort Challenge
# You are organizing monsters by size!

# Test Case 1: Basic Size Organization
Input: {
    "monster_sizes": [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434],
    "num_buckets": 4
}
Expected Output: [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]

# Monster Hunter Tip:
# Like organizing monsters by size for efficient hunting!`,
  ],
  [
    "Counting Sort" as PatternKey,
    `# Monster Hunter Counting Sort Challenge
# You are organizing monsters by rarity!

# Test Case 1: Basic Rarity Organization
Input: {
    "monster_rarities": [2, 5, 3, 0, 2, 3, 0, 3],
    "max_rarity": 5
}
Expected Output: [0, 0, 2, 2, 3, 3, 3, 5]

# Monster Hunter Tip:
# Like organizing monsters by rarity level!`,
  ],
  [
    "DFS Graph" as PatternKey,
    `# Monster Hunter DFS Graph Challenge
# You are exploring connected territories!

# Test Case 1: Basic Territory Exploration
Input: {
    "territory_graph": {
        "Base Camp": ["Ancient Forest", "Wildspire Waste"],
        "Ancient Forest": ["Coral Highlands"],
        "Wildspire Waste": ["Rotten Vale"],
        "Coral Highlands": ["Elder's Recess"],
        "Rotten Vale": ["Elder's Recess"],
        "Elder's Recess": []
    },
    "start": "Base Camp"
}
Expected Output: ["Base Camp", "Ancient Forest", "Coral Highlands", "Elder's Recess", "Wildspire Waste", "Rotten Vale"]

# Monster Hunter Tip:
# Like exploring all connected territories systematically!`,
  ],
  [
    "Doubly Linked List" as PatternKey,
    `# Monster Hunter Doubly Linked List Challenge
# You are managing a chain of territories!

# Test Case 1: Basic Territory Chain
Input: {
    "operations": [
        {"type": "insert", "value": 1, "position": "start"},
        {"type": "insert", "value": 2, "position": "end"},
        {"type": "insert", "value": 3, "position": "end"},
        {"type": "delete", "value": 2},
        {"type": "traverse", "direction": "forward"}
    ]
}
Expected Output: [1, 3]

# Monster Hunter Tip:
# Like managing bidirectional territory connections!`,
  ],
  [
    "Edit Distance" as PatternKey,
    `# Monster Hunter Edit Distance Challenge
# You are transforming hunting routes!

# Test Case 1: Basic Route Transformation
Input: {
    "route1": "Ancient Forest -> Coral Highlands",
    "route2": "Ancient Forest -> Rotten Vale -> Coral Highlands"
}
Expected Output: 1

# Monster Hunter Tip:
# Like finding minimum changes needed to transform routes!`,
  ],
  [
    "Fast and Slow Pointers" as PatternKey,
    `# Monster Hunter Fast and Slow Pointers Challenge
# You are detecting monster movement cycles!

# Test Case 1: Basic Cycle Detection
Input: {
    "movement_pattern": [1, 2, 3, 4, 5, 3],
    "pointers": {"fast": 2, "slow": 1}
}
Expected Output: true

# Monster Hunter Tip:
# Like detecting cycles in monster movement patterns!`,
  ],
  [
    "Fibonacci" as PatternKey,
    `# Monster Hunter Fibonacci Challenge
# You are predicting monster population growth!

# Test Case 1: Basic Population Prediction
Input: {
    "generations": 7
}
Expected Output: 13

# Monster Hunter Tip:
# Like predicting monster population growth!`,
  ],
  [
    "Ford-Fulkerson Algorithm" as PatternKey,
    `# Monster Hunter Ford-Fulkerson Algorithm Challenge
# You are optimizing resource flow!

# Test Case 1: Basic Resource Flow
Input: {
    "graph": {
        "Base Camp": {"Ancient Forest": 10, "Wildspire Waste": 5},
        "Ancient Forest": {"Coral Highlands": 7},
        "Wildspire Waste": {"Rotten Vale": 4},
        "Coral Highlands": {"Elder's Recess": 6},
        "Rotten Vale": {"Elder's Recess": 3},
        "Elder's Recess": {}
    },
    "source": "Base Camp",
    "sink": "Elder's Recess"
}
Expected Output: 9

# Monster Hunter Tip:
# Like finding maximum resource flow through territories!`,
  ],
  [
    "Graph Representation" as PatternKey,
    `# Monster Hunter Graph Representation Challenge
# You are mapping territory connections!

# Test Case 1: Basic Territory Map
Input: {
    "territories": ["Base Camp", "Ancient Forest", "Wildspire Waste", "Coral Highlands"],
    "connections": [
        ["Base Camp", "Ancient Forest"],
        ["Base Camp", "Wildspire Waste"],
        ["Ancient Forest", "Coral Highlands"]
    ]
}
Expected Output: {
    "Base Camp": ["Ancient Forest", "Wildspire Waste"],
    "Ancient Forest": ["Base Camp", "Coral Highlands"],
    "Wildspire Waste": ["Base Camp"],
    "Coral Highlands": ["Ancient Forest"]
}

# Monster Hunter Tip:
# Like creating efficient territory connection maps!`,
  ],
  [
    "Hopcroft-Karp's Algorithm" as PatternKey,
    `# Monster Hunter Hopcroft-Karp's Algorithm Challenge
# You are matching hunters to monsters!

# Test Case 1: Basic Matching
Input: {
    "hunters": ["Hunter1", "Hunter2", "Hunter3"],
    "monsters": ["Rathalos", "Diablos", "Nergigante"],
    "compatibility": [
        ["Hunter1", "Rathalos"],
        ["Hunter1", "Diablos"],
        ["Hunter2", "Diablos"],
        ["Hunter2", "Nergigante"],
        ["Hunter3", "Rathalos"],
        ["Hunter3", "Nergigante"]
    ]
}
Expected Output: [
    ["Hunter1", "Rathalos"],
    ["Hunter2", "Diablos"],
    ["Hunter3", "Nergigante"]
]

# Monster Hunter Tip:
# Like finding optimal hunter-monster matches!`,
  ],
  [
    "Inorder Traversal" as PatternKey,
    `# Monster Hunter Inorder Traversal Challenge
# You are exploring territory hierarchy!

# Test Case 1: Basic Territory Exploration
Input: {
    "tree": {
        "value": 1,
        "left": {
            "value": 2,
            "left": {"value": 4},
            "right": {"value": 5}
        },
        "right": {
            "value": 3,
            "left": {"value": 6},
            "right": {"value": 7}
        }
    }
}
Expected Output: [4, 2, 5, 1, 6, 3, 7]

# Monster Hunter Tip:
# Like exploring territory hierarchy systematically!`,
  ],
  [
    "Interval Scheduling" as PatternKey,
    `# Monster Hunter Interval Scheduling Challenge
# You are scheduling hunts efficiently!

# Test Case 1: Basic Hunt Scheduling
Input: {
    "hunts": [
        {"start": 1, "end": 4, "value": 3},
        {"start": 2, "end": 6, "value": 5},
        {"start": 3, "end": 8, "value": 4},
        {"start": 5, "end": 7, "value": 2},
        {"start": 6, "end": 9, "value": 6}
    ]
}
Expected Output: [
    {"start": 1, "end": 4, "value": 3},
    {"start": 5, "end": 7, "value": 2},
    {"start": 6, "end": 9, "value": 6}
]

# Monster Hunter Tip:
# Like scheduling non-overlapping hunts!`,
  ],
  [
    "Kahn's Topological Sort" as PatternKey,
    `# Monster Hunter Kahn's Topological Sort Challenge
# You are ordering hunting tasks!

# Test Case 1: Basic Task Ordering
Input: {
    "tasks": {
        "Gather Supplies": ["Prepare Weapons"],
        "Prepare Weapons": ["Hunt Monster"],
        "Study Monster": ["Hunt Monster"],
        "Hunt Monster": []
    }
}
Expected Output: ["Gather Supplies", "Prepare Weapons", "Study Monster", "Hunt Monster"]

# Monster Hunter Tip:
# Like ordering tasks based on dependencies!`,
  ],
  [
    "Karatsuba Multiplication" as PatternKey,
    `# Monster Hunter Karatsuba Multiplication Challenge
# You are calculating territory areas!

# Test Case 1: Basic Area Calculation
Input: {
    "x": 1234,
    "y": 5678
}
Expected Output: 7006652

# Monster Hunter Tip:
# Like efficiently calculating large territory areas!`,
  ],
  [
    "Lowest Common Ancestor" as PatternKey,
    `# Monster Hunter Lowest Common Ancestor Challenge
# You are finding common monster ancestors!

# Test Case 1: Basic Ancestor Finding
Input: {
    "tree": {
        "value": "Wyvern",
        "left": {
            "value": "Flying Wyvern",
            "left": {"value": "Rathalos"},
            "right": {"value": "Rathian"}
        },
        "right": {
            "value": "Brute Wyvern",
            "left": {"value": "Anjanath"},
            "right": {"value": "Deviljho"}
        }
    },
    "node1": "Rathalos",
    "node2": "Rathian"
}
Expected Output: "Flying Wyvern"

# Monster Hunter Tip:
# Like finding common ancestors of monster species!`,
  ],
  [
    "Palindrome Partitioning" as PatternKey,
    `# Monster Hunter Palindrome Partitioning Challenge
# You are analyzing territory patterns!

# Test Case 1: Basic Pattern Analysis
Input: {
    "territory": "Rathalos"
}
Expected Output: [
    ["R", "a", "t", "h", "a", "l", "o", "s"],
    ["R", "a", "t", "h", "a", "los"],
    ["R", "a", "th", "a", "l", "o", "s"],
    ["R", "a", "th", "a", "los"],
    ["R", "ath", "a", "l", "o", "s"],
    ["R", "ath", "a", "los"],
    ["Ra", "t", "h", "a", "l", "o", "s"],
    ["Ra", "t", "h", "a", "los"],
    ["Ra", "th", "a", "l", "o", "s"],
    ["Ra", "th", "a", "los"],
    ["Rat", "h", "a", "l", "o", "s"],
    ["Rat", "h", "a", "los"]
]

# Monster Hunter Tip:
# Like finding symmetrical patterns in territories!`,
  ],
  [
    "Sparse Table" as PatternKey,
    `# Monster Hunter Sparse Table Challenge
# You are processing territory ranges!

# Test Case 1: Basic Range Processing
Input: {
    "territory_values": [4, 2, 3, 7, 1, 5, 3, 3, 9, 6, 7, 8],
    "queries": [
        {"start": 0, "end": 3},
        {"start": 4, "end": 7},
        {"start": 8, "end": 11}
    ]
}
Expected Output: [7, 5, 9]

# Monster Hunter Tip:
# Like efficiently processing territory ranges!`,
  ],
  [
    "String Hashing" as PatternKey,
    `# Monster Hunter String Hashing Challenge
# You are finding monster name patterns!

# Test Case 1: Basic Pattern Finding
Input: {
    "text": "RathalosRathianRathalos",
    "pattern": "Rathalos"
}
Expected Output: [0, 14]

# Monster Hunter Tip:
# Like efficiently matching monster name patterns!`,
  ],
  [
    "Zigzag Traversal" as PatternKey,
    `# Monster Hunter Zigzag Traversal Challenge
# You are exploring territory levels!

# Test Case 1: Basic Level Exploration
Input: {
    "territory_tree": {
        "value": "Base Camp",
        "left": {
            "value": "Ancient Forest",
            "left": {"value": "Forest Edge"},
            "right": {"value": "Forest Depths"}
        },
        "right": {
            "value": "Wildspire Waste",
            "left": {"value": "Desert Edge"},
            "right": {"value": "Desert Center"}
        }
    }
}
Expected Output: ["Base Camp", "Wildspire Waste", "Ancient Forest", "Forest Edge", "Forest Depths", "Desert Center", "Desert Edge"]

# Monster Hunter Tip:
# Like exploring territory levels in zigzag pattern!`,
  ],
  [
    "Bridges" as PatternKey,
    `# Monster Hunter Bridges Challenge
# You are finding critical connections between territories!

# Test Case 1: Basic Bridge Detection
Input: {
    "territories": {
        "Base Camp": ["Ancient Forest", "Wildspire Waste"],
        "Ancient Forest": ["Base Camp", "Coral Highlands"],
        "Wildspire Waste": ["Base Camp", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    }
}
Expected Output: [
    ["Base Camp", "Ancient Forest"],
    ["Base Camp", "Wildspire Waste"]
]

# Monster Hunter Tip:
# Like finding critical paths that connect territories!`,
  ],
  [
    "Trie" as PatternKey,
    `# Monster Hunter Trie Challenge
# You are implementing a monster name dictionary!

# Test Case 1: Basic Trie Operations
Input: {
    "operations": [
        {"type": "insert", "word": "Rathalos"},
        {"type": "insert", "word": "Rathian"},
        {"type": "insert", "word": "Nergigante"},
        {"type": "search", "word": "Rathalos"},
        {"type": "search", "word": "Rathian"},
        {"type": "search", "word": "Nergigante"},
        {"type": "startsWith", "prefix": "Rath"}
    ]
}
Expected Output: {
    "search_results": [true, true, true],
    "prefix_results": ["Rathalos", "Rathian"]
}

# Monster Hunter Tip:
# Like efficiently storing and searching monster names!`,
  ],
  [
    "Null Pattern" as PatternKey,
    `# Monster Hunter Null Pattern Challenge
# This is a placeholder pattern for testing and fallback purposes.

# Test Case 1: Basic Test
Input: null
Expected Output: null

# Monster Hunter Tip:
# Like a training ground for new hunters!`,
  ],
  [
    "Shell Sort" as PatternKey,
    `# Monster Hunter Shell Sort Challenge
# You are organizing monsters by their power levels using gaps!

# Test Case 1: Basic Sort
Input: [23, 29, 15, 19, 31, 7, 9, 5, 2]
Expected Output: [2, 5, 7, 9, 15, 19, 23, 29, 31]

# Test Case 2: Already Sorted
Input: [1, 2, 3, 4, 5]
Expected Output: [1, 2, 3, 4, 5]

# Test Case 3: Reverse Sorted
Input: [5, 4, 3, 2, 1]
Expected Output: [1, 2, 3, 4, 5]

# Monster Hunter Tip:
# Like organizing monsters in groups of decreasing size until the entire territory is sorted!`,
  ],
]);
