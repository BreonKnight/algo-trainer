import { AlgorithmPattern } from "../../types/pattern-types";
import { linearSearchPattern } from "./linear-search";
import { binarySearchOnAnswerPattern } from "./binary-search-on-answer";
import { binarySearchPattern } from "./binary-search";
import { ternarySearchPattern } from "./ternary-search";
import { jumpSearchPattern } from "./jump-search";
import { exponentialSearchPattern } from "./exponential-search";
import { interpolationSearchPattern } from "./interpolation-search";
import { quickselectPattern } from "./quickselect";
import { fibonacciSearchPattern } from "./fibonacci-search";

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
