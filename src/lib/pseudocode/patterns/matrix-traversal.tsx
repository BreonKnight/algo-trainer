import { ChevronRight } from "lucide-react";

export const MatrixTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Traversal Template</span>
      <span className="ml-2 text-xs text-secondary">(Matrix Operation)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) - visit each cell &nbsp;|&nbsp; Space: O(1) - constant space
      &nbsp;|&nbsp; Use: Iterative matrix traversal
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set row
        and column pointers
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse rows:</span> Move
        through each row
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse columns:</span>{" "}
        Move through each column
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process cell:</span> Apply
        operation to current cell
      </span>
    </div>
  </div>
);
