import { ChevronRight } from "lucide-react";

export const BalancedPseudocodeTemplate = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Algorithm Name</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Brief description
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Algorithm description and purpose
# Input: array A[1..n], target value x
# Output: index of x in A, or -1 if not found

ALGORITHM-NAME(A, x)
    # Initialize variables with descriptive names
    left ← 1
    right ← length[A]
    
    # Main loop with clear termination condition
    while left ≤ right do
        # Calculate midpoint to avoid overflow
        mid ← left + ⌊(right - left)/2⌋
        
        # Compare with target using readable conditions
        if A[mid] = x then
            return mid    # Found target
        else if A[mid] < x then
            left ← mid + 1    # Search right half
        else
            right ← mid - 1   # Search left half
        end if
    end while
    
    return -1    # Target not found

# Example:
# Input: A = [2, 3, 4, 10, 40], x = 10
# Step 1: mid = 2, A[2] = 3 < x, search right
# Step 2: mid = 4, A[4] = 10 = x, return 4
# Output: 4`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set up variables with meaningful names</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Clear loop conditions and operations</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: Well-documented result or error case</span>
      </div>
    </div>
  </div>
);
