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
// Example usage:
const testData = generateTestData();
console.log(testData.basic);    // Basic monster configurations
console.log(testData.advanced); // Advanced monster configurations
console.log(testData.edge);     // Edge case configurations
  `,
  implementation: `
interface BasicMonster {
  time: number;
  reward: number;
}

interface AdvancedMonster {
  id: number;
  health: number;
  weakness: string;
  resistance: string;
}

interface TestData {
  basic: BasicMonster[];
  advanced: AdvancedMonster[];
  edge: BasicMonster[];
}

function generateTestData(): TestData {
  // Basic test cases
  const basicMonsters: BasicMonster[] = [
    { time: 2, reward: 10 },
    { time: 3, reward: 15 },
    { time: 5, reward: 20 }
  ];
  
  // Advanced test cases with elemental properties
  const advancedMonsters: AdvancedMonster[] = [
    { id: 1, health: 100, weakness: 'fire', resistance: 'water' },
    { id: 2, health: 150, weakness: 'ice', resistance: 'fire' },
    { id: 3, health: 200, weakness: 'thunder', resistance: 'ice' }
  ];
  
  // Edge cases
  const edgeMonsters: BasicMonster[] = [
    { time: 1, reward: 1 },
    { time: 1000, reward: 1000 },
    { time: 0, reward: 0 }
  ];
  
  return {
    basic: basicMonsters,
    advanced: advancedMonsters,
    edge: edgeMonsters
  };
}

// Helper function to generate random test data
function generateRandomTestData(count: number): TestData {
  const elements = ['fire', 'ice', 'thunder', 'water', 'dragon'];
  
  const basicMonsters: BasicMonster[] = Array.from({ length: count }, () => ({
    time: Math.floor(Math.random() * 10) + 1,
    reward: Math.floor(Math.random() * 100) + 1
  }));
  
  const advancedMonsters: AdvancedMonster[] = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    health: Math.floor(Math.random() * 200) + 50,
    weakness: elements[Math.floor(Math.random() * elements.length)],
    resistance: elements[Math.floor(Math.random() * elements.length)]
  }));
  
  const edgeMonsters: BasicMonster[] = [
    { time: 1, reward: 1 },
    { time: 1000, reward: 1000 },
    { time: 0, reward: 0 }
  ];
  
  return {
    basic: basicMonsters,
    advanced: advancedMonsters,
    edge: edgeMonsters
  };
}

// Helper function to validate test data
function validateTestData(data: TestData): boolean {
  // Validate basic monsters
  for (const monster of data.basic) {
    if (monster.time < 0 || monster.reward < 0) {
      return false;
    }
  }
  
  // Validate advanced monsters
  for (const monster of data.advanced) {
    if (monster.health <= 0 || !monster.weakness || !monster.resistance) {
      return false;
    }
  }
  
  // Validate edge cases
  for (const monster of data.edge) {
    if (monster.time < 0 || monster.reward < 0) {
      return false;
    }
  }
  
  return true;
}
  `,
  category: "monster-hunter",
};
