import { ChevronRight } from "lucide-react";

export const KadanesAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Kadane's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">
        (Optimization Algorithm)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding maximum
      subarray sum
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Find maximum sum of any contiguous subarray
KADANE(array):
    # Initialize maximum values
    current_sum = array[1]
    max_sum = array[1]
    
    # Process each element
    for i from 2 to length of array:
        # Choose between starting new subarray or continuing current
        current_sum = max(array[i], current_sum + array[i])
        # Update maximum sum if needed
        max_sum = max(max_sum, current_sum)
    
    return max_sum`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set
        current and maximum sums
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Consider
        each element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Choose:</span> Start new or
        continue current subarray
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Track maximum
        sum found
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Maximum Subarray Sum
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Step 1: current = -2, max = -2
Step 2: current = 1, max = 1
Step 3: current = -2, max = 1
Step 4: current = 4, max = 4
Step 5: current = 3, max = 4
Step 6: current = 5, max = 5
Step 7: current = 6, max = 6
Step 8: current = 1, max = 6
Step 9: current = 5, max = 6

Maximum subarray sum: 6
Subarray: [4, -1, 2, 1]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: All Positive Numbers
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [1, 2, 3, 4, 5]

Step 1: current = 1, max = 1
Step 2: current = 3, max = 3
Step 3: current = 6, max = 6
Step 4: current = 10, max = 10
Step 5: current = 15, max = 15

Maximum subarray sum: 15
Subarray: [1, 2, 3, 4, 5]`}
      </pre>
    </div>
  </div>
);
