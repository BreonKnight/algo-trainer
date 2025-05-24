import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const zigzagTraversalPattern: AlgorithmPattern = {
  title: "Zigzag Traversal",
  description:
    "A level-order traversal of a binary tree where nodes are visited in alternating directions (left-to-right, then right-to-left).",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  pseudocode: `
ZIGZAG-TRAVERSAL(root)
    if root = NIL
        return empty array
    
    result = empty array
    queue = empty queue
    ENQUEUE(queue, root)
    left-to-right = TRUE
    
    while queue is not empty
        level-size = size of queue
        current-level = empty array
        
        for i = 1 to level-size
            node = DEQUEUE(queue)
            if left-to-right
                APPEND(current-level, node.val)
            else
                PREPEND(current-level, node.val)
            
            if node.left ≠ NIL
                ENQUEUE(queue, node.left)
            if node.right ≠ NIL
                ENQUEUE(queue, node.right)
        
        APPEND(result, current-level)
        left-to-right = ¬left-to-right
    
    return result`,
  example: `# Example usage:
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

result = zigzag_traversal(root)
print(result)  # [[3], [20, 9], [15, 7]]`,
  implementation: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def zigzag_traversal(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    left_to_right = True
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.pop(0)
            if left_to_right:
                current_level.append(node.val)
            else:
                current_level.insert(0, node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(current_level)
        left_to_right = not left_to_right
    
    return result`,
  category: "data-structure",
};
