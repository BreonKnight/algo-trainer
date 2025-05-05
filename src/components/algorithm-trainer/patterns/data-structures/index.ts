import { AlgorithmPattern, PatternKey } from "../../types/pattern-types.ts";
import { monotonicQueuePattern } from "./monotonic-queue.ts";
import { monotonicStackPattern } from "./monotonic-stack.ts";
import { heapImplementationPattern } from "./heap-implementation.ts";
import { hashTablePattern } from "./hash-table.ts";
import { circularLinkedListPattern } from "./circular-linked-list.ts";
import { linkedListPattern } from "./linked-list.ts";
import { queueImplementationPattern } from "./queue-implementation.ts";
import { stackImplementationPattern } from "./stack-implementation.ts";
import { unionFindPattern } from "./union-find.ts";
import { redBlackTreePattern } from "./red-black-tree.ts";
import { bTreePattern } from "./b-tree.ts";
import { fenwickTreePattern } from "./fenwick-tree.ts";
import { segmentTreePattern } from "./segment-tree.ts";

export const dataStructurePatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
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
  "Fenwick Tree": fenwickTreePattern,
  "Segment Tree": segmentTreePattern,
};
