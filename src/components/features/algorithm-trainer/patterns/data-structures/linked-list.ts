import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const linkedListPattern: AlgorithmPattern = {
  title: "Linked List Implementation",
  description:
    "Implementation of a linear data structure where each element points to the next element in the sequence.",
  timeComplexity: "Access: O(n), Insert/Delete at known position: O(1)",
  category: "Data Structures",
  spaceComplexity: "O(n) for n elements",
  pseudocode: `Linked List operations:\n1. append(element):\n   - Add element to end\n2. prepend(element):\n   - Add element to start\n3. delete(element):\n   - Remove first occurrence\n4. insert(element, position):\n   - Insert at specific position\n5. search(element):\n   - Return position of element`,
  example: `list = LinkedList()
list.append(1)    # 1->null
list.append(2)    # 1->2->null
list.prepend(0)   # 0->1->2->null
list.delete(1)    # 0->2->null
list.insert(1, 1) # 0->1->2->null`,
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
    
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        
    def delete(self, data):
        if not self.head:
            return
        
        if self.head.data == data:
            self.head = self.head.next
            return
        
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next
    
    def insert(self, data, position):
        if position == 0:
            self.prepend(data)
            return
        
        new_node = Node(data)
        current = self.head
        for i in range(position - 1):
            if not current:
                return
            current = current.next
        
        if current:
            new_node.next = current.next
            current.next = new_node
}
`,
};
