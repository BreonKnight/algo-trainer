import { PatternKey } from "./types.ts";

export const monsterHunterPatternsExtended6 = new Map<PatternKey, string>([
  [
    "Extended Euclidean Algorithm" as PatternKey,
    `def monster_hunter_extended_euclidean(a, b):
    """
    Find optimal resource distribution using Extended Euclidean Algorithm.
    Time: O(log min(a, b))
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding optimal distribution of resources between hunters
    - Each hunter needs specific amounts of different materials
    - Find the best way to share resources
    
    Example:
    a = 30  # Hunter A needs 30 materials
    b = 45  # Hunter B needs 45 materials
    
    Process:
    1. Find GCD and coefficients
    2. Determine optimal distribution
    3. Calculate remaining resources
    """
    if b == 0:
        return a, 1, 0
    
    gcd, x1, y1 = monster_hunter_extended_euclidean(b, a % b)
    x = y1
    y = x1 - (a // b) * y1
    
    return gcd, x, y`,
  ],

  [
    "Chinese Remainder Theorem" as PatternKey,
    `def monster_hunter_crt(remainders, moduli):
    """
    Solve material distribution using Chinese Remainder Theorem.
    Time: O(n log n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding when multiple monster spawns align
    - Each monster has different spawn cycles
    - Find the next time all monsters will appear
    
    Example:
    remainders = [2, 3, 2]  # Days since last spawn
    moduli = [3, 4, 5]      # Spawn cycles
    
    Process:
    1. Calculate product of all cycles
    2. Find solution for each monster
    3. Combine solutions
    """
    def extended_gcd(a, b):
        if b == 0:
            return a, 1, 0
        gcd, x1, y1 = extended_gcd(b, a % b)
        x = y1
        y = x1 - (a // b) * y1
        return gcd, x, y
    
    def mod_inverse(a, m):
        gcd, x, y = extended_gcd(a, m)
        if gcd != 1:
            return None
        return x % m
    
    product = 1
    for m in moduli:
        product *= m
    
    result = 0
    for i in range(len(remainders)):
        mi = product // moduli[i]
        inv = mod_inverse(mi, moduli[i])
        if inv is None:
            return None
        result += remainders[i] * mi * inv
    
    return result % product`,
  ],

  [
    "Sieve of Eratosthenes" as PatternKey,
    `def monster_hunter_sieve(max_rarity):
    """
    Find all prime rarity levels using Sieve of Eratosthenes.
    Time: O(n log log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like finding all special rarity levels
    - Each rarity level has unique properties
    - Identify all prime rarity levels
    
    Example:
    max_rarity = 20
    
    Process:
    1. Mark all numbers as potential primes
    2. Start from 2, mark multiples as non-prime
    3. Continue until reaching max_rarity
    """
    is_prime = [True] * (max_rarity + 1)
    is_prime[0] = is_prime[1] = False
    
    for i in range(2, int(max_rarity ** 0.5) + 1):
        if is_prime[i]:
            for j in range(i * i, max_rarity + 1, i):
                is_prime[j] = False
    
    return [i for i, prime in enumerate(is_prime) if prime]`,
  ],

  [
    "Heavy Light Decomposition" as PatternKey,
    `def monster_hunter_hld(monster_tree):
    """
    Decompose monster territory using Heavy Light Decomposition.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing monster territories into efficient paths
    - Each path represents a hunting route
    - Optimize territory traversal
    
    Example:
    tree = {
        "Ancient Forest": {
            "children": ["Wildspire Waste", "Coral Highlands"],
            "size": 3
        },
        "Wildspire Waste": {
            "children": ["Rotten Vale"],
            "size": 2
        }
    }
    
    Process:
    1. Find heavy edges
    2. Decompose tree into chains
    3. Build segment trees for chains
    """
    def dfs(node, parent=None):
        size = 1
        max_size = 0
        heavy_child = None
        
        for child in node["children"]:
            if child != parent:
                child_size = dfs(child, node)
                size += child_size
                if child_size > max_size:
                    max_size = child_size
                    heavy_child = child
        
        node["size"] = size
        node["heavy_child"] = heavy_child
        return size
    
    def decompose(node, chain, parent=None):
        chain.append(node)
        if node["heavy_child"]:
            decompose(node["heavy_child"], chain, node)
        
        for child in node["children"]:
            if child != parent and child != node["heavy_child"]:
                new_chain = []
                decompose(child, new_chain, node)
                chains.append(new_chain)
    
    chains = []
    dfs(monster_tree)
    decompose(monster_tree, [])
    return chains`,
  ],

  [
    "LCA" as PatternKey,
    `def monster_hunter_lca(monster_tree, monster1, monster2):
    """
    Find lowest common ancestor of two monsters.
    Time: O(log n) with preprocessing
    Space: O(n log n)
    
    Monster Hunter Context:
    - Like finding the common territory of two monsters
    - Each monster has a territory path
    - Find where their paths first meet
    
    Example:
    tree = {
        "Ancient Forest": {
            "children": ["Wildspire Waste", "Coral Highlands"],
            "depth": 0
        },
        "Wildspire Waste": {
            "children": ["Rotten Vale"],
            "depth": 1
        }
    }
    monster1 = "Rotten Vale"
    monster2 = "Coral Highlands"
    
    Process:
    1. Preprocess tree for binary lifting
    2. Bring monsters to same depth
    3. Find LCA using binary search
    """
    def preprocess(node, parent=None, depth=0):
        node["depth"] = depth
        node["parent"] = parent
        for child in node["children"]:
            preprocess(child, node, depth + 1)
    
    def get_lca(u, v):
        # Bring u and v to same depth
        while u["depth"] > v["depth"]:
            u = u["parent"]
        while v["depth"] > u["depth"]:
            v = v["parent"]
        
        # Find LCA
        while u != v:
            u = u["parent"]
            v = v["parent"]
        
        return u
    
    preprocess(monster_tree)
    return get_lca(monster1, monster2)`,
  ],

  [
    "Suffix Tree" as PatternKey,
    `class MonsterHunterSuffixTree:
    """
    Build suffix tree for monster attack patterns.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like building a tree of monster attack sequences
    - Each path represents a possible attack pattern
    - Efficient pattern matching for predictions
    
    Example:
    attacks = "RARFRARF"  # R=Roar, A=Attack, F=Fly
    
    Tree structure:
    Root
    |-- R
    |   |-- A
    |   |   |-- R
    |   |   |   |-- F
    |   |   |   |   |-- R
    |   |   |   |   |   |-- A
    |   |   |   |   |   |   |-- R
    |   |   |   |   |   |   |   |-- F
    """
    def __init__(self, text):
        self.text = text
        self.root = {}
        self.build()
    
    def build(self):
        n = len(self.text)
        for i in range(n):
            current = self.root
            for j in range(i, n):
                char = self.text[j]
                if char not in current:
                    current[char] = {}
                current = current[char]
            current["$"] = i  # Mark end of suffix`,
  ],

  [
    "Suffix Array" as PatternKey,
    `def monster_hunter_suffix_array(attack_pattern):
    """
    Build suffix array for monster attack patterns.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing all possible attack sequences
    - Each suffix represents a possible attack pattern
    - Efficient pattern matching and analysis
    
    Example:
    pattern = "RARFRARF"  # R=Roar, A=Attack, F=Fly
    
    Process:
    1. Generate all suffixes
    2. Sort suffixes
    3. Build suffix array
    """
    n = len(attack_pattern)
    suffixes = []
    
    for i in range(n):
        suffixes.append((attack_pattern[i:], i))
    
    suffixes.sort()
    return [suffix[1] for suffix in suffixes]`,
  ],

  [
    "B Tree" as PatternKey,
    `class MonsterHunterBTree:
    """
    B-Tree for organizing monster materials database.
    Time: O(log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing a large database of materials
    - Each node contains multiple materials
    - Efficient for large datasets
    
    Example:
    Tree structure (order 3):
    [Material1, Material2]
    /     |     \\
    [Mat3] [Mat4,Mat5] [Mat6]
    """
    def __init__(self, order):
        self.order = order
        self.root = BTreeNode(order)
    
    def insert(self, material):
        if self.root.is_full():
            new_root = BTreeNode(self.order)
            new_root.children.append(self.root)
            new_root.split_child(0)
            self.root = new_root
        self.root.insert(material)`,
  ],

  [
    "AVL Tree" as PatternKey,
    `class MonsterHunterAVLTree:
    """
    AVL Tree for balanced material organization.
    Time: O(log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like maintaining a balanced collection of materials
    - Each node represents a material category
    - Self-balancing for optimal performance
    
    Example:
    Tree structure:
        Material3
       /         \\
    Material1  Material5
                  /
              Material4
    """
    def __init__(self, material, rarity):
        self.material = material
        self.rarity = rarity
        self.left = None
        self.right = None
        self.height = 1
    
    def insert(self, material, rarity):
        if rarity < self.rarity:
            if self.left is None:
                self.left = MonsterHunterAVLTree(material, rarity)
            else:
                self.left = self.left.insert(material, rarity)
        else:
            if self.right is None:
                self.right = MonsterHunterAVLTree(material, rarity)
            else:
                self.right = self.right.insert(material, rarity)
        
        self.height = 1 + max(self.get_height(self.left), 
                            self.get_height(self.right))
        
        balance = self.get_balance()
        
        # Perform rotations if needed
        if balance > 1:
            if rarity < self.left.rarity:
                return self.right_rotate()
            else:
                self.left = self.left.left_rotate()
                return self.right_rotate()
        
        if balance < -1:
            if rarity > self.right.rarity:
                return self.left_rotate()
            else:
                self.right = self.right.right_rotate()
                return self.left_rotate()
        
        return self`,
  ],

  [
    "Red-Black Tree" as PatternKey,
    `class MonsterHunterRedBlackTree:
    """
    Red-Black Tree for material organization with color coding.
    Time: O(log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing materials with color-coded rarity
    - Each node has a color (red/black)
    - Maintains balance through color rules
    
    Example:
    Tree structure:
        B:Material3
       /           \\
    R:Material1  B:Material5
                    /
                R:Material4
    """
    def __init__(self, material, rarity):
        self.material = material
        self.rarity = rarity
        self.left = None
        self.right = None
        self.color = "RED"
    
    def insert(self, material, rarity):
        if rarity < self.rarity:
            if self.left is None:
                self.left = MonsterHunterRedBlackTree(material, rarity)
            else:
                self.left = self.left.insert(material, rarity)
        else:
            if self.right is None:
                self.right = MonsterHunterRedBlackTree(material, rarity)
            else:
                self.right = self.right.insert(material, rarity)
        
        # Fix violations
        if self.right and self.right.color == "RED":
            self = self.left_rotate()
        
        if (self.left and self.left.color == "RED" and 
            self.left.left and self.left.left.color == "RED"):
            self = self.right_rotate()
        
        if self.left and self.left.color == "RED" and self.right and self.right.color == "RED":
            self.flip_colors()
        
        return self`,
  ],

  [
    "Fenwick Tree" as PatternKey,
    `class MonsterHunterFenwickTree:
    """
    Fenwick Tree for efficient material counting.
    Time: O(log n) per operation
    Space: O(n)
    
    Monster Hunter Context:
    - Like keeping track of material counts
    - Each node stores partial sums
    - Efficient range queries and updates
    
    Example:
    materials = [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9]
    Query: Sum of materials 1 to 6
    Answer: 1 + 3 + 2 + 3 + 4 + 5 = 18
    """
    def __init__(self, size):
        self.size = size
        self.tree = [0] * (size + 1)
    
    def update(self, index, delta):
        while index <= self.size:
            self.tree[index] += delta
            index += index & -index
    
    def query(self, index):
        res = 0
        while index > 0:
            res += self.tree[index]
            index -= index & -index
        return res`,
  ],

  [
    "Segment Tree" as PatternKey,
    `class MonsterHunterSegmentTree:
    """
    Segment Tree for range queries on materials.
    Time: O(log n) per operation
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking material quantities in ranges
    - Each node represents a range of materials
    - Efficient range queries and updates
    
    Example:
    materials = [1, 3, 5, 7, 9, 11]
    Query: Sum of materials 2 to 5
    Answer: 5 + 7 + 9 + 11 = 32
    """
    def __init__(self, data):
        self.n = len(data)
        self.size = 1
        while self.size < self.n:
            self.size <<= 1
        self.tree = [0] * (2 * self.size)
        
        # Fill leaves
        for i in range(self.n):
            self.tree[self.size + i] = data[i]
        
        # Build tree
        for i in range(self.size - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]
    
    def update(self, index, value):
        index += self.size
        self.tree[index] = value
        while index > 1:
            index >>= 1
            self.tree[index] = self.tree[2 * index] + self.tree[2 * index + 1]
    
    def query(self, l, r):
        res = 0
        l += self.size
        r += self.size
        while l <= r:
            if l % 2 == 1:
                res += self.tree[l]
                l += 1
            if r % 2 == 0:
                res += self.tree[r]
                r -= 1
            l >>= 1
            r >>= 1
        return res`,
  ],

  [
    "Matrix Chain Multiplication" as PatternKey,
    `def monster_hunter_matrix_chain(dimensions):
    """
    Optimize material transformation sequence.
    Time: O(n³)
    Space: O(n²)
    
    Monster Hunter Context:
    - Like finding optimal sequence for material transformations
    - Each matrix represents a transformation step
    - Minimize total operations needed
    
    Example:
    dimensions = [10, 20, 30, 40, 30]
    # Represents matrices: 10x20, 20x30, 30x40, 40x30
    
    Process:
    1. Calculate cost for each possible split
    2. Choose minimum cost split
    3. Build optimal sequence
    """
    n = len(dimensions) - 1
    dp = [[0] * n for _ in range(n)]
    
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = (dp[i][k] + dp[k + 1][j] + 
                       dimensions[i] * dimensions[k + 1] * dimensions[j + 1])
                if cost < dp[i][j]:
                    dp[i][j] = cost
    
    return dp[0][n - 1]`,
  ],

  [
    "Matrix Exponentiation" as PatternKey,
    `def monster_hunter_matrix_exp(matrix, power):
    """
    Calculate monster evolution using matrix exponentiation.
    Time: O(n³ log p)
    Space: O(n²)
    
    Monster Hunter Context:
    - Like calculating monster evolution over time
    - Each matrix represents state transitions
    - Find final state after multiple transitions
    
    Example:
    matrix = [
        [1, 1],
        [1, 0]
    ]
    power = 5
    
    Process:
    1. Decompose power into binary
    2. Square matrix repeatedly
    3. Multiply relevant powers
    """
    def multiply(a, b):
        n = len(a)
        result = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    result[i][j] += a[i][k] * b[k][j]
        return result
    
    def identity(n):
        return [[1 if i == j else 0 for j in range(n)] for i in range(n)]
    
    result = identity(len(matrix))
    while power > 0:
        if power % 2 == 1:
            result = multiply(result, matrix)
        matrix = multiply(matrix, matrix)
        power //= 2
    
    return result`,
  ],

  [
    "A* Search" as PatternKey,
    `def monster_hunter_a_star(hunting_grounds, start_camp, target_monster):
    """
    Find the optimal path to a monster using A* Search.
    Time: O(b^d) where b is branching factor, d is depth
    Space: O(b^d)
    
    Monster Hunter Context:
    - Like finding the most efficient path to a monster
    - Considers both distance and terrain difficulty
    - Uses heuristics to guide the search
    
    Example:
    hunting_grounds = {
        "Base Camp": [("Ancient Forest", 2), ("Wildspire Waste", 3)],
        "Ancient Forest": [("Coral Highlands", 4)],
        "Wildspire Waste": [("Rotten Vale", 3)],
        "Coral Highlands": [("Elder's Recess", 5)],
        "Rotten Vale": [("Elder's Recess", 4)]
    }
    start = "Base Camp"
    target = "Elder's Recess"
    
    Process:
    1. Initialize priority queue with start camp
    2. Track path costs and estimated distances
    3. Explore most promising paths first
    """
    from heapq import heappush, heappop
    
    def heuristic(current, target):
        """Estimate distance to target monster"""
        # In a real game, this would consider terrain, elevation, etc.
        return abs(ord(current[0]) - ord(target[0]))  # Simple example
    
    # Initialize data structures
    open_set = [(0, start_camp)]  # (f_score, location)
    came_from = {}
    g_score = {start_camp: 0}  # Actual cost from start
    f_score = {start_camp: heuristic(start_camp, target_monster)}  # Estimated total cost
    
    while open_set:
        current_f, current = heappop(open_set)
        
        if current == target_monster:
            # Reconstruct path
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start_camp)
            return path[::-1]
        
        for neighbor, cost in hunting_grounds[current]:
            tentative_g = g_score[current] + cost
            
            if neighbor not in g_score or tentative_g < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                f_score[neighbor] = tentative_g + heuristic(neighbor, target_monster)
                heappush(open_set, (f_score[neighbor], neighbor))
    
    return None  # No path found`,
  ],

  [
    "Jump Search" as PatternKey,
    `def monster_hunter_jump_search(territories, target_monster):
    """
    Find a monster in a sorted territory list using Jump Search.
    Time: O(√n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching for a monster in a large territory
    - Jump through sections of the territory
    - Use linear search when close to target
    
    Example:
    territories = ["Ancient Forest", "Coral Highlands", "Elder's Recess", 
                  "Rotten Vale", "Wildspire Waste"]
    target = "Elder's Recess"
    
    Process:
    1. Calculate optimal jump size
    2. Jump through territories
    3. Linear search when close
    """
    n = len(territories)
    step = int(n ** 0.5)  # Optimal jump size
    
    # Find the block where target might be
    prev = 0
    while territories[min(step, n) - 1] < target_monster:
        prev = step
        step += int(n ** 0.5)
        if prev >= n:
            return -1  # Monster not found
    
    # Linear search in the block
    while territories[prev] < target_monster:
        prev += 1
        if prev == min(step, n):
            return -1  # Monster not found
    
    if territories[prev] == target_monster:
        return prev  # Found the monster!
    
    return -1  # Monster not found`,
  ],

  [
    "Sieve of Sundaram" as PatternKey,
    `def monster_hunter_sieve_sundaram(area_size):
    """
    Find optimal resource gathering points using Sieve of Sundaram.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like finding optimal gathering points in a territory
    - Each point represents a resource-rich location
    - Primes indicate the most valuable spots
    
    Example:
    area_size = 30
    
    Process:
    1. Initialize array for odd numbers
    2. Mark non-prime locations
    3. Collect optimal gathering points
    """
    if area_size < 2:
        return []
    
    # Initialize array for odd numbers
    k = (area_size - 1) // 2
    is_prime = [True] * (k + 1)
    
    # Mark non-prime locations
    for i in range(1, k + 1):
        j = i
        while i + j + 2 * i * j <= k:
            is_prime[i + j + 2 * i * j] = False
            j += 1
    
    # Collect optimal gathering points
    gathering_points = [2]  # 2 is always a prime gathering point
    for i in range(1, k + 1):
        if is_prime[i]:
            gathering_points.append(2 * i + 1)
    
    return gathering_points

def find_resource_rich_locations(area_size):
    """
    Find the most resource-rich locations in a Monster Hunter area.
    Uses Sieve of Sundaram to identify optimal gathering points.
    
    Args:
        area_size (int): Size of the area to search
        
    Returns:
        list: List of optimal gathering points
    """
    return monster_hunter_sieve_sundaram(area_size)

# Example usage:
# area_size = 30
# gathering_points = find_resource_rich_locations(area_size)
# print(f"Optimal gathering points: {gathering_points}")`,
  ],

  [
    "Monotonic Stack" as PatternKey,
    `def monster_hunter_monotonic_stack(monster_heights):
    """
    Track increasing monster threat levels using Monotonic Stack.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking increasing monster threat levels
    - Each monster has a height/threat level
    - Find the next taller monster for each position
    
    Example:
    monster_heights = [3, 1, 4, 2, 5]
    # Represents threat levels of monsters in a territory
    
    Process:
    1. Initialize empty stack
    2. For each monster, pop smaller monsters
    3. Record next taller monster
    4. Push current monster
    """
    stack = []
    result = [-1] * len(monster_heights)
    
    for i in range(len(monster_heights)):
        # Pop monsters with lower threat levels
        while stack and monster_heights[stack[-1]] < monster_heights[i]:
            result[stack.pop()] = i
        stack.append(i)
    
    return result

def find_next_taller_monster(monster_heights):
    """
    Find the next taller monster for each position in a territory.
    Uses Monotonic Stack to efficiently track threat levels.
    
    Args:
        monster_heights (list): List of monster threat levels
        
    Returns:
        list: Indices of next taller monsters
    """
    return monster_hunter_monotonic_stack(monster_heights)

# Example usage:
# monster_heights = [3, 1, 4, 2, 5]
# next_taller = find_next_taller_monster(monster_heights)
# print(f"Next taller monster indices: {next_taller}")`,
  ],

  [
    "Dijkstra" as PatternKey,
    `function find_shortest_paths(territories: number[][], start: number): number[] {
      const n = territories.length;
      const dist = Array(n).fill(Infinity);
      const visited = Array(n).fill(false);
      dist[start] = 0;
      
      for (let i = 0; i < n - 1; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
          if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
            u = j;
          }
        }
        
        if (u === -1) break;
        visited[u] = true;
        
        for (let v = 0; v < n; v++) {
          if (territories[u][v] > 0) {
            dist[v] = Math.min(dist[v], dist[u] + territories[u][v]);
          }
        }
      }
      
      return dist;
    }

    // Example usage:
    const territories = [
      [0, 4, 0, 0, 0, 0, 0, 8, 0],
      [4, 0, 8, 0, 0, 0, 0, 11, 0],
      [0, 8, 0, 7, 0, 4, 0, 0, 2],
      [0, 0, 7, 0, 9, 14, 0, 0, 0],
      [0, 0, 0, 9, 0, 10, 0, 0, 0],
      [0, 0, 4, 14, 10, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 1, 6],
      [8, 11, 0, 0, 0, 0, 1, 0, 7],
      [0, 0, 2, 0, 0, 0, 6, 7, 0]
    ];

    const start_territory = 0;
    const shortest_paths = find_shortest_paths(territories, start_territory);
    console.log(\`Shortest paths from territory \${start_territory}:\`, shortest_paths);

    // Tips:
    // 1. Use edge weights to represent terrain difficulty
    // 2. Consider monster presence in path weights
    // 3. Update paths dynamically as monsters move
    // 4. Use for efficient resource gathering routes
    // 5. Plan multiple backup paths
    `,
  ],

  [
    "Sieve of Atkin" as PatternKey,
    `def monster_hunter_sieve_atkin(territory_size):
    """
    Find all prime monster habitats using Sieve of Atkin.
    Time: O(n / log log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like finding all prime monster habitats in a territory
    - Uses advanced mathematical patterns
    - More efficient than traditional sieving methods
    
    Example:
    territory_size = 30
    
    Process:
    1. Initialize sieve array
    2. Mark potential primes using quadratic forms
    3. Filter out non-primes
    4. Return list of prime habitats
    """
    if territory_size < 2:
        return []
    
    # Initialize sieve array
    sieve = [False] * (territory_size + 1)
    
    # Mark potential primes using quadratic forms
    for x in range(1, int(territory_size ** 0.5) + 1):
        for y in range(1, int(territory_size ** 0.5) + 1):
            # First quadratic form: 4x² + y²
            n = 4 * x * x + y * y
            if n <= territory_size and (n % 12 == 1 or n % 12 == 5):
                sieve[n] = not sieve[n]
            
            # Second quadratic form: 3x² + y²
            n = 3 * x * x + y * y
            if n <= territory_size and n % 12 == 7:
                sieve[n] = not sieve[n]
            
            # Third quadratic form: 3x² - y²
            n = 3 * x * x - y * y
            if x > y and n <= territory_size and n % 12 == 11:
                sieve[n] = not sieve[n]
    
    # Mark squares of primes as non-prime
    for x in range(5, int(territory_size ** 0.5) + 1):
        if sieve[x]:
            for y in range(x * x, territory_size + 1, x * x):
                sieve[y] = False
    
    # Collect prime habitats
    prime_habitats = [2, 3]
    for x in range(5, territory_size + 1):
        if sieve[x]:
            prime_habitats.append(x)
    
    return prime_habitats

def find_advanced_monster_habitats(territory_size):
    """
    Find all prime monster habitats in a territory using Sieve of Atkin.
    This is an advanced method for identifying the most valuable hunting grounds.
    
    Args:
        territory_size (int): Size of the territory to search
        
    Returns:
        list: List of prime monster habitats
    """
    return monster_hunter_sieve_atkin(territory_size)

# Example usage:
# territory_size = 30
# habitats = find_advanced_monster_habitats(territory_size)
# print(f"Prime monster habitats: {habitats}")`,
  ],

  [
    "Grid Traversal" as PatternKey,
    `def monster_hunter_grid_traversal(territory_grid, start_pos):
    """
    Explore monster territory using grid traversal.
    Time: O(rows * cols)
    Space: O(rows * cols)
    
    Monster Hunter Context:
    - Like exploring a monster's territory grid by grid
    - Each cell may contain resources, obstacles, or monsters
    - Find optimal paths and explore efficiently
    
    Example:
    territory_grid = [
        ['.', '.', '#', '.'],
        ['.', '#', '.', '.'],
        ['.', '.', '.', '#'],
        ['.', '#', '.', '.']
    ]
    start_pos = (0, 0)
    # . = empty, # = obstacle
    
    Process:
    1. Initialize visited grid
    2. Use BFS/DFS to explore
    3. Mark visited cells
    4. Handle obstacles
    """
    from collections import deque
    
    rows = len(territory_grid)
    cols = len(territory_grid[0])
    
    # Define movement directions (4-way)
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    # Initialize visited grid
    visited = [[False for _ in range(cols)] for _ in range(rows)]
    
    # BFS queue
    queue = deque([start_pos])
    visited[start_pos[0]][start_pos[1]] = True
    
    # Store exploration path
    exploration_path = []
    
    while queue:
        current_pos = queue.popleft()
        exploration_path.append(current_pos)
        
        # Explore all directions
        for dr, dc in directions:
            new_row = current_pos[0] + dr
            new_col = current_pos[1] + dc
            
            # Check if new position is valid
            if (0 <= new_row < rows and 
                0 <= new_col < cols and 
                not visited[new_row][new_col] and 
                territory_grid[new_row][new_col] != '#'):
                
                visited[new_row][new_col] = True
                queue.append((new_row, new_col))
    
    return exploration_path

def find_shortest_path_to_monster(territory_grid, start_pos, monster_pos):
    """
    Find the shortest path to a monster in the territory.
    Uses BFS for optimal path finding.
    
    Args:
        territory_grid (list): 2D grid representing the territory
        start_pos (tuple): Starting position (row, col)
        monster_pos (tuple): Monster's position (row, col)
        
    Returns:
        list: List of positions forming the shortest path
    """
    from collections import deque
    
    rows = len(territory_grid)
    cols = len(territory_grid[0])
    
    # Define movement directions (4-way)
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    # Initialize visited and parent grids
    visited = [[False for _ in range(cols)] for _ in range(rows)]
    parent = [[None for _ in range(cols)] for _ in range(rows)]
    
    # BFS queue
    queue = deque([start_pos])
    visited[start_pos[0]][start_pos[1]] = True
    
    # BFS to find monster
    while queue:
        current_pos = queue.popleft()
        
        # Found the monster
        if current_pos == monster_pos:
            # Reconstruct path
            path = []
            while current_pos is not None:
                path.append(current_pos)
                current_pos = parent[current_pos[0]][current_pos[1]]
            return path[::-1]
        
        # Explore all directions
        for dr, dc in directions:
            new_row = current_pos[0] + dr
            new_col = current_pos[1] + dc
            
            # Check if new position is valid
            if (0 <= new_row < rows and 
                0 <= new_col < cols and 
                not visited[new_row][new_col] and 
                territory_grid[new_row][new_col] != '#'):
                
                visited[new_row][new_col] = True
                parent[new_row][new_col] = current_pos
                queue.append((new_row, new_col))
    
    return []  # No path found

# Example usage:
# territory_grid = [
#     ['.', '.', '#', '.'],
#     ['.', '#', '.', '.'],
#     ['.', '.', '.', '#'],
#     ['.', '#', '.', '.']
# ]
# start_pos = (0, 0)
# monster_pos = (3, 3)
# path = find_shortest_path_to_monster(territory_grid, start_pos, monster_pos)
# print(f"Shortest path to monster: {path}")`,
  ],

  [
    "Matrix Spiral Traversal" as PatternKey,
    `def monster_hunter_spiral_search(territory_grid):
    """
    Search monster territory in a spiral pattern.
    Time: O(rows * cols)
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching a monster's territory in a spiral pattern
    - Start from center and move outward
    - Systematically explore every area
    
    Example:
    territory_grid = [
        ['R', 'R', 'M', 'R'],
        ['R', 'C', 'R', 'R'],
        ['R', 'R', 'R', 'M'],
        ['R', 'R', 'R', 'R']
    ]
    # R = Resource, M = Monster, C = Center
    
    Process:
    1. Start from center
    2. Move in spiral pattern
    3. Collect resources and note monster locations
    """
    if not territory_grid or not territory_grid[0]:
        return []
    
    rows = len(territory_grid)
    cols = len(territory_grid[0])
    
    # Find center position
    center_row = rows // 2
    center_col = cols // 2
    
    # Initialize boundaries
    top = center_row
    bottom = center_row
    left = center_col
    right = center_col
    
    # Store exploration path
    exploration_path = []
    resources_found = []
    monsters_found = []
    
    # Start from center
    exploration_path.append((center_row, center_col))
    if territory_grid[center_row][center_col] == 'R':
        resources_found.append((center_row, center_col))
    elif territory_grid[center_row][center_col] == 'M':
        monsters_found.append((center_row, center_col))
    
    # Spiral outward
    while top >= 0 or bottom < rows or left >= 0 or right < cols:
        # Move right
        if right < cols:
            for col in range(left + 1, right + 1):
                if 0 <= center_row < rows and 0 <= col < cols:
                    exploration_path.append((center_row, col))
                    if territory_grid[center_row][col] == 'R':
                        resources_found.append((center_row, col))
                    elif territory_grid[center_row][col] == 'M':
                        monsters_found.append((center_row, col))
            right += 1
        
        # Move down
        if bottom < rows:
            for row in range(top + 1, bottom + 1):
                if 0 <= row < rows and 0 <= right - 1 < cols:
                    exploration_path.append((row, right - 1))
                    if territory_grid[row][right - 1] == 'R':
                        resources_found.append((row, right - 1))
                    elif territory_grid[row][right - 1] == 'M':
                        monsters_found.append((row, right - 1))
            bottom += 1
        
        # Move left
        if left >= 0:
            for col in range(right - 2, left - 1, -1):
                if 0 <= bottom - 1 < rows and 0 <= col < cols:
                    exploration_path.append((bottom - 1, col))
                    if territory_grid[bottom - 1][col] == 'R':
                        resources_found.append((bottom - 1, col))
                    elif territory_grid[bottom - 1][col] == 'M':
                        monsters_found.append((bottom - 1, col))
            left -= 1
        
        # Move up
        if top >= 0:
            for row in range(bottom - 2, top - 1, -1):
                if 0 <= row < rows and 0 <= left + 1 < cols:
                    exploration_path.append((row, left + 1))
                    if territory_grid[row][left + 1] == 'R':
                        resources_found.append((row, left + 1))
                    elif territory_grid[row][left + 1] == 'M':
                        monsters_found.append((row, left + 1))
            top -= 1
    
    return {
        'exploration_path': exploration_path,
        'resources_found': resources_found,
        'monsters_found': monsters_found
    }

def search_territory_spiral(territory_grid):
    """
    Search a monster territory in a spiral pattern, starting from the center.
    Collects resources and notes monster locations along the way.
    
    Args:
        territory_grid (list): 2D grid representing the territory
            'R' = Resource
            'M' = Monster
            'C' = Center (starting point)
            '.' = Empty space
        
    Returns:
        dict: Contains exploration path, found resources, and found monsters
    """
    return monster_hunter_spiral_search(territory_grid)

# Example usage:
# territory_grid = [
#     ['R', 'R', 'M', 'R'],
#     ['R', 'C', 'R', 'R'],
#     ['R', 'R', 'R', 'M'],
#     ['R', 'R', 'R', 'R']
# ]
# result = search_territory_spiral(territory_grid)
# print(f"Exploration path: {result['exploration_path']}")
# print(f"Resources found: {result['resources_found']}")
# print(f"Monsters found: {result['monsters_found']}")`,
  ],

  [
    "Matrix Traversal" as PatternKey,
    `def monster_hunter_matrix_traversal(territory_grid, traversal_type='row'):
    """
    Traverse monster territory in different patterns.
    Time: O(rows * cols)
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching a monster's territory in different patterns
    - Can traverse row by row, column by column, or diagonally
    - Useful for different hunting strategies
    
    Example:
    territory_grid = [
        ['R', 'M', 'R', '.'],
        ['.', 'R', '.', 'M'],
        ['R', '.', 'M', 'R'],
        ['.', 'R', '.', '.']
    ]
    # R = Resource, M = Monster, . = Empty
    
    Process:
    1. Choose traversal pattern
    2. Visit each cell systematically
    3. Collect information about resources and monsters
    """
    if not territory_grid or not territory_grid[0]:
        return []
    
    rows = len(territory_grid)
    cols = len(territory_grid[0])
    
    # Store exploration results
    exploration_path = []
    resources_found = []
    monsters_found = []
    
    if traversal_type == 'row':
        # Row-wise traversal
        for row in range(rows):
            for col in range(cols):
                pos = (row, col)
                exploration_path.append(pos)
                if territory_grid[row][col] == 'R':
                    resources_found.append(pos)
                elif territory_grid[row][col] == 'M':
                    monsters_found.append(pos)
    
    elif traversal_type == 'column':
        # Column-wise traversal
        for col in range(cols):
            for row in range(rows):
                pos = (row, col)
                exploration_path.append(pos)
                if territory_grid[row][col] == 'R':
                    resources_found.append(pos)
                elif territory_grid[row][col] == 'M':
                    monsters_found.append(pos)
    
    elif traversal_type == 'diagonal':
        # Diagonal traversal
        for sum_diag in range(rows + cols - 1):
            if sum_diag < rows:
                row = sum_diag
                col = 0
            else:
                row = rows - 1
                col = sum_diag - rows + 1
            
            while row >= 0 and col < cols:
                pos = (row, col)
                exploration_path.append(pos)
                if territory_grid[row][col] == 'R':
                    resources_found.append(pos)
                elif territory_grid[row][col] == 'M':
                    monsters_found.append(pos)
                row -= 1
                col += 1
    
    return {
        'exploration_path': exploration_path,
        'resources_found': resources_found,
        'monsters_found': monsters_found,
        'traversal_type': traversal_type
    }

def search_territory_systematic(territory_grid, traversal_type='row'):
    """
    Search a monster territory using systematic traversal patterns.
    
    Args:
        territory_grid (list): 2D grid representing the territory
            'R' = Resource
            'M' = Monster
            '.' = Empty space
        traversal_type (str): Type of traversal to use
            'row' = Row-wise traversal
            'column' = Column-wise traversal
            'diagonal' = Diagonal traversal
    
    Returns:
        dict: Contains exploration path, found resources, and found monsters
    """
    return monster_hunter_matrix_traversal(territory_grid, traversal_type)

# Example usage:
# territory_grid = [
#     ['R', 'M', 'R', '.'],
#     ['.', 'R', '.', 'M'],
#     ['R', '.', 'M', 'R'],
#     ['.', 'R', '.', '.']
# ]
# 
# # Row-wise search
# row_result = search_territory_systematic(territory_grid, 'row')
# print(f"Row-wise exploration: {row_result['exploration_path']}")
# 
# # Column-wise search
# col_result = search_territory_systematic(territory_grid, 'column')
# print(f"Column-wise exploration: {col_result['exploration_path']}")
# 
# # Diagonal search
# diag_result = search_territory_systematic(territory_grid, 'diagonal')
# print(f"Diagonal exploration: {diag_result['exploration_path']}")`,
  ],

  [
    "Union Find" as PatternKey,
    `class MonsterHunterUnionFind:
    """
    Track connections between monster territories using Union Find.
    Time: O(α(n)) per operation (amortized)
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking which territories are connected
    - Each territory has a parent territory
    - Path compression and union by rank for efficiency
    
    Example:
    territories = ["Ancient Forest", "Wildspire Waste", "Coral Highlands"]
    # Initially, each territory is its own group
    
    Process:
    1. Initialize each territory as its own group
    2. Connect territories as paths are discovered
    3. Use path compression for efficient queries
    """
    def __init__(self, territories):
        self.parent = {territory: territory for territory in territories}
        self.rank = {territory: 0 for territory in territories}
    
    def find(self, territory):
        """
        Find the root territory of a given territory.
        Uses path compression for efficiency.
        """
        if self.parent[territory] != territory:
            self.parent[territory] = self.find(self.parent[territory])
        return self.parent[territory]
    
    def union(self, territory1, territory2):
        """
        Connect two territories.
        Uses union by rank for efficiency.
        """
        root1 = self.find(territory1)
        root2 = self.find(territory2)
        
        if root1 == root2:
            return  # Already connected
        
        # Union by rank
        if self.rank[root1] < self.rank[root2]:
            self.parent[root1] = root2
        elif self.rank[root1] > self.rank[root2]:
            self.parent[root2] = root1
        else:
            self.parent[root2] = root1
            self.rank[root1] += 1
    
    def are_connected(self, territory1, territory2):
        """
        Check if two territories are connected.
        """
        return self.find(territory1) == self.find(territory2)

def manage_territory_connections(territories, connections):
    """
    Manage connections between monster territories using Union Find.
    
    Args:
        territories (list): List of territory names
        connections (list): List of tuples (territory1, territory2) representing discovered paths
    
    Returns:
        MonsterHunterUnionFind: Union Find structure with all connections
    """
    uf = MonsterHunterUnionFind(territories)
    
    for territory1, territory2 in connections:
        uf.union(territory1, territory2)
    
    return uf

# Example usage:
# territories = ["Ancient Forest", "Wildspire Waste", "Coral Highlands", "Rotten Vale"]
# connections = [
#     ("Ancient Forest", "Wildspire Waste"),
#     ("Coral Highlands", "Rotten Vale"),
#     ("Wildspire Waste", "Rotten Vale")
# ]
# 
# uf = manage_territory_connections(territories, connections)
# 
# # Check connections
# print(uf.are_connected("Ancient Forest", "Rotten Vale"))  # True
# print(uf.are_connected("Ancient Forest", "Coral Highlands"))  # True
# print(uf.are_connected("Coral Highlands", "Wildspire Waste"))  # True`,
  ],

  [
    "Miller-Rabin Primality Test" as PatternKey,
    `def monster_hunter_miller_rabin(material_quality, test_rounds):
    """
    Find witnesses to material quality using Miller-Rabin algorithm.
    Time: O(k log³ n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like testing materials for quality flaws
    - Each witness indicates a specific quality issue
    - More witnesses mean more confidence in the material's quality
    
    Example:
    material_quality = 561  # Material quality level
    test_rounds = 5        # Number of quality tests
    
    Process:
    1. Check basic quality indicators
    2. Factor quality level into components
    3. Test with random quality checks
    4. Record any quality issues found
    """
    # Handle edge cases
    if material_quality <= 1:
        return []  # Invalid material
    if material_quality <= 3:
        return []  # Perfect quality
    if material_quality % 2 == 0:
        return [2]  # Even quality is always flawed
    
    # Factor quality level
    d = material_quality - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1
    
    quality_issues = []
    # Test multiple times
    for _ in range(test_rounds):
        test_value = random.randint(2, material_quality - 2)
        x = pow(test_value, d, material_quality)
        
        if x == 1 or x == material_quality - 1:
            continue
        
        found_issue = False
        for _ in range(s - 1):
            x = pow(x, 2, material_quality)
            if x == material_quality - 1:
                found_issue = True
                break
            if x == 1:
                quality_issues.append(test_value)
                break
        
        if not found_issue and x != material_quality - 1:
            quality_issues.append(test_value)
    
    return quality_issues`,
  ],

  [
    "Fast Fourier Transform" as PatternKey,
    `def monster_hunter_fft(monster_waves):
    """
    Analyze monster sound waves using Fast Fourier Transform.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like analyzing monster roars and sound patterns
    - Convert time-domain signals to frequency domain
    - Identify unique monster sound signatures
    
    Example:
    sound_waves = [0, 1, 0, -1, 0, 1, 0, -1]  # Monster roar samples
    
    Process:
    1. Split into even and odd indices
    2. Recursively compute FFT
    3. Combine results with twiddle factors
    """
    n = len(monster_waves)
    if n <= 1:
        return monster_waves
    
    # Split into even and odd indices
    even = monster_hunter_fft(monster_waves[::2])
    odd = monster_hunter_fft(monster_waves[1::2])
    
    # Combine results
    result = [0] * n
    for k in range(n // 2):
        t = cmath.exp(-2j * cmath.pi * k / n) * odd[k]
        result[k] = even[k] + t
        result[k + n // 2] = even[k] - t
    
    return result`,
  ],

  [
    "Tree DP" as PatternKey,
    `def monster_hunter_tree_dp(territory_tree):
    """
    Find optimal resource gathering path using Tree DP.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like finding the best path to gather resources in a territory
    - Each node represents a gathering point with resources
    - Cannot gather from adjacent points (alert monsters)
    - Find maximum resources while avoiding detection
    
    Example:
    territory_tree = {
        "value": 5,  # Resources at this point
        "children": [
            {
                "value": 3,
                "children": [
                    {"value": 1, "children": []},
                    {"value": 2, "children": []}
                ]
            },
            {
                "value": 4,
                "children": [
                    {"value": 3, "children": []}
                ]
            }
        ]
    }
    
    Process:
    1. For each gathering point, decide to gather or skip
    2. If gather, cannot gather from adjacent points
    3. If skip, can gather from children
    4. Find maximum total resources
    """
    def dfs(node):
        if node is None:
            return (0, 0)
            
        # Initialize values for current point
        gather = node["value"]  # Gather resources at this point
        skip = 0               # Skip this point
        
        for child in node["children"]:
            child_gather, child_skip = dfs(child)
            # If we gather here, must skip children
            gather += child_skip
            # If we skip here, can choose to gather or skip children
            skip += max(child_gather, child_skip)
            
        return (gather, skip)
    
    gather, skip = dfs(territory_tree)
    return max(gather, skip)

def find_optimal_gathering_path(territory_tree):
    """
    Find the optimal path to gather resources while avoiding monster detection.
    Uses Tree DP to maximize resource collection while respecting adjacency rules.
    
    Args:
        territory_tree (dict): Tree structure representing gathering points
            value: Amount of resources at this point
            children: List of connected gathering points
            
    Returns:
        int: Maximum resources that can be gathered
    """
    return monster_hunter_tree_dp(territory_tree)

# Example usage:
# territory_tree = {
#     "value": 5,
#     "children": [
#         {
#             "value": 3,
#             "children": [
#                 {"value": 1, "children": []},
#                 {"value": 2, "children": []}
#             ]
#         },
#         {
#             "value": 4,
#             "children": [
#                 {"value": 3, "children": []}
#             ]
#         }
#     ]
# }
# max_resources = find_optimal_gathering_path(territory_tree)
# print(f"Maximum resources that can be gathered: {max_resources}")`,
  ],

  [
    "Two Pointers" as PatternKey,
    `def monster_hunter_two_pointers(monster_positions, target_power):
    """
    Find two monsters that can combine their power to match target.
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like coordinating a pincer attack from two directions
    - Left pointer starts at weakest monster
    - Right pointer starts at strongest monster
    - Move pointers based on current combined power
    
    Example:
    monster_positions = [2, 3, 4, 5, 6, 7, 8, 9]
    target_power = 10
    # Returns [0, 7] (monsters at positions 0 and 7 combine to 10)
    
    Process:
    1. Initialize left pointer at start, right at end
    2. Calculate current combined power
    3. If sum equals target, return positions
    4. If sum < target, move left pointer right
    5. If sum > target, move right pointer left
    6. Repeat until pointers meet
    """
    left = 0
    right = len(monster_positions) - 1
    
    while left < right:
        current_sum = monster_positions[left] + monster_positions[right]
        
        if current_sum == target_power:
            return [left, right]
        elif current_sum < target_power:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]  # No valid combination found`,
  ],

  [
    "Null Pattern" as PatternKey,
    `def monster_hunter_null_pattern(input_data):
    """
    Sometimes, the best strategy is to do nothing!
    Time: O(1)
    Space: O(1)

    Monster Hunter Context:
    - Like leaving your loot untouched when it's already perfect
    - Sometimes, the optimal move is to not change anything
    - Useful for identity operations, constant returns, or empty actions

    Example:
    input_data = [1, 2, 3, 4, 5]
    # No transformation needed
    output = input_data

    Process:
    1. Check if any action is needed
    2. If not, return input as is
    3. If a constant is needed, return the constant
    4. If an empty operation, do nothing
    """
    return input_data  # or return a constant, or do nothing
    `,
  ],

  [
    "Test Data" as PatternKey,
    `def monster_hunter_test_data():
    """
    Generate test data to verify your hunting strategies!
    Time: O(n) for generating n test cases
    Space: O(n)

    Monster Hunter Context:
    - Like stress-testing your gear before a big hunt
    - Generate edge cases, large inventories, and random scenarios
    - Ensure your hunting strategy works in all situations

    Example:
    # Edge Case: Empty Inventory
    test_case_1 = []
    # Large Inventory
    test_case_2 = [random.randint(1, 1000) for _ in range(1000)]

    Process:
    1. Define the types of test cases needed
    2. Generate edge cases (empty, single, max size)
    3. Generate random and performance cases
    4. Use test data to validate your algorithms
    """
    return [[], [random.randint(1, 1000) for _ in range(1000)]]
    `,
  ],

  [
    "Quickselect" as PatternKey,
    `def monster_hunter_quickselect(monster_territory, k):
    """
    Find the k-th strongest monster in a territory using Quickselect.
    Time: O(n) average, O(n²) worst case
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding the k-th strongest monster in a territory
    - Each monster has a power level
    - Find the monster that would be in position k if sorted
    - Much faster than sorting all monsters first
    
    Example:
    monster_territory = [5, 3, 8, 2, 7, 1, 9, 4, 6]
    k = 4  # Find the 4th strongest monster
    
    Process:
    1. Choose a pivot monster (randomly to avoid worst case)
    2. Partition territory around pivot
    3. Recursively search in relevant partition
    4. Use median-of-medians for guaranteed linear time
    """
    def partition(left, right, pivot_idx):
        # Move pivot to end
        pivot_power = monster_territory[pivot_idx]
        monster_territory[pivot_idx], monster_territory[right] = monster_territory[right], monster_territory[pivot_idx]
        
        # Partition around pivot
        store_idx = left
        for i in range(left, right):
            if monster_territory[i] < pivot_power:
                monster_territory[store_idx], monster_territory[i] = monster_territory[i], monster_territory[store_idx]
                store_idx += 1
        
        # Move pivot to final position
        monster_territory[right], monster_territory[store_idx] = monster_territory[store_idx], monster_territory[right]
        return store_idx
    
    def select(left, right, k_smallest):
        if left == right:
            return monster_territory[left]
        
        # Choose random pivot
        pivot_idx = random.randint(left, right)
        
        # Partition and get pivot position
        pivot_idx = partition(left, right, pivot_idx)
        
        # Found the k-th smallest
        if k_smallest == pivot_idx:
            return monster_territory[k_smallest]
        # Search in left partition
        elif k_smallest < pivot_idx:
            return select(left, pivot_idx - 1, k_smallest)
        # Search in right partition
        else:
            return select(pivot_idx + 1, right, k_smallest)
    
    return select(0, len(monster_territory) - 1, k - 1)

def find_kth_strongest_monster(monster_territory, k):
    """
    Find the k-th strongest monster in a territory using Quickselect.
    This is much faster than sorting all monsters first!
    
    Args:
        monster_territory (list): List of monster power levels
        k (int): Position to find (1-based)
        
    Returns:
        int: Power level of the k-th strongest monster
    """
    return monster_hunter_quickselect(monster_territory, k)

# Example usage:
# monster_territory = [5, 3, 8, 2, 7, 1, 9, 4, 6]
# k = 4  # Find the 4th strongest monster
# kth_monster = find_kth_strongest_monster(monster_territory, k)
# print(f"The {k}th strongest monster has power level: {kth_monster}")`,
  ],

  [
    "Prefix Sums" as PatternKey,
    `def monster_hunter_prefix_sums(monster_territory):
    """
    Calculate prefix sums of monster territories for efficient range queries.
    Time: O(n) for initialization, O(1) for queries
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking cumulative resources across territories
    - Each monster territory has a power level
    - Use prefix sums to quickly calculate total power in any territory range
    - Essential for efficient resource planning and territory management
    
    Example:
    monster_territory = [3, 1, 4, 2, 5]  # Power levels of monsters
    # Prefix sums = [3, 4, 8, 10, 15]
    # Query: Total power from territory 1 to 3
    # Answer: prefix_sums[3] - prefix_sums[0] = 10 - 3 = 7
    
    Process:
    1. Initialize prefix sums array
    2. Calculate cumulative sums
    3. Use prefix sums for range queries
    """
    n = len(monster_territory)
    prefix_sums = [0] * (n + 1)
    
    # Calculate prefix sums
    for i in range(n):
        prefix_sums[i + 1] = prefix_sums[i] + monster_territory[i]
    
    def query_range(start, end):
        """
        Get total power in territory range [start, end] (inclusive).
        Time: O(1)
        """
        if start < 0 or end >= n or start > end:
            return 0
        return prefix_sums[end + 1] - prefix_sums[start]
    
    def update_power(index, new_power):
        """
        Update power level of a territory and maintain prefix sums.
        Time: O(n)
        """
        if index < 0 or index >= n:
            return
        diff = new_power - monster_territory[index]
        monster_territory[index] = new_power
        for i in range(index + 1, n + 1):
            prefix_sums[i] += diff
    
    return {
        "prefix_sums": prefix_sums,
        "query_range": query_range,
        "update_power": update_power
    }

def manage_territory_power(monster_territory):
    """
    Manage monster territory power levels using prefix sums.
    Provides efficient range queries and updates.
    
    Args:
        monster_territory (list): List of monster power levels
        
    Returns:
        dict: Contains prefix sums and query/update functions
    """
    return monster_hunter_prefix_sums(monster_territory)

# Example usage:
# territory = [3, 1, 4, 2, 5]
# manager = manage_territory_power(territory)
# 
# # Query total power in range [1, 3]
# total_power = manager["query_range"](1, 3)
# print(f"Total power in range [1, 3]: {total_power}")
# 
# # Update power at index 2
# manager["update_power"](2, 6)
# 
# # Query again after update
# new_total = manager["query_range"](1, 3)
# print(f"Total power after update: {new_total}")`,
  ],
]);
