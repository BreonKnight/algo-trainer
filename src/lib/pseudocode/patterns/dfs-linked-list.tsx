import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const DfsLinkedListPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">DFS on Linked List</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Traverse linked
      list depth-first
    </div>

    <PseudocodeDisplay code={`// Node structure for linked list
NODE:
    key
    next
    visited

// DFS on linked list
DFS-LINKED-LIST(head):
    if head = NIL:
        return
    
    // Mark current node as visited
    head.visited ← true
    process head.key
    
    // Recursively visit next node if not visited
    if head.next ≠ NIL and not head.next.visited:
        DFS-LINKED-LIST(head.next)

// Example:
// Input: 1 → 2 → 3 → 4 → 5
// 
// Execution:
// 1. Visit 1, visited = {1}
// 2. Visit 2, visited = {1,2}
// 3. Visit 3, visited = {1,2,3}
// 4. Visit 4, visited = {1,2,3,4}
// 5. Visit 5, visited = {1,2,3,4,5}
// 
// Output: 1, 2, 3, 4, 5`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Visit: Process current node</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Mark: Node as visited</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recurse: Visit next unvisited node</span>
      </div>
    </div>
  </div>
);
