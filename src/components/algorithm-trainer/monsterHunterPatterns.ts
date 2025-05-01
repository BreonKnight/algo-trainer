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
]);
