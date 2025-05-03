import { AlgorithmPattern } from "../../types";

export const rabinKarpPattern: AlgorithmPattern = {
  title: "Rabin-Karp String Matching Algorithm",
  description:
    "A string matching algorithm that uses hashing to find exact string matches or multiple pattern matches efficiently.",
  timeComplexity: "Average: O(n+m), Worst: O(nm)",
  spaceComplexity: "O(1)",
  pseudocode: `
Rabin-Karp steps:
1. Calculate hash of pattern
2. For each m-length substring of text:
   a. Calculate rolling hash
   b. If hash matches pattern hash:
      * Check character by character
   c. Update rolling hash for next window
`,
  example: `Text: "AABAACAADAABAAABAA"
Pattern: "AABA"

Hash function: sum(char * prime^pos)
Pattern hash: 1*3^0 + 1*3^1 + 2*3^2 + 1*3^3 = 40

Window 1: "AABA" (hash=40) - Match at pos 0
Window 2: "ABAA" (hash≠40)
Window 3: "BAAC" (hash≠40)
...
Window 13: "AABA" (hash=40) - Match at pos 12`,
  implementation: `def rabin_karp(text, pattern):
    if not pattern or not text:
        return []
    
    # Constants for hash calculation
    d = 256  # number of characters in alphabet
    q = 101  # prime number for hash modulo
    
    m = len(pattern)
    n = len(text)
    if m > n:
        return []
    
    # Calculate pattern hash
    pattern_hash = 0
    window_hash = 0
    h = pow(d, m-1) % q
    
    for i in range(m):
        pattern_hash = (d * pattern_hash + ord(pattern[i])) % q
        window_hash = (d * window_hash + ord(text[i])) % q
    
    matches = []
    
    # Slide window and check hashes
    for i in range(n - m + 1):
        if pattern_hash == window_hash:
            # Verify character by character
            if text[i:i+m] == pattern:
                matches.append(i)
        
        # Calculate hash for next window
        if i < n - m:
            window_hash = (d * (window_hash - ord(text[i]) * h) + 
                         ord(text[i + m])) % q
            if window_hash < 0:
                window_hash += q
    
    return matches`,
  category: "String",
};
