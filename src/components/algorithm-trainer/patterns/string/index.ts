import { AlgorithmPattern } from "../../types";
import { createPatternRecord } from "../../../../lib/patterns/pattern-utils";
import { manachersAlgorithmPattern } from "./manachers-algorithm";
import { knuthMorrisPrattPattern } from "./knuth-morris-pratt";
import { rabinKarpPattern } from "./rabin-karp";
import { stringOperationsPattern } from "./string-operations";
import { zAlgorithmPattern } from "./z-algorithm";
import { suffixArrayPattern } from "./suffix-array";
import { suffixTreePattern } from "./suffix-tree";

export const stringPatterns = createPatternRecord<AlgorithmPattern>({
  "String Operations": stringOperationsPattern,
  "Z Algorithm": zAlgorithmPattern,
  "Manacher's Algorithm": manachersAlgorithmPattern,
  "Knuth-Morris-Pratt": knuthMorrisPrattPattern,
  "Rabin-Karp": rabinKarpPattern,
  "Suffix Array": suffixArrayPattern,
  "Suffix Tree": suffixTreePattern,
});
