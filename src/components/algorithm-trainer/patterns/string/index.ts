import { AlgorithmPattern } from "../../types";
import { manachers_algorithmPattern } from "./manachers-algorithm";
import { knuthmorrisprattPattern } from "./knuth-morris-pratt";
import { rabinkarpPattern } from "./rabin-karp";
import { stringPattern } from "./string";
import { zalgorithmPattern } from "./z-algorithm";
import { suffixArrayPattern } from "./suffix-array";
import { suffixTreePattern } from "./suffix-tree";

export const stringPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "String Operations": stringPattern,
  "Z Algorithm": zalgorithmPattern,
  "Manacher's Algorithm": manachers_algorithmPattern,
  "KMP Algorithm": knuthmorrisprattPattern,
  "Rabin Karp": rabinkarpPattern,
  "Suffix Array": suffixArrayPattern,
  "Suffix Tree": suffixTreePattern,
};
