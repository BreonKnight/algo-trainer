import { ChevronRight } from "lucide-react";

export const StringPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">String Algorithms</span>
      <span className="ml-2 text-xs text-secondary">(Pattern Matching)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n + m) &nbsp;|&nbsp; Space: O(m) &nbsp;|&nbsp; Use: Text
      processing and pattern matching
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Find pattern in text using KMP algorithm
KMP-MATCHER(text, pattern):
    # Compute prefix function for pattern
    prefix = COMPUTE-PREFIX(pattern)
    n = length of text
    m = length of pattern
    q = 0  # Number of characters matched
    
    # Search through text
    for i from 1 to n:
        # While mismatch, use prefix function
        while q > 0 and pattern[q + 1] ≠ text[i]:
            q = prefix[q]
        
        # If characters match
        if pattern[q + 1] == text[i]:
            q = q + 1
        
        # If pattern found
        if q == m:
            print "Pattern found at position" i - m
            q = prefix[q]

// Compute prefix function for pattern
COMPUTE-PREFIX(pattern):
    m = length of pattern
    prefix = new array of size m
    prefix[1] = 0
    k = 0
    
    for q from 2 to m:
        while k > 0 and pattern[k + 1] ≠ pattern[q]:
            k = prefix[k]
        
        if pattern[k + 1] == pattern[q]:
            k = k + 1
        
        prefix[q] = k
    
    return prefix`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Preprocess:</span> Compute
        prefix function
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Match:</span> Search through
        text
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Shift:</span> Use prefix
        function on mismatch
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Report:</span> Print match
        positions
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Pattern Matching
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Text:    A B A B A C A B A B A C A B A B A
Pattern: A B A B A C A B A

Prefix function:
[0, 0, 1, 2, 3, 0, 1, 2, 3]

Matches found at positions: 1, 7`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Prefix Function
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Pattern: A B A B A C A B A

Step 1: prefix[1] = 0
Step 2: prefix[2] = 0
Step 3: prefix[3] = 1 (A matches)
Step 4: prefix[4] = 2 (AB matches)
Step 5: prefix[5] = 3 (ABA matches)
Step 6: prefix[6] = 0 (no match)
Step 7: prefix[7] = 1 (A matches)
Step 8: prefix[8] = 2 (AB matches)
Step 9: prefix[9] = 3 (ABA matches)`}
      </pre>
    </div>
  </div>
);
