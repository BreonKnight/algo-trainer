import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const StackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Stack</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: LIFO (Last-In-First-Out) operations
    </div>

    <PseudocodeDisplay
      code={`# Stack: LIFO (Last-In-First-Out) data structure
# Input: Elements to be pushed onto stack
# Output: Elements popped from stack in reverse order

Algorithm STACK-OPERATIONS
    # Initialize empty stack
    S ← empty array
    top ← 0

    # Push element x onto stack
    Algorithm PUSH(S, x)
        top ← top + 1
        S[top] ← x

    # Pop element from stack
    Algorithm POP(S)
        if top = 0 then
            return "underflow"
        end if
        x ← S[top]
        top ← top - 1
        return x

    # Check if stack is empty
    Algorithm STACK-EMPTY(S)
        if top = 0 then
            return true
        else
            return false
        end if

    # Peek at top element
    Algorithm PEEK(S)
        if top = 0 then
            return "empty"
        end if
        return S[top]

# Example:
# Input: Push sequence [1, 2, 3]
#
# Step 1: PUSH(S, 1)
#         S = [1], top = 1
# Step 2: PUSH(S, 2)
#         S = [1, 2], top = 2
# Step 3: PUSH(S, 3)
#         S = [1, 2, 3], top = 3
# Step 4: POP(S)
#         Returns 3, S = [1, 2], top = 2
# Step 5: PEEK(S)
#         Returns 2
#
# Output: Elements popped in order [3, 2, 1]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Operations:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>PUSH: Add element to top of stack</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>POP: Remove and return top element</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>STACK-EMPTY: Check if stack is empty</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>PEEK: View top element without removal</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Operations:
PUSH(1) → S = [1]
PUSH(2) → S = [1, 2]
PUSH(3) → S = [1, 2, 3]
POP() → Returns 3, S = [1, 2]
PEEK() → Returns 2
POP() → Returns 2, S = [1]
POP() → Returns 1, S = []`}
      </pre>
    </div>
  </div>
);
