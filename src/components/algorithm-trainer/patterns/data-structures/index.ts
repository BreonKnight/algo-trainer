import { AlgorithmPattern } from "../../types";
import { monotonic_queuePattern } from "./monotonic-queue";

import { monotonic_stackPattern } from "./monotonic-stack";

import { heap_implementationPattern } from "./heap-implementation";

import { hash_tablePattern } from "./hash-table";

import { circular_linked_listPattern } from "./circular-linked-list";

import { linked_listPattern } from "./linked-list";

import { queue_implementationPattern } from "./queue-implementation";

import { stack_implementationPattern } from "./stack-implementation";


export const data_structuresPatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Monotonic Queue": monotonic_queuePattern,

  "Monotonic Stack": monotonic_stackPattern,

  "Heap Implementation": heap_implementationPattern,

  "Hash Table": hash_tablePattern,

  "Circular Linked List": circular_linked_listPattern,

  "Linked List": linked_listPattern,

  "Queue Implementation": queue_implementationPattern,

  "Stack Implementation": stack_implementationPattern,

  // data-structures patterns will be added here
};
