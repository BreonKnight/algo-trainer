import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const floydCycleDetectionPattern: AlgorithmPattern = {
  title: "Floyd Cycle Detection",
  category: "Graph",
  description:
    "An algorithm to detect cycles in a linked list using two pointers moving at different speeds.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  pseudocode: `
Floyd's Cycle Detection Algorithm:
1. Initialize two pointers, slow and fast, to the head of the list
2. Move slow pointer one step and fast pointer two steps at a time
3. If fast pointer reaches the end (null), there is no cycle
4. If slow and fast pointers meet, there is a cycle
`,
  example: `Linked List: 1->2->3->4->5->3 (cycle at node 3)

Step 1: slow=1, fast=1
Step 2: slow=2, fast=3
Step 3: slow=3, fast=5
Step 4: slow=4, fast=3
Step 5: slow=5, fast=5 (meet - cycle detected)`,
  implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    if not head or not head.next:
        return False
    slow = head
    fast = head.next
    while fast and fast.next:
        if slow == fast:
            return True
        slow = slow.next
        fast = fast.next.next
    return False`,
  keySteps: [
    "Initialize two pointers at the head of the list",
    "Move pointers at different speeds",
    "Check for meeting point",
    "Return true if cycle detected, false otherwise",
  ],
};
