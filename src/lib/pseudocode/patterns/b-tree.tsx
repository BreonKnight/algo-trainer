import { ChevronRight } from "lucide-react";

export const BTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">B-Tree Template</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) - for all operations &nbsp;|&nbsp; Space: O(n) - for tree
      nodes &nbsp;|&nbsp; Use: Self-balancing search tree for disk operations
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Split full
        nodes on the way down
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete:</span> Ensure nodes
        have minimum keys
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Navigate
        through nodes
      </span>
    </div>
  </div>
);
