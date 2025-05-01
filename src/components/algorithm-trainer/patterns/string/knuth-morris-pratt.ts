import { AlgorithmPattern } from "../../types";

export const knuthmorrisprattPattern: AlgorithmPattern = {
  title: "KMP Algorithm",
  description:
    "An efficient string matching algorithm that preprocesses the pattern to avoid unnecessary comparisons by utilizing a prefix function.",
  timeComplexity: "O(n + m)",
  spaceComplexity: "O(m) for pattern array",
  category: "String Algorithms",
  pseudocode: `
KMP steps:
1. Build LPS (Longest Proper Prefix Suffix) array:
   - lps[0] = 0
   - Use two pointers to find matching prefixes
2. Search pattern:
   - Use pattern and lps array to skip comparisons
   - When mismatch occurs, use lps to determine next position
`,
  example: `Pattern: "ABABCABAB"
LPS Array: [0,0,1,2,0,1,2,3,4]

Text: "ABABDABABCABAB"
Pattern matches at index 6

Building LPS:
A -> [0]
AB -> [0,0]
ABA -> [0,0,1]
ABAB -> [0,0,1,2]
...`,
  implementation: `def compute_lps(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0  # length of previous longest prefix suffix
    
    # lps[0] is always 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                # Use lps of previous character
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
        return lps
    
def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    matches = []
    
    if m == 0:
        return matches
    
    # Compute LPS array
    lps = compute_lps(pattern)
    
    i = 0  # index for text
    j = 0  # index for pattern
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == m:
            matches.append(i - j)
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches`,
};
