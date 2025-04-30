import { ChevronRight } from "lucide-react";

export const BellmanFordPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bellman Ford Template</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(VE) - where V is vertices and E is edges &nbsp;|&nbsp; Space: O(V)
      - for distance array &nbsp;|&nbsp; Use: Finding shortest paths with
      negative weights
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up
        distance array with infinity except source
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Relax all
        edges V-1 times
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Detect
        negative cycles
      </span>
    </div>
  </div>
);
