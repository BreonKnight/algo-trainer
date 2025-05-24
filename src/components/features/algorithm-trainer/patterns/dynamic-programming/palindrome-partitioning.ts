import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const palindromePartitioningPattern: AlgorithmPattern = {
  title: "Palindrome Partitioning",
  description:
    "Palindrome partitioning is a technique to partition a string into substrings where each substring is a palindrome. This is often used in dynamic programming problems to find the minimum number of cuts needed to partition a string into palindromes.",
  timeComplexity: "O(n²) where n is the length of the string",
  spaceComplexity: "O(n²) for storing the DP table",
  category: "dynamic-programming",
  pseudocode: `PALINDROME-PARTITIONING(s)
    n = s.length
    // dp[i][j] represents if substring s[i...j] is a palindrome
    dp = new boolean[n][n]
    
    // Initialize dp table for single characters
    for i = 0 to n-1
        dp[i][i] = true
    
    // Check for substrings of length 2
    for i = 0 to n-2
        if s[i] == s[i+1]
            dp[i][i+1] = true
    
    // Check for substrings of length > 2
    for len = 3 to n
        for i = 0 to n-len
            j = i + len - 1
            if s[i] == s[j] and dp[i+1][j-1]
                dp[i][j] = true
    
    // Find minimum cuts
    cuts = new int[n]
    for i = 0 to n-1
        if dp[0][i]
            cuts[i] = 0
        else
            cuts[i] = i
            for j = 0 to i-1
                if dp[j+1][i]
                    cuts[i] = min(cuts[i], cuts[j] + 1)
    
    return cuts[n-1]`,
  implementation: `def palindrome_partitioning(s):
    n = len(s)
    # dp[i][j] represents if substring s[i...j] is a palindrome
    dp = [[False] * n for _ in range(n)]
    
    # Initialize dp table for single characters
    for i in range(n):
        dp[i][i] = True
    
    # Check for substrings of length 2
    for i in range(n-1):
        if s[i] == s[i+1]:
            dp[i][i+1] = True
    
    # Check for substrings of length > 2
    for length in range(3, n+1):
        for i in range(n-length+1):
            j = i + length - 1
            if s[i] == s[j] and dp[i+1][j-1]:
                dp[i][j] = True
    
    # Find minimum cuts
    cuts = [0] * n
    for i in range(n):
        if dp[0][i]:
            cuts[i] = 0
        else:
            cuts[i] = i
            for j in range(i):
                if dp[j+1][i]:
                    cuts[i] = min(cuts[i], cuts[j] + 1)
    
    return cuts[n-1]

# Example usage:
# s = "aab"
# print(palindrome_partitioning(s))  # Output: 1`,
  example: `# Example 1: Basic palindrome partitioning
s = "aab"
print(palindrome_partitioning(s))  # Output: 1

# Example 2: String with multiple palindromes
s = "aba"
print(palindrome_partitioning(s))  # Output: 0

# Example 3: String requiring multiple cuts
s = "abc"
print(palindrome_partitioning(s))  # Output: 2`,
  keySteps: [
    "Initialize a DP table to store palindrome information",
    "Fill the DP table for single characters and length 2 substrings",
    "Fill the DP table for substrings of length > 2",
    "Calculate minimum cuts needed for each position",
    "Return the minimum cuts needed for the entire string",
  ],
  keyPoints: [
    "Uses dynamic programming to efficiently solve the problem",
    "Time complexity is O(n²) where n is the length of the string",
    "Space complexity is O(n²) for storing the DP table",
    "Can be extended to find all possible palindrome partitions",
  ],
  commonUseCases: [
    "Finding minimum cuts to partition a string into palindromes",
    "Checking if a string can be partitioned into palindromes",
    "Finding all possible palindrome partitions of a string",
  ],
  relatedPatterns: ["Dynamic Programming", "String Operations", "Palindrome"],
  tips: [
    "Consider edge cases like empty strings and single characters",
    "Use a DP table to avoid recalculating palindrome checks",
    "Optimize space complexity by using a 1D array for cuts",
  ],
};
