import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const GreedyJobSchedulingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Job Scheduling</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Scheduling jobs to maximize
      profit or minimize completion time
    </div>

    <PseudocodeDisplay
      code={`// Standard Job Scheduling
def job_scheduling(jobs):
    # Sort jobs by finish time
    jobs.sort(key=lambda x: x[1])

    selected = []
    last_finish = 0

    for job in jobs:
        start, finish, profit = job
        if start >= last_finish:
            selected.append(job)
            last_finish = finish

    return selected

// Job Scheduling with Deadlines
def job_scheduling_deadlines(jobs):
    # Sort jobs by profit in descending order
    jobs.sort(key=lambda x: x[2], reverse=True)

    max_deadline = max(job[1] for job in jobs)
    schedule = [None] * (max_deadline + 1)

    for job in jobs:
        start, deadline, profit = job
        # Find latest available slot
        for slot in range(deadline, 0, -1):
            if schedule[slot] is None:
                schedule[slot] = job
                break

    return [job for job in schedule if job is not None]

// Job Scheduling with Weights
def job_scheduling_weights(jobs):
    # Sort jobs by profit/weight ratio
    jobs.sort(key=lambda x: x[2]/x[1], reverse=True)

    current_time = 0
    total_profit = 0

    for job in jobs:
        duration, weight, profit = job
        current_time += duration
        total_profit += profit

    return total_profit

# Examples:

# Standard Job Scheduling
# Input:
# jobs = [
#     (1, 3, 5),  # (start, finish, profit)
#     (2, 5, 6),
#     (4, 6, 5),
#     (6, 7, 4),
#     (5, 8, 11)
# ]
# Output:
# selected = [(1, 3, 5), (4, 6, 5), (6, 7, 4)]
# Total profit: 14

# Job Scheduling with Deadlines
# Input:
# jobs = [
#     (1, 2, 100),  # (duration, deadline, profit)
#     (1, 1, 19),
#     (2, 2, 27),
#     (1, 1, 25),
#     (3, 1, 15)
# ]
# Output:
# schedule = [(1, 2, 100), (1, 1, 25)]
# Total profit: 125

# Job Scheduling with Weights
# Input:
# jobs = [
#     (2, 1, 100),  # (duration, weight, profit)
#     (1, 1, 19),
#     (2, 1, 27),
#     (1, 1, 25),
#     (3, 1, 15)
# ]
# Output:
# total_profit = 186`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Jobs by finish time, profit, or profit/weight ratio</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Select: Jobs that don't conflict with previous selections</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Schedule or profit based on selected jobs</span>
      </div>
    </div>
  </div>
);
