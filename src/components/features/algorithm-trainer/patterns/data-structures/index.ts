import { bTreePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/b-tree";
import { circularLinkedListPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/circular-linked-list";
import { doublyLinkedListPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/doubly-linked-list";
import { fastAndSlowPointersPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/fast-and-slow-pointers";
import { fenwickTreePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/fenwick-tree";
import { hashTablePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/hash-table";
import { heapImplementationPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/heap-implementation";
import { inorderTraversalPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/inorder-traversal";
import { linkedListPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/linked-list";
import { monotonicQueuePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/monotonic-queue";
import { monotonicStackPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/monotonic-stack";
import { queueImplementationPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/queue-implementation";
import { redBlackTreePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/red-black-tree";
import { segmentTreePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/segment-tree";
import { sparseTablePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/sparse-table";
import { stackImplementationPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/stack-implementation";
import { triePattern } from "@/components/features/algorithm-trainer/patterns/data-structures/trie";
import { unionFindPattern } from "@/components/features/algorithm-trainer/patterns/data-structures/union-find";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";
import { BasePattern, PatternCategory } from "@/lib/patterns/types";

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
