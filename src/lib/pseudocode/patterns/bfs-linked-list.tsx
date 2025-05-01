import { ChevronRight } from "lucide-react";

export const BfsLinkedListPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">BFS on Linked List</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Traverse linked
      list level by level
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Node structure for linked list
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
      </pre>
    </div>

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
