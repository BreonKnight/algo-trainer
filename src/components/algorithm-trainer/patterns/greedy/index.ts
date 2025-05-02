import { AlgorithmPattern } from "../../types";
import { greedy_job_schedulingPattern } from "./greedy-job-scheduling";
import { greedy_fractional_knapsackPattern } from "./greedy-fractional-knapsack";
import { greedy_activity_selectionPattern } from "./greedy-activity-selection";
import { greedyPattern } from "./greedy";
import { greedy_huffman_codingPattern } from "./greedy-huffman-coding";
import { greedy_dijkstraPattern } from "./greedy-dijkstra";

export const greedyPatterns: Partial<Record<string, AlgorithmPattern>> = {
  Greedy: greedyPattern,
  "Greedy Job Scheduling": greedy_job_schedulingPattern,
  "Greedy Fractional Knapsack": greedy_fractional_knapsackPattern,
  "Greedy Activity Selection": greedy_activity_selectionPattern,
  "Greedy Huffman Coding": greedy_huffman_codingPattern,
  "Greedy Dijkstra": greedy_dijkstraPattern,
};
