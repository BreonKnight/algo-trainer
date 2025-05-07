import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const InorderTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Inorder Tree Traversal
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(h) &nbsp;|&nbsp; Use: Binary tree traversal
      (left-root-right)
    </div>

    <PseudocodeDisplay
      code={`// Recursive Inorder Traversal
INORDER-TREE-WALK(x):
    if x ≠ NIL:
        INORDER-TREE-WALK(x.left)
        print x.key
        INORDER-TREE-WALK(x.right)

// Iterative Inorder Traversal using Stack
ITERATIVE-INORDER(x):
    S ← empty stack
    current ← x
    while current ≠ NIL or S is not empty:
        while current ≠ NIL:
            PUSH(S, current)
            current ← current.left
        current ← POP(S)
        print current.key
        current ← current.right

// Morris Inorder Traversal (Threaded Binary Tree)
MORRIS-INORDER(root):
    current ← root
    while current ≠ NIL:
        if current.left = NIL:
            print current.key
            current ← current.right
        else:
            // Find inorder predecessor
            predecessor ← current.left
            while predecessor.right ≠ NIL and predecessor.right ≠ current:
                predecessor ← predecessor.right
            
            if predecessor.right = NIL:
                predecessor.right ← current
                current ← current.left
            else:
                predecessor.right ← NIL
                print current.key
                current ← current.right

// Example:
// Input: Binary tree
//        4
//      /   \\
//     2     6
//    / \\   / \\
//   1   3 5   7
//
// Inorder traversal: 1 2 3 4 5 6 7`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recursive: Simple but uses call stack space</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Iterative: Uses explicit stack, better for large trees</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Morris: O(1) space, modifies tree structure temporarily</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Applications:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Binary Search Tree validation</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Expression tree evaluation</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Tree to sorted array conversion</span>
        </div>
      </div>
    </div>
  </div>
);
