import { ChevronRight } from "lucide-react";

export const MonotonicStackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Monotonic Stack Template</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - each element pushed and popped once &nbsp;|&nbsp; Space: O(n)
      - for stack &nbsp;|&nbsp; Use: Finding next/previous greater/smaller
      elements
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize stack:</span>{" "}
        Create empty stack to maintain monotonic order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process elements:</span> For
        each element in array:
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">
          Maintain monotonicity:
        </span>{" "}
        Pop elements that violate order, process them
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Push current element:</span>{" "}
        Add current element to stack
      </span>
    </div>
  </div>
);
