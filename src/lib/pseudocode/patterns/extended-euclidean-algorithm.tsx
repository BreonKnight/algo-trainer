import { ChevronRight } from "lucide-react";

export const ExtendedEuclideanAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Extended Euclidean Algorithm
      </span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log min(a,b)) &nbsp;|&nbsp; Space: O(log min(a,b)) &nbsp;|&nbsp;
      Use: Find GCD and Bézout coefficients
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`EXTENDED-EUCLID(a, b)
    if b = 0
        then return (a, 1, 0)
    let (d', x', y') ← EXTENDED-EUCLID(b, a mod b)
    let d ← d'
    let x ← y'
    let y ← x' - ⌊a/b⌋ · y'
    return (d, x, y)

// Example:
// Input: a = 30, b = 18
// 
// First call: a = 30, b = 18
//   a mod b = 12
//   Recursive call: a = 18, b = 12
// 
// Second call: a = 18, b = 12
//   a mod b = 6
//   Recursive call: a = 12, b = 6
// 
// Third call: a = 12, b = 6
//   a mod b = 0
//   Base case: return (6, 1, 0)
// 
// Back to second call:
//   d = 6, x = 0, y = 1 - ⌊18/12⌋·0 = 1
//   return (6, 0, 1)
// 
// Back to first call:
//   d = 6, x = 1, y = 0 - ⌊30/18⌋·1 = -1
//   return (6, 1, -1)
// 
// Output: (6, 1, -1)
// 
// Verification:
// 6 = 30·1 + 18·(-1)`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Base Case: Return GCD and coefficients when b = 0</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recursion: Compute GCD and coefficients for smaller numbers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Calculate new coefficients using previous results</span>
      </div>
    </div>
  </div>
);
