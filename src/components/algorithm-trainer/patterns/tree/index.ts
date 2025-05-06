import { AlgorithmPattern } from "../../types";
import { binarySearchTreePattern } from "./binary-search-tree";
import { treePattern } from "./tree";
import { triePattern } from "./trie";
import { heavyLightDecompositionPattern } from "./heavy-light-decomposition";
import { avlTreePattern } from "./avl-tree";
import { lowestCommonAncestorPattern } from "./lowest-common-ancestor";

export const treePatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Binary Search Tree": binarySearchTreePattern,
  "Tree Implementation": treePattern,
  "Trie Operations": triePattern,
  "Heavy Light Decomposition": heavyLightDecompositionPattern,
  "AVL Tree": avlTreePattern,
  "Lowest Common Ancestor": lowestCommonAncestorPattern,
};
