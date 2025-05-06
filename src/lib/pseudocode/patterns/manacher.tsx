import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const ManacherPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Manacher's Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Finding longest palindromic substring
    </div>

    <PseudocodeDisplay
      code={`MANACHER(S):
    // Transform string to handle even-length palindromes
    T ← "#" + JOIN(S, "#") + "#"
    n ← length(T)
    P[1..n] ← 0
    C ← 1    // center of current palindrome
    R ← 1    // right boundary of current palindrome
    
    for i ← 2 to n-1:
        // Mirror position
        i_mirror ← 2C - i
        
        if i < R:
            P[i] ← min(R - i, P[i_mirror])
        
        // Expand palindrome centered at i
        while T[i + P[i] + 1] = T[i - P[i] - 1]:
            P[i] ← P[i] + 1
        
        // Update center and right boundary if needed
        if i + P[i] > R:
            C ← i
            R ← i + P[i]
    
    // Find maximum palindrome
    max_len ← 0
    center ← 0
    for i ← 1 to n:
        if P[i] > max_len:
            max_len ← P[i]
            center ← i
    
    // Extract palindrome from original string
    start ← (center - max_len) div 2
    return S[start..start + max_len - 1]

// Example:
// Input: S = "babad"
//
// Transformed string T:
// #b#a#b#a#d#
//
// P array:
// [0,1,0,3,0,1,0,1,0]
//
// Longest palindrome: "bab" or "aba"`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Linear time algorithm for finding longest palindrome</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses palindrome mirroring property for optimization</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handles both odd and even length palindromes</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(n) - each position is expanded at most once</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(n) - for transformed string and P array</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>More efficient than O(n²) dynamic programming approach</span>
        </div>
      </div>
    </div>
  </div>
);
