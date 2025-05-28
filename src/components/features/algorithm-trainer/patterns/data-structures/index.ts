import { fastAndSlowPointersPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/fast-and-slow-pointers";
import { fenwickTreePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/fenwick-tree";
import { inorderTraversalPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/inorder-traversal";
import { monotonicQueuePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/monotonic-queue";
import { monotonicStackPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/monotonic-stack";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";
import { BasePattern, PatternCategory } from "@/lib/patterns/types";

import { bTreePattern } from "@algo-trainer/shared/data-structures/b-tree";
import { circularLinkedListPattern } from "@algo-trainer/shared/data-structures/circular-linked-list";
import { doublyLinkedListPattern } from "@algo-trainer/shared/data-structures/doubly-linked-list";
import { hashTablePattern } from "@algo-trainer/shared/data-structures/hash-table";
import { heapImplementationPattern } from "@algo-trainer/shared/data-structures/heap";
import { linkedListPattern } from "@algo-trainer/shared/data-structures/linked-list";
import { queueImplementationPattern } from "@algo-trainer/shared/data-structures/queue";
import { redBlackTreePattern } from "@algo-trainer/shared/data-structures/red-black-tree";
import { segmentTreePattern } from "@algo-trainer/shared/data-structures/segment-tree";
import { sparseTablePattern } from "@algo-trainer/shared/data-structures/sparse-table";
import { stackImplementationPattern } from "@algo-trainer/shared/data-structures/stack";
import { triePattern } from "@algo-trainer/shared/data-structures/trie";
import { unionFindPattern } from "@algo-trainer/shared/data-structures/union-find";

export const dataStructurePatterns = createPatternRecord<BasePattern>({
  "Monotonic Queue": {
    ...monotonicQueuePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Monotonic Stack": {
    ...monotonicStackPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Heap Implementation": {
    ...heapImplementationPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Hash Table": {
    ...hashTablePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Circular Linked List": {
    ...circularLinkedListPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Linked List": {
    ...linkedListPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Queue Implementation": {
    ...queueImplementationPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Easy",
  },
  "Stack Implementation": {
    ...stackImplementationPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Easy",
  },
  "Union Find": {
    ...unionFindPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Red-Black Tree": {
    ...redBlackTreePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Hard",
  },
  "B Tree": { ...bTreePattern, category: "Data Structures" as PatternCategory, difficulty: "Hard" },
  "Binary Indexed Tree": {
    ...fenwickTreePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Hard",
  },
  "Fenwick Tree": {
    ...fenwickTreePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Hard",
  },
  "Segment Tree": {
    ...segmentTreePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Hard",
  },
  Trie: { ...triePattern, category: "Data Structures" as PatternCategory, difficulty: "Medium" },
  "Trie Operations": {
    ...triePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Fast and Slow Pointers": {
    ...fastAndSlowPointersPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Doubly Linked List": {
    ...doublyLinkedListPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Inorder Traversal": {
    ...inorderTraversalPattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Medium",
  },
  "Sparse Table": {
    ...sparseTablePattern,
    category: "Data Structures" as PatternCategory,
    difficulty: "Hard",
  },
});
