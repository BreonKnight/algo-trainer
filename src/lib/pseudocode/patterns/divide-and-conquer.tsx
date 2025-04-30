import { ChevronRight } from "lucide-react";

export const DivideAndConquerPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Divide and Conquer Template</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm Paradigm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - recursive division &nbsp;|&nbsp; Space: O(log n) -
      recursion stack &nbsp;|&nbsp; Use: Breaking problems into smaller
      subproblems
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Divide:</span> Split problem
        into smaller subproblems
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Conquer:</span> Solve
        subproblems recursively
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Merge
        solutions of subproblems
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base case:</span> Handle
        smallest subproblem
      </span>
    </div>
  </div>
);
