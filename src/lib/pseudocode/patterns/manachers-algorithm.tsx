import { ChevronRight } from "lucide-react";

export const ManachersAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Manacher's Algorithm Template
      </span>
      <span className="ml-2 text-xs text-secondary">(String Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - linear time &nbsp;|&nbsp; Space: O(n) - for auxiliary arrays
      &nbsp;|&nbsp; Use: Finding all palindromic substrings
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Preprocess:</span> Transform
        string by adding special characters
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Use symmetry
        to avoid redundant comparisons
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return
        palindrome lengths array
      </span>
    </div>
  </div>
);
