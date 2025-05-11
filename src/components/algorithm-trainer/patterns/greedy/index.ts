import { greedyActivitySelectionPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-activity-selection";
import { greedyFractionalKnapsackPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-fractional-knapsack";
import { greedyHuffmanCodingPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-huffman-coding";
import { greedyJobSchedulingPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-job-scheduling";
import { AlgorithmPattern, PatternKey } from "@/components/algorithm-trainer/types/pattern-types";
import { greedyIntervalSchedulingPattern } from "@/components/algorithm-trainer/patterns/greedy/interverval-scheduling";

export const greedyPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  "Huffman Coding": greedyHuffmanCodingPattern,
  "Activity Selection": greedyActivitySelectionPattern,
  "Fractional Knapsack": greedyFractionalKnapsackPattern,
  "Job Scheduling": greedyJobSchedulingPattern,
  "Interval Scheduling": greedyIntervalSchedulingPattern,
};
