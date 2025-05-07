import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const BfsLinkedListPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        BFS Linked List
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Traverse linked list level by level
    </div>

    <PseudocodeDisplay
      code={`// Node structure for linked list
NODE:
    key
    next
    visited

// BFS on linked list
BFS-LINKED-LIST(head):
    if head = NIL:
        return

    // Initialize queue and mark head as visited
    Q ← ∅
    ENQUEUE(Q, head)
    head.visited ← true

    while Q ≠ ∅:
        u ← DEQUEUE(Q)
        process u.key

        // Process next node if not visited
        if u.next ≠ NIL and not u.next.visited:
            u.next.visited ← true
            ENQUEUE(Q, u.next)

// Example:
// Input: 1 → 2 → 3 → 4 → 5
//
// Execution:
// 1. Q = [1], visited = {1}
// 2. Q = [2], visited = {1,2}
// 3. Q = [3], visited = {1,2,3}
// 4. Q = [4], visited = {1,2,3,4}
// 5. Q = [5], visited = {1,2,3,4,5}
//
// Output: 1, 2, 3, 4, 5`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Queue and visited set</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Nodes level by level</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Mark: Visited nodes to prevent cycles</span>
      </div>
    </div>
  </div>
);
