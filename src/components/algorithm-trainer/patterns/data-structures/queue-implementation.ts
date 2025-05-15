import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const queueImplementationPattern: AlgorithmPattern = {
  title: "Queue Data Structure Implementation",
  description:
    "Implementation of a First-In-First-Out (FIFO) data structure that supports enqueue and dequeue operations.",
  timeComplexity: "Enqueue/Dequeue: O(1)",
  category: "Data Structures",
  spaceComplexity: "O(n) for n elements",
  pseudocode: `Queue operations:\n1. enqueue(element):\n   - Add element to rear\n2. dequeue():\n   - Remove and return front element\n3. front():\n   - Return front element without removing\n4. isEmpty():\n   - Return true if queue empty\n5. size():
   - Return number of elements`,
  example: `queue = Queue()
queue.enqueue(1)  # [1]
queue.enqueue(2)  # [1,2]
queue.enqueue(3)  # [1,2,3]
queue.dequeue()   # returns 1, queue=[2,3]
queue.front()     # returns 2, queue=[2,3]`,
  implementation: `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.isEmpty():
            return self.items.popleft()
        raise IndexError("Queue is empty")
    
    def front(self):
        if not self.isEmpty():
            return self.items[0]
        raise IndexError("Queue is empty")
    
    def isEmpty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)`,
};
