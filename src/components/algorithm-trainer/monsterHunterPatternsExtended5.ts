import { PatternKey } from "./types";

export const monsterHunterPatternsExtended5 = new Map<PatternKey, string>([
  [
    "Binary Search on Answer" as PatternKey,
    `def monster_hunter_binary_search_answer(min_rarity, max_rarity, target_value):
    """
    Find the minimum rarity level needed to craft an item.
    Time: O(log n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding the minimum rarity level needed to craft a weapon
    - Each check determines if current rarity is sufficient
    - Binary search helps find the optimal rarity level
    
    Example:
    min_rarity = 1  # Common materials
    max_rarity = 10  # Rare materials
    target_value = 7  # Required crafting value
    
    Process:
    1. Check middle rarity (5)
    2. If insufficient, search higher rarities
    3. If sufficient, try lower rarities
    """
    left, right = min_rarity, max_rarity
    result = max_rarity
    
    while left <= right:
        mid = (left + right) // 2
        if can_craft_with_rarity(mid, target_value):
            result = mid
            right = mid - 1
        else:
            left = mid + 1
    
    return result`,
  ],

  [
    "Bit Manipulation" as PatternKey,
    `def monster_hunter_bit_manipulation(monster_statuses):
    """
    Track monster status effects using bit manipulation.
    Time: O(1) per operation
    Space: O(1)
    
    Monster Hunter Context:
    - Like tracking multiple status effects on a monster
    - Each bit represents a different status
    - Efficient status checking and modification
    
    Example:
    statuses = 0b0000  # No status effects
    POISON = 0b0001
    PARALYSIS = 0b0010
    SLEEP = 0b0100
    STUN = 0b1000
    
    Process:
    1. Apply poison: statuses |= POISON
    2. Check paralysis: statuses & PARALYSIS
    3. Remove sleep: statuses &= ~SLEEP
    """
    def apply_status(status, effect):
        return status | effect
    
    def remove_status(status, effect):
        return status & ~effect
    
    def has_status(status, effect):
        return (status & effect) != 0
    
    def toggle_status(status, effect):
        return status ^ effect
    
    return {
        "apply": apply_status,
        "remove": remove_status,
        "has": has_status,
        "toggle": toggle_status
    }`,
  ],

  [
    "State Compression DP" as PatternKey,
    `def monster_hunter_state_compression(equipment_slots, available_items):
    """
    Optimize equipment loadout using state compression DP.
    Time: O(2^n * n)
    Space: O(2^n)
    
    Monster Hunter Context:
    - Like finding optimal equipment combinations
    - Each state represents a set of equipped items
    - Compress state representation for efficiency
    
    Example:
    slots = 3  # Equipment slots
    items = [
        {"name": "Rathalos Helm", "defense": 50, "weight": 2},
        {"name": "Nergigante Mail", "defense": 60, "weight": 3},
        {"name": "Teostra Greaves", "defense": 55, "weight": 2}
    ]
    
    Process:
    1. Represent equipment state as bitmask
    2. Calculate optimal defense for each state
    3. Find best combination within weight limit
    """
    n = len(available_items)
    dp = [0] * (1 << n)
    
    for mask in range(1 << n):
        total_weight = 0
        total_defense = 0
        
        for i in range(n):
            if mask & (1 << i):
                total_weight += available_items[i]["weight"]
                total_defense += available_items[i]["defense"]
        
        if total_weight <= slots:
            dp[mask] = total_defense
    
    return max(dp)`,
  ],

  [
    "Digit DP" as PatternKey,
    `def monster_hunter_digit_dp(max_rarity, target_sum):
    """
    Count valid material combinations using digit DP.
    Time: O(digits * sum * 2)
    Space: O(digits * sum * 2)
    
    Monster Hunter Context:
    - Like counting valid material combinations
    - Each digit represents a material rarity
    - Find combinations that sum to target value
    
    Example:
    max_rarity = 5  # Maximum material rarity
    target_sum = 7  # Required total rarity
    
    Process:
    1. Generate all possible rarity combinations
    2. Count those that sum to target
    3. Use DP to avoid recalculating
    """
    def count_combinations(pos, sum_so_far, tight):
        if pos == len(str(max_rarity)):
            return 1 if sum_so_far == target_sum else 0
        
        key = (pos, sum_so_far, tight)
        if key in memo:
            return memo[key]
        
        limit = int(str(max_rarity)[pos]) if tight else 9
        total = 0
        
        for digit in range(limit + 1):
            new_tight = tight and (digit == limit)
            new_sum = sum_so_far + digit
            if new_sum <= target_sum:
                total += count_combinations(pos + 1, new_sum, new_tight)
        
        memo[key] = total
        return total
    
    memo = {}
    return count_combinations(0, 0, True)`,
  ],

  [
    "Tree DP" as PatternKey,
    `def monster_hunter_tree_dp(monster_tree):
    """
    Optimize monster hunting path using tree DP.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like planning optimal monster hunting routes
    - Tree represents monster territories
    - Each node has rewards and costs
    
    Example:
    tree = {
        "Ancient Forest": {
            "rewards": 100,
            "children": ["Wildspire Waste", "Coral Highlands"]
        },
        "Wildspire Waste": {
            "rewards": 80,
            "children": ["Rotten Vale"]
        }
    }
    
    Process:
    1. Calculate max rewards for each subtree
    2. Choose optimal path through territories
    3. Consider both rewards and travel costs
    """
    def dfs(node):
        if not node:
            return 0, 0
        
        take_rewards = node["rewards"]
        skip_rewards = 0
        
        for child in node["children"]:
            child_take, child_skip = dfs(child)
            take_rewards += child_skip
            skip_rewards += max(child_take, child_skip)
        
        return take_rewards, skip_rewards
    
    take, skip = dfs(monster_tree)
    return max(take, skip)`,
  ],

  [
    "Probability DP" as PatternKey,
    `def monster_hunter_probability_dp(monster_attacks, max_turns):
    """
    Calculate survival probability using probability DP.
    Time: O(turns * health)
    Space: O(turns * health)
    
    Monster Hunter Context:
    - Like calculating survival chances against monster
    - Each turn has different attack patterns
    - Track probability of surviving each turn
    
    Example:
    attacks = [
        {"damage": 30, "probability": 0.3},
        {"damage": 50, "probability": 0.1},
        {"damage": 20, "probability": 0.6}
    ]
    max_turns = 3
    health = 100
    
    Process:
    1. Calculate survival probability for each health state
    2. Consider all possible attack outcomes
    3. Find overall survival probability
    """
    dp = [[0] * (health + 1) for _ in range(max_turns + 1)]
    dp[0][health] = 1.0
    
    for turn in range(max_turns):
        for h in range(health + 1):
            if dp[turn][h] > 0:
                for attack in monster_attacks:
                    new_health = max(0, h - attack["damage"])
                    dp[turn + 1][new_health] += dp[turn][h] * attack["probability"]
    
    return sum(dp[max_turns])`,
  ],
]);
