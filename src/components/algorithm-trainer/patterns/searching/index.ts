import { binarySearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/binary-search";
import { binarySearchOnAnswerPattern } from "@/src/components/algorithm-trainer/patterns/searching/binary-search-on-answer";
import { exponentialSearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/exponential-search";
import { fibonacciSearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/fibonacci-search";
import { interpolationSearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/interpolation-search";
import { jumpSearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/jump-search";
import { linearSearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/linear-search";
import { quickselectPattern } from "@/src/components/algorithm-trainer/patterns/searching/quickselect";
import { ternarySearchPattern } from "@/src/components/algorithm-trainer/patterns/searching/ternary-search";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

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

export const searchingPatterns: Record<SearchingPatternKey, AlgorithmPattern> = {
  "Binary Search": binarySearchPattern,
  "Linear Search": linearSearchPattern,
  "Binary Search on Answer": binarySearchOnAnswerPattern,
  "Ternary Search": ternarySearchPattern,
  "Jump Search": jumpSearchPattern,
  "Exponential Search": exponentialSearchPattern,
  "Interpolation Search": interpolationSearchPattern,
  Quickselect: quickselectPattern,
  "Fibonacci Search": fibonacciSearchPattern,
};
