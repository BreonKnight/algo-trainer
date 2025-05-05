import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const SuffixTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Suffix Tree</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient string operations
    </div>

    <PseudocodeDisplay
      code={`// Suffix tree node structure
SUFFIX-NODE:
    start
    end
    children
    suffix_link
    parent

// Build suffix tree using Ukkonen's algorithm
BUILD-SUFFIX-TREE(S):
    n ← length[S]
    root ← new SUFFIX-NODE
    active_node ← root
    active_edge ← 0
    active_length ← 0
    remaining ← 0

    for i ← 1 to n:
        remaining ← remaining + 1
        last_new_node ← NIL

        while remaining > 0:
            if active_length = 0:
                active_edge ← i

            if active_node.children[S[active_edge]] = NIL:
                active_node.children[S[active_edge]] ← new SUFFIX-NODE
                if last_new_node ≠ NIL:
                    last_new_node.suffix_link ← active_node
                    last_new_node ← NIL
            else:
                next_node ← active_node.children[S[active_edge]]
                if active_length ≥ next_node.end - next_node.start + 1:
                    active_length ← active_length - (next_node.end - next_node.start + 1)
                    active_edge ← active_edge + (next_node.end - next_node.start + 1)
                    active_node ← next_node
                    continue

            if S[i] = S[next_node.start + active_length]:
                active_length ← active_length + 1
                if last_new_node ≠ NIL and active_node ≠ root:
                    last_new_node.suffix_link ← active_node
                    last_new_node ← NIL
                break

            split_node ← new SUFFIX-NODE
            active_node.children[S[active_edge]] ← split_node
            split_node.children[S[next_node.start + active_length]] ← next_node
            next_node.start ← next_node.start + active_length
            split_node.children[S[i]] ← new SUFFIX-NODE

            if last_new_node ≠ NIL:
                last_new_node.suffix_link ← split_node

            last_new_node ← split_node
            remaining ← remaining - 1

            if active_node = root and active_length > 0:
                active_length ← active_length - 1
                active_edge ← i - remaining + 1
            else if active_node ≠ root:
                active_node ← active_node.suffix_link

    return root

// Example:
// Input: S = "banana"
//
// Suffix Tree:
//         (root)
//        /   |   \\
//       b    a    n
//      /     |     \\
//     a      n      a
//    /       |       \\
//   n        a        n
//  /         |         \\
// a          n          a
// |          |          |
// $          a          $
//            |
//            n
//            |
//            a
//            |
//            $`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create root node and active point</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Add characters one by one</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Maintain suffix links and active point</span>
      </div>
    </div>
  </div>
);
