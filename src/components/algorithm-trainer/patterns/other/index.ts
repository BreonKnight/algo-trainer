import { AlgorithmPattern } from "../../types";
import { nullPattern } from "./null.ts";
import { testDataPattern } from "./test-data";

type OtherPatternKey = "null" | "Test Data";

export const otherPatterns: Record<OtherPatternKey, AlgorithmPattern> = {
  null: nullPattern,
  "Test Data": testDataPattern,

  // other patterns will be added here
};
