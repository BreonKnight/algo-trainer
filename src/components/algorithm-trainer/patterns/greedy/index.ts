import { AlgorithmPattern } from "../../types";
import { greedyHuffmanCodingPattern } from "./greedy-huffman-coding";
import { greedyActivitySelectionPattern } from "./greedy-activity-selection";
import { greedyDijkstraPattern } from "./greedy-dijkstra";
import { greedyFractionalKnapsackPattern } from "./greedy-fractional-knapsack";
import { greedyJobSchedulingPattern } from "./greedy-job-scheduling";

export const greedyPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Huffman Coding": greedyHuffmanCodingPattern,
  "Activity Selection": greedyActivitySelectionPattern,
  "Dijkstra's Algorithm": greedyDijkstraPattern,
  "Fractional Knapsack": greedyFractionalKnapsackPattern,
  "Job Scheduling": greedyJobSchedulingPattern,
};
