import { AlgorithmPattern } from "../../types";

export const digitDPPattern: AlgorithmPattern = {
  title: "Digit DP",
  description:
    "A dynamic programming technique used to solve problems involving digits of numbers. It's particularly useful for counting numbers in a range that satisfy certain properties.",
  timeComplexity:
    "O(d * s * 2) where d is the number of digits and s is the maximum sum",
  spaceComplexity: "O(d * s * 2)",
  pseudocode: `
function digitDP(number, target_sum):
    digits = list(map(int, str(number)))
    n = len(digits)
    
    def dp(pos, sum, tight):
        if pos == n:
            return 1 if sum == target_sum else 0
            
        if memo[pos][sum][tight] != -1:
            return memo[pos][sum][tight]
            
        limit = digits[pos] if tight else 9
        res = 0
        
        for d in range(0, limit + 1):
            new_tight = tight and (d == limit)
            new_sum = sum + d
            res += dp(pos + 1, new_sum, new_tight)
            
        memo[pos][sum][tight] = res
        return res
    
    memo = [[[-1] * 2 for _ in range(target_sum + 1)] for _ in range(n)]
    return dp(0, 0, True)
  `,
  example: `
// Example usage:
const number = 123;
const targetSum = 6;
const result = digitDP(number, targetSum);
console.log(result); // Output: 3 (numbers: 123, 132, 213)
  `,
  implementation: `
function digitDP(number: number, targetSum: number): number {
  const digits = String(number).split('').map(Number);
  const n = digits.length;
  
  // Initialize memoization table
  const memo: number[][][] = Array.from({ length: n }, () =>
    Array.from({ length: targetSum + 1 }, () =>
      Array(2).fill(-1)
    )
  );
  
  function dp(pos: number, sum: number, tight: boolean): number {
    if (pos === n) {
      return sum === targetSum ? 1 : 0;
    }
    
    if (memo[pos][sum][tight ? 1 : 0] !== -1) {
      return memo[pos][sum][tight ? 1 : 0];
    }
    
    const limit = tight ? digits[pos] : 9;
    let res = 0;
    
    for (let d = 0; d <= limit; d++) {
      const newTight = tight && (d === limit);
      const newSum = sum + d;
      res += dp(pos + 1, newSum, newTight);
    }
    
    memo[pos][sum][tight ? 1 : 0] = res;
    return res;
  }
  
  return dp(0, 0, true);
}

// Helper function to count numbers with digit sum equal to target
function countNumbersWithDigitSum(low: number, high: number, targetSum: number): number {
  return digitDP(high, targetSum) - digitDP(low - 1, targetSum);
}
  `,
  category: "dynamic-programming",
};
