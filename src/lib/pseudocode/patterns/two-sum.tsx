import { ChevronRight } from "lucide-react";

export const TwoSumPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Two Sum Template</span>
      <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - single pass with hash map &nbsp;|&nbsp; Space: O(n) - for
      hash map &nbsp;|&nbsp; Use: Finding pairs that sum to target value
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize hash map:</span>{" "}
        Create map to store seen numbers and their indices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Iterate array:</span> For
        each number in array:
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check complement:</span>{" "}
        Calculate complement (target - current number)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find pair:</span> If
        complement exists in map, return indices, else store current number
      </span>
    </div>
  </div>
);
