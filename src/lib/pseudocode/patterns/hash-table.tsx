import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const HashTablePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Hash Table</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Fast key-value storage
    </div>

    <PseudocodeDisplay
      code={`// Hash function
HASH(k, m):
  return k mod m

// Initialize table
HASH-TABLE-INIT(T, m):
  T.size = m
  T.table = new array[m]
  for i = 1 to m:
    T.table[i] = NIL

// Insert key-value pair
HASH-INSERT(T, k, v):
  h = HASH(k, T.size)
  if T.table[h] == NIL:
    T.table[h] = new list
  LIST-INSERT(T.table[h], (k, v))

// Search for key
HASH-SEARCH(T, k):
  h = HASH(k, T.size)
  if T.table[h] == NIL:
    return NIL
  for each (key, value) in T.table[h]:
    if key == k:
      return value
  return NIL

// Delete key
HASH-DELETE(T, k):
  h = HASH(k, T.size)
  if T.table[h] == NIL:
    return
  for each (key, value) in T.table[h]:
    if key == k:
      LIST-DELETE(T.table[h], (key, value))
      return`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add key-value pair
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Find value by key
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete:</span> Remove key-value pair
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Table Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial table: []
After HASH-INSERT(5, "five"): [NIL, NIL, NIL, NIL, (5, "five")]
After HASH-INSERT(12, "twelve"): [NIL, NIL, (12, "twelve"), NIL, (5, "five")]
After HASH-INSERT(7, "seven"): [NIL, NIL, (12, "twelve"), NIL, (5, "five"), NIL, (7, "seven")]
After HASH-DELETE(5): [NIL, NIL, (12, "twelve"), NIL, NIL, NIL, (7, "seven")]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Search Results</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`HASH-SEARCH(5) -> "five"
HASH-SEARCH(12) -> "twelve"
HASH-SEARCH(7) -> "seven"
HASH-SEARCH(3) -> NIL`}
      </pre>
    </div>
  </div>
);
