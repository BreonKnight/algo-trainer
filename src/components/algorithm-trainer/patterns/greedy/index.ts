import { AlgorithmPattern } from "../../types";
import { greedy_job_schedulingPattern } from "./greedy-job-scheduling";

import { greedy_fractional_knapsackPattern } from "./greedy-fractional-knapsack";

import { greedy_activity_selectionPattern } from "./greedy-activity-selection";


export const greedyPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Greedy Job Scheduling": greedy_job_schedulingPattern,

  "Greedy Fractional Knapsack": greedy_fractional_knapsackPattern,

  "Greedy Activity Selection": greedy_activity_selectionPattern,

  // greedy patterns will be added here
};
