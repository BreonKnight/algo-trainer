import { ChevronRight } from "lucide-react";

export const DfsBinaryTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">DFS Binary Tree</span>
      <span className="ml-2 text-xs text-secondary">(Tree)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(h) &nbsp;|&nbsp; Use: Traverse binary
      tree in depth-first order
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# DFS Binary Tree: Traverse binary tree in depth-first order
# Input: Binary tree T with root node
# Output: List of nodes in DFS order

Algorithm DFS-BINARY-TREE(T)
    if T.root = NIL then
        return empty list
    end if
    
    result ← empty list
    stack ← empty stack
    stack.push(T.root)
    
    while stack is not empty do
        node ← stack.pop()
        result.append(node.value)
        
        # Push right child first so left is processed first
        if node.right ≠ NIL then
            stack.push(node.right)
        end if
        
        if node.left ≠ NIL then
            stack.push(node.left)
        end if
    end while
    
    return result

# Example:
# Input: Binary tree
#        1
#       / \
#      2   3
#     / \   \
#    4   5   6
# 
# Step 1: Push 1
# Step 2: Pop 1, Push 3, Push 2
# Step 3: Pop 2, Push 5, Push 4
# Step 4: Pop 4
# Step 5: Pop 5
# Step 6: Pop 3, Push 6
# Step 7: Pop 6
# 
# Output: [1, 2, 4, 5, 3, 6]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize stack and result list</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Push root node onto stack</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Process nodes in stack order, pushing right then left children
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return list of processed nodes</span>
      </div>
    </div>
  </div>
);
