import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const stackSortPattern: AlgorithmPattern = {
  title: "Stack Sort Algorithm",
  description:
    "A sorting algorithm that uses two stacks to sort an array. It works by pushing elements onto a stack and then popping them off in sorted order. The algorithm is not efficient for large datasets but demonstrates the use of stack data structure for sorting.",
  timeComplexity: "O(n²)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Create two stacks: input and output
2. Push all elements from array onto input stack
3. While input stack is not empty:
   a. Pop an element from input stack
   b. While output stack is not empty and top element is greater than popped element:
      - Pop element from output stack and push to input stack
   c. Push popped element to output stack
4. Pop all elements from output stack to get sorted array`,
  example: `arr = [5, 2, 8, 1, 9]

Step 1: Push all elements to input stack
Input: [5, 2, 8, 1, 9] (top)
Output: []

Step 2: Pop 9 from input
Input: [5, 2, 8, 1]
Output: [9]

Step 3: Pop 1 from input
Input: [5, 2, 8]
Output: [1, 9]

Step 4: Pop 8 from input
Input: [5, 2]
Output: [1, 8, 9]

Step 5: Pop 2 from input
Input: [5]
Output: [1, 2, 8, 9]

Step 6: Pop 5 from input
Input: []
Output: [1, 2, 5, 8, 9]

Final result: [1, 2, 5, 8, 9]`,
  implementation: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0

def stack_sort(arr):
    # Create two stacks
    input_stack = Stack()
    output_stack = Stack()
    
    # Push all elements to input stack
    for num in arr:
        input_stack.push(num)
    
    # Sort elements using stacks
    while not input_stack.is_empty():
        # Pop element from input stack
        temp = input_stack.pop()
        
        # Move elements from output stack to input stack
        # until we find the right position for temp
        while not output_stack.is_empty() and output_stack.peek() > temp:
            input_stack.push(output_stack.pop())
        
        # Push temp to output stack
        output_stack.push(temp)
    
    # Pop all elements from output stack to get sorted array
    result = []
    while not output_stack.is_empty():
        result.append(output_stack.pop())
    
    return result`,
  category: "Sorting",
  keyPoints: [
    "Uses stack data structure",
    "Not efficient for large datasets",
    "Demonstrates stack operations",
    "Educational algorithm",
  ],
  commonUseCases: [
    "Educational purposes",
    "Small data sets",
    "Demonstrating stack operations",
    "Interview questions",
  ],
  relatedPatterns: ["Stack", "Insertion Sort", "Bubble Sort"],
  tips: [
    "Use for small arrays (n < 50)",
    "Good for understanding stack operations",
    "Consider using more efficient algorithms for production",
    "Can be used as a building block in more complex algorithms",
  ],
};
