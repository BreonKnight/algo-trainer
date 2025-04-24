import { PatternKey } from "./types";

export const monsterHunterPatternsExtended = new Map<PatternKey, string>([
  [
    "Binary Search" as PatternKey,
    `def monster_hunter_binary_search(material_list, target_material):
    """
    Search for a specific material in a sorted material list.
    Time Complexity: O(log n)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like searching for a specific material in your organized item box
    - Each check halves the search area
    - Similar to narrowing down material locations in zones
    
    Example:
    material_list = ["Anjanath Scale", "Diablos Horn", "Nergigante Gem", "Rathalos Ruby"]
    target = "Nergigante Gem"
    
    Step 1: Check middle (Diablos Horn)
    - Target is after middle, search right half
    
    Step 2: Check middle of right half (Nergigante Gem)
    - Found target!
    """
    left, right = 0, len(material_list) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if material_list[mid] == target_material:
            return mid  # Material found!
        elif material_list[mid] < target_material:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    
    return -1  # Material not found`,
  ],

  [
    "Dynamic Programming" as PatternKey,
    `def monster_hunter_dp(monster_quests, resources):
    """
    Optimize quest selection using Dynamic Programming.
    Time Complexity: O(quests * resources)
    Space Complexity: O(quests * resources)
    
    Monster Hunter Context:
    - Like planning optimal quest routes for farming materials
    - Each state represents available resources and remaining quests
    - Memoization is like keeping track of previously calculated optimal paths
    
    Example:
    quests = [
        {"monster": "Rathalos", "rewards": 100, "stamina_cost": 30},
        {"monster": "Nergigante", "rewards": 200, "stamina_cost": 50},
        {"monster": "Teostra", "rewards": 150, "stamina_cost": 40}
    ]
    
    Step 1: Calculate optimal rewards for each stamina level
    Step 2: Build solution by tracking chosen quests
    """
    # Initialize memoization table
    dp = [[0] * (resources + 1) for _ in range(len(monster_quests) + 1)]
    
    # Fill table with optimal values
    for i in range(1, len(monster_quests) + 1):
        for j in range(resources + 1):
            if monster_quests[i-1]["stamina_cost"] <= j:
                dp[i][j] = max(
                    dp[i-1][j],  # Skip current quest
                    dp[i-1][j - monster_quests[i-1]["stamina_cost"]] + 
                    monster_quests[i-1]["rewards"]  # Take current quest
                )
            else:
                dp[i][j] = dp[i-1][j]
    
    return dp[-1][-1]`,
  ],

  [
    "BFS" as PatternKey,
    `def monster_hunter_bfs(monster_map, start_zone):
    """
    Explore monster territories using Breadth-First Search.
    Time Complexity: O(zones + paths)
    Space Complexity: O(zones)
    
    Monster Hunter Context:
    - Like exploring connected zones in a monster's territory
    - Each level represents zones equidistant from start
    - Queue tracks zones to explore next
    
    Example:
    monster_map = {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Rotten Vale"],
        "Coral Highlands": ["Rotten Vale"],
        "Rotten Vale": ["Elder's Recess"]
    }
    
    Step 1: Start at Ancient Forest
    Step 2: Explore connected zones level by level
    Step 3: Track visited zones to avoid loops
    """
    visited = set()
    queue = [start_zone]
    visited.add(start_zone)
    
    while queue:
        current_zone = queue.pop(0)
        print(f"Exploring {current_zone}")
        
        for next_zone in monster_map[current_zone]:
            if next_zone not in visited:
                visited.add(next_zone)
                queue.append(next_zone)`,
  ],

  [
    "DFS" as PatternKey,
    `def monster_hunter_dfs(monster_map, start_zone, visited=None):
    """
    Deep exploration of monster territories using Depth-First Search.
    Time Complexity: O(zones + paths)
    Space Complexity: O(zones)
    
    Monster Hunter Context:
    - Like tracking a monster through connecting zones
    - Each recursive call is following a specific path
    - Backtracking when reaching a dead end
    
    Example:
    monster_map = {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Rotten Vale"],
        "Coral Highlands": ["Rotten Vale"],
        "Rotten Vale": ["Elder's Recess"]
    }
    
    Follow monster tracks to deepest zone before exploring alternatives
    """
    if visited is None:
        visited = set()
    
    visited.add(start_zone)
    print(f"Tracking through {start_zone}")
    
    for next_zone in monster_map[start_zone]:
        if next_zone not in visited:
            monster_hunter_dfs(monster_map, next_zone, visited)`,
  ],

  [
    "Greedy" as PatternKey,
    `def monster_hunter_greedy(available_quests):
    """
    Select quests using Greedy approach.
    Time Complexity: O(n log n)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like choosing most rewarding quests with limited time
    - Each decision picks the currently best option
    - No backtracking or reconsidering choices
    
    Example:
    quests = [
        {"name": "Hunt Rathalos", "reward": 100, "time": 20},
        {"name": "Hunt Nergigante", "reward": 200, "time": 30},
        {"name": "Hunt Teostra", "reward": 150, "time": 25}
    ]
    
    Step 1: Sort by reward/time ratio
    Step 2: Take highest ratio quests until time runs out
    """
    # Sort quests by reward/time ratio
    quests = sorted(available_quests, 
                   key=lambda x: x["reward"]/x["time"],
                   reverse=True)
    
    selected = []
    total_time = 0
    time_limit = 120  # 2 hours
    
    for quest in quests:
        if total_time + quest["time"] <= time_limit:
            selected.append(quest)
            total_time += quest["time"]
    
    return selected`,
  ],

  [
    "Two Pointers" as PatternKey,
    `def monster_hunter_two_pointers(material_list, target_value):
    """
    Find two materials that combine to target value.
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like finding two materials for a specific craft
    - Left pointer starts at cheapest materials
    - Right pointer starts at most expensive
    
    Example:
    materials = [
        ("Iron Ore", 10),
        ("Monster Bone", 20),
        ("Dragon Bone", 50),
        ("Elder Dragon Gem", 100)
    ]
    target = 70  # Combined value needed
    
    Move pointers until finding correct combination
    """
    left, right = 0, len(material_list) - 1
    
    while left < right:
        current_sum = material_list[left][1] + material_list[right][1]
        if current_sum == target_value:
            return material_list[left], material_list[right]
        elif current_sum < target_value:
            left += 1
        else:
            right -= 1
    
    return None  # No combination found`,
  ],

  [
    "Sliding Window" as PatternKey,
    `def monster_hunter_sliding_window(monster_spawns, window_size):
    """
    Find optimal hunting window for maximum monsters.
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like finding best time window for multi-monster hunts
    - Window represents time period for hunting
    - Slide window to find maximum monster density
    
    Example:
    spawns = [2, 1, 4, 3, 1, 2, 1, 3]  # Monsters per hour
    window = 3  # Hours available for hunting
    
    Step 1: Start with first 3 hours
    Step 2: Slide window forward, updating max count
    Step 3: Return best time period
    """
    if len(monster_spawns) < window_size:
        return monster_spawns
    
    # Calculate first window
    current_sum = sum(monster_spawns[:window_size])
    max_sum = current_sum
    max_start = 0
    
    # Slide window
    for i in range(window_size, len(monster_spawns)):
        current_sum = current_sum - monster_spawns[i-window_size] + monster_spawns[i]
        if current_sum > max_sum:
            max_sum = current_sum
            max_start = i - window_size + 1
    
    return monster_spawns[max_start:max_start+window_size]`,
  ],
]);

// Export combined patterns
export const allMonsterHunterPatterns = new Map([
  ...monsterHunterPatternsExtended,
  // Add original patterns here when combining
]);
