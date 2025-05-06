import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { backtrackingPattern } from "./backtracking";

export const backtrackingPatterns: Partial<Record<string, AlgorithmPattern>> = {
  Backtracking: backtrackingPattern,
};
