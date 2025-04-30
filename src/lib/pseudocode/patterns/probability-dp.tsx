import { ChevronRight } from "lucide-react";

export const ProbabilityDPPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Probability DP Template</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm Pattern)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - depends on implementation &nbsp;|&nbsp;
      Space: O(n) - depends on implementation &nbsp;|&nbsp;
      Use: Probability DP problems
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up data structures
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Implement Probability DP logic
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return result
      </span>
    </div>
  </div>
);