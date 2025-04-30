import { ChevronRight } from "lucide-react";

export const MatrixOperationsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Operations Template</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) - for n x n matrix &nbsp;|&nbsp; Space: O(n²) - for matrix
      storage &nbsp;|&nbsp; Use: Grid-based computations and transformations
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Matrix traversal:</span>{" "}
        Nested loops for row and column access
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Transpose:</span> Swap
        elements across diagonal
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Rotation:</span> 90-degree
        clockwise/counter-clockwise rotation
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Operations:</span> Addition,
        multiplication, and element-wise operations
      </span>
    </div>
  </div>
);
