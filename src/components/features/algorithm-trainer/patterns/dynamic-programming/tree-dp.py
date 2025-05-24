from typing import List, Optional, Tuple

class TreeNode:
    def __init__(self, value: int, children: List['TreeNode'] = None):
        self.value = value
        self.children = children or []

class TreeDPPattern:
    title = "Tree (Dynamic Programming)"
    description = "A dynamic programming technique applied to tree structures. It's used to solve problems where the solution for a node depends on the solutions of its children."
    time_complexity = "O(n) where n is the number of nodes in the tree"
    space_complexity = "O(n)"
    category = "dynamic-programming"

    # Monster Hunter Guide
    monster_hunter_guide = """
    # Monster Hunter Tree (Dynamic Programming) Guide
    # ===========================
    
    # Understanding Territory Control
    # -----------------------------
    # In Monster Hunter, Tree (Dynamic Programming) helps you plan optimal routes through monster territories.
    # Each territory has:
    # - A reward value (materials, resources, etc.)
    # - Connections to other territories
    # - Strategic importance
    
    # Territory Types
    # --------------
    # 1. Base Territories:
    #    - High reward values
    #    - Multiple connections
    #    - Critical for supply lines
    # 
    # 2. Resource Territories:
    #    - Medium reward values
    #    - Limited connections
    #    - Good for gathering
    # 
    # 3. Strategic Territories:
    #    - Variable rewards
    #    - Key connections
    #    - Important for control
    
    # Territory Control Strategy
    # ------------------------
    # 1. Territory Selection:
    #    - Can't control adjacent territories
    #    - Must choose between connected areas
    #    - Balance immediate vs future rewards
    # 
    # 2. Resource Management:
    #    - Plan resource collection routes
    #    - Optimize territory control
    #    - Maintain supply lines
    # 
    # 3. Territory Defense:
    #    - Protect critical territories
    #    - Maintain buffer zones
    #    - Plan fallback positions
    
    # Territory Control Tips
    # --------------------
    # 1. Early Game:
    #    - Focus on resource-rich territories
    #    - Build basic supply lines
    #    - Establish control points
    # 
    # 2. Mid Game:
    #    - Expand to strategic territories
    #    - Optimize resource flow
    #    - Secure key connections
    # 
    # 3. Late Game:
    #    - Control critical territories
    #    - Maintain efficient routes
    #    - Plan emergency supplies
    
    # Territory Control Example
    # -----------------------
    # Territory Structure:
    # Base Camp (50) -> Ancient Forest (100) -> Coral Highlands (90) -> Elder's Recess (120)
    #                -> Wildspire Waste (80) -> Rotten Vale (70) -> Elder's Recess
    # 
    # Optimal Control:
    # 1. Take Base Camp (50)
    # 2. Skip Ancient Forest
    # 3. Take Coral Highlands (90)
    # 4. Skip Elder's Recess
    # 5. Take Wildspire Waste (80)
    # 6. Skip Rotten Vale
    # 
    # Total Rewards: 220 (50 + 90 + 80)
    """

    @staticmethod
    def tree_dp(root: Optional[TreeNode]) -> int:
        """
        Calculate maximum sum of non-adjacent nodes in a tree.
        
        Monster Hunter Context:
        - Like finding the most rewarding path through monster territories
        - Each territory has a reward value
        - Can't take adjacent territories (must skip some)
        - Need to maximize total rewards
        
        Args:
            root: The root node of the tree
            
        Returns:
            Maximum sum achievable by selecting non-adjacent nodes
        """
        def dfs(node: Optional[TreeNode]) -> Tuple[int, int]:
            if not node:
                return 0, 0
                
            # Initialize values for current node
            include = node.value
            exclude = 0
            
            # Process all children
            for child in node.children:
                child_include, child_exclude = dfs(child)
                # If we include current node, we must exclude children
                include += child_exclude
                # If we exclude current node, we can choose to include or exclude children
                exclude += max(child_include, child_exclude)
                
            return include, exclude
        
        include, exclude = dfs(root)
        return max(include, exclude)

    @staticmethod
    def build_tree(values: List[int], children: List[List[int]]) -> Optional[TreeNode]:
        """
        Build a tree from array representations of values and children.
        
        Monster Hunter Context:
        - Like mapping out territory connections
        - Each node represents a territory
        - Children represent connected territories
        - Values represent territory rewards
        
        Args:
            values: List of node values
            children: List of lists containing indices of children for each node
            
        Returns:
            Root node of the constructed tree
        """
        if not values:
            return None
            
        # Create all nodes
        nodes = [TreeNode(value) for value in values]
        
        # Connect children
        for i, child_indices in enumerate(children):
            for child_index in child_indices:
                nodes[i].children.append(nodes[child_index])
                
        return nodes[0]

# Example usage with Monster Hunter context
if __name__ == "__main__":
    # Monster Hunter territory structure
    territories = {
        "Base Camp": 50,
        "Ancient Forest": 100,
        "Wildspire Waste": 80,
        "Coral Highlands": 90,
        "Rotten Vale": 70,
        "Elder's Recess": 120
    }
    
    # Territory connections
    values = list(territories.values())
    children = [
        [1, 2],      # Base Camp -> Ancient Forest, Wildspire Waste
        [3],         # Ancient Forest -> Coral Highlands
        [4],         # Wildspire Waste -> Rotten Vale
        [5],         # Coral Highlands -> Elder's Recess
        [5],         # Rotten Vale -> Elder's Recess
        []           # Elder's Recess (end)
    ]
    
    # Build the territory tree
    root = TreeDPPattern.build_tree(values, children)
    
    # Calculate maximum rewards
    result = TreeDPPattern.tree_dp(root)
    print(f"Maximum territory rewards: {result}")  # Expected output: 340 (50 + 100 + 90 + 120)
    
    # Print Monster Hunter guide
    print(TreeDPPattern.monster_hunter_guide) 