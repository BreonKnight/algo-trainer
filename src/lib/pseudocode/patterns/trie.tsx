import { ChevronRight } from "lucide-react";

export const TriePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Trie</span>
      <span className="ml-2 text-xs text-secondary">(Prefix Tree)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(L) &nbsp;|&nbsp; Space: O(n·L) &nbsp;|&nbsp; Use: String prefix
      matching
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Insert string into trie
INSERT(T, str):
    node = T.root
    for i = 1 to length(str):
        c = str[i]
        if node.children[c] == NIL:
            node.children[c] = new Node()
        node = node.children[c]
    node.isEnd = true

// Search for string
SEARCH(T, str):
    node = T.root
    for i = 1 to length(str):
        c = str[i]
        if node.children[c] == NIL:
            return false
        node = node.children[c]
    return node.isEnd

// Check if prefix exists
STARTS-WITH(T, prefix):
    node = T.root
    for i = 1 to length(prefix):
        c = prefix[i]
        if node.children[c] == NIL:
            return false
        node = node.children[c]
    return true

// Delete string from trie
DELETE(T, str):
    node = T.root
    for i = 1 to length(str):
        c = str[i]
        if node.children[c] == NIL:
            return
        node = node.children[c]
    node.isEnd = false`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add string to
        trie
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Find string
        in trie
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Prefix:</span> Check if
        prefix exists
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Trie Operations
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`After INSERT("apple"):
    root
     |
     a
     |
     p
     |
     p
     |
     l
     |
     e (end)

After INSERT("app"):
    root
     |
     a
     |
     p
     |
     p (end)
     |
     l
     |
     e (end)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Search Results</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`SEARCH("apple") -> true
SEARCH("app") -> true
SEARCH("orange") -> false
STARTS-WITH("ap") -> true
STARTS-WITH("or") -> false`}
      </pre>
    </div>
  </div>
);
