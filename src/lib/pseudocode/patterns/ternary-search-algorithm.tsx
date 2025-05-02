import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TernarySearchAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Ternary Search</span>
      <span className="ml-2 text-xs text-secondary">(Array)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log₃ n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find
      maximum/minimum in unimodal function
    </div>

    <PseudocodeDisplay code={`# Ternary Search: Find maximum/minimum in unimodal function
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
# Output: 5`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize left and right pointers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Divide range into three parts</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compare target with mid points</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update search range based on comparison</span>
      </div>
    </div>
  </div>
);
