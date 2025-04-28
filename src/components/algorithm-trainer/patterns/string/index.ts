import { AlgorithmPattern } from "../../types";
import { zalgorithmPattern } from "./z-algorithm";

import { manachers_algorithmPattern } from "./manachers-algorithm";

import { knuthmorrisprattPattern } from "./knuth-morris-pratt";

import { rabinkarpPattern } from "./rabin-karp";


export const stringPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Z-Algorithm": zalgorithmPattern,

  "Manacher's Algorithm": manachers_algorithmPattern,

  "Knuth-Morris-Pratt": knuthmorrisprattPattern,

  "Rabin-Karp": rabinkarpPattern,

  // string patterns will be added here
};
