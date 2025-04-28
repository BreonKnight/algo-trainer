import { AlgorithmPattern } from "../../types";

export const heap_implementationPattern: AlgorithmPattern = {
  title: "Binary Heap Implementation",
  description: "Implementation of a complete binary tree that satisfies the heap property (min-heap or max-heap), commonly used for priority queues.",
  timeComplexity: "Insert/Delete: O(log n), Get Min/Max: O(1)",
  spaceComplexity: "O(n) for n elements",
  pseudocode: `
Heap operations:
1. insert(value):
   - Add to end
   - Bubble up until heap property satisfied
2. extractMin/Max():
   - Remove root
   - Replace with last element
   - Bubble down until heap property satisfied
3. peek():
   - Return root value
4. heapify(array):
   - Convert array to heap
`,
  example: `heap = MinHeap()
heap.insert(5)
heap.insert(3)
heap.insert(7)
heap.insert(1)

     1
   /   \\
  3     7
 /
5`,
  implementation: `class MinHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def leftChild(self, i):
        return 2 * i + 1
    
    def rightChild(self, i):
        return 2 * i + 2
    
    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
    
    def insert(self, key):
        self.heap.append(key)
        self._bubbleUp(len(self.heap) - 1)
    
    def _bubbleUp(self, i):
        parent = self.parent(i)
        if i > 0 and self.heap[i] < self.heap[parent]:
            self.swap(i, parent)
            self._bubbleUp(parent)
    
    def extractMin(self):
        if not self.heap:
            return None
        
        min_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        if self.heap:
            self._bubbleDown(0)
        
        return min_val
    
    def _bubbleDown(self, i):
        min_idx = i
        left = self.leftChild(i)
        right = self.rightChild(i)
        
        if left < len(self.heap) and self.heap[left] < self.heap[min_idx]:
            min_idx = left
        
        if right < len(self.heap) and self.heap[right] < self.heap[min_idx]:
            min_idx = right
        
        if min_idx != i:
            self.swap(i, min_idx)
            self._bubbleDown(min_idx)
    
    def peek(self):
        return self.heap[0] if self.heap else None`
};
