import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const StateCompressionDPPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">State Compression DP</span>
      <span className="ml-2 text-xs text-secondary">(Dynamic Programming)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n * 2^m) &nbsp;|&nbsp; Space: O(2^m) &nbsp;|&nbsp; Use: Solve problems with state
      represented as bits
    </div>

    <PseudocodeDisplay
      code={`# State Compression DP: Solve problems with state represented as bits
# Input: Grid G[1..n][1..m]
# Output: Maximum value achievable

Algorithm STATE-COMPRESSION-DP(G)
    n ← rows[G]
    m ← cols[G]
    # Initialize DP table
    dp ← array of size 2^m
    for i ← 0 to 2^m - 1 do
        dp[i] ← -∞
    end for
    dp[0] ← 0

    # Process each row
    for i ← 1 to n do
        # Initialize current row's DP
        curr ← array of size 2^m
        for j ← 0 to 2^m - 1 do
            curr[j] ← -∞
        end for

        # Try all possible states
        for prev ← 0 to 2^m - 1 do
            if dp[prev] = -∞ then
                continue
            end if

            # Try all possible current states
            for curr_state ← 0 to 2^m - 1 do
                # Check if current state is valid
                valid ← true
                for j ← 0 to m - 1 do
                    if (curr_state & (1 << j)) ≠ 0 then
                        if G[i][j+1] = 0 then
                            valid ← false
                            break
                        end if
                        if j > 0 and (curr_state & (1 << (j-1))) ≠ 0 then
                            valid ← false
                            break
                        end if
                    end if
                end for

                if valid then
                    # Calculate value for current state
                    value ← 0
                    for j ← 0 to m - 1 do
                        if (curr_state & (1 << j)) ≠ 0 then
                            value ← value + G[i][j+1]
                        end if
                    end for

                    # Update DP
                    curr[curr_state] ← max(curr[curr_state], dp[prev] + value)
                end if
            end for
        end for

        dp ← curr
    end for

    return max(dp)

# Example:
# Input: G = [[1, 2, 3],
#             [4, 5, 6],
#             [7, 8, 9]]
#
# Step 1: dp = [0, -∞, -∞, -∞, -∞, -∞, -∞, -∞]
# Step 2: Process first row
#         curr = [0, 1, 2, 3, -∞, -∞, -∞, -∞]
# Step 3: Process second row
#         curr = [0, 4, 5, 9, -∞, -∞, -∞, -∞]
# Step 4: Process third row
#         curr = [0, 7, 8, 15, -∞, -∞, -∞, -∞]
#
# Output: 15`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize DP table with bit states</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process each row of the grid</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check validity of current state</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update DP with maximum value</span>
      </div>
    </div>
  </div>
);
