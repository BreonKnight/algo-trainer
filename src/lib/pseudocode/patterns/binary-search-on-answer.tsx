import { ChevronRight } from "lucide-react";

export const BinarySearchOnAnswerPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Binary Search on Answer Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Search Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - binary search with validation &nbsp;|&nbsp; Space: O(1)
      - constant space &nbsp;|&nbsp; Use: Finding optimal value in monotonic
      functions
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize range:</span> Set
        left and right boundaries
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Binary search:</span> While
        left &lt;= right
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check mid:</span> Calculate
        mid and validate if it's a possible answer
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update range:</span> Adjust
        left or right based on validation result
      </span>
    </div>
  </div>
);
