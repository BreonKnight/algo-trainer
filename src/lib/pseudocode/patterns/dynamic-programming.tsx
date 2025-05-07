import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export function DynamicProgrammingPattern() {
  return (
    <div>
      <div className="mb-2">
        <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
          Dynamic Programming
        </span>
      </div>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
      <div className="mb-2 text-xs text-secondary">
        Time: O(n²) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Optimization problems with
        overlapping subproblems
      </div>

      <PseudocodeDisplay
        code={`// Fibonacci
FIBONACCI(n):
  if n ≤ 1:
    return n
  dp = [0] * (n + 1)
  dp[1] = 1
  for i from 2 to n:
    dp[i] = dp[i-1] + dp[i-2]
  return dp[n]

// Longest Common Subsequence
LCS(X, Y):
  m = length(X)
  n = length(Y)
  dp = [0] * (n + 1)
  for i from 1 to m:
    prev = 0
    for j from 1 to n:
      temp = dp[j]
      if X[i-1] == Y[j-1]:
        dp[j] = prev + 1
      else:
        dp[j] = max(dp[j], dp[j-1])
      prev = temp
  return dp[n]

// Knapsack
KNAPSACK(W, V, C):
  n = length(W)
  dp = [0] * (C + 1)
  for i from 1 to n:
    for j from C downto W[i-1]:
      dp[j] = max(dp[j], dp[j-W[i-1]] + V[i-1])
  return dp[C]

// Matrix Chain Multiplication
MCM(P):
  n = length(P) - 1
  dp = [0] * n
  for l from 2 to n:
    for i from 0 to n-l:
      j = i + l - 1
      dp[i][j] = ∞
      for k from i to j-1:
        cost = dp[i][k] + dp[k+1][j] + P[i]*P[k+1]*P[j+1]
        if cost < dp[i][j]:
          dp[i][j] = cost
  return dp[0][n-1]`}
      />

      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">1.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Define:</span> State and recurrence relation
        </span>
      </div>
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">2.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Initialize:</span> Base cases and boundary
          conditions
        </span>
      </div>
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">3.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Compute:</span> Fill DP table in bottom-up
          manner
        </span>
      </div>

      <div className="mt-4">
        <span className="font-semibold text-accent">Example: Fibonacci</span>
        <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
          {`n = 5
dp = [0, 1, 1, 2, 3, 5]
F(0) = 0
F(1) = 1
F(2) = F(1) + F(0) = 1
F(3) = F(2) + F(1) = 2
F(4) = F(3) + F(2) = 3
F(5) = F(4) + F(3) = 5`}
        </pre>
      </div>

      <div className="mt-4">
        <span className="font-semibold text-accent">Example: Longest Common Subsequence</span>
        <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
          {`X = "ABCBDAB"
Y = "BDCABA"
dp = [0, 0, 0, 0, 0, 0, 0]
LCS = "BCBA" or "BDAB"
Length = 4`}
        </pre>
      </div>

      <div className="mt-4">
        <span className="font-semibold text-accent">Example: Knapsack</span>
        <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
          {`W = [2, 3, 4, 5]
V = [3, 4, 5, 6]
C = 5
dp = [0, 0, 3, 4, 4, 7]
Selected items: [2, 3]
Total value: 7`}
        </pre>
      </div>
    </div>
  );
}
