import { AlgorithmPattern } from "../../types";
import { insertionSortPattern } from "./insertion-sort";
import { selectionSortPattern } from "./selection-sort";
import { bubbleSortPattern } from "./bubble-sort";
import { heapsortPattern } from "./heap-sort";
import { stackSortPattern } from "./stack-sort";
import { mergeSortPattern } from "./merge-sort";
import { quickSortPattern } from "./quick-sort";
import { radixSortPattern } from "./radix-sort";

type SortingPatternKey =
  | "Quick Sort"
  | "Merge Sort"
  | "Bubble Sort"
  | "Insertion Sort"
  | "Selection Sort"
  | "Heap Sort"
  | "Stack Sort"
  | "Radix Sort";

export const sortingPatterns: Partial<
  Record<SortingPatternKey, AlgorithmPattern>
> = {
  "Quick Sort": quickSortPattern,
  "Merge Sort": mergeSortPattern,
  "Bubble Sort": bubbleSortPattern,
  "Insertion Sort": insertionSortPattern,
  "Selection Sort": selectionSortPattern,
  "Heap Sort": heapsortPattern,
  "Stack Sort": stackSortPattern,
  "Radix Sort": radixSortPattern,
};
