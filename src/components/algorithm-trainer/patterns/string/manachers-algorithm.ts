import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const manachersAlgorithmPattern: AlgorithmPattern = {
  title: "Manacher's Algorithm",
  description:
    "An efficient algorithm to find all palindromic substrings in a string in linear time.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  category: "String",
  pseudocode: `
Manacher's steps:
1. Transform string by adding boundaries:
   - Insert special char between each char
   - Add special chars at start and end
2. For each center position i:
   a. Use previously computed values if possible
   b. Expand around center while matches found
   c. Update right boundary and center
3. Extract palindrome lengths from array
`,
  example: `String: "ababa"
Transform: "#a#b#a#b#a#"
Centers:   0123456789
P array:   [0,1,0,3,0,5,0,3,0,1,0]

Palindromes found:
- a (length 1)
- aba (length 3)
- ababa (length 5)`,
  implementation: `def manacher(s):
    # Transform string
    t = '#' + '#'.join(s) + '#'
    n = len(t)
    p = [0] * n  # palindrome radii
    
    center = right = 0
    
    for i in range(n):
        if i < right:
            # Use previously computed values
            mirror = 2 * center - i
            p[i] = min(right - i, p[mirror])
        
        # Expand around center i
        a = i + (p[i] + 1)
        b = i - (p[i] + 1)
        while a < n and b >= 0 and t[a] == t[b]:
            p[i] += 1
            a += 1
            b -= 1
        
        # Update center and right boundary
        if i + p[i] > right:
            center = i
            right = i + p[i]
    
    return p

def find_palindromes(s):
    p = manacher(s)
    palindromes = []
    
    for i in range(len(p)):
        # Convert transformed index to original
        center = (i - 1) // 2
        radius = p[i] // 2
        
        if p[i] > 0:
            # Even length palindromes
            if i % 2 == 0:
                start = center - radius + 1
                end = center + radius
                palindromes.append(s[start:end])
            # Odd length palindromes
            else:
                start = center - radius
                end = center + radius + 1
                palindromes.append(s[start:end])
    
    return palindromes`,
};
