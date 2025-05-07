import { greedyActivitySelectionPattern } from "@/src/components/algorithm-trainer/patterns/greedy/greedy-activity-selection";
import { greedyFractionalKnapsackPattern } from "@/src/components/algorithm-trainer/patterns/greedy/greedy-fractional-knapsack";
import { greedyHuffmanCodingPattern } from "@/src/components/algorithm-trainer/patterns/greedy/greedy-huffman-coding";
import { greedyJobSchedulingPattern } from "@/src/components/algorithm-trainer/patterns/greedy/greedy-job-scheduling";
import {
  AlgorithmPattern,
  PatternKey,
} from "@/src/components/algorithm-trainer/types/pattern-types";

export const greedyPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  "Huffman Coding": greedyHuffmanCodingPattern,
  "Activity Selection": greedyActivitySelectionPattern,
  "Fractional Knapsack": greedyFractionalKnapsackPattern,
  "Job Scheduling": greedyJobSchedulingPattern,
};
