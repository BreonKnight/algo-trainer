import { ChevronRight } from "lucide-react";

export const TernarySearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Ternary Search Template</span>
      <span className="ml-2 text-xs text-secondary">(Search Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log₃ n) - faster than binary search &nbsp;|&nbsp; Space: O(1) -
      constant space &nbsp;|&nbsp; Use: Finding maximum/minimum in unimodal
      functions
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set left
        and right boundaries
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">While valid range:</span>{" "}
        Continue until range is small enough
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find midpoints:</span>{" "}
        Calculate two midpoints dividing range into thirds
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update range:</span> Narrow
        down search based on function values at midpoints
      </span>
    </div>
  </div>
);
