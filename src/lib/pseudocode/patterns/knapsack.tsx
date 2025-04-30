import { ChevronRight } from "lucide-react";

export const KnapsackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Knapsack Template</span>
      <span className="ml-2 text-xs text-secondary">(Dynamic Programming)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n * W) - where n is items and W is capacity &nbsp;|&nbsp; Space:
      O(n * W) - for DP table &nbsp;|&nbsp; Use: Optimization problems with
      weight and value constraints
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize DP table:</span>{" "}
        Create 2D array for items and capacity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base cases:</span> Set
        values for 0 items and 0 capacity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Fill DP table:</span> For
        each item and capacity, choose max of including or excluding item
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return solution:</span>{" "}
        Value at last cell represents maximum value
      </span>
    </div>
  </div>
);
