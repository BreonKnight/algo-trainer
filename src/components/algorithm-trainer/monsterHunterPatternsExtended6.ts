import { PatternKey } from "./types";

export const monsterHunterPatternsExtended6 = new Map<PatternKey, string>([
  [
    "Extended Euclidean" as PatternKey,
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
    "Red Black Tree" as PatternKey,
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
]);
