import { nullPattern } from "@/components/features/algorithm-trainer/patterns/other/null-pattern";
import { testDataPattern } from "@/components/features/algorithm-trainer/patterns/other/test-data";
import { BasePattern, PatternCategory } from "@/lib/patterns/types";

type OtherPatternKey = "Null Pattern" | "Test Data";

export const otherPatterns: Record<OtherPatternKey, BasePattern> = {
  "Null Pattern": { ...nullPattern, category: "Other" as PatternCategory, difficulty: "Easy" },
  "Test Data": { ...testDataPattern, category: "Other" as PatternCategory, difficulty: "Easy" },

  // other patterns will be added here
};
