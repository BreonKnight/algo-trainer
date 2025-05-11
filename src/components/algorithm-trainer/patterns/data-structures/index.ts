import { bTreePattern } from "@/components/algorithm-trainer/patterns/data-structures/b-tree";
import { circularLinkedListPattern } from "@/components/algorithm-trainer/patterns/data-structures/circular-linked-list";
import { fenwickTreePattern } from "@/components/algorithm-trainer/patterns/data-structures/fenwick-tree";
import { hashTablePattern } from "@/components/algorithm-trainer/patterns/data-structures/hash-table";
import { heapImplementationPattern } from "@/components/algorithm-trainer/patterns/data-structures/heap-implementation";
import { linkedListPattern } from "@/components/algorithm-trainer/patterns/data-structures/linked-list";
import { monotonicQueuePattern } from "@/components/algorithm-trainer/patterns/data-structures/monotonic-queue";
import { monotonicStackPattern } from "@/components/algorithm-trainer/patterns/data-structures/monotonic-stack";
import { queueImplementationPattern } from "@/components/algorithm-trainer/patterns/data-structures/queue-implementation";
import { redBlackTreePattern } from "@/components/algorithm-trainer/patterns/data-structures/red-black-tree";
import { segmentTreePattern } from "@/components/algorithm-trainer/patterns/data-structures/segment-tree";
import { stackImplementationPattern } from "@/components/algorithm-trainer/patterns/data-structures/stack-implementation";
import { triePattern } from "@/components/algorithm-trainer/patterns/data-structures/trie";
import { unionFindPattern } from "@/components/algorithm-trainer/patterns/data-structures/union-find";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/lib/patterns/pattern-utils";
import { fastAndSlowPointersPattern } from "@/components/algorithm-trainer/patterns/data-structures/fast-and-slow-pointers";
import { doublyLinkedListPattern } from "@/components/algorithm-trainer/patterns/data-structures/doubly-linked-list";
import { inorderTraversalPattern } from "@/components/algorithm-trainer/patterns/data-structures/inorder-traversal";
import { sparseTablePattern } from "@/components/algorithm-trainer/patterns/data-structures/sparse-table";

export const dataStructurePatterns = createPatternRecord<AlgorithmPattern>({
  "Monotonic Queue": monotonicQueuePattern,
  "Monotonic Stack": monotonicStackPattern,
  "Heap Implementation": heapImplementationPattern,
  "Hash Table": hashTablePattern,
  "Circular Linked List": circularLinkedListPattern,
  "Linked List": linkedListPattern,
  "Queue Implementation": queueImplementationPattern,
  "Stack Implementation": stackImplementationPattern,
  "Union Find": unionFindPattern,
  "Red-Black Tree": redBlackTreePattern,
  "B Tree": bTreePattern,
  "Binary Indexed Tree": fenwickTreePattern,
  "Fenwick Tree": fenwickTreePattern,
  "Segment Tree": segmentTreePattern,
  Trie: triePattern,
  "Trie Operations": triePattern,
  "Fast and Slow Pointers": fastAndSlowPointersPattern,
  "Doubly Linked List": doublyLinkedListPattern,
  "Inorder Traversal": inorderTraversalPattern,
  "Sparse Table": sparseTablePattern,
});
