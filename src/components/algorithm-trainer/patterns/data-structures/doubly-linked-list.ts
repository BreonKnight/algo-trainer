import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

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
  implementation: `class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    deleteAtHead() {
        if (!this.head) return null;
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return data;
    }

    deleteAtTail() {
        if (!this.tail) return null;
        const data = this.tail.data;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.size--;
        return data;
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
    }
}`,
};
