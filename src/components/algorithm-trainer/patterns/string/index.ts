import { AlgorithmPattern, PatternKey } from "../../types";
import { manachersAlgorithmPattern } from "./manachers-algorithm";
import { knuthMorrisPrattPattern } from "./knuth-morris-pratt";
import { rabinKarpPattern } from "./rabin-karp";
import { stringOperationsPattern } from "./string-operations";
import { zAlgorithmPattern } from "./z-algorithm";
import { suffixArrayPattern } from "./suffix-array";
import { suffixTreePattern } from "./suffix-tree";

export const stringPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  "String Operations": stringOperationsPattern,
  "Z Algorithm": zAlgorithmPattern,
  "Manacher's Algorithm": manachersAlgorithmPattern,
  "Knuth-Morris-Pratt": knuthMorrisPrattPattern,
  "Rabin-Karp": rabinKarpPattern,
  "Suffix Array": suffixArrayPattern,
  "Suffix Tree": suffixTreePattern,
};
