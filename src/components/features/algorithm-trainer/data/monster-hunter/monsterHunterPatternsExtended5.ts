import { PatternKey } from "@algo-trainer/shared/types/algorithm-types";

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
    "Tree (Dynamic Programming)" as PatternKey,
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

  [
    "Suffix Array" as PatternKey,
    `def monster_hunter_suffix_array(monster_attacks):
    """
    Create a suffix array for monster attack patterns.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing all possible attack sequences
    - Each suffix represents a possible attack pattern
    - Helps find repeated attack patterns
    
    Example:
    attacks = "RARFRARF"  # R=Roar, A=Attack, F=Fly
    Process:
    1. Generate all suffixes
    2. Sort suffixes
    3. Create suffix array
    """
    n = len(monster_attacks)
    suffixes = [(monster_attacks[i:], i) for i in range(n)]
    suffixes.sort()
    return [s[1] for s in suffixes]`,
  ],

  [
    "Strongly Connected Components" as PatternKey,
    `def monster_hunter_scc(territory_graph):
    """
    Find strongly connected components in monster territories.
    Time: O(V + E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like identifying groups of territories where monsters can freely move between any two areas
    - Each component represents a connected region
    - Helps understand monster migration patterns
    
    Example:
    territory_graph = {
        "Ancient Forest": ["Wildspire Waste"],
        "Wildspire Waste": ["Coral Highlands"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Elder's Recess": ["Rotten Vale"],
        "Rotten Vale": ["Wildspire Waste"]
    }
    
    Process:
    1. Perform first DFS to get finish times
    2. Reverse the graph
    3. Perform second DFS in reverse order
    4. Each tree in forest is an SCC
    """
    def dfs(node, visited, stack):
        visited.add(node)
        for neighbor in territory_graph.get(node, []):
            if neighbor not in visited:
                dfs(neighbor, visited, stack)
        stack.append(node)
    
    def reverse_graph(graph):
        reversed_graph = {}
        for node in graph:
            for neighbor in graph[node]:
                if neighbor not in reversed_graph:
                    reversed_graph[neighbor] = []
                reversed_graph[neighbor].append(node)
        return reversed_graph
    
    # First pass
    visited = set()
    stack = []
    for node in territory_graph:
        if node not in visited:
            dfs(node, visited, stack)
    
    # Second pass on reversed graph
    reversed_graph = reverse_graph(territory_graph)
    visited = set()
    sccs = []
    
    while stack:
        node = stack.pop()
        if node not in visited:
            component = []
            dfs(node, visited, component)
            sccs.append(component)
    
    return sccs`,
  ],

  [
    "Suffix Tree" as PatternKey,
    `def monster_hunter_suffix_tree(monster_attacks):
    """
    Create a suffix tree for monster attack patterns.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing all possible attack sequences
    - Each suffix represents a possible attack pattern
    - Helps find repeated attack patterns
    
    Example:
    attacks = "RARFRARF"  # R=Roar, A=Attack, F=Fly
    Process:
    1. Generate all suffixes
    2. Build suffix tree
    """
    n = len(monster_attacks)
    suffixes = [(monster_attacks[i:], i) for i in range(n)]
    suffixes.sort()
    return [s[1] for s in suffixes]`,
  ],
  [
    "Matrix Operations" as PatternKey,
    `def monster_hunter_matrix_operations(matrix1, matrix2, operations):
    """
    Comprehensive matrix operations for monster territory mapping and analysis.
    Time: O(n^2) for most operations
    Space: O(n^2)
    
    Monster Hunter Context:
    - Each matrix cell represents a different monster territory
    - Different traversal methods help explore territories systematically
    - Operations help analyze monster movements and resource distributions
    - Matrix transformations help view territories from different perspectives
    """
    def add_matrices(m1, m2):
        """Combine two territory maps by adding their resources."""
        return [[m1[i][j] + m2[i][j] for j in range(len(m1[0]))] for i in range(len(m1))]
    
    def transpose(matrix):
        """Create the transpose of a territory map."""
        return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]
    
    def rotate_90_clockwise(matrix):
        """Rotate territory map 90 degrees clockwise."""
        n = len(matrix)
        # First transpose
        for i in range(n):
            for j in range(i, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # Then reverse each row
        for i in range(n):
            matrix[i] = matrix[i][::-1]
        return matrix
    
    def multiply_matrices(m1, m2):
        """Multiply two territory maps."""
        if len(m1[0]) != len(m2):
            raise ValueError("Incompatible territory dimensions")
        
        result = [[0 for _ in range(len(m2[0]))] for _ in range(len(m1))]
        
        for i in range(len(m1)):
            for j in range(len(m2[0])):
                for k in range(len(m2)):
                    result[i][j] += m1[i][k] * m2[k][j]
        
        return result
    
    def spiral_traversal(matrix):
        """Traverse territory in a spiral pattern from outer to inner."""
        result = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1
        
        while top <= bottom and left <= right:
            # Top row
            for j in range(left, right + 1):
                result.append(matrix[top][j])
            top += 1
            
            # Right column
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1
            
            if top <= bottom:
                # Bottom row
                for j in range(right, left - 1, -1):
                    result.append(matrix[bottom][j])
                bottom -= 1
            
            if left <= right:
                # Left column
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1
        
        return result
    
    def diagonal_traversal(matrix):
        """Traverse territory diagonally from top-left to bottom-right."""
        result = []
        n = len(matrix)
        # Upper diagonals
        for d in range(n):
            for i in range(d + 1):
                result.append(matrix[i][d-i])
        # Lower diagonals
        for d in range(1, n):
            for i in range(d, n):
                result.append(matrix[i][n-1-(i-d)])
        return result
    
    result = {}
    for op in operations:
        if op["type"] == "add":
            result["add"] = add_matrices(matrix1, matrix2)
        elif op["type"] == "transpose":
            result["transpose"] = transpose(matrix1)
        elif op["type"] == "rotate_90_clockwise":
            result["rotate_90_clockwise"] = rotate_90_clockwise(matrix1.copy())
        elif op["type"] == "multiply":
            result["multiply"] = multiply_matrices(matrix1, matrix2)
        elif op["type"] == "spiral_traversal":
            result["spiral_traversal"] = spiral_traversal(matrix1)
        elif op["type"] == "diagonal_traversal":
            result["diagonal_traversal"] = diagonal_traversal(matrix1)
    
    return result`,
  ],
]);
