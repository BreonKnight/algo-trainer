import { ChevronRight } from "lucide-react";

export const KMPAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">KMP Algorithm Template</span>
      <span className="ml-2 text-xs text-secondary">(String Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n + m) - where n is text length and m is pattern length
      &nbsp;|&nbsp; Space: O(m) - for LPS array &nbsp;|&nbsp; Use: Pattern
      matching in strings
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Preprocess:</span> Build LPS
        array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Use LPS to
        skip comparisons
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return all
        pattern occurrences
      </span>
    </div>
  </div>
);
