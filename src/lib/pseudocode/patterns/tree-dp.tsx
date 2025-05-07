import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const TreeDynamicProgrammingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Tree Dynamic Programming
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solve tree problems with overlapping
      subproblems
    </div>

    <PseudocodeDisplay
      code={`# Tree Dynamic Programming: Solve tree problems with overlapping subproblems
# Input: Root node r of a tree
# Output: Optimal solution value for the tree

Algorithm TREE-DP(r)
    # Base case: empty tree
    if r = NIL then
        return 0
    end if

    # Initialize memoization table
    memo ← empty dictionary

    # Helper function for post-order traversal
    function DFS(u)
        if u = NIL then
            return 0
        end if

        # Check if already computed
        if u ∈ memo then
            return memo[u]
        end if

        # Case 1: Include current node
        include ← u.value
        for each child v of u do
            for each grandchild w of v do
                include ← include + DFS(w)
            end for
        end for

        # Case 2: Exclude current node
        exclude ← 0
        for each child v of u do
            exclude ← exclude + DFS(v)
        end for

        # Store and return optimal solution
        memo[u] ← max(include, exclude)
        return memo[u]
    end function

    return DFS(r)

# Example:
# Input: Tree with nodes [3, 4, 5, 1, 3, 1]
#
# Step 1: DFS(3)
#   include = 3 + DFS(1) + DFS(3) = 3 + 1 + 3 = 7
#   exclude = DFS(4) + DFS(5) = 4 + 5 = 9
#   memo[3] = max(7, 9) = 9
#
# Output: 9`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create memoization table
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse:</span> Perform post-order DFS
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute:</span> Include and exclude cases
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Store:</span> Optimal solution in memo table
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Maximum Independent Set</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Tree:
     3
   /   \\
  4     5
 / \\   /
1   3  1

DFS(3):
- Include: 3 + DFS(1) + DFS(3) = 3 + 1 + 3 = 7
- Exclude: DFS(4) + DFS(5) = 4 + 5 = 9
- Result: max(7, 9) = 9

Maximum Independent Set: 9`}
      </pre>
    </div>
  </div>
);
