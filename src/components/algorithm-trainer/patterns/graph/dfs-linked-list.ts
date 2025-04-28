import { AlgorithmPattern } from "../../types";

export const dfs_linked_listPattern: AlgorithmPattern = {
  title: "DFS on Linked List",
  description: "Application of DFS pattern to traverse or process a linked list recursively, useful for operations like reversing or finding cycles.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n) for recursion stack",
  pseudocode: `1. Base case: if node is null, return\n2. Process current node\n3. Recursively call DFS on next node\n4. (Optional) Process node after recursion`,
  example: `List: 1->2->3->4->null

DFS to print in reverse:
1. Visit 1, recurse
2. Visit 2, recurse
3. Visit 3, recurse
4. Visit 4, recurse
5. Print: 4,3,2,1`,
  implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def dfs_linked_list(node):
    # Base case
    if not node:
        return
    
    # Process node (pre-order)
    print(node.val)
    
    # Recurse
    dfs_linked_list(node.next)
    
    # Process node (post-order)
    # print(node.val)  # Uncomment for reverse order`
};
