import { avlTreePattern } from "@/components/algorithm-trainer/patterns/tree/avl-tree";
import { binarySearchTreePattern } from "@/components/algorithm-trainer/patterns/tree/binary-search-tree";
import { heavyLightDecompositionPattern } from "@/components/algorithm-trainer/patterns/tree/heavy-light-decomposition";
import { lowestCommonAncestorPattern } from "@/components/algorithm-trainer/patterns/tree/lowest-common-ancestor";
import { triePattern } from "@/components/algorithm-trainer/patterns/tree/trie";
import { zigzagTraversalPattern } from "@/components/algorithm-trainer/patterns/tree/zigzag-traversal";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
// import { treePattern } from "@/components/algorithm-trainer/patterns/tree/tree";

export const treePatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Binary Search Tree": binarySearchTreePattern,
  "Trie Operations": triePattern,
  "Heavy Light Decomposition": heavyLightDecompositionPattern,
  "AVL Tree": avlTreePattern,
  "Lowest Common Ancestor": lowestCommonAncestorPattern,
  "Zigzag Traversal": zigzagTraversalPattern,
};
