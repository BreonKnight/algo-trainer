import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const monsterHunterTemplate: AlgorithmPattern = {
  title: "Monster Hunter Pattern Template",
  description:
    "A template for creating engaging Monster Hunter-themed algorithm patterns that help learners understand complex concepts through familiar game mechanics.",
  timeComplexity: "O(1) for template access",
  spaceComplexity: "O(1)",
  pseudocode: `
# Monster Hunter Pattern Template
def create_monster_hunter_pattern(pattern_name, algorithm):
    # 1. Monster Hunter Context
    context = {
        'scenario': 'Describe the hunting scenario',
        'monster': 'Describe the monster type',
        'objective': 'Describe the hunting objective',
        'challenges': 'List the hunting challenges'
    }
    
    # 2. Algorithm Mapping
    mapping = {
        'input': 'What represents the input in Monster Hunter terms',
        'output': 'What represents the output in Monster Hunter terms',
        'steps': 'Map algorithm steps to hunting actions'
    }
    
    # 3. Visual Representation
    visualization = {
        'before': 'Show the initial hunting state',
        'after': 'Show the final hunting state',
        'steps': 'Show intermediate hunting states'
    }
    
    # 4. Interactive Elements
    interactive = {
        'try_it': 'Interactive hunting scenario',
        'common_mistakes': 'Common hunting mistakes',
        'optimization': 'Hunting optimization tips'
    }
    
    return {
        'context': context,
        'mapping': mapping,
        'visualization': visualization,
        'interactive': interactive
    }
  `,
  example: `
# Example: Binary Search as Monster Territory Search
binary_search_pattern = create_monster_hunter_pattern('Binary Search', {
    'scenario': 'Searching for a monster in a sorted list of territories',
    'monster': 'A specific monster type (e.g., Rathalos)',
    'objective': 'Find the monster's territory efficiently',
    'challenges': [
        'Large number of territories to search',
        'Need to minimize search time',
        'Territories are sorted by difficulty'
    ],
    'mapping': {
        'input': 'List of territories sorted by difficulty',
        'output': 'Index of the monster's territory',
        'steps': [
            'Start in the middle territory',
            'If monster found, return territory index',
            'If monster is stronger, search higher territories',
            'If monster is weaker, search lower territories'
        ]
    },
    'visualization': {
        'before': 'Map showing all territories',
        'after': 'Map highlighting the found territory',
        'steps': [
            'Show middle territory selection',
            'Show territory comparison',
            'Show search area reduction'
        ]
    },
    'interactive': {
        'try_it': 'Interactive territory search game',
        'common_mistakes': [
            'Not checking middle territory first',
            'Searching unsorted territories',
            'Incorrect territory comparison'
        ],
        'optimization': [
            'Always start in the middle',
            'Keep territories sorted',
            'Use efficient comparison methods'
        ]
    }
})
  `,
  implementation: `from typing import TypedDict, List, Any

class MonsterHunterContext(TypedDict):
    scenario: str
    monster: str
    objective: str
    challenges: List[str]

class MonsterHunterMapping(TypedDict):
    input: str
    output: str
    steps: List[str]

class MonsterHunterVisualization(TypedDict):
    before: str
    after: str
    steps: List[str]

class MonsterHunterInteractive(TypedDict):
    try_it: str
    common_mistakes: List[str]
    optimization: List[str]

class MonsterHunterPattern(TypedDict):
    context: MonsterHunterContext
    mapping: MonsterHunterMapping
    visualization: MonsterHunterVisualization
    interactive: MonsterHunterInteractive

def create_monster_hunter_pattern(pattern_name: str, algorithm: Any) -> MonsterHunterPattern:
    return {
        "context": {
            "scenario": algorithm["scenario"],
            "monster": algorithm["monster"],
            "objective": algorithm["objective"],
            "challenges": algorithm["challenges"]
        },
        "mapping": {
            "input": algorithm["mapping"]["input"],
            "output": algorithm["mapping"]["output"],
            "steps": algorithm["mapping"]["steps"]
        },
        "visualization": {
            "before": algorithm["visualization"]["before"],
            "after": algorithm["visualization"]["after"],
            "steps": algorithm["visualization"]["steps"]
        },
        "interactive": {
            "try_it": algorithm["interactive"]["try_it"],
            "common_mistakes": algorithm["interactive"]["common_mistakes"],
            "optimization": algorithm["interactive"]["optimization"]
        }
    }

# Example: Dynamic Programming as Monster Hunting Strategy
dynamic_programming_pattern = create_monster_hunter_pattern('Dynamic Programming', {
    "scenario": "Planning optimal monster hunting routes",
    "monster": "Multiple monsters with different rewards",
    "objective": "Maximize total rewards within time limit",
    "challenges": [
        "Limited hunting time",
        "Different monster rewards",
        "Varying monster difficulty"
    ],
    "mapping": {
        "input": "List of monsters with time and reward values",
        "output": "Maximum possible rewards",
        "steps": [
            "Calculate time for each monster combination",
            "Track maximum rewards for each time",
            "Update rewards when better combination found"
        ]
    },
    "visualization": {
        "before": "Map showing all monsters and their locations",
        "after": "Map showing optimal hunting route",
        "steps": [
            "Show time calculation for each monster",
            "Show reward tracking",
            "Show optimal route selection"
        ]
    },
    "interactive": {
        "try_it": "Interactive hunting route planner",
        "common_mistakes": [
            "Not considering all monster combinations",
            "Ignoring time constraints",
            "Missing optimal routes"
        ],
        "optimization": [
            "Use memoization for repeated calculations",
            "Consider monster difficulty order",
            "Balance time and reward trade-offs"
        ]
    }
})`,
  category: "monster-hunter",
};
