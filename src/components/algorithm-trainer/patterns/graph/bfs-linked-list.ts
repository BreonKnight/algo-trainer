import { AlgorithmPattern } from "../../types";

export const bfs_linked_listPattern: AlgorithmPattern = {
  title: "BFS on Linked List",
  description:
    "Application of BFS pattern to process a linked list level by level, useful for operations like finding the middle node or detecting cycles.",
  timeComplexity: "O(n)",
  category: "Graph Algorithms",
  spaceComplexity: "O(1) as we process one node at a time",
  pseudocode: `1. Initialize slow and fast pointers\n2. While fast pointer valid:\n   a. Move slow one step\n   b. Move fast two steps\n3. Slow pointer at middle/cycle start`,
  example: `List: 1->2->3->4->5->null

Find middle:
Step 1: s=1, f=1
Step 2: s=2, f=3
Step 3: s=3, f=5
Middle: 3`,
  implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_middle(head):
    if not head or not head.next:
        return head
    
    slow = fast = head
    
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow

def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False`,
};
