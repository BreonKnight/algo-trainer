import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const AVLTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">AVL Tree</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Self-balancing binary search tree
    </div>

    <PseudocodeDisplay
      code={`AVL-INSERT(T, z)
    let y ← null
    let x ← T.root

    while x ≠ null
        do y ← x
           if z.key < x.key
               then x ← x.left
               else x ← x.right

    z.p ← y
    if y = null
        then T.root ← z
        else if z.key < y.key
            then y.left ← z
            else y.right ← z

    z.left ← null
    z.right ← null
    z.height ← 1

    AVL-BALANCE(T, z)

AVL-BALANCE(T, z)
    while z ≠ null
        do z.height ← 1 + max(HEIGHT(z.left), HEIGHT(z.right))
           if HEIGHT(z.left) - HEIGHT(z.right) > 1
               then if HEIGHT(z.left.left) ≥ HEIGHT(z.left.right)
                       then RIGHT-ROTATE(T, z)
                       else LEFT-ROTATE(T, z.left)
                           RIGHT-ROTATE(T, z)
           else if HEIGHT(z.right) - HEIGHT(z.left) > 1
               then if HEIGHT(z.right.right) ≥ HEIGHT(z.right.left)
                       then LEFT-ROTATE(T, z)
                       else RIGHT-ROTATE(T, z.right)
                           LEFT-ROTATE(T, z)
           z ← z.p

RIGHT-ROTATE(T, y)
    let x ← y.left
    y.left ← x.right
    if x.right ≠ null
        then x.right.p ← y
    x.p ← y.p
    if y.p = null
        then T.root ← x
        else if y = y.p.right
            then y.p.right ← x
            else y.p.left ← x
    x.right ← y
    y.p ← x
    y.height ← 1 + max(HEIGHT(y.left), HEIGHT(y.right))
    x.height ← 1 + max(HEIGHT(x.left), HEIGHT(x.right))

LEFT-ROTATE(T, x)
    let y ← x.right
    x.right ← y.left
    if y.left ≠ null
        then y.left.p ← x
    y.p ← x.p
    if x.p = null
        then T.root ← y
        else if x = x.p.left
            then x.p.left ← y
            else x.p.right ← y
    y.left ← x
    x.p ← y
    x.height ← 1 + max(HEIGHT(x.left), HEIGHT(x.right))
    y.height ← 1 + max(HEIGHT(y.left), HEIGHT(y.right))

// Example:
// Input: Insert keys [10, 20, 30, 40, 50, 25]
//
// Insert 10:
//   Tree: 10
//
// Insert 20:
//   Tree: 10
//         \
//         20
//
// Insert 30:
//   Tree: 20
//        /  \
//      10    30
//
// Insert 40:
//   Tree: 20
//        /  \
//      10    30
//             \
//             40
//
// Insert 50:
//   Tree: 20
//        /  \
//      10    40
//           /  \
//         30    50
//
// Insert 25:
//   Tree: 30
//        /  \
//      20    40
//     /  \    \
//   10   25   50`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Standard BST insertion with height tracking</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Balance: Check and fix height imbalances using rotations</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Rotate: Perform left/right rotations to maintain balance</span>
      </div>
    </div>
  </div>
);
