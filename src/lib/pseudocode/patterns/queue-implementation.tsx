import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const QueueImplementationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Queue Implementation
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: FIFO data structure
    </div>

    <PseudocodeDisplay
      code={`QUEUE-EMPTY(Q)
    if Q.head = Q.tail
        then return true
        else return false

QUEUE-FULL(Q)
    if Q.head = Q.tail + 1 or (Q.head = 1 and Q.tail = Q.size)
        then return true
        else return false

ENQUEUE(Q, x)
    if QUEUE-FULL(Q)
        then error "queue overflow"
    Q[Q.tail] ← x
    if Q.tail = Q.size
        then Q.tail ← 1
        else Q.tail ← Q.tail + 1

DEQUEUE(Q)
    if QUEUE-EMPTY(Q)
        then error "queue underflow"
    x ← Q[Q.head]
    if Q.head = Q.size
        then Q.head ← 1
        else Q.head ← Q.head + 1
    return x

// Example:
// Input: Operations [ENQUEUE(10), ENQUEUE(20), DEQUEUE(), ENQUEUE(30), ENQUEUE(40)]
//
// Initial state:
//   Q = []
//   Q.head = 1
//   Q.tail = 1
//
// After ENQUEUE(10):
//   Q = [10]
//   Q.head = 1
//   Q.tail = 2
//
// After ENQUEUE(20):
//   Q = [10, 20]
//   Q.head = 1
//   Q.tail = 3
//
// After DEQUEUE():
//   Q = [20]
//   Q.head = 2
//   Q.tail = 3
//   Returns: 10
//
// After ENQUEUE(30):
//   Q = [20, 30]
//   Q.head = 2
//   Q.tail = 4
//
// After ENQUEUE(40):
//   Q = [20, 30, 40]
//   Q.head = 2
//   Q.tail = 5
//
// Final state:
//   Q = [20, 30, 40]
//   Q.head = 2
//   Q.tail = 5`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create array and head/tail pointers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Enqueue: Add element at tail and update pointer</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Dequeue: Remove element from head and update pointer</span>
      </div>
    </div>
  </div>
);
