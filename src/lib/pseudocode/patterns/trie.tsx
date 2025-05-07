import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const TriePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Trie
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(L) &nbsp;|&nbsp; Space: O(AL) &nbsp;|&nbsp; Use: Efficient string storage and search
    </div>

    <PseudocodeDisplay
      code={`// Trie node structure
TRIE-NODE:
    children[1..26]  // Array of child nodes
    is_end          // Marks end of word
    count           // Number of words with this prefix

// Initialize trie
TRIE-INIT():
    root ← new TRIE-NODE
    root.is_end ← false
    root.count ← 0
    return root

// Insert word into trie
TRIE-INSERT(root, word):
    current ← root
    for i ← 1 to length[word]:
        index ← word[i] - 'a'
        if current.children[index] = NIL:
            current.children[index] ← new TRIE-NODE
        current ← current.children[index]
        current.count ← current.count + 1
    current.is_end ← true

// Search word in trie
TRIE-SEARCH(root, word):
    current ← root
    for i ← 1 to length[word]:
        index ← word[i] - 'a'
        if current.children[index] = NIL:
            return false
        current ← current.children[index]
    return current.is_end

// Count words with prefix
TRIE-COUNT-PREFIX(root, prefix):
    current ← root
    for i ← 1 to length[prefix]:
        index ← prefix[i] - 'a'
        if current.children[index] = NIL:
            return 0
        current ← current.children[index]
    return current.count

// Example:
// Input: words = ["apple", "app", "banana", "ball"]
//
// Trie Structure:
//         (root)
//        /      \\
//       a        b
//      /         \\
//     p           a
//    / \\         \\
//   p   p         l
//  /     \\        \\
// l       l        l
// |       |        |
// e       e        e
//
// Operations:
// 1. Search "app" → true
// 2. Search "ban" → false
// 3. Count prefix "ap" → 2
// 4. Count prefix "ba" → 2`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Create root node</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Add words character by character</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search: Traverse trie for word existence</span>
      </div>
    </div>
  </div>
);
