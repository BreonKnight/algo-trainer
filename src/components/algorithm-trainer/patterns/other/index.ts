import { nullPattern } from "@/src/components/algorithm-trainer/patterns/other/null-pattern";
import { testDataPattern } from "@/src/components/algorithm-trainer/patterns/other/test-data";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

type OtherPatternKey = "Null Pattern" | "Test Data";

export const otherPatterns: Record<OtherPatternKey, AlgorithmPattern> = {
  "Null Pattern": nullPattern,
  "Test Data": testDataPattern,

  // other patterns will be added here
};
