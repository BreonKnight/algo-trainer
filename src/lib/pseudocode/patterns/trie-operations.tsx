import { ChevronRight } from "lucide-react";

export const TrieOperationsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Trie Operations</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(m) &nbsp;|&nbsp; Space: O(ALPHABET_SIZE * m * n) &nbsp;|&nbsp;
      Use: String prefix operations
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Node structure
NODE:
    children[ALPHABET_SIZE]
    isEndOfWord

// Initialize trie
TRIE-INIT():
    root ← new NODE
    root.isEndOfWord ← false
    for i ← 1 to ALPHABET_SIZE:
        root.children[i] ← null
    return root

// Insert word
TRIE-INSERT(root, word):
    node ← root
    for i ← 1 to length[word]:
        index ← word[i] - 'a'
        if node.children[index] = null:
            node.children[index] ← new NODE
        node ← node.children[index]
    node.isEndOfWord ← true

// Search word
TRIE-SEARCH(root, word):
    node ← root
    for i ← 1 to length[word]:
        index ← word[i] - 'a'
        if node.children[index] = null:
            return false
        node ← node.children[index]
    return node.isEndOfWord

// Check prefix
TRIE-STARTS-WITH(root, prefix):
    node ← root
    for i ← 1 to length[prefix]:
        index ← prefix[i] - 'a'
        if node.children[index] = null:
            return false
        node ← node.children[index]
    return true

// Delete word
TRIE-DELETE(root, word):
    return TRIE-DELETE-HELPER(root, word, 0)

TRIE-DELETE-HELPER(node, word, depth):
    if node = null:
        return false
    if depth = length[word]:
        if node.isEndOfWord:
            node.isEndOfWord ← false
            return is-empty(node)
        return false
    index ← word[depth] - 'a'
    if TRIE-DELETE-HELPER(node.children[index], word, depth + 1):
        node.children[index] ← null
        return is-empty(node) and not node.isEndOfWord
    return false

// Example:
// Input: Operations [INSERT("apple"), INSERT("app"), SEARCH("apple"), DELETE("app")]
// 
// After INSERT("apple"):
//    root
//     |
//     a
//     |
//     p
//     |
//     p
//     |
//     l
//     |
//     e (end)
// 
// After INSERT("app"):
//    root
//     |
//     a
//     |
//     p
//     |
//     p (end)
//     |
//     l
//     |
//     e (end)
// 
// SEARCH("apple") → true
// SEARCH("app") → true
// 
// After DELETE("app"):
//    root
//     |
//     a
//     |
//     p
//     |
//     p
//     |
//     l
//     |
//     e (end)`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Add word character by character, marking end</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search: Traverse trie following word characters</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Delete: Remove word and clean up unused nodes</span>
      </div>
    </div>
  </div>
);
