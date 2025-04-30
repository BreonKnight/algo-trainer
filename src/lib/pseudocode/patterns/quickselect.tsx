import { ChevronRight } from "lucide-react";

export const QuickselectPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Quickselect Template</span>
      <span className="ml-2 text-xs text-secondary">(Search Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) average, O(n²) worst case &nbsp;|&nbsp; Space: O(1) - in-place
      &nbsp;|&nbsp; Use: Finding k-th smallest/largest element
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Choose pivot:</span> Select
        pivot element (random or median-of-three)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Partition array:</span> Move
        elements less than pivot to left, greater to right
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check position:</span> If
        pivot is at k-th position, return it
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recurse:</span> Recursively
        search in left or right partition based on pivot position
      </span>
    </div>
  </div>
);
