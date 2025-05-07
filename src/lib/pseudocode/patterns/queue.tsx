import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const QueuePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Queue</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: FIFO (First-In-First-Out) operations
    </div>

    <PseudocodeDisplay
      code={`// Standard Queue
class Queue:
    def __init__(self):
        self.items = []

    # Enqueue (add to rear)
    def enqueue(self, item):
        self.items.append(item)

    # Dequeue (remove from front)
    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.pop(0)

    # Check if empty
    def is_empty(self):
        return len(self.items) == 0

    # Get size
    def size(self):
        return len(self.items)

    # Peek front
    def peek(self):
        if self.is_empty():
            return None
        return self.items[0]

// Circular Queue
class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = 0
        self.rear = -1
        self.size = 0

    # Enqueue
    def enqueue(self, item):
        if self.is_full():
            return False
        self.rear = (self.rear + 1) % self.capacity
        self.items[self.rear] = item
        self.size += 1
        return True

    # Dequeue
    def dequeue(self):
        if self.is_empty():
            return None
        item = self.items[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item

    # Check if empty
    def is_empty(self):
        return self.size == 0

    # Check if full
    def is_full(self):
        return self.size == self.capacity

    # Peek front
    def peek(self):
        if self.is_empty():
            return None
        return self.items[self.front]

// Priority Queue
class PriorityQueue:
    def __init__(self):
        self.items = []

    # Enqueue with priority
    def enqueue(self, item, priority):
        self.items.append((item, priority))
        self.items.sort(key=lambda x: x[1])

    # Dequeue highest priority
    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.pop(0)[0]

    # Check if empty
    def is_empty(self):
        return len(self.items) == 0

    # Get size
    def size(self):
        return len(self.items)

    # Peek highest priority
    def peek(self):
        if self.is_empty():
            return None
        return self.items[0][0]

// Double-Ended Queue (Deque)
class Deque:
    def __init__(self):
        self.items = []

    # Add to front
    def add_front(self, item):
        self.items.insert(0, item)

    # Add to rear
    def add_rear(self, item):
        self.items.append(item)

    # Remove from front
    def remove_front(self):
        if self.is_empty():
            return None
        return self.items.pop(0)

    # Remove from rear
    def remove_rear(self):
        if self.is_empty():
            return None
        return self.items.pop()

    # Check if empty
    def is_empty(self):
        return len(self.items) == 0

    # Get size
    def size(self):
        return len(self.items)

    # Peek front
    def peek_front(self):
        if self.is_empty():
            return None
        return self.items[0]

    # Peek rear
    def peek_rear(self):
        if self.is_empty():
            return None
        return self.items[-1]`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Enqueue:</span> Add element to rear
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Dequeue:</span> Remove element from front
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Peek:</span> View front element without removal
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Queue</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Operations:
Enqueue 1: [1]
Enqueue 2: [1, 2]
Enqueue 3: [1, 2, 3]
Dequeue: [2, 3] (removed 1)
Peek: 2
Size: 2`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Circular Queue</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Capacity: 3
Operations:
Enqueue 1: [1, None, None]
Enqueue 2: [1, 2, None]
Enqueue 3: [1, 2, 3]
Dequeue: [None, 2, 3] (removed 1)
Enqueue 4: [4, 2, 3]
Peek: 2
Size: 3`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Priority Queue</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Operations:
Enqueue (1, 3): [(1, 3)]
Enqueue (2, 1): [(2, 1), (1, 3)]
Enqueue (3, 2): [(2, 1), (3, 2), (1, 3)]
Dequeue: [(3, 2), (1, 3)] (removed 2)
Peek: 3
Size: 2`}
      </pre>
    </div>
  </div>
);
