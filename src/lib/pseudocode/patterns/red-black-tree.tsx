import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const RedBlackTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Red-Black Tree
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Self-balancing binary search tree
    </div>

    <PseudocodeDisplay
      code={`RB-INSERT(T, z)
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
    z.color ← RED
    RB-INSERT-FIXUP(T, z)

RB-INSERT-FIXUP(T, z)
    while z.p.color = RED
        do if z.p = z.p.p.left
               then y ← z.p.p.right
                    if y.color = RED
                        then z.p.color ← BLACK
                             y.color ← BLACK
                             z.p.p.color ← RED
                             z ← z.p.p
                        else if z = z.p.right
                            then z ← z.p
                                 LEFT-ROTATE(T, z)
                            z.p.color ← BLACK
                            z.p.p.color ← RED
                            RIGHT-ROTATE(T, z.p.p)
               else (same as then clause with "right" and "left" exchanged)
    T.root.color ← BLACK

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

// Example:
// Input: Insert keys [10, 20, 30, 40, 50, 25]
//
// Insert 10:
//   Tree: 10(B)
//
// Insert 20:
//   Tree: 10(B)
//         \
//         20(R)
//
// Insert 30:
//   Tree: 20(B)
//        /  \
//     10(R) 30(R)
//
// Insert 40:
//   Tree: 20(B)
//        /  \
//     10(B) 30(B)
//             \
//            40(R)
//
// Insert 50:
//   Tree: 20(B)
//        /  \
//     10(B) 40(B)
//           /  \
//        30(R) 50(R)
//
// Insert 25:
//   Tree: 20(B)
//        /  \
//     10(B) 40(R)
//           /  \
//        30(B) 50(B)
//       /
//    25(R)`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Step 1: [Description]</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Step 2: [Description]</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Step 3: [Description]</span>
      </div>
    </div>
  </div>
);
