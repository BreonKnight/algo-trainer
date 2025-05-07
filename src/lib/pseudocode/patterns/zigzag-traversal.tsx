import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const ZigzagTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Zigzag Traversal
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Level-order traversal with alternating
      directions
    </div>

    <PseudocodeDisplay
      code={`// Zigzag level order traversal
ZIGZAG-TRAVERSAL(root):
  if root == null:
    return []
  
  result = []
  queue = [root]
  level = 0
  
  while queue is not empty:
    level_size = len(queue)
    current_level = []
    
    for i = 0 to level_size-1:
      node = queue.dequeue()
      if level % 2 == 0:
        current_level.append(node.val)
      else:
        current_level.insert(0, node.val)
      
      if node.left:
        queue.enqueue(node.left)
      if node.right:
        queue.enqueue(node.right)
    
    result.append(current_level)
    level += 1
  
  return result

// Example usage
tree = [3,9,20,null,null,15,7]
result = ZIGZAG-TRAVERSAL(tree)
// Returns: [[3],[20,9],[15,7]]`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Level:</span> Process nodes level by level
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Direction:</span> Alternate between
        left-to-right and right-to-left
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Queue:</span> Use queue for level-order
        traversal
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Binary Tree</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`     3
    /   \\
   9     20
        /  \\
       15   7

Level 0: [3]
Level 1: [20, 9]  // Right to left
Level 2: [15, 7]  // Left to right

Final result: [[3], [20, 9], [15, 7]]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Modified level-order traversal</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Uses queue for efficient level processing</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Can be implemented with two stacks</span>
        </div>
      </div>
    </div>
  </div>
);
