import { PatternKey } from "./types.ts";

export const monsterHunterTestData = new Map<PatternKey, string>([
  [
    "Rotate Matrix" as PatternKey,
    `# Monster Hunter Rotate Matrix Challenge
# You are rotating a territory map to find the best hunting angle!

# Test Case 1: Basic Rotation
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Expected Output: [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

# Monster Hunter Tip:
# Like rotating your map to find the best approach angle!`,
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
    "Null Pattern" as PatternKey,
    `# Monster Hunter Null Pattern Challenge
# You are handling empty territories safely!

# Test Case 1: Empty Territory
Input: null
Expected Output: "No monsters in this territory"

# Monster Hunter Tip:
# Like checking if a territory is empty before hunting!`,
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
    "Kosaraju" as PatternKey,
    `# Monster Hunter Kosaraju Challenge

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
    "Prim" as PatternKey,
    `# Monster Hunter Prim Challenge
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
    "String" as PatternKey,
    `# Monster Hunter String Challenge
# You are manipulating monster names and descriptions!

# Test Case 1: Basic String Reverse
Input: "Rathalos"
Expected Output: "solahthaR"

# Monster Hunter Tip:
# Like reversing a monster's name for a secret code!`,
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
    "Tree DP" as PatternKey,
    `# Monster Hunter Tree DP Challenge
# You are optimizing hunts on a tree of monster territories!

# Test Case 1: Basic Tree DP
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
    "Two Sum Dict" as PatternKey,
    `# Monster Hunter Two Sum Dict Challenge
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
]);
