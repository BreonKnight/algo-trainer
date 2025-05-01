import { AlgorithmPattern } from "../../types";

export const suffixArrayPattern: AlgorithmPattern = {
  title: "Suffix Array",
  description:
    "A data structure that provides efficient string operations by storing all suffixes of a string in sorted order.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Create an array of all suffixes of the input string
2. Sort the suffixes lexicographically
3. Store the starting indices of the sorted suffixes
4. Optional: Build the LCP (Longest Common Prefix) array`,
  example: `Input string: "banana"
Suffixes: ["banana", "anana", "nana", "ana", "na", "a"]
Sorted suffixes: ["a", "ana", "anana", "banana", "na", "nana"]
Suffix array: [5, 3, 1, 0, 4, 2]`,
  implementation: `def build_suffix_array(s):
    n = len(s)
    # Initialize suffix array with indices
    sa = list(range(n))
    # Initialize rank array
    rank = [ord(s[i]) for i in range(n)]
    
    k = 1
    while k < n:
        # Sort suffixes based on first k characters
        sa.sort(key=lambda x: (rank[x], rank[x + k]) if x + k < n else (rank[x],))
        
        # Update rank array
        new_rank = [0] * n
        new_rank[sa[0]] = 0
        for i in range(1, n):
            # Compare current suffix with previous suffix
            curr = (rank[sa[i]], rank[sa[i] + k]) if sa[i] + k < n else (rank[sa[i]],)
            prev = (rank[sa[i-1]], rank[sa[i-1] + k]) if sa[i-1] + k < n else (rank[sa[i-1]],)
            new_rank[sa[i]] = new_rank[sa[i-1]] + (1 if curr > prev else 0)
        rank = new_rank
        
        # If all suffixes are unique, we're done
        if rank[sa[n-1]] == n-1:
            break
        k *= 2
    
    return sa

def build_lcp_array(s, sa):
    n = len(s)
    lcp = [0] * n
    rank = [0] * n
    
    # Build rank array
    for i in range(n):
        rank[sa[i]] = i
    
    k = 0
    for i in range(n):
        if rank[i] == n-1:
            k = 0
            continue
        j = sa[rank[i] + 1]
        while i + k < n and j + k < n and s[i + k] == s[j + k]:
            k += 1
        lcp[rank[i]] = k
        if k > 0:
            k -= 1
    
    return lcp`,
  category: "String",
  keySteps: [
    "Create an array of all suffixes",
    "Sort suffixes lexicographically",
    "Store starting indices of sorted suffixes",
    "Optional: Build LCP array for additional functionality",
    "Use suffix array for efficient string operations",
  ],
};
