import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const StackImplementationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Stack Implementation
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: LIFO data structure
    </div>

    <PseudocodeDisplay
      code={`STACK-EMPTY(S)
    if S.top = 0
        then return true
        else return false

PUSH(S, x)
    if S.top = S.size
        then error "stack overflow"
    S.top ← S.top + 1
    S[S.top] ← x

POP(S)
    if STACK-EMPTY(S)
        then error "stack underflow"
    S.top ← S.top - 1
    return S[S.top + 1]

// Example:
// Input: Operations [PUSH(10), PUSH(20), POP(), PUSH(30), PUSH(40)]
//
// Initial state:
//   S = []
//   S.top = 0
//
// After PUSH(10):
//   S = [10]
//   S.top = 1
//
// After PUSH(20):
//   S = [10, 20]
//   S.top = 2
//
// After POP():
//   S = [10]
//   S.top = 1
//   Returns: 20
//
// After PUSH(30):
//   S = [10, 30]
//   S.top = 2
//
// After PUSH(40):
//   S = [10, 30, 40]
//   S.top = 3
//
// Final state:
//   S = [10, 30, 40]
//   S.top = 3`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create array and top pointer</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Push: Add element and increment top pointer</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Pop: Remove element and decrement top pointer</span>
      </div>
    </div>
  </div>
);
