import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const LCADFSPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        LCA (DFS)
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(h) &nbsp;|&nbsp; Use: Finding lowest common ancestor in
      binary trees
    </div>

    <PseudocodeDisplay
      code={`// LCA using DFS
LCA-DFS(root, p, q):
  if root == null or root == p or root == q:
    return root
  
  left = LCA-DFS(root.left, p, q)
  right = LCA-DFS(root.right, p, q)
  
  if left != null and right != null:
    return root
  return left if left != null else right

// Alternative: Using Parent Pointers
LCA-PARENT(root, p, q):
  ancestors = new Set()
  while p != null:
    ancestors.add(p)
    p = p.parent
  
  while q != null:
    if q in ancestors:
      return q
    q = q.parent
  return null`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base Case:</span> Return node if it's null or
        matches either target
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recurse:</span> Search left and right subtrees
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Return root if both subtrees
        return non-null
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Binary Tree</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`     3
    /   \\
   5     1
  / \\   / \\
 6   2 0   8
    / \\
   7   4

Find LCA of nodes 5 and 1:
- Start at root (3)
- Both nodes found in different subtrees
- Return root (3)

Find LCA of nodes 5 and 4:
- Start at root (3)
- Both nodes found in left subtree
- Return node 5`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Works for both binary and n-ary trees</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Handles cases where one node is ancestor of the other</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Can be optimized for repeated queries using binary lifting</span>
        </div>
      </div>
    </div>
  </div>
);
