import { ChevronRight } from "lucide-react";

export const KruskalsAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Kruskal's Algorithm Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log E) - where E is edges &nbsp;|&nbsp; Space: O(V) - for
      disjoint set &nbsp;|&nbsp; Use: Finding minimum spanning tree
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Sort edges by
        weight
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Add edges
        that don't create cycles
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return
        minimum spanning tree
      </span>
    </div>
  </div>
);
