import { ChevronRight } from "lucide-react";

export const SlidingWindowPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Sliding Window</span>
      <span className="ml-2 text-xs text-secondary">(Search Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding subarrays
      with specific properties
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Find maximum sum of subarray of size k
SLIDING-WINDOW(array, k):
    # Initialize window sum and maximum
    window_sum = 0
    max_sum = -∞
    
    # Calculate initial window sum
    for i from 1 to k:
        window_sum = window_sum + array[i]
    
    # Set initial maximum
    max_sum = window_sum
    
    # Slide window through array
    for i from k + 1 to length of array:
        # Add new element, remove old element
        window_sum = window_sum + array[i] - array[i - k]
        # Update maximum if needed
        max_sum = max(max_sum, window_sum)
    
    return max_sum`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up
        window and sum
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Calculate:</span> Compute
        initial window sum
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Slide:</span> Move window
        one step at a time
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Track maximum
        sum
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Maximum sum of size 3
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [2, 1, 5, 1, 3, 2]

Step 1: Initial window [2, 1, 5]
sum = 8, max = 8

Step 2: Slide window [1, 5, 1]
sum = 7, max = 8

Step 3: Slide window [5, 1, 3]
sum = 9, max = 9

Step 4: Slide window [1, 3, 2]
sum = 6, max = 9

Final result: Maximum sum = 9`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Window visualization
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [2, 1, 5, 1, 3, 2]

Window positions:
[2, 1, 5], 1, 3, 2    sum = 8
2, [1, 5, 1], 3, 2    sum = 7
2, 1, [5, 1, 3], 2    sum = 9
2, 1, 5, [1, 3, 2]    sum = 6`}
      </pre>
    </div>
  </div>
);
