import { ChevronRight } from "lucide-react";

export const TwoSumPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Two Sum</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find indices of
      two numbers that sum to target
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`TWO-SUM(A, target)
    let n be the length of A
    for i ← 1 to n - 1
        do for j ← i + 1 to n
            do if A[i] + A[j] = target
                then return [i, j]
    return NIL

// Example:
// Input: A = [2, 7, 11, 15], target = 9
// 
// i = 1, j = 2: A[1] + A[2] = 2 + 7 = 9
// 
// Output: [1, 2]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set up nested loops for array traversal</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compare: Check if current pair sums to target</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: Indices of elements that sum to target</span>
      </div>
    </div>
  </div>
);
