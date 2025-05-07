import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const PalindromePartitioningPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Palindrome Partitioning
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n * 2^n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Finding all possible palindrome
      partitions
    </div>

    <PseudocodeDisplay
      code={`// Check if string is palindrome
IS-PALINDROME(s, start, end):
  while start < end:
    if s[start] != s[end]:
      return false
    start += 1
    end -= 1
  return true

// Main partitioning function
PALINDROME-PARTITION(s):
  result = []
  current = []
  
  function BACKTRACK(start):
    if start == len(s):
      result.append(current.copy())
      return
    
    for end in range(start, len(s)):
      if IS-PALINDROME(s, start, end):
        current.append(s[start:end+1])
        BACKTRACK(end + 1)
        current.pop()
  
  BACKTRACK(0)
  return result`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Verify if substring is palindrome
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Partition:</span> Try all possible partitions
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Backtrack:</span> Build valid partitions
        recursively
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: "aab"</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: "aab"
Output: [["a","a","b"], ["aa","b"]]

Step 1: Check "a" (palindrome)
  - Add to current: ["a"]
  - Recurse on "ab"

Step 2: Check "a" in "ab" (palindrome)
  - Add to current: ["a","a"]
  - Recurse on "b"

Step 3: Check "b" (palindrome)
  - Add to current: ["a","a","b"]
  - Add to result

Step 4: Backtrack and try "aa"
  - Add to current: ["aa"]
  - Recurse on "b"
  - Add to result: ["aa","b"]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Uses backtracking to explore all possible partitions</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Can be optimized with dynamic programming for minimum cuts</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Useful for string manipulation and text analysis</span>
        </div>
      </div>
    </div>
  </div>
);
