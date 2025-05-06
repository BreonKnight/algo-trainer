import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TwoPointerPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Two Pointer
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Array/string manipulation with two
      indices
    </div>

    <PseudocodeDisplay
      code={`// Two pointer technique
TWO-POINTER-SUM(A, target):
  left = 0
  right = len(A) - 1
  
  while left < right:
    sum = A[left] + A[right]
    if sum == target:
      return [left, right]
    elif sum < target:
      left += 1
    else:
      right -= 1
  return [-1, -1]

// Example usage
A = [1, 2, 3, 4, 5, 6]
target = 9
result = TWO-POINTER-SUM(A, target)
// Returns: [3, 4] (indices of 4 and 5)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Two pointers at array ends
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Move:</span> Adjust pointers based on comparison
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Terminate:</span> When pointers meet or target
        found
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: [1, 2, 3, 4, 5, 6]</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Target: 9

Step 1: left=0, right=5
  1 + 6 = 7 < 9
  Move left++

Step 2: left=1, right=5
  2 + 6 = 8 < 9
  Move left++

Step 3: left=2, right=5
  3 + 6 = 9 = target
  Found! Return [2,5]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Finding pairs that sum to a target value</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Reversing arrays or strings</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Finding palindromes</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Merging sorted arrays</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Finding the middle of a linked list</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Detecting cycles in linked lists</span>
        </div>
      </div>
    </div>
  </div>
);
