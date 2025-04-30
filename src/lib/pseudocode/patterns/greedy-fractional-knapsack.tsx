import { ChevronRight } from "lucide-react";

export const GreedyFractionalKnapsackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Fractional Knapsack Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Greedy Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - sorting items &nbsp;|&nbsp; Space: O(1) - constant
      space &nbsp;|&nbsp; Use: Maximizing value with fractional items
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort items:</span> By value
        per unit weight
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set total
        value and remaining capacity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Add items:</span> Take whole
        items or fractions if needed
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span>{" "}
        Maximum value achievable
      </span>
    </div>
  </div>
);
