import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const UnionFindPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Union Find
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(α(n)) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Managing disjoint sets
    </div>

    <PseudocodeDisplay
      code={`// Create new set
MAKE-SET(x):
    x.parent = x
    x.rank = 0

// Find set representative
FIND-SET(x):
    if x ≠ x.parent:
        x.parent = FIND-SET(x.parent)  // Path compression
    return x.parent

// Union two sets
UNION(x, y):
    x_root = FIND-SET(x)
    y_root = FIND-SET(y)
    if x_root = y_root:
        return
    if x_root.rank < y_root.rank:
        x_root.parent = y_root
    else if x_root.rank > y_root.rank:
        y_root.parent = x_root
    else:
        y_root.parent = x_root
        x_root.rank = x_root.rank + 1

// Check if elements are in same set
CONNECTED(x, y):
    return FIND-SET(x) = FIND-SET(y)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Make:</span> Create new set
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find:</span> Find set representative
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Union:</span> Merge two sets
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Initial State</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Elements: [1, 2, 3, 4, 5]
After MAKE-SET:
1: {1}
2: {2}
3: {3}
4: {4}
5: {5}`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Union Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`UNION(1, 2) → {1, 2}
UNION(3, 4) → {3, 4}
UNION(1, 3) → {1, 2, 3, 4}
CONNECTED(2, 4) → true
CONNECTED(1, 5) → false`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Path Compression</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Before FIND-SET(4):
1
|
2
|
3
|
4

After FIND-SET(4):
  1
 /|\\
2 3 4`}
      </pre>
    </div>
  </div>
);
