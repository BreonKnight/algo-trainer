import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const SlidingWindowPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Sliding Window
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>A technique for efficiently processing arrays by maintaining a window of elements</p>
      <p>Time: O(n) where n is the array length</p>
      <p>Space: O(1) for fixed-size window problems</p>
      <p>
        Use: Finding subarrays with specific properties, string pattern matching, array optimization
      </p>
    </div>
    <div className="mt-4 w-full">
      <PseudocodeDisplay
        code={`# Sliding Window: Find subarrays with specific properties
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
      />
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Initialize window sum and maximum sum variables</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Compute sum of the first window of size k</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Slide window by adding new element and removing oldest</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Update maximum sum when a larger sum is found</span>
        </div>
      </div>
    </div>
  </div>
);
