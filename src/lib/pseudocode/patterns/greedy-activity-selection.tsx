import { ChevronRight } from "lucide-react";

export const GreedyActivitySelectionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Activity Selection Template</span>
      <span className="ml-2 text-xs text-secondary">(Greedy Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - sorting activities &nbsp;|&nbsp; Space: O(1) - constant
      space &nbsp;|&nbsp; Use: Scheduling maximum non-overlapping activities
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort activities:</span> By
        finish time
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Select first:</span> Add
        first activity to result
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check compatibility:</span>{" "}
        Add activity if start time &gt;= last finish time
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> List
        of selected activities
      </span>
    </div>
  </div>
);
