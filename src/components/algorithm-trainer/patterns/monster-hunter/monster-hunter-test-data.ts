import { AlgorithmPattern } from "../../types";

export const monsterHunterTestDataPattern: AlgorithmPattern = {
  title: "Monster Hunter Test Data",
  description:
    "A collection of test data and test cases for monster hunting problems, including various monster configurations and scenarios.",
  timeComplexity: "O(1) for test data generation",
  spaceComplexity: "O(n) where n is the number of test cases",
  pseudocode: `
function generateTestData():
    # Basic test cases
    basic_monsters = [
        { time: 2, reward: 10 },
        { time: 3, reward: 15 },
        { time: 5, reward: 20 }
    ]
    
    # Advanced test cases with elemental properties
    advanced_monsters = [
        { id: 1, health: 100, weakness: 'fire', resistance: 'water' },
        { id: 2, health: 150, weakness: 'ice', resistance: 'fire' },
        { id: 3, health: 200, weakness: 'thunder', resistance: 'ice' }
    ]
    
    # Edge cases
    edge_monsters = [
        { time: 1, reward: 1 },
        { time: 1000, reward: 1000 },
        { time: 0, reward: 0 }
    ]
    
    return {
        basic: basic_monsters,
        advanced: advanced_monsters,
        edge: edge_monsters
    }
  `,
  example: `
# Example usage:
test_data = generate_test_data()
print(test_data["basic"])     # Basic monster configurations
print(test_data["advanced"])  # Advanced monster configurations
print(test_data["edge"])      # Edge case configurations
  `,
  implementation: `from typing import TypedDict, List, Dict
import random

class BasicMonster(TypedDict):
    time: int
    reward: int

class AdvancedMonster(TypedDict):
    id: int
    health: int
    weakness: str
    resistance: str

class TestData(TypedDict):
    basic: List[BasicMonster]
    advanced: List[AdvancedMonster]
    edge: List[BasicMonster]

def generate_test_data() -> TestData:
    # Basic test cases
    basic_monsters: List[BasicMonster] = [
        {"time": 2, "reward": 10},
        {"time": 3, "reward": 15},
        {"time": 5, "reward": 20}
    ]
    
    # Advanced test cases with elemental properties
    advanced_monsters: List[AdvancedMonster] = [
        {"id": 1, "health": 100, "weakness": "fire", "resistance": "water"},
        {"id": 2, "health": 150, "weakness": "ice", "resistance": "fire"},
        {"id": 3, "health": 200, "weakness": "thunder", "resistance": "ice"}
    ]
    
    # Edge cases
    edge_monsters: List[BasicMonster] = [
        {"time": 1, "reward": 1},
        {"time": 1000, "reward": 1000},
        {"time": 0, "reward": 0}
    ]
    
    return {
        "basic": basic_monsters,
        "advanced": advanced_monsters,
        "edge": edge_monsters
    }

def generate_random_test_data(count: int) -> TestData:
    elements = ["fire", "ice", "thunder", "water", "dragon"]
    
    basic_monsters = [
        {
            "time": random.randint(1, 10),
            "reward": random.randint(1, 100)
        }
        for _ in range(count)
    ]
    
    advanced_monsters = [
        {
            "id": i + 1,
            "health": random.randint(50, 250),
            "weakness": random.choice(elements),
            "resistance": random.choice(elements)
        }
        for i in range(count)
    ]
    
    edge_monsters = [
        {"time": 1, "reward": 1},
        {"time": 1000, "reward": 1000},
        {"time": 0, "reward": 0}
    ]
    
    return {
        "basic": basic_monsters,
        "advanced": advanced_monsters,
        "edge": edge_monsters
    }

def validate_test_data(data: TestData) -> bool:
    # Validate basic monsters
    for monster in data["basic"]:
        if monster["time"] < 0 or monster["reward"] < 0:
            return False
    
    # Validate advanced monsters
    for monster in data["advanced"]:
        if monster["health"] <= 0 or not monster["weakness"] or not monster["resistance"]:
            return False
    
    # Validate edge cases
    for monster in data["edge"]:
        if monster["time"] < 0 or monster["reward"] < 0:
            return False
    
    return True`,
  category: "monster-hunter",
};
