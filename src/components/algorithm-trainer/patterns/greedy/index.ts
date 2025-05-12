import { greedyPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy";
import { greedyActivitySelectionPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-activity-selection";
import { greedyFractionalKnapsackPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-fractional-knapsack";
import { greedyHuffmanCodingPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-huffman-coding";
import { greedyJobSchedulingPattern } from "@/components/algorithm-trainer/patterns/greedy/greedy-job-scheduling";
import { greedyIntervalSchedulingPattern } from "@/components/algorithm-trainer/patterns/greedy/interverval-scheduling";
import { AlgorithmPattern, PatternKey } from "@/components/algorithm-trainer/types/pattern-types";

export const greedyPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  Greedy: greedyPattern,
  "Huffman Coding": greedyHuffmanCodingPattern,
  "Activity Selection": greedyActivitySelectionPattern,
  "Fractional Knapsack": greedyFractionalKnapsackPattern,
  "Job Scheduling": greedyJobSchedulingPattern,
  "Interval Scheduling": greedyIntervalSchedulingPattern,
};
