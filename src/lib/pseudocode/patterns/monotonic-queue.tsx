import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const MonotonicQueuePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Monotonic Queue</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(k) &nbsp;|&nbsp; Use: Sliding window maximum/minimum
    </div>

    <PseudocodeDisplay
      code={`SLIDING-WINDOW-MAXIMUM(A, k)
    let n be the length of A
    let result[1‥n-k+1] be a new array
    let Q be a new empty deque

    for i ← 1 to n
        do while Q is not empty and A[Q.back()] ≤ A[i]
            do Q.pop_back()
            Q.push_back(i)
            if Q.front() = i - k
                then Q.pop_front()
            if i ≥ k
                then result[i-k+1] ← A[Q.front()]

    return result

// Example:
// Input: A = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
//
// i = 1: A[1] = 1
//   Q = [1]
//
// i = 2: A[2] = 3
//   Q = [2]
//
// i = 3: A[3] = -1
//   Q = [2,3]
//   result[1] = 3
//
// i = 4: A[4] = -3
//   Q = [2,3,4]
//   result[2] = 3
//
// i = 5: A[5] = 5
//   Q = [5]
//   result[3] = 5
//
// i = 6: A[6] = 3
//   Q = [5,6]
//   result[4] = 5
//
// i = 7: A[7] = 6
//   Q = [7]
//   result[5] = 6
//
// i = 8: A[8] = 7
//   Q = [8]
//   result[6] = 7
//
// Output: [3, 3, 5, 5, 6, 7]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create result array and empty deque</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Maintain monotonic deque while sliding window</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Remove elements outside window and smaller values</span>
      </div>
    </div>
  </div>
);
