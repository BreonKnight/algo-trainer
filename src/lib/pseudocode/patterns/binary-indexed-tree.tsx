import { ChevronRight } from "lucide-react";

export const BinaryIndexedTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Binary Indexed Tree</span>
      <span className="ml-2 text-xs text-secondary">(Fenwick Tree)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient
      prefix sum queries and updates
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Initialize tree with size n
INITIALIZE(n):
    tree = new array of size n + 1
    for i from 1 to n:
        tree[i] = 0
    return tree

// Get least significant bit
LSB(x):
    return x & (-x)

// Update value at index i
UPDATE(tree, i, delta):
    while i <= length of tree:
        tree[i] = tree[i] + delta
        i = i + LSB(i)

// Query prefix sum up to index i
QUERY(tree, i):
    sum = 0
    while i > 0:
        sum = sum + tree[i]
        i = i - LSB(i)
    return sum

// Get range sum from l to r
RANGE-SUM(tree, l, r):
    return QUERY(tree, r) - QUERY(tree, l - 1)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        empty tree
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Add delta to
        index and ancestors
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Sum values
        from index to root
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Tree Operations
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initialize tree of size 8:
tree = [0, 0, 0, 0, 0, 0, 0, 0, 0]

Update operations:
UPDATE(tree, 1, 3)  // tree[1] += 3
UPDATE(tree, 2, 2)  // tree[2] += 2
UPDATE(tree, 3, 5)  // tree[3] += 5
UPDATE(tree, 4, 1)  // tree[4] += 1

Final tree state:
tree = [0, 3, 5, 5, 11, 0, 0, 0, 0]

Query operations:
QUERY(tree, 4) = 11  // 3 + 2 + 5 + 1
RANGE-SUM(tree, 2, 4) = 8  // 2 + 5 + 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Binary Indexing
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Index  Binary  LSB
1     0001    1
2     0010    2
3     0011    1
4     0100    4
5     0101    1
6     0110    2
7     0111    1
8     1000    8

LSB(x) = x & (-x) isolates the rightmost 1-bit`}
      </pre>
    </div>
  </div>
);
