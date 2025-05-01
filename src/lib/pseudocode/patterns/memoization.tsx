import { ChevronRight } from "lucide-react";

export const MemoizationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Memoization</span>
      <span className="ml-2 text-xs text-secondary">(Dynamic Programming)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Store computed
      results to avoid redundant calculations
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Memoization: Store computed results to avoid redundant calculations
# Input: Function f with parameters, memoization table
# Output: Result of function with parameters

Algorithm MEMOIZED-FIBONACCI(n)
    # Initialize memoization table
    memo ← array of size n + 1
    for i ← 0 to n do
        memo[i] ← -1
    end for
    
    # Helper function with memoization
    function FIB(n)
        if n ≤ 1 then
            return n
        end if
        
        if memo[n] ≠ -1 then
            return memo[n]
        end if
        
        memo[n] ← FIB(n - 1) + FIB(n - 2)
        return memo[n]
    end function
    
    return FIB(n)

# Example:
# Input: n = 5
# 
# Step 1: memo = [-1, -1, -1, -1, -1, -1]
# Step 2: FIB(5)
#         FIB(4) + FIB(3)
#         (FIB(3) + FIB(2)) + (FIB(2) + FIB(1))
#         ((FIB(2) + FIB(1)) + (FIB(1) + FIB(0))) + ((FIB(1) + FIB(0)) + 1)
#         (((FIB(1) + FIB(0)) + 1) + (1 + 0)) + ((1 + 0) + 1)
#         (((1 + 0) + 1) + (1 + 0)) + ((1 + 0) + 1)
#         memo = [0, 1, 1, 2, 3, 5]
# 
# Output: 5`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize memoization table</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check if result exists in table</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute and store result if not found</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return stored result</span>
      </div>
    </div>
  </div>
);
