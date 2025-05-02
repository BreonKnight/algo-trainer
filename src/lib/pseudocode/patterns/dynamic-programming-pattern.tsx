import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const DynamicProgrammingPatternTemplate = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dynamic Programming</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm Paradigm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solving problems
      with overlapping subproblems
    </div>

    <PseudocodeDisplay code={`DP-PATTERN(n)
    # Define state and dependencies
    state ← array[n+1]
    
    # Initialize base cases
    state[0] ← base_case_0
    state[1] ← base_case_1
    
    # Fill DP table
    for i ← 2 to n
        # Compute state from previous states
        state[i] ← compute_state(state[i-1], state[i-2])
    
    return state[n]

# Example:
# Input: n = 5
# State: dp[i] represents solution for subproblem of size i
# Base cases: dp[0] = 0, dp[1] = 1
# Recurrence: dp[i] = dp[i-1] + dp[i-2]
# Output: dp[5] = 5`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Define: State and dependencies</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Base cases</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute: States in correct order</span>
      </div>
    </div>
  </div>
);
