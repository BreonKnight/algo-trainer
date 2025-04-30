import { ChevronRight } from "lucide-react";

export const HashTablePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Hash Table</span>
      <span className="ml-2 text-xs text-secondary">(Dictionary)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Fast key-value
      lookups
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Insert key-value pair
INSERT(T, key, value):
    h = HASH(key)
    if T[h] == NIL:
        T[h] = new Node(key, value)
    else:
        // Handle collision with chaining
        node = T[h]
        while node.next ≠ NIL:
            if node.key == key:
                node.value = value
                return
            node = node.next
        node.next = new Node(key, value)

// Search for key
SEARCH(T, key):
    h = HASH(key)
    node = T[h]
    while node ≠ NIL:
        if node.key == key:
            return node.value
        node = node.next
    return NIL

// Delete key
DELETE(T, key):
    h = HASH(key)
    if T[h] == NIL:
        return
    if T[h].key == key:
        T[h] = T[h].next
        return
    prev = T[h]
    node = prev.next
    while node ≠ NIL:
        if node.key == key:
            prev.next = node.next
            return
        prev = node
        node = node.next

// Hash function
HASH(key):
    // Simple hash function for demonstration
    sum = 0
    for i = 1 to length(key):
        sum = sum + ASCII(key[i])
    return sum mod m`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add key-value
        pair
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Find value by
        key
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete:</span> Remove
        key-value pair
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Hash Table Operations
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial table (size 5):
[0] -> NIL
[1] -> NIL
[2] -> NIL
[3] -> NIL
[4] -> NIL

After INSERT("apple", 1):
[0] -> NIL
[1] -> ("apple", 1) -> NIL
[2] -> NIL
[3] -> NIL
[4] -> NIL

After INSERT("banana", 2):
[0] -> NIL
[1] -> ("apple", 1) -> NIL
[2] -> ("banana", 2) -> NIL
[3] -> NIL
[4] -> NIL`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Search Results</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`SEARCH("apple") -> 1
SEARCH("banana") -> 2
SEARCH("orange") -> NIL`}
      </pre>
    </div>
  </div>
);
