import { ChevronRight } from "lucide-react";

export const MatrixTraversalRecursivePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Recursive Template</span>
      <span className="ml-2 text-xs text-secondary">(Matrix Operation)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) - visit each cell &nbsp;|&nbsp; Space: O(n) - recursion stack
      &nbsp;|&nbsp; Use: Recursive matrix traversal
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base case:</span> Check
        boundaries and visited cells
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process cell:</span> Mark as
        visited
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recurse:</span> Visit
        adjacent cells
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Backtrack:</span> Unmark if
        needed
      </span>
    </div>
  </div>
);
