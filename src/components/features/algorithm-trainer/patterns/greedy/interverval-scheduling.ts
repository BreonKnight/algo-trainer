import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const greedyIntervalSchedulingPattern: AlgorithmPattern = {
  title: "Interval Scheduling",
  description:
    "A greedy algorithm that schedules non-overlapping intervals to maximize the number of activities that can be performed. The key insight is to sort intervals by end time and greedily select non-overlapping intervals.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  category: "greedy",
  pseudocode: `1. Sort intervals by end time\n2. Initialize empty schedule\n3. For each interval in sorted order:\n   a. If interval doesn't overlap with last scheduled interval:\n      - Add to schedule\n4. Return schedule`,
  example: `Intervals: [(1,4), (2,6), (3,8), (5,7), (6,9)]
Sorted by end time: [(1,4), (2,6), (5,7), (3,8), (6,9)]

Schedule:
(1,4)
(5,7)

Total intervals scheduled: 2`,
  implementation: `def interval_scheduling(intervals):
    # Sort intervals by end time
    sorted_intervals = sorted(intervals, key=lambda x: x[1])
    
    schedule = []
    last_end = 0
    
    for start, end in sorted_intervals:
        if start >= last_end:
            schedule.append((start, end))
            last_end = end
    
    return schedule`,
};
