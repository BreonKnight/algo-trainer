import { greedyPattern } from "@/components/features/algorithm-trainer/patterns/greedy/greedy";
import { greedyActivitySelectionPattern } from "@/components/features/algorithm-trainer/patterns/greedy/greedy-activity-selection";
import { greedyFractionalKnapsackPattern } from "@/components/features/algorithm-trainer/patterns/greedy/greedy-fractional-knapsack";
import { greedyHuffmanCodingPattern } from "@/components/features/algorithm-trainer/patterns/greedy/greedy-huffman-coding";
import { greedyJobSchedulingPattern } from "@/components/features/algorithm-trainer/patterns/greedy/greedy-job-scheduling";
import { greedyIntervalSchedulingPattern } from "@/components/features/algorithm-trainer/patterns/greedy/interverval-scheduling";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

export const greedyPatterns: Partial<Record<PatternKey, BasePattern>> = {
  Greedy: { ...greedyPattern, category: "Greedy" as PatternCategory, difficulty: "Medium" },
  "Huffman Coding": {
    ...greedyHuffmanCodingPattern,
    category: "Greedy" as PatternCategory,
    difficulty: "Hard",
  },
  "Activity Selection": {
    ...greedyActivitySelectionPattern,
    category: "Greedy" as PatternCategory,
    difficulty: "Medium",
  },
  "Fractional Knapsack": {
    ...greedyFractionalKnapsackPattern,
    category: "Greedy" as PatternCategory,
    difficulty: "Medium",
  },
  "Job Scheduling": {
    ...greedyJobSchedulingPattern,
    category: "Greedy" as PatternCategory,
    difficulty: "Medium",
  },
  "Interval Scheduling": {
    ...greedyIntervalSchedulingPattern,
    category: "Greedy" as PatternCategory,
    difficulty: "Medium",
  },
};
