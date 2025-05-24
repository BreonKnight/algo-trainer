import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const stringHashingPattern: AlgorithmPattern = {
  title: "String Hashing",
  description:
    "String hashing is a technique to convert strings into numbers for efficient string comparison and pattern matching. It uses polynomial rolling hash function to generate hash values.",
  timeComplexity: "O(n) for preprocessing, O(1) for comparison",
  spaceComplexity: "O(n)",
  category: "string",
  pseudocode: `class StringHash:
    def __init__(self, s):
        self.s = s
        self.n = len(s)
        self.base = 911382629  # Large prime number
        self.mod = 10**18 + 3  # Large prime number
        self.power = [1] * (self.n + 1)
        self.hash = [0] * (self.n + 1)
        
        # Precompute powers
        for i in range(1, self.n + 1):
            self.power[i] = (self.power[i-1] * self.base) % self.mod
            
        # Precompute hash values
        for i in range(self.n):
            self.hash[i+1] = (self.hash[i] * self.base + ord(self.s[i])) % self.mod
    
    def get_hash(self, l, r):
        # Returns hash of substring s[l:r]
        return (self.hash[r] - self.hash[l] * self.power[r-l]) % self.mod
    
    def compare(self, other_hash, l1, r1, l2, r2):
        # Compare substrings using their hashes
        hash1 = self.get_hash(l1, r1)
        hash2 = other_hash.get_hash(l2, r2)
        return hash1 == hash2

# Example usage:
# s1 = "hello"
# s2 = "hello"
# hash1 = StringHash(s1)
# hash2 = StringHash(s2)
# print(hash1.compare(hash2, 0, 5, 0, 5))  # True
# print(hash1.get_hash(0, 3))  # Hash of "hel"`,
  implementation: `class StringHash:
    def __init__(self, s):
        self.s = s
        self.n = len(s)
        self.base = 911382629  # Large prime number
        self.mod = 10**18 + 3  # Large prime number
        self.power = [1] * (self.n + 1)
        self.hash = [0] * (self.n + 1)
        
        # Precompute powers
        for i in range(1, self.n + 1):
            self.power[i] = (self.power[i-1] * self.base) % self.mod
            
        # Precompute hash values
        for i in range(self.n):
            self.hash[i+1] = (self.hash[i] * self.base + ord(self.s[i])) % self.mod
    
    def get_hash(self, l, r):
        # Returns hash of substring s[l:r]
        return (self.hash[r] - self.hash[l] * self.power[r-l]) % self.mod
    
    def compare(self, other_hash, l1, r1, l2, r2):
        # Compare substrings using their hashes
        hash1 = self.get_hash(l1, r1)
        hash2 = other_hash.get_hash(l2, r2)
        return hash1 == hash2

# Example usage:
# s1 = "hello"
# s2 = "hello"
# hash1 = StringHash(s1)
# hash2 = StringHash(s2)
# print(hash1.compare(hash2, 0, 5, 0, 5))  # True
# print(hash1.get_hash(0, 3))  # Hash of "hel"`,
  example: `# Example 1: Basic string comparison
s1 = "hello"
s2 = "hello"
hash1 = StringHash(s1)
hash2 = StringHash(s2)
print(hash1.compare(hash2, 0, 5, 0, 5))  # True

# Example 2: Substring comparison
s = "algorithm"
hash = StringHash(s)
print(hash.get_hash(0, 3))  # Hash of "alg"
print(hash.get_hash(5, 8))  # Hash of "ith"

# Example 3: Pattern matching
text = "abababab"
pattern = "aba"
text_hash = StringHash(text)
pattern_hash = StringHash(pattern)
pattern_length = len(pattern)

# Check for pattern at each position
for i in range(len(text) - pattern_length + 1):
    if text_hash.compare(pattern_hash, i, i + pattern_length, 0, pattern_length):
        print(f"Pattern found at index {i}")

# Example 4: Longest common substring
def longest_common_substring(s1, s2):
    hash1 = StringHash(s1)
    hash2 = StringHash(s2)
    n1, n2 = len(s1), len(s2)
    
    # Binary search for length
    left, right = 0, min(n1, n2)
    result = ""
    
    while left <= right:
        mid = (left + right) // 2
        found = False
        
        # Check all substrings of length mid
        for i in range(n1 - mid + 1):
            hash_val = hash1.get_hash(i, i + mid)
            for j in range(n2 - mid + 1):
                if hash2.get_hash(j, j + mid) == hash_val:
                    found = True
                    result = s1[i:i + mid]
                    break
            if found:
                break
        
        if found:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

# Test longest common substring
s1 = "algorithm"
s2 = "logarithm"
print(longest_common_substring(s1, s2))  # "log"`,
};
