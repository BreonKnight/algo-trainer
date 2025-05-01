import { ChevronRight } from "lucide-react";

export const BinarySearchOnAnswerPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Binary Search on Answer</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log m) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find optimal
      value in search space
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Binary search on answer with predicate function
BINARY-SEARCH-ANSWER(low, high, predicate):
    while low < high:
        mid ← ⌊(low + high) / 2⌋
        if predicate(mid):
            high ← mid
        else:
            low ← mid + 1
    return low

// Example: Find minimum capacity to ship packages within D days
SHIP-PACKAGES(weights, D):
    n ← length[weights]
    low ← max(weights)
    high ← sum(weights)
    predicate ← λ(capacity):
        days ← 1
        current ← 0
        for i ← 1 to n:
            if current + weights[i] > capacity:
                days ← days + 1
                current ← weights[i]
            else:
                current ← current + weights[i]
        return days ≤ D
    return BINARY-SEARCH-ANSWER(low, high, predicate)

// Example:
// Input: weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D = 5
// 
// Execution:
// 1. low = 10, high = 55
// 2. mid = 32: days = 3 ≤ 5
// 3. mid = 21: days = 4 ≤ 5
// 4. mid = 15: days = 5 ≤ 5
// 5. mid = 12: days = 6 > 5
// 6. mid = 13: days = 6 > 5
// 7. mid = 14: days = 5 ≤ 5
// 
// Output: 15`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set search space boundaries</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search: Binary search with predicate function</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Verify: Check if solution meets requirements</span>
      </div>
    </div>
  </div>
);
