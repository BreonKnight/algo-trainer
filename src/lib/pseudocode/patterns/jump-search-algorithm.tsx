import { ChevronRight } from "lucide-react";

export const JumpSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Jump Search Template</span>
      <span className="ml-2 text-xs text-secondary">(Search Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(√n) - optimal block size &nbsp;|&nbsp; Space: O(1) - constant
      space &nbsp;|&nbsp; Use: Searching in sorted arrays
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Calculate block size:</span>{" "}
        Optimal size is √n
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Jump through array:</span>{" "}
        Jump by block size until element &gt; target
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Linear search:</span>{" "}
        Perform linear search in previous block
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> Return
        index if found, -1 if not found
      </span>
    </div>
  </div>
);
