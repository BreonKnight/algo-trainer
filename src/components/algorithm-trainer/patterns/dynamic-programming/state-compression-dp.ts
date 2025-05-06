import { AlgorithmPattern } from "../../types/pattern-types";

export const stateCompressionDPPattern: AlgorithmPattern = {
  title: "State Compression DP",
  description:
    "A dynamic programming technique that reduces space complexity by representing states using bitmasks or other compact representations.",
  timeComplexity: "O(n * 2^m) where n is problem size and m is state size",
  spaceComplexity: "O(2^m)",
  pseudocode: `1. Identify the state representation that can be compressed
2. Define the compressed state format (e.g., bitmask)
3. Initialize DP array with compressed states
4. For each state:
   a. Unpack the compressed state
   b. Calculate transitions
   c. Update the compressed state
5. Return the solution`,
  example: `Problem: Traveling Salesman Problem
State: bitmask representing visited cities
For 3 cities (A, B, C):
000: no cities visited
001: visited A
010: visited B
100: visited C
111: all cities visited`,
  implementation: `def tsp(distances):
    n = len(distances)
    dp = [[float('inf')] * n for _ in range(1 << n)]
    dp[1][0] = 0  # Start at city 0
    
    for mask in range(1 << n):
        for last in range(n):
            if not (mask & (1 << last)):
                continue
            for next_city in range(n):
                if mask & (1 << next_city):
                    continue
                new_mask = mask | (1 << next_city)
                dp[new_mask][next_city] = min(
                    dp[new_mask][next_city],
                    dp[mask][last] + distances[last][next_city]
                )
    
    return min(dp[(1 << n) - 1][i] + distances[i][0] for i in range(n))`,
  category: "Dynamic Programming",
  keySteps: [
    "Identify states that can be compressed",
    "Choose an appropriate compression method (bitmask, etc.)",
    "Define state transitions in compressed form",
    "Implement the DP solution with compressed states",
    "Handle state unpacking and packing efficiently",
  ],
};
