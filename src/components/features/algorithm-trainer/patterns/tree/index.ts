import { avlTreePattern } from "@/components/features/algorithm-trainer/patterns/tree/avl-tree";
import { binarySearchTreePattern } from "@/components/features/algorithm-trainer/patterns/tree/binary-search-tree";
import { heavyLightDecompositionPattern } from "@/components/features/algorithm-trainer/patterns/tree/heavy-light-decomposition";
import { lowestCommonAncestorPattern } from "@/components/features/algorithm-trainer/patterns/tree/lowest-common-ancestor";
import { triePattern } from "@/components/features/algorithm-trainer/patterns/tree/trie";
import { zigzagTraversalPattern } from "@/components/features/algorithm-trainer/patterns/tree/zigzag-traversal";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";
// import { treePattern } from "@/components/algorithm-trainer/patterns/tree/tree";

export const treePatterns: Partial<Record<PatternKey, BasePattern>> = {
  "Binary Search Tree": {
    ...binarySearchTreePattern,
    category: "Tree" as PatternCategory,
    difficulty: "Medium",
  },
  "Trie Operations": { ...triePattern, category: "Tree" as PatternCategory, difficulty: "Medium" },
  "Heavy Light Decomposition": {
    ...heavyLightDecompositionPattern,
    category: "Tree" as PatternCategory,
    difficulty: "Hard",
  },
  "AVL Tree": { ...avlTreePattern, category: "Tree" as PatternCategory, difficulty: "Hard" },
  "Lowest Common Ancestor": {
    ...lowestCommonAncestorPattern,
    category: "Tree" as PatternCategory,
    difficulty: "Medium",
  },
  "Zigzag Traversal": {
    ...zigzagTraversalPattern,
    category: "Tree" as PatternCategory,
    difficulty: "Medium",
  },
};
