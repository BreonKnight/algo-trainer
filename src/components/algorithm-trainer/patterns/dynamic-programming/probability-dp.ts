import { AlgorithmPattern } from "../../types";

export const probabilityDPPattern: AlgorithmPattern = {
  title: "Probability DP",
  description:
    "A dynamic programming technique used to solve problems involving probabilities. It's particularly useful for problems where the probability of an event depends on previous events.",
  timeComplexity:
    "O(n * k) where n is the number of states and k is the number of possible outcomes",
  spaceComplexity: "O(n)",
  pseudocode: `
function probabilityDP(n, p):
    # dp[i] = probability of reaching state i
    dp = [0] * (n + 1)
    dp[0] = 1  # Base case: probability of starting state
    
    for i in range(n):
        for j in range(1, 7):  # Example: rolling a die
            if i + j <= n:
                dp[i + j] += dp[i] * p[j]
    
    return dp[n]
  `,
  example: `
// Example usage:
const n = 10;  // Target sum
const p = [0, 1/6, 1/6, 1/6, 1/6, 1/6, 1/6];  // Probabilities for die rolls
const result = probabilityDP(n, p);
console.log(result); // Output: probability of reaching sum 10
  `,
  implementation: `
function probabilityDP(n: number, p: number[]): number {
  // dp[i] = probability of reaching state i
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;  // Base case: probability of starting state
  
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < p.length; j++) {
      if (i + j <= n) {
        dp[i + j] += dp[i] * p[j];
      }
    }
  }
  
  return dp[n];
}

// Helper function for expected value calculation
function expectedValueDP(n: number, p: number[]): number {
  // dp[i] = expected value to reach state i
  const dp: number[] = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j < p.length; j++) {
      if (i - j >= 0) {
        sum += (dp[i - j] + 1) * p[j];
      }
    }
    dp[i] = sum;
  }
  
  return dp[n];
}

// Helper function for probability of reaching a state within k steps
function probabilityWithinKSteps(n: number, k: number, p: number[]): number {
  // dp[i][j] = probability of reaching state i in j steps
  const dp: number[][] = Array.from({ length: n + 1 }, () => 
    new Array(k + 1).fill(0)
  );
  dp[0][0] = 1;
  
  for (let steps = 1; steps <= k; steps++) {
    for (let state = 0; state <= n; state++) {
      for (let j = 1; j < p.length; j++) {
        if (state - j >= 0) {
          dp[state][steps] += dp[state - j][steps - 1] * p[j];
        }
      }
    }
  }
  
  return dp[n][k];
}
  `,
  category: "dynamic-programming",
};
