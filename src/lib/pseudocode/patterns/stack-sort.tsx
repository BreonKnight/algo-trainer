import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const StackSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Stack Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Sort using stack
      operations
    </div>

    <PseudocodeDisplay code={`// Sort array using stack operations
STACK-SORT(A):
    n ← length[A]
    S ← empty stack
    T ← empty stack
    // Push all elements to first stack
    for i ← 1 to n:
        PUSH(S, A[i])
    // Sort elements using two stacks
    while S not empty:
        temp ← POP(S)
        while T not empty and TOP(T) > temp:
            PUSH(S, POP(T))
        PUSH(T, temp)
    // Transfer sorted elements back to array
    for i ← n downto 1:
        A[i] ← POP(T)
    return A

// Example:
// Input: A = [5, 2, 4, 6, 1, 3]
// 
// Execution:
// 1. Initial push: S = [5, 2, 4, 6, 1, 3], T = []
// 2. After first iteration: S = [5, 2, 4, 6], T = [1, 3]
// 3. After second iteration: S = [5, 2, 4], T = [1, 3, 6]
// 4. After third iteration: S = [5, 2], T = [1, 3, 4, 6]
// 5. After fourth iteration: S = [5], T = [1, 2, 3, 4, 6]
// 6. After fifth iteration: S = [], T = [1, 2, 3, 4, 5, 6]
// 
// Output: [1, 2, 3, 4, 5, 6]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create two empty stacks</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Use second stack to maintain sorted order</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Transfer: Move sorted elements back to array</span>
      </div>
    </div>
  </div>
);
