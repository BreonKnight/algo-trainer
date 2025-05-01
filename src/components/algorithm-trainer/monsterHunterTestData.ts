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
]);
