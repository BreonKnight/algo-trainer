import { AlgorithmPattern } from "../../types";
import { linear_searchPattern } from "./linear-search";
import { binary_search_on_answerPattern } from "./binary-search-on-answer";
import { binarySearchPattern } from "./binary-search";

type SearchingPatternKey =
  | "Binary Search"
  | "Linear Search"
  | "Binary Search on Answer";

export const searchingPatterns: Record<SearchingPatternKey, AlgorithmPattern> =
  {
    "Binary Search": binarySearchPattern,
    "Linear Search": linear_searchPattern,
    "Binary Search on Answer": binary_search_on_answerPattern,
    // Add other searching patterns here
  };
