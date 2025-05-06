import { AlgorithmPattern } from "../../types/pattern-types";
import { PatternCategory } from "../../../../lib/patterns/types";
import { insertionSortPattern } from "./insertion-sort";
import { selectionSortPattern } from "./selection-sort";
import { bubbleSortPattern } from "./bubble-sort";
import { heapSortPattern } from "./heap-sort";
import { stackSortPattern } from "./stack-sort";
import { mergeSortPattern } from "./merge-sort";
import { quickSortPattern } from "./quick-sort";
import { radixSortPattern } from "./radix-sort";
import { bucketSortPattern } from "./bucket-sort";
import { countingSortPattern } from "./counting-sort";
import { shellSortPattern } from "./shell-sort";

type SortingPatternKey =
  | "Quick Sort"
  | "Merge Sort"
  | "Bubble Sort"
  | "Insertion Sort"
  | "Selection Sort"
  | "Heap Sort"
  | "Stack Sort"
  | "Radix Sort"
  | "Bucket Sort"
  | "Counting Sort"
  | "Shell Sort";

// Ensure all patterns have the correct category type
const patterns = {
  "Quick Sort": { ...quickSortPattern, category: "Sorting" as PatternCategory },
  "Merge Sort": { ...mergeSortPattern, category: "Sorting" as PatternCategory },
  "Bubble Sort": { ...bubbleSortPattern, category: "Sorting" as PatternCategory },
  "Insertion Sort": { ...insertionSortPattern, category: "Sorting" as PatternCategory },
  "Selection Sort": { ...selectionSortPattern, category: "Sorting" as PatternCategory },
  "Heap Sort": { ...heapSortPattern, category: "Sorting" as PatternCategory },
  "Stack Sort": { ...stackSortPattern, category: "Sorting" as PatternCategory },
  "Radix Sort": { ...radixSortPattern, category: "Sorting" as PatternCategory },
  "Bucket Sort": { ...bucketSortPattern, category: "Sorting" as PatternCategory },
  "Counting Sort": { ...countingSortPattern, category: "Sorting" as PatternCategory },
  "Shell Sort": { ...shellSortPattern, category: "Sorting" as PatternCategory },
};

export const sortingPatterns: Partial<Record<SortingPatternKey, AlgorithmPattern>> = patterns;
