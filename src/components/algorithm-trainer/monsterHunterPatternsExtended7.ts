import { PatternKey } from "./types";

export const monsterHunterPatternsExtended7 = new Map<PatternKey, string>([
  [
    "Rotate Matrix" as PatternKey,
    `def monster_hunter_rotate_matrix(territory_map):
    """
    Rotate a territory map 90 degrees clockwise.
    Time: O(n²)
    Space: O(1)
    
    Monster Hunter Context:
    - Like rotating your map to find the best approach angle
    - Each cell represents a different part of the territory
    - Helps plan optimal hunting routes
    
    Example:
    territory_map = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    Process:
    1. Transpose the matrix (swap rows and columns)
    2. Reverse each row
    """
    n = len(territory_map)
    
    # Step 1: Transpose
    for i in range(n):
        for j in range(i, n):
            territory_map[i][j], territory_map[j][i] = territory_map[j][i], territory_map[i][j]
    
    # Step 2: Reverse each row
    for i in range(n):
        territory_map[i].reverse()
    
    return territory_map`,
  ],
  [
    "Radix Sort" as PatternKey,
    `def monster_hunter_radix_sort(monster_ids):
    """
    Sort monster classification numbers using Radix Sort.
    Time: O(d * (n + k)) where d is number of digits, k is range of values
    Space: O(n + k)
    
    Monster Hunter Context:
    - Like organizing monster classification numbers
    - Each digit represents a different classification level
    - Helps maintain organized monster records
    
    Example:
    monster_ids = [170, 45, 75, 90, 802, 24, 2, 66]
    
    Process:
    1. Find maximum number to determine number of digits
    2. Sort by each digit position, starting from least significant
    3. Use counting sort for each digit
    """
    def counting_sort(arr, exp):
        n = len(arr)
        output = [0] * n
        count = [0] * 10
        
        # Store count of occurrences
        for i in range(n):
            index = arr[i] // exp
            count[index % 10] += 1
        
        # Cumulative count
        for i in range(1, 10):
            count[i] += count[i - 1]
        
        # Build output array
        i = n - 1
        while i >= 0:
            index = arr[i] // exp
            output[count[index % 10] - 1] = arr[i]
            count[index % 10] -= 1
            i -= 1
        
        # Copy output to original array
        for i in range(n):
            arr[i] = output[i]
    
    # Find maximum number
    max_num = max(monster_ids)
    
    # Do counting sort for every digit
    exp = 1
    while max_num // exp > 0:
        counting_sort(monster_ids, exp)
        exp *= 10
    
    return monster_ids`,
  ],
  [
    "Network Flow" as PatternKey,
    `def monster_hunter_network_flow(territory_graph, source, sink):
    """
    Find maximum resource flow through monster territories.
    Time: O(V²E) for Edmonds-Karp algorithm
    Space: O(V + E)
    
    Monster Hunter Context:
    - Like finding optimal resource distribution paths
    - Each edge represents a path's capacity
    - Source is base camp, sink is final destination
    
    Example:
    territory_graph = {
        "Base Camp": {"Ancient Forest": 10, "Wildspire Waste": 5},
        "Ancient Forest": {"Coral Highlands": 7},
        "Wildspire Waste": {"Rotten Vale": 4},
        "Coral Highlands": {"Elder's Recess": 6},
        "Rotten Vale": {"Elder's Recess": 3},
        "Elder's Recess": {}
    }
    
    Process:
    1. Use BFS to find augmenting paths
    2. Update residual graph
    3. Repeat until no augmenting path exists
    """
    def bfs(graph, source, sink, parent):
        visited = set()
        queue = [source]
        visited.add(source)
        
        while queue:
            u = queue.pop(0)
            for v in graph[u]:
                if v not in visited and graph[u][v] > 0:
                    queue.append(v)
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
        return False
    
    # Create residual graph
    residual = {u: {v: graph[u].get(v, 0) for v in graph[u]} for u in graph}
    
    max_flow = 0
    parent = {v: None for v in graph}
    
    # Augment flow while there is a path
    while bfs(residual, source, sink, parent):
        path_flow = float("inf")
        s = sink
        while s != source:
            path_flow = min(path_flow, residual[parent[s]][s])
            s = parent[s]
        
        max_flow += path_flow
        
        v = sink
        while v != source:
            u = parent[v]
            residual[u][v] -= path_flow
            if v not in residual:
                residual[v] = {}
            residual[v][u] = residual[v].get(u, 0) + path_flow
            v = parent[v]
    
    return max_flow`,
  ],
  [
    "Hungarian Algorithm" as PatternKey,
    `def monster_hunter_hungarian(cost_matrix):
    """
    Find optimal hunter-territory assignments.
    Time: O(n³)
    Space: O(n²)
    
    Monster Hunter Context:
    - Like assigning hunters to territories efficiently
    - Cost matrix represents hunter effectiveness in each territory
    - Minimize total hunting time/maximize efficiency
    
    Example:
    cost_matrix = [
        [3, 5, 1],
        [2, 4, 6],
        [7, 3, 2]
    ]
    
    Process:
    1. Subtract row/column minima
    2. Find minimum number of lines to cover zeros
    3. Create additional zeros if needed
    4. Find assignment
    """
    n = len(cost_matrix)
    original = [row[:] for row in cost_matrix]
    
    # Step 1: Subtract row minima
    for i in range(n):
        min_val = min(cost_matrix[i])
        for j in range(n):
            cost_matrix[i][j] -= min_val
    
    # Step 2: Subtract column minima
    for j in range(n):
        min_val = min(row[j] for row in cost_matrix)
        for i in range(n):
            cost_matrix[i][j] -= min_val
    
    # Step 3: Cover zeros with minimum lines
    def find_zero():
        for i in range(n):
            for j in range(n):
                if cost_matrix[i][j] == 0 and not row_covered[i] and not col_covered[j]:
                    return i, j
        return None
    
    def cover_zeros():
        row_covered = [False] * n
        col_covered = [False] * n
        marked = [[0] * n for _ in range(n)]
        
        while True:
            # Find uncovered zero
            pos = find_zero()
            if not pos:
                break
            i, j = pos
            marked[i][j] = 1
            row_covered[i] = True
            col_covered[j] = True
        
        return marked, sum(row_covered) + sum(col_covered)
    
    # Step 4: Create additional zeros if needed
    while True:
        marked, lines = cover_zeros()
        if lines >= n:
            break
            
        # Find minimum uncovered value
        min_val = float('inf')
        for i in range(n):
            for j in range(n):
                if not row_covered[i] and not col_covered[j]:
                    min_val = min(min_val, cost_matrix[i][j])
        
        # Subtract from uncovered, add to covered intersections
        for i in range(n):
            for j in range(n):
                if not row_covered[i] and not col_covered[j]:
                    cost_matrix[i][j] -= min_val
                elif row_covered[i] and col_covered[j]:
                    cost_matrix[i][j] += min_val
    
    # Step 5: Find assignment
    assignment = []
    for i in range(n):
        for j in range(n):
            if marked[i][j] == 1:
                assignment.append([i, j])
    
    return assignment`,
  ],
  [
    "Prime Factorization" as PatternKey,
    `def monster_hunter_prime_factorization(monster_strength):
    """
    Break down monster strength rating into prime factors.
    Time: O(√n)
    Space: O(log n)
    
    Monster Hunter Context:
    - Like analyzing monster strength components
    - Each prime factor represents a basic strength element
    - Helps understand monster weaknesses
    
    Example:
    monster_strength = 60
    
    Process:
    1. Try dividing by smallest prime numbers first
    2. Continue until number becomes 1
    3. Return list of prime factors
    """
    factors = []
    d = 2
    
    while monster_strength > 1:
        while monster_strength % d == 0:
            factors.append(d)
            monster_strength //= d
        d += 1
        if d * d > monster_strength:
            if monster_strength > 1:
                factors.append(monster_strength)
            break
    
    return factors`,
  ],
]);
