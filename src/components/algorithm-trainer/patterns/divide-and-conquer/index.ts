import { AlgorithmPattern } from "../../types/pattern-types.ts";
import { divideAndConquerPattern } from "./divide-and-conquer.ts";

export const divideAndConquerPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Divide and Conquer": divideAndConquerPattern,
};
