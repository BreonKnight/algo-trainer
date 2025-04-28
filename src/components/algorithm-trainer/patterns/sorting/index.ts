import { AlgorithmPattern } from "../../types";
import { insertion_sortPattern } from "./insertion-sort";
import { selection_sortPattern } from "./selection-sort";
import { bubble_sortPattern } from "./bubble-sort";
import { heapsortPattern } from "./heap-sort";
import { stack_sortPattern } from "./stack-sort";
import { merge_sortPattern } from "./merge-sort";
import { quick_sortPattern } from "./quick-sort";

type SortingPatternKey =
  | "Quick Sort"
  | "Merge Sort"
  | "Bubble Sort"
  | "Insertion Sort"
  | "Selection Sort"
  | "Heap Sort"
  | "Stack Sort";

export const sortingPatterns: Partial<
  Record<SortingPatternKey, AlgorithmPattern>
> = {
  "Quick Sort": quick_sortPattern,
  "Merge Sort": merge_sortPattern,
  "Bubble Sort": bubble_sortPattern,
  "Insertion Sort": insertion_sortPattern,
  "Selection Sort": selection_sortPattern,
  "Heap Sort": heapsortPattern,
  "Stack Sort": stack_sortPattern,
};
