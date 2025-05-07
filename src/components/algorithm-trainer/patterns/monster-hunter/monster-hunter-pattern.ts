import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const monsterHunterPattern: AlgorithmPattern = {
  title: "Monster Hunter",
  description:
    "A pattern for solving monster hunting problems where you need to optimize the order of hunting monsters to maximize rewards or minimize damage taken.",
  timeComplexity: "O(n * 2^n) where n is the number of monsters",
  spaceComplexity: "O(2^n)",
  pseudocode: `
function monsterHunter(monsters, time_limit):
    n = len(monsters)
    dp = [0] * (1 << n)
    
    for mask in range(1 << n):
        current_time = 0
        for i in range(n):
            if mask & (1 << i):
                current_time += monsters[i].time
        
        if current_time > time_limit:
            continue
            
        for i in range(n):
            if not (mask & (1 << i)):
                new_mask = mask | (1 << i)
                reward = monsters[i].reward
                dp[new_mask] = max(dp[new_mask], dp[mask] + reward)
    
    return max(dp)
  `,
  example: `
# Example usage:
monsters = [
    {"time": 2, "reward": 10},
    {"time": 3, "reward": 15},
    {"time": 5, "reward": 20}
]
time_limit = 7
max_reward = monster_hunter(monsters, time_limit)
print(max_reward)  # Output: 25 (monsters 0 and 1)
  `,
  implementation: `from typing import List, Dict, TypedDict

class Monster(TypedDict):
    time: int
    reward: int

def monster_hunter(monsters: List[Monster], time_limit: int) -> int:
    n = len(monsters)
    dp = [0] * (1 << n)
    
    for mask in range(1 << n):
        current_time = 0
        for i in range(n):
            if mask & (1 << i):
                current_time += monsters[i]["time"]
        
        if current_time > time_limit:
            continue
        
        for i in range(n):
            if not (mask & (1 << i)):
                new_mask = mask | (1 << i)
                reward = monsters[i]["reward"]
                dp[new_mask] = max(dp[new_mask], dp[mask] + reward)
    
    return max(dp)

def get_optimal_sequence(monsters: List[Monster], time_limit: int) -> List[Monster]:
    n = len(monsters)
    dp = [0] * (1 << n)
    prev = [-1] * (1 << n)
    
    for mask in range(1 << n):
        current_time = 0
        for i in range(n):
            if mask & (1 << i):
                current_time += monsters[i]["time"]
        
        if current_time > time_limit:
            continue
        
        for i in range(n):
            if not (mask & (1 << i)):
                new_mask = mask | (1 << i)
                reward = monsters[i]["reward"]
                if dp[new_mask] < dp[mask] + reward:
                    dp[new_mask] = dp[mask] + reward
                    prev[new_mask] = i
    
    # Reconstruct the sequence
    sequence = []
    mask = dp.index(max(dp))
    while mask > 0:
        monster_index = prev[mask]
        sequence.insert(0, monsters[monster_index])
        mask ^= (1 << monster_index)
    
    return sequence`,
  category: "monster-hunter",
};
