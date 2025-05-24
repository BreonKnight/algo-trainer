import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const dfsLinkedListPattern: AlgorithmPattern = {
  title: "DFS on Linked List",
  description:
    "Apply Depth-First Search on a linked list structure to traverse or search through nodes.",
  timeComplexity: "O(N)",
  spaceComplexity: "O(N) for recursion stack",
  pseudocode: `1. Initialize visited set
2. Define DFS function:
   a. If node is null or visited, return
   b. Process current node
   c. Mark node as visited
   d. Recursively call DFS on next node
3. Start DFS from head node`,
  example: `Linked List:
1 -> 2 -> 3 -> 4 -> 5

DFS Process:
1. Visit 1
2. Visit 2
3. Visit 3
4. Visit 4
5. Visit 5

Result: [1, 2, 3, 4, 5]`,
  implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def dfs_linked_list(head):
    visited = set()
    result = []
    
    def dfs(node):
        if not node or node in visited:
            return
        
        visited.add(node)
        result.append(node.val)
        dfs(node.next)
    
    dfs(head)
    return result`,
  category: "Graph",
};
