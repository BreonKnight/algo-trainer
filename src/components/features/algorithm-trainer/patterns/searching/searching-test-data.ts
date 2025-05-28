import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const searchingTestDataPattern: AlgorithmPattern = {
  title: "Searching Test Data",
  description:
    "A collection of test data and test cases for searching algorithms, including various array configurations and scenarios.",
  timeComplexity: "O(1) for test data generation",
  spaceComplexity: "O(n) where n is the number of test cases",
  pseudocode: `function generateTestData():
    # Basic test cases
    basic_arrays = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],  # Small sorted array
        [1, 3, 5, 7, 9, 11, 13, 15],  # Small sorted array with gaps
        [2, 4, 6, 8, 10, 12, 14, 16],  # Small sorted array with even numbers
        [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]  # Array for Fibonacci Search
    ]
    
    # Large test cases
    large_arrays = [
        [i for i in range(1, 1001)],  # Large sorted array
        [i for i in range(1, 1001, 2)],  # Large sorted array with gaps
        [i for i in range(2, 1001, 2)],  # Large sorted array with even numbers
        [i * 10 for i in range(1, 1001)]  # Large array with gaps of 10
    ]
    
    # Edge cases
    edge_arrays = [
        [],  # Empty array
        [1],  # Single element
        [1, 1, 1, 1, 1],  # All elements same
        [1, 2, 3, 4, 5, 5, 5, 6, 7, 8],  # Duplicate elements
        [10]  # Single element for Fibonacci Search
    ]
    
    # Target values for testing
    targets = {
        'exists': [5, 500, 1, 8, 85],  # Added 85 for Fibonacci Search
        'not_exists': [0, 1001, -1, 10, 99],  # Added 99 for Fibonacci Search
        'edge': [1, 1000, 5, 8, 10]  # Added 10 for Fibonacci Search
    }
    
    return {
        basic: basic_arrays,
        large: large_arrays,
        edge: edge_arrays,
        targets: targets
    }`,
  example: `# Example usage:
test_data = generateTestData()
print(test_data.basic[0])     # [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(test_data.large[0][:5]) # [1, 2, 3, 4, 5]
print(test_data.edge[0])      # []
print(test_data.targets['exists'][0])  # 5`,
  implementation: `from typing import List, Dict, Any

def generateTestData() -> Dict[str, Any]:
    """
    Generate test data for searching algorithms.
    
    Returns:
        Dictionary containing various test arrays and target values
    """
    # Basic test cases
    basic_arrays = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],  # Small sorted array
        [1, 3, 5, 7, 9, 11, 13, 15],  # Small sorted array with gaps
        [2, 4, 6, 8, 10, 12, 14, 16],  # Small sorted array with even numbers
        [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]  # Array for Fibonacci Search
    ]
    
    # Large test cases
    large_arrays = [
        [i for i in range(1, 1001)],  # Large sorted array
        [i for i in range(1, 1001, 2)],  # Large sorted array with gaps
        [i for i in range(2, 1001, 2)],  # Large sorted array with even numbers
        [i * 10 for i in range(1, 1001)]  # Large array with gaps of 10
    ]
    
    # Edge cases
    edge_arrays = [
        [],  # Empty array
        [1],  # Single element
        [1, 1, 1, 1, 1],  # All elements same
        [1, 2, 3, 4, 5, 5, 5, 6, 7, 8],  # Duplicate elements
        [10]  # Single element for Fibonacci Search
    ]
    
    # Target values for testing
    targets = {
        'exists': [5, 500, 1, 8, 85],  # Added 85 for Fibonacci Search
        'not_exists': [0, 1001, -1, 10, 99],  # Added 99 for Fibonacci Search
        'edge': [1, 1000, 5, 8, 10]  # Added 10 for Fibonacci Search
    }
    
    return {
        'basic': basic_arrays,
        'large': large_arrays,
        'edge': edge_arrays,
        'targets': targets
    }

def generateRandomTestData(size: int) -> Dict[str, Any]:
    """
    Generate random test data for searching algorithms.
    
    Args:
        size: Size of the arrays to generate
    
    Returns:
        Dictionary containing random test arrays and target values
    """
    import random
    
    # Generate random sorted array
    arr = sorted([random.randint(1, 1000) for _ in range(size)])
    
    # Generate random target that exists in array
    existing_target = random.choice(arr)
    
    # Generate random target that doesn't exist in array
    non_existing_target = random.randint(1001, 2000)
    
    return {
        'array': arr,
        'existing_target': existing_target,
        'non_existing_target': non_existing_target
    }

def validateTestData(data: Dict[str, Any]) -> bool:
    """
    Validate the generated test data.
    
    Args:
        data: Test data to validate
    
    Returns:
        True if data is valid, False otherwise
    """
    # Check basic arrays
    for arr in data['basic']:
        if not all(arr[i] <= arr[i+1] for i in range(len(arr)-1)):
            return False
    
    # Check large arrays
    for arr in data['large']:
        if not all(arr[i] <= arr[i+1] for i in range(len(arr)-1)):
            return False
    
    # Check edge arrays
    if not isinstance(data['edge'], list):
        return False
    
    # Check targets
    if not all(key in data['targets'] for key in ['exists', 'not_exists', 'edge']):
        return False
    
    return True`,
  category: "Searching",
};
