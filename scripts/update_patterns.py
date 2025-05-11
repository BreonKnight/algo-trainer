import json
import re
from typing import Dict, Any

def generate_description(pattern: Dict[str, Any]) -> str:
    """Generate a description based on the pattern's properties."""
    name = pattern.get('name', '')
    time_complexity = pattern.get('timeComplexity', '')
    use_case = pattern.get('useCase', '')
    
    # Extract the O() notation from time complexity
    complexity_match = re.search(r'O\((.*?)\)', time_complexity)
    complexity = complexity_match.group(1) if complexity_match else ''
    
    # Clean up use case text
    use_case = use_case.strip().replace('\n', ' ').replace('&nbsp;', ' ')
    
    # Generate description
    description = f"{name} is an algorithm with time complexity O({complexity}). "
    description += f"It is primarily used for {use_case.lower()}"
    
    return description

def determine_type(pattern: Dict[str, Any]) -> str:
    """Determine the appropriate type based on the pattern's properties."""
    name = pattern.get('name', '').lower()
    use_case = pattern.get('useCase', '').lower()
    
    # Define type mappings
    type_mappings = {
        'tree': ['tree', 'binary', 'bst', 'traversal'],
        'graph': ['graph', 'dfs', 'bfs', 'shortest path', 'topological'],
        'string': ['string', 'substring', 'pattern', 'matching'],
        'array': ['array', 'sort', 'search', 'two pointer'],
        'dynamic programming': ['dp', 'dynamic programming', 'memoization'],
        'greedy': ['greedy', 'optimal'],
        'divide and conquer': ['divide', 'conquer', 'merge', 'quick'],
        'backtracking': ['backtrack', 'permutation', 'combination'],
        'data structure': ['heap', 'queue', 'stack', 'trie', 'hash'],
        'mathematical': ['prime', 'gcd', 'lcm', 'factorial'],
        'bit manipulation': ['bit', 'xor', 'and', 'or'],
        'algorithm': ['algorithm', 'technique', 'method']
    }
    
    # Check name and use case against type mappings
    for type_name, keywords in type_mappings.items():
        if any(keyword in name or keyword in use_case for keyword in keywords):
            return type_name
    
    return 'Algorithm'  # Default type

def update_patterns():
    # Read the patterns.json file
    with open('src/lib/pseudocode/patterns.json', 'r') as f:
        patterns = json.load(f)
    
    # Update each pattern
    for key, pattern in patterns.items():
        # Generate description if empty
        if not pattern.get('description'):
            pattern['description'] = generate_description(pattern)
        
        # Update type if it's 'n'
        if pattern.get('type') == 'n':
            pattern['type'] = determine_type(pattern)
    
    # Write the updated patterns back to the file
    with open('src/lib/pseudocode/patterns.json', 'w') as f:
        json.dump(patterns, f, indent=2)

if __name__ == '__main__':
    update_patterns() 