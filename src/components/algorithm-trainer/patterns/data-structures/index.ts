import { AlgorithmPattern } from "../../types/pattern-types";
import { createPatternRecord } from "../../../../lib/patterns/pattern-utils";
import { monotonicQueuePattern } from "./monotonic-queue";
import { monotonicStackPattern } from "./monotonic-stack";
import { heapImplementationPattern } from "./heap-implementation";
import { hashTablePattern } from "./hash-table";
import { circularLinkedListPattern } from "./circular-linked-list";
import { linkedListPattern } from "./linked-list";
import { queueImplementationPattern } from "./queue-implementation";
import { stackImplementationPattern } from "./stack-implementation";
import { unionFindPattern } from "./union-find";
import { redBlackTreePattern } from "./red-black-tree";
import { bTreePattern } from "./b-tree";
import { fenwickTreePattern } from "./fenwick-tree";
import { segmentTreePattern } from "./segment-tree";
import { triePattern } from "./trie";

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
