import { PatternComponent } from "@/lib/pseudocode/types";
import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

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
        <p>Time: O(n) for access/search, O(1) for insertion/deletion</p>
        <p>Space: O(n) for storing n nodes</p>
        <p>Use: When you need bidirectional traversal and O(1) insertion/deletion at both ends</p>
      </div>
      <div className="mt-4 w-full">
        <PseudocodeDisplay
          code={`class Node:
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
        />
      </div>
      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Each node contains data and pointers to both next and previous nodes</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Maintain head and tail pointers for O(1) access to both ends</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Update both next and prev pointers when inserting or deleting nodes</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Handle edge cases: empty list, single node, first/last node operations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoublyLinkedListPattern;
