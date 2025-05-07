import { recursionPattern } from "@/src/components/algorithm-trainer/patterns/recursion/recursion";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const recursionPatterns: Partial<Record<string, AlgorithmPattern>> = {
  Recursion: recursionPattern,
};
