import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const circularLinkedListPattern: AlgorithmPattern = {
  title: "Circular Linked List Implementation",
  description:
    "Implementation of a linked list where the last element points back to the first element, forming a circle.",
  timeComplexity: "Access: O(n), Insert/Delete at known position: O(1)",
  spaceComplexity: "O(n) for n elements",
  pseudocode: `Circular Linked List operations:\n1. append(element):\n   - Add element and point to head\n2. prepend(element):\n   - Add element and update last->next\n3. delete(element):\n   - Remove and maintain circle\n4. insert(element, position):\n   - Insert and maintain circle\n5. traverse():
   - Visit each node once`,
  example: `list = CircularLinkedList()
list.append(1)    # 1->1
list.append(2)    # 1->2->1
list.prepend(0)   # 0->1->2->0
list.delete(1)    # 0->2->0
list.insert(1, 1) # 0->1->2->0`,
  implementation: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
            return
        
        current = self.head
        while current.next != self.head:
        current = current.next
        current.next = new_node
        new_node.next = self.head
    
    def prepend(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
            return
        
        current = self.head
        while current.next != self.head:
            current = current.next
        new_node.next = self.head
        current.next = new_node
        self.head = new_node
    
    def delete(self, data):
        if not self.head:
            return
        
        if self.head.data == data:
            if self.head.next == self.head:
                self.head = None
                return
            current = self.head
            while current.next != self.head:
                current = current.next
            current.next = self.head.next
            self.head = self.head.next
            return
        
        current = self.head
        while current.next != self.head:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next
    
    def traverse(self):
        if not self.head:
            return
        
        current = self.head
        while True:
            print(current.data)
            current = current.next
            if current == self.head:
                break`,
  category: "Data Structures",
};
