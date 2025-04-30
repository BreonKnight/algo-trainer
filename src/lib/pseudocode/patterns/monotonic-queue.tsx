import { ChevronRight } from "lucide-react";

export const MonotonicQueuePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Monotonic Queue Template</span>
      <span className="ml-2 text-xs text-secondary">
        (Data Structure Technique)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - amortized &nbsp;|&nbsp; Space: O(n) - queue storage
      &nbsp;|&nbsp; Use: Sliding window min/max
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        deque
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Maintain order:</span>{" "}
        Remove elements violating monotonicity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Add element:</span> Push to
        back of queue
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Get min/max:</span> Access
        front of queue
      </span>
    </div>
  </div>
);
