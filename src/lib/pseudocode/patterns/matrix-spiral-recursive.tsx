import { ChevronRight } from "lucide-react";

export const MatrixSpiralRecursivePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Spiral Recursive Template</span>
      <span className="ml-2 text-xs text-secondary">(Matrix Operation)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) - visit each cell &nbsp;|&nbsp; Space: O(n) - recursion stack
      &nbsp;|&nbsp; Use: Recursive spiral traversal
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base case:</span> Check if
        layer is complete
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traverse layer:</span>{" "}
        Process outer layer
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recurse:</span> Process
        inner matrix
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Merge
        results
      </span>
    </div>
  </div>
);
