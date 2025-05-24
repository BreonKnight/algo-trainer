import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

import { divideAndConquerPattern } from "./divide-and-conquer";

export const divideAndConquerPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Divide and Conquer": divideAndConquerPattern,
};
