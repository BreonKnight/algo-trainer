import { AlgorithmPattern } from "../../types";
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

type DataStructurePatternKey =
  | "Monotonic Queue"
  | "Monotonic Stack"
  | "Heap Implementation"
  | "Hash Table"
  | "Circular Linked List"
  | "Linked List"
  | "Queue Implementation"
  | "Stack Implementation"
  | "Union Find"
  | "Red-Black Tree";

export const dataStructurePatterns: Partial<
  Record<DataStructurePatternKey, AlgorithmPattern>
> = {
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
};
