import { AlgorithmPattern } from "../../types";

export const monsterHunterGuidePattern: AlgorithmPattern = {
  title: "Monster Hunter Guide",
  description:
    "A comprehensive guide for solving monster hunting problems, including strategies for different types of monsters and optimization techniques.",
  timeComplexity:
    "O(n * m) where n is the number of monsters and m is the number of strategies",
  spaceComplexity: "O(n + m)",
  pseudocode: `
function monsterHunterGuide(monsters, strategies):
    # Initialize monster data
    monster_data = {}
    for monster in monsters:
        monster_data[monster.id] = {
            'health': monster.health,
            'weakness': monster.weakness,
            'resistance': monster.resistance
        }
    
    # Apply strategies
    for strategy in strategies:
        for monster_id in monster_data:
            if strategy.applies_to(monster_data[monster_id]):
                monster_data[monster_id] = strategy.apply(monster_data[monster_id])
    
    return monster_data
  `,
  example: `
// Example usage:
const monsters = [
  { id: 1, health: 100, weakness: 'fire', resistance: 'water' },
  { id: 2, health: 150, weakness: 'ice', resistance: 'fire' },
  { id: 3, health: 200, weakness: 'thunder', resistance: 'ice' }
];

const strategies = [
  {
    applies_to: (monster) => monster.weakness === 'fire',
    apply: (monster) => ({ ...monster, health: monster.health * 0.8 })
  },
  {
    applies_to: (monster) => monster.resistance === 'water',
    apply: (monster) => ({ ...monster, health: monster.health * 1.2 })
  }
];

const optimizedMonsters = monsterHunterGuide(monsters, strategies);
console.log(optimizedMonsters);
  `,
  implementation: `
interface Monster {
  id: number;
  health: number;
  weakness: string;
  resistance: string;
}

interface Strategy {
  applies_to: (monster: Monster) => boolean;
  apply: (monster: Monster) => Monster;
}

function monsterHunterGuide(monsters: Monster[], strategies: Strategy[]): Record<number, Monster> {
  // Initialize monster data
  const monsterData: Record<number, Monster> = {};
  for (const monster of monsters) {
    monsterData[monster.id] = {
      ...monster
    };
  }
  
  // Apply strategies
  for (const strategy of strategies) {
    for (const monsterId in monsterData) {
      if (strategy.applies_to(monsterData[monsterId])) {
        monsterData[monsterId] = strategy.apply(monsterData[monsterId]);
      }
    }
  }
  
  return monsterData;
}

// Helper functions for common strategies
function createElementalStrategy(element: string, multiplier: number): Strategy {
  return {
    applies_to: (monster) => monster.weakness === element,
    apply: (monster) => ({
      ...monster,
      health: monster.health * multiplier
    })
  };
}

function createResistanceStrategy(element: string, multiplier: number): Strategy {
  return {
    applies_to: (monster) => monster.resistance === element,
    apply: (monster) => ({
      ...monster,
      health: monster.health * multiplier
    })
  };
}

// Helper function to get optimal strategy for a monster
function getOptimalStrategy(monster: Monster): Strategy {
  const elementalStrategies = {
    fire: createElementalStrategy('fire', 0.8),
    ice: createElementalStrategy('ice', 0.8),
    thunder: createElementalStrategy('thunder', 0.8)
  };
  
  const resistanceStrategies = {
    water: createResistanceStrategy('water', 1.2),
    fire: createResistanceStrategy('fire', 1.2),
    ice: createResistanceStrategy('ice', 1.2)
  };
  
  // Return the strategy that gives the best advantage
  return elementalStrategies[monster.weakness as keyof typeof elementalStrategies] ||
         resistanceStrategies[monster.resistance as keyof typeof resistanceStrategies];
}
  `,
  category: "monster-hunter",
};
