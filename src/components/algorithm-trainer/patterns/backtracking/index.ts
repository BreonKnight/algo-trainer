import { AlgorithmPattern } from "../../types.ts";
import { backtrackingPattern } from "./backtracking.ts";

export const backtrackingPatterns: Partial<Record<string, AlgorithmPattern>> = {
  Backtracking: backtrackingPattern,
};
