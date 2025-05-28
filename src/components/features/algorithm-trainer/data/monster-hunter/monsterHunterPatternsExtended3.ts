import { PatternKey } from "@algo-trainer/shared/types/algorithm-types";

export const monsterHunterPatternsExtended3 = new Map<PatternKey, string>([
  [
    "Backtracking" as PatternKey,
    `def monster_hunter_backtracking(equipment_options, target_stats):
    """
    Find optimal equipment combinations using Backtracking.
    Time: O(2^n) - trying all possible combinations
    Space: O(n) - recursion depth
    
    Monster Hunter Context:
    - Like trying different armor combinations
    - Each choice affects overall build stats
    - Backtrack when stats don't meet requirements
    
    Example:
    equipment = [
        {"name": "Rathalos Helm", "defense": 50, "fire_res": 3},
        {"name": "Nergigante Mail", "defense": 60, "dragon_res": 2},
        {"name": "Teostra Greaves", "defense": 55, "fire_res": 2}
    ]
    target = {"min_defense": 150, "min_fire_res": 4}
    
    Process:
    1. Try Rathalos Helm
    2. Try Nergigante Mail
    3. If stats insufficient, backtrack and try different piece
    """
    def try_equipment(current_build, index, current_stats):
        if meets_requirements(current_stats, target_stats):
            return current_build
        
        if index >= len(equipment_options):
            return None
        
        # Try including current equipment
        with_current = try_equipment(
            current_build + [equipment_options[index]],
            index + 1,
            update_stats(current_stats, equipment_options[index])
        )
        if with_current:
            return with_current
        
        # Try without current equipment
        return try_equipment(current_build, index + 1, current_stats)
    
    return try_equipment([], 0, {"defense": 0, "fire_res": 0})`,
  ],

  [
    "Prefix Sum" as PatternKey,
    `def monster_hunter_prefix_sum(damage_log):
    """
    Calculate cumulative damage using Prefix Sum.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking cumulative damage on a monster
    - Each hit adds to total damage dealt
    - Quick lookup of damage in any time window
    
    Example:
    damage_log = [150, 200, 300, 100, 250]  # Damage per hit
    
    Prefix sums:
    [150, 350, 650, 750, 1000]
    
    Query: Total damage between hits 2-4
    Answer: prefix[4] - prefix[1] = 750 - 150 = 600
    """
    n = len(damage_log)
    prefix = [0] * n
    prefix[0] = damage_log[0]
    
    # Build prefix sum array
    for i in range(1, n):
        prefix[i] = prefix[i-1] + damage_log[i]
    
    def query_damage(start, end):
        if start == 0:
            return prefix[end]
        return prefix[end] - prefix[start-1]
    
    return prefix, query_damage`,
  ],

  [
    "Kadane's Algorithm" as PatternKey,
    `def monster_hunter_kadane(damage_windows):
    """
    Find maximum damage window using Kadane's Algorithm.
    Time: O(n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding best damage phase in a hunt
    - Each window represents damage in a time period
    - Maximize total damage across consecutive windows
    
    Example:
    damage_windows = [100, -50, 200, -30, 150, -100, 200]
    
    Process:
    1. Start with first window: 100
    2. Add next if it improves total: 100 + (-50) = 50
    3. New window might be better: 200
    4. Continue to find best sequence
    
    Result: Best damage phase = 520 (windows 3-7)
    """
    max_damage = float('-inf')
    current_damage = 0
    
    start = 0
    end = 0
    temp_start = 0
    
    for i, damage in enumerate(damage_windows):
        current_damage = max(damage, current_damage + damage)
        
        if current_damage == damage:
            temp_start = i
            
        if current_damage > max_damage:
            max_damage = current_damage
            start = temp_start
            end = i
    
    return max_damage, (start, end)`,
  ],

  [
    "Rabin-Karp" as PatternKey,
    `def monster_hunter_rabin_karp(monster_tracks, pattern):
    """
    Find monster track patterns using Rabin-Karp Algorithm.
    Time: O(n+m)
    Space: O(1)
    
    Monster Hunter Context:
    - Like following a sequence of monster tracks
    - Pattern is a specific track arrangement
    - Rolling hash helps quick pattern matching
    
    Example:
    tracks = "PFSCSFPFSCSF"  # P=Paw, F=Footprint, S=Scratch, C=Claw
    pattern = "PFSCS"  # Looking for this sequence
    
    Process:
    1. Calculate pattern hash
    2. Use rolling hash on track sequence
    3. Compare hashes and verify matches
    
    Found at positions: 0, 6
    """
    def calculate_hash(text, length):
        h = 0
        for i in range(length):
            h = h * 256 + ord(text[i])
        return h
    
    pattern_hash = calculate_hash(pattern, len(pattern))
    current_hash = calculate_hash(monster_tracks, len(pattern))
    
    matches = []
    
    # Check each possible position
    for i in range(len(monster_tracks) - len(pattern) + 1):
        if pattern_hash == current_hash:
            if monster_tracks[i:i+len(pattern)] == pattern:
                matches.append(i)
        
        if i < len(monster_tracks) - len(pattern):
            # Update rolling hash
            current_hash = (current_hash - ord(monster_tracks[i]) * 256) * 256 + ord(monster_tracks[i + len(pattern)])
    
    return matches`,
  ],

  [
    "Knuth-Morris-Pratt" as PatternKey,
    `def monster_hunter_kmp(monster_behavior, pattern):
    """
    Find monster attack patterns using KMP Algorithm.
    Time: O(n+m)
    Space: O(m)
    
    Monster Hunter Context:
    - Like recognizing monster attack patterns
    - Pattern is a sequence of moves
    - Efficient pattern matching for predictions
    
    Example:
    behavior = "RAFRRAFRRAFR"  # R=Roar, A=Attack, F=Fly, R=Run
    pattern = "RAFR"  # Looking for this attack sequence
    
    Process:
    1. Build failure function
    2. Use it to skip unnecessary comparisons
    3. Find all pattern occurrences
    
    Found at positions: 0, 4, 8
    """
    def build_failure_function(pattern):
        failure = [0] * len(pattern)
        i = 1
        j = 0
        
        while i < len(pattern):
            if pattern[i] == pattern[j]:
                failure[i] = j + 1
                i += 1
                j += 1
            elif j > 0:
                j = failure[j-1]
            else:
                failure[i] = 0
                i += 1
        
        return failure
    
    failure = build_failure_function(pattern)
    matches = []
    
    i = 0  # index for behavior
    j = 0  # index for pattern
    
    while i < len(monster_behavior):
        if monster_behavior[i] == pattern[j]:
            if j == len(pattern) - 1:
                matches.append(i - j)
                j = failure[j]
            else:
                j += 1
            i += 1
        elif j > 0:
            j = failure[j-1]
        else:
            i += 1
    
    return matches`,
  ],

  [
    "Manacher's Algorithm" as PatternKey,
    `def monster_hunter_manacher(monster_sequence):
    """
    Find symmetric monster patterns using Manacher's Algorithm.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like finding symmetric attack patterns
    - Pattern reads same forwards and backwards
    - Useful for predicting monster behavior
    
    Example:
    sequence = "RAFARAFAR"
    # R=Roar, A=Attack, F=Fly
    
    Process:
    1. Add separators: #R#A#F#A#R#A#F#A#R#
    2. Find palindromes around each center
    3. Use previous results to speed up search
    
    Longest pattern: "RAFARAFAR" (entire sequence)
    """
    # Transform sequence
    processed = '#' + '#'.join(monster_sequence) + '#'
    n = len(processed)
    P = [0] * n  # Palindrome radii
    
    center = 0
    radius = 0
    
    for i in range(n):
        if i < radius:
            mirror = 2 * center - i
            P[i] = min(radius - i, P[mirror])
        
        # Attempt to expand palindrome
        while (i + 1 + P[i] < n and 
               i - 1 - P[i] >= 0 and
               processed[i + 1 + P[i]] == processed[i - 1 - P[i]]):
            P[i] += 1
        
        # Update center if this palindrome extends beyond radius
        if i + P[i] > radius:
            center = i
            radius = i + P[i]
    
    # Find longest palindrome
    max_len = max(P)
    center_index = P.index(max_len)
    start = (center_index - max_len) // 2
    end = start + max_len
    
    return monster_sequence[start:end]`,
  ],

  [
    "Z Algorithm" as PatternKey,
    `def monster_hunter_z_algorithm(monster_pattern, behavior_log):
    """
    Pattern matching in monster behavior using Z-Algorithm.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like analyzing monster behavior patterns
    - Pattern is a known attack sequence
    - Find all occurrences quickly
    
    Example:
    pattern = "RAAR"  # R=Roar, A=Attack
    behavior = "RAARRAARRAAR"
    
    Process:
    1. Concatenate pattern and behavior
    2. Build Z-array of matching lengths
    3. Find pattern occurrences
    
    Found at positions: 0, 4, 8
    """
    def build_z_array(text):
        n = len(text)
        Z = [0] * n
        Z[0] = n
        
        left = right = 0
        for i in range(1, n):
            if i > right:
                left = right = i
                while right < n and text[right] == text[right-left]:
                    right += 1
                Z[i] = right - left
                right -= 1
            else:
                k = i - left
                if Z[k] < right - i + 1:
                    Z[i] = Z[k]
                else:
                    left = i
                    while right < n and text[right] == text[right-left]:
                        right += 1
                    Z[i] = right - left
                    right -= 1
        
        return Z
    
    combined = monster_pattern + "$" + behavior_log
    Z = build_z_array(combined)
    pattern_length = len(monster_pattern)
    
    matches = []
    for i in range(pattern_length + 1, len(combined)):
        if Z[i] == pattern_length:
            matches.append(i - pattern_length - 1)
    
    return matches`,
  ],

  [
    "Matrix Traversal" as PatternKey,
    `def monster_hunter_matrix_traversal(hunting_ground):
    """
    Traverse hunting ground zones using Matrix Traversal.
    Time: O(rows * cols)
    Space: O(1)
    
    Monster Hunter Context:
    - Like exploring a map zone by zone
    - Each cell represents a specific area
    - Systematic exploration of territory
    
    Example:
    hunting_ground = [
        ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
        ['F', 'C', 'C', 'M'],
        ['C', 'C', 'M', 'M']
    ]
    
    Process:
    1. Start from top-left corner
    2. Visit each zone systematically
    3. Record resources and monsters
    """
    rows = len(hunting_ground)
    cols = len(hunting_ground[0])
    resources = {
        'F': 'Forest Resources',
        'C': 'Cave Resources',
        'M': 'Mountain Resources'
    }
    
    def explore_zone(row, col):
        terrain = hunting_ground[row][col]
        print(f"Exploring {resources[terrain]} at ({row}, {col})")
    
    for row in range(rows):
        for col in range(cols):
            explore_zone(row, col)`,
  ],

  [
    "Matrix Traversal Recursive" as PatternKey,
    `def monster_hunter_matrix_traversal_recursive(hunting_ground):
    """
    Recursively explore hunting zones using Matrix Traversal.
    Time: O(rows * cols)
    Space: O(rows + cols)
    
    Monster Hunter Context:
    - Like tracking a monster through zones
    - Each move leads to adjacent areas
    - Backtrack when reaching dead ends
    
    Example:
    hunting_ground = [
        ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
        ['F', 'C', 'C', 'M'],
        ['C', 'C', 'M', 'M']
    ]
    
    Process:
    1. Start from monster's last known location
    2. Recursively explore adjacent zones
    3. Mark visited areas to avoid circles
    """
    def is_valid_zone(row, col):
        return (0 <= row < len(hunting_ground) and
                0 <= col < len(hunting_ground[0]))
    
    def explore_zone(row, col, visited):
        if not is_valid_zone(row, col) or (row, col) in visited:
            return
        
        visited.add((row, col))
        terrain = hunting_ground[row][col]
        print(f"Exploring {terrain} at ({row}, {col})")
        
        # Explore adjacent zones
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        for dx, dy in directions:
            explore_zone(row + dx, col + dy, visited)
    
    visited = set()
    explore_zone(0, 0, visited)`,
  ],

  [
    "Matrix Spiral Traversal" as PatternKey,
    `def monster_hunter_matrix_spiral(hunting_ground):
    """
    Spiral exploration of hunting zones.
    Time: O(rows * cols)
    Space: O(1)
    
    Monster Hunter Context:
    - Like circling inward to find a monster
    - Systematic spiral search pattern
    - Cover all zones efficiently
    
    Example:
    hunting_ground = [
        ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
        ['F', 'C', 'C', 'M'],
        ['C', 'C', 'M', 'M']
    ]
    
    Spiral pattern:
    F → F → C → M
    ↑         ↓
    F   C   C   M
    ↑         ↓
    C → C → M → M
    """
    def spiral_search():
        top = left = 0
        bottom = len(hunting_ground) - 1
        right = len(hunting_ground[0]) - 1
        
        while top <= bottom and left <= right:
            # Move right
            for col in range(left, right + 1):
                explore_zone(top, col)
            top += 1
            
            # Move down
            for row in range(top, bottom + 1):
                explore_zone(row, right)
            right -= 1
            
            if top <= bottom:
                # Move left
                for col in range(right, left - 1, -1):
                    explore_zone(bottom, col)
                bottom -= 1
            
            if left <= right:
                # Move up
                for row in range(bottom, top - 1, -1):
                    explore_zone(row, left)
                left += 1
    
    def explore_zone(row, col):
        terrain = hunting_ground[row][col]
        print(f"Exploring {terrain} at ({row}, {col})")
    
    spiral_search()`,
  ],

  [
    "Matrix Spiral Recursive" as PatternKey,
    `def monster_hunter_matrix_spiral_recursive(hunting_ground):
    """
    Recursive spiral exploration of hunting zones.
    Time: O(rows * cols)
    Space: O(rows + cols)
    
    Monster Hunter Context:
    - Like spiraling inward to track a monster
    - Each layer represents a search perimeter
    - Recursive approach for systematic coverage
    
    Example:
    hunting_ground = [
        ['F', 'F', 'C', 'M'],  # F=Forest, C=Cave, M=Mountain
        ['F', 'C', 'C', 'M'],
        ['C', 'C', 'M', 'M']
    ]
    
    Process:
    1. Explore outer perimeter
    2. Recursively explore inner layers
    3. Continue until reaching center
    """
    def spiral_layer(top, left, bottom, right):
        if top > bottom or left > right:
            return
        
        # Explore current layer perimeter
        # Top edge
        for col in range(left, right + 1):
            explore_zone(top, col)
        
        # Right edge
        for row in range(top + 1, bottom + 1):
            explore_zone(row, right)
        
        if top < bottom:
            # Bottom edge
            for col in range(right - 1, left - 1, -1):
                explore_zone(bottom, col)
        
        if left < right:
            # Left edge
            for row in range(bottom - 1, top, -1):
                explore_zone(row, left)
        
        # Recursively explore inner layer
        spiral_layer(top + 1, left + 1, bottom - 1, right - 1)
    
    def explore_zone(row, col):
        terrain = hunting_ground[row][col]
        print(f"Exploring {terrain} at ({row}, {col})")
    
    spiral_layer(0, 0, len(hunting_ground) - 1, len(hunting_ground[0]) - 1)`,
  ],

  [
    "Monotonic Stack" as PatternKey,
    `def monster_hunter_monotonic_stack(monster_threats):
    """
    Track increasing monster threats using Monotonic Stack.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking increasingly dangerous monsters
    - Stack maintains order of threat levels
    - Useful for finding next greater threat
    
    Example:
    threats = [3, 1, 4, 2, 5]  # Threat levels
    
    Process:
    1. Push first threat
    2. Compare with next threat
    3. Pop smaller threats when larger found
    
    Result: Next greater threat for each:
    3 -> 4
    1 -> 4
    4 -> 5
    2 -> 5
    5 -> None
    """
    stack = []
    result = [-1] * len(monster_threats)
    
    for i, threat in enumerate(monster_threats):
        # Pop threats that are less dangerous
        while stack and monster_threats[stack[-1]] < threat:
            prev_index = stack.pop()
            result[prev_index] = threat
        stack.append(i)
    
    return result`,
  ],

  [
    "Monotonic Queue" as PatternKey,
    `def monster_hunter_monotonic_queue(monster_damages, window_size):
    """
    Track maximum damage in sliding window using Monotonic Queue.
    Time: O(n)
    Space: O(k)
    
    Monster Hunter Context:
    - Like tracking highest damage in time window
    - Queue maintains decreasing damage values
    - Useful for finding maximum damage phases
    
    Example:
    damages = [100, 80, 60, 70, 60, 75, 85]
    window = 3  # Time window size
    
    Process:
    1. Maintain decreasing queue
    2. Remove old values
    3. Add new values
    
    Result: Maximum damage in each window:
    [100, 80, 70] -> 100
    [80, 60, 70] -> 80
    [60, 70, 60] -> 70
    [70, 60, 75] -> 75
    [60, 75, 85] -> 85
    """
    from collections import deque
    
    queue = deque()  # Store indices
    result = []
    
    for i, damage in enumerate(monster_damages):
        # Remove elements outside window
        while queue and queue[0] <= i - window_size:
            queue.popleft()
        
        # Remove smaller damages
        while queue and monster_damages[queue[-1]] <= damage:
            queue.pop()
        
        queue.append(i)
        
        # Add to result if window is complete
        if i >= window_size - 1:
            result.append(monster_damages[queue[0]])
    
    return result`,
  ],

  [
    "Floyd Cycle Detection" as PatternKey,
    `def monster_hunter_floyd_cycle(monster_path):
    """
    Detect monster patrol patterns using Floyd's Algorithm.
    Time: O(n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding monster patrol routes
    - Detect if monster follows circular path
    - Find start of patrol cycle
    
    Example:
    path = [1, 2, 3, 4, 2]  # Zone numbers
    1 -> 2 -> 3 -> 4
         ↑         |
         +---------+
    
    Process:
    1. Use two scouts (slow and fast)
    2. If they meet, cycle exists
    3. Find cycle start point
    """
    def get_next_zone(current):
        return monster_path[current]
    
    # Initialize scouts
    slow = fast = 0
    
    # Phase 1: Detect cycle
    while True:
        slow = get_next_zone(slow)
        fast = get_next_zone(get_next_zone(fast))
        
        if slow == fast:
            break
    
    # Phase 2: Find cycle start
    slow = 0
    while slow != fast:
        slow = get_next_zone(slow)
        fast = get_next_zone(fast)
    
    return slow  # Start of patrol cycle`,
  ],

  [
    "DFS" as PatternKey,
    `def monster_hunter_dfs(territory_map, start_location):
    """
    Explore monster territory using Depth-First Search.
    Time: O(V + E) - vertices + edges
    Space: O(V) - recursion stack
    
    Monster Hunter Context:
    - Like thoroughly exploring a monster's territory
    - Follow each path as far as possible before backtracking
    - Mark visited areas to avoid revisiting
    
    Example:
    territory = {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Ancient Forest", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    }
    start = "Ancient Forest"
    
    Process:
    1. Visit Ancient Forest
    2. Visit Wildspire Waste
    3. Visit Rotten Vale
    4. Visit Elder's Recess
    5. Visit Coral Highlands
    """
    visited = set()
    
    def explore(location):
        if location in visited:
            return
        
        visited.add(location)
        print(f"Exploring {location}")
        
        for connected_area in territory_map[location]:
            explore(connected_area)
    
    explore(start_location)
    return visited`,
  ],

  [
    "BFS" as PatternKey,
    `def monster_hunter_bfs(territory_map, start_location):
    """
    Explore monster territory using Breadth-First Search.
    Time: O(V + E) - vertices + edges
    Space: O(V) - queue size
    
    Monster Hunter Context:
    - Like mapping monster territory levels
    - Explore all areas at the same distance before moving further
    - Use a queue to track areas to explore next
    
    Example:
    territory = {
        "Base Camp": ["Ancient Forest", "Wildspire Waste"],
        "Ancient Forest": ["Base Camp", "Coral Highlands"],
        "Wildspire Waste": ["Base Camp", "Rotten Vale"],
        "Coral Highlands": ["Ancient Forest", "Elder's Recess"],
        "Rotten Vale": ["Wildspire Waste", "Elder's Recess"],
        "Elder's Recess": ["Coral Highlands", "Rotten Vale"]
    }
    start = "Base Camp"
    
    Process:
    Level 0: Base Camp
    Level 1: Ancient Forest, Wildspire Waste
    Level 2: Coral Highlands, Rotten Vale
    Level 3: Elder's Recess
    """
    visited = set()
    queue = [start_location]
    visited.add(start_location)
    
    while queue:
        current = queue.pop(0)
        print(f"Exploring {current}")
        
        for connected_area in territory_map[current]:
            if connected_area not in visited:
                visited.add(connected_area)
                queue.append(connected_area)
    
    return visited`,
  ],

  [
    "Graph" as PatternKey,
    `class MonsterHunterGraph:
    """
    Graph representation of monster territories.
    Operations: O(1) to O(V+E)
    Space: O(V+E)
    
    Monster Hunter Context:
    - Like mapping monster territories and connections
    - Vertices represent locations (hunting grounds)
    - Edges represent paths between locations
    
    Example:
    Territories:
    - Ancient Forest
    - Wildspire Waste
    - Coral Highlands
    - Rotten Vale
    - Elder's Recess
    
    Connections:
    - Ancient Forest <-> Wildspire Waste
    - Ancient Forest <-> Coral Highlands
    - Wildspire Waste <-> Rotten Vale
    - Coral Highlands <-> Elder's Recess
    - Rotten Vale <-> Elder's Recess
    """
    def __init__(self):
        self.territories = {}  # Adjacency list
    
    def add_territory(self, name):
        if name not in self.territories:
            self.territories[name] = []
    
    def add_path(self, from_territory, to_territory):
        if from_territory not in self.territories:
            self.add_territory(from_territory)
        if to_territory not in self.territories:
            self.add_territory(to_territory)
        
        if to_territory not in self.territories[from_territory]:
            self.territories[from_territory].append(to_territory)
        if from_territory not in self.territories[to_territory]:
            self.territories[to_territory].append(from_territory)
    
    def get_connected_territories(self, territory):
        return self.territories.get(territory, [])
    
    def has_path(self, from_territory, to_territory):
        return to_territory in self.territories.get(from_territory, [])`,
  ],

  [
    "Tree" as PatternKey,
    `class MonsterHunterTree:
    """
    Tree representation of monster species hierarchy.
    Operations: O(h) - height of tree
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing monster species in a hierarchy
    - Root at top (most general category)
    - Nodes can have children (subcategories)
    - No cycles (hierarchy doesn't loop back)
    
    Example:
    Tree structure for monster species:
                Wyvern
               /      \\
        Flying Wyvern  Brute Wyvern
        /     |     \\
    Rathalos Rathian Bazelgeuse
    
    Operations:
    - Add child: Add subspecies to a species
    - Find species: Search for a specific monster
    - Traverse: Visit all monsters in the tree
    """
    def __init__(self, species_name):
        self.species = species_name
        self.children = []
    
    def add_child(self, child_species):
        child = MonsterHunterTree(child_species)
        self.children.append(child)
        return child
    
    def find_species(self, target_species):
        if self.species == target_species:
            return self
        
        for child in self.children:
            result = child.find_species(target_species)
            if result:
                return result
        
        return None
    
    def traverse(self, level=0):
        print("  " * level + self.species)
        for child in self.children:
            child.traverse(level + 1)`,
  ],

  [
    "Trie Operations" as PatternKey,
    `class MonsterHunterTrie:
    """
    Trie for efficient monster name storage and retrieval.
    Operations: O(m) - length of string
    Space: O(ALPHABET_SIZE * m * n) - n is number of strings
    
    Monster Hunter Context:
    - Like creating a prefix tree for monster names
    - Each node represents a character in a monster name
    - Common prefixes share nodes
    - Efficient prefix searches
    
    Example:
    Monster names: "Rathalos", "Rathian", "Rajang", "Diablos"
    
    Trie structure:
           R
          / \\
         A   D
        /    |
       T     I
      /      |
     H       A
    /        |
   A          B
  /           |
 L            L
 /
O             O
              |
S             S
    
    Operations:
    - Insert: Add a new monster name
    - Search: Find a specific monster name
    - Prefix search: Find all monsters with a prefix
    """
    def __init__(self):
        self.children = {}
        self.is_end = False
    
    def insert(self, monster_name):
        node = self
        for char in monster_name:
            if char not in node.children:
                node.children[char] = MonsterHunterTrie()
            node = node.children[char]
        node.is_end = True
    
    def search(self, monster_name):
        node = self
        for char in monster_name:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end
    
    def starts_with(self, prefix):
        node = self
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
    
    def get_all_with_prefix(self, prefix):
        node = self
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        
        result = []
        self._collect_words(node, prefix, result)
        return result
    
    def _collect_words(self, node, prefix, result):
        if node.is_end:
            result.append(prefix)
        
        for char, child in node.children.items():
            self._collect_words(child, prefix + char, result)`,
  ],
]);

// Export combined patterns
export const allMonsterHunterPatterns = new Map([
  ...monsterHunterPatternsExtended3,
  // Add original patterns here when combining
]);
