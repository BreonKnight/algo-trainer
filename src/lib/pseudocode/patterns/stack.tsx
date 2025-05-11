import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const StackPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Stack
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>A linear data structure that follows Last-In-First-Out (LIFO) principle</p>
      <p>Time: O(1) for push, pop, and peek operations</p>
      <p>Space: O(n) for storing n elements</p>
      <p>Use: Function call stack, expression evaluation, backtracking algorithms</p>
    </div>
    <div className="mt-4 w-full">
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
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Operations:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>PUSH: Add element to top of stack in O(1) time</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>POP: Remove and return top element in O(1) time</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>STACK-EMPTY: Check if stack is empty in O(1) time</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>PEEK: View top element without removal in O(1) time</span>
        </div>
      </div>
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Example:</h3>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
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
