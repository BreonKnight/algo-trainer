import { knuthMorrisPrattPattern } from "@/src/components/algorithm-trainer/patterns/string/knuth-morris-pratt";
import { manachersAlgorithmPattern } from "@/src/components/algorithm-trainer/patterns/string/manachers-algorithm";
import { rabinKarpPattern } from "@/src/components/algorithm-trainer/patterns/string/rabin-karp";
import { stringOperationsPattern } from "@/src/components/algorithm-trainer/patterns/string/string-operations";
import { suffixArrayPattern } from "@/src/components/algorithm-trainer/patterns/string/suffix-array";
import { suffixTreePattern } from "@/src/components/algorithm-trainer/patterns/string/suffix-tree";
import { zAlgorithmPattern } from "@/src/components/algorithm-trainer/patterns/string/z-algorithm";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/src/lib/patterns/pattern-utils";

export const stringPatterns = createPatternRecord<AlgorithmPattern>({
  "String Operations": stringOperationsPattern,
  "Z Algorithm": zAlgorithmPattern,
  "Manacher's Algorithm": manachersAlgorithmPattern,
  "Knuth-Morris-Pratt": knuthMorrisPrattPattern,
  "Rabin-Karp": rabinKarpPattern,
  "Suffix Array": suffixArrayPattern,
  "Suffix Tree": suffixTreePattern,
});
