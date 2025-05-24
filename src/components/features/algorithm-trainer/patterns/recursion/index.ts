import { recursionPattern } from "@/components/features/algorithm-trainer/patterns/recursion/recursion";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

export const recursionPatterns: Partial<Record<PatternKey, BasePattern>> = {
  Recursion: {
    ...recursionPattern,
    category: "Recursion" as PatternCategory,
    difficulty: "Medium",
  },
};
