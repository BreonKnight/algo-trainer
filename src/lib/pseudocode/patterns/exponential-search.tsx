import { ChevronRight } from "lucide-react";

export const ExponentialSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Exponential Search Template</span>
      <span className="ml-2 text-xs text-secondary">(Searching Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) - binary search after range &nbsp;|&nbsp; Space: O(1) -
      constant space &nbsp;|&nbsp; Use: Finding elements in unbounded sorted
      arrays
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find range:</span> Double
        index until element found or exceeded
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Binary search:</span> Search
        within found range
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check bounds:</span> Verify
        element exists in range
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> Index
        of element or -1 if not found
      </span>
    </div>
  </div>
);
