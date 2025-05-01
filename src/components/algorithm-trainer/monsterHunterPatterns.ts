import { PatternKey } from "./types";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4";
import { monsterHunterPatternsExtended5 } from "./monsterHunterPatternsExtended5";
import { monsterHunterPatternsExtended6 } from "./monsterHunterPatternsExtended6";

// Add matrix exponentiation pattern
const matrixExponentiationPattern = new Map<PatternKey, string>([
  [
    "Matrix Exponentiation",
    `# Monster Hunter Matrix Exponentiation Pattern
# Weapon Power Amplification Strategy

def matrix_multiply(a, b):
    # Combine two weapon power matrices
    n = len(a)
    result = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                result[i][j] += a[i][k] * b[k][j]
    return result

def matrix_exponentiation(matrix, power):
    # Amplify weapon power efficiently
    n = len(matrix)
    result = [[1 if i == j else 0 for j in range(n)] for i in range(n)]
    base = [row[:] for row in matrix]
    
    while power > 0:
        if power % 2 == 1:
            result = matrix_multiply(result, base)
        base = matrix_multiply(base, base)
        power //= 2
    
    return result

# Example: Calculate weapon power progression
matrix = [
    [1, 1],
    [1, 0]
]
power = 5
result = matrix_exponentiation(matrix, power)
# Result shows the weapon's power at different stages`,
  ],
]);

// Add Fast Fourier Transform pattern
export const fastFourierTransformPattern = new Map<PatternKey, string>([
  [
    "Fast Fourier Transform",
    `# Monster Hunter Fast Fourier Transform Pattern
# Monster Attack Pattern Analysis

def fft(a, invert=False):
    """
    Compute the Fast Fourier Transform of a sequence.
    Time: O(n log n)
    Space: O(n)
    
    Monster Hunter Context:
    - Like analyzing monster attack patterns
    - Convert time-domain attacks to frequency domain
    - Helps predict future attack patterns
    
    Example:
    attacks = [1, 0, 1, 0, 1, 0, 1, 0]  # Simple repeating pattern
    frequencies = fft(attacks)
    # Shows dominant frequencies in attack pattern
    """
    n = len(a)
    if n == 1:
        return a
    
    # Split into even and odd
    a0 = [a[2*i] for i in range(n//2)]
    a1 = [a[2*i+1] for i in range(n//2)]
    
    # Recursive calls
    y0 = fft(a0, invert)
    y1 = fft(a1, invert)
    
    # Combine results
    y = [0] * n
    w = 1
    wn = exp(2j * pi / n * (-1 if invert else 1))
    
    for k in range(n//2):
        t = w * y1[k]
        y[k] = y0[k] + t
        y[k + n//2] = y0[k] - t
        w *= wn
    
    return y

def analyze_attack_pattern(attacks):
    """
    Analyze monster attack patterns using FFT.
    
    Args:
        attacks: List of attack strengths over time
    
    Returns:
        Frequency components showing pattern structure
    """
    # Pad to next power of 2
    n = 1 << (len(attacks) - 1).bit_length()
    padded = attacks + [0] * (n - len(attacks))
    
    # Compute FFT
    frequencies = fft(padded)
    
    # Get magnitude spectrum
    spectrum = [abs(x) for x in frequencies]
    
    return spectrum

# Example usage
attacks = [1, 0, 1, 0, 1, 0, 1, 0]  # Simple repeating pattern
spectrum = analyze_attack_pattern(attacks)
# Shows dominant frequencies in attack pattern`,
  ],
]);

// Add Graph Articulation Points pattern
export const graphArticulationPointsPattern = new Map<PatternKey, string>([
  [
    "Graph Articulation Points",
    `# Monster Hunter Graph Articulation Points Pattern
# Critical Monster Territory Analysis

def find_articulation_points(graph):
    """
    Find critical points in monster territory that, if removed,
    would disconnect the territory into multiple parts.
    Time: O(V + E)
    Space: O(V)
    
    Monster Hunter Context:
    - Like finding critical paths in monster territory
    - Identify key areas that connect different regions
    - Helps plan strategic monster hunting routes
    
    Example:
    territory = {
        'Ancient Forest': ['Astera'],
        'Astera': ['Ancient Forest', 'Wildspire Waste', 'Coral Highlands'],
        'Wildspire Waste': ['Astera'],
        'Coral Highlands': ['Astera', 'Rotten Vale'],
        'Rotten Vale': ['Coral Highlands', 'Elder's Recess'],
        'Elder's Recess': ['Rotten Vale']
    }
    critical_points = find_articulation_points(territory)
    # Shows Astera and Coral Highlands as critical points
    """
    def dfs(u, parent, visited, disc, low, time, ap):
        # Count children in DFS tree
        children = 0
        
        # Mark current node as visited
        visited[u] = True
        
        # Initialize discovery time and low value
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        # Go through all vertices adjacent to this
        for v in graph[u]:
            # If v is not visited yet, then make it a child of u
            # in DFS tree and recur for it
            if not visited[v]:
                children += 1
                dfs(v, u, visited, disc, low, time, ap)
                
                # Check if the subtree rooted with v has a connection to
                # one of the ancestors of u
                low[u] = min(low[u], low[v])
                
                # u is an articulation point in following cases:
                # (1) u is root of DFS tree and has two or more children
                if parent == -1 and children > 1:
                    ap.add(u)
                    
                # (2) If u is not root and low value of one of its child
                # is more than discovery value of u
                if parent != -1 and low[v] >= disc[u]:
                    ap.add(u)
                    
            # Update low value of u for parent function calls
            elif v != parent:
                low[u] = min(low[u], disc[v])
    
    # Initialize variables
    visited = {v: False for v in graph}
    disc = {v: float("inf") for v in graph}
    low = {v: float("inf") for v in graph}
    time = [0]
    ap = set()
    
    # Call the recursive helper function to find articulation points
    # in DFS tree rooted with vertex 'i'
    for i in graph:
        if not visited[i]:
            dfs(i, -1, visited, disc, low, time, ap)
            
    return list(ap)

def analyze_territory_critical_points(territory):
    """
    Analyze monster territory to find critical connection points.
    
    Args:
        territory: Dictionary representing monster territory connections
    
    Returns:
        List of critical points that connect different regions
    """
    critical_points = find_articulation_points(territory)
    return critical_points

# Example usage
territory = {
    'Ancient Forest': ['Astera'],
    'Astera': ['Ancient Forest', 'Wildspire Waste', 'Coral Highlands'],
    'Wildspire Waste': ['Astera'],
    'Coral Highlands': ['Astera', 'Rotten Vale'],
    'Rotten Vale': ['Coral Highlands', 'Elder's Recess'],
    'Elder's Recess': ['Rotten Vale']
}

critical_points = analyze_territory_critical_points(territory)
# Shows Astera and Coral Highlands as critical points`,
  ],
]);

// Combine all patterns into a single Map
export const monsterHunterPatterns = new Map<PatternKey, string>([
  ...monsterHunterPatternsExtended,
  ...monsterHunterPatternsExtended2,
  ...monsterHunterPatternsExtended3,
  ...monsterHunterPatternsExtended4,
  ...monsterHunterPatternsExtended5,
  ...monsterHunterPatternsExtended6,
  ...matrixExponentiationPattern,
  ...fastFourierTransformPattern,
  ...graphArticulationPointsPattern,
  [
    "Network Flow",
    `# Monster Hunter Network Flow Pattern
# Monster Territory Resource Distribution

# Monster Hunter Guide: Resource Management and Supply Lines
# =======================================================

# Understanding Resource Flow in Monster Hunter
# -------------------------------------------
# In Monster Hunter, efficient resource management is crucial for successful hunts.
# Network Flow helps you optimize:
# 1. Material transportation between territories
# 2. Supply line efficiency
# 3. Emergency resource distribution
# 4. Multi-source resource allocation

# Territory Types and Capacities
# -----------------------------
# Different territories have different resource capacities:
# - Base Camp: High capacity (15-20)
# - Ancient Forest: Medium capacity (7-12)
# - Wildspire Waste: Medium capacity (6-10)
# - Coral Highlands: Medium capacity (5-8)
# - Rotten Vale: Low capacity (3-6)
# - Elder's Recess: Variable capacity (depends on quest)

# Resource Types and Priorities
# ---------------------------
# 1. Essential Resources (Priority 1):
#    - Potions and healing items
#    - Ammunition and coatings
# 2. Combat Resources (Priority 2):
#    - Traps and bombs
#    - Status effect items
# 3. Utility Resources (Priority 3):
#    - Gathering tools
#    - Environmental items

# Strategic Planning
# ----------------
# 1. Pre-Hunt Preparation:
#    - Map out resource routes
#    - Identify critical supply points
#    - Plan emergency resource distribution
#
# 2. During Hunt:
#    - Monitor resource consumption
#    - Adjust supply routes as needed
#    - Maintain backup supply lines
#
# 3. Emergency Situations:
#    - Activate emergency supply routes
#    - Prioritize critical resources
#    - Maintain minimum resource levels

# Territory Connection Strategies
# ----------------------------
# 1. Direct Routes:
#    - Fastest but limited capacity
#    - Good for emergency supplies
#
# 2. Multiple Path Routes:
#    - Higher total capacity
#    - Better for regular supplies
#
# 3. Backup Routes:
#    - Alternative paths
#    - Critical for emergency situations

# Resource Distribution Tips
# -----------------------
# 1. Always maintain multiple supply routes
# 2. Keep emergency supply lines ready
# 3. Balance resource distribution
# 4. Monitor territory capacities
# 5. Plan for resource bottlenecks

def max_flow(graph, source, sink):
    """
    Find the maximum flow of resources through monster territory.
    Time: O(VE^2) for Edmonds-Karp
    Space: O(V^2)
    
    Monster Hunter Context:
    - Like finding maximum resource flow between territories
    - Optimizing material distribution routes
    - Managing supply lines between hunting grounds
    - Planning efficient resource transportation
    - Balancing supply and demand across territories
    
    Example:
    territory = {
        'Base Camp': {'Ancient Forest': 10, 'Wildspire Waste': 5},
        'Ancient Forest': {'Coral Highlands': 7},
        'Wildspire Waste': {'Rotten Vale': 4},
        'Coral Highlands': {'Elder's Recess': 6},
        'Rotten Vale': {'Elder's Recess': 3},
        'Elder's Recess': {}
    }
    max_resources = max_flow(territory, 'Base Camp', 'Elder's Recess')
    # Shows maximum resources that can reach Elder's Recess
    """
    def bfs(graph, s, t, parent):
        visited = {v: False for v in graph}
        queue = [s]
        visited[s] = True
        
        while queue:
            u = queue.pop(0)
            for v, capacity in graph[u].items():
                if not visited[v] and capacity > 0:
                    queue.append(v)
                    visited[v] = True
                    parent[v] = u
                    if v == t:
                        return True
        return False
    
    parent = {v: -1 for v in graph}
    max_flow = 0
    
    while bfs(graph, source, sink, parent):
        path_flow = float("inf")
        s = sink
        while s != source:
            path_flow = min(path_flow, graph[parent[s]][s])
            s = parent[s]
        
        max_flow += path_flow
        
        v = sink
        while v != source:
            u = parent[v]
            graph[u][v] -= path_flow
            graph[v][u] = graph[v].get(u, 0) + path_flow
            v = parent[v]
    
    return max_flow

def analyze_resource_flow(territory, source, sink):
    """
    Analyze resource flow through monster territory.
    
    Args:
        territory: Dictionary representing territory connections and capacities
        source: Starting territory
        sink: Destination territory
    
    Returns:
        Maximum amount of resources that can flow from source to sink
    """
    return max_flow(territory, source, sink)

# Test Case 1: Basic Resource Distribution
territory1 = {
    'Base Camp': {'Ancient Forest': 10, 'Wildspire Waste': 5},
    'Ancient Forest': {'Coral Highlands': 7},
    'Wildspire Waste': {'Rotten Vale': 4},
    'Coral Highlands': {'Elder's Recess': 6},
    'Rotten Vale': {'Elder's Recess': 3},
    'Elder's Recess': {}
}
max_resources1 = analyze_resource_flow(territory1, 'Base Camp', 'Elder's Recess')
# Expected Output: 9 (7 through Ancient Forest + 2 through Wildspire Waste)

# Test Case 2: Multiple Paths with Different Capacities
territory2 = {
    'Astera': {'Ancient Forest': 8, 'Wildspire Waste': 6},
    'Ancient Forest': {'Coral Highlands': 5, 'Rotten Vale': 3},
    'Wildspire Waste': {'Rotten Vale': 4},
    'Coral Highlands': {'Elder's Recess': 7},
    'Rotten Vale': {'Elder's Recess': 6},
    'Elder's Recess': {}
}
max_resources2 = analyze_resource_flow(territory2, 'Astera', 'Elder's Recess')
# Expected Output: 12 (5 through Ancient Forest + 4 through Wildspire Waste + 3 through Rotten Vale)

# Test Case 3: Complex Network with Multiple Sources
territory3 = {
    'Astera': {'Ancient Forest': 10},
    'Seliana': {'Wildspire Waste': 8},
    'Ancient Forest': {'Coral Highlands': 7},
    'Wildspire Waste': {'Rotten Vale': 6},
    'Coral Highlands': {'Elder's Recess': 5},
    'Rotten Vale': {'Elder's Recess': 4},
    'Elder's Recess': {}
}
# Create a super source
territory3['Super Source'] = {'Astera': float('inf'), 'Seliana': float('inf')}
max_resources3 = analyze_resource_flow(territory3, 'Super Source', 'Elder's Recess')
# Expected Output: 9 (5 through Coral Highlands + 4 through Rotten Vale)

# Test Case 4: Supply Chain Optimization
territory4 = {
    'Base Camp': {'Ancient Forest': 15, 'Wildspire Waste': 10},
    'Ancient Forest': {'Coral Highlands': 12, 'Rotten Vale': 8},
    'Wildspire Waste': {'Rotten Vale': 7},
    'Coral Highlands': {'Elder's Recess': 10},
    'Rotten Vale': {'Elder's Recess': 9},
    'Elder's Recess': {}
}
max_resources4 = analyze_resource_flow(territory4, 'Base Camp', 'Elder's Recess')
# Expected Output: 19 (10 through Coral Highlands + 9 through Rotten Vale)

# Test Case 5: Emergency Resource Distribution
territory5 = {
    'Emergency Camp': {'Ancient Forest': 20, 'Wildspire Waste': 15},
    'Ancient Forest': {'Coral Highlands': 18},
    'Wildspire Waste': {'Rotten Vale': 12},
    'Coral Highlands': {'Elder's Recess': 15},
    'Rotten Vale': {'Elder's Recess': 10},
    'Elder's Recess': {}
}
max_resources5 = analyze_resource_flow(territory5, 'Emergency Camp', 'Elder's Recess')
# Expected Output: 25 (15 through Coral Highlands + 10 through Rotten Vale)

# Monster Hunter Tip:
# Like optimizing your supply lines to ensure maximum resources reach your hunting grounds!
# Use Network Flow to:
# 1. Plan efficient resource distribution between territories
# 2. Find bottlenecks in your supply chain
# 3. Optimize emergency resource delivery
# 4. Balance multiple supply routes
# 5. Maximize resource delivery to critical hunting grounds

# Advanced Strategies
# -----------------
# 1. Territory Management:
#    - Monitor territory capacities
#    - Plan resource distribution
#    - Maintain supply lines
#
# 2. Resource Optimization:
#    - Prioritize critical resources
#    - Balance supply routes
#    - Plan for emergencies
#
# 3. Emergency Preparedness:
#    - Maintain backup routes
#    - Keep emergency supplies
#    - Monitor resource levels

# Territory-Specific Tips
# ---------------------
# 1. Ancient Forest:
#    - High resource capacity
#    - Multiple connection points
#    - Good for main supply line
#
# 2. Wildspire Waste:
#    - Medium resource capacity
#    - Limited connections
#    - Good for backup routes
#
# 3. Coral Highlands:
#    - Medium resource capacity
#    - Strategic location
#    - Good for distribution hub
#
# 4. Rotten Vale:
#    - Low resource capacity
#    - Limited connections
#    - Use for emergency routes
#
# 5. Elder's Recess:
#    - Variable capacity
#    - Multiple entry points
#    - Critical for endgame

# Resource Management Checklist
# --------------------------
# 1. Pre-Hunt:
#    - Map supply routes
#    - Check territory capacities
#    - Plan resource distribution
#
# 2. During Hunt:
#    - Monitor resource flow
#    - Adjust supply routes
#    - Maintain minimum levels
#
# 3. Emergency:
#    - Activate backup routes
#    - Prioritize critical resources
#    - Maintain supply chain`,
  ],
]);
