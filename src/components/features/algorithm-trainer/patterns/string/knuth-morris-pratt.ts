import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const knuthMorrisPrattPattern: AlgorithmPattern = {
  title: "Knuth-Morris-Pratt",
  description:
    "A string matching algorithm that uses pattern preprocessing to achieve linear time complexity. It builds a prefix table (lps array) to avoid unnecessary character comparisons by utilizing information about the pattern itself.",
  timeComplexity: "O(n + m) where n is text length and m is pattern length",
  spaceComplexity: "O(m)",
  category: "String",
  pseudocode: `
1. Preprocess pattern to create lps array:
   a. Initialize lps[0] = 0, len = 0, i = 1
   b. While i < pattern length:
      - If pattern[i] == pattern[len]:
         * len += 1, lps[i] = len, i += 1
      - Else:
         * If len != 0: len = lps[len-1]
         * Else: lps[i] = 0, i += 1

2. Search pattern in text:
   a. Initialize i = 0, j = 0
   b. While i < text length:
      - If text[i] == pattern[j]:
         * i += 1, j += 1
      - If j == pattern length:
         * Pattern found at i-j
         * j = lps[j-1]
      - Else if i < text length and text[i] != pattern[j]:
         * If j != 0: j = lps[j-1]
         * Else: i += 1
  `,
  example: `Input:
Text: "ABABDABACDABABCABAB"
Pattern: "ABABCABAB"

Step 1: Build lps array
Pattern: A B A B C A B A B
lps:     [0,0,1,2,0,1,2,3,4]

Step 2: Search pattern
- Start at i=0, j=0
- Match until j=4 (ABAB)
- Mismatch at C vs D
- j = lps[3] = 2
- Continue matching
- Found pattern at index 10`,
  implementation: `def compute_lps(pattern):
    lps = [0] * len(pattern)
    length = 0  # length of the previous longest prefix suffix
    i = 1
    
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    
    return lps

def kmp_search(text, pattern):
    if not pattern or not text:
        return -1
    
    lps = compute_lps(pattern)
    i = 0  # index for text
    j = 0  # index for pattern
    
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
            
            if j == len(pattern):
                return i - j  # Pattern found
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return -1  # Pattern not found

# Example usage
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
result = kmp_search(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")`,
  keySteps: [
    "Preprocess pattern to build longest prefix suffix array",
    "Initialize indices for text and pattern",
    "Compare characters and update indices",
    "Use lps array to skip unnecessary comparisons",
    "Return position of first match or -1 if not found",
  ],
};
