import { ChevronRight } from "lucide-react";

export const UnionFindPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Union-Find</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(α(n)) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Managing
      disjoint sets
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Create new set with single element
MAKE-SET(x):
    # Initialize parent and rank
    parent[x] = x
    rank[x] = 0

// Find representative of set containing x
FIND-SET(x):
    # If x is not the root
    if x ≠ parent[x]:
        # Path compression
        parent[x] = FIND-SET(parent[x])
    return parent[x]

// Merge sets containing x and y
UNION(x, y):
    # Find representatives
    x_root = FIND-SET(x)
    y_root = FIND-SET(y)
    
    # If already in same set
    if x_root == y_root:
        return
    
    # Union by rank
    if rank[x_root] < rank[y_root]:
        parent[x_root] = y_root
    else if rank[x_root] > rank[y_root]:
        parent[y_root] = x_root
    else:
        parent[y_root] = x_root
        rank[x_root] = rank[x_root] + 1

// Check if two elements are in same set
CONNECTED(x, y):
    return FIND-SET(x) == FIND-SET(y)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Create:</span> Initialize
        new set
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find:</span> Locate set
        representative
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Union:</span> Merge two sets
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Test set
        membership
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Set Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Initial state:
MAKE-SET(1) → {1}
MAKE-SET(2) → {2}
MAKE-SET(3) → {3}
MAKE-SET(4) → {4}

After UNION(1, 2):
{1, 2}, {3}, {4}

After UNION(3, 4):
{1, 2}, {3, 4}

After UNION(2, 3):
{1, 2, 3, 4}

FIND-SET(1) = 1
FIND-SET(2) = 1
FIND-SET(3) = 1
FIND-SET(4) = 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Path Compression
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Before path compression:
1
 \
  2
   \
    3
     \
      4

After FIND-SET(4):
    1
   /|\
  2 3 4

Parent array:
[1, 1, 1, 1]`}
      </pre>
    </div>
  </div>
);
