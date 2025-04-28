import { AlgorithmPattern } from "../../types";

export const zalgorithmPattern: AlgorithmPattern = {
  title: "Z-Algorithm",
  description: "A linear time pattern matching algorithm that utilizes the Z array (which stores the length of the longest substring starting from the current position that is also a prefix of the string).",
  timeComplexity: "O(n + m)",
  spaceComplexity: "O(n + m)",
  pseudocode: `
Z-Algorithm steps:
1. Concatenate pattern + special_char + text
2. Build Z array:
   - If inside Z-box, use previous values
   - Otherwise, compare characters
   - Maintain Z-box [left, right]
3. Find pattern matches where Z[i] = pattern_length
`,
  example: `Pattern: "aab"
Text: "baabaa"
Concatenated: "aab$baabaa"

Z array: [0,1,0,0,0,3,1,0,2,1]
Matches found at index 3 (Z[5] = 3)`,
  implementation: `def calculate_z_array(s):
    n = len(s)
    z = [0] * n
    
    # [left,right] make a window which matches 
    # with prefix of s
    left = right = 0
    
    for i in range(1, n):
        if i > right:
            # If outside Z-box, compute traditionally
            left = right = i
            while right < n and s[right] == s[right-left]:
                right += 1
            z[i] = right - left
            right -= 1
        else:
            # If inside Z-box
            k = i - left
            
            # If value does not stretch till right boundary
            if z[k] < right - i + 1:
                z[i] = z[k]
            else:
                # Try to find more matches
                left = i
                while right < n and s[right] == s[right-left]:
                    right += 1
                z[i] = right - left
                right -= 1
    
    return z

def z_algorithm(text, pattern):
    # Concatenate pattern and text with a special character
    concat = pattern + "$" + text
    n = len(concat)
    
    # Calculate Z array
    z = calculate_z_array(concat)
    
    # Find matches
    matches = []
    pattern_length = len(pattern)
    
    for i in range(pattern_length + 1, n):
        if z[i] == pattern_length:
            matches.append(i - pattern_length - 1)
    
    return matches`
};
