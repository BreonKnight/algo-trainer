import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MatrixChainMultiplicationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Chain Multiplication</span>
      <span className="ml-2 text-xs text-secondary">(Optimization Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n³) &nbsp;|&nbsp; Space: O(n²) &nbsp;|&nbsp; Use: Finding optimal matrix
      multiplication order
    </div>

    <PseudocodeDisplay
      code={`// Find minimum number of scalar multiplications
MATRIX-CHAIN-ORDER(p):
    n = length of p - 1
    # Initialize tables for costs and splits
    m = new n × n table
    s = new n × n table

    # Cost is zero when multiplying one matrix
    for i from 1 to n:
        m[i][i] = 0

    # Consider chains of increasing length
    for l from 2 to n:
        for i from 1 to n - l + 1:
            j = i + l - 1
            m[i][j] = ∞

            # Try all possible split points
            for k from i to j - 1:
                # Compute cost of this split
                cost = m[i][k] + m[k+1][j] + p[i-1] * p[k] * p[j]
                if cost < m[i][j]:
                    m[i][j] = cost
                    s[i][j] = k

    return m and s

// Print optimal parenthesization
PRINT-OPTIMAL-PARENS(s, i, j):
    if i == j:
        print "A" + i
    else:
        print "("
        PRINT-OPTIMAL-PARENS(s, i, s[i][j])
        PRINT-OPTIMAL-PARENS(s, s[i][j] + 1, j)
        print ")"`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create cost and split tables
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Fill:</span> Compute costs for all chain lengths
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Split:</span> Try all possible split points
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Print:</span> Show optimal multiplication order
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Matrix Chain</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Matrices: A₁(10×30), A₂(30×5), A₃(5×60)

Cost table m:
    1   2   3
1   0 1500 4500
2   -   0  9000
3   -   -    0

Split table s:
    1  2  3
1   -  1  1
2   -  -  2
3   -  -  -

Optimal order: (A₁A₂)A₃
Minimum cost: 4500 multiplications`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Larger Chain</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Matrices: A₁(5×4), A₂(4×6), A₃(6×2), A₄(2×7)

Optimal order: (A₁(A₂A₃))A₄
Minimum cost: 158 multiplications

Alternative order: A₁((A₂A₃)A₄)
Cost: 220 multiplications`}
      </pre>
    </div>
  </div>
);
