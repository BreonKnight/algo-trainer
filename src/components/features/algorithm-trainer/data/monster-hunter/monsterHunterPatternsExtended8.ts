import { PatternKey } from '@algo-trainer/shared/types/algorithm-types';

// Add Activity Selection Monster Hunter Pattern
const activitySelectionMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Activity Selection",
    `# Monster Hunter Activity Selection Pattern
# Quest Planning Strategy

def select_quests(quests):
    """
    Select maximum number of non-overlapping quests.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like planning quests to maximize rewards
    - Select non-overlapping quests in different regions
    - Optimize time spent hunting
    
    Example:
    quests = [
        {'start': 1, 'end': 3, 'region': 'Ancient Forest'},
        {'start': 2, 'end': 4, 'region': 'Wildspire Waste'},
        {'start': 3, 'end': 5, 'region': 'Coral Highlands'}
    ]
    selected = select_quests(quests)
    # Shows optimal quest selection
    """
    # Sort quests by end time
    quests.sort(key=lambda x: x['end'])
    
    selected = []
    last_end = -1
    
    for quest in quests:
        if quest['start'] >= last_end:
            selected.append(quest)
            last_end = quest['end']
    
    return selected

def plan_quest_schedule(quests):
    """
    Plan optimal quest schedule to maximize rewards.
    
    Args:
        quests: List of quests with start/end times and regions
    
    Returns:
        List of selected quests
    """
    return select_quests(quests)

# Example usage
quests = [
    {'start': 1, 'end': 3, 'region': 'Ancient Forest'},
    {'start': 2, 'end': 4, 'region': 'Wildspire Waste'},
    {'start': 3, 'end': 5, 'region': 'Coral Highlands'}
]

selected_quests = plan_quest_schedule(quests)
print("Selected quests:", selected_quests)

# Monster Hunter Tips:
# 1. Prioritize quests with better rewards
# 2. Consider travel time between regions
# 3. Account for monster behavior patterns
# 4. Leave buffer time for unexpected events
# 5. Plan for resource gathering between quests`,
  ],
]);

// Add Floyd-Warshall Algorithm Monster Hunter Pattern
const floydWarshallMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Floyd-Warshall Algorithm",
    `# Monster Hunter Floyd-Warshall Algorithm Pattern
# Territory Path Optimization

def find_shortest_paths(territories):
    """
    Find shortest paths between all territory pairs.
    Time: O(V^3) where V is number of territories
    Space: O(V^2)
    
    Monster Hunter Context:
    - Like finding optimal paths between territories
    - Account for different terrain difficulties
    - Plan efficient travel routes
    - Avoid dangerous monster territories
    
    Example:
    territories = {
        'Base Camp': {'Ancient Forest': 2, 'Wildspire Waste': 3},
        'Ancient Forest': {'Base Camp': 2, 'Coral Highlands': 4},
        'Wildspire Waste': {'Base Camp': 3, 'Rotten Vale': 5},
        'Coral Highlands': {'Ancient Forest': 4, 'Elder\'s Recess': 6},
        'Rotten Vale': {'Wildspire Waste': 5, 'Elder\'s Recess': 7},
        'Elder\'s Recess': {'Coral Highlands': 6, 'Rotten Vale': 7}
    }
    paths = find_shortest_paths(territories)
    # Shows optimal paths between territories
    """
    # Initialize distance matrix
    n = len(territories)
    dist = [[float('inf')] * n for _ in range(n)]
    
    # Fill initial distances
    for i, territory in enumerate(territories):
        dist[i][i] = 0
        for neighbor, distance in territories[territory].items():
            j = list(territories.keys()).index(neighbor)
            dist[i][j] = distance
    
    # Floyd-Warshall Algorithm
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist

def optimize_travel_routes(territories):
    """
    Optimize travel routes between territories.
    
    Args:
        territories: Dictionary of territory connections and distances
    
    Returns:
        Matrix of shortest paths between all territories
    """
    return find_shortest_paths(territories)

# Example usage
territories = {
    'Base Camp': {'Ancient Forest': 2, 'Wildspire Waste': 3},
    'Ancient Forest': {'Base Camp': 2, 'Coral Highlands': 4},
    'Wildspire Waste': {'Base Camp': 3, 'Rotten Vale': 5},
    'Coral Highlands': {'Ancient Forest': 4, 'Elder\'s Recess': 6},
    'Rotten Vale': {'Wildspire Waste': 5, 'Elder\'s Recess': 7},
    'Elder\'s Recess': {'Coral Highlands': 6, 'Rotten Vale': 7}
}

optimal_paths = optimize_travel_routes(territories)
print("Optimal paths between territories:", optimal_paths)

# Monster Hunter Tips:
# 1. Consider terrain difficulty in path planning
# 2. Account for monster territories to avoid
# 3. Plan for resource gathering along routes
# 4. Consider weather effects on travel time
# 5. Have backup routes for emergencies`,
  ],
]);

// Add Huffman Coding Monster Hunter Pattern
const huffmanCodingMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Huffman Coding",
    `# Monster Hunter Huffman Coding Pattern
# Resource Compression Strategy

def build_huffman_tree(frequencies):
    """
    Build Huffman tree for resource compression.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like compressing resource data
    - Optimize storage of common items
    - Efficient resource management
    - Quick access to frequently used items
    
    Example:
    resources = {
        'Herb': 5,
        'Potion': 3,
        'Mega Potion': 2,
        'Max Potion': 1
    }
    tree = build_huffman_tree(resources)
    # Shows optimal resource encoding
    """
    import heapq
    
    # Create priority queue
    heap = [[weight, [symbol, ""]] for symbol, weight in frequencies.items()]
    heapq.heapify(heap)
    
    # Build Huffman tree
    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    
    return sorted(heapq.heappop(heap)[1:], key=lambda p: (len(p[-1]), p))

def compress_resources(resources):
    """
    Compress resource data using Huffman coding.
    
    Args:
        resources: Dictionary of resources and their frequencies
    
    Returns:
        Huffman codes for each resource
    """
    return build_huffman_tree(resources)

# Example usage
resources = {
    'Herb': 5,
    'Potion': 3,
    'Mega Potion': 2,
    'Max Potion': 1
}

codes = compress_resources(resources)
print("Resource compression codes:", codes)

# Monster Hunter Tips:
# 1. Prioritize frequently used items
# 2. Consider item combinations
# 3. Account for different quest types
# 4. Plan for emergency situations
# 5. Optimize inventory space`,
  ],
]);

// Add Job Scheduling Monster Hunter Pattern
const jobSchedulingMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Job Scheduling",
    `# Monster Hunter Job Scheduling Pattern
# Quest Priority Management

def schedule_jobs(jobs):
    """
    Schedule jobs to minimize completion time.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like managing multiple quests
    - Prioritize urgent hunts
    - Balance resource gathering
    - Optimize time management
    
    Example:
    jobs = [
        {'id': 1, 'deadline': 4, 'profit': 20},
        {'id': 2, 'deadline': 1, 'profit': 10},
        {'id': 3, 'deadline': 1, 'profit': 40},
        {'id': 4, 'deadline': 1, 'profit': 30}
    ]
    schedule = schedule_jobs(jobs)
    # Shows optimal job schedule
    """
    # Sort jobs by profit in descending order
    jobs.sort(key=lambda x: x['profit'], reverse=True)
    
    # Find maximum deadline
    max_deadline = max(job['deadline'] for job in jobs)
    
    # Initialize result array
    result = [None] * max_deadline
    
    # Fill the result array
    for job in jobs:
        # Find a free slot for this job
        for i in range(min(job['deadline'] - 1, max_deadline - 1), -1, -1):
            if result[i] is None:
                result[i] = job
                break
    
    return result

def manage_quest_schedule(jobs):
    """
    Manage quest schedule to maximize rewards.
    
    Args:
        jobs: List of jobs with deadlines and profits
    
    Returns:
        Optimal job schedule
    """
    return schedule_jobs(jobs)

# Example usage
jobs = [
    {'id': 1, 'deadline': 4, 'profit': 20},
    {'id': 2, 'deadline': 1, 'profit': 10},
    {'id': 3, 'deadline': 1, 'profit': 40},
    {'id': 4, 'deadline': 1, 'profit': 30}
]

schedule = manage_quest_schedule(jobs)
print("Optimal quest schedule:", schedule)

# Monster Hunter Tips:
# 1. Prioritize high-reward quests
# 2. Consider quest difficulty
# 3. Account for preparation time
# 4. Plan for resource management
# 5. Leave room for unexpected events`,
  ],
]);

// Add Kruskal's Algorithm Monster Hunter Pattern
const kruskalMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Kruskal's Algorithm",
    `# Monster Hunter Kruskal's Algorithm Pattern
# Territory Connection Optimization

def find_minimum_spanning_tree(territories):
    """
    Find minimum spanning tree connecting territories.
    Time: O(E log E) where E is number of paths
    Space: O(V + E)
    
    Monster Hunter Context:
    - Like connecting territories efficiently
    - Minimize travel time between regions
    - Optimize resource distribution
    - Plan efficient patrol routes
    
    Example:
    territories = [
        {'from': 'Base Camp', 'to': 'Ancient Forest', 'weight': 2},
        {'from': 'Base Camp', 'to': 'Wildspire Waste', 'weight': 3},
        {'from': 'Ancient Forest', 'to': 'Coral Highlands', 'weight': 4},
        {'from': 'Wildspire Waste', 'to': 'Rotten Vale', 'weight': 5},
        {'from': 'Coral Highlands', 'to': 'Elder\'s Recess', 'weight': 6},
        {'from': 'Rotten Vale', 'to': 'Elder\'s Recess', 'weight': 7}
    ]
    mst = find_minimum_spanning_tree(territories)
    # Shows optimal territory connections
    """
    def find(parent, i):
        if parent[i] != i:
            parent[i] = find(parent, parent[i])
        return parent[i]
    
    def union(parent, rank, x, y):
        xroot = find(parent, x)
        yroot = find(parent, y)
        
        if rank[xroot] < rank[yroot]:
            parent[xroot] = yroot
        elif rank[xroot] > rank[yroot]:
            parent[yroot] = xroot
        else:
            parent[yroot] = xroot
            rank[xroot] += 1
    
    # Sort edges by weight
    territories.sort(key=lambda x: x['weight'])
    
    # Initialize parent and rank arrays
    vertices = set()
    for edge in territories:
        vertices.add(edge['from'])
        vertices.add(edge['to'])
    vertices = list(vertices)
    parent = {v: v for v in vertices}
    rank = {v: 0 for v in vertices}
    
    result = []
    i = 0
    e = 0
    
    while e < len(vertices) - 1 and i < len(territories):
        u, v, w = territories[i]['from'], territories[i]['to'], territories[i]['weight']
        i += 1
        
        x = find(parent, u)
        y = find(parent, v)
        
        if x != y:
            e += 1
            result.append([u, v, w])
            union(parent, rank, x, y)
    
    return result

def optimize_territory_connections(territories):
    """
    Optimize territory connections using Kruskal's Algorithm's algorithm.
    
    Args:
        territories: List of territory connections with weights
    
    Returns:
        Minimum spanning tree of territories
    """
    return find_minimum_spanning_tree(territories)

# Example usage
territories = [
    {'from': 'Base Camp', 'to': 'Ancient Forest', 'weight': 2},
    {'from': 'Base Camp', 'to': 'Wildspire Waste', 'weight': 3},
    {'from': 'Ancient Forest', 'to': 'Coral Highlands', 'weight': 4},
    {'from': 'Wildspire Waste', 'to': 'Rotten Vale', 'weight': 5},
    {'from': 'Coral Highlands', 'to': 'Elder\'s Recess', 'weight': 6},
    {'from': 'Rotten Vale', 'to': 'Elder\'s Recess', 'weight': 7}
]

mst = optimize_territory_connections(territories)
print("Optimal territory connections:", mst)

# Monster Hunter Tips:
# 1. Consider terrain difficulty in weights
# 2. Account for monster territories
# 3. Plan for resource distribution
# 4. Consider weather effects
# 5. Have backup routes`,
  ],
]);

// Add Divide and Conquer Monster Hunter Pattern
const divideAndConquerMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Divide and Conquer",
    `# Monster Hunter Divide and Conquer Pattern
# Territory Exploration Strategy

def explore_territory(territory):
    """
    Explore territory by dividing it into smaller regions.
    Time: O(n log n)
    Space: O(log n)
    
    Monster Hunter Context:
    - Like exploring large territories
    - Divide into manageable regions
    - Search for resources and monsters
    - Combine findings for complete map
    
    Example:
    territory = {
        'name': 'Ancient Forest',
        'regions': ['Lower Forest', 'Upper Forest', 'Wildspire Waste'],
        'resources': ['Herbs', 'Ore', 'Bugs'],
        'monsters': ['Rathalos', 'Anjanath', 'Tobi-Kadachi']
    }
    explored = explore_territory(territory)
    # Shows complete territory exploration
    """
    def explore_region(region):
        # Base case: small region
        if len(region) <= 1:
            return analyze_region(region)
        
        # Divide: split region into smaller parts
        mid = len(region) // 2
        left = region[:mid]
        right = region[mid:]
        
        # Conquer: explore each part
        left_explored = explore_region(left)
        right_explored = explore_region(right)
        
        # Combine: merge findings
        return combine_findings(left_explored, right_explored)
    
    return explore_region(territory['regions'])

def analyze_region(region):
    """Analyze a small region for resources and monsters."""
    return {
        'resources': find_resources(region),
        'monsters': find_monsters(region),
        'paths': find_paths(region)
    }

def combine_findings(left, right):
    """Combine findings from two regions."""
    return {
        'resources': left['resources'] + right['resources'],
        'monsters': left['monsters'] + right['monsters'],
        'paths': merge_paths(left['paths'], right['paths'])
    }

# Example usage
territory = {
    'name': 'Ancient Forest',
    'regions': ['Lower Forest', 'Upper Forest', 'Wildspire Waste'],
    'resources': ['Herbs', 'Ore', 'Bugs'],
    'monsters': ['Rathalos', 'Anjanath', 'Tobi-Kadachi']
}

explored = explore_territory(territory)
print("Territory exploration results:", explored)

# Monster Hunter Tips:
# 1. Divide large territories into manageable regions
# 2. Search each region thoroughly
# 3. Combine findings for complete map
# 4. Note resource locations
# 5. Track monster movements`,
  ],
]);

// Add Dynamic Programming Pattern Monster Hunter Pattern
const dynamicProgrammingMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Dynamic Programming Pattern",
    `# Monster Hunter Dynamic Programming Pattern
# Resource Management Strategy

def optimize_resources(resources, capacity):
    """
    Optimize resource usage using dynamic programming.
    Time: O(n * capacity)
    Space: O(capacity)
    
    Monster Hunter Context:
    - Like managing limited resources
    - Choose optimal item combinations
    - Maximize effectiveness
    - Plan for different scenarios
    
    Example:
    resources = [
        {'name': 'Potion', 'value': 10, 'weight': 1},
        {'name': 'Mega Potion', 'value': 20, 'weight': 2},
        {'name': 'Max Potion', 'value': 30, 'weight': 3}
    ]
    capacity = 5
    optimal = optimize_resources(resources, capacity)
    # Shows optimal resource combination
    """
    n = len(resources)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if resources[i-1]['weight'] <= w:
                dp[i][w] = max(
                    dp[i-1][w],
                    dp[i-1][w-resources[i-1]['weight']] + resources[i-1]['value']
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

def plan_resource_usage(resources, capacity):
    """
    Plan optimal resource usage.
    
    Args:
        resources: List of resources with values and weights
        capacity: Maximum weight capacity
    
    Returns:
        Maximum value achievable
    """
    return optimize_resources(resources, capacity)

# Example usage
resources = [
    {'name': 'Potion', 'value': 10, 'weight': 1},
    {'name': 'Mega Potion', 'value': 20, 'weight': 2},
    {'name': 'Max Potion', 'value': 30, 'weight': 3}
]
capacity = 5

max_value = plan_resource_usage(resources, capacity)
print("Maximum value achievable:", max_value)

# Monster Hunter Tips:
# 1. Consider resource value vs weight
# 2. Plan for different quest types
# 3. Account for emergency situations
# 4. Balance healing and buff items
# 5. Optimize inventory space`,
  ],
]);

// Add Fractional Knapsack Monster Hunter Pattern
const fractionalKnapsackMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Fractional Knapsack",
    `# Monster Hunter Fractional Knapsack Pattern
# Resource Gathering Strategy

def gather_resources(resources, capacity):
    """
    Gather resources to maximize value within capacity.
    Time: O(n log n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like gathering resources with limited space
    - Choose most valuable resources
    - Take fractions of items if needed
    - Optimize resource gathering
    
    Example:
    resources = [
        {'name': 'Herb', 'value': 5, 'weight': 1},
        {'name': 'Honey', 'value': 10, 'weight': 2},
        {'name': 'Mushroom', 'value': 15, 'weight': 3}
    ]
    capacity = 5
    gathered = gather_resources(resources, capacity)
    # Shows optimal resource gathering
    """
    # Calculate value-to-weight ratio
    for resource in resources:
        resource['ratio'] = resource['value'] / resource['weight']
    
    # Sort by ratio in descending order
    resources.sort(key=lambda x: x['ratio'], reverse=True)
    
    total_value = 0
    remaining = capacity
    gathered = []
    
    for resource in resources:
        if remaining >= resource['weight']:
            # Take whole resource
            gathered.append((resource['name'], 1.0))
            total_value += resource['value']
            remaining -= resource['weight']
        else:
            # Take fraction
            fraction = remaining / resource['weight']
            gathered.append((resource['name'], fraction))
            total_value += resource['value'] * fraction
            break
    
    return total_value, gathered

def optimize_gathering(resources, capacity):
    """
    Optimize resource gathering strategy.
    
    Args:
        resources: List of resources with values and weights
        capacity: Maximum weight capacity
    
    Returns:
        Tuple of (total value, list of gathered resources)
    """
    return gather_resources(resources, capacity)

# Example usage
resources = [
    {'name': 'Herb', 'value': 5, 'weight': 1},
    {'name': 'Honey', 'value': 10, 'weight': 2},
    {'name': 'Mushroom', 'value': 15, 'weight': 3}
]
capacity = 5

value, gathered = optimize_gathering(resources, capacity)
print("Total value:", value)
print("Gathered resources:", gathered)

# Monster Hunter Tips:
# 1. Prioritize high-value resources
# 2. Consider resource combinations
# 3. Account for gathering time
# 4. Plan for different regions
# 5. Leave space for rare finds`,
  ],
]);

// Add Kosaraju's Algorithm Monster Hunter Pattern
const kosarajuMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Kosaraju's Algorithm",
    `# Monster Hunter Kosaraju's Algorithm Pattern
# Territory Connection Analysis

def analyze_territory_connections(territories):
    """
    Find strongly connected territories.
    Time: O(V + E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like analyzing territory connections
    - Find related monster habitats
    - Identify resource clusters
    - Plan exploration routes
    
    Example:
    territories = {
        'Ancient Forest': ['Wildspire Waste'],
        'Wildspire Waste': ['Coral Highlands'],
        'Coral Highlands': ['Ancient Forest', 'Elder\'s Recess'],
        'Elder\'s Recess': ['Coral Highlands']
    }
    clusters = analyze_territory_connections(territories)
    # Shows connected territory clusters
    """
    def dfs_first(territory, visited, order):
        visited.add(territory)
        for neighbor in territories[territory]:
            if neighbor not in visited:
                dfs_first(neighbor, visited, order)
        order.append(territory)
    
    def dfs_second(territory, visited, cluster):
        visited.add(territory)
        cluster.append(territory)
        for neighbor in reversed_territories[territory]:
            if neighbor not in visited:
                dfs_second(neighbor, visited, cluster)
    
    # First pass: compute finishing times
    visited = set()
    order = []
    for territory in territories:
        if territory not in visited:
            dfs_first(territory, visited, order)
    
    # Build reversed graph
    reversed_territories = {t: [] for t in territories}
    for territory in territories:
        for neighbor in territories[territory]:
            reversed_territories[neighbor].append(territory)
    
    # Second pass: find strongly connected components
    visited = set()
    clusters = []
    for territory in reversed(order):
        if territory not in visited:
            cluster = []
            dfs_second(territory, visited, cluster)
            clusters.append(cluster)
    
    return clusters

def find_territory_clusters(territories):
    """
    Find clusters of connected territories.
    
    Args:
        territories: Dictionary of territory connections
    
    Returns:
        List of territory clusters
    """
    return analyze_territory_connections(territories)

# Example usage
territories = {
    'Ancient Forest': ['Wildspire Waste'],
    'Wildspire Waste': ['Coral Highlands'],
    'Coral Highlands': ['Ancient Forest', 'Elder\'s Recess'],
    'Elder\'s Recess': ['Coral Highlands']
}

clusters = find_territory_clusters(territories)
print("Territory clusters:", clusters)

# Monster Hunter Tips:
# 1. Identify connected territories
# 2. Plan exploration routes
# 3. Note resource distributions
# 4. Track monster migration patterns
# 5. Consider environmental factors`,
  ],
]);

// Add String Operations Monster Hunter Pattern
const stringOperationsMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "String Operations",
    `# Monster Hunter String Operations Pattern
# Monster Research Analysis

def analyze_monster_data(monster_data):
    """
    Analyze monster research data using string operations.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like analyzing monster research notes
    - Process monster behavior patterns
    - Extract useful information
    - Identify patterns and weaknesses
    
    Example:
    monster_data = {
        'name': 'Rathalos',
        'behavior': 'Aggressive when threatened',
        'weaknesses': 'Thunder, Dragon',
        'habitat': 'Ancient Forest, Wildspire Waste'
    }
    analysis = analyze_monster_data(monster_data)
    # Shows processed monster information
    """
    def process_behavior(behavior):
        # Extract key behavior patterns
        patterns = behavior.split(',')
        return [p.strip() for p in patterns]
    
    def process_weaknesses(weaknesses):
        # Extract elemental weaknesses
        elements = weaknesses.split(',')
        return [e.strip() for e in elements]
    
    def process_habitat(habitat):
        # Extract habitat locations
        locations = habitat.split(',')
        return [l.strip() for l in locations]
    
    return {
        'name': monster_data['name'],
        'behavior_patterns': process_behavior(monster_data['behavior']),
        'elemental_weaknesses': process_weaknesses(monster_data['weaknesses']),
        'habitat_locations': process_habitat(monster_data['habitat'])
    }

def research_monster(monster_data):
    """
    Process and analyze monster research data.
    
    Args:
        monster_data: Dictionary of monster information
    
    Returns:
        Processed monster research data
    """
    return analyze_monster_data(monster_data)

# Example usage
monster_data = {
    'name': 'Rathalos',
    'behavior': 'Aggressive when threatened, Territorial, Hunts during day',
    'weaknesses': 'Thunder, Dragon, Ice',
    'habitat': 'Ancient Forest, Wildspire Waste, Elder\'s Recess'
}

analysis = research_monster(monster_data)
print("Monster research analysis:", analysis)

# Monster Hunter Tips:
# 1. Note behavior patterns
# 2. Track elemental weaknesses
# 3. Map habitat locations
# 4. Record attack patterns
# 5. Document resource drops`,
  ],
]);

// Add Bridges Monster Hunter Pattern
const bridgesMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Bridges",
    `# Monster Hunter Bridges Pattern
# Critical Territory Path Analysis

def find_critical_paths(territories):
    """
    Find critical paths between territories that are essential for connectivity.
    Time: O(V + E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like finding essential migration paths
    - Identify critical resource routes
    - Plan for territory defense
    - Optimize patrol routes
    
    Example:
    territories = {
        'Ancient Forest': ['Wildspire Waste', 'Coral Highlands'],
        'Wildspire Waste': ['Ancient Forest', 'Rotten Vale'],
        'Coral Highlands': ['Ancient Forest', 'Elder\'s Recess'],
        'Rotten Vale': ['Wildspire Waste', 'Elder\'s Recess'],
        'Elder\'s Recess': ['Coral Highlands', 'Rotten Vale']
    }
    critical_paths = find_critical_paths(territories)
    # Shows essential territory connections
    """
    def dfs(territory, parent, visited, disc, low, bridges):
        nonlocal time
        visited.add(territory)
        disc[territory] = low[territory] = time
        time += 1
        
        for neighbor in territories[territory]:
            if neighbor == parent:
                continue
                
            if neighbor not in visited:
                dfs(neighbor, territory, visited, disc, low, bridges)
                low[territory] = min(low[territory], low[neighbor])
                
                if low[neighbor] > disc[territory]:
                    bridges.append((territory, neighbor))
            else:
                low[territory] = min(low[territory], disc[neighbor])
    
    visited = set()
    disc = {}
    low = {}
    bridges = []
    time = 0
    
    for territory in territories:
        if territory not in visited:
            dfs(territory, None, visited, disc, low, bridges)
    
    return bridges

def analyze_territory_connectivity(territories):
    """
    Analyze territory connectivity to find critical paths.
    
    Args:
        territories: Dictionary of territory connections
    
    Returns:
        List of critical paths (bridges)
    """
    return find_critical_paths(territories)

# Example usage
territories = {
    'Ancient Forest': ['Wildspire Waste', 'Coral Highlands'],
    'Wildspire Waste': ['Ancient Forest', 'Rotten Vale'],
    'Coral Highlands': ['Ancient Forest', 'Elder\'s Recess'],
    'Rotten Vale': ['Wildspire Waste', 'Elder\'s Recess'],
    'Elder\'s Recess': ['Coral Highlands', 'Rotten Vale']
}

critical_paths = analyze_territory_connectivity(territories)
print("Critical territory paths:", critical_paths)

# Monster Hunter Tips:
# 1. Protect critical migration paths
# 2. Monitor resource flow along bridges
# 3. Plan defense strategies
# 4. Consider alternative routes
# 5. Track monster movement patterns`,
  ],
]);

// Add Lowest Common Ancestor Pattern
const lowestCommonAncestorPattern = new Map<PatternKey, string>([
  [
    "Lowest Common Ancestor",
    `# Lowest Common Ancestor Pattern
# Tree Node Ancestry Analysis

def find_lca(root, p, q):
    """
    Find the lowest common ancestor of two nodes in a binary tree.
    Time: O(n)
    Space: O(h) where h is the height of the tree
    
    Example:
    tree = {
        'val': 3,
        'left': {
            'val': 5,
            'left': {'val': 6},
            'right': {
                'val': 2,
                'left': {'val': 7},
                'right': {'val': 4}
            }
        },
        'right': {
            'val': 1,
            'left': {'val': 0},
            'right': {'val': 8}
        }
    }
    lca = find_lca(tree, 5, 1)
    # Returns node with value 3
    """
    if not root:
        return None
        
    if root.val == p or root.val == q:
        return root
        
    left = find_lca(root.left, p, q)
    right = find_lca(root.right, p, q)
    
    if left and right:
        return root
    return left if left else right

def find_lowest_common_ancestor(root, node1, node2):
    """
    Find the lowest common ancestor of two nodes in a binary tree.
    
    Args:
        root: Root node of the binary tree
        node1: First node value
        node2: Second node value
    
    Returns:
        The lowest common ancestor node
    """
    return find_lca(root, node1, node2)

# Example usage
tree = {
    'val': 3,
    'left': {
        'val': 5,
        'left': {'val': 6},
        'right': {
            'val': 2,
            'left': {'val': 7},
            'right': {'val': 4}
        }
    },
    'right': {
        'val': 1,
        'left': {'val': 0},
        'right': {'val': 8}
    }
}

lca = find_lowest_common_ancestor(tree, 5, 1)
print("Lowest Common Ancestor:", lca['val'] if lca else None)

# Algorithm Tips:
# 1. Use post-order traversal
# 2. Return node if it matches either target
# 3. If both subtrees return nodes, current node is LCA
# 4. If only one subtree returns node, propagate it up
# 5. Handle case where nodes don't exist in tree`,
  ],
]);

// Export all patterns
export const monsterHunterPatternsExtended8 = new Map<PatternKey, string>([
  ...activitySelectionMonsterHunterPattern,
  ...floydWarshallMonsterHunterPattern,
  ...huffmanCodingMonsterHunterPattern,
  ...jobSchedulingMonsterHunterPattern,
  ...kruskalMonsterHunterPattern,
  ...divideAndConquerMonsterHunterPattern,
  ...dynamicProgrammingMonsterHunterPattern,
  ...fractionalKnapsackMonsterHunterPattern,
  ...kosarajuMonsterHunterPattern,
  ...stringOperationsMonsterHunterPattern,
  ...bridgesMonsterHunterPattern,
  ...lowestCommonAncestorPattern,
]);
