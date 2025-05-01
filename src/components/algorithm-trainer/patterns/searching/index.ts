import { AlgorithmPattern } from "../../types";
import { linearSearchPattern } from "./linear-search";
import { binarySearchOnAnswerPattern } from "./binary-search-on-answer";
import { binarySearchPattern } from "./binary-search";
import { fibonacciSearchPattern } from "./fibonacci-search";
import { ternarySearchPattern } from "./ternary-search";
import { jumpSearchPattern } from "./jump-search";
import { exponentialSearchPattern } from "./exponential-search";
import { interpolationSearchPattern } from "./interpolation-search";
//import { aStarPattern } from "./astar-search";

type SearchingPatternKey =
  | "Binary Search"
  | "Linear Search"
  | "Binary Search on Answer"
  | "Fibonacci Search"
  | "Ternary Search"
  | "Jump Search"
  | "Exponential Search"
  | "Interpolation Search";

export const searchingPatterns: Record<SearchingPatternKey, AlgorithmPattern> =
  {
    "Binary Search": binarySearchPattern,
    "Linear Search": linearSearchPattern,
    "Binary Search on Answer": binarySearchOnAnswerPattern,
    "Fibonacci Search": fibonacciSearchPattern,
    "Ternary Search": ternarySearchPattern,
    "Jump Search": jumpSearchPattern,
    "Exponential Search": exponentialSearchPattern,
    "Interpolation Search": interpolationSearchPattern,
    //"A* Search": aStarPattern,

    // Add other searching patterns here
  };
