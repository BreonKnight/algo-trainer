import { AlgorithmPattern } from "../../types";
import { manachers_algorithmPattern } from "./manachers-algorithm";
import { knuthmorrisprattPattern } from "./knuth-morris-pratt";
import { rabinkarpPattern } from "./rabin-karp";
import { stringPattern } from "./string";
import { zalgorithmPattern } from "./z-algorithm";

export const stringPatterns: Partial<Record<string, AlgorithmPattern>> = {
  String: stringPattern,
  "Z-Algorithm": zalgorithmPattern,
  "Manacher's Algorithm": manachers_algorithmPattern,
  "Knuth-Morris-Pratt": knuthmorrisprattPattern,
  "Rabin-Karp": rabinkarpPattern,
};
