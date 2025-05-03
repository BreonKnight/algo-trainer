import { AlgorithmPattern } from "../../types";

export const floydCycleDetectionPattern: AlgorithmPattern = {
  title: "Floyd's Cycle Detection Algorithm",
  description:
    "Also known as the 'tortoise and hare' algorithm, used to detect cycles in a linked list or array, and find the start of the cycle.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  category: "Graph",
  pseudocode: `
Floyd's Algorithm steps:
1. Initialize slow and fast pointers to head
2. Move slow one step, fast two steps
3. If they meet, cycle exists
4. To find cycle start:
   a. Reset slow to head
   b. Move both one step until they meet
   c. Meeting point is cycle start
`,
  example: `Linked List: 1->2->3->4->5->3
(5 points back to 3)

Detection:
Step 1: s=1, f=1
Step 2: s=2, f=3
Step 3: s=3, f=5
Step 4: s=4, f=3
Step 5: s=5, f=5 (meet)

Find start:
Step 1: s=1, f=5
Step 2: s=2, f=3
Step 3: s=3, f=3 (cycle start)`,
  implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def detect_cycle(head):
    if not head or not head.next:
        return None
    
    # Phase 1: Detect cycle
    slow = fast = head
    has_cycle = False
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    
    if not has_cycle:
        return None
    
    # Phase 2: Find cycle start
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    
    return slow

def find_cycle_length(head):
    if not head or not head.next:
        return 0
    
    slow = fast = head
    has_cycle = False
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    
    if not has_cycle:
        return 0
    
    # Count cycle length
    length = 1
    fast = fast.next
    while fast != slow:
        length += 1
        fast = fast.next
    
    return length`,
};
