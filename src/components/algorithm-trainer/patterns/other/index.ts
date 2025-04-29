import { AlgorithmPattern } from "../../types";
import { nullPattern } from "./null.ts";

type OtherPatternKey = "null";

export const otherPatterns: Record<OtherPatternKey, AlgorithmPattern> = {
  null: nullPattern,

  // other patterns will be added here
};
