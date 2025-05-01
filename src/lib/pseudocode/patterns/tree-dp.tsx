import { ChevronRight } from "lucide-react";

export const TreeDynamicProgrammingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Tree Dynamic Programming</span>
      <span className="ml-2 text-xs text-secondary">(Tree)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solve tree
      problems with overlapping subproblems
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`# Tree Dynamic Programming: Solve tree problems with overlapping subproblems
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
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize memoization table</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Perform post-order traversal</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Calculate include and exclude cases</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Store and return optimal solution</span>
      </div>
    </div>
  </div>
);
