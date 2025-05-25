import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const fastAndSlowPointersPattern: AlgorithmPattern = {
  title: "Fast and Slow Pointers",
  description:
    "A technique using two pointers moving at different speeds to detect cycles or find middle elements.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  pseudocode: `
function hasCycle(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

function findMiddle(head) {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
  `,
  example: `# Example usage:
list = LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.head.next.next.next.next.next = list.head.next  # Create a cycle
print(has_cycle(list.head))  # True
print(find_middle(list.head).data)  # 3`,
  implementation: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

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
    return False

def find_middle(head):
    if not head:
        return None
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,
  category: "data-structures",
};
