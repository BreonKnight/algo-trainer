import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const FloydCycleDetectionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Floyd Cycle Detection</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Detect cycles in linked lists
    </div>

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

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set slow and fast pointers to head</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Detect: Move pointers at different speeds until they meet</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Reset slow pointer and move both at same speed</span>
      </div>
    </div>
  </div>
);
