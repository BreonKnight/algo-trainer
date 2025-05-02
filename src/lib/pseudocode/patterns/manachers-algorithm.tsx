import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const ManachersAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Manacher's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(String)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Find longest
      palindromic substring
    </div>

    <PseudocodeDisplay code={`# Manacher's Algorithm: Find longest palindromic substring
# Input: String S[1..n]
# Output: Longest palindromic substring in S

Algorithm MANACHER(S)
    # Transform string to handle even-length palindromes
    T ← "#" + S[1] + "#" + S[2] + "#" + ... + S[n] + "#"
    n' ← length[T]
    
    # Initialize arrays
    P ← array of size n' filled with 0
    C ← 1
    R ← 1
    
    for i ← 2 to n' do
        # Mirror position
        i_mirror ← 2 * C - i
        
        # If i is within current right boundary
        if i < R then
            P[i] ← min(R - i, P[i_mirror])
        end if
        
        # Expand around center
        while T[i + P[i] + 1] = T[i - P[i] - 1] do
            P[i] ← P[i] + 1
        end while
        
        # Update center and right boundary if needed
        if i + P[i] > R then
            C ← i
            R ← i + P[i]
        end if
    end for
    
    # Find maximum length and center
    max_len ← 0
    center ← 0
    for i ← 1 to n' do
        if P[i] > max_len then
            max_len ← P[i]
            center ← i
        end if
    end for
    
    # Extract and return longest palindrome
    start ← (center - max_len) / 2
    return S[start..start + max_len - 1]

# Example:
# Input: S = "babad"
# 
# Step 1: T = "#b#a#b#a#d#"
# Step 2: P = [0, 1, 0, 3, 0, 1, 0, 1, 0, 1, 0]
# Step 3: max_len = 3, center = 4
# 
# Output: "bab"`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transform string to handle even-length palindromes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize arrays and boundaries</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Expand around each center and update boundaries</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find and return longest palindrome</span>
      </div>
    </div>
  </div>
);
