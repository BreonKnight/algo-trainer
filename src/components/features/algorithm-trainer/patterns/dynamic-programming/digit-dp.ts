import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const digitDPPattern: AlgorithmPattern = {
  title: "Digit DP",
  description:
    "A dynamic programming technique for solving problems involving digits of numbers, such as counting numbers with specific properties in a range.",
  timeComplexity:
    "O(d * s * t) where d is number of digits, s is state size, t is tight constraint",
  spaceComplexity: "O(d * s * t)",
  pseudocode: `1. Convert number to string for digit processing
2. Define DP state: (position, tight, state)
3. Initialize memoization table
4. For each digit position:
   a. For each possible state:
      - Calculate transitions based on digit constraints
      - Update DP table
5. Return the result for the target state`,
  example: `Problem: Count numbers with no consecutive 1s up to n=5
Numbers: 0, 1, 2, 3, 4, 5
Valid numbers: 0, 1, 2, 3, 4, 5
Result: 6 numbers`,
  implementation: `def count_numbers_without_consecutive_ones(n):
    s = str(n)
    n = len(s)
    
    @lru_cache(None)
    def dp(pos, tight, prev):
        if pos == n:
            return 1
        limit = int(s[pos]) if tight else 9
        total = 0
        for d in range(limit + 1):
            new_tight = tight and (d == limit)
            if prev == 1 and d == 1:
                continue
            total += dp(pos + 1, new_tight, d)
        return total
    
    return dp(0, True, 0)`,
  category: "Dynamic Programming",
  keySteps: [
    "Convert the number to string for digit processing",
    "Define the DP state (position, tight constraint, state)",
    "Implement the recursive DP function with memoization",
    "Handle digit constraints and transitions",
    "Calculate the final result",
  ],
};
