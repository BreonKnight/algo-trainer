import { ChevronRight } from "lucide-react";

export const SuffixArrayPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Suffix Array Template</span>
      <span className="ml-2 text-xs text-secondary">(String Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - for construction &nbsp;|&nbsp; Space: O(n) - for array
      &nbsp;|&nbsp; Use: String pattern matching and analysis
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Generate and
        sort all suffixes
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">LCP:</span> Compute longest
        common prefix array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Binary search
        for pattern
      </span>
    </div>
  </div>
);
