import { AlgorithmPattern } from "../../types/pattern-types";

export const greedyJobSchedulingPattern: AlgorithmPattern = {
  title: "Greedy Job Scheduling",
  description:
    "A greedy algorithm that schedules jobs to minimize completion time or maximize profit, typically sorting jobs by duration or profit/time ratio.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  category: "Greedy Algorithms",
  pseudocode: `1. Sort jobs by profit/time ratio\n2. Initialize timeline\n3. For each job in sorted order:\n   a. Find earliest possible slot\n   b. If slot found:\n      - Schedule job in that slot\n4. Return schedule`,
  example: `Jobs: [(2,100), (1,19), (2,27), (1,25), (3,15)]
Sorted by profit/time: [(1,19), (2,100), (1,25), (2,27), (3,15)]

Timeline:
t=0: Job 2 (100)
t=2: Job 3 (25)
t=3: Job 1 (19)

Total profit: 144`,
  implementation: `def job_scheduling(jobs):
    # Sort jobs by profit/time ratio
    sorted_jobs = sorted(jobs, key=lambda x: x[1]/x[0], reverse=True)
    
    max_time = sum(job[0] for job in jobs)
    timeline = [False] * max_time
    total_profit = 0
    
    for duration, profit in sorted_jobs:
        # Find latest possible slot
        latest_slot = max_time - duration
        while latest_slot >= 0:
            if not any(timeline[latest_slot:latest_slot+duration]):
                # Schedule job
                for t in range(latest_slot, latest_slot+duration):
                    timeline[t] = True
                total_profit += profit
                break
            latest_slot -= 1
    
    return total_profit`,
};
