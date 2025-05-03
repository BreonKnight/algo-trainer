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
    `# Monster Hunter Trie Challenge
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

# Test Case 2: Prefix Search
Input: {
    "operations": [
        {"type": "insert", "name": "Rathalos", "info": {"weakness": "Flash", "habitat": "Ancient Forest"}},
        {"type": "insert", "name": "Rathian", "info": {"weakness": "Poison", "habitat": "Wildspire Waste"}},
        {"type": "prefix_search", "prefix": "Rath"}
    ]
}
Expected Output: ["Rathalos", "Rathian"]

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
    "Monotonic Queue" as PatternKey,
    `# Monster Hunter Monotonic Queue Challenge
# You are tracking monster strength levels!

# Test Case 1: Basic Strength Tracking
Input: {
    "strength_levels": [1, 3, -1, -3, 5, 3, 6, 7],
    "window_size": 3
}
Expected Output: [3, 3, 5, 5, 6, 7]

# Test Case 2: Complex Strength Tracking
Input: {
    "strength_levels": [4, 2, 1, 3, 5, 2, 4, 6],
    "window_size": 4
}
Expected Output: [4, 3, 5, 5, 6]

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

# Test Case 2: Complex Strength Tracking
Input: [4, 2, 1, 3, 5, 2, 4, 6]
Expected Output: [6, 5, 4, 2, 1]

# Monster Hunter Tip:
# Like tracking the strongest monsters in a stack!`,
  ],
  [
    "Heap Implementation" as PatternKey,
    `# Monster Hunter Heap Challenge
# You are managing quest priorities!

# Test Case 1: Basic Quest Management
Input: {
    "operations": [
        {"type": "insert", "quest": "Hunt Rathalos", "urgency": 3},
        {"type": "insert", "quest": "Hunt Nergigante", "urgency": 5},
        {"type": "insert", "quest": "Hunt Diablos", "urgency": 2},
        {"type": "extract_max"}
    ]
}
Expected Output: {"quest": "Hunt Nergigante", "urgency": 5}

# Test Case 2: Complex Quest Management
Input: {
    "operations": [
        {"type": "insert", "quest": "Hunt Rathalos", "urgency": 3},
        {"type": "insert", "quest": "Hunt Nergigante", "urgency": 5},
        {"type": "insert", "quest": "Hunt Diablos", "urgency": 2},
        {"type": "extract_max"},
        {"type": "insert", "quest": "Hunt Teostra", "urgency": 4},
        {"type": "extract_max"}
    ]
}
Expected Output: {"quest": "Hunt Teostra", "urgency": 4}

# Monster Hunter Tip:
# Like managing your quest board by priority!`,
  ],
  [
    "Stack Implementation" as PatternKey,
    `# Monster Hunter Stack Challenge
# You are managing your item loadout!

# Test Case 1: Basic Item Management
Input: {
    "operations": [
        {"type": "push", "item": "Mega Potion"},
        {"type": "push", "item": "First Aid Med"},
        {"type": "push", "item": "Antidote"},
        {"type": "pop"}
    ]
}
Expected Output: "Antidote"

# Test Case 2: Complex Item Management
Input: {
    "operations": [
        {"type": "push", "item": "Mega Potion"},
        {"type": "push", "item": "First Aid Med"},
        {"type": "pop"},
        {"type": "push", "item": "Ration"},
        {"type": "pop"},
        {"type": "peek"}
    ]
}
Expected Output: "Mega Potion"

# Monster Hunter Tip:
# Like managing your item pouch in the heat of battle!`,
  ],
  [
    "Queue Implementation" as PatternKey,
    `# Monster Hunter Queue Challenge
# You are managing hunt requests!

# Test Case 1: Basic Request Management
Input: {
    "operations": [
        {"type": "enqueue", "quest": "Hunt Rathalos"},
        {"type": "enqueue", "quest": "Hunt Diablos"},
        {"type": "enqueue", "quest": "Hunt Nergigante"},
        {"type": "dequeue"}
    ]
}
Expected Output: "Hunt Rathalos"

# Test Case 2: Complex Request Management
Input: {
    "operations": [
        {"type": "enqueue", "quest": "Hunt Rathalos"},
        {"type": "enqueue", "quest": "Hunt Diablos"},
        {"type": "dequeue"},
        {"type": "enqueue", "quest": "Hunt Teostra"},
        {"type": "dequeue"},
        {"type": "peek"}
    ]
}
Expected Output: "Hunt Teostra"

# Monster Hunter Tip:
# Like managing the quest board in order of arrival!`,
  ],
  [
    "Hash Table" as PatternKey,
    `# Monster Hunter Hash Table Challenge
# You are creating a monster field guide!

# Test Case 1: Basic Monster Info
Input: {
    "operations": [
        {"type": "put", "monster": "Rathalos", "info": {"weakness": ["Flash", "Dragon"], "materials": ["Scale", "Ruby", "Wing"]}},
        {"type": "put", "monster": "Nergigante", "info": {"weakness": ["Thunder", "Dragon"], "materials": ["Spike", "Gem", "Horn"]}},
        {"type": "get", "monster": "Rathalos"}
    ]
}
Expected Output: {"weakness": ["Flash", "Dragon"], "materials": ["Scale", "Ruby", "Wing"]}

# Test Case 2: Complex Monster Info
Input: {
    "operations": [
        {"type": "put", "monster": "Rathalos", "info": {"weakness": ["Flash", "Dragon"], "materials": ["Scale", "Ruby", "Wing"]}},
        {"type": "put", "monster": "Nergigante", "info": {"weakness": ["Thunder", "Dragon"], "materials": ["Spike", "Gem", "Horn"]}},
        {"type": "put", "monster": "Teostra", "info": {"weakness": ["Water", "Dragon"], "materials": ["Scale", "Gem", "Wing"]}},
        {"type": "get", "monster": "Teostra"}
    ]
}
Expected Output: {"weakness": ["Water", "Dragon"], "materials": ["Scale", "Gem", "Wing"]}

# Monster Hunter Tip:
# Like having instant access to monster information in your field guide!`,
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
    "Quick Sort" as PatternKey,
    `# Monster Hunter Quick Sort Challenge
# You are organizing monster materials by rarity!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Test Case 2: Duplicate Rarities
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6, 5, 3]
Expected Output: [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9]

# Monster Hunter Tip:
# Like quickly organizing your material box by rarity!`,
  ],
  [
    "Merge Sort" as PatternKey,
    `# Monster Hunter Merge Sort Challenge
# You are organizing monster territories by size!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Test Case 2: Large Territory List
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6, 10, 12, 11, 13, 15, 14]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Monster Hunter Tip:
# Like efficiently organizing your territory map by size!`,
  ],
  [
    "Heap Sort" as PatternKey,
    `# Monster Hunter Heap Sort Challenge
# You are organizing monster quests by difficulty!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Test Case 2: Complex Sort
Input: [15, 3, 8, 2, 7, 1, 9, 4, 6, 10, 12, 11, 13, 14]
Expected Output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Monster Hunter Tip:
# Like organizing your quest board by difficulty level!`,
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

# Test Case 2: Complex Material Pair
Input: {
    "materials": [3, 2, 4, 6, 8],
    "target": 10
}
Expected Output: [1, 3]

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

# Test Case 2: Complex Material Pair
Input: {
    "materials": [3, 2, 4, 6, 8],
    "target": 10
}
Expected Output: [1, 3]

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

# Test Case 2: Complex Material Pair
Input: {
    "materials": [3, 2, 4, 6, 8],
    "target": 10
}
Expected Output: [1, 3]

# Monster Hunter Tip:
# Like finding the right combination of materials for weapon crafting!`,
  ],
  [
    "Prefix Sums" as PatternKey,
    `# Monster Hunter Prefix Sums Challenge

# Test Case 1: Basic Prefix Sums
Input: [3, 1, 4, 2, 5]
Expected Output: [0, 3, 4, 8, 10, 15]

# Test Case 2: Range Sum Query
Input: {
    "array": [3, 1, 4, 2, 5],
    "queries": [
        {"left": 1, "right": 3},  # Sum from index 1 to 3
        {"left": 2, "right": 4}   # Sum from index 2 to 4
    ]
}
Expected Output: [7, 11]  # First query: 1 + 4 + 2 = 7, Second query: 4 + 2 + 5 = 11

# Monster Hunter Tip:
# Like tracking cumulative resources across territories for quick range queries!`,
  ],
  [
    "Lowest Common Ancestor" as PatternKey,
    `# Monster Hunter Lowest Common Ancestor Challenge
# You are finding the lowest common ancestor of two nodes in a binary tree!

# Test Case 1: Basic Ancestor Search
Input: {
    "tree": {
        "root": {
            "value": 3,
            "left": {
                "value": 5,
                "left": {
                    "value": 6
                },
                "right": {
                    "value": 2,
                    "left": {
                        "value": 7
                    },
                    "right": {
                        "value": 4
                    }
                }
            },
            "right": {
                "value": 1,
                "left": {
                    "value": 0
                },
                "right": {
                    "value": 8
                }
            }
        },
        "p": 5,
        "q": 4
    }
}
Expected Output: 5

# Test Case 2: Complex Ancestor Search
Input: {
    "tree": {
        "root": {
            "value": 3,
            "left": {
                "value": 5,
                "left": {
                    "value": 6
                },
                "right": {
                    "value": 2,
                    "left": {
                        "value": 7
                    },
                    "right": {
                        "value": 4
                    }
                }
            },
            "right": {
                "value": 1,
                "left": {
                    "value": 0
                },
                "right": {
                    "value": 8
                }
            }
        },
        "p": 5,
        "q": 1
    }
}
Expected Output: 3

# Monster Hunter Tip:
# Like finding the lowest common ancestor in a binary tree to ensure efficient hunting!`,
  ],
  [
    "Rabin-Karp" as PatternKey,
    `# Monster Hunter Rabin-Karp Challenge
# You are searching for a pattern in a text using the Rabin-Karp algorithm!

# Test Case 1: Basic Pattern Search
Input: {
    "text": "abracadabra",
    "pattern": "abra"
}
Expected Output: 0

# Test Case 2: Complex Pattern Search
Input: {
    "text": "abracadabra",
    "pattern": "dab"
}
Expected Output: 4

# Monster Hunter Tip:
# Like efficiently searching for a pattern in a text using the Rabin-Karp algorithm!`,
  ],
]);
