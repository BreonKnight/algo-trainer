import { ChevronRight } from "lucide-react";

export const GreedyJobSchedulingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Job Scheduling Template</span>
      <span className="ml-2 text-xs text-secondary">(Greedy Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - sorting jobs &nbsp;|&nbsp; Space: O(n) - result array
      &nbsp;|&nbsp; Use: Scheduling jobs with deadlines
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort jobs:</span> By profit
        in descending order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create
        result array and slot array
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Schedule jobs:</span> Assign
        jobs to latest possible slots
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> Array
        of scheduled jobs
      </span>
    </div>
  </div>
);
