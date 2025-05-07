import { knuthMorrisPrattPattern } from "@/components/algorithm-trainer/patterns/string/knuth-morris-pratt";
import { manachersAlgorithmPattern } from "@/components/algorithm-trainer/patterns/string/manachers-algorithm";
import { rabinKarpPattern } from "@/components/algorithm-trainer/patterns/string/rabin-karp";
import { stringOperationsPattern } from "@/components/algorithm-trainer/patterns/string/string-operations";
import { suffixArrayPattern } from "@/components/algorithm-trainer/patterns/string/suffix-array";
import { suffixTreePattern } from "@/components/algorithm-trainer/patterns/string/suffix-tree";
import { zAlgorithmPattern } from "@/components/algorithm-trainer/patterns/string/z-algorithm";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";

export const stringPatterns = createPatternRecord<AlgorithmPattern>({
  "String Operations": stringOperationsPattern,
  "Z Algorithm": zAlgorithmPattern,
  "Manacher's Algorithm": manachersAlgorithmPattern,
  "Knuth-Morris-Pratt": knuthMorrisPrattPattern,
  "Rabin-Karp": rabinKarpPattern,
  "Suffix Array": suffixArrayPattern,
  "Suffix Tree": suffixTreePattern,
});
