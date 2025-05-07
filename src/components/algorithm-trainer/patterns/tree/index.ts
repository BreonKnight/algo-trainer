import { avlTreePattern } from "@/src/components/algorithm-trainer/patterns/tree/avl-tree";
import { binarySearchTreePattern } from "@/src/components/algorithm-trainer/patterns/tree/binary-search-tree";
import { heavyLightDecompositionPattern } from "@/src/components/algorithm-trainer/patterns/tree/heavy-light-decomposition";
import { lowestCommonAncestorPattern } from "@/src/components/algorithm-trainer/patterns/tree/lowest-common-ancestor";
import { triePattern } from "@/src/components/algorithm-trainer/patterns/tree/trie";
import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

// import { treePattern } from "@/src/components/algorithm-trainer/patterns/tree/tree";

export const treePatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Binary Search Tree": binarySearchTreePattern,
  "Trie Operations": triePattern,
  "Heavy Light Decomposition": heavyLightDecompositionPattern,
  "AVL Tree": avlTreePattern,
  "Lowest Common Ancestor": lowestCommonAncestorPattern,
};
