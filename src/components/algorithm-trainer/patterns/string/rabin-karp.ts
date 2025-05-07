import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const rabinKarpPattern: AlgorithmPattern = {
  title: "Rabin-Karp",
  description:
    "A string matching algorithm that uses hashing to find patterns in text. It uses a rolling hash function to efficiently compute hash values for substrings and compares them with the pattern's hash. This approach allows for average-case linear time complexity.",
  timeComplexity: "Average: O(n + m), Worst: O(nm) where n is text length and m is pattern length",
  spaceComplexity: "O(1)",
  category: "String",
  pseudocode: `
1. Calculate hash value of pattern
2. Calculate hash value of first window of text
3. For each position in text:
   a. If current window hash matches pattern hash:
      - Compare characters one by one
      - If all characters match, return position
   b. Calculate hash of next window using rolling hash
4. Return -1 if pattern not found
  `,
  example: `Input:
Text: "GEEKS FOR GEEKS"
Pattern: "GEEK"

Step 1: Calculate pattern hash
hash("GEEK") = 71 + 69 + 69 + 75 = 284

Step 2: Calculate first window hash
hash("GEEK") = 71 + 69 + 69 + 75 = 284
Match found at position 0

Step 3: Move window
hash("EEKS") = 69 + 69 + 75 + 83 = 296
No match

Step 4: Continue until end
Found matches at positions 0 and 10`,
  implementation: `def rabin_karp(text, pattern):
    d = 256  # Number of characters in input alphabet
    q = 101  # A prime number
    
    M = len(pattern)
    N = len(text)
    p = 0  # Hash value for pattern
    t = 0  # Hash value for text window
    h = 1
    
    # Calculate h = d^(M-1) % q
    for i in range(M-1):
        h = (h * d) % q
    
    # Calculate hash value of pattern and first window of text
    for i in range(M):
        p = (d * p + ord(pattern[i])) % q
        t = (d * t + ord(text[i])) % q
    
    # Slide the pattern over text one by one
    for i in range(N - M + 1):
        # Check hash values
        if p == t:
            # Check characters one by one
            for j in range(M):
                if text[i + j] != pattern[j]:
                    break
            else:
                return i  # Pattern found
        
        # Calculate hash value for next window
        if i < N - M:
            t = (d * (t - ord(text[i]) * h) + ord(text[i + M])) % q
            # Handle negative t
            if t < 0:
                t = t + q
    
    return -1  # Pattern not found

# Example usage
text = "GEEKS FOR GEEKS"
pattern = "GEEK"
result = rabin_karp(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")`,
  keySteps: [
    "Initialize hash parameters and calculate initial hash values",
    "Use rolling hash to efficiently compute window hashes",
    "Compare hash values and verify matches character by character",
    "Handle hash value updates for next window",
    "Return position of first match or -1 if not found",
  ],
};
