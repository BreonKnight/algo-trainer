import { ChevronRight } from "lucide-react";

export const GraphBridgesPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Graph Bridges Template</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) - DFS traversal &nbsp;|&nbsp; Space: O(V) - for visited and
      discovery arrays &nbsp;|&nbsp; Use: Finding critical edges in a graph
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        discovery time array, low time array, visited array, and parent array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">DFS traversal:</span> For
        each unvisited node, perform DFS and update discovery and low times
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check for bridges:</span> If
        low time of child is greater than discovery time of parent, edge is a
        bridge
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update low times:</span>{" "}
        Propagate low times up the DFS tree
      </span>
    </div>
  </div>
);
