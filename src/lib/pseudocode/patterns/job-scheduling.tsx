import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const JobSchedulingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Job Scheduling</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Schedule
      jobs to minimize completion time
    </div>

    <PseudocodeDisplay
      code={`JOB-SCHEDULING(jobs)
    n ← length[jobs]
    sort jobs by finish time
    let schedule[1‥n] be a new array
    schedule[1] ← jobs[1]
    j ← 1
    for i ← 2 to n
        do if jobs[i].start ≥ jobs[j].finish
            then schedule[i] ← jobs[i]
                j ← i
    return schedule

// Example:
// Input: jobs = [
//   {start: 1, finish: 2, profit: 50},
//   {start: 3, finish: 5, profit: 20},
//   {start: 6, finish: 19, profit: 100},
//   {start: 2, finish: 100, profit: 200}
// ]
// 
// Step 1: Sort by finish time
//         [{1,2,50}, {3,5,20}, {6,19,100}, {2,100,200}]
// 
// Step 2: Select jobs
//         Select job 1 (1-2)
//         Skip job 2 (overlaps)
//         Select job 3 (6-19)
//         Skip job 4 (overlaps)
// 
// Output: [{1,2,50}, {6,19,100}]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Jobs by finish time</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Select: First job</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Iterate: Through remaining jobs</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Add: Non-overlapping jobs to schedule</span>
      </div>
    </div>
  </div>
);
