import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const monsterHunterGuidePattern: AlgorithmPattern = {
  title: "Monster Hunter Guide",
  description:
    "A comprehensive guide for solving monster hunting problems, including strategies for different types of monsters and optimization techniques.",
  timeComplexity: "O(n * m) where n is the number of monsters and m is the number of strategies",
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
const monstersPatternPatternPatternPattern = [
  { id: 1, health: 100, weakness: 'fire', resistance: 'water' },
  { id: 2, health: 150, weakness: 'ice', resistance: 'fire' },
  { id: 3, health: 200, weakness: 'thunder', resistance: 'ice' }
];

const strategiesPatternPatternPatternPattern = [
  {
    applies_to: (monster) => monster.weakness === 'fire',
    apply: (monster) => ({ ...monster, health: monster.health * 0.8 })
  },
  {
    applies_to: (monster) => monster.resistance === 'water',
    apply: (monster) => ({ ...monster, health: monster.health * 1.2 })
  }
];

const optimizedMonstersPatternPatternPatternPattern = monsterHunterGuide(monsters, strategies);
console.log(optimizedMonsters);
  `,
  implementation: `
class Monster:
    def __init__(self, id: int, health: int, weakness: str, resistance: str):
        self.id = id
        self.health = health
        self.weakness = weakness
        self.resistance = resistance

class Strategy:
    def __init__(self, applies_to, apply):
        self.applies_to = applies_to
        self.apply = apply

def monster_hunter_guide(monsters: list[Monster], strategies: list[Strategy]) -> dict[int, Monster]:
    """
    Optimize monster hunting strategies based on monster weaknesses and resistances.
    
    Args:
        monsters: List of Monster objects
        strategies: List of Strategy objects to apply
    
    Returns:
        Dictionary mapping monster IDs to optimized Monster objects
    """
    # Initialize monster data
    monster_data = {monster.id: Monster(monster.id, monster.health, monster.weakness, monster.resistance) 
                   for monster in monsters}
    
    # Apply strategies
    for strategy in strategies:
        for monster_id, monster in monster_data.items():
            if strategy.applies_to(monster):
                monster_data[monster_id] = strategy.apply(monster)
    
    return monster_data

def create_elemental_strategy(element: str, multiplier: float) -> Strategy:
    """
    Create a strategy that applies to monsters weak to a specific element.
    
    Args:
        element: The element the monster is weak to
        multiplier: Health multiplier to apply (e.g., 0.8 for 20% damage increase)
    
    Returns:
        Strategy object
    """
    return Strategy(
        applies_to=lambda monster: monster.weakness == element,
        apply=lambda monster: Monster(monster.id, monster.health * multiplier, 
                                    monster.weakness, monster.resistance)
    )

def create_resistance_strategy(element: str, multiplier: float) -> Strategy:
    """
    Create a strategy that applies to monsters resistant to a specific element.
    
    Args:
        element: The element the monster is resistant to
        multiplier: Health multiplier to apply (e.g., 1.2 for 20% damage reduction)
    
    Returns:
        Strategy object
    """
    return Strategy(
        applies_to=lambda monster: monster.resistance == element,
        apply=lambda monster: Monster(monster.id, monster.health * multiplier, 
                                    monster.weakness, monster.resistance)
    )

def get_optimal_strategy(monster: Monster) -> Strategy:
    """
    Get the optimal strategy for a monster based on its weaknesses and resistances.
    
    Args:
        monster: The monster to get strategy for
    
    Returns:
        Optimal Strategy object
    """
    elemental_strategies = {
        'fire': create_elemental_strategy('fire', 0.8),
        'ice': create_elemental_strategy('ice', 0.8),
        'thunder': create_elemental_strategy('thunder', 0.8)
    }
    
    resistance_strategies = {
        'water': create_resistance_strategy('water', 1.2),
        'fire': create_resistance_strategy('fire', 1.2),
        'ice': create_resistance_strategy('ice', 1.2)
    }
    
    # Return the strategy that gives the best advantage
    return (elemental_strategies.get(monster.weakness) or 
            resistance_strategies.get(monster.resistance))

# Example usage
monsters = [
    Monster(1, 100, 'fire', 'water'),
    Monster(2, 150, 'ice', 'fire'),
    Monster(3, 200, 'thunder', 'ice')
]

strategies = [
    create_elemental_strategy('fire', 0.8),
    create_resistance_strategy('water', 1.2)
]

optimized_monsters = monster_hunter_guide(monsters, strategies)
print(optimized_monsters)
  `,
  category: "monster-hunter",
};
