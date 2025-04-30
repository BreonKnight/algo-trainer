import { ChevronRight } from "lucide-react";

export const ArticulationPointsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Articulation Points Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) - DFS traversal &nbsp;|&nbsp; Space: O(V) - for visited and
      low arrays &nbsp;|&nbsp; Use: Finding critical nodes in a graph
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        visited, discovery, and low arrays
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">DFS traversal:</span> For
        each unvisited node, perform DFS
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update low values:</span>{" "}
        Track lowest discovery time reachable from subtree
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check conditions:</span>{" "}
        Identify articulation points based on low values
      </span>
    </div>
  </div>
);
