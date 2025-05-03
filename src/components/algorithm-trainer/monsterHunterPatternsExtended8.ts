import { PatternKey } from "./types.ts";

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

// Add Floyd-Warshall Monster Hunter Pattern
const floydWarshallMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Floyd-Warshall",
    `# Monster Hunter Floyd-Warshall Pattern
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
    
    # Floyd-Warshall algorithm
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

// Add Kruskal Monster Hunter Pattern
const kruskalMonsterHunterPattern = new Map<PatternKey, string>([
  [
    "Kruskal",
    `# Monster Hunter Kruskal Pattern
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
    Optimize territory connections using Kruskal's algorithm.
    
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

// Export all patterns
export const monsterHunterPatternsExtended8 = new Map<PatternKey, string>([
  ...activitySelectionMonsterHunterPattern,
  ...floydWarshallMonsterHunterPattern,
  ...huffmanCodingMonsterHunterPattern,
  ...jobSchedulingMonsterHunterPattern,
  ...kruskalMonsterHunterPattern,
]);
