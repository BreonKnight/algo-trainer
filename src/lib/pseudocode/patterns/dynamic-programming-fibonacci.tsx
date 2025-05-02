import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const DynamicProgrammingFibonacciPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fibonacci</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Computing
      Fibonacci numbers efficiently
    </div>

    <PseudocodeDisplay code={`FIBONACCI(n)
    # Base cases
    if n ≤ 1
        return n
    
    # Initialize first two numbers
    prev ← 0
    curr ← 1
    
    # Compute next numbers
    for i ← 2 to n
        next ← prev + curr
        prev ← curr
        curr ← next
    
    return curr

# Example:
# Input: n = 6
# Output: 8  # Sequence: 0, 1, 1, 2, 3, 5, 8`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: First two numbers (0 and 1)</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute: Next number from previous two</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: nth Fibonacci number</span>
      </div>
    </div>
  </div>
);
