import { PatternComponent } from "@/lib/pseudocode/types";

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
        <p className="mt-2">Time Complexity: O(n)</p>
        <p>Space Complexity: O(1)</p>
      </div>
      <div className="mt-4 w-full">
        <pre className="bg-background/50 p-4 rounded-lg text-sm">
          {`function hasCycle(head):
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
        </pre>
      </div>
    </div>
  );
};

export default FastAndSlowPointersPattern;
