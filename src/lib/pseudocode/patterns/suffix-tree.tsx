import { ChevronRight } from "lucide-react";

export const SuffixTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Suffix Tree Template</span>
      <span className="ml-2 text-xs text-secondary">(String Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - for construction using Ukkonen's algorithm &nbsp;|&nbsp;
      Space: O(n) - for tree nodes &nbsp;|&nbsp; Use: String pattern matching
      and analysis
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Construct tree
        using Ukkonen's algorithm
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Navigate
        through tree for pattern
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Applications:</span> Find
        repeating substrings
      </span>
    </div>
  </div>
);
