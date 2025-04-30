import { ChevronRight } from "lucide-react";

export const SegmentTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Segment Tree</span>
      <span className="ml-2 text-xs text-secondary">
        (Range Query Data Structure)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Range queries
      and updates
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Build segment tree from array
BUILD-TREE(arr, tree, node, start, end):
    if start = end:
        tree[node] = arr[start]
        return
    
    mid = floor((start + end) / 2)
    BUILD-TREE(arr, tree, 2*node, start, mid)
    BUILD-TREE(arr, tree, 2*node + 1, mid + 1, end)
    tree[node] = tree[2*node] + tree[2*node + 1]

// Query sum in range [l, r]
QUERY-SUM(tree, node, start, end, l, r):
    if r < start or end < l:
        return 0
    if l ≤ start and end ≤ r:
        return tree[node]
    
    mid = floor((start + end) / 2)
    left = QUERY-SUM(tree, 2*node, start, mid, l, r)
    right = QUERY-SUM(tree, 2*node + 1, mid + 1, end, l, r)
    return left + right

// Update value at index
UPDATE(tree, node, start, end, idx, val):
    if start = end:
        tree[node] = val
        return
    
    mid = floor((start + end) / 2)
    if idx ≤ mid:
        UPDATE(tree, 2*node, start, mid, idx, val)
    else:
        UPDATE(tree, 2*node + 1, mid + 1, end, idx, val)
    tree[node] = tree[2*node] + tree[2*node + 1]`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Construct tree
        from array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Get sum in
        range [l, r]
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Modify value
        at index
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Tree Construction
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input array: [1, 3, 5, 7, 9, 11]

Tree structure:
        [36]
     [9]     [27]
  [4]  [5] [16] [11]
[1][3][5][7][9][11]

Node values represent sum of their range`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Range Queries</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Query [2, 4] = 5 + 7 + 9 = 21
Query [0, 5] = 1 + 3 + 5 + 7 + 9 + 11 = 36
Query [1, 3] = 3 + 5 + 7 = 15

Update index 2 to 6:
        [35]
     [9]     [26]
  [4]  [5] [15] [11]
[1][3][6][7][9][11]`}
      </pre>
    </div>
  </div>
);
