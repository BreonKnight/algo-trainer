import { PatternComponent } from "@/lib/pseudocode/types";
import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

const FastAndSlowPointersPattern: PatternComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
          Fast and Slow Pointers
        </span>
        <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
        <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
      </div>
      <div className="mt-4 text-sm text-secondary">
        <p>
          A technique using two pointers moving at different speeds to detect cycles or find middle
          elements
        </p>
        <p>Time: O(n)</p>
        <p>Space: O(1)</p>
        <p>
          Use: Detecting cycles in linked lists, finding the middle node, or partitioning arrays
        </p>
      </div>
      <div className="mt-4 w-full">
        <PseudocodeDisplay
          code={`function hasCycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False

function findMiddle(head):
    if not head:
        return None
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow`}
        />
      </div>
      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Initialize two pointers, slow and fast, at the head of the list</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Move slow by one step and fast by two steps in each iteration</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Check for cycle: if slow and fast meet, a cycle exists</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>For finding the middle: when fast reaches the end, slow is at the middle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastAndSlowPointersPattern;
