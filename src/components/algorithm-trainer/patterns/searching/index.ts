import { AlgorithmPattern } from "../../types";
import { linearSearchPattern } from "./linear-search";
import { binarySearchOnAnswerPattern } from "./binary-search-on-answer";
import { binarySearchPattern } from "./binary-search";

type SearchingPatternKey =
  | "Binary Search"
  | "Linear Search"
  | "Binary Search on Answer";

export const searchingPatterns: Partial<
  Record<SearchingPatternKey, AlgorithmPattern>
> = {
  "Binary Search": binarySearchPattern,
  "Linear Search": linearSearchPattern,
  "Binary Search on Answer": binarySearchOnAnswerPattern,
  // Add other searching patterns here
};
