import { ChevronRight } from "lucide-react";

export const DynamicProgrammingFibonacciPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fibonacci Template</span>
      <span className="ml-2 text-xs text-secondary">(Dynamic Programming)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - single pass &nbsp;|&nbsp; Space: O(1) - constant space
      &nbsp;|&nbsp; Use: Computing Fibonacci numbers efficiently
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set first
        two numbers
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Iterate:</span> Compute next
        number from previous two
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Shift
        previous numbers
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> nth
        Fibonacci number
      </span>
    </div>
  </div>
);
