import { AlgorithmPattern } from "../../types";
import { divideAndConquerPattern } from "./divide-and-conquer";

export const divideAndConquerPatterns: Partial<
  Record<string, AlgorithmPattern>
> = {
  "Divide And Conquer": divideAndConquerPattern,
};
