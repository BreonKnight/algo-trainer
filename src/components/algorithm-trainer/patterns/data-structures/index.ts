import { bTreePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/b-tree";
import { circularLinkedListPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/circular-linked-list";
import { fenwickTreePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/fenwick-tree";
import { hashTablePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/hash-table";
import { heapImplementationPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/heap-implementation";
import { linkedListPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/linked-list";
import { monotonicQueuePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/monotonic-queue";
import { monotonicStackPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/monotonic-stack";
import { queueImplementationPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/queue-implementation";
import { redBlackTreePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/red-black-tree";
import { segmentTreePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/segment-tree";
import { stackImplementationPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/stack-implementation";
import { triePattern } from "@/src/components/algorithm-trainer/patterns/data-structures/trie";
import { unionFindPattern } from "@/src/components/algorithm-trainer/patterns/data-structures/union-find";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";
import { createPatternRecord } from "@/src/lib/patterns/pattern-utils";

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
  "Segment Tree": segmentTreePattern,
  Trie: triePattern,
  "Trie Operations": triePattern,
});
