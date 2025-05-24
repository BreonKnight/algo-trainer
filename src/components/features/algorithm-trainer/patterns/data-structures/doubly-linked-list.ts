import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const doublyLinkedListPattern: AlgorithmPattern = {
  category: "data-structures",
  title: "Doubly Linked List",
  description:
    "A doubly linked list is a linear data structure where each node contains a data field and two pointers: one pointing to the next node and another pointing to the previous node. This allows for bidirectional traversal of the list.",
  timeComplexity: "O(1) for insertion/deletion at head/tail, O(n) for search",
  spaceComplexity: "O(n)",
  pseudocode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def insert_at_head(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        self.size += 1

    def insert_at_tail(self, data):
        new_node = Node(data)
        if not self.tail:
            self.head = self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        self.size += 1

    def delete_at_head(self):
        if not self.head:
            return None
        data = self.head.data
        self.head = self.head.next
        if self.head:
            self.head.prev = None
        else:
            self.tail = None
        self.size -= 1
        return data

    def delete_at_tail(self):
        if not self.tail:
            return None
        data = self.tail.data
        self.tail = self.tail.prev
        if self.tail:
            self.tail.next = None
        else:
            self.head = None
        self.size -= 1
        return data

    def search(self, data):
        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False`,
  example: `# Create a doubly linked list
dll = DoublyLinkedList()

# Insert elements
dll.insert_at_head(1)
dll.insert_at_tail(2)
dll.insert_at_tail(3)

# Search for an element
print(dll.search(2))  # True
print(dll.search(4))  # False

# Delete elements
print(dll.delete_at_head())  # 1
print(dll.delete_at_tail())  # 3`,
  implementation: `class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n        self.prev = None\n\nclass DoublyLinkedList:\n    def __init__(self):\n        self.head = None\n        self.tail = None\n        self.size = 0\n\n    def insert_at_head(self, data):\n        new_node = Node(data)\n        if not self.head:\n            self.head = self.tail = new_node\n        else:\n            new_node.next = self.head\n            self.head.prev = new_node\n            self.head = new_node\n        self.size += 1\n\n    def insert_at_tail(self, data):\n        new_node = Node(data)\n        if not self.tail:\n            self.head = self.tail = new_node\n        else:\n            new_node.prev = self.tail\n            self.tail.next = new_node\n            self.tail = new_node\n        self.size += 1\n\n    def delete_at_head(self):\n        if not self.head:\n            return None\n        data = self.head.data\n        self.head = self.head.next\n        if self.head:\n            self.head.prev = None\n        else:\n            self.tail = None\n        self.size -= 1\n        return data\n\n    def delete_at_tail(self):\n        if not self.tail:\n            return None\n        data = self.tail.data\n        self.tail = self.tail.prev\n        if self.tail:\n            self.tail.next = None\n        else:\n            self.head = None\n        self.size -= 1\n        return data\n\n    def search(self, data):\n        current = self.head\n        while current:\n            if current.data == data:\n                return True\n            current = current.next\n        return False`,
};
