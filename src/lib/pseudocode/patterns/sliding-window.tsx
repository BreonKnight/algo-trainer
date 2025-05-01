import { ChevronRight } from "lucide-react";

export const SlidingWindowPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Sliding Window</span>
      <span className="ml-2 text-xs text-secondary">(Array)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find subarrays
      with specific properties
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Sliding Window: Find subarrays with specific properties
# Input: Array A[1..n], window size k
# Output: Maximum sum of any subarray of size k

Algorithm SLIDING-WINDOW(A, k)
    n ← length[A]
    if n < k then
        return -1
    end if
    
    # Compute sum of first window
    window_sum ← 0
    for i ← 1 to k do
        window_sum ← window_sum + A[i]
    end for
    max_sum ← window_sum
    
    # Slide window and update sum
    for i ← k + 1 to n do
        window_sum ← window_sum + A[i] - A[i - k]
        max_sum ← max(max_sum, window_sum)
    end for
    
    return max_sum

# Example:
# Input: A = [1, 4, 2, 10, 2, 3, 1, 0, 20], k = 4
# 
# Step 1: window_sum = 1 + 4 + 2 + 10 = 17
#         max_sum = 17
# Step 2: window_sum = 17 + 2 - 1 = 18
#         max_sum = 18
# Step 3: window_sum = 18 + 3 - 4 = 17
#         max_sum = 18
# Step 4: window_sum = 17 + 1 - 2 = 16
#         max_sum = 18
# Step 5: window_sum = 16 + 0 - 10 = 6
#         max_sum = 18
# Step 6: window_sum = 6 + 20 - 2 = 24
#         max_sum = 24
# 
# Output: 24`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize window sum and maximum sum</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute sum of first window</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Slide window and update sum</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update maximum sum if needed</span>
      </div>
    </div>
  </div>
);
