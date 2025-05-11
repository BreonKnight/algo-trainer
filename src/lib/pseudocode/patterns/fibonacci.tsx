import { PatternComponent } from "@/lib/pseudocode/types";
import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

const FibonacciPattern: PatternComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
          Fibonacci
        </span>
        <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
        <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
      </div>
      <div className="mt-4 text-sm text-secondary">
        <p>A sequence where each number is the sum of the two preceding ones</p>
        <p>Time: O(n) for iterative approach, O(2^n) for recursive</p>
        <p>Space: O(1) for iterative, O(n) for recursive call stack</p>
        <p>Use: Dynamic programming, sequence generation, mathematical modeling</p>
      </div>
      <div className="mt-4 w-full">
        <PseudocodeDisplay
          code={`function fibonacci(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    
    return b`}
        />
      </div>
      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Initialize first two numbers (0 and 1)</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Iterate through sequence, updating values</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Use two variables to track previous numbers</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Return the nth number in the sequence</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FibonacciPattern;
