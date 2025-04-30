import { ChevronRight } from "lucide-react";

export const DynamicProgrammingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dynamic Programming</span>
      <span className="ml-2 text-xs text-secondary">
        (Optimization Technique)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solving problems
      with overlapping subproblems
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Find minimum number of coins needed
DYNAMIC-PROGRAMMING(coins, amount):
    # Initialize array to store minimum coins for each amount
    dp = new array of size amount + 1
    # Set all values to infinity except dp[0]
    for i from 1 to amount:
        dp[i] = ∞
    dp[0] = 0
    
    # For each amount from 1 to target
    for i from 1 to amount:
        # Try each coin
        for each coin in coins:
            # If coin can be used
            if coin ≤ i:
                # Update minimum coins needed
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    # Return result for target amount
    return dp[amount]`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create DP
        array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Fill:</span> Solve
        subproblems
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Use previous
        solutions
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Get final
        result
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Coin Change Problem
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Coins: [1, 2, 5]
Target amount: 11

DP array:
Amount: 0 1 2 3 4 5 6 7 8 9 10 11
Coins:  0 1 1 2 2 1 2 2 3 3 2  3

Solution:
Use 5 + 5 + 1 = 11 (3 coins)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Fibonacci Numbers
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`DP array:
n:    0 1 2 3 4 5 6 7 8
F(n): 0 1 1 2 3 5 8 13 21

Calculation:
F(0) = 0
F(1) = 1
F(2) = F(1) + F(0) = 1
F(3) = F(2) + F(1) = 2
F(4) = F(3) + F(2) = 3
...`}
      </pre>
    </div>
  </div>
);
