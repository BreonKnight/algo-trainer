import { bubbleSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/bubble-sort";
import { bucketSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/bucket-sort";
import { countingSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/counting-sort";
import { heapSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/heap-sort";
import { insertionSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/insertion-sort";
import { mergeSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/merge-sort";
import { quickSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/quick-sort";
import { radixSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/radix-sort";
import { selectionSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/selection-sort";
import { stackSortPattern } from "@/components/features/algorithm-trainer/patterns/sorting/stack-sort";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

// Ensure all patterns have the correct category type
export const sortingPatterns: Partial<Record<PatternKey, BasePattern>> = {
  "Quick Sort": {
    ...quickSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Medium",
  },
  "Merge Sort": {
    ...mergeSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Medium",
  },
  "Bubble Sort": {
    ...bubbleSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Easy",
  },
  "Insertion Sort": {
    ...insertionSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Easy",
  },
  "Selection Sort": {
    ...selectionSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Easy",
  },
  "Heap Sort": { ...heapSortPattern, category: "Sorting" as PatternCategory, difficulty: "Medium" },
  "Stack Sort": {
    ...stackSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Medium",
  },
  "Radix Sort": {
    ...radixSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Medium",
  },
  "Bucket Sort": {
    ...bucketSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Medium",
  },
  "Counting Sort": {
    ...countingSortPattern,
    category: "Sorting" as PatternCategory,
    difficulty: "Medium",
  },
};
