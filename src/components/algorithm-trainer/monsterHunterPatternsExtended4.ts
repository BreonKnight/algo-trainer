import { PatternKey } from "./types";

export const monsterHunterPatternsExtended4 = new Map<PatternKey, string>([
  [
    "Quick Sort" as PatternKey,
    `def monster_hunter_quick_sort(material_list):
    """
    Sort monster materials by rarity using Quick Sort.
    Time: O(n log n) average, O(n²) worst
    Space: O(log n) - recursion depth
    
    Monster Hunter Context:
    - Like organizing materials by rarity
    - Pivot is a reference material
    - Partition materials into less/more rare
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Choose pivot (e.g., Dragon Gem)
    2. Partition: less rare to left, more rare to right
    3. Recursively sort subarrays
    """
    if len(material_list) <= 1:
        return material_list
    
    # Choose pivot (last element)
    pivot = material_list[-1]
    left = []
    right = []
    
    # Partition
    for i in range(len(material_list) - 1):
        if material_list[i]["rarity"] <= pivot["rarity"]:
            left.append(material_list[i])
        else:
            right.append(material_list[i])
    
    # Recursively sort and combine
    return monster_hunter_quick_sort(left) + [pivot] + monster_hunter_quick_sort(right)`,
  ],

  [
    "Merge Sort" as PatternKey,
    `def monster_hunter_merge_sort(material_list):
    """
    Sort monster materials by rarity using Merge Sort.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing materials by rarity
    - Divide materials into smaller groups
    - Merge sorted groups back together
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Divide list into two halves
    2. Recursively sort each half
    3. Merge sorted halves
    """
    if len(material_list) <= 1:
        return material_list
    
    # Divide
    mid = len(material_list) // 2
    left = monster_hunter_merge_sort(material_list[:mid])
    right = monster_hunter_merge_sort(material_list[mid:])
    
    # Merge
    return monster_hunter_merge(left, right)

def monster_hunter_merge(left, right):
    result = []
    i = j = 0
    
    # Compare and merge
    while i < len(left) and j < len(right):
        if left[i]["rarity"] <= right[j]["rarity"]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result`,
  ],

  [
    "Stack Sort" as PatternKey,
    `def monster_hunter_stack_sort(material_list):
    """
    Sort monster materials by rarity using Stack Sort.
    Time: O(n²)
    Space: O(n)
    
    Monster Hunter Context:
    - Like organizing materials in a stack
    - Use temporary stack to sort
    - Similar to organizing items in inventory
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Push first item to sorted stack
    2. For each remaining item:
       a. Pop from sorted stack until finding correct position
       b. Push current item
       c. Push back all popped items
    """
    if len(material_list) <= 1:
        return material_list
    
    # Create sorted stack
    sorted_stack = []
    
    # Process each material
    for material in material_list:
        # Pop from sorted stack until finding correct position
        temp_stack = []
        while (sorted_stack and 
               sorted_stack[-1]["rarity"] > material["rarity"]):
            temp_stack.append(sorted_stack.pop())
        
        # Push current material
        sorted_stack.append(material)
        
        # Push back all popped materials
        while temp_stack:
            sorted_stack.append(temp_stack.pop())
    
    # Convert stack back to list
    return sorted_stack`,
  ],

  [
    "Heap Sort" as PatternKey,
    `def monster_hunter_heap_sort(material_list):
    """
    Sort monster materials by rarity using Heap Sort.
    Time: O(n log n)
    Space: O(1) - in-place
    
    Monster Hunter Context:
    - Like organizing materials by rarity
    - Build heap of materials
    - Extract most rare materials first
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Build max heap
    2. Extract max (most rare) repeatedly
    3. Place in sorted portion
    """
    def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        
        if left < n and arr[left]["rarity"] > arr[largest]["rarity"]:
            largest = left
        
        if right < n and arr[right]["rarity"] > arr[largest]["rarity"]:
            largest = right
        
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    n = len(material_list)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(material_list, n, i)
    
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        material_list[0], material_list[i] = material_list[i], material_list[0]
        heapify(material_list, i, 0)
    
    return material_list`,
  ],

  [
    "Bubble Sort" as PatternKey,
    `def monster_hunter_bubble_sort(material_list):
    """
    Sort monster materials by rarity using Bubble Sort.
    Time: O(n²)
    Space: O(1) - in-place
    
    Monster Hunter Context:
    - Like organizing materials by rarity
    - Compare adjacent materials
    - "Bubble" most rare materials to the end
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Compare adjacent materials
    2. Swap if in wrong order
    3. Repeat until no swaps needed
    """
    n = len(material_list)
    
    for i in range(n):
        # Flag to optimize if already sorted
        swapped = False
        
        # Last i elements already in place
        for j in range(0, n - i - 1):
            # Compare adjacent materials
            if material_list[j]["rarity"] > material_list[j + 1]["rarity"]:
                # Swap if in wrong order
                material_list[j], material_list[j + 1] = material_list[j + 1], material_list[j]
                swapped = True
        
        # If no swapping occurred, array is sorted
        if not swapped:
            break
    
    return material_list`,
  ],

  [
    "Selection Sort" as PatternKey,
    `def monster_hunter_selection_sort(material_list):
    """
    Sort monster materials by rarity using Selection Sort.
    Time: O(n²)
    Space: O(1) - in-place
    
    Monster Hunter Context:
    - Like organizing materials by rarity
    - Find most rare material in unsorted portion
    - Place at beginning of sorted portion
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Find minimum rarity in unsorted portion
    2. Swap with first unsorted element
    3. Move sorted boundary forward
    """
    n = len(material_list)
    
    for i in range(n):
        # Find minimum rarity in unsorted portion
        min_idx = i
        for j in range(i + 1, n):
            if material_list[j]["rarity"] < material_list[min_idx]["rarity"]:
                min_idx = j
        
        # Swap with first unsorted element
        material_list[i], material_list[min_idx] = material_list[min_idx], material_list[i]
    
    return material_list`,
  ],

  [
    "Insertion Sort" as PatternKey,
    `def monster_hunter_insertion_sort(material_list):
    """
    Sort monster materials by rarity using Insertion Sort.
    Time: O(n²)
    Space: O(1) - in-place
    
    Monster Hunter Context:
    - Like organizing materials by rarity
    - Build sorted portion one element at a time
    - Insert each material in correct position
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "rarity": 3},
        {"name": "Rathalos Ruby", "rarity": 7},
        {"name": "Monster Bone", "rarity": 1},
        {"name": "Dragon Gem", "rarity": 8}
    ]
    
    Process:
    1. Start with first element as sorted
    2. Insert next element in correct position
    3. Shift elements as needed
    """
    for i in range(1, len(material_list)):
        # Current material to insert
        current = material_list[i]
        j = i - 1
        
        # Shift elements greater than current
        while j >= 0 and material_list[j]["rarity"] > current["rarity"]:
            material_list[j + 1] = material_list[j]
            j -= 1
        
        # Insert current in correct position
        material_list[j + 1] = current
    
    return material_list`,
  ],

  [
    "Binary Search on Answer" as PatternKey,
    `def monster_hunter_binary_search_answer(monster_hp, damage_options):
    """
    Find minimum hits needed to defeat monster using Binary Search on Answer.
    Time: O(log n * m) - n is max hits, m is damage options
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding minimum hits to defeat a monster
    - Try different hit counts
    - Binary search on the answer (number of hits)
    
    Example:
    monster_hp = 1000
    damage_options = [50, 75, 100]  # Possible damage per hit
    
    Process:
    1. Try middle number of hits
    2. If enough damage, try fewer hits
    3. If not enough, try more hits
    """
    def can_defeat_monster(hits):
        # Calculate maximum possible damage with given hits
        max_damage = 0
        for damage in damage_options:
            max_damage += damage * hits
        return max_damage >= monster_hp
    
    # Binary search on number of hits
    left, right = 1, monster_hp // min(damage_options) + 1
    
    while left < right:
        mid = (left + right) // 2
        if can_defeat_monster(mid):
            right = mid
        else:
            left = mid + 1
    
    return left`,
  ],

  [
    "Linear Search" as PatternKey,
    `def monster_hunter_linear_search(material_list, target_material):
    """
    Search for a specific material in an unsorted list.
    Time: O(n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching for a material in your inventory
    - Check each material one by one
    - Return position if found
    
    Example:
    materials = ["Rathalos Scale", "Monster Bone", "Dragon Gem", "Rathalos Ruby"]
    target = "Dragon Gem"
    
    Process:
    1. Check first material
    2. If not found, check next
    3. Continue until found or end of list
    """
    for i, material in enumerate(material_list):
        if material == target_material:
            return i
    
    return -1  # Material not found`,
  ],

  [
    "Two Sum" as PatternKey,
    `def monster_hunter_two_sum(material_values, target_value):
    """
    Find two materials that combine to target value.
    Time: O(n²)
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding two materials for a specific craft
    - Each material has a value
    - Find pair that sums to target
    
    Example:
    materials = [
        ("Iron Ore", 10),
        ("Monster Bone", 20),
        ("Dragon Bone", 50),
        ("Elder Dragon Gem", 100)
    ]
    target = 70  # Combined value needed
    
    Process:
    1. Try each material as first
    2. For each first, try each remaining as second
    3. Return pair if sum equals target
    """
    n = len(material_values)
    
    for i in range(n):
        for j in range(i + 1, n):
            if material_values[i][1] + material_values[j][1] == target_value:
                return material_values[i], material_values[j]
    
    return None  # No combination found`,
  ],

  [
    "Two Sum Dict" as PatternKey,
    `def monster_hunter_two_sum_dict(material_values, target_value):
    """
    Find two materials that combine to target value using dictionary.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like finding two materials for a specific craft
    - Use dictionary to track seen materials
    - Check if complement exists
    
    Example:
    materials = [
        ("Iron Ore", 10),
        ("Monster Bone", 20),
        ("Dragon Bone", 50),
        ("Elder Dragon Gem", 100)
    ]
    target = 70  # Combined value needed
    
    Process:
    1. For each material, calculate complement
    2. Check if complement exists in dictionary
    3. If found, return pair; otherwise add to dictionary
    """
    seen = {}  # value -> index mapping
    
    for i, (material, value) in enumerate(material_values):
        complement = target_value - value
        
        if complement in seen:
            return material_values[seen[complement]], material_values[i]
        
        seen[value] = i
    
    return None  # No combination found`,
  ],

  [
    "Two Sum Two Pointers" as PatternKey,
    `def monster_hunter_two_sum_two_pointers(material_values, target_value):
    """
    Find two materials that combine to target value using two pointers.
    Time: O(n log n) - due to sorting
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding two materials for a specific craft
    - Sort materials by value
    - Use two pointers to find pair
    
    Example:
    materials = [
        ("Iron Ore", 10),
        ("Monster Bone", 20),
        ("Dragon Bone", 50),
        ("Elder Dragon Gem", 100)
    ]
    target = 70  # Combined value needed
    
    Process:
    1. Sort materials by value
    2. Use left and right pointers
    3. Move pointers based on sum compared to target
    """
    # Sort materials by value
    sorted_materials = sorted(material_values, key=lambda x: x[1])
    
    left, right = 0, len(sorted_materials) - 1
    
    while left < right:
        current_sum = sorted_materials[left][1] + sorted_materials[right][1]
        
        if current_sum == target_value:
            return sorted_materials[left], sorted_materials[right]
        elif current_sum < target_value:
            left += 1
        else:
            right -= 1
    
    return None  # No combination found`,
  ],

  [
    "Dynamic Programming Fibonacci" as PatternKey,
    `def monster_hunter_dp_fibonacci(n):
    """
    Calculate nth Fibonacci number using Dynamic Programming.
    Time: O(n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like calculating monster population growth
    - Each generation produces offspring
    - Track population over time
    
    Example:
    n = 5  # 5th generation
    
    Process:
    1. Start with base cases (0, 1)
    2. Build up to nth generation
    3. Each generation is sum of previous two
    """
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    
    # Initialize base cases
    prev, curr = 0, 1
    
    # Build up to nth generation
    for i in range(2, n + 1):
        prev, curr = curr, prev + curr
    
    return curr`,
  ],

  [
    "Dynamic Programming Iterative" as PatternKey,
    `def monster_hunter_dp_iterative(monster_quests, resources):
    """
    Optimize quest selection using iterative Dynamic Programming.
    Time: O(quests * resources)
    Space: O(resources)
    
    Monster Hunter Context:
    - Like planning optimal quest routes for farming materials
    - Each state represents available resources
    - Build solution iteratively
    
    Example:
    quests = [
        {"monster": "Rathalos", "rewards": 100, "stamina_cost": 30},
        {"monster": "Nergigante", "rewards": 200, "stamina_cost": 50},
        {"monster": "Teostra", "rewards": 150, "stamina_cost": 40}
    ]
    
    Process:
    1. Initialize dp array for each resource level
    2. For each quest, update dp values
    3. Return optimal value for given resources
    """
    # Initialize dp array
    dp = [0] * (resources + 1)
    
    # Process each quest
    for quest in monster_quests:
        # Process each resource level from high to low
        for j in range(resources, quest["stamina_cost"] - 1, -1):
            # Take max of current value or value with current quest
            dp[j] = max(dp[j], dp[j - quest["stamina_cost"]] + quest["rewards"])
    
    return dp[resources]`,
  ],

  [
    "Dynamic Programming Coin Change" as PatternKey,
    `def monster_hunter_dp_coin_change(material_values, target_value):
    """
    Find minimum materials needed to reach target value.
    Time: O(target * materials)
    Space: O(target)
    
    Monster Hunter Context:
    - Like finding minimum materials for a craft
    - Each material has a value
    - Find combination with minimum count
    
    Example:
    materials = [10, 20, 50, 100]  # Material values
    target = 70  # Target value needed
    
    Process:
    1. Initialize dp array for each value up to target
    2. For each material, update dp values
    3. Return minimum count for target value
    """
    # Initialize dp array with infinity
    dp = [float('inf')] * (target_value + 1)
    dp[0] = 0  # Base case
    
    # Process each material value
    for value in material_values:
        # Update dp values
        for j in range(value, target_value + 1):
            dp[j] = min(dp[j], dp[j - value] + 1)
    
    # Return result or -1 if impossible
    return dp[target_value] if dp[target_value] != float('inf') else -1`,
  ],

  [
    "Greedy Activity Selection" as PatternKey,
    `def monster_hunter_greedy_activity_selection(quests):
    """
    Select maximum number of non-overlapping quests.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like choosing quests that don't overlap in time
    - Each quest has start and end time
    - Maximize number of quests completed
    
    Example:
    quests = [
        {"name": "Hunt Rathalos", "start": 0, "end": 2},
        {"name": "Hunt Nergigante", "start": 1, "end": 4},
        {"name": "Hunt Teostra", "start": 3, "end": 5},
        {"name": "Hunt Kushala", "start": 2, "end": 6}
    ]
    
    Process:
    1. Sort quests by end time
    2. Select first quest
    3. Select next quest that doesn't overlap
    """
    # Sort quests by end time
    sorted_quests = sorted(quests, key=lambda x: x["end"])
    
    selected = [sorted_quests[0]]  # Select first quest
    last_end = sorted_quests[0]["end"]
    
    # Select non-overlapping quests
    for i in range(1, len(sorted_quests)):
        if sorted_quests[i]["start"] >= last_end:
            selected.append(sorted_quests[i])
            last_end = sorted_quests[i]["end"]
    
    return selected`,
  ],

  [
    "Greedy Fractional Knapsack" as PatternKey,
    `def monster_hunter_greedy_fractional_knapsack(materials, capacity):
    """
    Select materials to maximize value within capacity.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like filling inventory with valuable materials
    - Each material has value and weight
    - Can take fractional parts of materials
    
    Example:
    materials = [
        {"name": "Rathalos Scale", "value": 100, "weight": 10},
        {"name": "Dragon Gem", "value": 500, "weight": 5},
        {"name": "Monster Bone", "value": 50, "weight": 15}
    ]
    capacity = 20  # Inventory space
    
    Process:
    1. Sort materials by value/weight ratio
    2. Take as much as possible of each material
    3. Take fractional part of last material if needed
    """
    # Sort materials by value/weight ratio
    sorted_materials = sorted(materials, key=lambda x: x["value"]/x["weight"], reverse=True)
    
    total_value = 0
    selected = []
    
    for material in sorted_materials:
        if capacity >= material["weight"]:
            # Take entire material
            total_value += material["value"]
            capacity -= material["weight"]
            selected.append((material["name"], 1.0))
        else:
            # Take fractional part
            fraction = capacity / material["weight"]
            total_value += material["value"] * fraction
            selected.append((material["name"], fraction))
            break
    
    return total_value, selected`,
  ],

  [
    "Greedy Job Scheduling" as PatternKey,
    `def monster_hunter_greedy_job_scheduling(quests):
    """
    Schedule quests to maximize rewards before deadlines.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like scheduling quests with deadlines
    - Each quest has reward and deadline
    - Maximize total rewards
    
    Example:
    quests = [
        {"name": "Hunt Rathalos", "reward": 100, "deadline": 2},
        {"name": "Hunt Nergigante", "reward": 200, "deadline": 1},
        {"name": "Hunt Teostra", "reward": 150, "deadline": 3}
    ]
    
    Process:
    1. Sort quests by deadline
    2. Use priority queue for rewards
    3. Select highest reward quests within deadlines
    """
    from heapq import heappush, heappop
    
    # Sort quests by deadline
    sorted_quests = sorted(quests, key=lambda x: x["deadline"])
    
    # Priority queue for rewards (negative for max heap)
    pq = []
    selected = []
    current_time = 0
    
    for quest in sorted_quests:
        if current_time < quest["deadline"]:
            # Can take this quest
            heappush(pq, (-quest["reward"], quest["name"]))
            current_time += 1
            selected.append(quest["name"])
        elif pq and -pq[0][0] < quest["reward"]:
            # Replace lowest reward quest
            heappop(pq)
            heappush(pq, (-quest["reward"], quest["name"]))
            selected[-1] = quest["name"]
    
    return selected`,
  ],

  [
    "Greedy Huffman Coding" as PatternKey,
    `def monster_hunter_greedy_huffman(material_frequencies):
    """
    Create optimal prefix codes for materials.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like creating efficient codes for materials
    - More common materials get shorter codes
    - Build binary tree of material frequencies
    
    Example:
    frequencies = [
        ("Rathalos Scale", 10),
        ("Monster Bone", 15),
        ("Dragon Gem", 5),
        ("Elder Dragon Gem", 2)
    ]
    
    Process:
    1. Create leaf nodes for each material
    2. Repeatedly combine lowest frequency nodes
    3. Build Huffman tree
    """
    from heapq import heappush, heappop
    
    class HuffmanNode:
        def __init__(self, material, freq):
            self.material = material
            self.freq = freq
            self.left = None
            self.right = None
        
        def __lt__(self, other):
            return self.freq < other.freq
    
    # Create leaf nodes
    heap = []
    for material, freq in material_frequencies:
        heappush(heap, HuffmanNode(material, freq))
    
    # Build Huffman tree
    while len(heap) > 1:
        left = heappop(heap)
        right = heappop(heap)
        
        internal = HuffmanNode(None, left.freq + right.freq)
        internal.left = left
        internal.right = right
        
        heappush(heap, internal)
    
    # Generate codes
    codes = {}
    
    def generate_codes(node, code=""):
        if node.material:
            codes[node.material] = code
            return
        
        generate_codes(node.left, code + "0")
        generate_codes(node.right, code + "1")
    
    generate_codes(heap[0])
    return codes`,
  ],

  [
    "Greedy Dijkstra" as PatternKey,
    `def monster_hunter_greedy_dijkstra(territory_map, start_zone):
    """
    Find shortest paths to all zones from start.
    Time: O(V²) with array, O(E log V) with heap
    Space: O(V)
    
    Monster Hunter Context:
    - Like finding shortest paths between zones
    - Each path has a difficulty cost
    - Find easiest routes to all zones
    
    Example:
    territory = {
        "Ancient Forest": [("Wildspire Waste", 5), ("Coral Highlands", 3)],
        "Wildspire Waste": [("Ancient Forest", 5), ("Rotten Vale", 4)],
        "Coral Highlands": [("Ancient Forest", 3), ("Elder's Recess", 6)],
        "Rotten Vale": [("Wildspire Waste", 4), ("Elder's Recess", 2)],
        "Elder's Recess": [("Coral Highlands", 6), ("Rotten Vale", 2)]
    }
    start = "Ancient Forest"
    
    Process:
    1. Initialize distances to infinity
    2. Set start distance to 0
    3. Repeatedly select closest unvisited zone
    4. Update distances to neighbors
    """
    from heapq import heappush, heappop
    
    # Initialize distances
    distances = {zone: float('inf') for zone in territory_map}
    distances[start_zone] = 0
    
    # Priority queue for (distance, zone)
    pq = [(0, start_zone)]
    visited = set()
    
    while pq:
        dist, current = heappop(pq)
        
        if current in visited:
            continue
        
        visited.add(current)
        
        # Update distances to neighbors
        for neighbor, cost in territory_map[current]:
            if neighbor not in visited:
                new_dist = dist + cost
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    heappush(pq, (new_dist, neighbor))
    
    return distances`,
  ],

  [
    "Bit Manipulation" as PatternKey,
    `def monster_hunter_bit_manipulation(material_flags):
    """
    Process material flags using bit manipulation.
    Time: O(1) for operations
    Space: O(1)
    
    Monster Hunter Context:
    - Like tracking material availability with bits
    - Each bit represents a material
    - Efficient operations on material sets
    
    Example:
    flags = 0b10110  # Materials available: 1, 2, 4
    
    Operations:
    1. Check if material available: flags & (1 << material_id)
    2. Add material: flags |= (1 << material_id)
    3. Remove material: flags &= ~(1 << material_id)
    4. Toggle material: flags ^= (1 << material_id)
    """
    def has_material(flags, material_id):
        return (flags & (1 << material_id)) != 0
    
    def add_material(flags, material_id):
        return flags | (1 << material_id)
    
    def remove_material(flags, material_id):
        return flags & ~(1 << material_id)
    
    def toggle_material(flags, material_id):
        return flags ^ (1 << material_id)
    
    def count_materials(flags):
        count = 0
        while flags:
            count += flags & 1
            flags >>= 1
        return count
    
    return {
        "has_material": has_material,
        "add_material": add_material,
        "remove_material": remove_material,
        "toggle_material": toggle_material,
        "count_materials": count_materials
    }`,
  ],

  [
    "Topological Sort" as PatternKey,
    `def monster_hunter_topological_sort(quest_dependencies):
    """
    Sort quests based on dependencies.
    Time: O(V + E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like organizing quests that have prerequisites
    - Some quests require others to be completed first
    - Find valid quest order
    
    Example:
    dependencies = {
        "Hunt Rathalos": ["Gather Herbs", "Craft Potions"],
        "Hunt Nergigante": ["Hunt Rathalos", "Craft Armor"],
        "Hunt Teostra": ["Hunt Nergigante"]
    }
    
    Process:
    1. Build adjacency list and in-degree count
    2. Add quests with zero in-degree to queue
    3. Process queue, updating in-degrees
    4. Return topological order
    """
    from collections import defaultdict, deque
    
    # Build adjacency list and in-degree count
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    for quest, deps in quest_dependencies.items():
        for dep in deps:
            graph[dep].append(quest)
            in_degree[quest] += 1
    
    # Initialize queue with quests having zero in-degree
    queue = deque([quest for quest in in_degree if in_degree[quest] == 0])
    
    result = []
    
    # Process queue
    while queue:
        current = queue.popleft()
        result.append(current)
        
        # Update in-degrees of neighbors
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # Check for cycles
    if len(result) != len(quest_dependencies) + len(set([dep for deps in quest_dependencies.values() for dep in deps])):
        return []  # Cycle detected
    
    return result`,
  ],

  [
    "DFS Linked List" as PatternKey,
    `def monster_hunter_dfs_linked_list(head):
    """
    Traverse linked list using DFS approach.
    Time: O(n)
    Space: O(n) - recursion stack
    
    Monster Hunter Context:
    - Like exploring a chain of connected zones
    - Each zone points to the next
    - Recursively visit each zone
    
    Example:
    zones = 1 -> 2 -> 3 -> 4 -> 5
    
    Process:
    1. Visit current zone
    2. Recursively visit next zone
    3. Process after returning from recursion
    """
    def dfs(node, visited=None):
        if visited is None:
            visited = set()
        
        if node is None or node.val in visited:
            return
        
        visited.add(node.val)
        print(f"Visiting zone {node.val}")
        
        # Recursively visit next zone
        dfs(node.next, visited)
        
        # Process after returning (if needed)
        print(f"Finished exploring from zone {node.val}")
    
    dfs(head)`,
  ],

  [
    "DFS Binary Tree" as PatternKey,
    `def monster_hunter_dfs_binary_tree(root):
    """
    Traverse binary tree using DFS approaches.
    Time: O(n)
    Space: O(h) - height of tree
    
    Monster Hunter Context:
    - Like exploring a monster species hierarchy
    - Each node has up to two children
    - Different traversal orders for different purposes
    
    Example:
    Tree structure:
          Wyvern
         /      \\
    Flying    Brute
    Wyvern    Wyvern
      |         |
   Rathalos  Nergigante
    
    Traversal orders:
    1. Preorder: Process before children (Wyvern, Flying, Rathalos, Brute, Nergigante)
    2. Inorder: Process between children (Flying, Wyvern, Rathalos, Brute, Nergigante)
    3. Postorder: Process after children (Rathalos, Flying, Nergigante, Brute, Wyvern)
    """
    def preorder(node):
        if node is None:
            return
        
        print(f"Processing {node.val}")  # Process before children
        preorder(node.left)
        preorder(node.right)
    
    def inorder(node):
        if node is None:
            return
        
        inorder(node.left)
        print(f"Processing {node.val}")  # Process between children
        inorder(node.right)
    
    def postorder(node):
        if node is None:
            return
        
        postorder(node.left)
        postorder(node.right)
        print(f"Processing {node.val}")  # Process after children
    
    return {
        "preorder": preorder,
        "inorder": inorder,
        "postorder": postorder
    }`,
  ],

  [
    "BFS Linked List" as PatternKey,
    `def monster_hunter_bfs_linked_list(head):
    """
    Traverse linked list using BFS approach.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like exploring a chain of connected zones
    - Process each zone level by level
    - Use queue to track zones to visit
    
    Example:
    zones = 1 -> 2 -> 3 -> 4 -> 5
    
    Process:
    1. Add first zone to queue
    2. Process queue, adding next zones
    3. Continue until queue is empty
    """
    from collections import deque
    
    if head is None:
        return
    
    queue = deque([head])
    visited = set()
    
    while queue:
        current = queue.popleft()
        
        if current.val in visited:
            continue
        
        visited.add(current.val)
        print(f"Visiting zone {current.val}")
        
        # Add next zone to queue
        if current.next:
            queue.append(current.next)`,
  ],

  [
    "Circular Linked List" as PatternKey,
    `class MonsterHunterCircularList:
    """
    Circular linked list for monster patrol routes.
    Operations: O(1) to O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like tracking monster patrol routes
    - Last zone connects back to first
    - Useful for cyclic patterns
    
    Example:
    patrol = 1 -> 2 -> 3 -> 4 -> 1
    
    Operations:
    - Insert: Add new zone to route
    - Delete: Remove zone from route
    - Traverse: Visit all zones in cycle
    """
    def __init__(self):
        self.head = None
    
    def insert(self, val):
        new_node = Node(val)
        
        if self.head is None:
            self.head = new_node
            new_node.next = new_node
        else:
            current = self.head
            while current.next != self.head:
                current = current.next
            
            current.next = new_node
            new_node.next = self.head
    
    def delete(self, val):
        if self.head is None:
            return
        
        # If head is the only node
        if self.head.val == val and self.head.next == self.head:
            self.head = None
            return
        
        # If head is to be deleted
        if self.head.val == val:
            current = self.head
            while current.next != self.head:
                current = current.next
            
            self.head = self.head.next
            current.next = self.head
            return
        
        # Search for node to delete
        current = self.head
        while current.next != self.head and current.next.val != val:
            current = current.next
        
        # If node found
        if current.next.val == val:
            current.next = current.next.next
    
    def traverse(self):
        if self.head is None:
            return
        
        current = self.head
        print(f"Zone {current.val}", end="")
        
        while current.next != self.head:
            current = current.next
            print(f" -> Zone {current.val}", end="")
        
        print(f" -> Zone {self.head.val}")  # Back to start`,
  ],

  [
    "Miller-Rabin" as PatternKey,
    `def monster_hunter_miller_rabin(monster_power, k=5):
    """
    Test if a monster's power level is prime using Miller-Rabin primality test.
    Time: O(k log³ n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like testing if a monster's power level is a prime number
    - Useful for identifying special monster variants
    - Higher accuracy with more test rounds
    
    Example:
    power_level = 17  # Monster's power level
    k = 5  # Number of test rounds
    
    Process:
    1. Write power_level - 1 as d * 2^s
    2. Test with random bases
    3. Check for primality indicators
    """
    if monster_power <= 1:
        return False
    if monster_power <= 3:
        return True
    if monster_power % 2 == 0:
        return False
    
    # Write monster_power - 1 as d * 2^s
    d = monster_power - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1
    
    # Test with k rounds
    for _ in range(k):
        a = random.randint(2, monster_power - 2)
        x = pow(a, d, monster_power)
        
        if x == 1 or x == monster_power - 1:
            continue
        
        for _ in range(s - 1):
            x = pow(x, 2, monster_power)
            if x == monster_power - 1:
                break
        else:
            return False
    
    return True`,
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
    "Matrix Chain Multiplication" as PatternKey,
    `def monster_hunter_matrix_chain(weapon_upgrades):
    """
    Optimize weapon upgrade path using Matrix Chain Multiplication.
    Time: O(n³)
    Space: O(n²)
    
    Monster Hunter Context:
    - Like finding optimal upgrade path for weapons
    - Each matrix represents upgrade requirements
    - Minimize total material cost
    
    Example:
    upgrades = [
        (10, 20),  # Iron Sword to Steel Sword
        (20, 30),  # Steel Sword to Rathalos Sword
        (30, 40)   # Rathalos Sword to Elder Dragon Sword
    ]
    
    Process:
    1. Build cost table
    2. Find optimal multiplication order
    3. Calculate minimum material cost
    """
    n = len(weapon_upgrades)
    # Initialize cost table
    cost = [[0] * n for _ in range(n)]
    
    # Fill cost table
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            cost[i][j] = float('inf')
            for k in range(i, j):
                current_cost = (cost[i][k] + cost[k + 1][j] +
                              weapon_upgrades[i][0] * weapon_upgrades[k][1] * weapon_upgrades[j][1])
                if current_cost < cost[i][j]:
                    cost[i][j] = current_cost
    
    return cost[0][n - 1]`,
  ],

  [
    "State Compression DP" as PatternKey,
    `def monster_hunter_state_compression(monster_states, max_stamina):
    """
    Optimize monster hunting strategy using State Compression DP.
    Time: O(n * 2^m)
    Space: O(2^m)
    
    Monster Hunter Context:
    - Like planning optimal attack patterns
    - Each state represents monster's condition
    - Maximize damage while managing stamina
    
    Example:
    states = [
        {"damage": 10, "stamina": 2},  # Quick attack
        {"damage": 20, "stamina": 4},  # Strong attack
        {"damage": 15, "stamina": 3}   # Combo attack
    ]
    max_stamina = 6
    
    Process:
    1. Encode states as bitmask
    2. Track optimal damage for each state
    3. Update based on available stamina
    """
    n = len(monster_states)
    dp = [0] * (1 << n)
    
    for mask in range(1 << n):
        current_stamina = 0
        for i in range(n):
            if mask & (1 << i):
                current_stamina += monster_states[i]["stamina"]
        
        if current_stamina <= max_stamina:
            for i in range(n):
                if not (mask & (1 << i)):
                    new_mask = mask | (1 << i)
                    if current_stamina + monster_states[i]["stamina"] <= max_stamina:
                        dp[new_mask] = max(dp[new_mask], dp[mask] + monster_states[i]["damage"])
    
    return max(dp)`,
  ],

  [
    "Digit DP" as PatternKey,
    `def monster_hunter_digit_dp(monster_count, target_digits):
    """
    Count special monster variants using Digit DP.
    Time: O(digits * 10 * states)
    Space: O(digits * states)
    
    Monster Hunter Context:
    - Like counting rare monster variants
    - Each digit represents a trait
    - Find numbers with specific digit patterns
    
    Example:
    count = 1000  # Total monster count
    target = "13"  # Looking for numbers containing "13"
    
    Process:
    1. Convert number to digits
    2. Track state of digit matching
    3. Count valid numbers
    """
    def count_special_variants(pos, tight, state, memo):
        if pos == len(str(monster_count)):
            return 1 if state == len(target_digits) else 0
        
        key = (pos, tight, state)
        if key in memo:
            return memo[key]
        
        limit = int(str(monster_count)[pos]) if tight else 9
        total = 0
        
        for digit in range(limit + 1):
            new_tight = tight and (digit == limit)
            new_state = state
            
            if state < len(target_digits) and str(digit) == target_digits[state]:
                new_state += 1
            
            total += count_special_variants(pos + 1, new_tight, new_state, memo)
        
        memo[key] = total
        return total
    
    return count_special_variants(0, True, 0, {})`,
  ],

  [
    "Tree DP" as PatternKey,
    `def monster_hunter_tree_dp(monster_tree):
    """
    Optimize monster territory control using Tree DP.
    Time: O(n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like controlling monster territories
    - Each node represents a territory
    - Maximize controlled area while minimizing conflicts
    
    Example:
    tree = {
        "Ancient Forest": ["Wildspire Waste", "Coral Highlands"],
        "Wildspire Waste": ["Rotten Vale"],
        "Coral Highlands": ["Elder's Recess"]
    }
    
    Process:
    1. Traverse tree
    2. Calculate optimal control for each node
    3. Combine results from children
    """
    def dfs(territory, parent):
        # dp[0] = not controlled, dp[1] = controlled
        dp = [0, 1]
        
        for child in monster_tree[territory]:
            if child != parent:
                child_dp = dfs(child, territory)
                dp[0] += max(child_dp[0], child_dp[1])
                dp[1] += child_dp[0]
        
        return dp
    
    return max(dfs("Ancient Forest", None))`,
  ],

  [
    "Probability DP" as PatternKey,
    `def monster_hunter_probability_dp(monster_attacks, max_turns):
    """
    Calculate survival probability using Probability DP.
    Time: O(turns * states)
    Space: O(states)
    
    Monster Hunter Context:
    - Like calculating survival chances
    - Each state represents health and stamina
    - Track probability of surviving attacks
    
    Example:
    attacks = [
        {"damage": 20, "probability": 0.3},
        {"damage": 30, "probability": 0.2},
        {"damage": 10, "probability": 0.5}
    ]
    max_turns = 3
    
    Process:
    1. Initialize probability table
    2. Update probabilities each turn
    3. Calculate final survival chance
    """
    dp = {0: 1.0}  # Initial state: 100% chance of full health
    
    for _ in range(max_turns):
        new_dp = {}
        for health, prob in dp.items():
            for attack in monster_attacks:
                new_health = max(0, health - attack["damage"])
                if new_health in new_dp:
                    new_dp[new_health] += prob * attack["probability"]
                else:
                    new_dp[new_health] = prob * attack["probability"]
        dp = new_dp
    
    return sum(prob for health, prob in dp.items() if health > 0)`,
  ],

  [
    "Network Flow" as PatternKey,
    `def monster_hunter_network_flow(territory_network, source, sink):
    """
    Optimize monster migration using Network Flow.
    Time: O(V * E²)
    Space: O(V + E)
    
    Monster Hunter Context:
    - Like managing monster migration paths
    - Each edge has capacity (max monsters)
    - Find maximum flow between territories
    
    Example:
    network = {
        "Ancient Forest": [("Wildspire Waste", 10), ("Coral Highlands", 15)],
        "Wildspire Waste": [("Rotten Vale", 20)],
        "Coral Highlands": [("Elder's Recess", 25)]
    }
    source = "Ancient Forest"
    sink = "Elder's Recess"
    
    Process:
    1. Initialize residual graph
    2. Find augmenting paths
    3. Update flow and residual capacities
    """
    def bfs(residual, source, sink, parent):
        visited = {source}
        queue = [source]
        
        while queue:
            u = queue.pop(0)
            for v, capacity in residual[u]:
                if v not in visited and capacity > 0:
                    visited.add(v)
                    parent[v] = u
                    if v == sink:
                        return True
                    queue.append(v)
        return False
    
    # Initialize residual graph
    residual = {territory: [] for territory in territory_network}
    for u in territory_network:
        for v, capacity in territory_network[u]:
            residual[u].append([v, capacity])
            if v not in residual:
                residual[v] = []
            residual[v].append([u, 0])
    
    max_flow = 0
    parent = {}
    
    while bfs(residual, source, sink, parent):
        path_flow = float('inf')
        v = sink
        
        while v != source:
            u = parent[v]
            for edge in residual[u]:
                if edge[0] == v:
                    path_flow = min(path_flow, edge[1])
                    break
            v = u
        
        max_flow += path_flow
        v = sink
        
        while v != source:
            u = parent[v]
            for edge in residual[u]:
                if edge[0] == v:
                    edge[1] -= path_flow
                    break
            for edge in residual[v]:
                if edge[0] == u:
                    edge[1] += path_flow
                    break
            v = u
    
    return max_flow`,
  ],

  [
    "Maximum Bipartite Matching" as PatternKey,
    `def monster_hunter_bipartite_matching(hunters, monsters):
    """
    Match hunters to monsters using Maximum Bipartite Matching.
    Time: O(V * E)
    Space: O(V + E)
    
    Monster Hunter Context:
    - Like assigning hunters to suitable monsters
    - Each hunter has preferred monster types
    - Maximize successful hunt assignments
    
    Example:
    hunters = {
        "Hunter1": ["Rathalos", "Diablos"],
        "Hunter2": ["Nergigante", "Teostra"],
        "Hunter3": ["Kushala", "Vaal Hazak"]
    }
    monsters = ["Rathalos", "Diablos", "Nergigante", "Teostra", "Kushala", "Vaal Hazak"]
    
    Process:
    1. Build bipartite graph
    2. Find augmenting paths
    3. Update matching
    """
    def bpm(u, match_to, visited):
        for v in hunters[u]:
            if v not in visited:
                visited.add(v)
                if match_to[v] == -1 or bpm(match_to[v], match_to, visited):
                    match_to[v] = u
                    return True
        return False
    
    match_to = {monster: -1 for monster in monsters}
    result = 0
    
    for hunter in hunters:
        visited = set()
        if bpm(hunter, match_to, visited):
            result += 1
    
    return result`,
  ],

  [
    "Graph Bellman-Ford" as PatternKey,
    `def monster_hunter_bellman_ford(territory_graph, start):
    """
    Find shortest paths using Bellman-Ford algorithm.
    Time: O(V * E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like finding shortest paths between territories
    - Accounts for negative edge weights (difficult terrain)
    - Detects negative cycles (impossible paths)
    
    Example:
    graph = {
        "Ancient Forest": [("Wildspire Waste", 5), ("Coral Highlands", 3)],
        "Wildspire Waste": [("Rotten Vale", 2)],
        "Coral Highlands": [("Elder's Recess", 4)]
    }
    start = "Ancient Forest"
    
    Process:
    1. Initialize distances
    2. Relax edges repeatedly
    3. Check for negative cycles
    """
    # Initialize distances
    distance = {territory: float('inf') for territory in territory_graph}
    distance[start] = 0
    
    # Relax edges
    for _ in range(len(territory_graph) - 1):
        for u in territory_graph:
            for v, weight in territory_graph[u]:
                if distance[u] + weight < distance[v]:
                    distance[v] = distance[u] + weight
    
    # Check for negative cycles
    for u in territory_graph:
        for v, weight in territory_graph[u]:
            if distance[u] + weight < distance[v]:
                return None  # Negative cycle detected
    
    return distance`,
  ],

  [
    "Graph Floyd-Warshall" as PatternKey,
    `def monster_hunter_floyd_warshall(territory_graph):
    """
    Find all-pairs shortest paths using Floyd-Warshall.
    Time: O(V³)
    Space: O(V²)
    
    Monster Hunter Context:
    - Like finding shortest paths between all territories
    - Accounts for all possible routes
    - Useful for territory planning
    
    Example:
    graph = {
        "Ancient Forest": [("Wildspire Waste", 5), ("Coral Highlands", 3)],
        "Wildspire Waste": [("Rotten Vale", 2)],
        "Coral Highlands": [("Elder's Recess", 4)]
    }
    
    Process:
    1. Initialize distance matrix
    2. Update distances through intermediate nodes
    3. Handle negative cycles
    """
    # Get all territories
    territories = list(territory_graph.keys())
    n = len(territories)
    
    # Initialize distance matrix
    dist = [[float('inf')] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
        for neighbor, weight in territory_graph[territories[i]]:
            j = territories.index(neighbor)
            dist[i][j] = weight
    
    # Floyd-Warshall algorithm
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    # Check for negative cycles
    for i in range(n):
        if dist[i][i] < 0:
            return None  # Negative cycle detected
    
    return dist`,
  ],

  [
    "Graph Kruskal" as PatternKey,
    `def monster_hunter_kruskal(territory_edges):
    """
    Find minimum spanning tree using Kruskal's algorithm.
    Time: O(E log E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like connecting territories with minimum cost
    - Each edge represents a path with cost
    - Find most efficient territory connections
    
    Example:
    edges = [
        ("Ancient Forest", "Wildspire Waste", 5),
        ("Ancient Forest", "Coral Highlands", 3),
        ("Wildspire Waste", "Rotten Vale", 2),
        ("Coral Highlands", "Elder's Recess", 4)
    ]
    
    Process:
    1. Sort edges by weight
    2. Use Union-Find to avoid cycles
    3. Add edges to MST
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
    edges = sorted(territory_edges, key=lambda x: x[2])
    
    # Initialize Union-Find
    territories = set()
    for u, v, _ in edges:
        territories.add(u)
        territories.add(v)
    territories = list(territories)
    parent = {t: t for t in territories}
    rank = {t: 0 for t in territories}
    
    # Build MST
    mst = []
    for u, v, weight in edges:
        u_idx = territories.index(u)
        v_idx = territories.index(v)
        
        if find(parent, u_idx) != find(parent, v_idx):
            mst.append((u, v, weight))
            union(parent, rank, u_idx, v_idx)
    
    return mst`,
  ],

  [
    "Graph Prim" as PatternKey,
    `def monster_hunter_prim(territory_graph):
    """
    Find minimum spanning tree using Prim's algorithm.
    Time: O(E log V)
    Space: O(V)
    
    Monster Hunter Context:
    - Like connecting territories with minimum cost
    - Each edge represents a path with cost
    - Find most efficient territory connections
    
    Example:
    graph = {
        "Ancient Forest": [("Wildspire Waste", 5), ("Coral Highlands", 3)],
        "Wildspire Waste": [("Rotten Vale", 2)],
        "Coral Highlands": [("Elder's Recess", 4)]
    }
    
    Process:
    1. Initialize priority queue
    2. Add edges from current territory
    3. Select minimum weight edge
    """
    import heapq
    
    # Initialize
    start = next(iter(territory_graph))
    visited = {start}
    mst = []
    edges = []
    
    # Add edges from start
    for neighbor, weight in territory_graph[start]:
        heapq.heappush(edges, (weight, start, neighbor))
    
    # Build MST
    while edges and len(visited) < len(territory_graph):
        weight, u, v = heapq.heappop(edges)
        if v not in visited:
            visited.add(v)
            mst.append((u, v, weight))
            for neighbor, w in territory_graph[v]:
                if neighbor not in visited:
                    heapq.heappush(edges, (w, v, neighbor))
    
    return mst`,
  ],

  [
    "Ternary Search" as PatternKey,
    `def monster_hunter_ternary_search(monster_territory, left, right):
    """
    Find optimal hunting spot using Ternary Search.
    Time: O(log₃ n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like finding the best hunting spot in a territory
    - Territory has a single peak of monster activity
    - Efficiently narrow down the search area
    
    Example:
    territory = [1, 2, 3, 4, 5, 4, 3, 2, 1]  # Monster activity levels
    left = 0
    right = len(territory) - 1
    
    Process:
    1. Divide territory into thirds
    2. Compare middle points
    3. Narrow search to promising third
    """
    while right - left > 1:
        mid1 = left + (right - left) // 3
        mid2 = right - (right - left) // 3
        
        if monster_territory[mid1] < monster_territory[mid2]:
            left = mid1
        else:
            right = mid2
    
    return left if monster_territory[left] > monster_territory[right] else right`,
  ],

  [
    "Jump Search" as PatternKey,
    `def monster_hunter_jump_search(monster_list, target):
    """
    Search for monster in sorted list using Jump Search.
    Time: O(√n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching for a specific monster in a territory
    - List is sorted by monster strength
    - Jump through list in fixed steps
    
    Example:
    monsters = ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
    target = "Nergigante"
    
    Process:
    1. Calculate jump size
    2. Jump through list
    3. Linear search in block
    """
    n = len(monster_list)
    step = int(math.sqrt(n))
    prev = 0
    
    # Find the block where target might be
    while monster_list[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1
    
    # Linear search in the block
    while monster_list[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
    
    if monster_list[prev] == target:
        return prev
    return -1`,
  ],

  [
    "Exponential Search" as PatternKey,
    `def monster_hunter_exponential_search(monster_list, target):
    """
    Search for monster in unbounded list using Exponential Search.
    Time: O(log i) where i is target position
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching for a monster in an unknown territory
    - List size is unknown
    - Double search range until target is found
    
    Example:
    monsters = ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
    target = "Nergigante"
    
    Process:
    1. Find range containing target
    2. Perform binary search in range
    """
    if monster_list[0] == target:
        return 0
    
    i = 1
    while i < len(monster_list) and monster_list[i] <= target:
        i *= 2
    
    # Binary search in the found range
    left = i // 2
    right = min(i, len(monster_list) - 1)
    
    while left <= right:
        mid = (left + right) // 2
        if monster_list[mid] == target:
            return mid
        elif monster_list[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
  ],

  [
    "Interpolation Search" as PatternKey,
    `def monster_hunter_interpolation_search(monster_list, target):
    """
    Search for monster in uniformly distributed list using Interpolation Search.
    Time: O(log log n) average, O(n) worst case
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching for a monster in a territory
    - List is sorted and uniformly distributed
    - Estimate target position based on value
    
    Example:
    monsters = ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
    target = "Nergigante"
    
    Process:
    1. Calculate probe position
    2. Compare with target
    3. Adjust search range
    """
    left = 0
    right = len(monster_list) - 1
    
    while left <= right and monster_list[left] <= target <= monster_list[right]:
        # Calculate probe position
        pos = left + ((right - left) // (ord(monster_list[right][0]) - ord(monster_list[left][0]))) * \
              (ord(target[0]) - ord(monster_list[left][0]))
        
        if monster_list[pos] == target:
            return pos
        elif monster_list[pos] < target:
            left = pos + 1
        else:
            right = pos - 1
    
    return -1`,
  ],

  [
    "Fibonacci Search" as PatternKey,
    `def monster_hunter_fibonacci_search(monster_list, target):
    """
    Search for monster in sorted list using Fibonacci Search.
    Time: O(log n)
    Space: O(1)
    
    Monster Hunter Context:
    - Like searching for a monster in a territory
    - List is sorted
    - Divide list using Fibonacci numbers
    
    Example:
    monsters = ["Anjanath", "Diablos", "Nergigante", "Rathalos", "Teostra"]
    target = "Nergigante"
    
    Process:
    1. Initialize Fibonacci numbers
    2. Find smallest Fibonacci number >= n
    3. Compare and update search range
    """
    def fibonacci_numbers(n):
        fib = [0, 1]
        while fib[-1] < n:
            fib.append(fib[-1] + fib[-2])
        return fib
    
    n = len(monster_list)
    fib = fibonacci_numbers(n)
    
    offset = -1
    k = len(fib) - 1
    
    while k > 1:
        i = min(offset + fib[k-2], n-1)
        
        if monster_list[i] < target:
            k -= 1
            offset = i
        elif monster_list[i] > target:
            k -= 2
        else:
            return i
    
    if k == 1 and monster_list[offset + 1] == target:
        return offset + 1
    
    return -1`,
  ],
]);

// Export combined patterns
export const allMonsterHunterPatterns = new Map([
  ...monsterHunterPatternsExtended4,
  // Add original patterns here when combining
]);
