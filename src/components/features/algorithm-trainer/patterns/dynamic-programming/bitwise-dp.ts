import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const bitwiseDPPattern: AlgorithmPattern = {
  title: "Bitwise DP",
  description:
    "A dynamic programming technique that uses bitwise operations to represent and manipulate states. It's particularly useful for problems involving subsets, permutations, or state compression where each state can be represented as a combination of binary flags.",
  timeComplexity: "O(n * 2^n) where n is the number of elements/states",
  spaceComplexity: "O(2^n) for storing all possible states",
  pseudocode: `1. Define the state representation using bitwise operations
2. Initialize the DP table with base cases
3. For each state:
   a. Generate all possible next states using bitwise operations
   b. Update the DP table based on the state transitions
4. Return the final state's value`,
  example: `Problem: Traveling Salesman Problem (TSP) with 4 cities
State representation: 4-bit number where each bit represents a city
0000: No cities visited
0001: Only city 0 visited
0010: Only city 1 visited
...
1111: All cities visited

DP state: dp[mask][pos] = minimum cost to visit all cities in mask ending at pos
Base case: dp[1 << start][start] = 0

Transition:
For each unvisited city j:
  new_mask = mask | (1 << j)
  dp[new_mask][j] = min(dp[new_mask][j], dp[mask][i] + cost[i][j])`,
  implementation: `def tsp_bitwise_dp(n: int, cost: list[list[int]]) -> int:
    # Initialize DP table with infinity
    dp = [[float('inf')] * n for _ in range(1 << n)]
    
    # Base case: starting from city 0
    dp[1][0] = 0
    
    # Try all possible masks
    for mask in range(1 << n):
        # Try all possible positions
        for pos in range(n):
            # Skip if current position is not in the mask
            if not (mask & (1 << pos)):
                continue
            
            # Try all possible next cities
            for next_city in range(n):
                # Skip if next city is already visited
                if mask & (1 << next_city):
                    continue
                
                new_mask = mask | (1 << next_city)
                dp[new_mask][next_city] = min(
                    dp[new_mask][next_city],
                    dp[mask][pos] + cost[pos][next_city]
                )
    
    # Find minimum cost to visit all cities and return to start
    final_mask = (1 << n) - 1
    min_cost = float('inf')
    
    for pos in range(1, n):
        min_cost = min(min_cost, dp[final_mask][pos] + cost[pos][0])
    
    return min_cost`,
  category: "Dynamic Programming",
  keySteps: [
    "1. Represent the state using bitwise operations (usually a binary number)",
    "2. Define the base cases for the DP table",
    "3. Implement state transitions using bitwise operations",
    "4. Handle edge cases and boundary conditions",
    "5. Extract the final result from the DP table",
  ],
  tips: [
    "Use bitwise operations (AND, OR, XOR, NOT) for efficient state manipulation",
    "Consider using bitwise shifts (<<, >>) for power of 2 operations",
    "Be careful with bitwise operations precedence",
    "Use bitwise operations to check if a state is valid",
    "Consider using bitwise operations for subset generation",
  ],
  relatedPatterns: [
    "Dynamic Programming",
    "State Compression DP",
    "Traveling Salesman Problem",
    "Hamiltonian Path",
  ],
};
