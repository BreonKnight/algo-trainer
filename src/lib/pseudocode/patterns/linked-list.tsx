import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const LinkedListPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Linked List</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Dynamic data storage with efficient
      insertions/deletions
    </div>

    <PseudocodeDisplay
      code={`// Node structure
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

// Singly Linked List
class LinkedList:
    def __init__(self):
        self.head = None

    # Insert at beginning
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Insert at end
    def insert_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # Delete node
    def delete_node(self, key):
        temp = self.head
        if temp and temp.data == key:
            self.head = temp.next
            return
        while temp and temp.next:
            if temp.next.data == key:
                temp.next = temp.next.next
                return
            temp = temp.next

    # Search node
    def search(self, key):
        current = self.head
        while current:
            if current.data == key:
                return True
            current = current.next
        return False

// Doubly Linked List
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # Insert at beginning
    def insert_at_beginning(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            return
        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node

    # Insert at end
    def insert_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            return
        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node

    # Delete node
    def delete_node(self, key):
        current = self.head
        while current:
            if current.data == key:
                if current.prev:
                    current.prev.next = current.next
                else:
                    self.head = current.next
                if current.next:
                    current.next.prev = current.prev
                else:
                    self.tail = current.prev
                return
            current = current.next

// Circular Linked List
class CircularLinkedList:
    def __init__(self):
        self.head = None

    # Insert at beginning
    def insert_at_beginning(self, data):
        new_node = Node(data)
        if not self.head:
            new_node.next = new_node
            self.head = new_node
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        new_node.next = self.head
        last.next = new_node
        self.head = new_node

    # Insert at end
    def insert_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            new_node.next = new_node
            self.head = new_node
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Node:</span> Basic building block with data and
        pointer
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Operations:</span> Insert, delete, search,
        traverse
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Variants:</span> Singly, doubly, circular linked
        lists
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Singly Linked List</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Operations:
Insert 1 at beginning: 1 -> None
Insert 2 at end: 1 -> 2 -> None
Insert 3 at beginning: 3 -> 1 -> 2 -> None
Delete 1: 3 -> 2 -> None
Search 2: Found
Search 4: Not found`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Doubly Linked List</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Operations:
Insert 1 at beginning: None <- 1 -> None
Insert 2 at end: None <- 1 <-> 2 -> None
Insert 3 at beginning: None <- 3 <-> 1 <-> 2 -> None
Delete 1: None <- 3 <-> 2 -> None
Traverse forward: 3 -> 2
Traverse backward: 2 <- 3`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Circular Linked List</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Operations:
Insert 1 at beginning: 1 -> 1
Insert 2 at end: 1 -> 2 -> 1
Insert 3 at beginning: 3 -> 1 -> 2 -> 3
Delete 1: 3 -> 2 -> 3
Traverse: 3 -> 2 -> 3 -> 2 -> ...`}
      </pre>
    </div>
  </div>
);
