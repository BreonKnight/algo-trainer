import { bubbleSortPattern } from "@/components/algorithm-trainer/patterns/sorting/bubble-sort";
import { bucketSortPattern } from "@/components/algorithm-trainer/patterns/sorting/bucket-sort";
import { countingSortPattern } from "@/components/algorithm-trainer/patterns/sorting/counting-sort";
import { heapSortPattern } from "@/components/algorithm-trainer/patterns/sorting/heap-sort";
import { insertionSortPattern } from "@/components/algorithm-trainer/patterns/sorting/insertion-sort";
import { mergeSortPattern } from "@/components/algorithm-trainer/patterns/sorting/merge-sort";
import { quickSortPattern } from "@/components/algorithm-trainer/patterns/sorting/quick-sort";
import { radixSortPattern } from "@/components/algorithm-trainer/patterns/sorting/radix-sort";
import { selectionSortPattern } from "@/components/algorithm-trainer/patterns/sorting/selection-sort";
import { shellSortPattern } from "@/components/algorithm-trainer/patterns/sorting/shell-sort";
import { stackSortPattern } from "@/components/algorithm-trainer/patterns/sorting/stack-sort";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { PatternCategory } from "@/lib/patterns/types";

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
