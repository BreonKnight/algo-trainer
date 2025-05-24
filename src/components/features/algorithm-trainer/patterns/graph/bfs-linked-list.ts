import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const bfsLinkedListPattern: AlgorithmPattern = {
  title: "BFS on Linked List",
  description:
    "Apply Breadth-First Search on a linked list structure to traverse or search through nodes level by level.",
  timeComplexity: "O(N)",
  spaceComplexity: "O(1) since linked list is linear",
  pseudocode: `1. Initialize queue with head node
2. Initialize visited set
3. While queue is not empty:
   a. Dequeue node
   b. If node is null or visited, continue
   c. Process current node
   d. Mark node as visited
   e. Add next node to queue
4. Return result`,
  example: `Linked List:
1 -> 2 -> 3 -> 4 -> 5

BFS Process:
1. Visit 1, add 2 to queue
2. Visit 2, add 3 to queue
3. Visit 3, add 4 to queue
4. Visit 4, add 5 to queue
5. Visit 5

Result: [1, 2, 3, 4, 5]`,
  implementation: `from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def bfs_linked_list(head):
    if not head:
        return []
    
    result = []
    visited = set()
    queue = deque([head])
    
    while queue:
        node = queue.popleft()
        if node in visited:
            continue
        
        visited.add(node)
        result.append(node.val)
        
        if node.next:
            queue.append(node.next)
    
    return result`,
  category: "Graph",
};
