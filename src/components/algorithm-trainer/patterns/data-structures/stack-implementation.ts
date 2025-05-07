import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const stackImplementationPattern: AlgorithmPattern = {
  title: "Stack Data Structure Implementation",
  description:
    "Implementation of a Last-In-First-Out (LIFO) data structure that supports push and pop operations.",
  timeComplexity: "Push/Pop: O(1)",
  spaceComplexity: "O(n) for n elements",
  pseudocode: `Stack operations:\n1. push(element):\n   - Add element to top\n2. pop():\n   - Remove and return top element\n3. peek():\n   - Return top element without removing\n4. isEmpty():\n   - Return true if stack empty\n5. size():
   - Return number of elements`,
  example: `stack = Stack()
stack.push(1)  # [1]
stack.push(2)  # [1,2]
stack.push(3)  # [1,2,3]
stack.pop()    # returns 3, stack=[1,2]
stack.peek()   # returns 2, stack=[1,2]`,
  implementation: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.isEmpty():
        return self.items.pop()
        raise IndexError("Stack is empty")
    
    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        raise IndexError("Stack is empty")
    
    def isEmpty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)`,
  category: "Data Structures",
};
