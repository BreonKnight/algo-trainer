import { ChevronRight } from "lucide-react";

export const TwoSumDictPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Two Sum Template</span>
      <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - single pass &nbsp;|&nbsp; Space: O(n) - hash map
      &nbsp;|&nbsp; Use: Finding pairs that sum to target
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        empty hash map
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Iterate:</span> For each
        element in array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check complement:</span>{" "}
        Look for target - current in map
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Store:</span> Add current
        element to map
      </span>
    </div>
  </div>
);
