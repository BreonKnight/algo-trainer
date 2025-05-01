import { AlgorithmPattern } from "../../types";

export const treeDPPattern: AlgorithmPattern = {
  title: "Tree DP",
  description:
    "A dynamic programming technique applied to tree structures. It's used to solve problems where the solution for a node depends on the solutions of its children.",
  timeComplexity: "O(n) where n is the number of nodes in the tree",
  spaceComplexity: "O(n)",
  pseudocode: `def tree_dp(root):
    def dfs(node):
        if node is None:
            return (0, 0)
            
        # Initialize values for current node
        include = node.value
        exclude = 0
        
        for child in node.children:
            child_include, child_exclude = dfs(child)
            # If we include current node, we must exclude children
            include += child_exclude
            # If we exclude current node, we can choose to include or exclude children
            exclude += max(child_include, child_exclude)
            
        return (include, exclude)
    
    include, exclude = dfs(root)
    return max(include, exclude)`,
  example: `# Example usage:
tree = {
    "value": 1,
    "children": [
        {
            "value": 2,
            "children": [
                {"value": 4, "children": []},
                {"value": 5, "children": []}
            ]
        },
        {
            "value": 3,
            "children": [
                {"value": 6, "children": []}
            ]
        }
    ]
}

def tree_dp(node):
    if node is None:
        return (0, 0)
    include = node["value"]
    exclude = 0
    for child in node["children"]:
        child_include, child_exclude = tree_dp(child)
        include += child_exclude
        exclude += max(child_include, child_exclude)
    return (include, exclude)

result = max(tree_dp(tree))
print(result)  # Output: 11 (maximum sum of non-adjacent nodes)`,
  implementation: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

def tree_dp(root):
    def dfs(node):
        if node is None:
            return (0, 0)
        include = node.value
        exclude = 0
        for child in node.children:
            child_include, child_exclude = dfs(child)
            include += child_exclude
            exclude += max(child_include, child_exclude)
        return (include, exclude)
    include, exclude = dfs(root)
    return max(include, exclude)`,
  category: "dynamic-programming",
};
