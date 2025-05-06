import { PatternComponent } from "../types";

const DoublyLinkedListPattern: PatternComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
          Doubly Linked List
        </span>
        <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
        <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
      </div>
      <div className="mt-4 text-sm text-secondary">
        <p>A linked list where each node has references to both the next and previous nodes</p>
        <p className="mt-2">Time Complexity:</p>
        <ul className="list-disc list-inside">
          <li>Access: O(n)</li>
          <li>Search: O(n)</li>
          <li>Insertion: O(1)</li>
          <li>Deletion: O(1)</li>
        </ul>
      </div>
      <div className="mt-4 w-full">
        <pre className="bg-background/50 p-4 rounded-lg text-sm">
          {`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
    
    def insert_at_end(self, data):
        new_node = Node(data)
        if self.tail is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node`}
        </pre>
      </div>
    </div>
  );
};

export default DoublyLinkedListPattern;
