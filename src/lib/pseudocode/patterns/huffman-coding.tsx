import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const HuffmanCodingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Huffman Coding</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Optimal prefix coding for data
      compression
    </div>

    <PseudocodeDisplay
      code={`HUFFMAN(C)
    n ← |C|
    Q ← C  // Min-priority queue
    for i ← 1 to n - 1
        do allocate a new node z
            z.left ← x ← EXTRACT-MIN(Q)
            z.right ← y ← EXTRACT-MIN(Q)
            z.freq ← x.freq + y.freq
            INSERT(Q, z)
    return EXTRACT-MIN(Q)  // Return root of tree

// Example:
// Input: C = [
//   {char: 'a', freq: 45},
//   {char: 'b', freq: 13},
//   {char: 'c', freq: 12},
//   {char: 'd', freq: 16},
//   {char: 'e', freq: 9},
//   {char: 'f', freq: 5}
// ]
//
// Step 1: Create leaf nodes
//         [a:45, b:13, c:12, d:16, e:9, f:5]
//
// Step 2: Combine f(5) and e(9) → 14
//         [a:45, b:13, c:12, d:16, fe:14]
//
// Step 3: Combine c(12) and b(13) → 25
//         [a:45, d:16, fe:14, cb:25]
//
// Step 4: Combine fe(14) and d(16) → 30
//         [a:45, cb:25, fed:30]
//
// Step 5: Combine cb(25) and fed(30) → 55
//         [a:45, cbfed:55]
//
// Step 6: Combine a(45) and cbfed(55) → 100
//         [acbfed:100]
//
// Output: Huffman codes
// a: 0
// b: 101
// c: 100
// d: 111
// e: 1101
// f: 1100`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Create: Leaf nodes for each character</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Build: Min-priority queue</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Combine: Two lowest frequency nodes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Repeat: Until single tree remains</span>
      </div>
    </div>
  </div>
);
