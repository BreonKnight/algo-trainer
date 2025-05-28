import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const treePattern: AlgorithmPattern = {
  title: "Tree Implementation",
  description:
    "A pattern for implementing and manipulating tree data structures. Trees are hierarchical data structures with nodes connected by edges.",
  timeComplexity:
    "Varies by algorithm, typically O(n) for traversal algorithms where n is the number of nodes",
  spaceComplexity:
    "Varies by algorithm, typically O(h) for recursive algorithms where h is the height of the tree",
  pseudocode: `1. Define the tree node structure (value, left child, right child)\n2. Choose the appropriate tree algorithm based on the problem:\n   a. Traversal algorithms (inorder, preorder, postorder) for visiting all nodes\n   b. Tree construction algorithms for building trees from various inputs\n   c. Tree manipulation algorithms for modifying tree structure\n   d. Tree property algorithms for checking properties like height, balance, etc.\n3. Implement the chosen algorithm\n4. Analyze the time and space complexity of the algorithm`,
  example: `Tree Structure:\n     1\n   /   \\\n  2     3\n / \\   / \\\n4   5 6   7\n\nTree Traversals:\n\n1. Inorder Traversal (Left, Root, Right):\n   - Traverse left subtree\n   - Visit root\n   - Traverse right subtree\n   - Result: 4, 2, 5, 1, 6, 3, 7\n\n2. Preorder Traversal (Root, Left, Right):\n   - Visit root\n   - Traverse left subtree\n   - Traverse right subtree\n   - Result: 1, 2, 4, 5, 3, 6, 7\n\n3. Postorder Traversal (Left, Right, Root):\n   - Traverse left subtree\n   - Traverse right subtree\n   - Visit root\n   - Result: 4, 5, 2, 6, 7, 3, 1\n\n4. Level Order Traversal (BFS):\n   - Visit nodes level by level\n   - Result: 1, 2, 3, 4, 5, 6, 7`,
  implementation: `# Tree implementation will be added here`,
  category: "Data Structure",
};
