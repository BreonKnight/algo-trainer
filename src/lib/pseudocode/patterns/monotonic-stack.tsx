import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MonotonicStackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Monotonic Stack</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Next
      greater/smaller element
    </div>

    <PseudocodeDisplay code={`// Next greater element
NEXT-GREATER-ELEMENT(A):
    n ← length[A]
    S ← empty stack
    result[1..n] ← -1
    for i ← 1 to n:
        while S not empty and A[TOP(S)] < A[i]:
            result[POP(S)] ← A[i]
        PUSH(S, i)
    return result

// Next smaller element
NEXT-SMALLER-ELEMENT(A):
    n ← length[A]
    S ← empty stack
    result[1..n] ← -1
    for i ← 1 to n:
        while S not empty and A[TOP(S)] > A[i]:
            result[POP(S)] ← A[i]
        PUSH(S, i)
    return result

// Previous greater element
PREVIOUS-GREATER-ELEMENT(A):
    n ← length[A]
    S ← empty stack
    result[1..n] ← -1
    for i ← n downto 1:
        while S not empty and A[TOP(S)] < A[i]:
            result[POP(S)] ← A[i]
        PUSH(S, i)
    return result

// Previous smaller element
PREVIOUS-SMALLER-ELEMENT(A):
    n ← length[A]
    S ← empty stack
    result[1..n] ← -1
    for i ← n downto 1:
        while S not empty and A[TOP(S)] > A[i]:
            result[POP(S)] ← A[i]
        PUSH(S, i)
    return result

// Example:
// Input: A = [4, 5, 2, 10, 8]
//
// NEXT-GREATER-ELEMENT(A):
//   i = 1: S = [1], result = [-1, -1, -1, -1, -1]
//   i = 2: S = [2], result = [5, -1, -1, -1, -1]
//   i = 3: S = [2, 3], result = [5, -1, -1, -1, -1]
//   i = 4: S = [4], result = [5, 10, 10, -1, -1]
//   i = 5: S = [4, 5], result = [5, 10, 10, -1, -1]
//   Final result: [5, 10, 10, -1, -1]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create empty stack and result array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Process: Maintain monotonic property while processing elements
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Store results for popped elements</span>
      </div>
    </div>
  </div>
);
