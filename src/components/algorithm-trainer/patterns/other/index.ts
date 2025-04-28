import { AlgorithmPattern } from "../../types";
import { nullPattern } from "./null";


export const otherPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "null": nullPattern,

  // other patterns will be added here
};
