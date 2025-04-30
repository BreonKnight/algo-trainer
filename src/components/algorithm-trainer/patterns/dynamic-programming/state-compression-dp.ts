import { AlgorithmPattern } from "../../types";

export const stateCompressionDPPattern: AlgorithmPattern = {
  title: "State Compression DP",
  description:
    "A dynamic programming technique that uses bit manipulation to represent states efficiently. It's particularly useful when dealing with problems where the state can be represented as a combination of binary choices.",
  timeComplexity:
    "O(n * 2^k) where n is the problem size and k is the number of states",
  spaceComplexity: "O(2^k)",
  pseudocode: `
function stateCompressionDP(n, k):
    # Initialize DP table
    dp = [[0] * (1 << k) for _ in range(n + 1)]
    dp[0][0] = 1  # Base case
    
    for i in range(1, n + 1):
        for mask in range(1 << k):
            # Try all possible transitions
            for j in range(k):
                if not (mask & (1 << j)):
                    new_mask = mask | (1 << j)
                    dp[i][new_mask] += dp[i-1][mask]
    
    return dp[n][(1 << k) - 1]
  `,
  example: `
// Example usage:
const n = 3;  // Number of elements
const k = 2;  // Number of states
const result = stateCompressionDP(n, k);
console.log(result); // Output: 8 (number of ways to assign states)
  `,
  implementation: `
function stateCompressionDP(n: number, k: number): number {
  // Initialize DP table
  const dp: number[][] = Array.from({ length: n + 1 }, () => 
    Array(1 << k).fill(0)
  );
  dp[0][0] = 1;  // Base case
  
  for (let i = 1; i <= n; i++) {
    for (let mask = 0; mask < (1 << k); mask++) {
      // Try all possible transitions
      for (let j = 0; j < k; j++) {
        if (!(mask & (1 << j))) {
          const newMask = mask | (1 << j);
          dp[i][newMask] += dp[i-1][mask];
        }
      }
    }
  }
  
  return dp[n][(1 << k) - 1];
}

// Helper functions for common operations
function setBit(mask: number, position: number): number {
  return mask | (1 << position);
}

function clearBit(mask: number, position: number): number {
  return mask & ~(1 << position);
}

function isBitSet(mask: number, position: number): boolean {
  return (mask & (1 << position)) !== 0;
}

function countSetBits(mask: number): number {
  let count = 0;
  while (mask) {
    count += mask & 1;
    mask >>= 1;
  }
  return count;
}
  `,
  category: "dynamic-programming",
};
