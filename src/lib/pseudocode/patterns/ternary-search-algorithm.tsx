import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TernarySearchAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Ternary Search
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(log₃ n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find maximum/minimum in unimodal
      function
    </div>

    <PseudocodeDisplay
      code={`# Ternary Search: Find maximum/minimum in unimodal function
# Input: Array A[1..n], target value t
# Output: Index of target value, or -1 if not found

Algorithm TERNARY-SEARCH(A, t)
    left ← 1
    right ← length[A]

    while left ≤ right do
        # Divide range into three parts
        mid1 ← left + (right - left) / 3
        mid2 ← right - (right - left) / 3

        if A[mid1] = t then
            return mid1
        else if A[mid2] = t then
            return mid2
        else if t < A[mid1] then
            right ← mid1 - 1
        else if t > A[mid2] then
            left ← mid2 + 1
        else
            left ← mid1 + 1
            right ← mid2 - 1
        end if
    end while

    return -1

# Example:
# Input: A = [1, 2, 3, 4, 5, 6, 7, 8, 9], t = 5
#
# Step 1: left = 1, right = 9, mid1 = 4, mid2 = 6
#         A[4] = 4 < 5, A[6] = 6 > 5
# Step 2: left = 5, right = 5, mid1 = 5, mid2 = 5
#         A[5] = 5 = t
#
# Output: 5`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set left and right boundaries
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Divide:</span> Range into three parts
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Target with mid points
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Search range based on comparison
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Finding Maximum</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Unimodal function: f(x) = -(x-5)² + 10
Search range: [0, 10]

Step 1: mid1 = 3.33, mid2 = 6.67
        f(3.33) = 2.22, f(6.67) = 2.22
        f(3.33) < f(6.67) → search [3.33, 10]

Step 2: mid1 = 5.56, mid2 = 8.89
        f(5.56) = 9.69, f(8.89) = -14.69
        f(5.56) > f(8.89) → search [3.33, 8.89]

Step 3: mid1 = 4.44, mid2 = 7.78
        f(4.44) = 9.69, f(7.78) = -7.69
        f(4.44) > f(7.78) → search [3.33, 7.78]

Maximum found at x = 5`}
      </pre>
    </div>
  </div>
);
