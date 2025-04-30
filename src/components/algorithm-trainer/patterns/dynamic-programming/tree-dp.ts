import { AlgorithmPattern } from "../../types";

export const treeDPPattern: AlgorithmPattern = {
  title: "Tree DP",
  description:
    "A dynamic programming technique applied to tree structures. It's used to solve problems where the solution for a node depends on the solutions of its children.",
  timeComplexity: "O(n) where n is the number of nodes in the tree",
  spaceComplexity: "O(n)",
  pseudocode: `
function treeDP(root):
    def dfs(node):
        if node is None:
            return 0
            
        # Initialize values for current node
        include = node.value
        exclude = 0
        
        for child in node.children:
            child_include, child_exclude = dfs(child)
            # If we include current node, we must exclude children
            include += child_exclude
            # If we exclude current node, we can choose to include or exclude children
            exclude += max(child_include, child_exclude)
            
        return include, exclude
    
    include, exclude = dfs(root)
    return max(include, exclude)
  `,
  example: `
// Example usage:
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ]
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] }
      ]
    }
  ]
};
const result = treeDP(tree);
console.log(result); // Output: 11 (maximum sum of non-adjacent nodes)
  `,
  implementation: `
interface TreeNode {
  value: number;
  children: TreeNode[];
}

function treeDP(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): [number, number] {
    if (!node) {
      return [0, 0];
    }
    
    // Initialize values for current node
    let include = node.value;
    let exclude = 0;
    
    for (const child of node.children) {
      const [childInclude, childExclude] = dfs(child);
      // If we include current node, we must exclude children
      include += childExclude;
      // If we exclude current node, we can choose to include or exclude children
      exclude += Math.max(childInclude, childExclude);
    }
    
    return [include, exclude];
  }
  
  const [include, exclude] = dfs(root);
  return Math.max(include, exclude);
}

// Helper function to build a tree from an array representation
function buildTree(values: number[], children: number[][]): TreeNode | null {
  if (values.length === 0) return null;
  
  const nodes: TreeNode[] = values.map(value => ({
    value,
    children: []
  }));
  
  for (let i = 0; i < nodes.length; i++) {
    for (const childIndex of children[i]) {
      nodes[i].children.push(nodes[childIndex]);
    }
  }
  
  return nodes[0];
}
  `,
  category: "dynamic-programming",
};
