import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const editDistancePattern: AlgorithmPattern = {
  title: "Edit Distance",
  description:
    "Edit Distance (Levenshtein Distance) is a measure of similarity between two strings by calculating the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into another. This is a classic dynamic programming problem.",
  timeComplexity: "O(m*n) where m and n are the lengths of the input strings",
  spaceComplexity: "O(m*n) for the DP table",
  category: "dynamic-programming",
  pseudocode: `EDIT-DISTANCE(word1, word2)
    m = word1.length
    n = word2.length
    
    // Initialize DP table
    dp = new int[m+1][n+1]
    
    // Base cases
    for i = 0 to m
        dp[i][0] = i
    for j = 0 to n
        dp[0][j] = j
    
    // Fill DP table
    for i = 1 to m
        for j = 1 to n
            if word1[i-1] == word2[j-1]
                dp[i][j] = dp[i-1][j-1]
            else
                dp[i][j] = 1 + min(
                    dp[i-1][j],    // deletion
                    dp[i][j-1],    // insertion
                    dp[i-1][j-1]   // substitution
                )
    
    return dp[m][n]`,
  implementation: `def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    # Fill DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # deletion
                    dp[i][j-1],    # insertion
                    dp[i-1][j-1]   # substitution
                )
    
    return dp[m][n]

# Example usage:
# word1 = "horse"
# word2 = "ros"
# print(edit_distance(word1, word2))  # Output: 3`,
  example: `# Example 1: Basic case
word1 = "horse"
word2 = "ros"
print(edit_distance(word1, word2))  # Output: 3

# Example 2: Same strings
word1 = "intention"
word2 = "intention"
print(edit_distance(word1, word2))  # Output: 0

# Example 3: Empty string
word1 = ""
word2 = "hello"
print(edit_distance(word1, word2))  # Output: 5`,
  keySteps: [
    "Initialize the DP table with base cases",
    "Fill the table considering three operations: insertion, deletion, and substitution",
    "Return the value in the bottom-right cell of the DP table",
  ],
  keyPoints: [
    "Can be used for spell checking and DNA sequence alignment",
    "Three basic operations: insertion, deletion, and substitution",
    "Can be optimized to use O(n) space instead of O(m*n)",
    "Useful for fuzzy string matching and similarity measures",
  ],
  commonUseCases: [
    "Spell checking and correction",
    "DNA sequence alignment",
    "Plagiarism detection",
    "Fuzzy string matching",
    "Text similarity analysis",
  ],
  relatedPatterns: ["Longest Common Subsequence", "String Matching", "Dynamic Programming"],
  tips: [
    "Consider space optimization for large strings",
    "Can be modified to track the actual operations performed",
    "Useful for implementing 'Did you mean?' suggestions",
  ],
};
