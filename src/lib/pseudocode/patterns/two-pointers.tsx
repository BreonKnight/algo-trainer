import { ChevronRight } from "lucide-react";

export const TwoPointersPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Two Pointers</span>
      <span className="ml-2 text-xs text-secondary">(Search Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding pairs in
      sorted arrays
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Find pair of elements that sum to target
TWO-POINTERS(array, target):
    # Initialize pointers at both ends
    left = 1
    right = length of array
    
    # Continue while pointers haven't crossed
    while left < right:
        # Calculate current sum
        current_sum = array[left] + array[right]
        
        # Check if target found
        if current_sum == target:
            return (left, right)
        
        # If sum is too small, move left pointer right
        if current_sum < target:
            left = left + 1
        # If sum is too large, move right pointer left
        else:
            right = right - 1
    
    # No pair found
    return NIL`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set
        pointers at array ends
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Calculate:</span> Sum
        elements at pointers
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Check if
        target sum found
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Adjust:</span> Move pointers
        based on sum
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Finding sum of 9
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [1, 2, 3, 4, 5, 6, 7, 8]

Step 1: left = 1, right = 8
1 + 8 = 9 → Found pair at positions (1, 8)

Search path:
[1, 2, 3, 4, 5, 6, 7, 8]
 ^              ^`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Finding sum of 10
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [1, 2, 3, 4, 5, 6, 7, 8]

Step 1: left = 1, right = 8
1 + 8 = 9 < 10 → move left pointer
[1, 2, 3, 4, 5, 6, 7, 8]
    ^           ^

Step 2: left = 2, right = 8
2 + 8 = 10 → Found pair at positions (2, 8)`}
      </pre>
    </div>
  </div>
);
