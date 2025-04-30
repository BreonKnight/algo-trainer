import { ChevronRight } from "lucide-react";

export const PrefixSumsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prefix Sums Template</span>
      <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - for preprocessing &nbsp;|&nbsp; Space: O(n) - for prefix
      array &nbsp;|&nbsp; Use: Efficient range sum queries
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">
          Initialize prefix array:
        </span>{" "}
        Create array of size n+1
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute prefix sums:</span>{" "}
        For each element, add to previous prefix sum
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query range sums:</span>{" "}
        Subtract prefix[right+1] - prefix[left]
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Handle updates:</span> For
        point updates, update all affected prefix sums
      </span>
    </div>
  </div>
);
