import { ChevronRight } from "lucide-react";

export const AStarSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">A* Search Template</span>
      <span className="ml-2 text-xs text-secondary">
        (Pathfinding Algorithm)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O((V + E) * log V) - where V is vertices and E is edges
      &nbsp;|&nbsp; Space: O(V) - for priority queue &nbsp;|&nbsp; Use: Finding
      shortest path with heuristics
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        priority queue, visited set, and distance map
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Use
        heuristic function to estimate remaining distance
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return
        shortest path found
      </span>
    </div>
  </div>
);
