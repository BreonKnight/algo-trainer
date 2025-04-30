import { ChevronRight } from "lucide-react";

export const PrimsAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prim's Algorithm Template</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(E log V) - where E is edges and V is vertices &nbsp;|&nbsp; Space:
      O(V) - for priority queue &nbsp;|&nbsp; Use: Finding minimum spanning tree
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Start
        with any vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Add minimum
        weight edge to unvisited vertex
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
