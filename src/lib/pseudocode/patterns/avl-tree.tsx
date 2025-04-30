import { ChevronRight } from "lucide-react";

export const AVLTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">AVL Tree Template</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) - for all operations &nbsp;|&nbsp; Space: O(n) - for tree
      nodes &nbsp;|&nbsp; Use: Self-balancing binary search tree
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add node and
        update heights
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Balance:</span> Check
        balance factor and rotate
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete:</span> Remove node
        and rebalance
      </span>
    </div>
  </div>
);
