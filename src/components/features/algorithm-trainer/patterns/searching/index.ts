import { binarySearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/binary-search";
import { binarySearchOnAnswerPattern } from "@/components/features/algorithm-trainer/patterns/searching/binary-search-on-answer";
import { exponentialSearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/exponential-search";
import { fibonacciSearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/fibonacci-search";
import { interpolationSearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/interpolation-search";
import { jumpSearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/jump-search";
import { linearSearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/linear-search";
import { quickselectPattern } from "@/components/features/algorithm-trainer/patterns/searching/quickselect";
import { ternarySearchPattern } from "@/components/features/algorithm-trainer/patterns/searching/ternary-search";
import { BasePattern, PatternCategory } from "@/lib/patterns/types";

type SearchingPatternKey =
  | "Binary Search"
  | "Linear Search"
  | "Binary Search on Answer"
  | "Ternary Search"
  | "Jump Search"
  | "Exponential Search"
  | "Interpolation Search"
  | "Quickselect"
  | "Fibonacci Search";

export const searchingPatterns: Record<SearchingPatternKey, BasePattern> = {
  "Binary Search": {
    ...binarySearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  "Linear Search": {
    ...linearSearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Easy",
  },
  "Binary Search on Answer": {
    ...binarySearchOnAnswerPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  "Ternary Search": {
    ...ternarySearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  "Jump Search": {
    ...jumpSearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  "Exponential Search": {
    ...exponentialSearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  "Interpolation Search": {
    ...interpolationSearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  Quickselect: {
    ...quickselectPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
  "Fibonacci Search": {
    ...fibonacciSearchPattern,
    category: "Searching" as PatternCategory,
    difficulty: "Medium",
  },
};
