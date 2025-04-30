import { ChevronRight } from "lucide-react";

export const MatrixSpiralTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Matrix Spiral Template</span>
      <span className="ml-2 text-xs text-secondary">(Matrix Operation)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - visit each element once &nbsp;|&nbsp; Space: O(1) - constant
      space &nbsp;|&nbsp; Use: Spiral order traversal of 2D array
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set
        boundaries (top, bottom, left, right)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse right:</span> Top
        row from left to right
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse down:</span> Right
        column from top to bottom
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update boundaries:</span>{" "}
        Shrink boundaries and repeat
      </span>
    </div>
  </div>
);
