import { ChevronRight } from "lucide-react";

export const MemoizationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Memoization Template</span>
      <span className="ml-2 text-xs text-secondary">(Optimization)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - with memoization &nbsp;|&nbsp; Space: O(n) - for cache
      storage &nbsp;|&nbsp; Use: Optimizing recursive functions with overlapping
      subproblems
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Cache setup:</span>{" "}
        Initialize storage for computed results
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check cache:</span> Return
        stored result if available
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute:</span> Calculate
        result if not in cache
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Store:</span> Save computed
        result in cache
      </span>
    </div>
  </div>
);
