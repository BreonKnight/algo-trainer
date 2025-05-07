import { PatternComponent } from "@/src/lib/pseudocode/types";

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
        <p className="mt-2">Time Complexity: O(n)</p>
        <p>Space Complexity: O(1)</p>
      </div>
      <div className="mt-4 w-full">
        <pre className="bg-background/50 p-4 rounded-lg text-sm">
          {`function fibonacci(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    
    return b`}
        </pre>
      </div>
    </div>
  );
};

export default FibonacciPattern;
