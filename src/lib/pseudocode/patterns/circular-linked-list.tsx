import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const CircularLinkedListPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Circular Linked List
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Circular data structure operations
    </div>

    <PseudocodeDisplay
      code={`// Node structure
NODE(key):
    key ← key
    next ← null

// Insert at beginning
CIRCULAR-INSERT-HEAD(L, x):
    x.next ← x
    if L.head = null:
        L.head ← x
    else:
        x.next ← L.head
        last ← L.head
        while last.next ≠ L.head:
            last ← last.next
        last.next ← x
        L.head ← x

// Insert at end
CIRCULAR-INSERT-TAIL(L, x):
    x.next ← x
    if L.head = null:
        L.head ← x
    else:
        last ← L.head
        while last.next ≠ L.head:
            last ← last.next
        last.next ← x
        x.next ← L.head

// Delete node
CIRCULAR-DELETE(L, x):
    if L.head = null:
        return
    if L.head = x and L.head.next = L.head:
        L.head ← null
        return
    if L.head = x:
        last ← L.head
        while last.next ≠ L.head:
            last ← last.next
        L.head ← L.head.next
        last.next ← L.head
        return
    prev ← L.head
    while prev.next ≠ L.head and prev.next ≠ x:
        prev ← prev.next
    if prev.next = x:
        prev.next ← prev.next.next

// Traverse list
CIRCULAR-TRAVERSE(L):
    if L.head = null:
        return
    current ← L.head
    repeat:
        print(current.key)
        current ← current.next
    until current = L.head

// Example:
// Input: Operations [INSERT-HEAD(1), INSERT-TAIL(2), INSERT-HEAD(3), DELETE(1)]
//
// After INSERT-HEAD(1):
//   1 -> 1
//
// After INSERT-TAIL(2):
//   1 -> 2 -> 1
//
// After INSERT-HEAD(3):
//   3 -> 1 -> 2 -> 3
//
// After DELETE(1):
//   3 -> 2 -> 3`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Add node while maintaining circular structure</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Delete: Remove node and update circular links</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Traverse: Visit all nodes in circular order</span>
      </div>
    </div>
  </div>
);
