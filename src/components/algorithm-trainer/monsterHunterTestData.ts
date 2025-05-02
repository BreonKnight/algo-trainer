import { PatternKey } from "./types";

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
    "Graph" as PatternKey,
    `# Monster Hunter Graph Challenge
# You are mapping monster territories and connections!

# Test Case 1: Basic Territory Map
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    },
    "start": "Ancient Forest",
    "end": "Elder's Recess"
}
Expected Output: ["Ancient Forest", "Coral Highlands", "Elder's Recess"]

# Test Case 2: Complex Territory Network
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands", "Rotten Vale"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale", "Elder's Recess"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess", "Hoarfrost Reach"],
        "Rotten Vale": ["Ancient Forest", "Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Wildspire Waste", "Coral Highlands", "Rotten Vale"],
        "Hoarfrost Reach": ["Coral Highlands"]
    },
    "start": "Ancient Forest",
    "end": "Hoarfrost Reach"
}
Expected Output: ["Ancient Forest", "Coral Highlands", "Hoarfrost Reach"]

# Monster Hunter Tip:
# Like planning the most efficient route through monster territories!`,
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

# Test Case 2: Complex Quest List
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6, 10, 12, 11, 13, 15, 14]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Monster Hunter Tip:
# Like organizing your quest board by difficulty level!`,
  ],
  [
    "Bubble Sort" as PatternKey,
    `# Monster Hunter Bubble Sort Challenge
# You are organizing monster materials by value!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Test Case 2: Nearly Sorted
Input: [1, 2, 3, 4, 5, 6, 7, 9, 8]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Monster Hunter Tip:
# Like organizing your material box by value, one swap at a time!`,
  ],
  [
    "Selection Sort" as PatternKey,
    `# Monster Hunter Selection Sort Challenge
# You are organizing monster materials by weight!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Test Case 2: Reverse Order
Input: [9, 8, 7, 6, 5, 4, 3, 2, 1]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Monster Hunter Tip:
# Like selecting the lightest materials first for your inventory!`,
  ],
  [
    "Insertion Sort" as PatternKey,
    `# Monster Hunter Insertion Sort Challenge
# You are organizing monster materials by size!

# Test Case 1: Basic Sort
Input: [5, 3, 8, 2, 7, 1, 9, 4, 6]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Test Case 2: Already Sorted
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Monster Hunter Tip:
# Like organizing your material box one item at a time!`,
  ],
  [
    "Binary Search" as PatternKey,
    `# Monster Hunter Binary Search Challenge
# You are finding a specific monster in your field guide!

# Test Case 1: Basic Search
Input: {
    "monsters": ["Anjanath", "Diablos", "Kushala", "Nergigante", "Rathalos", "Teostra", "Zorah"],
    "target": "Rathalos"
}
Expected Output: 4

# Test Case 2: Monster Not Found
Input: {
    "monsters": ["Anjanath", "Diablos", "Kushala", "Nergigante", "Rathalos", "Teostra", "Zorah"],
    "target": "Fatalis"
}
Expected Output: -1

# Monster Hunter Tip:
# Like quickly finding a monster in your alphabetical field guide!`,
  ],
  [
    "Binary Search on Answer" as PatternKey,
    `# Monster Hunter Binary Search on Answer Challenge
# You are finding the optimal weapon sharpness level!

# Test Case 1: Basic Search
Input: {
    "sharpness_levels": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    "target_damage": 750
}
Expected Output: 7

# Test Case 2: Edge Case
Input: {
    "sharpness_levels": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    "target_damage": 50
}
Expected Output: 0

# Monster Hunter Tip:
# Like finding the perfect sharpness level for maximum damage!`,
  ],
  [
    "Linear Search" as PatternKey,
    `# Monster Hunter Linear Search Challenge
# You are searching for a specific material in your inventory!

# Test Case 1: Basic Search
Input: {
    "materials": ["Rathalos Scale", "Monster Bone", "Nergigante Spike", "Teostra Gem", "Kushala Shell"],
    "target": "Nergigante Spike"
}
Expected Output: 2

# Test Case 2: Material Not Found
Input: {
    "materials": ["Rathalos Scale", "Monster Bone", "Nergigante Spike", "Teostra Gem", "Kushala Shell"],
    "target": "Fatalis Eye"
}
Expected Output: -1

# Monster Hunter Tip:
# Like checking your inventory one item at a time!`,
  ],
  [
    "Sliding Window" as PatternKey,
    `# Monster Hunter Sliding Window Challenge
# You are tracking monster movement patterns!

# Test Case 1: Basic Pattern
Input: {
    "movement": [1, 3, 2, 4, 5, 3, 1, 2, 3, 4],
    "window_size": 3
}
Expected Output: [6, 9, 11, 12, 9, 6, 6, 9]

# Test Case 2: Large Window
Input: {
    "movement": [1, 3, 2, 4, 5, 3, 1, 2, 3, 4],
    "window_size": 5
}
Expected Output: [15, 17, 15, 15, 15, 13]

# Monster Hunter Tip:
# Like tracking a monster's movement pattern over time!`,
  ],
  [
    "Two Pointers" as PatternKey,
    `# Monster Hunter Two Pointers Challenge
# You are finding pairs of compatible armor pieces!

# Test Case 1: Basic Pair
Input: {
    "defense_values": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    "target_defense": 100
}
Expected Output: [[10, 90], [20, 80], [30, 70], [40, 60]]

# Test Case 2: No Pairs
Input: {
    "defense_values": [10, 20, 30, 40, 50],
    "target_defense": 200
}
Expected Output: []

# Monster Hunter Tip:
# Like finding armor pieces that complement each other's defense!`,
  ],
  [
    "Floyd Cycle Detection" as PatternKey,
    `# Monster Hunter Floyd Cycle Detection Challenge
# You are detecting monster movement cycles!

# Test Case 1: Basic Cycle
Input: {
    "movement_pattern": [1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5]
}
Expected Output: {
    "has_cycle": true,
    "cycle_start": 2,
    "cycle_length": 3
}

# Test Case 2: No Cycle
Input: {
    "movement_pattern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
Expected Output: {
    "has_cycle": false,
    "cycle_start": -1,
    "cycle_length": 0
}

# Monster Hunter Tip:
# Like predicting when a monster will repeat its attack pattern!`,
  ],
  [
    "Topological Sort" as PatternKey,
    `# Monster Hunter Topological Sort Challenge
# You are planning the optimal quest completion order!

# Test Case 1: Basic Quest Order
Input: {
    "quests": {
        "Hunt Rathalos": ["Gather Herbs", "Craft Potions"],
        "Hunt Nergigante": ["Hunt Rathalos", "Upgrade Armor"],
        "Gather Herbs": [],
        "Craft Potions": ["Gather Herbs"],
        "Upgrade Armor": ["Hunt Rathalos"]
    }
}
Expected Output: ["Gather Herbs", "Craft Potions", "Hunt Rathalos", "Upgrade Armor", "Hunt Nergigante"]

# Test Case 2: Complex Quest Order
Input: {
    "quests": {
        "Hunt Fatalis": ["Hunt Nergigante", "Hunt Teostra"],
        "Hunt Nergigante": ["Hunt Rathalos", "Upgrade Armor"],
        "Hunt Teostra": ["Hunt Kushala", "Upgrade Weapon"],
        "Hunt Rathalos": ["Gather Herbs"],
        "Hunt Kushala": ["Gather Herbs"],
        "Gather Herbs": [],
        "Upgrade Armor": ["Hunt Rathalos"],
        "Upgrade Weapon": ["Hunt Kushala"]
    }
}
Expected Output: ["Gather Herbs", "Hunt Rathalos", "Upgrade Armor", "Hunt Nergigante", "Hunt Kushala", "Upgrade Weapon", "Hunt Teostra", "Hunt Fatalis"]

# Monster Hunter Tip:
# Like planning the optimal order to complete your quests!`,
  ],
  [
    "A* Search" as PatternKey,
    `# Monster Hunter A* Search Challenge
# You are finding the optimal path through monster territories!

# Test Case 1: Basic Path Finding
Input: {
    "territory_map": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6},
        "Rotten Vale": {"Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Coral Highlands": 6, "Rotten Vale": 3}
    },
    "start": "Ancient Forest",
    "end": "Elder's Recess",
    "heuristic": {
        "Ancient Forest": 6,
        "Wildspire Waste": 5,
        "Coral Highlands": 3,
        "Rotten Vale": 2,
        "Elder's Recess": 0
    }
}
Expected Output: ["Ancient Forest", "Coral Highlands", "Elder's Recess"]

# Test Case 2: Complex Path Finding
Input: {
    "territory_map": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3, "Rotten Vale": 4},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4, "Elder's Recess": 6},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6, "Hoarfrost Reach": 7},
        "Rotten Vale": {"Ancient Forest": 4, "Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Wildspire Waste": 6, "Coral Highlands": 6, "Rotten Vale": 3},
        "Hoarfrost Reach": {"Coral Highlands": 7}
    },
    "start": "Ancient Forest",
    "end": "Hoarfrost Reach",
    "heuristic": {
        "Ancient Forest": 8,
        "Wildspire Waste": 7,
        "Coral Highlands": 3,
        "Rotten Vale": 6,
        "Elder's Recess": 5,
        "Hoarfrost Reach": 0
    }
}
Expected Output: ["Ancient Forest", "Coral Highlands", "Hoarfrost Reach"]

# Monster Hunter Tip:
# Like finding the most efficient path through monster territories!`,
  ],
  [
    "Graph Dijkstra" as PatternKey,
    `# Monster Hunter Dijkstra Challenge
# You are finding the shortest path through monster territories!

# Test Case 1: Basic Path Finding
Input: {
    "territory_map": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6},
        "Rotten Vale": {"Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Coral Highlands": 6, "Rotten Vale": 3}
    },
    "start": "Ancient Forest",
    "end": "Elder's Recess"
}
Expected Output: {
    "path": ["Ancient Forest", "Coral Highlands", "Elder's Recess"],
    "distance": 9
}

# Test Case 2: Complex Path Finding
Input: {
    "territory_map": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3, "Rotten Vale": 4},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4, "Elder's Recess": 6},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6, "Hoarfrost Reach": 7},
        "Rotten Vale": {"Ancient Forest": 4, "Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Wildspire Waste": 6, "Coral Highlands": 6, "Rotten Vale": 3},
        "Hoarfrost Reach": {"Coral Highlands": 7}
    },
    "start": "Ancient Forest",
    "end": "Hoarfrost Reach"
}
Expected Output: {
    "path": ["Ancient Forest", "Coral Highlands", "Hoarfrost Reach"],
    "distance": 10
}

# Monster Hunter Tip:
# Like finding the shortest path through monster territories!`,
  ],
  [
    "Kadane's Algorithm" as PatternKey,
    `# Monster Hunter Kadane's Algorithm Challenge
# You are finding the most profitable hunting streak!

# Test Case 1: Basic Streak
Input: [3, -2, 5, -1, 4, -3, 2, -4, 6]
Expected Output: {
    "max_sum": 9,
    "subarray": [5, -1, 4]
}

# Test Case 2: All Positive
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Expected Output: {
    "max_sum": 45,
    "subarray": [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

# Monster Hunter Tip:
# Like finding your most successful hunting streak!`,
  ],
  [
    "KMP Algorithm" as PatternKey,
    `# Monster Hunter KMP Algorithm Challenge
# You are finding monster attack patterns in a sequence!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Rathalos fireball tailswipe fireball",
    "pattern": "fireball"
}
Expected Output: [7, 25]

# Test Case 2: Complex Pattern
Input: {
    "sequence": "Nergigante divebomb roar divebomb roar divebomb",
    "pattern": "divebomb roar"
}
Expected Output: [10, 25]

# Monster Hunter Tip:
# Like predicting monster attack patterns in a sequence!`,
  ],
  [
    "Ternary Search" as PatternKey,
    `# Monster Hunter Ternary Search Challenge
# You are finding the optimal weapon sharpness level!

# Test Case 1: Basic Search
Input: {
    "sharpness_levels": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    "target_damage": 750
}
Expected Output: 7

# Test Case 2: Edge Case
Input: {
    "sharpness_levels": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    "target_damage": 50
}
Expected Output: 0

# Monster Hunter Tip:
# Like finding the perfect sharpness level for maximum damage!`,
  ],
  [
    "Exponential Search" as PatternKey,
    `# Monster Hunter Exponential Search Challenge
# You are finding a specific monster in your field guide!

# Test Case 1: Basic Search
Input: {
    "monsters": ["Anjanath", "Diablos", "Kushala", "Nergigante", "Rathalos", "Teostra", "Zorah"],
    "target": "Rathalos"
}
Expected Output: 4

# Test Case 2: Monster Not Found
Input: {
    "monsters": ["Anjanath", "Diablos", "Kushala", "Nergigante", "Rathalos", "Teostra", "Zorah"],
    "target": "Fatalis"
}
Expected Output: -1

# Monster Hunter Tip:
# Like quickly finding a monster in your alphabetical field guide!`,
  ],
  [
    "Interpolation Search" as PatternKey,
    `# Monster Hunter Interpolation Search Challenge
# You are finding a specific monster by its classification number!

# Test Case 1: Basic Search
Input: {
    "monsters": [
        {"name": "Anjanath", "number": 100},
        {"name": "Diablos", "number": 200},
        {"name": "Kushala", "number": 300},
        {"name": "Nergigante", "number": 400},
        {"name": "Rathalos", "number": 500},
        {"name": "Teostra", "number": 600},
        {"name": "Zorah", "number": 700}
    ],
    "target_number": 500
}
Expected Output: 4

# Test Case 2: Monster Not Found
Input: {
    "monsters": [
        {"name": "Anjanath", "number": 100},
        {"name": "Diablos", "number": 200},
        {"name": "Kushala", "number": 300},
        {"name": "Nergigante", "number": 400},
        {"name": "Rathalos", "number": 500},
        {"name": "Teostra", "number": 600},
        {"name": "Zorah", "number": 700}
    ],
    "target_number": 800
}
Expected Output: -1

# Monster Hunter Tip:
# Like quickly finding a monster by its classification number!`,
  ],
  [
    "Jump Search" as PatternKey,
    `# Monster Hunter Jump Search Challenge
# You are finding a specific material in your sorted inventory!

# Test Case 1: Basic Search
Input: {
    "materials": ["Monster Bone", "Nergigante Spike", "Rathalos Scale", "Teostra Gem", "Kushala Shell"],
    "target": "Rathalos Scale"
}
Expected Output: 2

# Test Case 2: Material Not Found
Input: {
    "materials": ["Monster Bone", "Nergigante Spike", "Rathalos Scale", "Teostra Gem", "Kushala Shell"],
    "target": "Fatalis Eye"
}
Expected Output: -1

# Monster Hunter Tip:
# Like efficiently searching through your sorted material inventory!`,
  ],
  [
    "Manacher's Algorithm" as PatternKey,
    `# Monster Hunter Manacher's Algorithm Challenge
# You are finding the longest palindromic monster name!

# Test Case 1: Basic Palindrome
Input: "Rathalos"
Expected Output: {
    "longest_palindrome": "ala",
    "length": 3
}

# Test Case 2: Complex Palindrome
Input: "Nergigante"
Expected Output: {
    "longest_palindrome": "igi",
    "length": 3
}

# Monster Hunter Tip:
# Like finding the longest palindromic monster name in your field guide!`,
  ],
  [
    "Maximum Bipartite Matching" as PatternKey,
    `# Monster Hunter Maximum Bipartite Matching Challenge
# You are matching hunters to their preferred monsters!

# Test Case 1: Basic Matching
Input: {
    "hunters": {
        "Hunter1": ["Rathalos", "Nergigante"],
        "Hunter2": ["Nergigante", "Teostra"],
        "Hunter3": ["Teostra", "Kushala"]
    },
    "monsters": ["Rathalos", "Nergigante", "Teostra", "Kushala"]
}
Expected Output: {
    "Hunter1": "Rathalos",
    "Hunter2": "Nergigante",
    "Hunter3": "Teostra"
}

# Test Case 2: Complex Matching
Input: {
    "hunters": {
        "Hunter1": ["Rathalos", "Nergigante", "Teostra"],
        "Hunter2": ["Nergigante", "Teostra", "Kushala"],
        "Hunter3": ["Teostra", "Kushala", "Zorah"],
        "Hunter4": ["Kushala", "Zorah", "Rathalos"]
    },
    "monsters": ["Rathalos", "Nergigante", "Teostra", "Kushala", "Zorah"]
}
Expected Output: {
    "Hunter1": "Rathalos",
    "Hunter2": "Nergigante",
    "Hunter3": "Teostra",
    "Hunter4": "Kushala"
}

# Monster Hunter Tip:
# Like matching hunters to their preferred monsters for maximum efficiency!`,
  ],
  [
    "State Compression DP" as PatternKey,
    `# Monster Hunter State Compression DP Challenge
# You are optimizing your armor set combinations!

# Test Case 1: Basic Optimization
Input: {
    "armor_pieces": [
        {"name": "Rathalos Helm", "skills": ["Attack Boost", "Fire Resistance"]},
        {"name": "Rathalos Mail", "skills": ["Attack Boost", "Fire Resistance"]},
        {"name": "Rathalos Vambraces", "skills": ["Attack Boost"]},
        {"name": "Rathalos Coil", "skills": ["Fire Resistance"]},
        {"name": "Rathalos Greaves", "skills": ["Attack Boost"]}
    ],
    "required_skills": ["Attack Boost", "Fire Resistance"]
}
Expected Output: {
    "combination": ["Rathalos Helm", "Rathalos Mail"],
    "skill_count": 2
}

# Test Case 2: Complex Optimization
Input: {
    "armor_pieces": [
        {"name": "Rathalos Helm", "skills": ["Attack Boost", "Fire Resistance"]},
        {"name": "Nergigante Mail", "skills": ["Attack Boost", "Agitator"]},
        {"name": "Teostra Vambraces", "skills": ["Critical Eye", "Weakness Exploit"]},
        {"name": "Kushala Coil", "skills": ["Handicraft", "Evade Window"]},
        {"name": "Zorah Greaves", "skills": ["Critical Boost", "Partbreaker"]}
    ],
    "required_skills": ["Attack Boost", "Critical Eye", "Critical Boost"]
}
Expected Output: {
    "combination": ["Rathalos Helm", "Teostra Vambraces", "Zorah Greaves"],
    "skill_count": 3
}

# Monster Hunter Tip:
# Like finding the optimal armor set combination for your desired skills!`,
  ],
  [
    "Digit DP" as PatternKey,
    `# Monster Hunter Digit DP Challenge
# You are counting special monster classification numbers!

# Test Case 1: Basic Count
Input: {
    "range": [1, 100],
    "special_digits": [1, 3, 5]
}
Expected Output: 30

# Test Case 2: Complex Count
Input: {
    "range": [1, 1000],
    "special_digits": [1, 3, 5, 7, 9]
}
Expected Output: 500

# Monster Hunter Tip:
# Like counting special monster classification numbers in a range!`,
  ],
  [
    "Tree DP" as PatternKey,
    `# Monster Hunter Tree DP Challenge
# You are optimizing your weapon upgrade path!

# Test Case 1: Basic Path
Input: {
    "weapon_tree": {
        "Iron Sword": {
            "upgrades": [
                {"name": "Steel Sword", "materials": ["Iron Ore", "Monster Bone"]},
                {"name": "Bone Sword", "materials": ["Monster Bone", "Monster Bone"]}
            ]
        },
        "Steel Sword": {
            "upgrades": [
                {"name": "Rathalos Sword", "materials": ["Rathalos Scale", "Rathalos Wing"]},
                {"name": "Nergigante Sword", "materials": ["Nergigante Spike", "Nergigante Gem"]}
            ]
        },
        "Bone Sword": {
            "upgrades": [
                {"name": "Diablos Sword", "materials": ["Diablos Shell", "Diablos Fang"]},
                {"name": "Kushala Sword", "materials": ["Kushala Shell", "Kushala Wing"]}
            ]
        }
    },
    "start": "Iron Sword",
    "target": "Rathalos Sword"
}
Expected Output: {
    "path": ["Iron Sword", "Steel Sword", "Rathalos Sword"],
    "materials": ["Iron Ore", "Monster Bone", "Rathalos Scale", "Rathalos Wing"]
}

# Test Case 2: Complex Path
Input: {
    "weapon_tree": {
        "Iron Sword": {
            "upgrades": [
                {"name": "Steel Sword", "materials": ["Iron Ore", "Monster Bone"]},
                {"name": "Bone Sword", "materials": ["Monster Bone", "Monster Bone"]}
            ]
        },
        "Steel Sword": {
            "upgrades": [
                {"name": "Rathalos Sword", "materials": ["Rathalos Scale", "Rathalos Wing"]},
                {"name": "Nergigante Sword", "materials": ["Nergigante Spike", "Nergigante Gem"]}
            ]
        },
        "Bone Sword": {
            "upgrades": [
                {"name": "Diablos Sword", "materials": ["Diablos Shell", "Diablos Fang"]},
                {"name": "Kushala Sword", "materials": ["Kushala Shell", "Kushala Wing"]}
            ]
        },
        "Rathalos Sword": {
            "upgrades": [
                {"name": "Fatalis Sword", "materials": ["Fatalis Scale", "Fatalis Eye"]}
            ]
        }
    },
    "start": "Iron Sword",
    "target": "Fatalis Sword"
}
Expected Output: {
    "path": ["Iron Sword", "Steel Sword", "Rathalos Sword", "Fatalis Sword"],
    "materials": ["Iron Ore", "Monster Bone", "Rathalos Scale", "Rathalos Wing", "Fatalis Scale", "Fatalis Eye"]
}

# Monster Hunter Tip:
# Like finding the optimal weapon upgrade path!`,
  ],
  [
    "Probability DP" as PatternKey,
    `# Monster Hunter Probability DP Challenge
# You are calculating monster material drop rates!

# Test Case 1: Basic Drop Rate
Input: {
    "monster": "Rathalos",
    "materials": [
        {"name": "Scale", "base_rate": 0.7},
        {"name": "Wing", "base_rate": 0.3},
        {"name": "Ruby", "base_rate": 0.1}
    ],
    "hunts": 3
}
Expected Output: {
    "Scale": 0.973,
    "Wing": 0.657,
    "Ruby": 0.271
}

# Test Case 2: Complex Drop Rate
Input: {
    "monster": "Nergigante",
    "materials": [
        {"name": "Spike", "base_rate": 0.8},
        {"name": "Gem", "base_rate": 0.2},
        {"name": "Horn", "base_rate": 0.4}
    ],
    "hunts": 5
}
Expected Output: {
    "Spike": 0.99968,
    "Gem": 0.67232,
    "Horn": 0.92224
}

# Monster Hunter Tip:
# Like calculating the probability of getting specific monster materials!`,
  ],
  [
    "Rabin-Karp Algorithm" as PatternKey,
    `# Monster Hunter Rabin-Karp Algorithm Challenge
# You are finding monster movement patterns in a sequence!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Rathalos fly roar land fly roar",
    "pattern": "fly roar"
}
Expected Output: [7, 20]

# Test Case 2: Complex Pattern
Input: {
    "sequence": "Teostra flame nova roar flame nova roar",
    "pattern": "flame nova roar"
}
Expected Output: [8, 24]

# Monster Hunter Tip:
# Like finding monster movement patterns in a sequence!`,
  ],
  [
    "Boyer-Moore Algorithm" as PatternKey,
    `# Monster Hunter Boyer-Moore Algorithm Challenge
# You are finding monster attack sequences in a pattern!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Kushala wind tornado wind tornado",
    "pattern": "wind tornado"
}
Expected Output: [7, 20]

# Test Case 2: Complex Pattern
Input: {
    "sequence": "Vaal Hazak miasma beam miasma beam",
    "pattern": "miasma beam"
}
Expected Output: [11, 25]

# Monster Hunter Tip:
# Like finding monster attack sequences in a pattern!`,
  ],
  [
    "Z Algorithm" as PatternKey,
    `# Monster Hunter Z Algorithm Challenge
# You are finding monster behavior patterns in a sequence!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Zinogre charge howl charge howl",
    "pattern": "charge howl"
}
Expected Output: [8, 20]

# Test Case 2: Complex Pattern
Input: {
    "sequence": "Rajang rage beam rage beam",
    "pattern": "rage beam"
}
Expected Output: [6, 16]

# Monster Hunter Tip:
# Like finding monster behavior patterns in a sequence!`,
  ],
  [
    "Suffix Array" as PatternKey,
    `# Monster Hunter Suffix Array Challenge
# You are finding monster name patterns in a sequence!

# Test Case 1: Basic Pattern
Input: "Rathalos Rathian Rathalos Rathian"
Expected Output: {
    "suffixes": [
        "Rathalos Rathian Rathalos Rathian",
        "Rathian Rathalos Rathian",
        "Rathalos Rathian",
        "Rathian",
        "Rathalos Rathian Rathalos Rathian",
        "Rathian Rathalos Rathian",
        "Rathalos Rathian",
        "Rathian"
    ],
    "sorted": [
        "Rathalos Rathian",
        "Rathalos Rathian Rathalos Rathian",
        "Rathian",
        "Rathian",
        "Rathian Rathalos Rathian",
        "Rathian Rathalos Rathian",
        "Rathalos Rathian",
        "Rathalos Rathian Rathalos Rathian"
    ]
}

# Test Case 2: Complex Pattern
Input: "Nergigante Teostra Kushala Nergigante Teostra"
Expected Output: {
    "suffixes": [
        "Nergigante Teostra Kushala Nergigante Teostra",
        "Teostra Kushala Nergigante Teostra",
        "Kushala Nergigante Teostra",
        "Nergigante Teostra",
        "Teostra",
        "Nergigante Teostra Kushala Nergigante Teostra",
        "Teostra Kushala Nergigante Teostra",
        "Kushala Nergigante Teostra",
        "Nergigante Teostra",
        "Teostra"
    ],
    "sorted": [
        "Kushala Nergigante Teostra",
        "Kushala Nergigante Teostra",
        "Nergigante Teostra",
        "Nergigante Teostra",
        "Nergigante Teostra Kushala Nergigante Teostra",
        "Nergigante Teostra Kushala Nergigante Teostra",
        "Teostra",
        "Teostra",
        "Teostra Kushala Nergigante Teostra",
        "Teostra Kushala Nergigante Teostra"
    ]
}

# Monster Hunter Tip:
# Like finding monster name patterns in a sequence!`,
  ],
  [
    "LCP Array" as PatternKey,
    `# Monster Hunter LCP Array Challenge
# You are finding common monster name prefixes!

# Test Case 1: Basic Pattern
Input: [
    "Rathalos",
    "Rathian",
    "Rathalos",
    "Rathian"
]
Expected Output: [0, 4, 0, 0]

# Test Case 2: Complex Pattern
Input: [
    "Nergigante",
    "Nergigante",
    "Teostra",
    "Teostra",
    "Kushala"
]
Expected Output: [0, 9, 0, 0, 0]

# Monster Hunter Tip:
# Like finding common monster name prefixes!`,
  ],
  [
    "Suffix Automaton" as PatternKey,
    `# Monster Hunter Suffix Automaton Challenge
# You are finding monster name patterns in a sequence!

# Test Case 1: Basic Pattern
Input: "Rathalos Rathian Rathalos"
Expected Output: {
    "states": 7,
    "transitions": 12,
    "final_states": [3, 6]
}

# Test Case 2: Complex Pattern
Input: "Nergigante Teostra Kushala Nergigante"
Expected Output: {
    "states": 10,
    "transitions": 18,
    "final_states": [4, 9]
}

# Monster Hunter Tip:
# Like finding monster name patterns in a sequence!`,
  ],
  [
    "Aho-Corasick Algorithm" as PatternKey,
    `# Monster Hunter Aho-Corasick Algorithm Challenge
# You are finding multiple monster attack patterns in a sequence!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Rathalos fireball tailswipe fireball",
    "patterns": ["fireball", "tailswipe"]
}
Expected Output: {
    "fireball": [7, 25],
    "tailswipe": [16]
}

# Test Case 2: Complex Pattern
Input: {
    "sequence": "Nergigante divebomb roar divebomb roar",
    "patterns": ["divebomb", "roar", "divebomb roar"]
}
Expected Output: {
    "divebomb": [10, 25],
    "roar": [19, 30],
    "divebomb roar": [10, 25]
}

# Monster Hunter Tip:
# Like finding multiple monster attack patterns in a sequence!`,
  ],
  [
    "Rolling Hash" as PatternKey,
    `# Monster Hunter Rolling Hash Challenge
# You are finding monster movement patterns in a sequence!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Rathalos fly roar land fly roar",
    "pattern": "fly roar"
}
Expected Output: [7, 20]

# Test Case 2: Complex Pattern
Input: {
    "sequence": "Teostra flame nova roar flame nova roar",
    "pattern": "flame nova roar"
}
Expected Output: [8, 24]

# Monster Hunter Tip:
# Like finding monster movement patterns in a sequence!`,
  ],
  [
    "Segment Tree" as PatternKey,
    `# Monster Hunter Segment Tree Challenge
# You are managing monster damage ranges!

# Test Case 1: Basic Range Query
Input: {
    "damage_values": [100, 150, 200, 250, 300],
    "queries": [
        {"type": "range_sum", "left": 1, "right": 3},
        {"type": "update", "index": 2, "value": 180},
        {"type": "range_sum", "left": 1, "right": 3}
    ]
}
Expected Output: [
    550,  # Sum of damage from index 1 to 3 (150 + 200 + 250)
    530   # Sum after updating index 2 to 180 (150 + 180 + 250)
]

# Test Case 2: Complex Range Query
Input: {
    "damage_values": [100, 150, 200, 250, 300, 350, 400],
    "queries": [
        {"type": "range_max", "left": 2, "right": 5},
        {"type": "update", "index": 3, "value": 280},
        {"type": "range_max", "left": 2, "right": 5}
    ]
}
Expected Output: [
    300,  # Max damage from index 2 to 5
    300   # Max damage after updating index 3 to 280
]

# Monster Hunter Tip:
# Like managing monster damage ranges efficiently!`,
  ],
  [
    "Fenwick Tree" as PatternKey,
    `# Monster Hunter Fenwick Tree Challenge
# You are tracking cumulative monster damage!

# Test Case 1: Basic Range Sum
Input: {
    "damage_values": [100, 150, 200, 250, 300],
    "queries": [
        {"type": "prefix_sum", "index": 3},
        {"type": "update", "index": 2, "value": 180},
        {"type": "prefix_sum", "index": 3}
    ]
}
Expected Output: [
    700,  # Sum of damage up to index 3 (100 + 150 + 200 + 250)
    680   # Sum after updating index 2 to 180
]

# Test Case 2: Complex Range Sum
Input: {
    "damage_values": [100, 150, 200, 250, 300, 350, 400],
    "queries": [
        {"type": "range_sum", "left": 2, "right": 5},
        {"type": "update", "index": 3, "value": 280},
        {"type": "range_sum", "left": 2, "right": 5}
    ]
}
Expected Output: [
    900,  # Sum of damage from index 2 to 5
    930   # Sum after updating index 3 to 280
]

# Monster Hunter Tip:
# Like tracking cumulative monster damage efficiently!`,
  ],
  [
    "Sparse Table" as PatternKey,
    `# Monster Hunter Sparse Table Challenge
# You are finding maximum monster damage in ranges!

# Test Case 1: Basic Range Maximum
Input: {
    "damage_values": [100, 150, 200, 250, 300],
    "queries": [
        {"left": 1, "right": 3},
        {"left": 2, "right": 4}
    ]
}
Expected Output: [
    250,  # Maximum damage from index 1 to 3
    300   # Maximum damage from index 2 to 4
]

# Test Case 2: Complex Range Maximum
Input: {
    "damage_values": [100, 150, 200, 250, 300, 350, 400],
    "queries": [
        {"left": 2, "right": 5},
        {"left": 3, "right": 6}
    ]
}
Expected Output: [
    300,  # Maximum damage from index 2 to 5
    400   # Maximum damage from index 3 to 6
]

# Monster Hunter Tip:
# Like finding maximum monster damage in ranges efficiently!`,
  ],
  [
    "Disjoint Set" as PatternKey,
    `# Monster Hunter Disjoint Set Challenge
# You are grouping monsters by territory!

# Test Case 1: Basic Territory Groups
Input: {
    "monsters": ["Rathalos", "Rathian", "Nergigante", "Teostra", "Kushala"],
    "territory_connections": [
        ["Rathalos", "Rathian"],
        ["Nergigante", "Teostra"]
    ]
}
Expected Output: {
    "groups": [
        ["Rathalos", "Rathian"],
        ["Nergigante", "Teostra"],
        ["Kushala"]
    ]
}

# Test Case 2: Complex Territory Groups
Input: {
    "monsters": ["Rathalos", "Rathian", "Nergigante", "Teostra", "Kushala", "Vaal Hazak"],
    "territory_connections": [
        ["Rathalos", "Rathian"],
        ["Nergigante", "Teostra"],
        ["Teostra", "Kushala"],
        ["Kushala", "Vaal Hazak"]
    ]
}
Expected Output: {
    "groups": [
        ["Rathalos", "Rathian"],
        ["Nergigante", "Teostra", "Kushala", "Vaal Hazak"]
    ]
}

# Monster Hunter Tip:
# Like grouping monsters by their shared territories!`,
  ],
  [
    "Lowest Common Ancestor" as PatternKey,
    `# Monster Hunter Lowest Common Ancestor Challenge
# You are finding common monster ancestors in the evolution tree!

# Test Case 1: Basic Ancestor
Input: {
    "evolution_tree": {
        "Ancient Wyvern": {
            "Flying Wyvern": {
                "Rathalos": {},
                "Rathian": {}
            },
            "Elder Dragon": {
                "Teostra": {},
                "Kushala": {}
            }
        }
    },
    "monster1": "Rathalos",
    "monster2": "Rathian"
}
Expected Output: "Flying Wyvern"

# Test Case 2: Complex Ancestor
Input: {
    "evolution_tree": {
        "Ancient Beast": {
            "Elder Dragon": {
                "First Generation": {
                    "Teostra": {},
                    "Kushala": {}
                },
                "Black Dragon": {
                    "Fatalis": {},
                    "Alatreon": {}
                }
            },
            "Wyvern": {
                "Flying Wyvern": {
                    "Rathalos": {},
                    "Rathian": {}
                },
                "Brute Wyvern": {
                    "Deviljho": {},
                    "Barroth": {}
                }
            }
        }
    },
    "monster1": "Teostra",
    "monster2": "Fatalis"
}
Expected Output: "Elder Dragon"

# Monster Hunter Tip:
# Like finding common ancestors in the monster evolution tree!`,
  ],
  [
    "Heavy Light Decomposition" as PatternKey,
    `# Monster Hunter Heavy Light Decomposition Challenge
# You are managing monster territory paths!

# Test Case 1: Basic Path Query
Input: {
    "territory_tree": {
        "Ancient Forest": {
            "Rathalos Nest": {
                "Upper Nest": {},
                "Lower Nest": {}
            },
            "Rathian Territory": {
                "East Territory": {},
                "West Territory": {}
            }
        }
    },
    "queries": [
        {"type": "path_sum", "from": "Upper Nest", "to": "East Territory"},
        {"type": "update", "territory": "Rathalos Nest", "value": 100},
        {"type": "path_sum", "from": "Upper Nest", "to": "East Territory"}
    ]
}
Expected Output: [
    150,  # Sum of values along the path
    250   # Sum after updating Rathalos Nest value
]

# Test Case 2: Complex Path Query
Input: {
    "territory_tree": {
        "Elder's Recess": {
            "Nergigante Nest": {
                "Peak": {},
                "Cave": {}
            },
            "Teostra Territory": {
                "Volcanic Area": {},
                "Crystal Area": {}
            }
        }
    },
    "queries": [
        {"type": "path_max", "from": "Peak", "to": "Volcanic Area"},
        {"type": "update", "territory": "Nergigante Nest", "value": 200},
        {"type": "path_max", "from": "Peak", "to": "Volcanic Area"}
    ]
}
Expected Output: [
    150,  # Maximum value along the path
    200   # Maximum after updating Nergigante Nest value
]

# Monster Hunter Tip:
# Like managing complex monster territory paths efficiently!`,
  ],
  [
    "Centroid Decomposition" as PatternKey,
    `# Monster Hunter Centroid Decomposition Challenge
# You are finding central points in monster territory networks!

# Test Case 1: Basic Territory Network
Input: {
    "territory_network": {
        "nodes": ["Ancient Forest", "Wildspire Waste", "Coral Highlands", "Rotten Vale"],
        "edges": [
            ["Ancient Forest", "Wildspire Waste"],
            ["Wildspire Waste", "Coral Highlands"],
            ["Coral Highlands", "Rotten Vale"]
        ]
    }
}
Expected Output: {
    "centroids": ["Wildspire Waste", "Coral Highlands"],
    "subtree_sizes": [2, 2]
}

# Test Case 2: Complex Territory Network
Input: {
    "territory_network": {
        "nodes": ["Ancient Forest", "Wildspire Waste", "Coral Highlands", "Rotten Vale", "Elder's Recess", "Hoarfrost Reach"],
        "edges": [
            ["Ancient Forest", "Wildspire Waste"],
            ["Wildspire Waste", "Coral Highlands"],
            ["Coral Highlands", "Rotten Vale"],
            ["Rotten Vale", "Elder's Recess"],
            ["Elder's Recess", "Hoarfrost Reach"]
        ]
    }
}
Expected Output: {
    "centroids": ["Coral Highlands", "Rotten Vale"],
    "subtree_sizes": [3, 3]
}

# Monster Hunter Tip:
# Like finding central points in monster territory networks!`,
  ],
  [
    "Link Cut Tree" as PatternKey,
    `# Monster Hunter Link Cut Tree Challenge
# You are managing dynamic monster territory connections!

# Test Case 1: Basic Territory Management
Input: {
    "operations": [
        {"type": "link", "territory1": "Ancient Forest", "territory2": "Wildspire Waste"},
        {"type": "link", "territory1": "Wildspire Waste", "territory2": "Coral Highlands"},
        {"type": "cut", "territory1": "Wildspire Waste", "territory2": "Coral Highlands"},
        {"type": "connected", "territory1": "Ancient Forest", "territory2": "Coral Highlands"}
    ]
}
Expected Output: [
    true,   # First link successful
    true,   # Second link successful
    true,   # Cut successful
    false   # Territories are no longer connected
]

# Test Case 2: Complex Territory Management
Input: {
    "operations": [
        {"type": "link", "territory1": "Ancient Forest", "territory2": "Wildspire Waste"},
        {"type": "link", "territory1": "Wildspire Waste", "territory2": "Coral Highlands"},
        {"type": "link", "territory1": "Coral Highlands", "territory2": "Rotten Vale"},
        {"type": "cut", "territory1": "Wildspire Waste", "territory2": "Coral Highlands"},
        {"type": "link", "territory1": "Ancient Forest", "territory2": "Rotten Vale"},
        {"type": "connected", "territory1": "Ancient Forest", "territory2": "Coral Highlands"}
    ]
}
Expected Output: [
    true,   # First link successful
    true,   # Second link successful
    true,   # Third link successful
    true,   # Cut successful
    true,   # Fourth link successful
    true    # Territories are connected through new path
]

# Monster Hunter Tip:
# Like managing dynamic connections between monster territories!`,
  ],
  [
    "Activity Selection" as PatternKey,
    `# Monster Hunter Activity Selection Challenge
# You are selecting the optimal set of monster hunts to maximize rewards!

# Test Case 1: Basic Selection
Input: [
    {"start": 1, "end": 3, "reward": 10},
    {"start": 2, "end": 5, "reward": 15},
    {"start": 4, "end": 6, "reward": 20},
    {"start": 6, "end": 8, "reward": 25}
]
Expected Output: [
    {"start": 1, "end": 3, "reward": 10},
    {"start": 4, "end": 6, "reward": 20},
    {"start": 6, "end": 8, "reward": 25}
]

# Monster Hunter Tip:
# Like choosing the most rewarding hunts that don't overlap in time!`,
  ],
  [
    "Huffman Coding" as PatternKey,
    `# Monster Hunter Huffman Coding Challenge
# You are compressing monster attack pattern data!

# Test Case 1: Basic Compression
Input: {
    "attacks": "RRRAAAFRRRAAAF",
    "frequencies": {
        "R": 6,
        "A": 4,
        "F": 2
    }
}
Expected Output: {
    "codes": {
        "R": "0",
        "A": "10",
        "F": "11"
    },
    "compressed": "000101011000101011"
}

# Monster Hunter Tip:
# Like efficiently storing monster attack patterns!`,
  ],
  [
    "Matrix Spiral Recursive" as PatternKey,
    `# Monster Hunter Matrix Spiral Recursive Challenge
# You are mapping out monster territory in a spiral pattern!

# Test Case 1: Basic Spiral
Input: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
Expected Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

# Monster Hunter Tip:
# Like exploring monster territory in a spiral pattern!`,
  ],
  [
    "Matrix Traversal Recursive" as PatternKey,
    `# Monster Hunter Matrix Traversal Recursive Challenge
# You are exploring monster territory recursively!

# Test Case 1: Basic Traversal
Input: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Monster Hunter Tip:
# Like systematically exploring every part of monster territory!`,
  ],
  [
    "String Operations" as PatternKey,
    `# Monster Hunter String Operations Challenge
# You are analyzing monster attack patterns!

# Test Case 1: Pattern Analysis
Input: {
    "pattern": "RARFRARF",
    "text": "Rathalos RARFRARF Nergigante"
}
Expected Output: {
    "occurrences": [8],
    "length": 8,
    "is_palindrome": false
}

# Monster Hunter Tip:
# Like analyzing monster attack patterns in text!`,
  ],
  [
    "Divide And Conquer" as PatternKey,
    `# Monster Hunter Divide and Conquer Challenge
# You are splitting monster territories for efficient hunting!

# Test Case 1: Territory Division
Input: {
    "territory": [1, 3, 5, 7, 9, 2, 4, 6, 8, 10],
    "target": 6
}
Expected Output: {
    "found": true,
    "index": 7
}

# Monster Hunter Tip:
# Like dividing monster territories to conquer them efficiently!`,
  ],
  [
    "Extended Euclidean" as PatternKey,
    `# Monster Hunter Extended Euclidean Algorithm Challenge
# You are calculating optimal weapon combinations!

# Test Case 1: Basic Calculation
Input: {
    "a": 30,
    "b": 20
}
Expected Output: {
    "gcd": 10,
    "x": 1,
    "y": -1
}

# Monster Hunter Tip:
# Like finding the optimal combination of weapon elements!`,
  ],
  [
    "Sieve of Sundaram" as PatternKey,
    `# Monster Hunter Sieve of Sundaram Challenge
# You are identifying prime monster territories!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like identifying prime monster territories for special hunts!`,
  ],
  [
    "Sieve of Atkin" as PatternKey,
    `# Monster Hunter Sieve of Atkin Challenge
# You are finding special monster territories!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like identifying special monster territories for rare hunts!`,
  ],
  [
    "Heavy Light Decomposition" as PatternKey,
    `# Monster Hunter Heavy Light Decomposition Challenge
# You are analyzing monster family trees!

# Test Case 1: Basic Decomposition
Input: {
    "tree": {
        "1": ["2", "3"],
        "2": ["4", "5"],
        "3": ["6"],
        "4": [],
        "5": [],
        "6": []
    }
}
Expected Output: {
    "chains": [
        ["1", "2", "4"],
        ["5"],
        ["3", "6"]
    ]
}

# Monster Hunter Tip:
# Like analyzing monster family relationships!`,
  ],
  [
    "LCA" as PatternKey,
    `# Monster Hunter LCA Challenge
# You are finding common ancestors in monster family trees!

# Test Case 1: Basic LCA
Input: {
    "tree": {
        "1": ["2", "3"],
        "2": ["4", "5"],
        "3": ["6"],
        "4": [],
        "5": [],
        "6": []
    },
    "nodes": ["4", "5"]
}
Expected Output: "2"

# Monster Hunter Tip:
# Like finding common ancestors in monster family trees!`,
  ],
  [
    "Centroid Decomposition" as PatternKey,
    `# Monster Hunter Centroid Decomposition Challenge
# You are balancing monster territory divisions!

# Test Case 1: Basic Decomposition
Input: {
    "tree": {
        "1": ["2", "3", "4"],
        "2": ["5", "6"],
        "3": [],
        "4": [],
        "5": [],
        "6": []
    }
}
Expected Output: {
    "centroid": "1",
    "subtrees": [
        ["2", "5", "6"],
        ["3"],
        ["4"]
    ]
}

# Monster Hunter Tip:
# Like balancing monster territory divisions!`,
  ],
  [
    "Link Cut Tree" as PatternKey,
    `# Monster Hunter Link Cut Tree Challenge
# You are managing dynamic monster territories!

# Test Case 1: Basic Operations
Input: {
    "operations": [
        {"type": "link", "u": 1, "v": 2},
        {"type": "link", "u": 2, "v": 3},
        {"type": "cut", "u": 2, "v": 3},
        {"type": "find_root", "u": 3}
    ]
}
Expected Output: {
    "root": 3
}

# Monster Hunter Tip:
# Like managing dynamic monster territories!`,
  ],
  [
    "Sparse Table" as PatternKey,
    `# Monster Hunter Sparse Table Challenge
# You are building efficient monster territory lookup tables!

# Test Case 1: Basic Table
Input: {
    "array": [2, 4, 3, 1, 6, 7, 8, 9, 1, 7],
    "queries": [
        {"l": 0, "r": 4},
        {"l": 4, "r": 9}
    ]
}
Expected Output: {
    "min": [1, 1],
    "max": [6, 9]
}

# Monster Hunter Tip:
# Like building efficient monster territory lookup tables!`,
  ],
  [
    "Disjoint Set" as PatternKey,
    `# Monster Hunter Disjoint Set Challenge
# You are managing monster territories!

# Test Case 1: Basic Operations
Input: {
    "operations": [
        {"type": "union", "u": 1, "v": 2},
        {"type": "union", "u": 2, "v": 3},
        {"type": "find", "u": 3}
    ]
}
Expected Output: {
    "parent": 1
}

# Monster Hunter Tip:
# Like managing monster territories!`,
  ],
  [
    "Lowest Common Ancestor" as PatternKey,
    `# Monster Hunter Lowest Common Ancestor Challenge
# You are finding common ancestors in monster family trees!

# Test Case 1: Basic LCA
Input: {
    "tree": {
        "1": ["2", "3"],
        "2": ["4", "5"],
        "3": ["6"],
        "4": [],
        "5": [],
        "6": []
    },
    "nodes": ["4", "6"]
}
Expected Output: "1"

# Monster Hunter Tip:
# Like finding common ancestors in monster family trees!`,
  ],
  [
    "Rolling Hash" as PatternKey,
    `# Monster Hunter Rolling Hash Challenge
# You are hashing monster attack patterns!

# Test Case 1: Basic Hashing
Input: {
    "text": "RARFRARF",
    "pattern": "RARF"
}
Expected Output: {
    "pattern_hash": 1234,
    "matches": [0, 4]
}

# Monster Hunter Tip:
# Like efficiently finding monster attack patterns!`,
  ],
  [
    "Z Algorithm" as PatternKey,
    `# Monster Hunter Z Algorithm Challenge
# You are finding monster attack patterns!

# Test Case 1: Basic Pattern
Input: {
    "text": "Rathalos RARFRARF Nergigante",
    "pattern": "RARF"
}
Expected Output: {
    "z_array": [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "matches": [8]
}

# Monster Hunter Tip:
# Like finding monster attack patterns in text!`,
  ],
  [
    "Boyer-Moore Algorithm" as PatternKey,
    `# Monster Hunter Boyer-Moore Algorithm Challenge
# You are finding monster attack patterns!

# Test Case 1: Basic Pattern
Input: {
    "text": "Rathalos RARFRARF Nergigante",
    "pattern": "RARF"
}
Expected Output: {
    "matches": [8, 12]
}

# Monster Hunter Tip:
# Like finding monster attack patterns in text!`,
  ],
  [
    "Suffix Automaton" as PatternKey,
    `# Monster Hunter Suffix Automaton Challenge
# You are building a monster attack pattern automaton!

# Test Case 1: Basic Automaton
Input: "RARFRARF"
Expected Output: {
    "states": 7,
    "transitions": 12,
    "final_states": [3, 6]
}

# Monster Hunter Tip:
# Like building a monster attack pattern automaton!`,
  ],
  [
    "Aho-Corasick Algorithm" as PatternKey,
    `# Monster Hunter Aho-Corasick Algorithm Challenge
# You are finding multiple monster attack patterns!

# Test Case 1: Basic Patterns
Input: {
    "text": "Rathalos RARFRARF Nergigante",
    "patterns": ["RARF", "Nerg"]
}
Expected Output: {
    "RARF": [8, 12],
    "Nerg": [20]
}

# Monster Hunter Tip:
# Like finding multiple monster attack patterns in text!`,
  ],
  [
    "LCP Array" as PatternKey,
    `# Monster Hunter LCP Array Challenge
# You are finding common monster name prefixes!

# Test Case 1: Basic Array
Input: [
    "Rathalos",
    "Rathian",
    "Rathalos",
    "Rathian"
]
Expected Output: [0, 4, 0, 0]

# Monster Hunter Tip:
# Like finding common monster name prefixes!`,
  ],
  [
    "Matrix Operations" as PatternKey,
    `# Monster Hunter Matrix Operations Challenge
# You are analyzing monster territory maps and resource distributions!

# Test Case 1: Basic Matrix Operations
Input: {
    "matrix1": [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    "matrix2": [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ],
    "operations": [
        {"type": "add"},
        {"type": "transpose"},
        {"type": "rotate_90_clockwise"}
    ]
}
Expected Output: {
    "add": [
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ],
    "transpose": [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ],
    "rotate_90_clockwise": [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ]
}

# Test Case 2: Complex Matrix Operations
Input: {
    "matrix1": [
        [2, 4, 6],
        [8, 10, 12],
        [14, 16, 18]
    ],
    "matrix2": [
        [1, 3, 5],
        [7, 9, 11],
        [13, 15, 17]
    ],
    "operations": [
        {"type": "multiply"},
        {"type": "spiral_traversal"},
        {"type": "diagonal_traversal"}
    ]
}
Expected Output: {
    "multiply": [
        [108, 132, 156],
        [234, 294, 354],
        [360, 456, 552]
    ],
    "spiral_traversal": [2, 4, 6, 12, 18, 16, 14, 8, 10],
    "diagonal_traversal": [2, 4, 8, 6, 10, 14, 12, 16, 18]
}

# Monster Hunter Tip:
# Like analyzing and transforming territory maps to find optimal hunting grounds!`,
  ],
  [
    "Graph Bridges" as PatternKey,
    `# Monster Hunter Graph Bridges Challenge
# You are identifying critical paths between monster territories!

# Test Case 1: Basic Territory Network
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    }
}
Expected Output: [
    ["Ancient Forest", "Coral Highlands"],
    ["Ancient Forest", "Wildspire Waste"]
]

# Monster Hunter Tip:
# Like identifying critical paths that, if blocked, would separate monster territories!`,
  ],
  [
    "Graph SCC" as PatternKey,
    `# Monster Hunter Graph SCC Challenge
# You are identifying groups of interconnected monster territories!

# Test Case 1: Basic Territory Groups
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Rotten Vale", "Coral Highlands"],
        "Coral Highlands": ["Elder's Recess", "Hoarfrost Reach"],
        "Hoarfrost Reach": ["Coral Highlands"]
    }
}
Expected Output: [
    ["Ancient Forest", "Wildspire Waste", "Rotten Vale", "Elder's Recess", "Coral Highlands", "Hoarfrost Reach"]
]

# Test Case 2: Complex Territory Groups
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Rotten Vale"],
        "Coral Highlands": ["Hoarfrost Reach"],
        "Hoarfrost Reach": ["Coral Highlands", "Guiding Lands"],
        "Guiding Lands": ["Hoarfrost Reach"]
    }
}
Expected Output: [
    ["Ancient Forest", "Wildspire Waste", "Rotten Vale", "Elder's Recess"],
    ["Coral Highlands", "Hoarfrost Reach", "Guiding Lands"]
]

# Monster Hunter Tip:
# Like identifying groups of territories where monsters can freely move between any two points!`,
  ],
  [
    "Graph Kruskal" as PatternKey,
    `# Monster Hunter Graph Kruskal Challenge
# You are finding the minimum spanning tree of monster territories!

# Test Case 1: Basic Territory Network
Input: {
    "territories": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6},
        "Rotten Vale": {"Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Coral Highlands": 6, "Rotten Vale": 3}
    }
}
Expected Output: [
    ["Ancient Forest", "Coral Highlands"],
    ["Coral Highlands", "Elder's Recess"],
    ["Elder's Recess", "Rotten Vale"],
    ["Rotten Vale", "Wildspire Waste"]
]

# Monster Hunter Tip:
# Like finding the most efficient way to connect all monster territories!`,
  ],
  [
    "Graph Prim" as PatternKey,
    `# Monster Hunter Graph Prim Challenge
# You are finding the minimum spanning tree of monster territories!

# Test Case 1: Basic Territory Network
Input: {
    "territories": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6},
        "Rotten Vale": {"Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Coral Highlands": 6, "Rotten Vale": 3}
    }
}
Expected Output: [
    ["Ancient Forest", "Coral Highlands"],
    ["Coral Highlands", "Elder's Recess"],
    ["Elder's Recess", "Rotten Vale"],
    ["Rotten Vale", "Wildspire Waste"]
]

# Monster Hunter Tip:
# Like finding the most efficient way to connect all monster territories!`,
  ],
  [
    "Graph Bellman Ford" as PatternKey,
    `# Monster Hunter Graph Bellman Ford Challenge
# You are finding the shortest paths through monster territories!

# Test Case 1: Basic Territory Network
Input: {
    "territories": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6},
        "Rotten Vale": {"Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Coral Highlands": 6, "Rotten Vale": 3}
    },
    "start": "Ancient Forest"
}
Expected Output: {
    "Ancient Forest": 0,
    "Coral Highlands": 3,
    "Elder's Recess": 9,
    "Rotten Vale": 12,
    "Wildspire Waste": 5
}

# Monster Hunter Tip:
# Like finding the shortest paths through monster territories!`,
  ],
  [
    "Graph Floyd Warshall" as PatternKey,
    `# Monster Hunter Graph Floyd Warshall Challenge
# You are finding all pairs shortest paths through monster territories!

# Test Case 1: Basic Territory Network
Input: {
    "territories": {
        "Ancient Forest": {"Wildspire Waste": 5, "Coral Highlands": 3},
        "Wildspire Waste": {"Ancient Forest": 5, "Rotten Vale": 4},
        "Coral Highlands": {"Ancient Forest": 3, "Elder's Recess": 6},
        "Rotten Vale": {"Wildspire Waste": 4, "Elder's Recess": 3},
        "Elder's Recess": {"Coral Highlands": 6, "Rotten Vale": 3}
    }
}
Expected Output: {
    "Ancient Forest": {
        "Ancient Forest": 0,
        "Coral Highlands": 3,
        "Elder's Recess": 9,
        "Rotten Vale": 12,
        "Wildspire Waste": 5
    },
    "Coral Highlands": {
        "Ancient Forest": 3,
        "Coral Highlands": 0,
        "Elder's Recess": 6,
        "Rotten Vale": 9,
        "Wildspire Waste": 8
    },
    "Elder's Recess": {
        "Ancient Forest": 9,
        "Coral Highlands": 6,
        "Elder's Recess": 0,
        "Rotten Vale": 3,
        "Wildspire Waste": 7
    },
    "Rotten Vale": {
        "Ancient Forest": 12,
        "Coral Highlands": 9,
        "Elder's Recess": 3,
        "Rotten Vale": 0,
        "Wildspire Waste": 4
    },
    "Wildspire Waste": {
        "Ancient Forest": 5,
        "Coral Highlands": 8,
        "Elder's Recess": 7,
        "Rotten Vale": 4,
        "Wildspire Waste": 0
    }
}

# Monster Hunter Tip:
# Like finding all pairs shortest paths through monster territories!`,
  ],
  [
    "Graph Articulation Points" as PatternKey,
    `# Monster Hunter Graph Articulation Points Challenge
# You are identifying critical monster territories!

# Test Case 1: Basic Territory Network
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    }
}
Expected Output: ["Ancient Forest", "Coral Highlands", "Elder's Recess", "Rotten Vale", "Wildspire Waste"]

# Monster Hunter Tip:
# Like identifying critical monster territories that, if removed, would disconnect the network!`,
  ],
  [
    "DFS Linked List" as PatternKey,
    `# Monster Hunter DFS Linked List Challenge
# You are traversing monster territories in a linked list!

# Test Case 1: Basic Territory List
Input: {
    "territories": {
        "Ancient Forest": "Wildspire Waste",
        "Wildspire Waste": "Rotten Vale",
        "Rotten Vale": "Elder's Recess",
        "Elder's Recess": null
    },
    "start": "Ancient Forest"
}
Expected Output: ["Ancient Forest", "Wildspire Waste", "Rotten Vale", "Elder's Recess"]

# Monster Hunter Tip:
# Like traversing monster territories in a linked list!`,
  ],
  [
    "DFS Binary Tree" as PatternKey,
    `# Monster Hunter DFS Binary Tree Challenge
# You are traversing monster territories in a binary tree!

# Test Case 1: Basic Territory Tree
Input: {
    "territories": {
        "Ancient Forest": {
            "left": "Wildspire Waste",
            "right": "Coral Highlands"
        },
        "Wildspire Waste": {
            "left": "Rotten Vale",
            "right": null
        },
        "Coral Highlands": {
            "left": null,
            "right": "Elder's Recess"
        },
        "Rotten Vale": {
            "left": null,
            "right": null
        },
        "Elder's Recess": {
            "left": null,
            "right": null
        }
    },
    "start": "Ancient Forest"
}
Expected Output: ["Ancient Forest", "Wildspire Waste", "Rotten Vale", "Coral Highlands", "Elder's Recess"]

# Monster Hunter Tip:
# Like traversing monster territories in a binary tree!`,
  ],
  [
    "BFS Linked List" as PatternKey,
    `# Monster Hunter BFS Linked List Challenge
# You are traversing monster territories in a linked list!

# Test Case 1: Basic Territory List
Input: {
    "territories": {
        "Ancient Forest": "Wildspire Waste",
        "Wildspire Waste": "Rotten Vale",
        "Rotten Vale": "Elder's Recess",
        "Elder's Recess": null
    },
    "start": "Ancient Forest"
}
Expected Output: ["Ancient Forest", "Wildspire Waste", "Rotten Vale", "Elder's Recess"]

# Monster Hunter Tip:
# Like traversing monster territories in a linked list!`,
  ],
  [
    "Strongly Connected Components" as PatternKey,
    `# Monster Hunter Strongly Connected Components Challenge
# You are identifying groups of interconnected monster territories!

# Test Case 1: Basic Territory Groups
Input: {
    "territories": {
        "Ancient Forest": ["Wildspire Waste"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Rotten Vale", "Coral Highlands"],
        "Coral Highlands": ["Elder's Recess", "Hoarfrost Reach"],
        "Hoarfrost Reach": ["Coral Highlands"]
    }
}
Expected Output: [
    ["Ancient Forest", "Wildspire Waste", "Rotten Vale", "Elder's Recess", "Coral Highlands", "Hoarfrost Reach"]
]

# Monster Hunter Tip:
# Like identifying groups of territories where monsters can freely move between any two points!`,
  ],
  [
    "String Operations" as PatternKey,
    `# Monster Hunter String Operations Challenge
# You are analyzing monster attack patterns!

# Test Case 1: Pattern Analysis
Input: {
    "pattern": "RARFRARF",
    "text": "Rathalos RARFRARF Nergigante"
}
Expected Output: {
    "occurrences": [8],
    "length": 8,
    "is_palindrome": false
}

# Monster Hunter Tip:
# Like analyzing monster attack patterns in text!`,
  ],
  [
    "Rabin Karp" as PatternKey,
    `# Monster Hunter Rabin Karp Challenge
# You are finding monster attack patterns in a sequence!

# Test Case 1: Basic Pattern
Input: {
    "sequence": "Rathalos fireball tailswipe fireball",
    "pattern": "fireball"
}
Expected Output: [7, 25]

# Monster Hunter Tip:
# Like finding monster attack patterns in a sequence!`,
  ],
  [
    "Divide And Conquer" as PatternKey,
    `# Monster Hunter Divide and Conquer Challenge
# You are splitting monster territories for efficient hunting!

# Test Case 1: Territory Division
Input: {
    "territory": [1, 3, 5, 7, 9, 2, 4, 6, 8, 10],
    "target": 6
}
Expected Output: {
    "found": true,
    "index": 7
}

# Monster Hunter Tip:
# Like dividing monster territories to conquer them efficiently!`,
  ],
  [
    "Extended Euclidean" as PatternKey,
    `# Monster Hunter Extended Euclidean Algorithm Challenge
# You are calculating optimal weapon combinations!

# Test Case 1: Basic Calculation
Input: {
    "a": 30,
    "b": 20
}
Expected Output: {
    "gcd": 10,
    "x": 1,
    "y": -1
}

# Monster Hunter Tip:
# Like finding the optimal combination of weapon elements!`,
  ],
  [
    "Sieve of Sundaram" as PatternKey,
    `# Monster Hunter Sieve of Sundaram Challenge
# You are identifying prime monster territories!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like identifying prime monster territories for special hunts!`,
  ],
  [
    "Sieve of Atkin" as PatternKey,
    `# Monster Hunter Sieve of Atkin Challenge
# You are finding special monster territories!

# Test Case 1: Basic Sieve
Input: 20
Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]

# Monster Hunter Tip:
# Like identifying special monster territories for rare hunts!`,
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

# Monster Hunter Tip:
# Like quickly finding the k-th strongest monster in a territory!`,
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

# Monster Hunter Tip:
# Like organizing monster territories into efficient hunting routes!`,
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
]);
