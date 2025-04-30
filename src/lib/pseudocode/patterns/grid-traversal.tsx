import { ChevronRight } from "lucide-react";

export const GridTraversalPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Grid Traversal Template</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(R * C) - where R is rows and C is columns &nbsp;|&nbsp; Space: O(R
      * C) - for visited array &nbsp;|&nbsp; Use: Navigating 2D grids and
      matrices
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        visited array, define direction vectors (up, down, left, right)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Boundary check:</span>{" "}
        Create helper function to check if cell is within grid bounds
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traversal:</span> Use
        BFS/DFS to explore grid, marking visited cells
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process cells:</span> For
        each valid cell, perform required operations
      </span>
    </div>
  </div>
);
