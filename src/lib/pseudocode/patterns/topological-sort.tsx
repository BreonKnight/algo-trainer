import { ChevronRight } from "lucide-react";

export const TopologicalSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Topological Sort Template</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) - DFS/BFS traversal &nbsp;|&nbsp; Space: O(V) - for visited
      array and stack &nbsp;|&nbsp; Use: Ordering tasks with dependencies
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        visited array and result stack
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
        <span className="font-semibold text-accent">Process neighbors:</span>{" "}
        After visiting all neighbors, push current node to stack
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> Pop
        elements from stack to get topological order
      </span>
    </div>
  </div>
);
