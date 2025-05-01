import { AlgorithmPattern } from "../../types";
import { binary_search_treePattern } from "./binary-search-tree";
import { treePattern } from "./tree";
import { triePattern } from "./trie";

export const treePatterns: Partial<Record<string, AlgorithmPattern>> = {
  "Binary Search Tree": binary_search_treePattern,
  Tree: treePattern,
  "Trie Operations": triePattern,
  // tree patterns will be added here
};
