import { AlgorithmPattern } from "../../types/pattern-types";
import { nullPattern } from "./null-pattern";
import { testDataPattern } from "./test-data";

type OtherPatternKey = "Null Pattern" | "Test Data";

export const otherPatterns: Record<OtherPatternKey, AlgorithmPattern> = {
  "Null Pattern": nullPattern,
  "Test Data": testDataPattern,

  // other patterns will be added here
};
