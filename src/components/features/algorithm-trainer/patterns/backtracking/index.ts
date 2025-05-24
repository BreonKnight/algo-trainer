import { backtrackingPattern } from "@/components/features/algorithm-trainer/patterns/backtracking/backtracking";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

export const backtrackingPatterns: Partial<Record<PatternKey, BasePattern>> = {
  Backtracking: {
    ...backtrackingPattern,
    category: "Backtracking" as PatternCategory,
    difficulty: "Hard",
  },
};
