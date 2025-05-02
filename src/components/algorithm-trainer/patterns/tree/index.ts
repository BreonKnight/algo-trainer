import { AlgorithmPattern } from "../../types";
import { binary_search_treePattern } from "./binary-search-tree";
import { treePattern } from "./tree";
import { triePattern } from "./trie";
import { heavyLightDecompositionPattern } from "./heavy-light-decomposition";
import { avlTreePattern } from "./avl-tree";

export const treePatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Binary Search Tree": binary_search_treePattern,
  Tree: treePattern,
  "Trie Operations": triePattern,
  "Heavy Light Decomposition": heavyLightDecompositionPattern,
  "AVL Tree": avlTreePattern,
};
