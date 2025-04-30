import { ChevronRight } from "lucide-react";

export const DFSBinaryTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">DFS Binary Tree Template</span>
      <span className="ml-2 text-xs text-secondary">(Tree Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - visit all nodes &nbsp;|&nbsp; Space: O(h) - where h is tree
      height &nbsp;|&nbsp; Use: Tree traversal and path finding
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Pre-order:</span> Process
        root, then left, then right
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">In-order:</span> Process
        left, then root, then right
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Post-order:</span> Process
        left, then right, then root
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Path tracking:</span> Track
        path from root to current node
      </span>
    </div>
  </div>
);
