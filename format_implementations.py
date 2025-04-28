import os
import re
from pathlib import Path
import subprocess
import json

def extract_python_code(text):
    """Extract Python code from implementation strings."""
    # Match code between backticks
    pattern = r'implementation: `(.*?)`'
    matches = re.finditer(pattern, text, re.DOTALL)
    return [match.group(1) for match in matches]

def format_python_code(code):
    """Format Python code using black."""
    try:
        # Create a temporary file to store the code
        temp_file = Path('temp_code.py')
        with open(temp_file, 'w', encoding='utf-8') as f:
            f.write(code)
        
        # Run black formatter on the file
        result = subprocess.run(
            ['black', '--quiet', '--line-length', '88', str(temp_file)],
            capture_output=True,
            text=True
        )
        
        # Read the formatted code
        with open(temp_file, 'r', encoding='utf-8') as f:
            formatted_code = f.read()
        
        # Clean up
        temp_file.unlink()
        
        return formatted_code
    except Exception as e:
        print(f"Error formatting code: {e}")
        return code

def update_category_colors(content):
    """Update category colors in PatternCard component."""
    # Define a consistent color mapping for categories
    category_colors = {
        "Sorting": "text-accent",
        "Searching": "text-accent2",
        "Graph Algorithms": "text-accent2",
        "String Algorithms": "text-accent3",
        "Data Structures": "text-accent",
        "Dynamic Programming": "text-accent",
        "Techniques": "text-accent3",
        "Other": "text-secondary",
        "Recursion": "text-accent2",
        "Divide and Conquer": "text-accent2",
        "Sorting Algorithms": "text-accent",
        "Search Algorithms": "text-accent2",
        "Greedy Algorithms": "text-accent3",
        "Tree Algorithms": "text-accent",
        "Array Techniques": "text-accent2",
        "Matrix Operations": "text-accent3",
        "Other Algorithms": "text-secondary"
    }
    
    # Find the getCategoryColor function
    pattern = r'const getCategoryColor = \(category: string\): string => \{([^}]*)\}'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        # Replace the function with our updated version
        new_function = """const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    Sorting: "text-accent",
    Searching: "text-accent2",
    "Graph Algorithms": "text-accent2",
    "String Algorithms": "text-accent3",
    "Data Structures": "text-accent",
    "Dynamic Programming": "text-accent",
    Techniques: "text-accent3",
    Other: "text-secondary",
    Recursion: "text-accent2",
    "Divide and Conquer": "text-accent2",
    "Sorting Algorithms": "text-accent",
    "Search Algorithms": "text-accent2",
    "Greedy Algorithms": "text-accent3",
    "Tree Algorithms": "text-accent",
    "Array Techniques": "text-accent2",
    "Matrix Operations": "text-accent3",
    "Other Algorithms": "text-secondary"
  };
  return colors[category] || colors["Other"];
};"""
        
        content = content.replace(match.group(0), new_function)
        print("Updated category colors in PatternCard component")
    
    return content

def process_file(file_path):
    """Process a single file and format its Python implementations."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract Python implementations
        implementations = extract_python_code(content)
        
        # Update category colors if this is the PatternCard component
        if "PatternCard.tsx" in str(file_path):
            content = update_category_colors(content)
        
        if not implementations:
            return
        
        # Format each implementation
        formatted_implementations = []
        for impl in implementations:
            formatted = format_python_code(impl)
            formatted_implementations.append(formatted)
        
        # Replace original implementations with formatted ones
        for orig, formatted in zip(implementations, formatted_implementations):
            # Escape backticks and newlines for replacement
            orig_escaped = orig.replace('`', '\\`').replace('\n', '\\n')
            formatted_escaped = formatted.replace('`', '\\`').replace('\n', '\\n')
            
            # Replace in content
            content = content.replace(
                f'implementation: `{orig_escaped}`',
                f'implementation: `{formatted_escaped}`'
            )
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Formatted implementations in {file_path}")
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")

def main():
    # Find all TypeScript files that might contain Python implementations
    ts_files = Path('src').rglob('*.ts')
    tsx_files = Path('src').rglob('*.tsx')
    
    for file_path in list(ts_files) + list(tsx_files):
        process_file(file_path)

if __name__ == '__main__':
    main() 