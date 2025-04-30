import { ChevronRight } from "lucide-react";

export const DynamicProgrammingPatternTemplate = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Dynamic Programming Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Algorithm Paradigm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - memoized computation &nbsp;|&nbsp; Space: O(n) - memoization
      table &nbsp;|&nbsp; Use: Solving problems with overlapping subproblems
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Define state:</span>{" "}
        Identify subproblems and their dependencies
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set base
        cases and initial values
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recurrence:</span> Define
        how to compute each state
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute:</span> Fill DP
        table in correct order
      </span>
    </div>
  </div>
);
