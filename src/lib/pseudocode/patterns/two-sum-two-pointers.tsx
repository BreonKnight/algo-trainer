import { ChevronRight } from "lucide-react";

export const TwoSumTwoPointersPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Two Sum Two Pointers Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - sorting + linear scan &nbsp;|&nbsp; Space: O(1) -
      constant space &nbsp;|&nbsp; Use: Finding pairs in sorted arrays that sum
      to target
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort array:</span> Sort the
        input array in ascending order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize pointers:</span>{" "}
        Set left pointer to start, right pointer to end
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find sum:</span> While
        pointers haven't met, check if current sum equals target
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Adjust pointers:</span> Move
        left pointer if sum too small, right if too large
      </span>
    </div>
  </div>
);
