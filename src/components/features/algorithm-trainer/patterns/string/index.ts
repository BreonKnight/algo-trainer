import { knuthMorrisPrattPattern } from "@/components/features/algorithm-trainer/patterns/string/knuth-morris-pratt";
import { manachersAlgorithmPattern } from "@/components/features/algorithm-trainer/patterns/string/manachers-algorithm";
import { rabinKarpPattern } from "@/components/features/algorithm-trainer/patterns/string/rabin-karp";
import { stringHashingPattern } from "@/components/features/algorithm-trainer/patterns/string/string-hashing";
import { stringOperationsPattern } from "@/components/features/algorithm-trainer/patterns/string/string-operations";
import { suffixArrayPattern } from "@/components/features/algorithm-trainer/patterns/string/suffix-array";
import { suffixTreePattern } from "@/components/features/algorithm-trainer/patterns/string/suffix-tree";
import { zAlgorithmPattern } from "@/components/features/algorithm-trainer/patterns/string/z-algorithm";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";
import { BasePattern, PatternCategory } from "@/lib/patterns/types";

export const stringPatterns = createPatternRecord<BasePattern>({
  "String Operations": {
    ...stringOperationsPattern,
    category: "String" as PatternCategory,
    difficulty: "Easy",
  },
  "Z Algorithm": {
    ...zAlgorithmPattern,
    category: "String" as PatternCategory,
    difficulty: "Medium",
  },
  "Manacher's Algorithm": {
    ...manachersAlgorithmPattern,
    category: "String" as PatternCategory,
    difficulty: "Hard",
  },
  "Knuth-Morris-Pratt": {
    ...knuthMorrisPrattPattern,
    category: "String" as PatternCategory,
    difficulty: "Medium",
  },
  "Rabin-Karp": {
    ...rabinKarpPattern,
    category: "String" as PatternCategory,
    difficulty: "Medium",
  },
  "Suffix Array": {
    ...suffixArrayPattern,
    category: "String" as PatternCategory,
    difficulty: "Hard",
  },
  "Suffix Tree": {
    ...suffixTreePattern,
    category: "String" as PatternCategory,
    difficulty: "Hard",
  },
  "String Hashing": {
    ...stringHashingPattern,
    category: "String" as PatternCategory,
    difficulty: "Medium",
  },
});
