import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const dynamicProgrammingPattern: AlgorithmPattern = {
  title: "Dynamic Programming",
  description:
    "A method for solving complex problems by breaking them down into simpler subproblems, solving each subproblem only once, and storing the results for future use.",
  timeComplexity: "Varies by algorithm, typically O(n) to O(n²) for most problems",
  spaceComplexity: "Varies by algorithm, typically O(n) to O(n²) for most problems",
  pseudocode: `1. Identify if the problem can be solved using dynamic programming:\n   a. Overlapping subproblems (same subproblems are encountered multiple times)\n   b. Optimal substructure (optimal solution can be constructed from optimal solutions of subproblems)\n2. Define the state (what information is needed to solve the subproblem)\n3. Formulate the recurrence relation (how to solve a problem using solutions to smaller subproblems)\n4. Identify the base cases (smallest subproblems that can be solved directly)\n5. Decide the order of computation (top-down or bottom-up approach)\n6. Implement the solution\n7. Analyze the time and space complexity of the algorithm`,
  example: `Problem: Fibonacci Sequence\n\n1. State: dp[i] represents the i-th Fibonacci number\n2. Recurrence Relation: dp[i] = dp[i-1] + dp[i-2]\n3. Base Cases: dp[0] = 0, dp[1] = 1\n4. Order: Bottom-up (compute dp[2] to dp[n])\n\nExample:\nn = 5\ndp[0] = 0\ndp[1] = 1\ndp[2] = dp[1] + dp[0] = 1 + 0 = 1\ndp[3] = dp[2] + dp[1] = 1 + 1 = 2\ndp[4] = dp[3] + dp[2] = 2 + 1 = 3\ndp[5] = dp[4] + dp[3] = 3 + 2 = 5\n\nResult: The 5th Fibonacci number is 5`,
  implementation: `# Dynamic Programming implementation of Fibonacci sequence\ndef fibonacci_dp(n):\n    if n <= 1:\n        return n\n    \n    # Initialize dp array\n    dp = [0] * (n + 1)\n    dp[0] = 0\n    dp[1] = 1\n    \n    # Fill dp array\n    for i in range(2, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    \n    return dp[n]\n\n# Example usage\nn = 5\nresult = fibonacci_dp(n)\nprint(f"The {n}th Fibonacci number is: {result}")\n`,
  category: "Dynamic Programming",
};
