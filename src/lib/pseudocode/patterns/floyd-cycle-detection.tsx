import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const FloydCycleDetectionPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Floyd Cycle Detection
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>
        A technique to detect cycles in linked lists using two pointers moving at different speeds
      </p>
      <p>Time: O(n) where n is the number of nodes</p>
      <p>Space: O(1) using only two pointers</p>
      <p>Use: Detect cycles in linked lists, find cycle start node</p>
    </div>
    <div className="mt-4 w-full">
      <PseudocodeDisplay
        code={`FLOYD-CYCLE-DETECTION(head)
    let slow ← head
    let fast ← head

    while fast ≠ null and fast.next ≠ null
        do slow ← slow.next
           fast ← fast.next.next
           if slow = fast
               then return true

    return false

FIND-CYCLE-START(head)
    let slow ← head
    let fast ← head

    while fast ≠ null and fast.next ≠ null
        do slow ← slow.next
           fast ← fast.next.next
           if slow = fast
               then break

    if fast = null or fast.next = null
        then return null

    slow ← head
    while slow ≠ fast
        do slow ← slow.next
           fast ← fast.next

    return slow

// Example:
// Input: 1 → 2 → 3 → 4 → 5 → 3 (cycle back to 3)
//
// Initial state:
//   slow = 1, fast = 1
//
// First iteration:
//   slow = 2, fast = 3
//
// Second iteration:
//   slow = 3, fast = 5
//
// Third iteration:
//   slow = 4, fast = 3
//
// Fourth iteration:
//   slow = 5, fast = 5 (cycle detected)
//
// Finding cycle start:
//   slow = 1, fast = 5
//   slow = 2, fast = 3
//   slow = 3, fast = 3 (cycle start found)
//
// Output: Cycle exists, starts at node 3`}
      />
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Initialize: Set slow and fast pointers to head</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Detect: Move pointers at different speeds until they meet</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Find: Reset slow pointer and move both at same speed</span>
        </div>
      </div>
    </div>
  </div>
);
