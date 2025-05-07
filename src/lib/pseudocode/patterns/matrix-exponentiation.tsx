import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const MatrixExponentiationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Exponentiation</span>
      <span className="ml-2 text-xs text-secondary">(Optimization Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Fast computation of matrix powers
    </div>

    <PseudocodeDisplay
      code={`// Compute matrix power using binary exponentiation
MATRIX-POWER(matrix, power):
    # Initialize result as identity matrix
    result = IDENTITY-MATRIX(size of matrix)
    current = matrix

    # Process each bit of power
    while power > 0:
        # If current bit is set
        if power mod 2 == 1:
            # Multiply result by current matrix
            result = MATRIX-MULTIPLY(result, current)

        # Square current matrix
        current = MATRIX-MULTIPLY(current, current)
        # Move to next bit
        power = power / 2

    return result

// Multiply two matrices
MATRIX-MULTIPLY(A, B):
    n = number of rows in A
    m = number of columns in B
    result = new n × m matrix

    # Compute each element
    for i from 1 to n:
        for j from 1 to m:
            sum = 0
            for k from 1 to number of columns in A:
                sum = sum + A[i][k] * B[k][j]
            result[i][j] = sum

    return result`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up identity matrix
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Handle each bit of power
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Multiply:</span> Update result matrix
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Square:</span> Prepare for next bit
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Computing A³</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Matrix A:
[1 2]
[3 4]

Step 1: power = 3, result = I
[1 0]
[0 1]

Step 2: power = 1 (odd)
Multiply result by A:
[1 2]
[3 4]

Step 3: Square A:
[7 10]
[15 22]

Step 4: power = 0
Final result:
[37 54]
[81 118]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Fibonacci Numbers</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Using matrix exponentiation to compute F(n):

Base matrix:
[1 1]
[1 0]

Compute matrix^(n-1):
[F(n)   F(n-1)]
[F(n-1) F(n-2)]

For n = 5:
[5 3]
[3 2]

F(5) = 5`}
      </pre>
    </div>
  </div>
);
