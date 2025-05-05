import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const SegmentTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Segment Tree</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Range queries and updates
    </div>

    <PseudocodeDisplay
      code={`// Standard Segment Tree
class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.size = 1
        while self.size < self.n:
            self.size *= 2
        self.tree = [0] * (2 * self.size)
        self.build(data)

    def build(self, data):
        # Fill leaves
        for i in range(self.n):
            self.tree[self.size + i] = data[i]
        # Build internal nodes
        for i in range(self.size - 1, 0, -1):
            self.tree[i] = self.tree[2*i] + self.tree[2*i+1]

    def update(self, pos, value):
        pos += self.size
        self.tree[pos] = value
        while pos > 1:
            pos //= 2
            self.tree[pos] = self.tree[2*pos] + self.tree[2*pos+1]

    def query(self, l, r):
        res = 0
        l += self.size
        r += self.size
        while l <= r:
            if l % 2 == 1:
                res += self.tree[l]
                l += 1
            if r % 2 == 0:
                res += self.tree[r]
                r -= 1
            l //= 2
            r //= 2
        return res

// Lazy Propagation Segment Tree
class LazySegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.size = 1
        while self.size < self.n:
            self.size *= 2
        self.tree = [0] * (2 * self.size)
        self.lazy = [0] * (2 * self.size)
        self.build(data)

    def push(self, node, node_l, node_r):
        if self.lazy[node] != 0:
            self.tree[node] += self.lazy[node] * (node_r - node_l + 1)
            if node_l != node_r:
                self.lazy[2*node] += self.lazy[node]
                self.lazy[2*node+1] += self.lazy[node]
            self.lazy[node] = 0

    def range_update(self, l, r, val):
        self._range_update(1, 0, self.size-1, l, r, val)

    def _range_update(self, node, node_l, node_r, l, r, val):
        self.push(node, node_l, node_r)
        if r < node_l or l > node_r:
            return
        if l <= node_l and node_r <= r:
            self.lazy[node] += val
            self.push(node, node_l, node_r)
            return
        mid = (node_l + node_r) // 2
        self._range_update(2*node, node_l, mid, l, r, val)
        self._range_update(2*node+1, mid+1, node_r, l, r, val)
        self.tree[node] = self.tree[2*node] + self.tree[2*node+1]

// Persistent Segment Tree
class PersistentSegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.size = 1
        while self.size < self.n:
            self.size *= 2
        self.versions = []
        self.build(data)

    def build(self, data):
        root = [0] * (2 * self.size)
        for i in range(self.n):
            root[self.size + i] = data[i]
        for i in range(self.size - 1, 0, -1):
            root[i] = root[2*i] + root[2*i+1]
        self.versions.append(root)

    def update(self, version, pos, value):
        new_root = self.versions[version].copy()
        pos += self.size
        new_root[pos] = value
        while pos > 1:
            pos //= 2
            new_root[pos] = new_root[2*pos] + new_root[2*pos+1]
        self.versions.append(new_root)
        return len(self.versions) - 1`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Construct tree from array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Get range sum in O(log n)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Modify value in O(log n)
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Segment Tree</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [1, 3, 5, 7, 9, 11]

Tree Structure:
        [36]
     [9]     [27]
   [4] [5] [16] [11]
[1][3][5][7][9][11]

Queries:
sum(0,2) = 9
sum(1,4) = 24
sum(2,5) = 32

Update A[2] = 6:
        [37]
     [10]    [27]
   [4] [6] [16] [11]
[1][3][6][7][9][11]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Lazy Propagation</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [1, 3, 5, 7, 9, 11]

Initial Tree:
        [36]
     [9]     [27]
   [4] [5] [16] [11]

Range Update: Add 2 to [1,3]
        [42]
     [15]    [27]
   [4] [7] [20] [11]

Queries:
sum(0,2) = 13
sum(1,4) = 30
sum(2,5) = 38`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Persistent Segment Tree</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [1, 3, 5, 7, 9, 11]

Version 0:
        [36]
     [9]     [27]
   [4] [5] [16] [11]

Update A[2] = 6 (Version 1):
        [37]
     [10]    [27]
   [4] [6] [16] [11]

Update A[4] = 8 (Version 2):
        [35]
     [10]    [25]
   [4] [6] [15] [10]

Queries on Version 0:
sum(0,2) = 9
sum(1,4) = 24

Queries on Version 2:
sum(0,2) = 10
sum(1,4) = 24`}
      </pre>
    </div>
  </div>
);
