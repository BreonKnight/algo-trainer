import { ChevronRight } from "lucide-react";

export const GreedyDijkstraPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dijkstra's Template</span>
      <span className="ml-2 text-xs text-secondary">(Greedy Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O((V+E)logV) - priority queue &nbsp;|&nbsp; Space: O(V) - distance
      array &nbsp;|&nbsp; Use: Finding shortest paths in weighted graphs
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set all
        distances to infinity except source
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Priority queue:</span> Add
        source node with distance 0
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax edges:</span> Update
        distances for adjacent nodes
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> Array
        of shortest distances
      </span>
    </div>
  </div>
);
